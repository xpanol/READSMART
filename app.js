const originalTexts = [
  {
    id: "campaign-standup",
    title: "Monday campaign stand-up",
    tag: "English workplace",
    body: `At Monday stand-up, Maya explained that the paid social campaign was getting stronger reach but weaker qualified leads. The team decided to adjust the audience, rewrite the hook, and test a clearer landing page promise.

For bilingual expats, the tricky part was not the marketing logic. It was the rhythm of switching between English reporting and Spanish client calls without losing confidence.`
  },
  {
    id: "freelance-retainer",
    title: "Retainer call in Madrid",
    tag: "Spanish client work",
    body: `Durante la llamada mensual, el cliente pidió una estrategia más clara para convertir tráfico en oportunidades reales. El equipo revisó el embudo, la tasa de conversión y el mensaje principal de la campaña.

Para una persona expatriada, entender cada matiz importa: no solo las palabras técnicas, también el tono, la urgencia y la expectativa comercial.`
  },
  {
    id: "analytics-note",
    title: "Analytics note to a manager",
    tag: "Mixed digital marketing",
    body: `The dashboard looks healthy, but the story is more nuanced. Organic traffic grew after the content refresh, while paid search brought faster intent signals. Necesitamos explicar el resultado sin exagerar, porque el equipo directivo quiere acciones, no solo métricas.`
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

function detectLangForSpeech(body) {
  const looksSpanish = /[áéíóúüñ¿¡]/i.test(body) ||
    (body.match(/\b(el|la|los|las|de|que|en|un|una|por|con|para|del)\b/gi) || []).length > 3;
  return looksSpanish ? "es" : "en";
}

let currentAudio = null;

async function toggleSpeech() {
  if (!els.speechBtn) return;

  if (isSpeaking && currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
    isSpeaking = false;
    els.speechBtn.textContent = "▶ Play";
    return;
  }

  const textObj = getAllTexts().find(t => t.id === activeTextId);
  if (!textObj) return;

  els.speechBtn.textContent = "Loading...";
  els.speechBtn.disabled = true;

  const lang = detectLangForSpeech(textObj.body);
  const voice = lang === "es" ? "es-ES-ElviraNeural" : "en-GB-SoniaNeural";

  try {
    const response = await fetch(TTS_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: textObj.body, lang: lang })
    });

    if (!response.ok) throw new Error("Worker error " + response.status);

    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: "audio/wav" });
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    currentAudio = audio;
    isSpeaking = true;
    els.speechBtn.textContent = "■ Stop";
    els.speechBtn.disabled = false;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        isSpeaking = false;
        currentAudio = null;
        els.speechBtn.textContent = "▶ Play";
        els.speechBtn.disabled = false;
      });
    }

    audio.onended = () => {
      isSpeaking = false;
      currentAudio = null;
      URL.revokeObjectURL(audioUrl);
      els.speechBtn.textContent = "▶ Play";
    };

  } catch (e) {
    isSpeaking = false;
    currentAudio = null;
    els.speechBtn.textContent = "▶ Play";
    els.speechBtn.disabled = false;
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
  if (isSpeaking && currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
    isSpeaking = false;
    if (els.speechBtn) {
      els.speechBtn.textContent = "▶ Play";
      els.speechBtn.disabled = false;
    }
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
