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
        { t: "Вузы, куда реально пройти", k: "uni" },
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
    tech: ["AI-аналитик", "Data science", "Программная инженерия", "Кибербезопасность"],
    design: ["UX-дизайн", "Медиакоммуникации", "Архитектура", "Цифровой дизайн"],
    biz: ["Менеджмент", "Международные отношения", "Финансы", "Предпринимательство"],
    care: ["Клиническая психология", "Общественное здоровье", "Биомедицина", "Педагогика"]
  };

  var scores = { tech: 0, design: 0, biz: 0, care: 0 };
  var step = 0;
  var qText = document.getElementById("q-text");
  var optionsEl = document.getElementById("options");
  var progress = document.getElementById("progress-fill");
  var quizBody = document.getElementById("quiz-body");
  var resultBody = document.getElementById("result-body");
  var matchesEl = document.getElementById("matches");

  function render() {
    var item = questions[step];
    qText.textContent = item.q;
    optionsEl.innerHTML = "";
    item.options.forEach(function (opt) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opt";
      b.textContent = opt.t;
      b.addEventListener("click", function () {
        if (scores[opt.k] !== undefined) scores[opt.k] += 2;
        step += 1;
        if (step >= questions.length) showResult();
        else {
          progress.style.width = ((step / questions.length) * 100).toFixed(1) + "%";
          render();
        }
      });
      optionsEl.appendChild(b);
    });
    progress.style.width = ((step / questions.length) * 100).toFixed(1) + "%";
  }

  function showResult() {
    var ranked = Object.keys(scores).sort(function (a, b) {
      return scores[b] - scores[a];
    });
    var top = ranked[0];
    var names = labels[top];
    var pct = [96, 91, 84, 78];
    matchesEl.innerHTML = names
      .map(function (name, i) {
        return (
          '<div class="match"><div class="match-top"><span>' +
          name +
          "</span><span>" +
          pct[i] +
          '%</span></div><div class="bar"><span style="width:' +
          pct[i] +
          '%"></span></div></div>'
        );
      })
      .join("");
    quizBody.hidden = true;
    resultBody.hidden = false;
    progress.style.width = "100%";
  }

  if (qText) render();

  document.querySelectorAll("[data-register]").forEach(function (el) {
    if (el.tagName === "A") el.setAttribute("href", REGISTER);
  });

  var menuBtn = document.getElementById("menu-btn");
  var links = document.getElementById("links");
  if (menuBtn && links) {
    menuBtn.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector("button");
    btn.addEventListener("click", function () {
      var open = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (x) {
        x.classList.remove("open");
        x.querySelector("button").setAttribute("aria-expanded", "false");
        x.querySelector(".plus").textContent = "+";
      });
      if (!open) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        item.querySelector(".plus").textContent = "−";
      }
    });
  });

  var track = document.getElementById("track");
  document.getElementById("next-step") &&
    document.getElementById("next-step").addEventListener("click", function () {
      track.scrollBy({ left: 260, behavior: "smooth" });
    });
  document.getElementById("prev-step") &&
    document.getElementById("prev-step").addEventListener("click", function () {
      track.scrollBy({ left: -260, behavior: "smooth" });
    });
})();
