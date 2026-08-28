/* ==========================================================================
   LECCIÓN 9: CONDITIONALS (leccion9.js)
   Contenido pedagógico estructurado para 3º ESO.
   ========================================================================== */

window.Lecciones = window.Lecciones || {};

window.Lecciones.leccion9 = {
    id: "leccion9",
    titulo: "Conditionals",
    nivel: "Avanzado (3º ESO)",
    emoji: "🧩",
    desc: "Domina las estructuras condicionales (Zero, First y Second) para expresar hechos reales, planes futuros y situaciones imaginarias.",
    
    // --- CONTENIDO DE TEORÍA EN HTML ---
    teoria: `
        <div class="bloque-explicacion">
            <h3 class="bloque-titulo">Introducción a los Condicionales</h3>
            <p class="bloque-texto">
                En inglés, las oraciones condicionales sirven para expresar que si se cumple una condición, ocurre un resultado. Se componen de dos partes: la frase con <strong>If</strong> (condición) y la frase de resultado. El orden de las frases no importa, pero si pones <strong>If</strong> al principio, debes colocar una coma antes de la segunda parte.
            </p>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo">Zero Conditional</h3>
            <p class="bloque-texto">
                Se utiliza para hablar de <strong>verdades generales, leyes científicas o hechos reales</strong> que siempre se cumplen. <br />
                Estructura: <strong>If + Present Simple, Present Simple</strong>
            </p>
            
            <div class="ejemplos-grid">
                <!-- ZERO CONDITIONAL -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>If + Present Simple ➔ Present Simple</strong><br />
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: If you heat ice, it melts (Si calientas hielo, se derrite), If you run, you get tired (Si corres, te cansas)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--azul); margin-bottom: 20px;">
                    <div class="ejemplo-en">If you heat ice, it melts.</div>
                    <div class="ejemplo-es">Si calientas hielo, se derrite.</div>
                    <div class="ejemplo-pron">🗣️ /if iú jíit áis, it melts/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo">First Conditional</h3>
            <p class="bloque-texto">
                Se utiliza para hablar de <strong>situaciones futuras que son muy probables o posibles</strong> si se cumple una condición en el presente.<br />
                Estructura: <strong>If + Present Simple, Will + Verbo normal</strong>
            </p>
            
            <div class="ejemplos-grid">
                <!-- FIRST CONDITIONAL -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>If + Present Simple ➔ Will + Verbo normal</strong><br />
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: If it rains, we will stay home (Si llueve, nos quedaremos en casa), If you study, you will pass (Si estudias, aprobarás)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                    <div class="ejemplo-en">If it rains tomorrow, we will stay at home.</div>
                    <div class="ejemplo-es">Si llueve mañana, nos quedaremos en casa.</div>
                    <div class="ejemplo-pron">🗣️ /if it réins tu-má-rou, wi wil estéi at jóum/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                    <div class="ejemplo-en">If you study hard, you will pass the exam.</div>
                    <div class="ejemplo-es">Si estudias mucho, aprobarás el examen.</div>
                    <div class="ejemplo-pron">🗣️ /if iú es-tá-di jard, iú wil pas de eg-sám/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo">Second Conditional</h3>
            <p class="bloque-texto">
                Se utiliza para hablar de <strong>situaciones imaginarias, hipotéticas o irreales</strong> en el presente o futuro. También se usa para dar consejos.<br />
                Estructura: <strong>If + Past Simple, Would + Verbo normal</strong>
            </p>
            
            <div class="ejemplos-grid">
                <!-- SECOND CONDITIONAL -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>If + Past Simple ➔ Would + Verbo normal</strong><br />
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: If I had money, I would buy a car (Si tuviera dinero, compraría un coche), If I won the lottery (Si ganara la lotería)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--verde); margin-bottom: 20px;">
                    <div class="ejemplo-en">If I had more money, I would buy a car.</div>
                    <div class="ejemplo-es">Si tuviera más dinero, compraría un coche.</div>
                    <div class="ejemplo-pron">🗣️ /if ai jad mor má-ni, ai uud bái a kar/</div>
                </div>
            </div>
        </div>

        <div class="nota">
            <div class="nota-icono">⚠️</div>
            <div>
                <strong>¡La trampa del "If I were you"!</strong><br />
                En el condicional imaginario (Second Conditional), la regla formal de la gramática inglesa exige usar <strong>were</strong> en lugar de <em>was</em> para todas las personas (incluyendo <em>I, He, She, It</em>). Es la trampa típica de examen:<br />
                ❌ <em>If I was rich...</em> (Informal)<br />
                ✔️ <strong>If I were rich, I would travel.</strong> (Correcto en exámenes)<br />
                ✔️ <strong>If I were you, I would study more.</strong> (Si yo fuera tú, estudiaría más - Estructura para dar consejos)
            </div>
        </div>
    `,
    
    // --- EJERCICIOS INTERACTIVOS ---
    ejercicios: [
        {
            tipo: "test",
            pregunta: "Completa la frase: If it <span class='hueco'>______</span> sunny tomorrow, we will go to the beach.",
            opciones: ["is", "will be", "was"],
            correcta: "is",
            explicacion: "En el First Conditional, la frase con 'If' debe ir en Present Simple ('is') y la frase de resultado con will ('will go')."
        },
        {
            tipo: "test",
            pregunta: "Completa la oración: If I <span class='hueco'>______</span> more money, I would buy a computer.",
            opciones: ["have", "had", "would have"],
            correcta: "had",
            explicacion: "En el Second Conditional, la frase con 'If' lleva Past Simple ('had') y la frase de resultado lleva would ('would buy')."
        },
        {
            tipo: "test",
            pregunta: "Completa con el caso especial: If I <span class='hueco'>______</span> you, I would talk to the teacher.",
            opciones: ["was", "were", "am"],
            correcta: "were",
            explicacion: "En el Second Conditional, con el pronombre 'I' se usa formalmente 'were' en lugar de 'was', especialmente en la estructura de consejos 'If I were you'."
        },
        {
            tipo: "test",
            pregunta: "Completa la verdad científica: If you heat water to 100 degrees, it <span class='hueco'>______</span>.",
            opciones: ["boils", "will boil", "boiled"],
            correcta: "boils",
            explicacion: "Se trata de un hecho científico (Zero Conditional), por lo que ambas partes de la oración deben estar en Present Simple ('heat' / 'boils')."
        },
        {
            tipo: "ordenar",
            pregunta: "Ordena la oración del First Conditional:",
            palabras: ["will", "study,", "If", "you", "pass.", "you"],
            fraseCorrecta: "If you study, you will pass.",
            explicacion: "La estructura del First Conditional empieza con If + sujeto (you) + verbo presente (study) + , + sujeto (you) + will + verbo normal (pass)."
        }
    ],
    
    // --- CONVERSACIÓN / ROLEPLAY ---
    conversacion: {
        rol: "El inventor del futuro 🚀",
        escenario: "Hablando con un científico sobre su máquina del tiempo",
        instruccion: "El Profesor Brown te presenta su máquina del tiempo y te hace preguntas imaginarias sobre el pasado y el futuro. ¡Usa tus condicionales para responder!",
        ayuda: "Usa el First Conditional para planes futuros ('If we travel, we will see...') o el Second Conditional para situaciones hipotéticas ('If I travelled... I would...').",
        dialogos: [
            {
                en: "Welcome to my laboratory! If you could travel to any year in the past, where would you go?",
                es: "¡Bienvenido a mi laboratorio! Si pudieras viajar a cualquier año del pasado, ¿adónde irías?",
                pron: "uél-kam tu mai lá-bro-to-ri! if iú kud trá-vel tu é-ni íar in de past, uer uud iú góu?",
                emoji: "👨‍🔬"
            },
            {
                en: "That is fantastic! If we travelled to that era, we would meet incredible historical figures. What will you do if the machine breaks down?",
                es: "¡Eso es fantástico! Si viajáramos a esa época, conoceríamos a figuras históricas increíbles. ¿Qué harás si la máquina se estropea?",
                pron: "dat is fan-tás-tik! if wi trá-veld tu dat í-ra, wi uud miit in-kré-di-bel jis-tó-ri-kal fí-guiurs. wat wil iú du if de ma-shíin bréiks daun?",
                emoji: "⚙️"
            },
            {
                en: "Don't worry! If it breaks down, I will fix it immediately. Are you ready to travel?",
                es: "¡No te preocupes! Si se rompe, la arreglaré inmediatamente. ¿Estás listo para viajar?",
                pron: "dont uó-ri! if it bréiks daun, ai wil fiks it i-mí-diat-li. ar iú ré-di tu trá-vel?",
                emoji: "⚡"
            }
        ]
    }
};
