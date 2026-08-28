/* ==========================================================================
   LECCIÓN 4: PAST SIMPLE (leccion4.js) - Versión Actualizada
   Contenido pedagógico estructurado para 3º ESO.
   ========================================================================== */

   window.Lecciones = window.Lecciones || {};

   window.Lecciones.leccion4 = {
       id: "leccion4",
       titulo: "Past Simple",
       nivel: "Intermedio",
       emoji: "📜",
       desc: "Aprende a narrar historias y hablar de acciones pasadas. Domina los verbos regulares, la temida lista de irregulares y el auxiliar 'did'.",
       
       // --- CONTENIDO DE TEORÍA EN HTML ---
       teoria: `
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">¿Cuándo usamos el Past Simple?</h3>
               <p class="bloque-texto">
                   Usamos el <strong>Past Simple</strong> para hablar de acciones que <strong>empezaron y terminaron en el pasado</strong>. Suele ir acompañado de palabras temporales como <em>yesterday</em> (ayer), <em>last week</em> (la semana pasada) o <em>ago</em> (hace...).
               </p>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">Verbos Regulares vs. Irregulares</h3>
               <p class="bloque-texto">
                   En oraciones afirmativas en pasado, los verbos se dividen en dos grupos:
               </p>
               
               <p class="bloque-texto">
                   • <strong>Verbos Regulares:</strong> Solo hay que añadir <strong>-ed</strong> al final del verbo.<br />
                   &nbsp;&nbsp;&nbsp;&nbsp;<em>play → play<strong>ed</strong> &nbsp;|&nbsp; study → studi<strong>ed</strong> &nbsp;|&nbsp; stop → stopp<strong>ed</strong></em>
               </p>
               
               <p class="bloque-texto">
                   • <strong>Verbos Irregulares:</strong> ¡No siguen ninguna regla! Cambian por completo y hay que memorizarlos usando la **segunda columna** de la lista de verbos irregulares.<br />
                   &nbsp;&nbsp;&nbsp;&nbsp;<em>go → <strong>went</strong> (ir) &nbsp;|&nbsp; see → <strong>saw</strong> (ver) &nbsp;|&nbsp; buy → <strong>bought</strong> (comprar)</em>
               </p>
               
               <div class="ejemplos-grid">
                   <div class="ejemplo-card">
                       <div class="ejemplo-en">We watched a movie yesterday.</div>
                       <div class="ejemplo-es">Nosotros vimos una película ayer. (Regular)</div>
                       <div class="ejemplo-pron">🗣️ /wi wácht a mú-vi iés-ter-déi/</div>
                   </div>
                   <div class="ejemplo-card">
                       <div class="ejemplo-en">He went to Paris last summer.</div>
                       <div class="ejemplo-es">Él fue a París el verano pasado. (Irregular: go → went)</div>
                       <div class="ejemplo-pron">🗣️ /ji went tu pá-ris last sá-mer/</div>
                   </div>
               </div>
           </div>
   
           <div class="negacion-card">
               <h3 class="negacion-titulo">La Forma Negativa en Pasado</h3>
               <p class="bloque-texto" style="color:var(--text2);">
                   ¡Buenas noticias! Para negar en pasado solo hay un único auxiliar para todos los sujetos: <strong>didn't</strong> (did not). <br />
                   Estructura: <strong>Sujeto + didn't + VERBO NORMAL + Complemento</strong>
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                       <div class="ejemplo-en">I <strong>didn't go</strong> (NOT didn't went ❌).</div>
                       <div class="ejemplo-es">Yo no fui. (Como ya está 'didn't', el verbo vuelve a su forma normal go).</div>
                       <div class="ejemplo-pron">🗣️ /ai dí-dent góu/</div>
                   </div>
               </div>
           </div>
   
           <div class="pregunta-card">
               <h3 class="pregunta-titulo">La Forma Interrogativa en Pasado</h3>
               <p class="bloque-texto" style="color:var(--text2);">
                   Para preguntar, colocamos el auxiliar de pasado <strong>Did</strong> al principio de la frase.<br />
                   Estructura: <strong>Did + Sujeto + VERBO NORMAL + Complemento + ?</strong>
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--azul);">
                       <div class="ejemplo-en"><strong>Did</strong> you see my dog?</div>
                       <div class="ejemplo-es">¿Viste a mi perro? (Vuelve a ser 'see' y no 'saw')</div>
                       <div class="ejemplo-pron">🗣️ /did iú síi mai dog/</div>
                   </div>
               </div>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">Hay en pasado: There was & There were</h3>
               <p class="bloque-texto">
                   Para decir que "había" o "hubo" una o varias cosas en el pasado, usamos <strong>There was</strong> (singular) y <strong>There were</strong> (plural):
               </p>
               
               <div class="ejemplos-grid">
                   <!-- SINGLE: THERE WAS -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>There was</strong> Se usa cuando hablamos de un solo elemento (singular).<br />
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: There was a cat (Había un gato), There was a mistake (Había un error)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                       <div class="ejemplo-en">There was a cat under the bed.</div>
                       <div class="ejemplo-es">Había un gato debajo de la cama.</div>
                       <div class="ejemplo-pron">🗣️ /der uos a kat án-der de bed/</div>
                   </div>
   
                   <!-- PLURAL: THERE WERE -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>There were</strong> Se usa cuando hablamos de dos o más elementos (plural).<br />
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: There were some books (Había algunos libros), There were many people (Había mucha gente)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                       <div class="ejemplo-en">There were some books on the desk.</div>
                       <div class="ejemplo-es">Había algunos libros sobre el escritorio.</div>
                       <div class="ejemplo-pron">🗣️ /der uer sam buks on de desk/</div>
                   </div>
               </div>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">Preposiciones de MOVIMIENTO</h3>
               <p class="bloque-texto">
                   Para describir el movimiento o la dirección de una acción física en pasado, usamos estas preposiciones de movimiento:
               </p>
               
               <div class="ejemplos-grid">
                   <!-- PREPOSICIÓN: INTO -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>Into</strong> Se usa para indicar que algo o alguien entra a un lugar cerrado o espacio limitado.<br />
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: Into the classroom (Hacia dentro de la clase), Into the box (Dentro de la caja)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                       <div class="ejemplo-en">They walked into the library.</div>
                       <div class="ejemplo-es">Ellos entraron a la biblioteca. (Caminaron hacia dentro)</div>
                       <div class="ejemplo-pron">🗣️ /déi uókt ín-tu de lái-bre-ri/</div>
                   </div>
   
                   <!-- PREPOSICIÓN: OUT OF -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>Out of</strong> Se usa para indicar que algo o alguien sale de un lugar cerrado o delimitado.<br />
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: Out of the building (Fuera del edificio), Out of the car (Fuera del coche)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                       <div class="ejemplo-en">She ran out of the school.</div>
                       <div class="ejemplo-es">Ella salió corriendo del colegio.</div>
                       <div class="ejemplo-pron">🗣️ /shi ran áut of de escúul/</div>
                   </div>
   
                   <!-- PREPOSICIÓN: THROUGH -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>Through</strong> Se usa para indicar que algo se mueve de un lado a otro atravesando un espacio (como un túnel, un bosque o una ventana).<br />
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: Through the park (A través del parque), Through the window (A través de la ventana)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                       <div class="ejemplo-en">We drove through the tunnel.</div>
                       <div class="ejemplo-es">Nosotros condujimos a través del túnel.</div>
                       <div class="ejemplo-pron">🗣️ /wi dróuv zru de tá-nel/</div>
                   </div>
               </div>
           </div>
   
           <div class="nota">
               <div class="nota-icono">⚠️</div>
               <div>
                   <strong>El Verbo To Be en Pasado es rebelde: Was y Were</strong><br />
                   El verbo To Be en pasado es <strong>was</strong> (para I, He, She, It) y <strong>were</strong> (para You, We, They). Es el único que **no utiliza el auxiliar "didn't" o "did"** para negar o preguntar.<br />
                   • Afirmativo: <em>"I was tired."</em><br />
                   • Negativo: <em>"I <strong>wasn't</strong> tired"</em> (¡NUNCA I didn't be tired ❌!)<br />
                   • Pregunta: <em>"<strong>Were</strong> you tired?"</em> (¡NUNCA Did you be tired ❌!)
               </div>
           </div>
       `,
       
       // --- EJERCICIOS INTERACTIVOS ---
       ejercicios: [
           {
               tipo: "test",
               pregunta: "Completa la oración: They <span class='hueco'>______</span> a delicious pizza last night.",
               opciones: ["eat", "ate", "eated"],
               correcta: "ate",
               explicacion: "El verbo 'eat' es irregular. Su forma en pasado simple (segunda columna) es 'ate'."
           },
           {
               tipo: "test",
               pregunta: "Encuentra la pregunta correcta en pasado simple:",
               opciones: ["Did you went to the cinema?", "Did you go to the cinema?", "Were you go to the cinema?"],
               correcta: "Did you go to the cinema?",
               explicacion: "Cuando usamos el auxiliar 'Did' al principio de la pregunta, el verbo principal debe estar en su forma normal o infinitivo ('go' en lugar de 'went')."
           },
           {
               tipo: "test",
               pregunta: "Completa la oración: <span class='hueco'>______</span> many students in the classroom yesterday.",
               opciones: ["There was", "There were", "There didn't"],
               correcta: "There were",
               explicacion: "Usamos 'There were' porque 'many students' (muchos estudiantes) es plural."
           },
           {
               tipo: "test",
               pregunta: "Completa la frase: The children ran <span class='hueco'>______</span> the classroom when the bell rang.",
               opciones: ["into", "through", "under"],
               correcta: "into",
               explicacion: "Usamos 'into' porque indica movimiento hacia el interior de un lugar cerrado (entrar a la clase)."
           },
           {
               tipo: "ordenar",
               pregunta: "Ordena la oración negativa en pasado:",
               palabras: ["homework.", "do", "didn't", "She", "her"],
               fraseCorrecta: "She didn't do her homework.",
               explicacion: "La estructura negativa es: Sujeto (She) + auxiliar didn't + verbo en infinitivo (do) + complementos."
           }
       ],
       
       // --- CONVERSACIÓN / ROLEPLAY ---
       conversacion: {
           rol: "Charla en el Fin de Semana 🍕",
           escenario: "Hablando de lo que hiciste ayer",
           instruccion: "Tu amigo Lucas te pregunta sobre lo que hiciste durante el fin de semana pasado. Cuéntale tus planes.",
           ayuda: "Usa verbos en pasado simple como 'I went to...', 'I played...' o 'I didn't study...'",
           dialogos: [
               {
                   en: "Hey! How was your weekend? Did you do anything fun on Saturday?",
                   es: "¡Hola! ¿Qué tal tu fin de semana? ¿Hiciste algo divertido el sábado?",
                   pron: "jéi! jau was iur wíik-end? did iú du é-ni-fing fan on sá-ter-déi?",
                   emoji: "👦"
               },
               {
                   en: "Oh, cool! I went to the movies and saw the new Marvel film. Did you watch it too?",
                   es: "¡Oh, genial! Yo fui al cine y vi la nueva película de Marvel. ¿La viste tú también?",
                   pron: "óu, kúul! ai went tu de mú-vis and só de niú már-vel film. did iú wach it túu?",
                   emoji: "🎬"
               },
               {
                   en: "Well, we have a difficult English test tomorrow. Did you study yesterday?",
                   es: "Bueno, mañana tenemos un examen de inglés difícil. ¿Estudiaste ayer?",
                   pron: "wel, wi jav a dí-pi-kalt ín-glish test tu-má-rou. did iú es-tá-di iés-ter-déi?",
                   emoji: "📝"
               }
           ]
       }
   };
   