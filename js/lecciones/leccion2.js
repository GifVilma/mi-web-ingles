/* ==========================================================================
   LECCIÓN 2: PERSONAL PRONOUNDS & POSSESSIVES (leccion2.js)
   Contenido pedagógico estructurado para 2º y 3º ESO.
   ========================================================================== */

   window.Lecciones = window.Lecciones || {};

   window.Lecciones.leccion2 = {
       id: "leccion2",
       titulo: "Personal Pronouns & Possessives",
       nivel: "Principiante-Intermedio",
       emoji: "👤",
       desc: "Aprende el mapa completo de pronombres y posesivos para no volver a confundir 'me', 'my' o 'mine' en tus exámenes.",
       
       // --- CONTENIDO DE TEORÍA EN HTML ---
       teoria: `
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">El Mapa de los Pronombres</h3>
               <p class="bloque-texto">
                   Para dominar el inglés en 2º de la ESO es fundamental saber quién realiza la acción (<strong>Sujeto</strong>), quién la recibe (<strong>Objeto</strong>) y de quién es algo (<strong>Posesivos</strong>). Estudia detalladamente esta tabla comparativa:
               </p>
               
               <table class="tabla-tobe" style="font-size:13px;">
                   <thead>
                       <tr>
                           <th>Sujeto (Hace acción)</th>
                           <th>Objeto (Recibe acción)</th>
                           <th>Posesivo Adj. (+ Sustantivo)</th>
                           <th>Posesivo Pron. (Solo)</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td><strong>I</strong> (Yo)</td>
                           <td><strong>me</strong> (a mí)</td>
                           <td><strong>my</strong> (mi...)</td>
                           <td><strong>mine</strong> (mío)</td>
                       </tr>
                       <tr>
                           <td><strong>You</strong> (Tú)</td>
                           <td><strong>you</strong> (a ti)</td>
                           <td><strong>your</strong> (tu...)</td>
                           <td><strong>yours</strong> (tuyo)</td>
                       </tr>
                       <tr>
                           <td><strong>He</strong> (Él)</td>
                           <td><strong>him</strong> (a él)</td>
                           <td><strong>his</strong> (su de él...)</td>
                           <td><strong>his</strong> (suyo de él)</td>
                       </tr>
                       <tr>
                           <td><strong>She</strong> (Ella)</td>
                           <td><strong>her</strong> (a ella)</td>
                           <td><strong>her</strong> (su de ella...)</td>
                           <td><strong>hers</strong> (suyo de ella)</td>
                       </tr>
                       <tr>
                           <td><strong>It</strong> (Ello)</td>
                           <td><strong>it</strong> (a ello)</td>
                           <td><strong>its</strong> (su de ello...)</td>
                           <td><strong>its</strong> (suyo)</td>
                       </tr>
                       <tr>
                           <td><strong>We</strong> (Nosotros)</td>
                           <td><strong>us</strong> (a nosotros)</td>
                           <td><strong>our</strong> (nuestro...)</td>
                           <td><strong>ours</strong> (nuestro)</td>
                       </tr>
                       <tr>
                           <td><strong>They</strong> (Ellos)</td>
                           <td><strong>them</strong> (a ellos)</td>
                           <td><strong>their</strong> (su de ellos...)</td>
                           <td><strong>theirs</strong> (suyo de ellos)</td>
                       </tr>
                   </tbody>
               </table>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">1. Sujeto vs. Objeto</h3>
               <p class="bloque-texto">
                   • El <strong>Sujeto</strong> siempre va <strong>delante del verbo</strong>.<br>
                   • El <strong>Objeto</strong> siempre va <strong>detrás del verbo</strong> o de una preposición (como <em>with, for, to</em>).
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--azul);">
                       <div class="ejemplo-en"><strong>I</strong> love <strong>her</strong>.</div>
                       <div class="ejemplo-es">Yo la amo a ella. (Yo = Sujeto, her = Objeto)</div>
                       <div class="ejemplo-pron">🗣 /ai lav jer/</div>
                   </div>
                   <div class="ejemplo-card" style="border-left-color: var(--azul);">
                       <div class="ejemplo-en">Can you help <strong>us</strong>?</div>
                       <div class="ejemplo-es">¿Puedes ayudarnos (a nosotros)? (us = Objeto)</div>
                       <div class="ejemplo-pron">🗣 /kan iú jelp as/</div>
                   </div>
               </div>
           </div>
   
           <div class="bloque-explicacion">
               <h3 class="bloque-titulo">2. Posesivo Adjetivo vs. Posesivo Pronombre</h3>
               <p class="bloque-texto">
                   Esta regla siempre entra en los exámenes de <em>Synchronize</em>:<br>
                   • El <strong>Adjetivo Posesivo (my, your, her)</strong> necesita ir acompañado por un objeto detrás: <em>"My car"</em>.<br>
                   • El <strong>Pronombre Posesivo (mine, yours, hers)</strong> va <strong>completamente solo</strong> porque reemplaza al objeto para no volver a repetirlo: <em>"This car is mine"</em>.
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card">
                       <div class="ejemplo-en">This is <strong>my</strong> book.</div>
                       <div class="ejemplo-es">Este es mi libro. (my + libro)</div>
                       <div class="ejemplo-pron">🗣 /dis is mai buk/</div>
                   </div>
                   <div class="ejemplo-card">
                       <div class="ejemplo-en">This book is <strong>mine</strong>.</div>
                       <div class="ejemplo-es">Este libro es mío. (mine va solo)</div>
                       <div class="ejemplo-pron">🗣 /dis buk is máin/</div>
                   </div>
               </div>
           </div>
   
           <div class="negacion-card">
               <h3 class="negacion-titulo">❌ Trampas Comunes en el Examen</h3>
               <p class="bloque-texto" style="color:var(--text2); margin-bottom: 12px;">
                   ¡Cuidado con estos dos errores súper frecuentes en 2º de la ESO!
               </p>
               <div class="ejemplos-grid">
                   <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                       <div class="ejemplo-en">This book is <strong>my</strong>. ❌</div>
                       <div class="ejemplo-es"><strong>This book is mine.</strong> (Nunca uses un adjetivo posesivo solo al final de la frase)</div>
                   </div>
                   <div class="ejemplo-card" style="border-left-color: var(--rojo);">
                       <div class="ejemplo-en">I live with <strong>he</strong>. ❌</div>
                       <div class="ejemplo-es"><strong>I live with him.</strong> (Detrás de preposiciones va siempre el pronombre objeto, nunca el sujeto)</div>
                   </div>
               </div>
           </div>
   
           <div class="nota">
               <div class="nota-icono">💡</div>
               <div>
                   <strong>¡Truco de Examen!</strong><br>
                   Si al final de una frase en tu examen de 2º de ESO de <em>Synchronize</em> ves un hueco con un punto inmediatamente después (ej. <em>"That pencil is ______."</em>), la respuesta correcta **casi seguro** será un Pronombre Posesivo terminado en <strong>-s</strong> (yours, hers, ours, theirs) o <strong>mine</strong>, porque no hay ningún sustantivo al que calificar.
               </div>
           </div>
       `,
       
       // --- EJERCICIOS INTERACTIVOS ---
       ejercicios: [
           {
               tipo: "test",
               pregunta: "Completa la frase: This car belongs to my parents. It is <span class='hueco'>______</span>.",
               opciones: ["their", "theirs", "them"],
               correcta: "theirs",
               explicacion: "Como la frase termina con un punto y no hay ningún sustantivo detrás del hueco, debemos usar el pronombre posesivo 'theirs' (suyo de ellos)."
           },
           {
               tipo: "test",
               pregunta: "Completa la frase: 'I found a pen. Is it <span class='hueco'>______</span>?' (¿Es tuyo?)",
               opciones: ["your", "yours", "you"],
               correcta: "yours",
               explicacion: "Como el espacio está al final de la pregunta y no tiene ningún sustantivo detrás, se usa el pronombre posesivo 'yours'."
           },
           {
               tipo: "test",
               pregunta: "Completa la oración: I bought some flowers for my mother. I love <span class='hueco'>______</span> so much!",
               opciones: ["she", "her", "hers"],
               correcta: "her",
               explicacion: "Detrás del verbo 'love' necesitamos colocar un pronombre objeto ('her') porque es quien recibe la acción de ser amada."
           },
           {
               tipo: "ordenar",
               pregunta: "Ordena correctamente la oración en inglés:",
               palabras: ["always", "They", "walk", "with", "us."],
               fraseCorrecta: "They always walk with us.",
               explicacion: "El sujeto 'They' va al principio. El adverbio de frecuencia 'always' se coloca delante del verbo normal 'walk', y el pronombre objeto 'us' va detrás de la preposición 'with'."
           }
       ],
       
       // --- CONVERSACIÓN / ROLEPLAY ---
       conversacion: {
           rol: "Conversación en Casa 🏡",
           escenario: "Buscando cosas perdidas",
           instruccion: "Estás buscando tus cosas para ir al instituto y hablas con tu hermana Sara. Responde sobre de quién son las cosas.",
           ayuda: "Usa posesivos como 'my', 'your', 'mine' o 'hers' para contestar.",
           dialogos: [
               {
                   en: "Hey! Is this blue backpack yours, or is it mine?",
                   es: "¡Oye! ¿Esta mochila azul es tuya o es mía?",
                   pron: "jéi, is dis blú bák-pak iúars, or is it máin?",
                   emoji: "🎒"
               },
               {
                   en: "Oh, I see. And what about these keys? Do they belong to our parents?",
                   es: "Ah, ya veo. ¿Y qué hay de estas llaves? ¿Le pertenecen a nuestros padres?",
                   pron: "óu, ai síi, and wat a-báut díis kíis? du déi be-lóng tu áu-ar pá-rents?",
                   emoji: "🔑"
               },
               {
                   en: "Perfect. Please, hand me my jacket. It's next to you!",
                   es: "Perfecto. Por favor, pásame mi chaqueta. ¡Está al lado tuyo!",
                   pron: "pér-fekt, plíis, jand mi mai já-ket, its nekst tu iú!",
                   emoji: "🧥"
               }
           ]
       }
   };