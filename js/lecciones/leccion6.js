/* ==========================================================================
   LECCIÓN 6: MODAL VERBS (leccion6.js)
   Contenido pedagógico estructurado para 3º ESO y Primaria.
   ========================================================================== */

window.Lecciones = window.Lecciones || {};

window.Lecciones.leccion6 = {
    id: "leccion6",
    titulo: "Modal Verbs",
    nivel: "Intermedio (3º ESO)",
    emoji: "📝",
    desc: "Aprende a expresar habilidad, prohibición, obligación y a dar consejos usando CAN, MUST, SHOULD y HAVE TO.",
    
    // --- CONTENIDO DE TEORÍA EN HTML ---\n
    teoria: `
        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> ¿Qué son los Modal Verbs?</h3>
            <p class="bloque-texto">
                Los <strong>verbos modales</strong> son verbos auxiliares que se usan para expresar habilidad, posibilidad, permiso, obligación o consejo. <br>
                En los exámenes de <strong>3º de la ESO</strong>, los profesores siempre evalúan las <strong>3 reglas de oro</strong> de los modales:
            </p>
            <div class="nota" style="background: var(--naranja-bg); border-color: var(--naranja-borde); margin-bottom: 20px;">
                <div class="nota-icono">⭐</div>
                <div>
                    <strong>Reglas de Oro de los Modales:</strong><br>
                    1. <strong>Nunca llevan "-s"</strong> en la tercera persona (He/She/It). <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;❌ <em>He shoulds study</em> &nbsp;&nbsp;✔️ <strong>He should study</strong><br>
                    2. Van seguidos de un verbo en <strong>infinitivo sin "to"</strong>.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;❌ <em>You must to go</em> &nbsp;&nbsp;✔️ <strong>You must go</strong><br>
                    3. No usan "do/does/did" para negar o preguntar.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;❌ <em>Do you can swim?</em> &nbsp;&nbsp;✔️ <strong>Can you swim?</strong>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> 1. CAN vs COULD (Habilidad y Permiso)</h3>
            <p class="bloque-texto">
                Usamos <strong>Can</strong> para expresar habilidad o permiso en el presente. <br>
                Usamos <strong>Could</strong> para el pasado (podía/pude) o para hacer peticiones muy educadas.
            </p>
            
            <div class="ejemplos-grid">
                <div class="ejemplo-card">
                    <div class="ejemplo-en">I can play the guitar.</div>
                    <div class="ejemplo-es">Yo sé (puedo) tocar la guitarra. (Presente)</div>
                    <div class="ejemplo-pron">🗣️ /ai kan pléi de gui-tár/</div>
                </div>
                <div class="ejemplo-card">
                    <div class="ejemplo-en">Could you open the window, please?</div>
                    <div class="ejemplo-es">¿Podrías abrir la ventana, por favor? (Educado)</div>
                    <div class="ejemplo-pron">🗣️ /kud iú óu-pen de uín-dou, pliiss/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"> 2. SHOULD / SHOULDN'T (Consejos)</h3>
            <p class="bloque-texto">
                Se traduce como <strong>"debería" / "no debería"</strong>. Es el verbo modal que se utiliza para dar consejos, sugerencias o recomendaciones en un examen.
            </p>
            
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">You should eat more vegetables.</div>
                    <div class="ejemplo-es">Deberías comer más verduras.</div>
                    <div class="ejemplo-pron" style="background: var(--azul);">🗣️ /iú shud iit mor védj-ta-bals/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">He shouldn't play video games all night.</div>
                    <div class="ejemplo-es">Él no debería jugar a videojuegos toda la noche.</div>
                    <div class="ejemplo-pron" style="background: var(--azul);">🗣️ /ji shúd-nt pléi ví-diou guéims ol náit/</div>
                </div>
            </div>
        </div>

        <div class="negacion-card">
            <h3 class="negacion-titulo"> 3. MUST vs HAVE TO (Obligación)</h3>
            <p class="bloque-texto" style="color:var(--text2);">
                Ambos expresan obligación fuerte. <strong>Must</strong> es una obligación que sientes tú o una regla escrita. <br>
                <strong>Have to</strong> (que no es modal puro, por eso lleva "to" y usa auxiliares) es una obligación externa impuesta por otra persona (tus padres, el colegio).
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                    <div class="ejemplo-en">I must study for the history test.</div>
                    <div class="ejemplo-es">Debo estudiar para el examen de historia. (Obligación interna)</div>
                    <div class="ejemplo-pron" style="background: var(--rojo);">🗣️ /ai mast es-tá-di for de jís-tri test/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                    <div class="ejemplo-en">We have to wear a uniform at school.</div>
                    <div class="ejemplo-es">Tenemos que llevar uniforme en el colegio. (Obligación externa/norma)</div>
                    <div class="ejemplo-pron" style="background: var(--rojo);">🗣️ /wi jav tu uéar a iú-ni-form at eskúul/</div>
                </div>
            </div>
        </div>

        <div class="nota">
            <div class="nota-icono">💡</div>
            <div>
                <strong>¡LA TRAMPA ESTRELLA DEL INSTITUTO! Mustn't vs Don't Have To</strong><br>
                En afirmativa significan casi lo mismo, pero en negativa cambian radicalmente:<br>
                • <strong>MUSTN'T = PROHIBICIÓN ESTRICTA.</strong> Está prohibido o es peligroso.<br>
                &nbsp;&nbsp;👉 <em>You mustn't smoke here</em> (No debes fumar aquí).<br>
                • <strong>DON'T / DOESN'T HAVE TO = NO ES NECESARIO / FALTA DE OBLIGACIÓN.</strong> Si quieres puedes hacerlo, pero no tienes la obligación.<br>
                &nbsp;&nbsp;👉 <em>Tomorrow is Sunday, you don't have to wake up early</em> (Mañana es domingo, no tienes por qué madrugar).
            </div>
        </div>
    `,
    
    // --- EJERCICIOS INTERACTIVOS ---
    ejercicios: [
        {
            tipo: "test",
            pregunta: "Completa la oración: It is a hospital. You <span class='hueco'>______</span> make noise.",
            opciones: ["mustn't", "don't have to", "should"],
            correcta: "mustn't",
            explicacion: "Usamos 'mustn't' porque hacer ruido en un hospital es una prohibición estricta."
        },
        {
            tipo: "test",
            pregunta: "Tu amigo tiene un resfriado muy fuerte. ¿Qué consejo le darías?",
            opciones: ["You shouldn't see a doctor.", "You should see a doctor.", "You doesn't have to see a doctor."],
            correcta: "You should see a doctor.",
            explicacion: "Para dar consejos recomendando una acción positiva utilizamos el verbo modal 'should'."
        },
        {
            tipo: "test",
            pregunta: "Completa la oración: Tomorrow is a holiday, so I <span class='hueco'>______</span> study tonight.",
            opciones: ["mustn't", "should", "don't have to"],
            correcta: "don't have to",
            explicacion: "Usamos 'don't have to' porque al ser festivo al día siguiente, no hay necesidad ni obligación de estudiar, aunque podrías hacerlo si quisieras."
        },
        {
            tipo: "ordenar",
            pregunta: "Ordena el consejo para llevar un estilo de vida saludable:",
            palabras: ["drink", "water.", "more", "should", "You"],
            fraseCorrecta: "You should drink more water.",
            explicacion: "La estructura para dar un consejo con should es: Sujeto (You) + should + verbo principal (drink) + complementos (more water)."
        }
    ],
    
    // --- CONVERSACIÓN / ROLEPLAY ---
    conversacion: {
        rol: "Normas del Campamento ⛺",
        escenario: "Hablando con Kevin, el monitor del campamento de verano",
        instruccion: "El monitor te explica las normas que debes seguir y algunos consejos útiles para convivir en el campamento. ¡Demuestra que entiendes las reglas!",
        ayuda: "Pon mucha atención a la diferencia entre lo que está prohibido (mustn't) y lo que es opcional (don't have to).",
        dialogos: [
            {
                en: "Welcome to Summer Camp! Here, we have some important rules. You must wake up at 8:00 AM, but you don't have to cook. Do you understand?",
                es: "¡Bienvenido al campamento de verano! Aquí tenemos algunas normas importantes. Debes despertarte a las 8:00 AM, pero no tienes que cocinar. ¿Entiendes?",
                pron: "uél-kam tu sá-mer kamp! jíar wi jav sam im-pór-tant ruls. iú mast uéik ap at éit ei em, bat iú dont jav tu kuk. du iú an-der-stánd?",
                emoji: "⛺"
            },
            {
                en: "Excellent. At night, you mustn't leave your cabin after 10:00 PM because it's dangerous. What should you do if you need help?",
                es: "Excelente. Por la noche, no debes salir de tu cabaña después de las 10:00 PM porque es peligroso. ¿Qué deberías hacer si necesitas ayuda?",
                pron: "ék-se-lent. at náit, iú más-nt liiv iur ká-bin áf-ter ten pi em bi-kós it-s déin-dje-ros. wat shud iú du if iú niid jelp?",
                emoji: "🔦"
            },
            {
                en: "That is right, you should call me. And finally, you can swim in the lake during the day, but you could practice water sports too. Are you ready for fun?",
                es: "Es correcto, deberías llamarme. Y por último, puedes nadar en el lago durante el día, pero también podrías practicar deportes acuáticos. ¿Estás listo para divertirte?",
                pron: "dat is ráit, iú shud kol mi. and fái-na-li, iú kan suím in de léik diú-ring de déi, bat iú kud prák-tis uó-ter esports tu. ar iú ré-di for fan?",
                emoji: "🚣"
            }
        ]
    }
};
