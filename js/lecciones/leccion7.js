/* ==========================================================================
   LECCIÓN 7: PRESENT PERFECT SIMPLE (leccion7.js)
   Contenido pedagógico estructurado para 3º ESO y Primaria.
   ========================================================================== */

window.Lecciones = window.Lecciones || {};

window.Lecciones.leccion7 = {
    id: "leccion7",
    titulo: "Present Perfect Simple",
    nivel: "Intermedio (3º ESO)",
    emoji: "📉",
    desc: "Aprende a hablar de tus experiencias y acciones pasadas que aún tienen importancia hoy usando Have/Has y el participio.",
    
    // --- CONTENIDO DE TEORÍA EN HTML ---\n
    teoria: `
        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> ¿Qué es el Present Perfect?</h3>
            <p class="bloque-texto">
                El <strong>Present Perfect</strong> conecta el pasado con el presente. Lo usamos principalmente para hablar de <strong>experiencias de vida</strong> (sin decir cuándo ocurrieron exactamentre) o acciones del pasado que tienen un resultado o importancia <strong>ahora mismo</strong>.
            </p>
            <p class="bloque-texto">
                En español equivale a decir: <em>"Yo he comido"</em>, <em>"Tú has viajado"</em>, <em>"Él ha estudiado"</em>.
            </p>
            
            <table class="tabla-tobe">
                <thead>
                    <tr>
                        <th>Sujeto</th>
                        <th>Auxiliar</th>
                        <th>Verbo (Participio)</th>
                        <th>Traducción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I / You / We / They</td>
                        <td><strong>have</strong> ('ve)</td>
                        <td>visited / eaten</td>
                        <td>Yo he visitado / comido...</td>
                    </tr>
                    <tr>
                        <td>He / She / It</td>
                        <td><strong>has</strong> ('s)</td>
                        <td>visited / eaten</td>
                        <td>Él/Ella ha visitado / comido...</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> Las Dos Reglas de Oro</h3>
            <p class="bloque-texto">
                1. <strong>La tercera persona usa HAS:</strong> Recuerda que con <em>He</em>, <em>She</em> e <em>It</em> debes cambiar "have" por <strong>has</strong>. ¡Esta es la trampa básica de los exámenes!<br>
                2. <strong>El Verbo Principal va en Participio:</strong>
            </p>
            <ul>
                <li class="bloque-texto">Si el verbo es <strong>Regular</strong>, le añadimos <strong>-ed</strong> (ej: <em>play → played</em>, <em>live → lived</em>).</li>
                <li class="bloque-texto">Si el verbo es <strong>Irregular</strong>, tienes que usar la <strong>3ª columna</strong> de la lista de verbos irregulares (ej: <em>go → went → <strong>gone</strong></em>, <em>eat → ate → <strong>eaten</strong></em>).</li>
            </ul>
            
            <div class="ejemplos-grid">
                <div class="ejemplo-card">
                    <div class="ejemplo-en">I have lost my keys.</div>
                    <div class="ejemplo-es">He perdido mis llaves (no las encuentro ahora).</div>
                    <div class="ejemplo-pron">🗣️ /ai jav lost mai kis/</div>
                </div>
                <div class="ejemplo-card">
                    <div class="ejemplo-en">She has traveled to London.</div>
                    <div class="ejemplo-es">Ella ha viajado a Londres (experiencia de su vida).</div>
                    <div class="ejemplo-pron">🗣️ /shi jas trá-veld tu lón-don/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> Palabras Clave de Examen (3º ESO)</h3>
            <p class="bloque-texto">
                En 3º de la ESO, la mayor parte del examen de Present Perfect consiste en colocar correctamente estas palabras:
            </p>
            <ul>
                <li class="bloque-texto"><strong>Just</strong> (Acabar de): Se pone entre el auxiliar y el verbo. <br><em>"I have <strong>just</strong> eaten"</em> (Acabo de comer).</li>
                <li class="bloque-texto"><strong>Already</strong> (Ya - en afirmativas): Se pone entre el auxiliar y el verbo. <br><em>"He has <strong>already</strong> done his homework"</em> (Él ya ha hecho sus deberes).</li>
                <li class="bloque-texto"><strong>Yet</strong> (Ya / Todavía no - en negativas y preguntas): Se pone <strong>siempre al final</strong> de la frase. <br><em>"I haven't finished <strong>yet</strong>"</em> (No he terminado todavía).</li>
                <li class="bloque-texto"><strong>Since</strong> (Desde - momento concreto): <em>"Since 2018"</em>, <em>"Since Monday"</em>.</li>
                <li class="bloque-texto"><strong>For</strong> (Durante - cantidad de tiempo): <em>"For 3 years"</em>, <em>"For five hours"</em>.</li>
            </ul>
        </div>

        <div class="negacion-card">
            <h3 class="negacion-titulo"> La Forma Negativa</h3>
            <p class="bloque-texto" style="color:var(--text2);">
                Añadimos <strong>not</strong> al auxiliar: <strong>haven't</strong> o <strong>hasn't</strong>. El verbo principal sigue estando en participio.<br>
                Estructura: <strong>Sujeto + haven't/hasn't + Verbo en Participio + Complementos</strong>
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                    <div class="ejemplo-en">We haven't seen that movie yet.</div>
                    <div class="ejemplo-es">No hemos visto esa película todavía.</div>
                    <div class="ejemplo-pron" style="background: var(--rojo);">🗣️ /wi já-vent sin dat mú-vi iet/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                    <div class="ejemplo-en">He hasn't written the email.</div>
                    <div class="ejemplo-es">Él no ha escrito el correo.</div>
                    <div class="ejemplo-pron" style="background: var(--rojo);">🗣️ /ji jás-ent rí-ten di i-méil/</div>
                </div>
            </div>
        </div>

        <div class="pregunta-card">
            <h3 class="pregunta-titulo"> La Forma Interrogativa</h3>
            <p class="bloque-texto" style="color:var(--text2);">
                Para preguntar, cambiamos el orden: colocamos <strong>Have/Has al principio</strong>, delante del sujeto.<br>
                Estructura: <strong>Have/Has + Sujeto + Verbo en Participio + Complementos + ?</strong>
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">Have you ever been to Rome?</div>
                    <div class="ejemplo-es">¿Has estado alguna vez en Roma?</div>
                    <div class="ejemplo-pron" style="background: var(--azul);">🗣️ /jav iú é-ver bin tu róum/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">Has she called you?</div>
                    <div class="ejemplo-es">¿Te ha llamado ella?</div>
                    <div class="ejemplo-pron" style="background: var(--azul);">🗣️ /jas shi kold iú/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo">Preposiciones de TIEMPO: For vs. Since</h3>
            <p class="bloque-texto">
                Para conectar el pasado con el presente indicando cuándo empezó una acción o cuánto tiempo ha durado, usamos estas dos preposiciones clave:
            </p>
            
            <div class="ejemplos-grid">
                <!-- PREPOSICIÓN: SINCE -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>Since</strong> Se usa para indicar el momento exacto en el que comenzó la acción (el punto de partida).<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: Since 2023 (Desde 2023), Since Monday (Desde el lunes), Since breakfast (Desde el desayuno)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                    <div class="ejemplo-en">I have studied here since 2023.</div>
                    <div class="ejemplo-es">Yo he estudiado aquí desde 2023.</div>
                    <div class="ejemplo-pron">🗣️ /ai jav es-tá-did jier sins tu táu-sand tuén-ti-zrii/</div>
                </div>

                <!-- PREPOSICIÓN: FOR -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>For</strong> Se usa para indicar una cantidad o duración total de tiempo (un período transcurrido).<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: For three years (Durante tres años), For ten minutes (Durante diez minutos), For a long time (Durante mucho tiempo)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                    <div class="ejemplo-en">I have studied here for three years.</div>
                    <div class="ejemplo-es">Yo he estudiado aquí durante tres años.</div>
                    <div class="ejemplo-pron">🗣️ /ai jav es-tá-did jier for zrii íars/</div>
                </div>
            </div>
        </div>


        <div class="nota">
            <div class="nota-icono">💡</div>
            <div>
                <strong>¡Diferencia clave para sobresaliente: Been vs Gone!</strong><br>
                Si vas a un sitio y vuelves, usas <strong>Been</strong>. Si vas a un sitio y te quedas allí (no has vuelto), usas <strong>Gone</strong>.<br>
                • <em>"My dad has <strong>been</strong> to Paris"</em> (Mi padre ha estado en París, pero ya está en casa).<br>
                • <em>"My dad has <strong>gone</strong> to Paris"</em> (Mi padre se ha ido a París, sigue allí de viaje).
            </div>
        </div>
    `,
    
    // --- EJERCICIOS INTERACTIVOS ---\n
    ejercicios: [
        {
            tipo: "test",
            pregunta: "Completa la oración: Lucas <span class='hueco'>______</span> already finished his school project.",
            opciones: ["have", "has", "is"],
            correcta: "has",
            explicacion: "Usamos 'has' porque 'Lucas' es tercera persona del singular (He), y 'finished' es el verbo en participio regular."
        },
        {
            tipo: "test",
            pregunta: "Elige la frase correcta con 'YET':",
            opciones: ["I have yet not finished my breakfast.", "I haven't finished my breakfast yet.", "I haven't yet finished my breakfast."],
            correcta: "I haven't finished my breakfast yet.",
            explicacion: "En Present Perfect, la palabra clave 'yet' (todavía no) se coloca siempre al final de la oración en frases negativas o preguntas."
        },
        {
            tipo: "test",
            pregunta: "Completa con Since o For: We have lived in Spain <span class='hueco'>______</span> five years.",
            opciones: ["since", "for", "during"],
            correcta: "for",
            explicacion: "Usamos 'for' porque 'five years' indica un período o cantidad de tiempo total (durante 5 años)."
        },
        {
            tipo: "ordenar",
            pregunta: "Ordena la oración: ¿Has visto tú alguna vez un ovni?",
            palabras: ["Have", "ever", "seen", "UFO?", "you", "a"],
            fraseCorrecta: "Have you ever seen a UFO?",
            explicacion: "En preguntas de experiencias personales con 'ever' (alguna vez), el orden correcto es: Have + sujeto (you) + ever + participio (seen) + complemento."
        }
    ],
    
    // --- CONVERSACIÓN / ROLEPLAY ---\n
    conversacion: {
        rol: "El Club de Aventureros 🎒",
        escenario: "Hablando con un amigo aventurero en el recreo",
        instruccion: "Tu amigo Mark es un apasionado de los viajes. Pregúntale y cuéntale qué cosas interesantes habéis hecho en vuestra vida.",
        ayuda: "Usa el Present Perfect con estructuras como 'I have traveled', 'Have you eaten...?' o 'I haven't done... yet'.",
        dialogos: [
            {
                en: "Hey! I have just returned from my trip to Egypt. I have seen the Pyramids! Have you ever traveled to Africa?",
                es: "¡Hola! Acabo de regresar de mi viaje a Egipto. ¡He visto las Pirámides! ¿Has viajado alguna vez a África?",
                pron: "jéi, ai jav jast ri-tárnd prom mai trip tu i-jipt, ai jav sin de pí-ra-mids, jav iú é-ver trá-veld tu á-fri-ka?",
                emoji: "🐪"
            },
            {
                en: "It is amazing! I have climbed mountains and I have eaten strange food there. Has your family ever done anything adventurous?",
                es: "¡Es increíble! He escalado montañas y he comido comida extraña allí. ¿Tu familia ha hecho alguna vez algo aventurero?",
                pron: "it is a-méi-sing, ai jav klaimb máun-teins and ai jav í-ten estréinch fúud der. jas iur fá-mi-li é-ver dan á-ni-ting ad-ven-chú-rus?",
                emoji: "🧗"
            },
            {
                en: "That sounds cool! We should organize an adventure camp together. We haven't planned our next weekend yet!",
                es: "¡Eso suena genial! Deberíamos organizar un campamento de aventuras juntos. ¡Todavía no hemos planeado nuestro próximo fin de semana!",
                pron: "dat sáunds kuul, wi shud or-ga-náis an ad-vén-chur kamp tu-gué-der. wi já-vent pland áur nekst wi-kénd iet!",
                emoji: "⛺"
            }
        ]
    }
};