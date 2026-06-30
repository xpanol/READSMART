const originalTexts = [
  {
    id: "email-performance-b2",
    title: "Paid search isn't converting — here's why",
    tag: "English · Performance · B2",
    audioFile: "audio1_MD_RS_EN.mp3",
    body: `Hi team,

I wanted to flag something before we go into next week's budget review. Our paid search campaigns are generating solid click volume — CTR is up 18% month over month — but conversion rate has dropped from 4.2% to 2.7% in the last three weeks. That gap between clicks and conversions is costing us roughly $4,200 in wasted spend.

I ran the numbers by segment and the pattern is clear. Mobile traffic converts at 1.1% while desktop sits at 5.8%. We are sending mobile users to a landing page that loads in 6.3 seconds and requires three scrolls to reach the form. On mobile, that is a dead end.

My recommendation: pause the mobile bid adjustments, redirect that budget to desktop campaigns while the dev team fixes the landing page experience, and set a two-week deadline for the fix. We should not keep paying for traffic that has nowhere to go.

Happy to walk through the full breakdown on Thursday.

Alex`
  },
  {
    id: "article-seo-c1",
    title: "The end of keyword-first SEO — what replaces it",
    tag: "English · SEO · C1",
    audioFile: "audio2_MD_RS_EN.mp3",
    body: `For the better part of a decade, SEO strategy was built on a simple premise: identify the keywords your audience searches, produce content that targets those keywords, and accumulate enough backlinks to outrank your competitors. That model is functionally obsolete.

Google's shift toward semantic search, reinforced by the Helpful Content Update and the integration of AI Overviews into the SERP, has fundamentally changed what it means to rank. The question is no longer whether your page contains a keyword. The question is whether your page demonstrates genuine expertise on a topic in a way that satisfies the full spectrum of search intent — informational, navigational, commercial, and transactional — within a coherent topical architecture.

The practical implication for digital marketing teams is uncomfortable: volume-first content strategies, where production cadence is treated as a proxy for authority, are now a liability. A site with 800 thin articles targeting individual keywords will consistently underperform a site with 80 deeply researched pieces organised around pillar topics and supported by a rigorous internal linking structure.

The transition demands a shift in how marketing teams measure content performance. Ranking position for a single keyword is a vanity metric. What matters is topical authority score, share of voice across an entire subject cluster, and the degree to which organic traffic compounds month over month without proportional increases in publishing frequency. That compounding effect — not individual article rankings — is the true signal of a content programme that has earned Google's trust.`
  },
  {
    id: "social-client-b2",
    title: "Your Instagram isn't broken — your strategy is",
    tag: "English · Social media · B2",
    audioFile: "audio3_MD_RS_EN.mp3",
    body: `Before we look at next quarter's plan, I want to address something directly: your Instagram engagement dropped 34% in Q2, and boosting posts is not going to fix it.

Here is what the data tells us. Your top five performing posts in the last six months were all behind-the-scenes content — your team at the trade show, the product packaging process, the founder answering customer questions on Stories. Your bottom five were all polished product shots with promotional captions.

Your audience is not ignoring your brand. They are ignoring your ads. There is a difference, and it matters for how we invest the next quarter's budget.

The strategy we are proposing shifts 60% of content production toward authentic formats: short-form video, employee-generated content, and interactive Stories with polls and question boxes. The remaining 40% goes to conversion-focused content that we will amplify through paid, but only after it has proven organic engagement. We stop paying to push content that people are already choosing to scroll past.

This is not a creative opinion. It is what your own performance data is telling us to do.`
  },
  {
    id: "email-performance-es-b2",
    title: "El problema no son los anuncios — es la página de destino",
    tag: "Español · Performance · B2",
    audioFile: "audio4_MD_RS_ES.mp3",
    body: `Hola equipo,

Antes de la reunión del jueves quiero compartir algo que encontré revisando los datos de esta semana.

Nuestras campañas de Meta están funcionando bien en términos de alcance y coste por clic, que está en 0,38€, por debajo del objetivo. El problema está después del clic. La tasa de conversión en la página de producto cayó del 3,1% al 1,6% desde que actualizamos el diseño el 14 de este mes.

Hice una comparación entre la versión anterior y la actual con los datos de Hotjar. El mapa de calor muestra que el 68% de los usuarios móviles abandona antes de ver el formulario de contacto porque hay demasiado texto antes del CTA principal. En la versión anterior, el botón estaba en el primer scroll. Ahora está en el tercero.

Propongo hacer dos cosas esta semana: primero, restaurar la versión anterior de la landing mientras rediseñamos; segundo, crear una versión alternativa con el CTA arriba para testear. No podemos seguir pagando por tráfico que llega a una página que no convierte.

¿Podemos hablar el miércoles antes de la reunión con el cliente?

Sara`
  },
  {
    id: "article-brand-es-c1",
    title: "Por qué las marcas que priorizan la conversión están perdiendo el mercado",
    tag: "Español · Brand strategy · C1",
    audioFile: "audio5_MD_RS_ES.mp3",
    body: `Existe una paradoja que se repite en los equipos de marketing digital maduros: cuanto más sofisticado es el sistema de atribución, más miope se vuelve la estrategia. Al optimizar cada euro de inversión hacia métricas de conversión de corto plazo, las marcas erosionan silenciosamente el activo que hace posible cualquier conversión: el reconocimiento y la preferencia de marca.

Los datos del sector son consistentes. Los estudios de IPA y Binet y Field sobre efectividad en publicidad demuestran que la relación óptima entre inversión en marca y activación es aproximadamente 60/40. Sin embargo, la mayoría de los presupuestos digitales en España invierten esta proporción, destinando entre el 70% y el 80% a campañas de performance y relegando la construcción de marca a una partida residual o directamente al departamento de comunicación.

El resultado se manifiesta con retraso, lo que dificulta su diagnóstico. Una marca que reduce su inversión en notoriedad no sufre consecuencias inmediatas en sus métricas de conversión. El deterioro llega entre 12 y 24 meses después, cuando el volumen de búsqueda de marca empieza a caer, el coste por adquisición en paid sube porque la audiencia ya no reconoce la marca al verla, y los competidores que sí invirtieron en construcción de marca capturan la demanda latente que la empresa nunca cultivó.

La solución no es abandonar el performance. Es entender que el performance funciona sobre el sustrato que construye la marca. Sin ese sustrato, estás pagando cada vez más por convencer a personas que nunca han oído hablar de ti.`
  },
  {
    id: "informe-seo-es-b2",
    title: "Informe SEO mensual: lo que funcionó y lo que hay que cambiar",
    tag: "Español · SEO · B2",
    audioFile: "audio6_MD_RS_ES.mp3",
    body: `El tráfico orgánico creció un 12% respecto al mes anterior, principalmente gracias a tres artículos publicados en abril que ya están posicionando en primera página para términos de intención comercial. Esa es la buena noticia.

La mala noticia es que nuestras páginas de producto siguen sin aparecer para búsquedas transaccionales. El problema no es la calidad del contenido, sino la estructura técnica. Detectamos errores de canonicalización en 34 URLs de producto y un tiempo de carga superior a cuatro segundos en móvil, lo que penaliza directamente el posicionamiento en ese segmento.

Las acciones prioritarias para junio son tres. Primero, corregir los errores de canonicalización antes del día 10. Segundo, comprimir las imágenes de producto y activar la carga diferida para mejorar el Core Web Vitals. Tercero, publicar dos artículos orientados a palabras clave de comparativa, que tienen la mayor intención de compra en nuestro sector y donde aún no tenemos presencia.

Si ejecutamos estas tres acciones, la proyección para julio es un incremento adicional del 18% en tráfico orgánico y una mejora significativa en la tasa de conversión de las páginas de producto.`
  }
];

const starterGlossary = {
  "adjust": { es: "ajustar", part: "verb", note: "To change something slightly to improve the result." },
  "analytics": { es: "analítica", part: "noun", note: "Data used to understand performance and behavior." },
  "audience": { es: "audiencia", part: "noun", note: "The group of people a campaign is trying to reach." },
  "bilingual": { es: "bilingüe", part: "adjective", note: "Able to use two languages in daily or professional life." },
  "campaign": { es: "campaña", part: "noun", note: "A planned set of marketing activities with one goal." },
  "calls": { es: "llamadas", part: "noun", note: "Meetings by phone or video." },
  "client": { es: "cliente", part: "noun", note: "A person or company buying professional services." },
  "confidence": { es: "confianza", part: "noun", note: "The feeling that you can handle the situation." },
  "content": { es: "contenido", part: "noun", note: "Marketing material such as articles, posts, emails, or videos." },
  "conversion": { es: "conversión", part: "noun", note: "When a visitor completes the desired action." },
  "dashboard": { es: "panel de control", part: "noun", note: "A screen that summarizes key metrics." },
  "decided": { es: "decidió", part: "verb", note: "Chose an action after discussion." },
  "digital": { es: "digital", part: "adjective", note: "Related to online channels, platforms, or data." },
  "directivo": { en: "executive", part: "noun", note: "A senior decision-maker in a company." },
  "embudo": { en: "funnel", part: "noun", note: "The marketing path from awareness to purchase." },
  "equipo": { en: "team", part: "noun", note: "People working together on a shared goal." },
  "estrategia": { en: "strategy", part: "noun", note: "A plan that connects goals, audience, message, and action." },
  "expat": { es: "expatriado", part: "noun", note: "A person living outside their home country." },
  "expatriada": { en: "expat woman", part: "noun", note: "A woman living outside her home country." },
  "faster": { es: "más rápido", part: "adjective", note: "Happening with more speed." },
  "freelance": { es: "freelance", part: "adjective", note: "Working independently for clients." },
  "grew": { es: "creció", part: "verb", note: "Increased over time." },
  "healthy": { es: "saludable", part: "adjective", note: "Performing well or showing good signs." },
  "hook": { es: "gancho", part: "noun", note: "The opening idea that catches attention." },
  "intent": { es: "intención", part: "noun", note: "A sign that someone may be ready to act or buy." },
  "landing": { es: "de aterrizaje", part: "adjective", note: "Related to the web page where visitors arrive." },
  "leads": { es: "contactos potenciales", part: "noun", note: "People or companies that may become customers." },
  "logic": { es: "lógica", part: "noun", note: "The reasoning behind a decision or process." },
  "manager": { es: "responsable", part: "noun", note: "A person who coordinates work or people." },
  "marketing": { es: "marketing", part: "noun", note: "Work that helps a product, service, or idea reach customers." },
  "matiz": { en: "nuance", part: "noun", note: "A small but important difference in meaning or tone." },
  "métricas": { en: "metrics", part: "noun", note: "Numbers used to measure performance." },
  "metricas": { en: "metrics", part: "noun", note: "Numbers used to measure performance." },
  "monthly": { es: "mensual", part: "adjective", note: "Happening once a month." },
  "oportunidades": { en: "opportunities", part: "noun", note: "Potential business chances or leads." },
  "organic": { es: "orgánico", part: "adjective", note: "Traffic gained without direct ad payment." },
  "paid": { es: "pagado", part: "adjective", note: "Promoted through advertising spend." },
  "promise": { es: "promesa", part: "noun", note: "The main value a page or message offers." },
  "reach": { es: "alcance", part: "noun", note: "The number of people who see a campaign." },
  "refresh": { es: "actualización", part: "noun", note: "An update that makes content feel current again." },
  "reporting": { es: "informes", part: "noun", note: "Explaining results through numbers and narrative." },
  "retainer": { es: "cuota mensual", part: "noun", note: "A regular monthly agreement for ongoing work." },
  "rhythm": { es: "ritmo", part: "noun", note: "The pattern or flow of work." },
  "social": { es: "redes sociales", part: "noun", note: "Marketing channels such as Instagram, LinkedIn, or TikTok." },
  "stand-up": { es: "reunión breve", part: "noun", note: "A short team meeting to align on work." },
  "strategy": { es: "estrategia", part: "noun", note: "A plan for reaching a business or marketing goal." },
  "switching": { es: "cambio", part: "noun", note: "Moving from one language, task, or context to another." },
  "team": { es: "equipo", part: "noun", note: "People working together." },
  "traffic": { es: "tráfico", part: "noun", note: "Visitors coming to a website or page." },
  "tráfico": { en: "traffic", part: "noun", note: "Visitors coming to a website or page." },
  "trafico": { en: "traffic", part: "noun", note: "Visitors coming to a website or page." },
  "urgencia": { en: "urgency", part: "noun", note: "The sense that something needs quick action." },
  "weaker": { es: "más débil", part: "adjective", note: "Less strong or less effective." }
};

const commonWords = {
  "acciones": { en: "actions", part: "noun", note: "Practical next steps after analysis." },
  "also": { es: "también", part: "adverb", note: "In addition." },
  "and": { es: "y", part: "conjunction", note: "Connects words or ideas." },
  "audiencia": { en: "audience", part: "noun", note: "The group of people a campaign is trying to reach." },
  "between": { es: "entre", part: "preposition", note: "In the space separating two things." },
  "but": { es: "pero", part: "conjunction", note: "Introduces contrast." },
  "cada": { en: "each", part: "adjective", note: "Every single one." },
  "clara": { en: "clear", part: "adjective", note: "Easy to understand." },
  "claridad": { en: "clarity", part: "noun", note: "The quality of being clear and easy to understand." },
  "clearer": { es: "más claro", part: "adjective", note: "Easier to understand." },
  "clarity": { es: "claridad", part: "noun", note: "The quality of being clear and easy to understand." },
  "cómo": { en: "as / how", part: "adverb", note: "Used for comparison or manner." },
  "como": { en: "as / how", part: "adverb", note: "Used for comparison or manner." },
  "con": { en: "with", part: "preposition", note: "Together with something." },
  "confianza": { en: "confidence", part: "noun", note: "Trust or belief that something can work." },
  "convertir": { en: "convert", part: "verb", note: "To change a visitor into a lead or customer." },
  "de": { en: "of / from", part: "preposition", note: "Shows relation, origin, or possession." },
  "during": { es: "durante", part: "preposition", note: "Happening in a period of time." },
  "el": { en: "the", part: "article", note: "Masculine singular definite article." },
  "en": { en: "in / on", part: "preposition", note: "Marks place, time, or context." },
  "english": { es: "inglés", part: "noun", note: "The English language." },
  "es": { en: "is", part: "verb", note: "Third person singular of ser." },
  "exaggerar": { en: "exaggerate", part: "verb", note: "To make something seem bigger than it is." },
  "explained": { es: "explicó", part: "verb", note: "Made something clear to others." },
  "explicar": { en: "explain", part: "verb", note: "To make something clear." },
  "for": { es: "para", part: "preposition", note: "Shows purpose or audience." },
  "la": { en: "the", part: "article", note: "Feminine singular definite article." },
  "las": { en: "the", part: "article", note: "Feminine plural definite article." },
  "los": { en: "the", part: "article", note: "Masculine plural definite article." },
  "más": { en: "more", part: "adverb", note: "A larger amount or degree." },
  "mas": { en: "more", part: "adverb", note: "A larger amount or degree." },
  "mensual": { en: "monthly", part: "adjective", note: "Happening once a month." },
  "more": { es: "más", part: "adverb", note: "A larger amount or degree." },
  "no": { en: "not", part: "adverb", note: "Negates a phrase or sentence." },
  "not": { es: "no", part: "adverb", note: "Negates a phrase or sentence." },
  "para": { en: "for", part: "preposition", note: "Shows purpose or audience." },
  "persona": { en: "person", part: "noun", note: "A human being." },
  "pidió": { en: "asked for", part: "verb", note: "Requested something." },
  "pidio": { en: "asked for", part: "verb", note: "Requested something." },
  "real": { en: "real", part: "adjective", note: "Actual, not imagined." },
  "reales": { en: "real", part: "adjective", note: "Actual, not imagined." },
  "resultado": { en: "result", part: "noun", note: "The outcome of work or action." },
  "revisó": { en: "reviewed", part: "verb", note: "Looked at something carefully." },
  "reviso": { en: "reviewed", part: "verb", note: "Looked at something carefully." },
  "sin": { en: "without", part: "preposition", note: "Not having something." },
  "solo": { en: "only", part: "adverb", note: "Nothing more than." },
  "también": { en: "also", part: "adverb", note: "In addition." },
  "tambien": { en: "also", part: "adverb", note: "In addition." },
  "técnicas": { en: "technical", part: "adjective", note: "Related to specialist knowledge." },
  "tecnicas": { en: "technical", part: "adjective", note: "Related to specialist knowledge." },
  "the": { es: "el / la", part: "article", note: "Definite article in English." },
  "to": { es: "a / para", part: "preposition", note: "Shows direction, purpose, or infinitive." },
  "tono": { en: "tone", part: "noun", note: "The feeling or attitude in a message." },
  "was": { es: "era / estaba", part: "verb", note: "Past form of be." },
  "who": { es: "quién", part: "pronoun", note: "Used to ask or say which person someone is." },
  "without": { es: "sin", part: "preposition", note: "Not having something." }
};

const glossaryKey = "readSmartGlossary";
const autoGlossaryKey = "readSmartAutoGlossaryV5";
const customTextsKey = "readSmartCustomTexts";
let activeTextId = originalTexts[0].id;
let lockedWord = null;
let readerSize = 22;
let popupRequestId = 0;
let editingTextId = null;
let editingWordKey = null;

const els = {
  languageMode: document.querySelector("#languageMode"),
  textCount: document.querySelector("#textCount"),
  textList: document.querySelector("#textList"),
  activeTitle: document.querySelector("#activeTitle"),
  readingText: document.querySelector("#readingText"),
  textForm: document.querySelector("#textForm"),
  customTitle: document.querySelector("#customTitle"),
  customBody: document.querySelector("#customBody"),
  glossaryForm: document.querySelector("#glossaryForm"),
  wordInput: document.querySelector("#wordInput"),
  translationInput: document.querySelector("#translationInput"),
  partInput: document.querySelector("#partInput"),
  explanationInput: document.querySelector("#explanationInput"),
  popup: document.querySelector("#wordPopup"),
  popupPart: document.querySelector("#popupPart"),
  popupDirection: document.querySelector("#popupDirection"),
  popupWord: document.querySelector("#popupWord"),
  popupTranslation: document.querySelector("#popupTranslation"),
  popupExplanation: document.querySelector("#popupExplanation"),
  popupAdd: document.querySelector("#popupAdd"),
  decreaseFont: document.querySelector("#decreaseFont"),
  increaseFont: document.querySelector("#increaseFont"),
  glossarySubmitBtn: document.querySelector("#glossaryForm button[type='submit']"),
  glossaryList: null,
  speechBtn: null,
  translateBtn: null
};

// Create and inject the custom glossary list panel
(function initGlossaryListPanel() {
  const editorSection = document.querySelector(".glossary-editor");
  if (!editorSection) return;
  const listDiv = document.createElement("div");
  listDiv.id = "customGlossaryList";
  listDiv.className = "custom-glossary-list";
  editorSection.appendChild(listDiv);
  els.glossaryList = listDiv;
})();

function getCustomGlossary() {
  return JSON.parse(localStorage.getItem(glossaryKey) || "{}");
}

function saveCustomGlossary(glossary) {
  localStorage.setItem(glossaryKey, JSON.stringify(glossary));
}

function getAutoGlossary() {
  return JSON.parse(localStorage.getItem(autoGlossaryKey) || "{}");
}

function saveAutoGlossary(glossary) {
  localStorage.setItem(autoGlossaryKey, JSON.stringify(glossary));
}

function getGlossary() {
  return { ...commonWords, ...starterGlossary, ...getAutoGlossary(), ...getCustomGlossary() };
}

function getCustomTexts() {
  return JSON.parse(localStorage.getItem(customTextsKey) || "[]");
}

function saveCustomTexts(texts) {
  localStorage.setItem(customTextsKey, JSON.stringify(texts));
}

function getAllTexts() {
  return [...originalTexts, ...getCustomTexts()];
}

function normalizeWord(word) {
  return word.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function isAcronym(word) {
  return word.length > 1 && word === word.toUpperCase() && /[A-Z]/.test(word);
}

function getAutoCacheKey(word, direction) {
  const normalized = normalizeWord(word);
  return `${direction}:${isAcronym(word) ? word : normalized}`;
}

const spanishWordHints = new Set([
  "audiencia", "antes", "campana", "campaña", "claridad", "cliente", "clientes", "comprar", "confianza",
  "contenido", "equipo", "estrategia", "mercado", "mensaje", "objetivo", "quiere", "quieren",
  "tambien", "también", "trabajo", "trafico", "tráfico", "venta", "ventas"
]);

const englishWordHints = new Set([
  "ambitious", "are", "bidding", "brand", "brief", "budget", "careful", "clarity", "confidence",
  "content", "copy", "experiments", "growth", "launch", "market", "marketer", "marketers",
  "me", "optimization", "remote", "requires", "segmentation", "supports", "tell", "testing", "you"
]);

function detectDirection(word, entry, context = "") {
  const mode = els.languageMode.value;
  if (mode !== "auto") return mode;
  if (entry?.en) return "es-en";
  if (entry?.es) return "en-es";

  return guessSourceLanguage(word, context) === "es" ? "es-en" : "en-es";
}

function guessSourceLanguage(word, context = "") {
  const key = normalizeWord(word);
  const normalizedContext = normalizeWord(context);
  let spanishScore = 0;
  let englishScore = 0;

  if (/[ñáéíóúü]/i.test(word)) spanishScore += 5;
  if (spanishWordHints.has(key)) spanishScore += 4;
  if (englishWordHints.has(key)) englishScore += 4;

  if (/(cion|sion|dad|idad|mente|aje|ando|iendo|amos|emos|imos|ado|ada|idos|idas)$/.test(key)) {
    spanishScore += 3;
  }

  if (/(ing|ed|ness|tion|ment|ship|ity|ence|ance|ous|ful|less)$/.test(key)) {
    englishScore += 3;
  }

  const spanishContextMatches = normalizedContext.match(/\b(el|la|los|las|un|una|de|del|que|para|con|sin|muy|mas|cliente|equipo|campana|estrategia|audiencia|quiere|quieren)\b/g) || [];
  const englishContextMatches = normalizedContext.match(/\b(the|a|an|and|to|for|with|without|very|more|client|team|campaign|strategy|audience|wants|want|you|are)\b/g) || [];
  spanishScore += spanishContextMatches.length;
  englishScore += englishContextMatches.length;

  return spanishScore > englishScore ? "es" : "en";
}

function lookupWord(rawWord, context = "") {
  const key = normalizeWord(rawWord);
  const glossary = getGlossary();
  const acronymEntry = getAcronymEntry(rawWord);
  let entry = acronymEntry || glossary[key];
  const direction = detectDirection(rawWord, entry, context);
  entry = entry || getAutoGlossary()[getAutoCacheKey(rawWord, direction)];

  if (entry) {
    return {
      known: true,
      word: rawWord,
      direction,
      part: entry.part,
      translation: direction === "es-en" ? entry.en || entry.es : entry.es || entry.en,
      note: entry.note
    };
  }

  return {
    known: false,
    word: rawWord,
    direction,
    part: "unknown",
    translation: "Translating...",
    note: "Looking up this word automatically with sentence context."
  };
}

function getAcronymEntry(rawWord) {
  const key = normalizeWord(rawWord);
  if (!isAcronym(rawWord)) return null;

  const acronyms = {
    who: {
      es: "OMS",
      part: "acronym",
      note: "World Health Organization. Lowercase 'who' means 'quien'."
    }
  };

  return acronyms[key] || null;
}

function getContextualEntry(rawWord, direction, context) {
  const key = normalizeWord(rawWord);
  if (isAcronym(rawWord)) return getAcronymEntry(rawWord);

  const englishQuestionWords = {
    who: { es: "quién", part: "pronoun", note: "Context-aware: in this sentence, 'who' asks which person." },
    what: { es: "qué", part: "pronoun", note: "Context-aware: asks for a thing, action, or idea." },
    where: { es: "dónde", part: "adverb", note: "Context-aware: asks about place." },
    when: { es: "cuándo", part: "adverb", note: "Context-aware: asks about time." },
    why: { es: "por qué", part: "adverb", note: "Context-aware: asks about reason." },
    how: { es: "cómo", part: "adverb", note: "Context-aware: asks about manner or method." }
  };

  const spanishQuestionWords = {
    quién: { en: "who", part: "pronoun", note: "Context-aware: asks which person." },
    quien: { en: "who", part: "pronoun", note: "Context-aware: asks which person." },
    qué: { en: "what", part: "pronoun", note: "Context-aware: asks for a thing, action, or idea." },
    que: { en: "what", part: "pronoun", note: "Context-aware: asks for a thing, action, or idea." },
    dónde: { en: "where", part: "adverb", note: "Context-aware: asks about place." },
    donde: { en: "where", part: "adverb", note: "Context-aware: asks about place." },
    cuándo: { en: "when", part: "adverb", note: "Context-aware: asks about time." },
    cuando: { en: "when", part: "adverb", note: "Context-aware: asks about time." },
    "por qué": { en: "why", part: "adverb", note: "Context-aware: asks about reason." },
    porque: { en: "why", part: "adverb", note: "Context-aware: asks about reason." },
    cómo: { en: "how", part: "adverb", note: "Context-aware: asks about manner or method." },
    como: { en: "how", part: "adverb", note: "Context-aware: asks about manner or method." }
  };

  const normalizedContext = normalizeWord(context || "");
  const looksQuestionLike = /(^|\s)(tell|ask|know|explain|decide|say|saber|decir|preguntar|explicar)(\s|$)/.test(normalizedContext) ||
    /[?¿]/.test(context || "");

  if (direction === "en-es" && englishQuestionWords[key] && looksQuestionLike) {
    return englishQuestionWords[key];
  }

  if (direction === "es-en" && spanishQuestionWords[key] && looksQuestionLike) {
    return spanishQuestionWords[key];
  }

  return null;
}

function getLanguagePair(direction) {
  return direction === "es-en" ? "es|en" : "en|es";
}

function getTargetField(direction) {
  return direction === "es-en" ? "en" : "es";
}

function guessPartOfSpeech(word) {
  const normalized = normalizeWord(word);
  if (normalized.endsWith("ly") || normalized.endsWith("mente")) return "likely adverb";
  if (
    normalized.endsWith("ing") ||
    normalized.endsWith("ed") ||
    normalized.endsWith("ar") ||
    normalized.endsWith("er") ||
    normalized.endsWith("ir")
  ) {
    return "likely verb";
  }
  if (
    normalized.endsWith("able") ||
    normalized.endsWith("ible") ||
    normalized.endsWith("ive") ||
    normalized.endsWith("ic") ||
    normalized.endsWith("al") ||
    normalized.endsWith("ico") ||
    normalized.endsWith("ica") ||
    normalized.endsWith("oso") ||
    normalized.endsWith("osa")
  ) {
    return "likely adjective";
  }
  return "likely noun";
}

async function fetchAutoTranslation(rawWord, direction, context) {
  const contextualEntry = getContextualEntry(rawWord, direction, context);
  if (contextualEntry) return contextualEntry;

  const key = getAutoCacheKey(rawWord, direction);
  const autoGlossary = getAutoGlossary();
  const cached = autoGlossary[key];
  const targetField = getTargetField(direction);

  if (cached?.[targetField]) {
    return cached;
  }

  const translatedText = await requestGoogleTranslation(rawWord, direction)
    .catch(() => requestMyMemoryTranslation(rawWord, direction));

  if (!translatedText) {
    throw new Error("No translation returned.");
  }

  const entry = {
    [targetField]: translatedText,
    part: guessPartOfSpeech(rawWord),
    note: context
      ? `Auto translation using this sentence as context: "${context}"`
      : "Auto translation. Check the surrounding sentence, because single words can change meaning by context.",
    auto: true
  };

  autoGlossary[key] = entry;
  saveAutoGlossary(autoGlossary);
  return entry;
}

async function requestGoogleTranslation(rawWord, direction) {
  const queryWord = isAcronym(rawWord) ? rawWord : rawWord.toLowerCase();
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", direction === "es-en" ? "es" : "en");
  url.searchParams.set("tl", direction === "es-en" ? "en" : "es");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", queryWord);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Primary translation service is unavailable.");
  }

  const payload = await response.json();
  return payload?.[0]?.map((item) => item?.[0]).join("").trim();
}

async function requestMyMemoryTranslation(rawWord, direction) {
  const queryWord = isAcronym(rawWord) ? rawWord : rawWord.toLowerCase();
  const url = new URL("https://api.mymemory.translated.net/get");
  url.searchParams.set("q", queryWord);
  url.searchParams.set("langpair", getLanguagePair(direction));

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Fallback translation service is unavailable.");
  }

  const payload = await response.json();
  return payload?.responseData?.translatedText?.trim();
}

function renderTextList() {
  const texts = getAllTexts();
  els.textCount.textContent = texts.length;
  els.textList.innerHTML = "";

  texts.forEach((text) => {
    const isCustom = text.id.startsWith("custom-");
    const isEditing = editingTextId === text.id;
    const item = document.createElement("div");
    item.className = "text-card" + (text.id === activeTextId ? " active" : "");

    if (isCustom && isEditing) {
      const editTitleInput = document.createElement("input");
      editTitleInput.type = "text";
      editTitleInput.className = "edit-title-input";
      editTitleInput.value = text.title;
      editTitleInput.placeholder = "Title";

      const editBodyInput = document.createElement("textarea");
      editBodyInput.className = "edit-body-input";
      editBodyInput.rows = 5;
      editBodyInput.value = text.body;

      const actionsRow = document.createElement("div");
      actionsRow.className = "edit-actions";

      const saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "save-edit-text";
      saveBtn.textContent = "Save";
      saveBtn.addEventListener("click", () => {
        const newTitle = editTitleInput.value.trim() || text.title;
        const newBody = editBodyInput.value.trim();
        if (!newBody) return;
        const customTexts = getCustomTexts();
        const idx = customTexts.findIndex((t) => t.id === text.id);
        if (idx !== -1) {
          customTexts[idx].title = newTitle;
          customTexts[idx].body = newBody;
          saveCustomTexts(customTexts);
        }
        editingTextId = null;
        renderApp();
      });

      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "cancel-edit-text cancel-btn";
      cancelBtn.textContent = "Cancel";
      cancelBtn.addEventListener("click", () => {
        editingTextId = null;
        renderApp();
      });

      actionsRow.appendChild(saveBtn);
      actionsRow.appendChild(cancelBtn);

      const editWrapper = document.createElement("div");
      editWrapper.className = "text-edit-form";
      editWrapper.appendChild(editTitleInput);
      editWrapper.appendChild(editBodyInput);
      editWrapper.appendChild(actionsRow);
      item.appendChild(editWrapper);
    } else {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "text-card-main";
      button.innerHTML = "<strong>" + escapeHtml(text.title) + "</strong><span>" + escapeHtml(text.tag || "User text") + "</span>";
      button.addEventListener("click", () => {
        activeTextId = text.id;
        renderApp();
      });
      item.appendChild(button);

      if (isCustom) {
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "edit-text";
        editButton.setAttribute("aria-label", "Edit " + text.title);
        editButton.textContent = "Edit";
        editButton.addEventListener("click", (event) => {
          event.stopPropagation();
          editingTextId = text.id;
          renderApp();
        });
        item.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-text";
        deleteButton.setAttribute("aria-label", "Delete " + text.title);
        deleteButton.textContent = "Del";
        deleteButton.addEventListener("click", (event) => {
          event.stopPropagation();
          deleteCustomText(text.id);
        });
        item.appendChild(deleteButton);
      }
    }

    els.textList.appendChild(item);
  });
}

function deleteCustomText(textId) {
  const remainingTexts = getCustomTexts().filter((text) => text.id !== textId);
  saveCustomTexts(remainingTexts);

  if (activeTextId === textId) {
    activeTextId = originalTexts[0].id;
  }

  lockedWord = null;
  hidePopup();
  renderApp();
}

function renderReadingText() {
  const text = getAllTexts().find((item) => item.id === activeTextId) || originalTexts[0];
  els.activeTitle.textContent = text.title;
  els.readingText.innerHTML = text.body
    .split(/\n\s*\n/)
    .map((paragraph) => `<p>${tokenize(paragraph)}</p>`)
    .join("");
}

function tokenize(paragraph) {
  return paragraph.replace(/([A-Za-zÀ-ÿ]+(?:-[A-Za-zÀ-ÿ]+)?)/g, (match) => {
    const known = lookupWord(match).known;
    return `<button type="button" class="word" data-word="${escapeAttribute(match)}" data-known="${known}">${escapeHtml(match)}</button>`;
  });
}

function renderCustomGlossary() {
  if (!els.glossaryList) return;
  const glossary = getCustomGlossary();
  const entries = Object.entries(glossary);
  els.glossaryList.innerHTML = "";

  if (entries.length === 0) {
    els.glossaryList.innerHTML = "<p class='no-glossary-entries'>No custom entries yet.</p>";
    return;
  }

  entries.forEach(([key, entry]) => {
    const translation = entry.en || entry.es || "";
    const row = document.createElement("div");
    row.className = "glossary-row";

    const info = document.createElement("div");
    info.className = "glossary-row-info";
    info.innerHTML =
      "<strong>" + escapeHtml(key) + "</strong>" +
      "<span class='glossary-arrow'>" + escapeHtml(translation) + "</span>" +
      "<span class='glossary-part'>" + escapeHtml(entry.part || "") + "</span>";

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "glossary-edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      editingWordKey = key;
      els.wordInput.value = key;
      els.translationInput.value = translation;
      const partOpts = els.partInput.options;
      for (let i = 0; i < partOpts.length; i++) {
        if (partOpts[i].value === entry.part) { els.partInput.selectedIndex = i; break; }
      }
      els.explanationInput.value = entry.note || "";
      els.glossarySubmitBtn.textContent = "Update";
      els.wordInput.focus();
    });

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "glossary-delete-btn";
    delBtn.textContent = "Del";
    delBtn.addEventListener("click", () => {
      const g = getCustomGlossary();
      delete g[key];
      saveCustomGlossary(g);
      if (editingWordKey === key) {
        editingWordKey = null;
        els.glossaryForm.reset();
        els.glossarySubmitBtn.textContent = "Save";
      }
      renderApp();
    });

    row.appendChild(info);
    row.appendChild(editBtn);
    row.appendChild(delBtn);
    els.glossaryList.appendChild(row);
  });
}

function bindWordEvents() {
  document.querySelectorAll(".word").forEach((wordButton) => {
    wordButton.addEventListener("mouseenter", () => showPopup(wordButton));
    wordButton.addEventListener("focus", () => showPopup(wordButton));
    wordButton.addEventListener("click", (event) => {
      event.stopPropagation();
      lockedWord = wordButton;
      showPopup(wordButton);
    });
  });
}

function getSentenceContext(wordButton) {
  const paragraph = wordButton.closest("p")?.innerText || "";
  const word = wordButton.dataset.word || "";
  const sentences = paragraph.match(/[^.!?¿]+[.!?]?/g) || [paragraph];
  return (sentences.find((sentence) => normalizeWord(sentence).includes(normalizeWord(word))) || paragraph).trim();
}

function showPopup(wordButton) {
  const context = getSentenceContext(wordButton);
  const data = lookupWord(wordButton.dataset.word, context);
  const requestId = ++popupRequestId;
  const rect = wordButton.getBoundingClientRect();
  const popupWidth = Math.min(330, window.innerWidth - 28);
  const left = Math.min(Math.max(14, rect.left), window.innerWidth - popupWidth - 14);
  const topCandidate = rect.bottom + 10;
  const top = topCandidate + 210 > window.innerHeight ? Math.max(14, rect.top - 230) : topCandidate;

  els.popup.style.left = `${left}px`;
  els.popup.style.top = `${top}px`;
  els.popupPart.textContent = data.part;
  els.popupDirection.textContent = data.direction === "es-en" ? "ES to EN" : "EN to ES";
  els.popupWord.textContent = data.word;
  els.popupTranslation.textContent = data.translation || "Needs translation";
  els.popupExplanation.textContent = data.note;
  els.popupAdd.hidden = data.known || data.translation === "Translating...";
  els.popupAdd.dataset.word = data.word;
  els.popup.classList.add("visible");
  els.popup.setAttribute("aria-hidden", "false");

  if (!data.known) {
    translateUnknownWord(wordButton, data, context, requestId);
  }
}

async function translateUnknownWord(wordButton, data, context, requestId) {
  try {
    const entry = await fetchAutoTranslation(data.word, data.direction, context);
    if (requestId !== popupRequestId) return;

    const translated = data.direction === "es-en" ? entry.en : entry.es;
    wordButton.dataset.known = "true";
    els.popupPart.textContent = entry.part;
    els.popupTranslation.textContent = translated || "Needs translation";
    els.popupExplanation.textContent = entry.note;
    els.popupAdd.hidden = true;
  } catch (error) {
    if (requestId !== popupRequestId) return;

    els.popupPart.textContent = "unknown";
    els.popupTranslation.textContent = data.direction === "es-en" ? "Add English translation" : "Add Spanish translation";
    els.popupExplanation.textContent = "Automatic lookup failed. You can add a manual translation to the personal glossary.";
    els.popupAdd.hidden = false;
  }
}

function hidePopup() {
  if (lockedWord) return;
  els.popup.classList.remove("visible");
  els.popup.setAttribute("aria-hidden", "true");
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

els.readingText.addEventListener("mouseleave", hidePopup);

els.popup.addEventListener("mouseenter", () => {
  lockedWord = lockedWord || document.activeElement;
});

document.addEventListener("click", (event) => {
  if (!els.popup.contains(event.target) && !event.target.classList?.contains("word")) {
    lockedWord = null;
    hidePopup();
  }
});

els.languageMode.addEventListener("change", () => {
  renderReadingText();
  bindWordEvents();
});

els.textForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = els.customTitle.value.trim() || "Untitled user text";
  const body = els.customBody.value.trim();
  if (!body) return;

  const customTexts = getCustomTexts();
  const text = {
    id: `custom-${Date.now()}`,
    title,
    tag: "User text",
    body
  };
  customTexts.unshift(text);
  saveCustomTexts(customTexts);
  activeTextId = text.id;
  els.textForm.reset();
  renderApp();
});

els.glossaryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const word = normalizeWord(els.wordInput.value.trim());
  const translation = els.translationInput.value.trim();
  if (!word || !translation) return;

  const forcedMode = els.languageMode.value;
  const direction = forcedMode === "auto"
    ? (/[ñáéíóúü]/i.test(els.wordInput.value) ? "en" : "es")
    : (forcedMode === "es-en" ? "en" : "es");
  const glossary = getCustomGlossary();

  // If editing an existing entry under a different key, remove the old one
  if (editingWordKey && editingWordKey !== word) {
    delete glossary[editingWordKey];
  }

  glossary[word] = {
    [direction]: translation,
    part: els.partInput.value,
    note: els.explanationInput.value.trim() || "Personal glossary entry."
  };
  saveCustomGlossary(glossary);
  editingWordKey = null;
  els.glossaryForm.reset();
  els.glossarySubmitBtn.textContent = "Save";
  lockedWord = null;
  renderApp();
  els.popup.classList.remove("visible");
});

els.popupAdd.addEventListener("click", () => {
  els.wordInput.value = els.popupAdd.dataset.word || "";
  els.translationInput.focus();
});

els.decreaseFont.addEventListener("click", () => {
  readerSize = Math.max(18, readerSize - 2);
  document.documentElement.style.setProperty("--reader-size", `${readerSize}px`);
});

els.increaseFont.addEventListener("click", () => {
  readerSize = Math.min(32, readerSize + 2);
  document.documentElement.style.setProperty("--reader-size", `${readerSize}px`);
});

// ---- Web Speech API ----
let isSpeaking = false;

function initSpeechButton() {
  const readerActions = document.querySelector(".reader-actions");
  if (!readerActions || !window.speechSynthesis) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.id = "speechBtn";
  btn.setAttribute("aria-label", "Read text aloud");
  btn.textContent = "▶ Play";
  readerActions.prepend(btn);
  els.speechBtn = btn;
  btn.addEventListener("click", toggleSpeech);
}


const TTS_WORKER_URL = "https://withered-bread-30d3.xpanolparaxpats.workers.dev/";
const AUDIO_FOLDER = "";

function detectLangForSpeech(body) {
  const looksSpanish = /[áéíóúüñ¿¡]/i.test(body) ||
    (body.match(/\b(el|la|los|las|de|que|en|un|una|por|con|para|del)\b/gi) || []).length > 3;
  return looksSpanish ? "es" : "en";
}

let currentAudio = null;

function stopSpeech() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
  }
  isSpeaking = false;
  if (els.speechBtn) {
    els.speechBtn.textContent = "▶ Play";
    els.speechBtn.disabled = false;
  }
}

function playAudioUrl(url, isObjectUrl) {
  const audio = new Audio(url);
  currentAudio = audio;
  isSpeaking = true;
  els.speechBtn.textContent = "■ Stop";
  els.speechBtn.disabled = false;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => stopSpeech());
  }

  audio.onended = () => {
    isSpeaking = false;
    currentAudio = null;
    if (isObjectUrl) URL.revokeObjectURL(url);
    els.speechBtn.textContent = "▶ Play";
  };

  audio.onerror = () => stopSpeech();
}

async function toggleSpeech() {
  if (!els.speechBtn) return;

  if (isSpeaking) {
    stopSpeech();
    return;
  }

  const textObj = getAllTexts().find(t => t.id === activeTextId);
  if (!textObj) return;

  // Pre-recorded text: play the local MP3 file directly, no API call
  if (textObj.audioFile) {
    els.speechBtn.textContent = "Loading...";
    els.speechBtn.disabled = true;
    playAudioUrl(AUDIO_FOLDER + textObj.audioFile, false);
    return;
  }

  // Custom (user-added) text: generate audio live via ElevenLabs through the Worker
  els.speechBtn.textContent = "Loading...";
  els.speechBtn.disabled = true;

  const lang = detectLangForSpeech(textObj.body);

  try {
    const response = await fetch(TTS_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: textObj.body, lang: lang })
    });

    if (!response.ok) throw new Error("Worker error " + response.status);

    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
    const audioUrl = URL.createObjectURL(blob);
    playAudioUrl(audioUrl, true);
  } catch (e) {
    stopSpeech();
  }
}

function initSpeechButton() {
  const readerActions = document.querySelector(".reader-actions");
  if (!readerActions) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.id = "speechBtn";
  btn.setAttribute("aria-label", "Read text aloud");
  btn.textContent = "▶ Play";
  btn.addEventListener("click", toggleSpeech);
  els.speechBtn = btn;
  readerActions.prepend(btn);
}


// ---- Translate All toggle ----
let isTranslated = false;
let translationCache = {};

function detectTextLanguage(body) {
  const looksSpanish = /[áéíóúüñ¿¡]/i.test(body) ||
    (body.match(/\b(el|la|los|las|de|que|en|un|una|por|con|para|del)\b/gi) || []).length > 4;
  return looksSpanish ? "es" : "en";
}

async function translateParagraph(text, sourceLang) {
  const targetLang = sourceLang === "es" ? "en" : "es";
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", sourceLang);
  url.searchParams.set("tl", targetLang);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);
  const response = await fetch(url.toString());
  if (!response.ok) throw new Error("Translation failed");
  const payload = await response.json();
  return payload?.[0]?.map(item => item?.[0]).join("").trim();
}

async function toggleTranslateAll() {
  if (!els.translateBtn) return;
  const textObj = getAllTexts().find(t => t.id === activeTextId);
  if (!textObj) return;

  if (isTranslated) {
    isTranslated = false;
    els.translateBtn.textContent = "Translate all";
    renderReadingText();
    bindWordEvents();
    return;
  }

  els.translateBtn.textContent = "Translating...";
  els.translateBtn.disabled = true;

  const cacheKey = activeTextId;
  const sourceLang = detectTextLanguage(textObj.body);

  if (!translationCache[cacheKey]) {
    const paragraphs = textObj.body.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    try {
      const translated = await Promise.all(
        paragraphs.map(p => translateParagraph(p, sourceLang))
      );
      translationCache[cacheKey] = translated;
    } catch (e) {
      els.translateBtn.textContent = "Translate all";
      els.translateBtn.disabled = false;
      return;
    }
  }

  isTranslated = true;
  els.translateBtn.textContent = "Show original";
  els.translateBtn.disabled = false;

  const translated = translationCache[cacheKey];
  els.readingText.innerHTML = translated
    .map(p => "<p class='translated-paragraph'>" + escapeHtml(p) + "</p>")
    .join("");
}

function initTranslateButton() {
  const readerActions = document.querySelector(".reader-actions");
  if (!readerActions) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.id = "translateBtn";
  btn.setAttribute("aria-label", "Translate full text");
  btn.textContent = "Translate all";
  readerActions.prepend(btn);
  els.translateBtn = btn;
  btn.addEventListener("click", toggleTranslateAll);
}

function renderApp() {
  if (isSpeaking) {
    stopSpeech();
  }
  if (isTranslated) {
    isTranslated = false;
    if (els.translateBtn) {
      els.translateBtn.textContent = "Translate all";
      els.translateBtn.disabled = false;
    }
  }
  renderTextList();
  renderReadingText();
  bindWordEvents();
  renderCustomGlossary();
}

renderApp();
initSpeechButton();
initTranslateButton();
