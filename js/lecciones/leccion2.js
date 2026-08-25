/* ==========================================================================
   LECCIÓN 2: PERSONAL PRONOUNDS & POSSESSIVES (leccion2.js)
   Contenido pedagógico estructurado para 3º ESO.
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
            <h3 class="bloque-titulo"><span>💡</span> El Mapa Completo de los Pronombres</h3>
            <p class="bloque-texto">
                En 3º de la ESO es crucial dominar la diferencia entre quién realiza la acción (<strong>Sujeto</strong>), quién la recibe (<strong>Objeto</strong>) y de quién es algo (<strong>Posesivos</strong>). Estudia detenidamente esta tabla comparativa:
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
            <h3 class="bloque-titulo"><span>📢</span> 1. Sujeto vs. Objeto</h3>
            <p class="bloque-texto">
                • El <strong>Sujeto</strong> siempre va <strong>delante del verbo</strong>.<br>
                • El <strong>Objeto</strong> siempre va <strong>detrás del verbo</strong> o de una preposición (like, with, for, to).
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en"><strong>I</strong> love <strong>her</strong>.</div>
                    <div class="ejemplo-es"><strong>Yo</strong> la amo a <strong>ella</strong>. (Yo = Sujeto, her = Objeto)</div>
                    <div class="ejemplo-pron">🗣 /ai lav jer/</div>
                </div>
                <div class="ejemplo-card" style="border-left-color: var(--azul);">
                    <div class="ejemplo-en">Can you help <strong>us</strong>?</div>
                    <div class="ejemplo-es">¿Puedes ayudar<strong>nos</strong> (a nosotros)? (us = Objeto)</div>
                    <div class="ejemplo-pron">🗣 /kan iú jelp as/</div>
                </div>
            </div>
        </div>

        <div class="bloque-explicacion">
            <h3 class="bloque-titulo"><span>🏠</span> 2. Posesivo Adjetivo vs. Posesivo Pronombre</h3>
            <p class="bloque-texto">
                Esta es la pregunta estrella de los exámenes de instituto:<br>
                • El <strong>Adjetivo Posesivo (my, your, her)</strong> necesita ir acompañado por un objeto detrás: <em>"My car"</em>.<br>
                • El <strong>Pronombre Posesivo (mine, yours, hers)</strong> va **completamente solo** porque reemplaza al objeto para no repetirlo: <em>"This car is mine"</em>.
            </p>
            <div class="ejemplos-grid">
                <div class="ejemplo-card">
                    <div class="ejemplo-en">This is <strong>my</strong> book.</div>
                    <div class="ejemplo-es">Este es <strong>mi</strong> libro. (my + libro)</div>
                    <div class="ejemplo-pron">🗣 /dis is mai buk/</div>
                </div>
                <div class="ejemplo-card">
                    <div class="ejemplo-en">This book is <strong>mine</strong>.</div>
                    <div class="ejemplo-es">Este libro es <strong>mío</strong>. (mine va solo)</div>
                    <div class="ejemplo-pron">🗣 /dis buk is máin/</div>
                </div>
            </div>
        </div>

        <div class="nota">
            <div class="nota-icono">💡</div>
            <div>
                <strong>¡Truco de Examen!</strong><br>
                Si al final de una frase ves un hueco con un punto inmediatamente después (ej. <em>"That pencil is ______."</em>), la respuesta correcta **casi seguro** será un Pronombre Posesivo terminado en <strong>-s</strong> (yours, hers, ours, theirs) o <strong>mine</strong>, porque no hay ningún sustantivo al que calificar.
            </div>
        </div>
    `,
    
    // --- EJERCICIOS INTERACTIVOS ---
    ejercicios: [
        {
            tipo: "test",
            pregunta: "Completa la frase: We don't need help. We can do it by <span class='hueco'>______</span>.",
            opciones: ["us", "ours", "ourselves", "our"],
            correcta: "ourselves",
            explicacion: "Aunque es un pronombre reflexivo (por nosotros mismos), 'ourselves' encaja con el sujeto 'We'. Si fuera objeto simple usaríamos 'us' detrás de preposiciones normales."
        },
        {
            tipo: "test",
            pregunta: "Completa la frase: 'I found a pen. Is it <span class='hueco'>______</span>?' (¿Es tuyo?)",
            opciones: ["your", "yours", "you"],
            correcta: "yours",
            explicacion: "Como el espacio está al final de la pregunta y no tiene ningún sustantivo detrás, se usa el pronombre posesivo 'yours'."
        },
        {
            tipo: "ordenar",
            pregunta: "Ordena la frase: Él vive con ellos.",
            palabras: ["with", "lives", "He", "them."],
            fraseCorrecta: "He lives with them.",
            explicacion: "El sujeto 'He' realiza la acción y va antes del verbo. Detrás de la preposición 'with' debemos colocar el pronombre objeto 'them'."
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
