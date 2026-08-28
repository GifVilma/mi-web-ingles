/* ==========================================================================
   LECCIÓN 8: PAST CONTINUOUS (leccion8.js)
   Contenido pedagógico estructurado para 3º ESO.
   Foco principal: Estructura, uso de was/were + -ing, y contraste con Past Simple (When / While).
   ========================================================================== */

window.Lecciones = window.Lecciones || {};

window.Lecciones.leccion8 = {
    id: "leccion8",
    titulo: "Past Continuous (Pasado Continuo)",
    nivel: "Intermedio (3º ESO)",
    emoji: "🎬",
    desc: "Aprende a describir acciones en progreso en el pasado y a usar 'when' y 'while' para combinarlas con el Past Simple.",
    
    // --- CONTENIDO DE TEORÍA EN HTML ---
    teoria: `
        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> ¿Qué es el Past Continuous?</h3>
            <p class="bloque-texto">
                El <strong>Past Continuous</strong> (Pasado Continuo) se utiliza para hablar de acciones que <strong>estaban ocurriendo</strong> (en progreso) en un momento concreto del pasado. Equivale a nuestro "yo estaba cantando", "tú estabas comiendo", etc.
            </p>
            
            <p class="bloque-texto">La fórmula mágica para construirlo es muy sencilla:</p>
            <div class="regla-formula" style="font-size: 15px; text-align: center; background: var(--bg3); padding: 15px; border-radius: var(--r); border-left: 4px solid var(--naranja);">
                <strong>Sujeto + was / were + Verbo acabado en -ING</strong>
            </div>

            <h4 class="seccion-etiqueta" style="margin-top: 20px;">¿Cuándo usamos WAS y cuándo WERE?</h4>
            <table class="tabla-tobe">
                <thead>
                    <tr>
                        <th>Pronombres</th>
                        <th>Auxiliar Pasado To Be</th>
                        <th>Ejemplo con verbo</th>
                        <th>Traducción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I, He, She, It</td>
                        <td><strong>was</strong></td>
                        <td>I <strong>was</strong> play<strong>ing</strong></td>
                        <td>Yo estaba jugando</td>
                    </tr>
                    <tr>
                        <td>You, We, They</td>
                        <td><strong>were</strong></td>
                        <td>They <strong>were</strong> watch<strong>ing</strong></td>
                        <td>Ellos estaban viendo / mirando</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> Oraciones Afirmativas</h3>
            <div class="ejemplos-grid">
                <div class="ejemplo-card">
                    <div class="ejemplo-en">At 8:00 PM yesterday, I was studying.</div>
                    <div class="ejemplo-es">Ayer a las 8:00 PM, yo estaba estudiando.</div>
                    <div class="ejemplo-pron">🗣️ /at éit pi-em iés-ter-dei, ai uos es-tá-di-ing/</div>
                </div>
                <div class="ejemplo-card">
                    <div class="ejemplo-en">They were playing video games all afternoon.</div>
                    <div class="ejemplo-es">Ellos estuvieron jugando a videojuegos toda la tarde.</div>
                    <div class="ejemplo-pron">🗣️ /déi uer pléi-ing ví-di-ou guéims óol áf-ter-nuun/</div>
                </div>
            </div>
        </div>

        <div class="negacion-card">
            <h3 class="negacion-titulo"> La Forma Negativa</h3>
            <p class="bloque-texto" style="color:var(--text2);">
                Para negar, simplemente añadimos <strong>not</strong> detrás del verbo To Be en pasado. Puedes usar las formas contraídas que son las más comunes en los exámenes. <br>
                Estructura: <strong>Sujeto + wasn't / weren't + Verbo en -ING</strong>
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                    <div class="ejemplo-en">She wasn't (was not) listening to the teacher.</div>
                    <div class="ejemplo-es">Ella no estaba escuchando al profesor.</div>
                    <div class="ejemplo-pron" style="background: var(--rojo);">🗣️ /shi uó-sent lís-ning tu de tí-cher/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                    <div class="ejemplo-en">We weren't (were not) sleeping when you called.</div>
                    <div class="ejemplo-es">Nosotros no estábamos durmiendo cuando llamaste.</div>
                    <div class="ejemplo-pron" style="background: var(--rojo);">🗣️ /wi uér-ent es-líi-ping uen iú kóold/</div>
                </div>
            </div>
        </div>

        <div class="pregunta-card">
            <h3 class="pregunta-titulo"> La Forma Interrogativa</h3>
            <p class="bloque-texto" style="color:var(--text2);">
                Igual que con el verbo To Be normal, ponemos el auxiliar <strong>was/were al principio</strong> de la pregunta.<br>
                Estructura: <strong>Was / Were + Sujeto + Verbo en -ING + ?</strong>
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">Were you doing your homework at midnight?</div>
                    <div class="ejemplo-es">¿Estabas haciendo tus deberes a medianoche?</div>
                    <div class="ejemplo-pron" style="background: var(--azul);">🗣️ /uer iú dú-ing iur jóum-uerk at míd-nait/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">Was he cooking dinner?</div>
                    <div class="ejemplo-es">¿Estaba él cocinando la cena?</div>
                    <div class="ejemplo-pron" style="background: var(--azul);">🗣️ /uos ji kú-king dín-er/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo">Preposiciones de MOVIMIENTO CONTINUO</h3>
            <p class="bloque-texto">
                Para describir un desplazamiento físico que estaba ocurriendo en un momento determinado del pasado, utilizamos estas preposiciones de trayecto:
            </p>
            
            <div class="ejemplos-grid">
                <!-- PREPOSICIÓN: ACROSS -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>Across</strong> Se usa para indicar que se cruza una superficie o línea de un lado a otro.<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: Across the street (Cruzar la calle), Across the bridge (A través del puente)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--azul); margin-bottom: 20px;">
                    <div class="ejemplo-en">She was walking across the bridge when it started to rain.</div>
                    <div class="ejemplo-es">Ella estaba cruzando el puente cuando empezó a llover.</div>
                    <div class="ejemplo-pron">🗣️ /shi was uó-kin a-krós de bridch uen it es-tár-ted tu réin/</div>
                </div>

                <!-- PREPOSICIÓN: TOWARDS -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>Towards</strong> Se usa para expresar movimiento en dirección a una persona, objeto o lugar concreto.<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: Towards the park (Hacia el parque), Towards me (Hacia mí)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--azul); margin-bottom: 20px;">
                    <div class="ejemplo-en">A big dog was running towards us.</div>
                    <div class="ejemplo-es">Un perro grande estaba corriendo hacia nosotros.</div>
                    <div class="ejemplo-pron">🗣️ /a big dog was rá-ning tu-uórds as/</div>
                </div>

                <!-- PREPOSICIÓN: ALONG -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>Along</strong> Se usa para indicar movimiento a lo largo de una línea, camino, carretera o río.<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: Along the river (A lo largo del río), Along the road (A lo largo de la carretera)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">We were driving along the road.</div>
                    <div class="ejemplo-es">Nosotros estábamos conduciendo a lo largo de la carretera.</div>
                    <div class="ejemplo-pron">🗣️ /wi uer drái-ving a-lóng de róud/</div>
                </div>
            </div>
        </div>
        
        <div class="nota">
            <div class="nota-icono">💡</div>
            <div>
                <strong>¡EL TRUCO DE EXAMEN ESTRELLA DE 3º ESO!</strong><br>
                En los exámenes de este curso, siempre te pedirán combinar el <strong>Past Simple</strong> y el <strong>Past Continuous</strong> en la misma frase usando <strong>WHEN</strong> (cuando) y <strong>WHILE</strong> (mientras). Aprende esta regla de oro:<br><br>
                📌 <strong>WHEN + Past Simple:</strong> Introduce una acción corta que "interrumpe" a otra más larga.<br>
                • <em>I was showering <strong>when</strong> the phone rang.</em> (Estaba duchándome cuando el teléfono sonó).<br><br>
                📌 <strong>WHILE + Past Continuous:</strong> Introduce la acción larga que estaba ocurriendo.<br>
                • <em>The phone rang <strong>while</strong> I was showering.</em> (El teléfono sonó mientras yo estaba duchándome).
            </div>
        </div>
    `,
    
    // --- EJERCICIOS INTERACTIVOS ---
    ejercicios: [
        {
            tipo: "test",
            pregunta: "Completa la oración: What <span class='hueco'>______</span> you doing yesterday at 5 PM?",
            opciones: ["was", "were", "did"],
            correcta: "were",
            explicacion: "Usamos 'were' porque el sujeto es 'you' (Were you doing...?)."
        },
        {
            tipo: "test",
            pregunta: "Elige la opción correcta: I was watching TV <span class='hueco'>______</span> my dad arrived home.",
            opciones: ["while", "when", "during"],
            correcta: "when",
            explicacion: "Usamos 'when' porque introduce la acción corta e inesperada en Past Simple que interrumpe la acción larga (arrived)."
        },
        {
            tipo: "ordenar",
            pregunta: "Ordena la frase de Past Continuous en negativa:",
            palabras: ["They", "weren't", "listening", "to", "music."],
            fraseCorrecta: "They weren't listening to music.",
            explicacion: "La estructura negativa correcta es: Sujeto (They) + auxiliar negativo (weren't) + verbo con -ing (listening) + complementos."
        }
    ],
    
    // --- CONVERSACIÓN / ROLEPLAY ---
    conversacion: {
        rol: "Testigo en la comisaría 🕵️‍♂️",
        escenario: "Explicando una coartada al detective",
        instruccion: "Un detective te está interrogando sobre lo que estabas haciendo ayer a las 9:00 PM cuando ocurrió el robo del siglo en el museo. ¡Defiéndete!",
        ayuda: "Utiliza estructuras de Past Continuous como 'I was watching', 'I was eating' o 'My parents were sleeping'.",
        dialogos: [
            {
                en: "Good morning. Tell me, what were you doing yesterday at 9:00 PM?",
                es: "Buenos días. Dígame, ¿qué estaba haciendo usted ayer a las 9:00 de la noche?",
                pron: "gud móor-ning. tel mi, uat uer iú dú-ing iés-ter-dei at nain pí-em?",
                emoji: "🕵️‍♂️"
            },
            {
                en: "Interesting. And what were your friends or family doing while you were at home?",
                es: "Interesante. ¿Y qué estaban haciendo tus amigos o familia mientras tú estabas en casa?",
                pron: "ín-tres-ting. and uat uer iur frends or fá-mi-li dú-ing uail iú uer at jóum?",
                emoji: "👥"
            },
            {
                en: "Okay, I believe you. It was raining when the alarm went off. Did you hear anything?",
                es: "De acuerdo, te creo. Estaba lloviendo cuando sonó la alarma. ¿Escuchaste algo?",
                pron: "óu-kei, ai bi-líiv iú. it uos réi-ning uen di a-láarm uent of. did iú jiar é-ni-tsing?",
                emoji: "🌧️"
            }
        ]
    }
};
