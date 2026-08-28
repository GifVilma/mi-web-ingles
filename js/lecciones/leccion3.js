/* ==========================================================================
   LECCIÓN 3: PRESENT SIMPLE (leccion3.js)
   Contenido pedagógico estructurado para 3º ESO.
   ========================================================================== */

   window.Lecciones = window.Lecciones || {};

   window.Lecciones.leccion3 = {
       id: "leccion3",
       titulo: "Present Simple",
       nivel: "Principiante-Intermedio",
       emoji: "🕒",
       desc: "Aprende a hablar de tus hábitos, rutinas y gustos cotidianos, dominando la regla de la tercera persona y los auxiliares 'do' y 'does'.",
       
       // --- CONTENIDO DE TEORÍA EN HTML ---
       teoria: `
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo"> ¿Cuándo usamos el Present Simple?</h3>
               <p class="bloque-texto">
                   Usamos el <strong>Present Simple</strong> para hablar de: <br>
                   1. <strong>Rutinas y hábitos:</strong> Cosas que haces con frecuencia (ej. <em>"Yo me cepillo los dientes todos los días"</em>).<br>
                   2. <strong>Verdades generales o hechos:</strong> Cosas que siempre son verdad (ej. <em>"El agua hierve a 100°C"</em>).
               </p>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo"> La Regla de Oro: La Tercera Persona ("He, She, It")</h3>
               <p class="bloque-texto">
                   En oraciones afirmativas, si el sujeto es <strong>He, She o It</strong>, ¡obligatoriamente debemos <strong>añadir una "-s" o "-es" al final del verbo</strong>! Con los demás pronombres (I, You, We, They) el verbo se queda completamente igual.
               </p>
               
               <table class="tabla-tobe">
                   <thead>
                       <tr>
                           <th>Sujetos</th>
                           <th>Verbo regular</th>
                           <th>Cambio Tercera Persona</th>
                           <th>Ejemplo</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>I, You, We, They</td>
                           <td>play</td>
                           <td>No cambia</td>
                           <td>We play soccer. (Jugamos)</td>
                       </tr>
                       <tr>
                           <td><strong>He, She, It</strong></td>
                           <td>play</td>
                           <td>Añade <strong>-s</strong></td>
                           <td>He play<strong>s</strong> soccer. (Él juega)</td>
                       </tr>
                       <tr>
                           <td><strong>He, She, It</strong></td>
                           <td>watch</td>
                           <td>Verbos en -ch/-sh/-o/-x añaden <strong>-es</strong></td>
                           <td>She watch<strong>es</strong> TV. (Ella ve)</td>
                       </tr>
                       <tr>
                           <td><strong>He, She, It</strong></td>
                           <td>study</td>
                           <td>Consonante + Y cambia a <strong>-ies</strong></td>
                           <td>He stud<strong>ies</strong> math. (Él estudia)</td>
                       </tr>
                   </tbody>
               </table>
           </div>
   
           <div class="negacion-card">
               <h3 class="negacion-titulo">La Forma Negativa</h3>
               <p class="bloque-texto" style="color:var(--text2);">
                   En negativo, necesitamos usar un "verbo ayudante" (auxiliar): <strong>don't</strong> (do not) o <strong>doesn't</strong> (does not). <br>
                   Estructura: <strong>Sujeto + don't / doesn't + VERBO NORMAL + Complemento</strong>
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                       <div class="ejemplo-en">I <strong>don't like</strong> apples.</div>
                       <div class="ejemplo-es">A mí no me gustan las manzanas.</div>
                       <div class="ejemplo-pron" style="background: var(--rojo);">🗣 /ai dóunt láik á-pels/</div>
                   </div>
                   <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                       <div class="ejemplo-en">He <strong>doesn't play</strong> <span style="color: var(--rojo); font-size: 0.85em; font-weight: normal; margin-left: 5px;">(He doesn't plays ❌)</span></div>
                       <div class="ejemplo-es">Él no juega. (Como ya está doesn't, el verbo pierde la "-s").</div>
                       <div class="ejemplo-pron" style="background: var(--rojo);">🗣 /ji dá-sent pléi/</div>
                    </div>

                </div>
           </div>
   
           <div class="pregunta-card">
               <h3 class="pregunta-titulo"> La Forma Interrogativa</h3>
               <p class="bloque-texto" style="color:var(--text2);">
                   Para hacer preguntas, colocamos el auxiliar <strong>Do</strong> o <strong>Does</strong> al principio de todo.<br>
                   Estructura: <strong>Do / Does + Sujeto + VERBO NORMAL + Complemento + ?</strong>
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--azul);">
                       <div class="ejemplo-en"><strong>Do</strong> you speak English?</div>
                       <div class="ejemplo-es">¿Hablas inglés?</div>
                       <div class="ejemplo-pron" style="background: var(--azul);">🗣 /du iú espíik ín-glish/</div>
                   </div>
                   <div class="ejemplo-card" style="border-left-color: var(--azul);">
                       <div class="ejemplo-en"><strong>Does</strong> she live in London?</div>
                       <div class="ejemplo-es">¿Vive ella en Londres? (El verbo 'live' no lleva "-s" porque tenemos 'Does')</div>
                       <div class="ejemplo-pron" style="background: var(--azul);">🗣 /das shi liv in lán-don/</div>
                   </div>
               </div>
           </div>
   
          <div class="bloque-explicacion">
            <h3 class="bloque-titulo">¿In, On o At? Preposiciones de TIEMPO</h3>
            <p class="bloque-texto">
                Para hablar de <strong>cuándo haces tus rutinas</strong> en Present Simple, usamos las preposiciones de tiempo de forma piramidal:
            </p>
            
            <div class="ejemplos-grid">
                <!-- PREPOSICIÓN: IN -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>In</strong> Se usa para partes del día, meses, años o estaciones.<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: In the morning (Por la mañana), In July (En julio), In winter (En invierno)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--azul); margin-bottom: 20px;">
                    <div class="ejemplo-en">I study in the morning.</div>
                    <div class="ejemplo-es">Yo estudio por la mañana.</div>
                    <div class="ejemplo-pron">🗣️ /ai es-tá-di in de mór-ning/</div>
                </div>

                <!-- PREPOSICIÓN: ON -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>On</strong> Se usa para días de la semana, fechas específicas o festivos que llevan la palabra 'day'.<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: On Mondays (Los lunes), On August 25th (El 25 de agosto), On my birthday (En mi cumpleaños)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--azul); margin-bottom: 20px;">
                    <div class="ejemplo-en">I play tennis on Mondays.</div>
                    <div class="ejemplo-es">Yo juego al tenis los lunes.</div>
                    <div class="ejemplo-pron">🗣️ /ai pléi té-nis on mán-deis/</div>
                </div>

                <!-- PREPOSICIÓN: AT -->
                <p class="bloque-texto" style="margin-bottom: 8px;">
                    • <strong>At</strong> Se usa para horas del reloj o momentos muy precisos del día.<br>
                    <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                        Ejemplos: At 7 o'clock (A las 7 en punto), At night (Por la noche), At the weekend (El fin de semana)
                    </span>
                </p>
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">I wake up at 7 o'clock.</div>
                    <div class="ejemplo-es">Me despierto a las 7 en punto.</div>
                    <div class="ejemplo-pron">🗣️ /ai uéik ap at sé-ven o-cloc/</div>
                </div>
            </div>
        </div>

        <div class="nota">
               <div class="nota-icono">💡</div>
               <div>
                   <strong>Adverbios de Frecuencia (always, usually, sometimes, never)</strong><br>
                   Son las pistas clave de los exámenes de 3º de la ESO para saber si una frase va en Presente. Recuerda su posición:<br>
                   • Van <strong>delante</strong> de cualquier verbo normal: <em>"I <strong>always</strong> study."</em><br>
                   • Van <strong>detrás</strong> del verbo To Be: <em>"He is <strong>never</strong> late."</em>
               </div>
           </div>
       `,
       
       // --- EJERCICIOS INTERACTIVOS ---
       ejercicios: [
           {
               tipo: "test",
               pregunta: "Completa la frase: My sister usually watches a movie <span class='hueco'>______</span> Saturday nights.",
               opciones: ["in", "on", "at"],
               correcta: "on",
               explicacion: "Como se refiere a un día concreto ('Saturday nights'), debemos usar 'on'."
           },
           {
               tipo: "test",
               pregunta: "Completa la oración: My brother <span class='hueco'>______</span> to the gym on Mondays.",
               options: null, // Omitido, usamos opciones directamente
               opciones: ["go", "goes", "goings"],
               correcta: "goes",
               explicacion: "Como 'My brother' es equivalente a 'He', el verbo 'go' debe llevar la terminación de tercera persona '-es'."
           },
           {
               tipo: "test",
               pregunta: "Encuentra el error en esta oración negativa: 'Sarah doesn't likes chocolate.'",
               opciones: ["No hay error.", "Se debe cambiar 'doesn't' por 'don't'.", "El verbo 'likes' debe ser 'like' sin la '-s'."],
               correcta: "El verbo 'likes' debe ser 'like' sin la '-s'.",
               explicacion: "En las oraciones negativas con 'doesn't', el verbo principal vuelve a su forma infinitiva normal (sin '-s')."
           },
           {
               tipo: "ordenar",
               pregunta: "Ordena correctamente la frase con adverbio de frecuencia:",
               palabras: ["is", "late", "always", "He", "for", "class."],
               fraseCorrecta: "He is always late for class.",
               explicacion: "Los adverbios de frecuencia siempre van detrás del verbo 'To Be' (He is always...)."
           }
       ],
       
       // --- CONVERSACIÓN / ROLEPLAY ---
       conversacion: {
           rol: "Entrevista en el Instituto 🎤",
           escenario: "Hablando de tus hobbies y rutinas",
           instruccion: "El reportero de la radio del instituto te pregunta sobre lo que haces en tu tiempo libre. ¡Respóndele!",
           ayuda: "Utiliza el Presente Simple para contestar, ej. 'I play...', 'I watch...' o 'I don't play...'",
           dialogos: [
               {
                   en: "Hello! We are live for the school radio. Do you play any sports after school?",
                   es: "¡Hola! Estamos en directo para la radio del instituto. ¿Practicas algún deporte después de clase?",
                   pron: "je-lóu, wi ar láiv for de eskúul réi-diou. du iú pléi é-ni espórts áf-ter eskúul?",
                   emoji: "🎤"
               },
               {
                   en: "That sounds fun! What time do you usually finish your homework?",
                   es: "¡Eso suena divertido! ¿A qué hora sueles terminar tus deberes?",
                   pron: "dat sáunds fan! wat táim du iú iú-shu-a-li pí-nish iur jóum-work?",
                   emoji: "📚"
               },
               {
                   en: "Awesome! Thanks for the interview. Have a great day!",
                   es: "¡Estupendo! Gracias por la entrevista. ¡Pasa un buen día!",
                   pron: "ó-sam! fanks for de ín-ter-viu. jav a gréit déi!",
                   emoji: "📻"
               }
           ]
       }
   };