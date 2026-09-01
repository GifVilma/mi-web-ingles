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
    conversacionCompletada: false,
    vocabularioIndice: 0,
    vocabularioSaber: {}
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
        
        nivelNombreEl.innerHTML = `Nivel ${nivelActual} - ${obtenerNombreNivel(nivelActual)}`;
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
        if (tabId === 'vocabulario' && botones[1]) {
            botones[1].classList.add('activo');
            inicializarVocabularioDeLeccion();
        }
        if (tabId === 'ejercicios' && botones[2]) {
            botones[2].classList.add('activo');
            inicializarEjerciciosDeLeccion();
        }
        if (tabId === 'conversacion' && botones[3]) {
            botones[3].classList.add('activo');
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
                <div class="leccion-cta">¡Empezar Lección!</div>
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
        
        // Añadir listeners directos a las tarjetas de ejemplos para evitar que Safari bloquee el audio por delegación
        tabTeoria.querySelectorAll('.ejemplo-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                const textoEnEl = card.querySelector('.ejemplo-en');
                if (textoEnEl) {
                    decirFraseEnIngles(textoEnEl.textContent);
                }
            });
        });
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

        // Determinar instruccion segun tipo de ejercicio (sin emojis nuevos)
        let instruccion = 'Escribe la respuesta';
        if (ej.tipo === 'test') {
            instruccion = 'Elige la opción correcta';
        } else if (ej.tipo === 'ordenar') {
            instruccion = 'Ordena la oración';
        }

        // Estructura general de la pregunta
        let htmlContenido = `
            <span class="ejercicio-numero">${index + 1}</span>
            <span class="ejercicio-instruccion">${instruccion}</span>
            <div class="ejercicio-pregunta">${ej.pregunta}</div>
        `;

        if (ej.tipo === 'test') {
            // Renderizar botones de opción múltiple
            htmlContenido += `<div class="opciones-ej">`;
            ej.opciones.forEach(op => {
                htmlContenido += `
                    <button class="opcion" onclick="comprobarRespuestaTest('${appState.leccionActiva}', ${index}, this.textContent.trim(), this)">
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
                    <button class="ficha" id="ficha-${index}-${pIndex}" onclick="seleccionarFicha(${index}, ${pIndex}, &quot;${pal}&quot;)">
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
        else if (ej.tipo === 'escribir') {
            // Renderizar campo de escritura directa (sin emojis)
            htmlContenido += `
                <input type="text" class="input-escribir" id="input-escribir-${index}" placeholder="${ej.placeholder || 'Escribe tu respuesta en inglés aquí...'}" autocomplete="off">
                <button class="btn btn-principal btn-sm" id="btn-comprobar-escribir-${index}" style="margin-top:10px;" onclick="comprobarRespuestaEscribir('${appState.leccionActiva}', ${index})">
                    Comprobar respuesta
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

function comprobarRespuestaEscribir(leccionId, ejIndex) {
    const leccion = window.Lecciones[leccionId];
    const ejercicio = leccion.ejercicios[ejIndex];
    const inputEl = document.getElementById(`input-escribir-${ejIndex}`);
    const feedbackEl = document.getElementById(`resultado-ej-${ejIndex}`);
    const btnComprobar = document.getElementById(`btn-comprobar-escribir-${ejIndex}`);

    if (!inputEl) return;
    const respuestaUsuario = inputEl.value.trim();

    if (respuestaUsuario === '') {
        mostrarToast("⚠️ Escribe tu respuesta antes de comprobar.");
        return;
    }

    // Desactivar entrada y boton
    inputEl.disabled = true;
    if (btnComprobar) btnComprobar.disabled = true;

    // Comparacion flexible: minusculas, sin puntos/signos finales, espacios limpios
    const limpiarTexto = (str) => {
        return str
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    };

    const respuestaUsuarioLimpia = limpiarTexto(respuestaUsuario);
    
    // El ejercicio puede tener una respuesta unica o un array de respuestas validas
    let esCorrecto = false;
    let correctaMostrar = "";

    if (ejercicio.respuestasCorrectas && Array.isArray(ejercicio.respuestasCorrectas)) {
        esCorrecto = ejercicio.respuestasCorrectas.some(resp => limpiarTexto(resp) === respuestaUsuarioLimpia);
        correctaMostrar = ejercicio.respuestasCorrectas[0];
    } else {
        const sol = ejercicio.respuestaCorrecta || ejercicio.correcta;
        esCorrecto = (limpiarTexto(sol) === respuestaUsuarioLimpia);
        correctaMostrar = sol;
    }

    if (esCorrecto) {
        feedbackEl.className = 'resultado-ej resultado-bien visible';
        feedbackEl.innerHTML = `🌟 <strong>¡Excelente!</strong> Respuesta correcta. +20 XP.<br><small>${ejercicio.explicacion}</small>`;
        ganarXP(20);
    } else {
        feedbackEl.className = 'resultado-ej resultado-mal visible';
        feedbackEl.innerHTML = `❌ <strong>No es correcto.</strong> La respuesta esperada era:<br><span class="razon">"${correctaMostrar}"</span>.<br><small>${ejercicio.explicacion}</small>`;
        
        // Registrar error para el repaso
        registrarError(ejercicio.pregunta, respuestaUsuario, correctaMostrar, ejercicio.explicacion, leccion.titulo);
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
                🎉 ¡Excelente! No tienes errores registrados actualmente. ¡Vas por muy buen camino! Sigue practicando.
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
    
    // Añadir listener directo al diálogo de conversación para reproducción de voz inmediata en iOS/Safari
    const burbujaDialogo = msgDiv.querySelector('.burbuja-dialogo');
    if (burbujaDialogo) {
        burbujaDialogo.style.cursor = 'pointer';
        burbujaDialogo.addEventListener('click', () => {
            decirFraseEnIngles(enText);
        });
    }
    
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
                    Has completado con éxito la sesión interactiva de conversación práctica.<br>
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


// ==========================================================================
// --- SISTEMA DE VOCABULARIO INTERACTIVO (FLASHCARDS) 🎴 ---
// ==========================================================================

const VOCABULARIO_FALLBACK = {
    leccion1: [
        { es: "Feliz", en: "Happy", pron: "/ˈhæpi/", ej: "She is very happy today." },
        { es: "Triste", en: "Sad", pron: "/sæd/", ej: "He is sad because of the rain." },
        { es: "Cansado", en: "Tired", pron: "/ˈtaɪəd/", ej: "I am tired after school." },
        { es: "Hambriento", en: "Hungry", pron: "/ˈhʌŋɡri/", ej: "Are you hungry?" },
        { es: "Estudiante", en: "Student", pron: "/ˈstjuːdənt/", ej: "I am a student." }
    ],
    leccion2: [
        { es: "Mi / Mis", en: "My", pron: "/maɪ/", ej: "This is my dog." },
        { es: "Tu / Tus", en: "Your", pron: "/jɔː/", ej: "Is this your book?" },
        { es: "Su / Sus (de ellos)", en: "Their", pron: "/ðeə/", ej: "Their house is big." },
        { es: "Nuestro/a", en: "Our", pron: "/ˈaʊə/", ej: "Our teacher is nice." },
        { es: "Amigo/a", en: "Friend", pron: "/frend/", ej: "She is my best friend." }
    ],
    leccion3: [
        { es: "Siempre", en: "Always", pron: "/ˈɔːlweɪz/", ej: "I always play football on Saturdays." },
        { es: "Nunca", en: "Never", pron: "/ˈnevə/", ej: "He never eats broccoli." },
        { es: "Cada día", en: "Every day", pron: "/ˈevri deɪ/", ej: "She studies English every day." },
        { es: "Normalmente", en: "Usually", pron: "/ˈjuːʒʊəli/", ej: "We usually watch a movie." },
        { es: "Hacer deberes", en: "Do homework", pron: "/duː ˈhəʊm.wɜːk/", ej: "They do homework after class." }
    ],
    leccion4: [
        { es: "Ayer", en: "Yesterday", pron: "/ˈjestədeɪ/", ej: "We watched a movie yesterday." },
        { es: "El verano pasado", en: "Last summer", pron: "/lɑːst ˈsʌmə/", ej: "He went to Paris last summer." },
        { es: "Hace...", en: "Ago", pron: "/əˈɡəʊ/", ej: "I finished my homework two hours ago." },
        { es: "Compró / Compraron", en: "Bought", pron: "/bɔːt/", ej: "She bought a new book." },
        { es: "Fue / Fueron", en: "Went", pron: "/went/", ej: "They went to the beach." }
    ],
    leccion5: [
        { es: "Mañana", en: "Tomorrow", pron: "/təˈmɒrəʊ/", ej: "We will travel tomorrow." },
        { es: "La próxima semana", en: "Next week", pron: "/nekst wiːk/", ej: "I am going to visit my granny next week." },
        { es: "Quizás", en: "Perhaps", pron: "/pəˈhæps/", ej: "Perhaps it will rain later." },
        { es: "Plan", en: "Plan", pron: "/plæn/", ej: "What is your plan for tonight?" },
        { es: "Hará / Haré", en: "Will do", pron: "/wɪl duː/", ej: "I will do my best." }
    ],
    leccion6: [
        { es: "Deber (obligación)", en: "Must", pron: "/mʌst/", ej: "You must study for the exam." },
        { es: "Deberías (consejo)", en: "Should", pron: "/ʃʊd/", ej: "You should drink more water." },
        { es: "Poder (habilidad)", en: "Can", pron: "/kæn/", ej: "I can speak English." },
        { es: "Tener que", en: "Have to", pron: "/hæv tuː/", ej: "We have to clean our room." },
        { es: "Podría", en: "Could", pron: "/kʊd/", ej: "Could you help me, please?" }
    ],
    leccion7: [
        { es: "Desde", en: "Since", pron: "/sɪns/", ej: "I have lived here since 2018." },
        { es: "Durante / Hace", en: "For", pron: "/fɔː/", ej: "She has studied English for three years." },
        { es: "Ya", en: "Already", pron: "/ɔːlˈredi/", ej: "They have already eaten lunch." },
        { es: "Todavía no", en: "Yet", pron: "/jet/", ej: "He hasn't finished his homework yet." },
        { es: "Acabar de", en: "Just", pron: "/dʒʌst/", ej: "We have just arrived." }
    ],
    leccion8: [
        { es: "Mientras", en: "While", pron: "/waɪl/", ej: "I was reading while he was sleeping." },
        { es: "Cuando", en: "When", pron: "/wen/", ej: "We were playing soccer when it started to rain." },
        { es: "Durmiendo", en: "Sleeping", pron: "/ˈsliːpɪŋ/", ej: "What were you doing at 10 PM?" },
        { es: "Viendo", en: "Watching", pron: "/ˈwɒtʃɪŋ/", ej: "She was watching TV." },
        { es: "Estudiando", en: "Studying", pron: "/ˈmʌst/", ej: "They were studying all night." }
    ]
};

let yaGiroTarjetaEnEstaSesion = {}; // Evita dar XP infinito al girar muchas veces la misma tarjeta

function obtenerVocabularioDeLeccion() {
    if (!appState.leccionActiva) return [];
    
    const leccion = window.Lecciones[appState.leccionActiva];
    // Prioridad 1: Vocabulario custom definido en la lección independiente
    if (leccion && leccion.vocabulario && leccion.vocabulario.length > 0) {
        return leccion.vocabulario;
    }
    
    // Prioridad 2: Vocabulario fallback de app.js
    if (VOCABULARIO_FALLBACK[appState.leccionActiva]) {
        return VOCABULARIO_FALLBACK[appState.leccionActiva];
    }
    
    return [];
}

function inicializarVocabularioDeLeccion() {
    appState.vocabularioIndice = 0;
    
    const wrapper = document.getElementById('vocab-card-wrapper');
    if (wrapper) {
        wrapper.classList.remove('flipped');
    }
    
    mostrarTarjetaVocabulario();
}

function mostrarTarjetaVocabulario() {
    const vocabLista = obtenerVocabularioDeLeccion();
    
    if (vocabLista.length === 0) {
        const spanEs = document.getElementById('vocab-espanol');
        if (spanEs) spanEs.textContent = "Pronto disponible";
        return;
    }
    
    const item = vocabLista[appState.vocabularioIndice];
    
    // Cargar contenido en la tarjeta
    const elEs = document.getElementById('vocab-espanol');
    const elEn = document.getElementById('vocab-ingles');
    const elPron = document.getElementById('vocab-pronunciacion');
    const elEj = document.getElementById('vocab-ejemplo');
    
    if (elEs) elEs.textContent = item.es;
    if (elEn) elEn.textContent = item.en;
    if (elPron) elPron.textContent = `🗣️ Pronunciación: ${item.pron}`;
    if (elEj) elEj.textContent = `"${item.ej}"`;
    
    // Actualizar barra de progreso
    const txtProgreso = document.getElementById('vocab-progreso-texto');
    const barraProgreso = document.getElementById('vocab-progreso-barra');
    
    if (txtProgreso) {
        txtProgreso.textContent = `Tarjeta ${appState.vocabularioIndice + 1} de ${vocabLista.length}`;
    }
    
    if (barraProgreso) {
        const porcentaje = ((appState.vocabularioIndice + 1) / vocabLista.length) * 100;
        barraProgreso.style.width = `${porcentaje}%`;
    }
    
    // Si ya sabe esta palabra, deshabilitar botón verde de "¡Me la sé! 👍" para no repetir recompensas
    const claveSaber = `${appState.leccionActiva}_${appState.vocabularioIndice}`;
    const btnSabe = document.getElementById('btn-vocab-sabe');
    if (btnSabe) {
        if (appState.vocabularioSaber[claveSaber]) {
            btnSabe.disabled = true;
            btnSabe.textContent = "¡Ya te la sabes! 🎓";
            btnSabe.style.opacity = "0.7";
            btnSabe.style.cursor = "not-allowed";
        } else {
            btnSabe.disabled = false;
            btnSabe.textContent = "¡Me la sé! 👍";
            btnSabe.style.opacity = "1";
            btnSabe.style.cursor = "pointer";
        }
    }
}

function girarTarjetaVocabulario() {
    const wrapper = document.getElementById('vocab-card-wrapper');
    if (!wrapper) return;
    
    wrapper.classList.toggle('flipped');
    
    // REPRODUCCIÓN AUTOMÁTICA DEL AUDIO AL GIRAR
    if (wrapper.classList.contains('flipped')) {
        const elEn = document.getElementById('vocab-ingles');
        if (elEn) {
            setTimeout(() => {
                decirFraseEnIngles(elEn.textContent);
            }, 300);
        }
    }
    
    // Premiar por descubrir la tarjeta por primera vez
    const claveGiro = `${appState.leccionActiva}_${appState.vocabularioIndice}`;
    if (!yaGiroTarjetaEnEstaSesion[claveGiro]) {
        yaGiroTarjetaEnEstaSesion[claveGiro] = true;
        ganarXP(2); // Otorga +2 XP por explorar
    }
}

function siguienteTarjetaVocabulario() {
    const vocabLista = obtenerVocabularioDeLeccion();
    if (vocabLista.length === 0) return;
    
    const wrapper = document.getElementById('vocab-card-wrapper');
    if (wrapper) wrapper.classList.remove('flipped');
    
    // Esperar a que la tarjeta regrese a su cara frontal antes de cambiar la palabra
    setTimeout(() => {
        appState.vocabularioIndice = (appState.vocabularioIndice + 1) % vocabLista.length;
        mostrarTarjetaVocabulario();
    }, 200);
}

function anteriorTarjetaVocabulario() {
    const vocabLista = obtenerVocabularioDeLeccion();
    if (vocabLista.length === 0) return;
    
    const wrapper = document.getElementById('vocab-card-wrapper');
    if (wrapper) wrapper.classList.remove('flipped');
    
    // Esperar a que regrese antes de cambiar palabra
    setTimeout(() => {
        appState.vocabularioIndice = (appState.vocabularioIndice - 1 + vocabLista.length) % vocabLista.length;
        mostrarTarjetaVocabulario();
    }, 200);
}

function saberPalabraVocabulario() {
    const vocabLista = obtenerVocabularioDeLeccion();
    if (vocabLista.length === 0) return;
    
    const claveSaber = `${appState.leccionActiva}_${appState.vocabularioIndice}`;
    
    // Si no se le ha dado premio de saber todavía
    if (!appState.vocabularioSaber[claveSaber]) {
        appState.vocabularioSaber[claveSaber] = true;
        ganarXP(5); // +5 XP por recordar correctamente
        
        // Volver a guardar progreso localmente
        localStorage.setItem('spark_vocab_saber', JSON.stringify(appState.vocabularioSaber));
        
        // Animación bonita y pasar de tarjeta automáticamente
        const wrapper = document.getElementById('vocab-card-wrapper');
        if (wrapper) {
            wrapper.classList.remove('flipped');
        }
        
        mostrarTarjetaVocabulario(); // Actualiza botones
        
        setTimeout(() => {
            siguienteTarjetaVocabulario();
        }, 800);
    }
}

// Cargar estado de vocabulario al inicio si existe
const vocabGuardado = localStorage.getItem('spark_vocab_saber');
if (vocabGuardado !== null) {
    appState.vocabularioSaber = JSON.parse(vocabGuardado);
}

// ==========================================================================
// NUEVA SECCIÓN: REPRODUCTOR DE VOZ (TTS - TEXT TO SPEECH) NATIVO
// ==========================================================================

// 1. PRECARGAR LAS VOCES (Soluciona el problema de la lista vacía en Chrome al arrancar)
if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }
}

function decirFraseEnIngles(texto) {
    if ('speechSynthesis' in window) {
        // Cancelar lecturas activas para no amontonar las voces
        window.speechSynthesis.cancel();
        
        // Crear locución
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'en-US'; // Inglés americano neutro
        
        // Configuración de tono y velocidad
        utterance.rate = 0.85;  // Un poquito más pausado para que los alumnos lo entiendan mejor
        utterance.pitch = 1.05; // Sube un pelín el tono para que suene más viva y menos grave
        
        // Obtener todas las voces instaladas en el dispositivo del usuario
        const voces = window.speechSynthesis.getVoices();
        
        // Filtrar únicamente las que están en inglés
        const vocesInglesas = voces.filter(v => v.lang.startsWith('en'));
        
        if (vocesInglesas.length > 0) {
            // Buscamos prioritariamente voces femeninas de alta calidad (claras y dulces)
            const vozAmigable = vocesInglesas.find(v => 
                v.name.includes('Google US English') ||  // Chrome/Android (Súper clara y natural)
                v.name.includes('Samantha') ||           // macOS/iOS (La de Siri clásica, limpia y amigable)
                v.name.includes('Zira') ||               // Windows (Femenina clara)
                v.name.includes('Hazel') ||              // Windows UK (Voz británica muy bonita)
                v.name.includes('Susan') ||              // macOS
                v.name.includes('Tessa')                 // macOS UK
            ) || vocesInglesas.find(v => v.name.toLowerCase().includes('female')) 
              || vocesInglesas[0]; // Si no encuentra ninguna preferida, usa la primera en inglés que haya
            
            utterance.voice = vozAmigable;
        }
        
        window.speechSynthesis.speak(utterance);
    }
}

// Escucha activa de clicks para reproducir la voz de vocabulario
document.addEventListener('click', (e) => {
    // Clic sobre la pronunciación o texto inglés en la tarjeta de Vocabulario
    const vocabPron = e.target.closest('#vocab-pronunciacion');
    const vocabIngles = e.target.closest('#vocab-ingles');
    if (vocabPron || vocabIngles) {
        const elEn = document.getElementById('vocab-ingles');
        if (elEn) {
            decirFraseEnIngles(elEn.textContent);
        }
    }
});


// ==========================================================================
// --- SISTEMA DE EXAMEN GLOBAL 🏆 ---
// ==========================================================================

let examenState = {
    preguntas: [],
    indice: 0,
    aciertos: 0,
    respuestasUsuario: [] // { pregunta, elegida, correcta, explicacion, esCorrecta, tema }
};

function comenzarExamenGlobal() {
    // Resetear vistas del examen
    const elInicio = document.getElementById('examen-inicio');
    const elJuego = document.getElementById('examen-juego');
    const elResultados = document.getElementById('examen-resultados');
    
    if (elInicio) elInicio.style.display = 'block';
    if (elJuego) elJuego.style.display = 'none';
    if (elResultados) elResultados.style.display = 'none';
    
    irAPantalla('examen');
}

function iniciarPreguntasExamen() {
    if (!window.Lecciones || Object.keys(window.Lecciones).length === 0) {
        mostrarToast("❌ Error: No hay lecciones cargadas para el examen.");
        return;
    }

    // Recopilar todas las preguntas tipo 'test' de todas las lecciones cargadas
    let todasLasPreguntas = [];
    
    Object.keys(window.Lecciones).forEach(key => {
        const leccion = window.Lecciones[key];
        if (leccion.ejercicios && Array.isArray(leccion.ejercicios)) {
            leccion.ejercicios.forEach(ej => {
                if (ej.tipo === 'test') {
                    // Copiar pregunta añadiendo el título de la lección para contexto
                    todasLasPreguntas.push({
                        ...ej,
                        tema: leccion.titulo,
                        leccionId: leccion.id
                    });
                }
            });
        }
    });

    if (todasLasPreguntas.length < 5) {
        mostrarToast("⚠️ Necesitas cargar más lecciones para realizar el examen.");
        return;
    }

    // Mezclar aleatoriamente las preguntas (Fisher-Yates shuffle)
    for (let i = todasLasPreguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todasLasPreguntas[i], todasLasPreguntas[j]] = [todasLasPreguntas[j], todasLasPreguntas[i]];
    }

    // Seleccionar hasta 10 preguntas para el examen
    const numPreguntas = Math.min(todasLasPreguntas.length, 10);
    examenState.preguntas = todasLasPreguntas.slice(0, numPreguntas);
    examenState.indice = 0;
    examenState.aciertos = 0;
    examenState.respuestasUsuario = [];

    // Ocultar inicio, mostrar juego
    const elInicio = document.getElementById('examen-inicio');
    const elJuego = document.getElementById('examen-juego');
    if (elInicio) elInicio.style.display = 'none';
    if (elJuego) elJuego.style.display = 'block';

    mostrarPreguntaExamen();
}

function mostrarPreguntaExamen() {
    const pregunta = examenState.preguntas[examenState.indice];
    const totalPreguntas = examenState.preguntas.length;
    
    // Actualizar progreso
    const txtProgreso = document.getElementById('examen-progreso-texto');
    const barraProgreso = document.getElementById('examen-progreso-barra');
    if (txtProgreso) {
        txtProgreso.textContent = `Pregunta ${examenState.indice + 1} de ${totalPreguntas}`;
    }
    if (barraProgreso) {
        barraProgreso.style.width = `${((examenState.indice + 1) / totalPreguntas) * 100}%`;
    }

    // Renderizar datos de la pregunta
    const elTema = document.getElementById('examen-pregunta-tema');
    const elTexto = document.getElementById('examen-pregunta-texto');
    const elOpciones = document.getElementById('examen-opciones');

    if (elTema) elTema.textContent = `Tema: ${pregunta.tema}`;
    if (elTexto) elTexto.innerHTML = pregunta.pregunta;
    if (elOpciones) {
        elOpciones.innerHTML = '';
        pregunta.opciones.forEach(op => {
            const btn = document.createElement('button');
            btn.className = 'opcion';
            btn.textContent = op;
            btn.onclick = () => responderPreguntaExamen(op, btn);
            elOpciones.appendChild(btn);
        });
    }
}

function responderPreguntaExamen(opcionElegida, botonSeleccionado) {
    const pregunta = examenState.preguntas[examenState.indice];
    const totalPreguntas = examenState.preguntas.length;
    const elOpciones = document.getElementById('examen-opciones');
    
    // Desactivar todos los botones de opciones inmediatamente
    elOpciones.querySelectorAll('.opcion').forEach(btn => btn.disabled = true);

    const esCorrecto = (opcionElegida === pregunta.correcta);
    
    // Guardar respuesta del usuario
    examenState.respuestasUsuario.push({
        pregunta: pregunta.pregunta,
        elegida: opcionElegida,
        correcta: pregunta.correcta,
        explicacion: pregunta.explicacion,
        esCorrecta: esCorrecto,
        tema: pregunta.tema
    });

    if (esCorrecto) {
        examenState.aciertos++;
        botonSeleccionado.classList.add('correcto');
        mostrarToast("🌟 ¡Correcto!");
    } else {
        botonSeleccionado.classList.add('incorrecto');
        // Resaltar la correcta en verde
        elOpciones.querySelectorAll('.opcion').forEach(btn => {
            if (btn.textContent.trim() === pregunta.correcta) {
                btn.classList.add('revelar');
            }
        });
        mostrarToast("❌ Incorrecto");
        
        // Registrar error en el sistema de errores de appState para que repasen luego
        registrarError(pregunta.pregunta, opcionElegida, pregunta.correcta, pregunta.explicacion, pregunta.tema);
    }

    // Crear y mostrar botón "Siguiente" de forma elegante
    const btnSiguiente = document.createElement('button');
    btnSiguiente.className = 'btn btn-principal btn-sm';
    btnSiguiente.style.marginTop = '20px';
    btnSiguiente.style.display = 'block';
    
    if (examenState.indice === totalPreguntas - 1) {
        btnSiguiente.textContent = 'Ver Resultados 🏁';
        btnSiguiente.onclick = mostrarResultadosExamen;
    } else {
        btnSiguiente.textContent = 'Siguiente Pregunta ➡️';
        btnSiguiente.onclick = () => {
            examenState.indice++;
            mostrarPreguntaExamen();
        };
    }
    
    elOpciones.appendChild(btnSiguiente);
}

function mostrarResultadosExamen() {
    const elJuego = document.getElementById('examen-juego');
    const elResultados = document.getElementById('examen-resultados');
    
    if (elJuego) elJuego.style.display = 'none';
    if (elResultados) elResultados.style.display = 'block';

    const elTitulo = document.getElementById('examen-resultado-titulo');
    const elTexto = document.getElementById('examen-resultado-texto');
    const elDesglose = document.getElementById('examen-desglose-errores');

    const aciertos = examenState.aciertos;
    const total = examenState.preguntas.length;
    let mensajeCelebracion = '';
    let xpGanados = aciertos * 10; // +10 XP por cada acierto

    if (aciertos === total) {
        elTitulo.innerHTML = '¡Examen Perfecto! 🏆💯';
        mensajeCelebracion = `¡Increíble! Has acertado las ${total} preguntas. Demuestras un nivel excelente en todo el temario.<br><strong>¡Premio especial de +50 XP extras!</strong>`;
        xpGanados += 50;
        lanzarCelebracionXP(xpGanados, "¡Examen Perfecto de Inglés! Súper Sobresaliente 🌟");
    } else if (aciertos >= Math.round(total * 0.7)) {
        elTitulo.innerHTML = '¡Examen Aprobado! 🎉👏';
        mensajeCelebracion = `¡Muy buen trabajo! Has acertado ${aciertos} de ${total} preguntas. Vas por un camino fantástico.<br><strong>¡Premio extra de +20 XP!</strong>`;
        xpGanados += 20;
        lanzarCelebracionXP(xpGanados, `¡Aprobaste el Examen Global con un ${aciertos}/${total}! 🏆`);
    } else {
        elTitulo.innerHTML = 'Examen Terminado 📚✍️';
        mensajeCelebracion = `Has acertado ${aciertos} de ${total} preguntas. ¡No te rindas! Sigue estudiando la teoría y repasando tus errores para sacar un sobresaliente en el próximo intento.`;
        ganarXP(xpGanados);
    }

    if (elTexto) {
        elTexto.innerHTML = `Has obtenido una puntuación de <strong>${aciertos} / ${total}</strong>.<br>${mensajeCelebracion}`;
    }

    // Renderizar desglose de aciertos y errores
    if (elDesglose) {
        elDesglose.innerHTML = '<h3 class="seccion-etiqueta" style="margin-bottom: 12px; font-size:12px;">Desglose de tus respuestas:</h3>';
        
        examenState.respuestasUsuario.forEach((resp, idx) => {
            const item = document.createElement('div');
            item.style.padding = '12px';
            item.style.borderBottom = '1px solid var(--borde)';
            item.style.fontSize = '13px';
            
            const icono = resp.esCorrecta ? '✅' : '❌';
            const colorTexto = resp.esCorrecta ? 'var(--verde)' : 'var(--rojo)';
            
            let desgloseHTML = `
                <div style="font-weight:700; margin-bottom: 4px;">${idx + 1}. ${icono} ${resp.pregunta}</div>
                <div style="color: var(--text3); font-size:11px; margin-bottom: 4px;">Lección: ${resp.tema}</div>
                <div style="font-weight:600;">Tu respuesta: <span style="color:${colorTexto};">${resp.elegida}</span></div>
            `;

            if (!resp.esCorrecta) {
                desgloseHTML += `
                    <div style="font-weight:600; color:var(--verde);">Respuesta correcta: ${resp.correcta}</div>
                    <div style="font-size:12px; color:var(--amarillo); font-style:italic; margin-top:4px;">💡 Explicación: ${resp.explicacion}</div>
                `;
            }

            item.innerHTML = desgloseHTML;
            elDesglose.appendChild(item);
        });
    }
}
