/* ==========================================================================
   LECCIÓN 5: FUTURE - WILL VS. BE GOING TO (leccion5.js)
   Contenido pedagógico estructurado para 3º ESO.
   ========================================================================== */

window.Lecciones = window.Lecciones || {};

window.Lecciones.leccion5 = {
    id: "leccion5",
    titulo: "Future: Will vs. Be Going To",
    nivel: "Intermedio-Avanzado",
    emoji: "⏳",
    desc: "Aprende la diferencia exacta entre 'Will' y 'Be Going To', un tema clave en los exámenes de 3º de la ESO para hablar de planes, predicciones y decisiones.",
    
    // --- CONTENIDO DE TEORÍA EN HTML ---
    teoria: `
        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"><span>⏳</span> El Futuro en Inglés</h3>
            <p class="bloque-texto">
                En inglés, a diferencia del español, existen dos formas muy comunes de expresar el futuro: <strong>Will</strong> y <strong>Be Going To</strong>. Aunque ambas se traducen parecido, se usan en situaciones totalmente distintas.
            </p>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"><span>💭</span> 1. Future con "WILL" (Decisiones rápidas)</h3>
            <p class="bloque-texto">
                Usamos <strong>Will</strong> (y su forma negativa <strong>won't</strong>) para:<br>
                1. <strong>Decisiones espontáneas:</strong> Decisiones que tomas en el mismo instante en el que hablas.<br>
                2. <strong>Predicciones de opinión:</strong> Lo que tú crees que pasará (suele ir con <em>"I think..."</em>).<br>
                3. <strong>Promesas y ofertas:</strong> (ej. <em>"Te ayudaré"</em>).
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                    <div class="ejemplo-en">It's cold. I <strong>will close</strong> the window.</div>
                    <div class="ejemplo-es">Hace frío. Cerraré la ventana. (Decisión instantánea)</div>
                    <div class="ejemplo-pron">🗣 /its kóuld, ai wil klóus de wín-dou/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                    <div class="ejemplo-en">I think Spain <strong>will win</strong> the match.</div>
                    <div class="ejemplo-es">Creo que España ganará el partido. (Predicción de opinión)</div>
                    <div class="ejemplo-pron">🗣 /ai fink espéin wil win de mach/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"><span>📅</span> 2. Future con "BE GOING TO" (Planes pensados)</h3>
            <p class="bloque-texto">
                Usamos <strong>Be Going To</strong> (sujeto + am/is/are + going to + verbo) para:<br>
                1. <strong>Planes e intenciones:</strong> Cosas que ya habías decidido y organizado **antes** de hablar.<br>
                2. <strong>Predicciones con evidencia física:</strong> Cuando ves una prueba clara en el presente de lo que va a ocurrir.
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">I <strong>am going to study</strong> medicine next year.</div>
                    <div class="ejemplo-es">Voy a estudiar medicina el año que viene. (Plan planificado)</div>
                    <div class="ejemplo-pron">🗣 /ai am góu-in tu es-tá-di mé-di-sin nekst íar/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">Look at those dark clouds! It <strong>is going to rain</strong>.</div>
                    <div class="ejemplo-es">¡Mira esas nubes oscuras! Va a llover. (Evidencia física clara)</div>
                    <div class="ejemplo-pron">🗣 /luk at dóus dark kláuds, it is góu-in tu réin/</div>
                </div>
            </div>
        </div>

        <div class="nota">
            <div class="nota-icono">💡</div>
            <div>
                <strong>¡Truco Infalible para el Examen!</strong><br>
                Si en la frase de examen aparece la expresión **"I think..."** (Yo creo...) o **"I hope..."** (Espero...), escribe siempre **WILL**.<br>
                Si por el contrario la frase empieza por **"Look!"** (¡Mira!) o **"Listen!"** (¡Escucha!), escribe siempre **BE GOING TO** porque te están enseñando una prueba física directa.
            </div>
        </div>
    `,
    
    // --- EJERCICIOS INTERACTIVOS ---
    ejercicios: [
        {
            tipo: "test",
            pregunta: "Completa la oración: 'I have decided! I <span class='hueco'>______</span> a new phone next week.'",
            opciones: ["will buy", "am going to buy", "buys"],
            correcta: "am going to buy",
            explicacion: "Se usa 'am going to buy' porque indica una decisión que ya ha sido tomada y planificada de antemano (I have decided!)."
        },
        {
            tipo: "test",
            pregunta: "Completa: 'I'm tired. I think I <span class='hueco'>______</span> to bed early tonight.'",
            opciones: ["will go", "am going to go", "goes"],
            correcta: "will go",
            explicacion: "Al aparecer 'I think' (yo creo), indica una predicción personal subjetiva o decisión del momento, por lo que se debe usar el futuro con 'will'."
        },
        {
            tipo: "ordenar",
            pregunta: "Ordena la frase de predicción con evidencia:",
            palabras: ["is", "to", "crash!", "going", "The", "car"],
            fraseCorrecta: "The car is going to crash!",
            explicacion: "Estructura de predicción obvia: Sujeto (The car) + is + going to + verbo infinitivo (crash!)."
        }
    ],
    
    // --- CONVERSACIÓN / ROLEPLAY ---
    conversacion: {
        rol: "Fin de Curso 🥳",
        escenario: "Hablando de los planes para las vacaciones",
        instruccion: "Tu profesora te pregunta sobre lo que vas a hacer este verano al acabar 3º de la ESO. ¡Cuéntale tus planes!",
        ayuda: "Utiliza 'I am going to...' para planes seguros o 'I think I will...' para ideas espontáneas.",
        dialogos: [
            {
                en: "School is finishing soon! What are your plans for this summer?",
                es: "¿Las clases terminan pronto! ¿Cuáles son tus planes para este verano?",
                pron: "eskúul is pí-ni-shing súun! wat ar iur plans for dis sá-mer?",
                emoji: "👩‍🏫"
            },
            {
                en: "That sounds amazing! Are you going to travel anywhere with your family?",
                es: "¡Eso suena increíble! ¿Vas a viajar a algún lado con tu familia?",
                pron: "dat sáunds a-méi-zing! ar iú góu-in tu trá-vel é-ni-wer wid iur pá-mi-li?",
                emoji: "✈️"
            },
            {
                en: "Great! I hope you have an incredible vacation. See you in September!",
                es: "¡Fantástico! Espero que pases unas vacaciones increíbles. ¡Nos vemos en septiembre!",
                pron: "gréit! ai jóup iú jav an in-kré-di-bel vei-kéi-shon, síi iú in sep-tém-ber!",
                emoji: "🎒"
            }
        ]
    }
};
