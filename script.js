(function () {
  var REGISTER =
    "https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-175";

  var questions = [
    {
      q: "Что тебе ближе?",
      options: [
        { t: "Разбирать, как всё устроено", k: "tech" },
        { t: "Придумывать и оформлять", k: "design" },
        { t: "Договариваться и вести людей", k: "biz" },
        { t: "Помогать и разбираться в людях", k: "care" }
      ]
    },
    {
      q: "Какие предметы заходят лучше?",
      options: [
        { t: "Математика и информатика", k: "tech" },
        { t: "Рисование, дизайн, языки", k: "design" },
        { t: "История, география, экономика", k: "biz" },
        { t: "Биология и химия", k: "care" }
      ]
    },
    {
      q: "Как хочешь учиться в вузе?",
      options: [
        { t: "Проекты, код, лаборатории", k: "tech" },
        { t: "Портфолио и практика", k: "design" },
        { t: "Кейсы и стажировки", k: "biz" },
        { t: "Клиническая или полевая практика", k: "care" }
      ]
    },
    {
      q: "Куда смотришь поступать?",
      options: [
        { t: "Казахстан, грант по ЕНТ", k: "kz" },
        { t: "Зарубеж, SAT / IELTS", k: "abroad" },
        { t: "Ещё не решил — нужен разбор", k: "mix" },
        { t: "И там, и там, если прохожу", k: "mix" }
      ]
    },
    {
      q: "Что сейчас больше всего путает?",
      options: [
        { t: "Не знаю профессию", k: "prof" },
        { t: "Не знаю вуз и шансы", k: "uni" },
        { t: "Боюсь экзаменов", k: "exam" },
        { t: "Не понимаю, с чего начать", k: "plan" }
      ]
    },
    {
      q: "Как тебе спокойнее работать?",
      options: [
        { t: "Одному, глубоко в задаче", k: "tech" },
        { t: "В команде над визуалом", k: "design" },
        { t: "С людьми и переговорами", k: "biz" },
        { t: "С человеком, которому помогаю", k: "care" }
      ]
    },
    {
      q: "Что хочешь увидеть после теста?",
      options: [
        { t: "3–5 профессий под меня", k: "prof" },
        { t: "Вузы и требования к поступлению", k: "uni" },
        { t: "План на год до дедлайнов", k: "plan" },
        { t: "Что учить к ЕНТ / SAT", k: "exam" }
      ]
    },
    {
      q: "Когда выпускной?",
      options: [
        { t: "В этом учебном году", k: "soon" },
        { t: "Через год", k: "mid" },
        { t: "Ещё 2–3 года", k: "late" },
        { t: "Уже выпускаюсь / студент", k: "now" }
      ]
    }
  ];

  var labels = {
    tech: ["Анализ данных", "Прикладная математика", "Программная инженерия", "Кибербезопасность"],
    design: ["Дизайн интерфейсов", "Медиакоммуникации", "Архитектура", "Цифровой дизайн"],
    biz: ["Менеджмент", "Международные отношения", "Финансы", "Предпринимательство"],
    care: ["Психология", "Социология", "Педагогика", "Биомедицина"]
  };

  var DRAFT_KEY = "ventorme.quiz.v2";
  var SAVED_KEY = "ventorme.saved-plan.v2";
  var started = false;
  var viewingHome = false;
  window.dataLayer = window.dataLayer || [];
  function track(name, location) {
    var event = { event: name, funnel: "admission_quiz", version: "v2" };
    if (location) event.location = location;
    window.dataLayer.push(event);
    window.dispatchEvent(new CustomEvent("ventorme:analytics", { detail: event }));
  }
  var answers = [];
  var step = 0;
  var result = null;
  var qText = document.getElementById("q-text");
  var optionsEl = document.getElementById("options");
  var progress = document.getElementById("progress-fill");
  var progressEl = document.getElementById("quiz-progress");
  var quizBody = document.getElementById("quiz-body");
  var resultBody = document.getElementById("result-body");
  var count = document.getElementById("question-count");
  var back = document.getElementById("back-question");

  function setProgress(value) {
    progress.style.width = value / questions.length * 100 + "%";
    progressEl.setAttribute("aria-valuenow", String(value));
  }
  function render(moveFocus) {
    var visibleStep = viewingHome ? 0 : step;
    quizBody.hidden = false;
    resultBody.hidden = true;
    count.textContent = "Вопрос " + (visibleStep + 1) + " из " + questions.length + " · 2 мин";
    qText.textContent = questions[visibleStep].q;
    optionsEl.replaceChildren();
    back.disabled = viewingHome || step === 0;
    back.hidden = viewingHome || step === 0;
    var resume = document.getElementById("resume-quiz");
    resume.hidden = !viewingHome || step === 0;
    resume.textContent = step === questions.length ? "Мой результат" : "Продолжить тест";
    document.getElementById("save-status").hidden = true;
    document.querySelector(".hero").classList.remove("is-complete");
    updateCTAs();
    persistDraft();
    setProgress(visibleStep);
    questions[visibleStep].options.forEach(function (opt, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "opt";
      button.textContent = opt.t;
      button.setAttribute("aria-pressed", String(!viewingHome && answers[step] === index));
      button.addEventListener("click", function () {
        if (viewingHome) {
          viewingHome = false;
          answers = [];
          step = 0;
          result = null;
          started = false;
        }
        if (!started) { started = true; track("test_started"); }
        answers[step] = index;
        step += 1;
        if (step === questions.length) { track("test_completed"); showResult(); }
        else render(true);
      });
      optionsEl.appendChild(button);
    });
    if (moveFocus) {
      qText.focus({ preventScroll: true });
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && quizBody.animate) {
        quizBody.animate(
          [{ opacity: 0.5, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 180, easing: "ease-out" }
        );
      }
    }
  }
  function answerKey(index) {
    return questions[index].options[answers[index]].k;
  }
  function makeResult() {
    var scores = { tech: 0, design: 0, biz: 0, care: 0 };
    answers.forEach(function (answer, index) {
      var key = questions[index].options[answer].k;
      if (Object.prototype.hasOwnProperty.call(scores, key)) scores[key] += 1;
    });
    var max = Math.max.apply(null, Object.values(scores));
    var leaders = Object.keys(scores).filter(function (key) { return scores[key] === max; });
    var names = [];
    for (var rank = 0; names.length < 3; rank += 1) {
      leaders.forEach(function (key) { if (names.length < 3) names.push(labels[key][rank]); });
    }
    var focus = answerKey(4);
    var desired = answerKey(6);
    var destination = answerKey(3);
    var timeline = answerKey(7);
    var actionsByFocus = {
      prof: "Выбери два направления из подборки и попробуй по одной небольшой практической задаче в каждом.",
      uni: "Сравни три программы по учебному плану, языку обучения, стоимости и требованиям.",
      exam: "Пройди пробный тест по нужному экзамену и составь список тем для подготовки.",
      plan: "Собери в одном списке вузы, экзамены, документы и сроки подачи."
    };
    var actionsByDestination = {
      kz: "На сайтах выбранных вузов уточни профильные предметы ЕНТ и условия участия в конкурсе на грант.",
      abroad: "Проверь на сайтах программ язык обучения, необходимость IELTS / SAT и варианты финансирования.",
      mix: "Сравни один вариант в Казахстане и один за рубежом: требования, расходы и сроки."
    };
    var actionsByTimeline = {
      soon: "На этой неделе запиши актуальные дедлайны приёма и регистрации на экзамены в календарь.",
      mid: "Распредели подготовку по месяцам: экзамены, выбор программ и сбор документов.",
      late: "Начни с знакомства с профессиями и небольших проектов; вернись к выбору после практики.",
      now: "Проверь ближайший доступный набор и отдельно уточни условия поступления или перевода."
    };
    var actions = [actionsByFocus[focus]];
    if (desired !== focus) actions.push(actionsByFocus[desired]);
    actions.push(actionsByDestination[destination], actionsByTimeline[timeline]);
    var tracks = { kz: "Казахстан", abroad: "Обучение за рубежом", mix: "Казахстан и зарубежные программы" };
    return {
      names: names,
      programs: pickPrograms(leaders, destination),
      summary: leaders.length > 1 ? "Твои интересы пересекаются в нескольких областях. Изучи эти направления и сравни, какие задачи тебе ближе." : "По ответам об интересах и предметах начни знакомство с этими направлениями. Это варианты для изучения, а не окончательный выбор профессии.",
      track: tracks[destination],
      actions: actions
    };
  }
  function showResult() {
    viewingHome = false;
    document.getElementById("resume-quiz").hidden = true;
    result = makeResult();
    quizBody.hidden = true;
    resultBody.hidden = false;
    count.textContent = "Готово · 8 из 8";
    setProgress(questions.length);
    document.getElementById("result-summary").textContent = result.summary;
    var matches = document.getElementById("matches");
    matches.replaceChildren();
    result.names.forEach(function (name) {
      var item = document.createElement("span");
      item.className = "match";
      item.textContent = name;
      matches.appendChild(item);
    });
    var list = document.getElementById("result-plan");
    list.replaceChildren();
    result.actions.forEach(function (action) {
      var item = document.createElement("li");
      item.textContent = action;
      list.appendChild(item);
    });
    document.getElementById("result-title").textContent = "Твои 3 направления";
    document.getElementById("result-summary").textContent = result.track + (result.summary.indexOf("пересекаются") >= 0 ? " · Интересы пересекаются в нескольких областях." : " · Начни изучение с этих направлений.");
    renderPrograms(result.programs);
    document.querySelector(".hero").classList.add("is-complete");
    updateCTAs();
    persistDraft();
    document.getElementById("result-title").focus({ preventScroll: true });
  }
  back.addEventListener("click", function () {
    if (step > 0) { step -= 1; render(true); }
  });
  document.getElementById("restart-quiz").addEventListener("click", function () {
    viewingHome = false;
    answers = [];
    step = 0;
    result = null;
    started = false;
    render(true);
  });
  document.getElementById("download-result").addEventListener("click", function () {
    if (!result) return;
    var content = "Ventorme — твоя отправная точка\n\n" + result.track + "\n\n" + result.summary + "\n\nНаправления:\n" + result.names.map(function (name) { return "• " + name; }).join("\n") + "\n\nПрограммы:\n" + result.programs.map(function (program) { return program.university + " — " + program.name + "\n" + program.exams + "\n" + program.dates + "\n" + program.admissions; }).join("\n\n") + "\n\nЧто сделать дальше:\n" + result.actions.map(function (action, index) { return (index + 1) + ". " + action; }).join("\n") + "\n\nКороткий ориентир, не профессиональная диагностика. Требования и сроки проверяй на официальных сайтах вузов.\n\nПродолжить: " + REGISTER;
    var url = URL.createObjectURL(new Blob(["\uFEFF", content], { type: "text/plain;charset=utf-8" }));
    var link = document.createElement("a");
    link.href = url;
    link.download = "ventorme-plan.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });
  function persistDraft() {
    try { sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ answers: answers, step: step, started: started, viewingHome: viewingHome })); } catch (_) {}
  }
  function updateCTAs() {
    var complete = step === questions.length && !viewingHome;
    document.querySelectorAll("[data-flow-cta]").forEach(function (link) {
      link.href = complete ? REGISTER : "#quiz";
      var label = link.querySelector("[data-cta-label]");
      label.textContent = complete ? (link.dataset.location === "nav" ? "Создать аккаунт" : "Создать аккаунт и продолжить") : link.dataset.location === "nav" ? "Пройти тест" : link.dataset.location === "steps" ? "Начать тест" : "Узнать мои 3 направления";
    });
  }
  function savePlan() {
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify({ answers: answers, step: step, result: result, savedAt: new Date().toISOString() }));
      return true;
    } catch (_) {
      var status = document.getElementById("save-status");
      status.hidden = false;
      status.textContent = "Для копии результата на этом устройстве скачай план файлом.";
      document.getElementById("result-title").scrollIntoView({ block: "start" });
      return false;
    }
  }
  document.querySelectorAll("[data-flow-cta]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (step === questions.length && !viewingHome) {
        savePlan();
        track("signup_click", link.dataset.location);
      } else {
        track("test_cta_click", link.dataset.location);
        if (link.dataset.location === "result") event.preventDefault();
        qText.focus({ preventScroll: true });
      }
    });
  });
  document.querySelectorAll("[data-direct-register]").forEach(function (link) {
    link.addEventListener("click", function () { track("signup_click", "direct"); });
  });
  function pickPrograms(leaders, destination) {
    var programs = [];
    leaders.forEach(function (key) {
      var catalogue = window.VENTORME_PROGRAMS[key];
      var choices = destination === "mix" ? [catalogue.kz[0], catalogue.abroad[0]] : catalogue[destination];
      programs.push.apply(programs, choices);
    });
    if (leaders.length > 1) {
      programs = leaders.map(function (key) { return window.VENTORME_PROGRAMS[key][destination === "abroad" ? "abroad" : "kz"][0]; });
      if (destination === "mix") programs[1] = window.VENTORME_PROGRAMS[leaders[1]].abroad[0];
    }
    return programs.slice(0, 3);
  }
  function renderPrograms(programs) {
    var container = document.getElementById("program-examples");
    container.replaceChildren();
    programs.forEach(function (program) {
      var card = document.createElement("article");
      card.className = "program-card";
      var university = document.createElement("p");
      university.className = "program-university";
      university.textContent = program.university;
      var title = document.createElement("a");
      title.textContent = program.name;
      title.href = program.url;
      title.target = "_blank";
      title.rel = "noopener noreferrer";
      var exams = document.createElement("p");
      exams.textContent = program.exams;
      var dates = document.createElement("p");
      dates.className = "program-dates";
      dates.textContent = program.dates;
      var source = document.createElement("a");
      source.className = "program-source";
      source.href = program.admissions;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      source.textContent = "Условия приёма · проверено " + program.checked;
      card.append(university, title, exams, dates, source);
      container.appendChild(card);
    });
  }
  var sample = window.VENTORME_PROGRAMS.tech.kz[0];
  var sampleName = document.createElement("a");
  sampleName.href = sample.url;
  sampleName.target = "_blank";
  sampleName.rel = "noopener noreferrer";
  sampleName.textContent = sample.name + " · Astana IT University";
  var sampleSource = document.createElement("p");
  sampleSource.textContent = "Официальный сайт вуза · проверено " + sample.checked;
  document.getElementById("sample-program").append(sampleName, sampleSource);
  var menu = document.getElementById("menu-btn");
  var links = document.getElementById("links");
  function closeMenu() {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Открыть меню");
  }
  function showHome() {
    viewingHome = true;
    closeMenu();
    render(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    var logo = document.querySelector(".nav .logo");
    logo.focus({ preventScroll: true });
  }
  document.getElementById("home-page").addEventListener("click", showHome);
  document.querySelectorAll('.logo[href="#top"]').forEach(function (logo) {
    logo.addEventListener("click", function (event) {
      event.preventDefault();
      showHome();
    });
  });
  document.getElementById("resume-quiz").addEventListener("click", function () {
    viewingHome = false;
    if (step === questions.length) showResult();
    else render(true);
  });
  menu.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  });
  links.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && links.classList.contains("open")) { closeMenu(); menu.focus(); }
  });
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav")) closeMenu();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 940) closeMenu();
  });

  var header = document.getElementById("top");
  var navLinks = Array.from(links.querySelectorAll('a[href^="#"]'));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  });
  var scrollPending = false;
  function updateNavigation() {
    header.classList.toggle("scrolled", window.scrollY > 24);
    var active = -1;
    sections.forEach(function (section, index) {
      if (section && section.getBoundingClientRect().top <= 160) active = index;
    });
    navLinks.forEach(function (link, index) {
      if (index === active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scrollPending = false;
  }
  window.addEventListener("scroll", function () {
    if (!scrollPending) {
      scrollPending = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  updateNavigation();

  var motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!motionPreference.matches && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".process-list li, .faq-grid article, .final-band").forEach(function (element) {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.classList.add("reveal-pending");
        revealObserver.observe(element);
      }
    });
    motionPreference.addEventListener("change", function (event) {
      if (event.matches) {
        revealObserver.disconnect();
        document.querySelectorAll(".reveal-pending").forEach(function (element) {
          element.classList.add("reveal-visible");
        });
      }
    });
  }
  try {
    var draft = JSON.parse(sessionStorage.getItem(DRAFT_KEY) || localStorage.getItem(SAVED_KEY) || "null");
    if (draft && Array.isArray(draft.answers) && Number.isInteger(draft.step) && draft.step >= 0 && draft.step <= questions.length && draft.answers.length <= questions.length && draft.answers.every(function (answer, index) { return Number.isInteger(answer) && answer >= 0 && answer < questions[index].options.length; }) && draft.answers.length >= draft.step) {
      answers = draft.answers;
      step = draft.step;
      started = draft.started === true || step > 0;
      viewingHome = draft.viewingHome === true;
    }
  } catch (_) {}
  if (step === questions.length && !viewingHome) showResult();
  else render(false);
})();
