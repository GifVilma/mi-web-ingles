/* ==========================================================================
   LECCIÓN 1: EL VERBO TO BE (leccion1.js)
   Contenido pedagógico estructurado para 3º ESO y Primaria.
   ========================================================================== */

   window.Lecciones = window.Lecciones || {};

   window.Lecciones.leccion1 = {
       id: "leccion1",
       titulo: "El Verbo To Be",
       nivel: "Principiante",
       emoji: "📚",
       desc: "Aprende a presentarte, decir tu edad, describir cosas y expresar estados físicos o emocionales.",
       
       // --- CONTENIDO DE TEORÍA EN HTML ---
       teoria: `
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">¿Qué es el Verbo To Be?</h3>
               <p class="bloque-texto">
                   El verbo <strong>To Be</strong> es el más importante del inglés. Significa dos cosas distintas en español: <strong>SER</strong> (ej. <em>"Yo soy estudiante"</em>) o <strong>ESTAR</strong> (ej. <em>"Yo estoy en casa"</em>). El contexto de la frase te dirá qué significado tiene.
               </p>
               
               <table class="tabla-tobe">
                   <thead>
                       <tr>
                           <th>Pronombre</th>
                           <th>Verbo To Be</th>
                           <th>Equivalente</th>
                           <th>Traducción típica</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>I</td>
                           <td>am</td>
                           <td>I'm</td>
                           <td>Yo soy / estoy</td>
                       </tr>
                       <tr>
                           <td>You</td>
                           <td>are</td>
                           <td>You're</td>
                           <td>Tú eres / estás</td>
                       </tr>
                       <tr>
                           <td>He / She / It</td>
                           <td>is</td>
                           <td>He's / She's / It's</td>
                           <td>Él / Ella / Ello es / está</td>
                       </tr>
                       <tr>
                           <td>We</td>
                           <td>are</td>
                           <td>We're</td>
                           <td>Nosotros somos / estamos</td>
                       </tr>
                       <tr>
                           <td>You</td>
                           <td>are</td>
                           <td>You're</td>
                           <td>Vosotros sois / estáis</td>
                       </tr>
                       <tr>
                           <td>They</td>
                           <td>are</td>
                           <td>They're</td>
                           <td>Ellos son / están</td>
                       </tr>
                   </tbody>
               </table>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">Ejemplos de Oraciones Afirmativas</h3>
               <p class="bloque-texto">La estructura básica de la oración afirmativa es: <br>
                  <span class="ejemplo-pron" style="background:var(--text); margin-bottom:10px;">Sujeto + Verbo To Be + Complemento</span>
               </p>
               
               <div class="ejemplos-grid">
                   <div class="ejemplo-card">
                       <div class="ejemplo-en">I am a student.</div>
                       <div class="ejemplo-es">Yo soy un estudiante.</div>
                       <div class="ejemplo-pron">🗣️ /ai am a stiú-dent/</div>
                   </div>
                   <div class="ejemplo-card">
                       <div class="ejemplo-en">She is very happy today.</div>
                       <div class="ejemplo-es">Ella está muy feliz hoy.</div>
                       <div class="ejemplo-pron">🗣️ /shi is véri já-pi tu-déi/</div>
                   </div>
                   <div class="ejemplo-card">
                       <div class="ejemplo-en">They are from Spain.</div>
                       <div class="ejemplo-es">Ellos son de España.</div>
                       <div class="ejemplo-pron">🗣️ /déi ar prom espéin/</div>
                   </div>
               </div>
           </div>
   
           <div class="negacion-card">
               <h3 class="negacion-titulo">La Forma Negativa</h3>
               <p class="bloque-texto" style="color:var(--text2);">
                   Para negar, solo tenemos que añadir la palabra <strong>not</strong> detrás del verbo To Be. <br>
                   Estructura: <strong>Sujeto + Verbo To Be + NOT + Complemento</strong>
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--rojo); margin-bottom: 20px;">
                       <div class="ejemplo-en">He is not (isn't) hungry.</div>
                       <div class="ejemplo-es">Él no tiene hambre (no está hambriento).</div>
                       <div class="ejemplo-pron">🗣️ /ji is not ján-gri/</div>
                   </div>
                   <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                       <div class="ejemplo-en">We are not (aren't) tired.</div>
                       <div class="ejemplo-es">Nosotros no estamos cansados.</div>
                       <div class="ejemplo-pron">🗣️ /wi ar not tái-ard/</div>
                   </div>
               </div>
           </div>
   
           <div class="pregunta-card">
               <h3 class="pregunta-titulo">La Forma Interrogativa</h3>
               <p class="bloque-texto" style="color:var(--text2);">
                   ¡En inglés las preguntas cambian el orden! Ponemos el verbo <strong>To Be al principio</strong> de la oración, delante del sujeto.<br>
                   Estructura: <strong>Verbo To Be + Sujeto + Complemento + ?</strong>
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--azul); margin-bottom: 20px;">
                       <div class="ejemplo-en">Are you ready?</div>
                       <div class="ejemplo-es">¿Estás listo?</div>
                       <div class="ejemplo-pron">🗣️ /ar iú ré-di/</div>
                   </div>
                   <div class="ejemplo-card" style="border-left-color: var(--azul);">
                       <div class="ejemplo-en">Is she English?</div>
                       <div class="ejemplo-es">¿Es ella inglesa?</div>
                       <div class="ejemplo-pron">🗣️ /is shi ín-glish/</div>
                   </div>
               </div>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">Hay en inglés: There is & There are</h3>
               <p class="bloque-texto">
                   Para decir que algo existe o que "hay" una o varias cosas en un lugar, utilizamos <strong>There is</strong> (singular) y <strong>There are</strong> (plural):
               </p>
               
               <div class="ejemplos-grid">
                   <!-- SINGLE: THERE IS -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>There is</strong> Se usa cuando hablamos de un solo elemento (singular).<br>
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: There is a book (Hay un libro), There is a teacher (Hay un profesor)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                       <div class="ejemplo-en">There is a cat under the table.</div>
                       <div class="ejemplo-es">Hay un gato debajo de la mesa.</div>
                       <div class="ejemplo-pron">🗣️ /der is a kat án-der de téi-bel/</div>
                   </div>
   
                   <!-- PLURAL: THERE ARE -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>There are</strong> Se usa cuando hablamos de dos o más elementos (plural).<br>
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: There are some books (Hay algunos libros), There are three dogs (Hay tres perros)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                       <div class="ejemplo-en">There are some books on the desk.</div>
                       <div class="ejemplo-es">Hay algunos libros sobre el escritorio.</div>
                       <div class="ejemplo-pron">🗣️ /der ar sam buks on de desk/</div>
                   </div>
               </div>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">¿In, On o At? Preposiciones de LUGAR</h3>
               <p class="bloque-texto">
                   Para decir <strong>dónde está alguien o algo</strong> con el verbo To Be, usamos estas tres preposiciones clave de forma piramidal:
               </p>
               
               <div class="ejemplos-grid">
                   <!-- PREPOSICIÓN: IN -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>In</strong> Se usa para dentro de lugares cerrados, áreas grandes, países o ciudades.<br>
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: In Spain (En España), In London (En Londres), In the room (En la habitación)
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                       <div class="ejemplo-en">We are in London.</div>
                       <div class="ejemplo-es">Nosotros estamos en Londres.</div>
                       <div class="ejemplo-pron">🗣️ /wi ar in lán-don/</div>
                   </div>
   
                   <!-- PREPOSICIÓN: ON -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>On</strong> Se usa para cosas sobre una superficie o para medios de transporte públicos.<br>
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: On the table (Sobre la mesa), On the wall (En la pared), On the bus (En el autobús - Puedes caminar por el pasillo). 
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja); margin-bottom: 20px;">
                       <div class="ejemplo-en">The book is on the table.</div>
                       <div class="ejemplo-es">El libro está sobre la mesa.</div>
                       <div class="ejemplo-pron">🗣️ /de buk is on de téi-bel/</div>
                   </div>
   
                   <!-- PREPOSICIÓN: AT -->
                   <p class="bloque-texto" style="margin-bottom: 8px;">
                       • <strong>At</strong> Se usa para lugares con una función concreta o sitios muy específicos.<br>
                       <span style="color: var(--text3); font-size: 14px; font-style: italic; display: inline-block; margin-top: 4px;">
                           Ejemplos: At school (En el colegio), At home (En casa), At the bus stop (En la parada).
                       </span>
                   </p>
                   <div class="ejemplo-card" style="border-left-color: var(--naranja);">
                       <div class="ejemplo-en">She is at school.</div>
                       <div class="ejemplo-es">Ella está en el colegio.</div>
                       <div class="ejemplo-pron">🗣️ /shi is at escúul/</div>
                   </div>
               </div>
           </div>
   
           <div class="nota">
               <div class="nota-icono">⚠️</div>
               <div>
                   <strong>¡Ojo con la edad en el instituto!</strong><br>
                   En los exámenes de la ESO suelen poner esta trampa: en español decimos <em>"Yo tengo 14 años"</em> usando el verbo "tener" (have). Pero en inglés <strong>la edad se dice siempre con el verbo To Be</strong> porque es un estado.<br>
                   ❌ <em>I have 14 years</em> (Incorrecto)<br>
                   ✔️ <strong>I am 14 years old</strong> (Correcto • Literalmente: <em>Yo soy 14 años viejo</em>)
               </div>
           </div>
       `,
       
       // --- EJERCICIOS INTERACTIVOS ---
       ejercicios: [
           {
               tipo: "test",
               pregunta: "Completa la frase: We are studying <span class='hueco'>______</span> school today.",
               opciones: ["in", "on", "at"],
               correcta: "at",
               explicacion: "Usamos 'at' para lugares específicos con una función concreta (like school, home, work)."
           },
           {
               tipo: "test",
               pregunta: "Completa la oración: She <span class='hueco'>______</span> a very intelligent girl.",
               opciones: ["am", "are", "is"],
               correcta: "is",
               explicacion: "Usamos 'is' porque el sujeto 'She' corresponde a la tercera persona del singular (He/She/It)."
           },
           {
               tipo: "test",
               pregunta: "Traduce correctamente la edad: 'Ellos tienen 15 años'.",
               opciones: ["They have 15 years old.", "They are 15 years old.", "They is 15 years old."],
               correcta: "They are 15 years old.",
               explicacion: "Recuerda que en inglés la edad se expresa usando el verbo 'To Be' (con They corresponde 'are') y nunca con 'have'."
           },
           {
               tipo: "test",
               pregunta: "Completa la frase: <span class='hueco'>______</span> a cat under the table.",
               opciones: ["There is", "There are", "Is there"],
               correcta: "There is",
               explicacion: "Usamos 'There is' porque 'a cat' (un gato) es un sustantivo en singular."
           },
           {
               tipo: "ordenar",
               pregunta: "Ordena la pregunta en inglés: ¿Están cansados hoy?",
               palabras: ["Are", "tired", "today?", "they"],
               fraseCorrecta: "Are they tired today?",
               explicacion: "En la forma interrogativa, colocamos el verbo 'To Be' (Are) al principio, seguido del sujeto (they) y por último los complementos."
           }
       ],
       
       // --- CONVERSACIÓN / ROLEPLAY ---
       conversacion: {
           rol: "Conversación en la Escuela 🏫",
           escenario: "Conociendo a un nuevo compañero",
           instruccion: "Imagina que es tu primer día en el instituto de Brighton y saludas a Tom. Responde sus preguntas de forma amigable.",
           ayuda: "Usa estructuras cortas del verbo To Be como 'I am', 'He is' o 'We are'.",
           dialogos: [
               {
                   en: "Hello! My name is Tom. I am 14 years old. What is your name?",
                   es: "¡Hola! Mi nombre es Tom. Tengo 14 años. ¿Cuál es tu nombre?",
                   pron: "je-lóu mai néim is tom, ai am por-tín íars óuld, wat is iur néim?",
                   emoji: "👋"
               },
               {
                   en: "Are you from Spain? I am English, but my mother is Spanish!",
                   es: "¿Eres de España? ¡Yo soy inglés, pero mi madre es española!",
                   pron: "ar iú prom espéin? ai am ín-glish, bat mai má-der is es-pá-nish",
                   emoji: "🇬🇧"
               },
               {
                   en: "Excellent! We are classmates now. Is this school big?",
                   es: "¡Excelente! Somos compañeros de clase ahora. ¿Es este instituto grande?",
                   pron: "dek-se-lent, wi ar klás-meits náu, is dis eskúul big?",
                   emoji: "🏫"
               }
           ]
       }
   };