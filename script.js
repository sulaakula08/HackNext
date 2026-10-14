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
    care: ["Клиническая психология", "Общественное здоровье", "Биомедицина", "Педагогика"]
  };

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
    quizBody.hidden = false;
    resultBody.hidden = true;
    count.textContent = "Вопрос " + (step + 1) + " из " + questions.length;
    qText.textContent = questions[step].q;
    optionsEl.replaceChildren();
    back.disabled = step === 0;
    setProgress(step);
    questions[step].options.forEach(function (opt, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "opt";
      button.textContent = opt.t;
      button.setAttribute("aria-pressed", String(answers[step] === index));
      button.addEventListener("click", function () {
        answers[step] = index;
        step += 1;
        if (step === questions.length) showResult();
        else render(true);
      });
      optionsEl.appendChild(button);
    });
    if (moveFocus) qText.focus({ preventScroll: true });
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
    var names = leaders.length === 1 ? labels[leaders[0]].slice(0, 3) : leaders.flatMap(function (key) { return labels[key].slice(0, 2); });
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
      summary: leaders.length > 1 ? "Твои интересы пересекаются в нескольких областях. Изучи эти направления и сравни, какие задачи тебе ближе." : "По ответам об интересах и предметах начни знакомство с этими направлениями. Это варианты для изучения, а не окончательный выбор профессии.",
      track: tracks[destination],
      actions: actions
    };
  }
  function showResult() {
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
    document.getElementById("result-title").textContent = "Твой старт: " + result.track;
    document.getElementById("result-title").focus({ preventScroll: true });
  }
  back.addEventListener("click", function () {
    if (step > 0) { step -= 1; render(true); }
  });
  document.getElementById("restart-quiz").addEventListener("click", function () {
    answers = [];
    step = 0;
    result = null;
    render(true);
  });
  document.getElementById("download-result").addEventListener("click", function () {
    if (!result) return;
    var content = "Ventorme — твоя отправная точка\n\n" + result.track + "\n\n" + result.summary + "\n\nНаправления:\n" + result.names.map(function (name) { return "• " + name; }).join("\n") + "\n\nЧто сделать дальше:\n" + result.actions.map(function (action, index) { return (index + 1) + ". " + action; }).join("\n") + "\n\nКороткий ориентир, не профессиональная диагностика. Требования и сроки проверяй на официальных сайтах вузов.\n\nПродолжить: " + REGISTER;
    var url = URL.createObjectURL(new Blob(["\uFEFF", content], { type: "text/plain;charset=utf-8" }));
    var link = document.createElement("a");
    link.href = url;
    link.download = "ventorme-plan.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });
  document.querySelectorAll("[data-register]").forEach(function (link) { link.href = REGISTER; });
  var menu = document.getElementById("menu-btn");
  var links = document.getElementById("links");
  function closeMenu() {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Открыть меню");
  }
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
  render(false);
})();
