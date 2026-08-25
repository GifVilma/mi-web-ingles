/* ==========================================================================
   MOTOR INTERACTIVO PRINCIPAL (app.js)
   Administra el progreso, las pantallas, las pestañas, y controla de forma
   dinámica el flujo de teoría, ejercicios y conversación.
   ========================================================================== */

// --- ESTADO GENERAL DE LA APLICACIÓN ---
let appState = {
    xp: 150,
    racha: 1,
    leccionActiva: null,
    tabActiva: 'teoria',
    errores: [],
    conversacionTurno: 0,
    conversacionCompletada: false
};

// Cargar estado inicial desde el navegador si existe
function cargarEstadoLocal() {
    const xpGuardada = localStorage.getItem('spark_xp');
    const rachaGuardada = localStorage.getItem('spark_racha');
    const erroresGuardados = localStorage.getItem('spark_errores');

    if (xpGuardada !== null) appState.xp = parseInt(xpGuardada);
    if (rachaGuardada !== null) appState.racha = parseInt(rachaGuardada);
    if (erroresGuardados !== null) appState.errores = JSON.parse(erroresGuardados);

    actualizarEstadisticasVisuales();
}

// Guardar progreso en el navegador
function guardarEstadoLocal() {
    localStorage.setItem('spark_xp', appState.xp);
    localStorage.setItem('spark_racha', appState.racha);
    localStorage.setItem('spark_errores', JSON.stringify(appState.errores));
}

// --- ACTUALIZACIONES DE INTERFAZ ---
function actualizarEstadisticasVisuales() {
    // Racha
    const rachaEl = document.getElementById('racha-valor');
    if (rachaEl) rachaEl.textContent = appState.racha;

    // Barra de XP y Niveles
    const nivelNombreEl = document.getElementById('nivel-nombre');
    const xpTextoEl = document.getElementById('xp-texto');
    const xpBarraEl = document.getElementById('xp-barra');

    if (nivelNombreEl && xpTextoEl && xpBarraEl) {
        const nivelActual = Math.floor(appState.xp / 500) + 1;
        const xpEnEsteNivel = appState.xp % 500;
        
        nivelNombreEl.innerHTML = `Nivel ${nivelActual} - ${obtenerNombreNivel(nivelActual)} 🌟`;
        xpTextoEl.textContent = `${xpEnEsteNivel} / 500 XP`;
        
        const porcentaje = (xpEnEsteNivel / 500) * 100;
        xpBarraEl.style.width = `${porcentaje}%`;
    }

    // Contador de errores
    const contErroresEl = document.getElementById('contador-errores');
    if (contErroresEl) {
        contErroresEl.textContent = appState.errores.length;
        if (appState.errores.length > 0) {
            contErroresEl.style.display = 'inline-block';
        } else {
            contErroresEl.style.display = 'none';
        }
    }
}

function obtenerNombreNivel(nivel) {
    if (nivel === 1) return "Principiante";
    if (nivel === 2) return "Aventurero";
    if (nivel === 3) return "Conversador";
    if (nivel === 4) return "Bilingüe Junior";
    return "Experto del Inglés";
}

// --- NAVEGACIÓN GENERAL DE PANTALLAS ---
function irAPantalla(pantallaId) {
    // Quitar activa de todas las pantallas
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    
    // Quitar activo de todos los botones de la barra lateral
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('activo'));

    // Activar pantalla seleccionada
    const pantallaEl = document.getElementById(`pantalla-${pantallaId}`);
    if (pantallaEl) pantallaEl.classList.add('activa');

    // Activar botón correspondiente en la barra lateral
    const botonActivo = document.getElementById(`btn-${pantallaId}`);
    if (botonActivo) botonActivo.classList.add('activo');

    // Si vamos al inicio, limpiar resetear barra lateral
    if (pantallaId === 'inicio') {
        const selector = document.getElementById('selector-lecciones');
        if (selector) selector.value = "";
    }

    // Si es pantalla de errores, renderizarlos
    if (pantallaId === 'errores') {
        renderizarErrores();
    }
}

// --- CONTROL DE PESTAÑAS (TABS) ---
function cambiarTab(tabId) {
    appState.tabActiva = tabId;

    // Quitar clases activas de botones y contenedores de pestaña
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('activo'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('activo'));

    // Encontrar botón según el índice/nombre de la pestaña
    const tabsContainer = document.querySelector('.tabs-leccion');
    if (tabsContainer) {
        const botones = tabsContainer.querySelectorAll('.tab-btn');
        if (tabId === 'teoria' && botones[0]) botones[0].classList.add('activo');
        if (tabId === 'ejercicios' && botones[1]) {
            botones[1].classList.add('activo');
            inicializarEjerciciosDeLeccion();
        }
        if (tabId === 'conversacion' && botones[2]) {
            botones[2].classList.add('activo');
            inicializarConversacionDeLeccion();
        }
    }

    // Activar contenedor correspondiente
    const panelEl = document.getElementById(`tab-${tabId}`);
    if (panelEl) panelEl.classList.add('activo');
}

// --- GENERAR TARJETAS EN EL DASHBOARD ---
function generarTarjetasLeccionesDashboard() {
    const contenedor = document.getElementById('contenedor-leccion-cards');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    // Si no hay lecciones registradas en el objeto global Lecciones
    if (!window.Lecciones || Object.keys(window.Lecciones).length === 0) {
        contenedor.innerHTML = '<p class="no-errores-mensaje">Cargando lecciones en la base...</p>';
        return;
    }

    Object.keys(window.Lecciones).forEach((key, index) => {
        const leccion = window.Lecciones[key];
        const card = document.createElement('div');
        
        // Todas las lecciones están desbloqueadas por defecto para facilitar el estudio dinámico
        const bloqueada = false;
        
        card.className = `leccion-card ${bloqueada ? 'bloqueada' : 'disponible'}`;
        if (!bloqueada) {
            card.onclick = () => cargarLeccion(key);
        }

        card.innerHTML = `
            <span class="leccion-num">Lección ${index + 1} • ${leccion.nivel}</span>
            <span class="leccion-emoji">${leccion.emoji}</span>
            <h4 class="leccion-nombre">${leccion.titulo}</h4>
            <p class="leccion-desc">${leccion.desc}</p>
            ${bloqueada ? `
                <div class="leccion-lock">🔒</div>
                <div class="leccion-cta" style="color: var(--text3)">Desbloquea con ${index * 200} XP</div>
            ` : `
                <div class="leccion-cta">¡Empezar Lección! </div>
            `}
        `;
        contenedor.appendChild(card);
    });
}

// --- CARGA DINÁMICA DE UNA LECCIÓN ---
function cargarLeccion(leccionId) {
    if (!window.Lecciones || !window.Lecciones[leccionId]) {
        mostrarToast("❌ Error: No se pudo cargar el contenido de la lección.");
        return;
    }

    const leccion = window.Lecciones[leccionId];
    appState.leccionActiva = leccionId;

    // Actualizar barra de selección para que muestre el valor correcto
    const selector = document.getElementById('selector-lecciones');
    if (selector) selector.value = leccionId;

    // Desbloquear botón "Lección Activa" de la barra lateral
    const btnLeccionActiva = document.getElementById('btn-leccion-activa');
    if (btnLeccionActiva) {
        btnLeccionActiva.disabled = false;
        btnLeccionActiva.classList.remove('disabled');
    }

    // 1. Renderizar Cabecera de Lección
    const cabeceraTitulo = document.getElementById('leccion-titulo-dinamico');
    const cabeceraDesc = document.getElementById('leccion-desc-dinamica');
    const cabeceraTag = document.getElementById('leccion-tag-dinamico');

    if (cabeceraTitulo) cabeceraTitulo.textContent = leccion.titulo;
    if (cabeceraDesc) cabeceraDesc.textContent = leccion.desc;
    if (cabeceraTag) cabeceraTag.textContent = `Lección Activa • ${leccion.nivel}`;

    // 2. Renderizar Teoría
    const tabTeoria = document.getElementById('tab-teoria');
    if (tabTeoria) {
        tabTeoria.innerHTML = leccion.teoria;
    }

    // Ir a la pantalla de lección y seleccionar pestaña Teoría
    irAPantalla('leccion');
    cambiarTab('teoria');

    mostrarToast(`📖 Cargada: ${leccion.titulo}`);
}

function seleccionarLeccionDesdeDesplegable(leccionId) {
    if (leccionId) {
        cargarLeccion(leccionId);
    }
}

// --- SISTEMA DE RECOMPENSAS (TOAST Y POPUP XP) ---
function mostrarToast(mensaje) {
    const toast = document.getElementById('toast-notificacion');
    if (toast) {
        toast.textContent = mensaje;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

function ganarXP(puntos) {
    appState.xp += puntos;
    guardarEstadoLocal();
    actualizarEstadisticasVisuales();
    mostrarToast(`✨ ¡Ganaste +${puntos} XP!`);
}

function lanzarCelebracionXP(puntos, mensaje) {
    appState.xp += puntos;
    guardarEstadoLocal();
    actualizarEstadisticasVisuales();

    const popup = document.getElementById('popup-celebracion-xp');
    const xpCant = document.getElementById('popup-xp-cantidad');
    const xpMsg = document.querySelector('.xp-pop .xp-msg');

    if (popup && xpCant) {
        xpCant.textContent = `+${puntos} XP`;
        if (xpMsg) xpMsg.textContent = mensaje || "¡Excelente trabajo! Lección dominada 🎉";
        popup.classList.add('show');
    }
}

function cerrarPopupXP() {
    const popup = document.getElementById('popup-celebracion-xp');
    if (popup) {
        popup.classList.remove('show');
    }
}

// --- MOTOR DE EJERCICIOS ---
let respuestasSeleccionadas = {}; // Guarda respuestas temporales del alumno

function inicializarEjerciciosDeLeccion() {
    const contenedor = document.getElementById('contenedor-ejercicios-dinamicos');
    if (!contenedor || !appState.leccionActiva) return;

    const leccion = window.Lecciones[appState.leccionActiva];
    contenedor.innerHTML = '';
    respuestasSeleccionadas = {};

    if (!leccion.ejercicios || leccion.ejercicios.length === 0) {
        contenedor.innerHTML = '<p class="no-errores-mensaje">Esta lección no incluye ejercicios interactivos todavía.</p>';
        return;
    }

    leccion.ejercicios.forEach((ej, index) => {
        const wrap = document.createElement('div');
        wrap.className = 'ejercicio-wrap';
        wrap.id = `ejercicio-${index}`;

        // Estructura general de la pregunta
        let htmlContenido = `
            <span class="ejercicio-numero">${index + 1}</span>
            <span class="ejercicio-instruccion">${ej.tipo === 'test' ? 'Elige la opción correcta' : 'Ordena la oración'}</span>
            <div class="ejercicio-pregunta">${ej.pregunta}</div>
        `;

        if (ej.tipo === 'test') {
            // Renderizar botones de opción múltiple
            htmlContenido += `<div class="opciones-ej">`;
            ej.opciones.forEach(op => {
                htmlContenido += `
                    <button class="opcion" onclick="comprobarRespuestaTest('${appState.leccionActiva}', ${index}, '${op}', this)">
                        ${op}
                    </button>
                `;
            });
            htmlContenido += `</div>`;
        } 
        else if (ej.tipo === 'ordenar') {
            // Renderizar banco de palabras y caja receptora
            htmlContenido += `
                <div class="palabras-respuesta" id="palabras-respuesta-${index}" onclick="deshacerUltimaFicha(${index})">
                    <span class="drop-hint" id="drop-hint-${index}">Haz clic en las fichas para ordenar la frase...</span>
                </div>
                <div class="palabras-banco" id="palabras-banco-${index}">
            `;
            
            // Palabras desordenadas
            ej.palabras.forEach((pal, pIndex) => {
                htmlContenido += `
                    <button class="ficha" id="ficha-${index}-${pIndex}" onclick="seleccionarFicha(${index}, ${pIndex}, '${pal}')">
                        ${pal}
                    </button>
                `;
            });

            htmlContenido += `
                </div>
                <button class="btn btn-principal btn-sm" id="btn-comprobar-orden-${index}" style="margin-top:10px;" onclick="comprobarRespuestaOrdenar('${appState.leccionActiva}', ${index})">
                    Comprobar frase 🔍
                </button>
            `;
        }

        // Bloque de feedback del ejercicio (oculto de inicio)
        htmlContenido += `
            <div class="resultado-ej" id="resultado-ej-${index}">
                <span class="resultado-icono"></span>
                <span class="resultado-mensaje"></span>
            </div>
        `;

        wrap.innerHTML = htmlContenido;
        contenedor.appendChild(wrap);
    });
}

// Comprobar ejercicio de opción múltiple (Test)
function comprobarRespuestaTest(leccionId, ejIndex, opcion, boton) {
    const leccion = window.Lecciones[leccionId];
    const ejercicio = leccion.ejercicios[ejIndex];
    const contenedorOpciones = boton.parentNode;
    const feedbackEl = document.getElementById(`resultado-ej-${ejIndex}`);

    // Desactivar todos los botones de este ejercicio para que no vuelvan a hacer clic
    contenedorOpciones.querySelectorAll('.opcion').forEach(b => b.disabled = true);

    const esCorrecto = (opcion === ejercicio.correcta);

    if (esCorrecto) {
        boton.classList.add('correcto');
        feedbackEl.className = 'resultado-ej resultado-bien visible';
        feedbackEl.innerHTML = `🌟 <strong>¡Increíble!</strong> ¡Respuesta correcta! +10 XP.<br><small>${ejercicio.explicacion}</small>`;
        ganarXP(10);
    } else {
        boton.classList.add('incorrecto');
        feedbackEl.className = 'resultado-ej resultado-mal visible';
        feedbackEl.innerHTML = `❌ <strong>¡Oh, no!</strong> La opción correcta era <span class="razon">${ejercicio.correcta}</span>.<br><small>${ejercicio.explicacion}</small>`;
        
        // Buscar el botón correcto para resaltarlo en verde como ayuda
        contenedorOpciones.querySelectorAll('.opcion').forEach(b => {
            if (b.textContent.trim() === ejercicio.correcta) {
                b.classList.add('revelar');
            }
        });

        // Registrar error para el repaso
        registrarError(ejercicio.pregunta, opcion, ejercicio.correcta, ejercicio.explicacion, leccion.titulo);
    }
}

// Interacción de ordenar fichas
let frasesOrdenadas = {}; // Almacena el array de palabras que el alumno va construyendo

function seleccionarFicha(ejIndex, pIndex, palabra) {
    if (!frasesOrdenadas[ejIndex]) frasesOrdenadas[ejIndex] = [];

    // Agregar palabra al array de la frase armada
    frasesOrdenadas[ejIndex].push({ pIndex, palabra });

    // Ocultar ficha original en el banco
    const fichaOriginal = document.getElementById(`ficha-${ejIndex}-${pIndex}`);
    if (fichaOriginal) fichaOriginal.classList.add('usada');

    // Quitar pista de arrastre si es la primera ficha
    const hint = document.getElementById(`drop-hint-${ejIndex}`);
    if (hint) hint.style.display = 'none';

    // Añadir ficha en la zona de respuesta
    const contenedorRespuesta = document.getElementById(`palabras-respuesta-${ejIndex}`);
    if (contenedorRespuesta) {
        contenedorRespuesta.classList.add('tiene-palabras');
        
        const nuevaFicha = document.createElement('button');
        nuevaFicha.className = 'ficha en-respuesta';
        nuevaFicha.id = `ficha-resp-${ejIndex}-${pIndex}`;
        nuevaFicha.textContent = palabra;
        
        contenedorRespuesta.appendChild(nuevaFicha);
    }
}

function deshacerUltimaFicha(ejIndex) {
    if (!frasesOrdenadas[ejIndex] || frasesOrdenadas[ejIndex].length === 0) return;

    // Obtener y remover la última palabra colocada
    const ultima = frasesOrdenadas[ejIndex].pop();

    // Eliminar el botón de la respuesta
    const fichaResp = document.getElementById(`ficha-resp-${ejIndex}-${ultima.pIndex}`);
    if (fichaResp) fichaResp.remove();

    // Volver a hacer visible la ficha en el banco
    const fichaOrig = document.getElementById(`ficha-${ejIndex}-${ultima.pIndex}`);
    if (fichaOrig) {
        fichaOrig.classList.remove('usada');
    }

    // Si ya no quedan fichas, mostrar la pista inicial de ayuda
    if (frasesOrdenadas[ejIndex].length === 0) {
        const hint = document.getElementById(`drop-hint-${ejIndex}`);
        if (hint) hint.style.display = 'block';
        
        const contenedorRespuesta = document.getElementById(`palabras-respuesta-${ejIndex}`);
        if (contenedorRespuesta) contenedorRespuesta.classList.remove('tiene-palabras');
    }
}

// Comprobar ejercicio de ordenar palabras
function comprobarRespuestaOrdenar(leccionId, ejIndex) {
    const leccion = window.Lecciones[leccionId];
    const ejercicio = leccion.ejercicios[ejIndex];
    const feedbackEl = document.getElementById(`resultado-ej-${ejIndex}`);
    const btnComprobar = document.getElementById(`btn-comprobar-orden-${ejIndex}`);

    if (!frasesOrdenadas[ejIndex] || frasesOrdenadas[ejIndex].length === 0) {
        mostrarToast("⚠️ Elige al menos una palabra antes de comprobar.");
        return;
    }

    const fraseArmada = frasesOrdenadas[ejIndex].map(item => item.palabra).join(' ');
    const esCorrecto = (fraseArmada.trim() === ejercicio.fraseCorrecta.trim());

    // Desactivar comprobar
    if (btnComprobar) btnComprobar.disabled = true;

    if (esCorrecto) {
        feedbackEl.className = 'resultado-ej resultado-bien visible';
        feedbackEl.innerHTML = `🌟 <strong>¡Fabuloso!</strong> Frase ordenada correctamente. +15 XP.<br><small>${ejercicio.explicacion}</small>`;
        ganarXP(15);
    } else {
        feedbackEl.className = 'resultado-ej resultado-mal visible';
        feedbackEl.innerHTML = `❌ <strong>No es correcto.</strong> La frase correcta es:<br><span class="razon">"${ejercicio.fraseCorrecta}"</span>.<br><small>${ejercicio.explicacion}</small>`;
        
        // Registrar error para el repaso
        registrarError(ejercicio.pregunta, fraseArmada, ejercicio.fraseCorrecta, ejercicio.explicacion, leccion.titulo);
    }
}

// --- SISTEMA DE REGISTRO DE ERRORES ---
function registrarError(pregunta, opcionAlumnno, correcta, explicacion, leccionTitulo) {
    // Verificar si el error ya está registrado para incrementar las veces falladas
    const errorExistente = appState.errores.find(err => err.pregunta === pregunta);

    if (errorExistente) {
        errorExistente.veces++;
    } else {
        appState.errores.push({
            id: 'err_' + Date.now() + Math.random().toString(36).substr(2, 5),
            pregunta: pregunta,
            opcionIncorrecta: opcionAlumnno,
            opcionCorrecta: correcta,
            explicacion: explicacion,
            leccion: leccionTitulo,
            veces: 1
        });
    }

    guardarEstadoLocal();
    actualizarEstadisticasVisuales();
}

function renderizarErrores() {
    const contenedor = document.getElementById('contenedor-errores');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    if (appState.errores.length === 0) {
        contenedor.innerHTML = `
            <div class="no-errores-mensaje">
                🎉 ¡Excelente! No tienes errores registrados actualmente. Tu hijo va por muy buen camino. Sigue practicando.
            </div>
        `;
        return;
    }

    // Ordenar errores por más veces falladas para repasar primero las más críticas
    const erroresOrdenados = [...appState.errores].sort((a, b) => b.veces - a.veces);

    erroresOrdenados.forEach(err => {
        const item = document.createElement('div');
        item.className = 'error-item';
        item.innerHTML = `
            <div class="error-veces" title="Veces fallada">${err.veces}x</div>
            <div class="error-cuerpo">
                <div class="error-titulo">${err.pregunta}</div>
                <div class="error-tipo">Tu respuesta: <span style="color:var(--rojo); text-decoration:line-through;">${err.opcionIncorrecta}</span> | Correcta: <span style="color:var(--verde); font-weight:bold;">${err.opcionCorrecta}</span></div>
                <div class="error-regla">💡 Explicación: ${err.explicacion}</div>
                <div style="font-size:11px; color:var(--text3); margin-top:6px; font-weight:700;">De la lección: ${err.leccion}</div>
            </div>
            <button class="btn btn-rojo btn-sm" onclick="resolverErrorLocal('${err.id}')">Resolver ✓</button>
        `;
        contenedor.appendChild(item);
    });
}

function resolverErrorLocal(errorId) {
    appState.errores = appState.errores.filter(err => err.id !== errorId);
    guardarEstadoLocal();
    actualizarEstadisticasVisuales();
    renderizarErrores();
    mostrarToast("🎉 ¡Tarjeta de error resuelta con éxito!");
    
    // Premiar con algo de XP por limpiar errores
    ganarXP(5);
}

// --- MOTOR DE CONVERSACIÓN (CHAT CON IA DE ROLEPLAY) ---
function inicializarConversacionDeLeccion() {
    const contenedorChat = document.getElementById('hilo-conversacion');
    if (!contenedorChat || !appState.leccionActiva) return;

    const leccion = window.Lecciones[appState.leccionActiva];
    contenedorChat.innerHTML = '';
    appState.conversacionTurno = 0;
    appState.conversacionCompletada = false;

    // Resetear panel de análisis
    const panelAnalis = document.getElementById('panel-analisis-conversacion');
    if (panelAnalis) panelAnalis.classList.remove('visible');

    // Configurar metadatos del roleplay
    const tag = document.getElementById('conversacion-escena-tag');
    const titulo = document.getElementById('conversacion-escena-titulo');
    const instruccion = document.getElementById('conversacion-escena-instruccion');
    const pista = document.getElementById('conversacion-pista');

    if (tag) tag.textContent = leccion.conversacion.rol;
    if (titulo) titulo.textContent = leccion.conversacion.escenario;
    if (instruccion) instruccion.textContent = leccion.conversacion.instruccion;
    if (pista) pista.textContent = `Consejo: ${leccion.conversacion.ayuda}`;

    // Mostrar el primer mensaje del interlocutor virtual (IA)
    const primerMensaje = leccion.conversacion.dialogos[0];
    agregarBurbujaMensaje('ia', primerMensaje.en, primerMensaje.es, primerMensaje.pron, primerMensaje.emoji);
}

function agregarBurbujaMensaje(remitente, enText, esText, pronText, emoji) {
    const contenedorChat = document.getElementById('hilo-conversacion');
    if (!contenedorChat) return;

    const msgDiv = document.createElement('div');
    msgDiv.className = `msj-dialogo ${remitente === 'ia' ? 'otro' : 'tuyo'}`;

    let avatar = remitente === 'ia' ? (emoji || '🤖') : '👦';
    let burbujaExtra = '';
    
    if (pronText) {
        burbujaExtra += `<div class="burbuja-pron">🗣️ ${pronText}</div>`;
    }
    if (esText) {
        burbujaExtra += `<div class="burbuja-trad">${esText}</div>`;
    }

    msgDiv.innerHTML = `
        <div class="avatar-msj">${avatar}</div>
        <div class="burbuja-dialogo">
            <strong>${enText}</strong>
            ${burbujaExtra}
        </div>
    `;

    contenedorChat.appendChild(msgDiv);
    
    // Auto-scroll hacia abajo
    contenedorChat.scrollTop = contenedorChat.scrollHeight;
}

function enviarMensajeConversacion() {
    const inputTextArea = document.getElementById('texto-respuesta-conversacion');
    if (!inputTextArea || !appState.leccionActiva || appState.conversacionCompletada) return;

    const textoUsuario = inputTextArea.value.trim();
    if (textoUsuario === '') {
        mostrarToast("⚠️ Escribe un mensaje antes de enviar.");
        return;
    }

    const leccion = window.Lecciones[appState.leccionActiva];
    
    // 1. Mostrar mensaje del usuario
    agregarBurbujaMensaje('usuario', textoUsuario, null, null, null);
    inputTextArea.value = ''; // Limpiar entrada

    // Incrementar turno
    appState.conversacionTurno++;

    // Desactivar entrada si ya se completó el escenario de diálogo
    const totalRespuestasPlanificadas = leccion.conversacion.dialogos.length;

    setTimeout(() => {
        if (appState.conversacionTurno < totalRespuestasPlanificadas) {
            // La IA responde con la siguiente línea planificada
            const siguienteDialogo = leccion.conversacion.dialogos[appState.conversacionTurno];
            agregarBurbujaMensaje('ia', siguienteDialogo.en, siguienteDialogo.es, siguienteDialogo.pron, siguienteDialogo.emoji);
        } else {
            // Completado el escenario de conversación
            appState.conversacionCompletada = true;
            
            // Mostrar panel de retroalimentación de la conversación con recomendaciones gramaticales
            const panelAnalis = document.getElementById('panel-analisis-conversacion');
            const textoAnalis = document.getElementById('texto-analisis-conversacion');
            
            if (panelAnalis && textoAnalis) {
                textoAnalis.innerHTML = `
                    <strong>¡Increíble conversación con el robot!</strong> 🎓<br><br>
                    Tu hijo ha completado con éxito la sesión interactiva de conversación práctica.<br>
                    📌 <strong>Aspectos clave evaluados:</strong><br>
                    - Comprensión lectora del escenario: 100% Correcto.<br>
                    - Uso correcto de la estructura temática central de esta lección.<br>
                    - Fluidez en el intercambio de respuestas cortas en inglés.<br><br>
                    <em>¡Sigue conversando en otros temas para desbloquear nuevas medallas y vocabulario!</em>
                `;
                panelAnalis.classList.add('visible');
                panelAnalis.scrollIntoView({ behavior: 'smooth' });
            }

            // Regalar una gran bonificación de XP
            lanzarCelebracionXP(50, `¡Increíble! Conversación de "${leccion.titulo}" completada con éxito 🎉`);
        }
    }, 1200);
}

// --- CARGA Y ARRANQUE DE LA PLATAFORMA ---
window.addEventListener('DOMContentLoaded', () => {
    cargarEstadoLocal();
    
    // Retrasar brevemente para esperar que carguen los scripts de lecciones independientes
    setTimeout(() => {
        generarTarjetasLeccionesDashboard();
    }, 200);
});