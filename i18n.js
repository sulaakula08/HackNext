(function () {
  'use strict';
  const rows = `
Превью с официального сайта Ventorme, интерфейс на русском; не результат этого теста.|Ventorme ресми сайтынан алынған орыс тіліндегі интерфейс превьюлері; бұл тесттің нәтижесі емес.|Previews from the official Ventorme website, interface in Russian; not this quiz's result.
Рассмотреть превью|Превьюді қарау|View preview
Открыть превью стипендий|Стипендия превьюін ашу|Open scholarship preview
Открыть превью подготовки|Дайындық превьюін ашу|Open exam practice preview
Открыть превью редактора эссе|Эссе редакторы превьюін ашу|Open essay editor preview
Превью базы стипендий с официального сайта Ventorme|Ventorme ресми сайтындағы стипендиялар базасының превьюі|Scholarship database preview from the official Ventorme website
Превью подготовки к SAT и IELTS с официального сайта Ventorme|Ventorme ресми сайтындағы SAT және IELTS дайындығының превьюі|SAT and IELTS practice preview from the official Ventorme website
Превью редактора эссе с официального сайта Ventorme|Ventorme ресми сайтындағы эссе редакторының превьюі|Essay editor preview from the official Ventorme website
Твои интересы пересекаются в нескольких областях. Изучи эти направления и сравни, какие задачи тебе ближе.|Қызығушылықтарың бірнеше салада тоғысады. Осы бағыттарды зерттеп, қандай тапсырмалар жақын екенін салыстыр.|Your interests span several fields. Explore these directions and compare which tasks you enjoy.
По ответам об интересах и предметах начни знакомство с этими направлениями. Это варианты для изучения, а не окончательный выбор профессии.|Қызығушылықтарың мен пәндер туралы жауаптарға сай осы бағыттардан баста. Бұл мамандықты түпкілікті таңдау емес, зерттеуге арналған нұсқалар.|Based on your interests and subjects, start exploring these directions. These are options to explore, not a final career decision.
Превью:|Превью:|Previews:
· Данные вузов проверены 14.10.2026|· Университет деректері 14.10.2026 тексерілді|· University data checked 14 Oct 2026
Источники и доступ|Дереккөздер мен қолжетімділік|Sources and access
Тест|Тест|Quiz
Как это работает|Қалай жұмыс істейді|How it works
Вопросы|Сұрақтар|Questions
Войти|Кіру|Log in
Регистрация|Тіркелу|Sign up
Пройти тест|Тесттен өту|Take the quiz
Начать тест|Тестті бастау|Start the quiz
Создать аккаунт|Аккаунт ашу|Create an account
Создать аккаунт и продолжить|Аккаунт ашып, жалғастыру|Create an account and continue
Узнать мои 3 направления|3 бағытымды білу|Find my 3 directions
Перейти к тесту|Тестке өту|Skip to quiz
ДЛЯ ШКОЛЬНИКОВ И ВЫПУСКНИКОВ|ОҚУШЫЛАР МЕН ТҮЛЕКТЕРГЕ|FOR STUDENTS AND GRADUATES
Твои|Сенің|Your
3 направления.|3 бағытың.|3 directions.
Вузы и первые шаги|Университеттер мен алғашқы қадамдар|Universities and first steps
к поступлению.|оқуға түсуге.|towards admission.
Ответь об интересах — получи направления, примеры программ и список действий.|Қызығушылықтарың туралы жауап бер: бағыттар, оқу бағдарламалары мен қадамдар тізімін ал.|Share your interests to get directions, example programmes and next steps.
Результат сразу · без регистрации|Нәтиже бірден · тіркелусіз|Instant results · no sign-up
Выбери один ответ|Бір жауапты таңда|Choose one answer
Назад|Артқа|Back
На главную|Басты бетке|Back to home
Пройти заново|Қайта өту|Retake the quiz
Скачать результат|Нәтижені жүктеу|Download results
Твои 3 направления|Сенің 3 бағытың|Your 3 directions
Программы, с которых начать сравнение|Салыстыруды бастайтын бағдарламалар|Programmes to start comparing
Что сделать дальше|Келесі қадамдар|What to do next
Откроется бесплатная регистрация Ventorme. Копия результата останется доступна здесь.|Ventorme-де тегін тіркелу ашылады. Нәтиже көшірмесі осында қолжетімді болады.|Free Ventorme sign-up will open. A copy of your result stays available here.
Примеры по интересам, не оценка шансов; требования и сроки — по официальным ссылкам.|Қызығушылыққа сай мысалдар, түсу мүмкіндігінің бағасы емес; талаптар мен мерзімдер ресми сілтемелерде.|Examples based on interests, not admission odds; check requirements and dates via the official links.
Для теста включи JavaScript. Шаги подготовки ниже доступны без него.|Тест үшін JavaScript қос. Төмендегі қадамдар онсыз да қолжетімді.|Enable JavaScript for the quiz. The preparation steps below work without it.
Пример|Мысал|Example
Вот что ты получишь|Мынадай нәтиже аласың|Here is what you get
Мой результат|Менің нәтижем|My result
Продолжить тест|Тестті жалғастыру|Continue the quiz
КАК ЭТО РАБОТАЕТ|ҚАЛАЙ ЖҰМЫС ІСТЕЙДІ|HOW IT WORKS
От интересов —|Қызығушылықтан —|From interests —
к подаче документов.|құжат тапсыруға дейін.|to your application.
Тест и примеры — на этой странице. Инструменты для дальнейшей подготовки — в аккаунте Ventorme.|Тест пен мысалдар осы бетте. Әрі қарай дайындалу құралдары Ventorme аккаунтында.|The quiz and examples are here. Continue preparing with tools in your Ventorme account.
Направление|Бағыт|Direction
Университеты|Университеттер|Universities
План|Жоспар|Plan
Экзамены|Емтихандар|Exams
Эссе|Эссе|Essay
Финансирование|Қаржыландыру|Funding
Подача|Өтінім беру|Application
Бесплатно здесь|Осында тегін|Free here
в Ventorme|Ventorme-де|in Ventorme
Ответь на вопросы и получи 3 направления для изучения.|Сұрақтарға жауап беріп, зерттеуге арналған 3 бағыт ал.|Answer the questions to get 3 directions to explore.
Сравни реальные программы и требования к поступлению.|Нақты бағдарламалар мен түсу талаптарын салыстыр.|Compare real programmes and admission requirements.
Запиши экзамены, документы и сроки в календарь.|Емтихандарды, құжаттар мен мерзімдерді күнтізбеге жаз.|Put exams, documents and deadlines in your calendar.
Проверь свой уровень и составь график подготовки.|Деңгейіңді тексеріп, дайындық кестесін жаса.|Check your level and make a preparation schedule.
Опиши свой опыт и объясни, почему выбираешь программу.|Тәжірибеңді сипаттап, бағдарламаны неге таңдағаныңды түсіндір.|Describe your experience and why you chose the programme.
Проверь условия грантов и стипендий.|Гранттар мен стипендиялардың шарттарын тексер.|Check grant and scholarship requirements.
Собери документы и отправь заявление до дедлайна.|Құжаттарды жинап, өтінімді мерзімінен бұрын жібер.|Gather your documents and submit before the deadline.
ПОСЛЕ ТЕСТА|ТЕСТТЕН КЕЙІН|AFTER THE QUIZ
Что откроется в аккаунте|Аккаунтта не қолжетімді|What is inside your account
Гранты и стипендии|Гранттар мен стипендиялар|Grants and scholarships
Поиск вариантов финансирования под твой профиль.|Профиліңе сай қаржыландыру мүмкіндіктерін іздеу.|Find funding opportunities for your profile.
Практика IELTS и SAT|IELTS және SAT дайындығы|IELTS and SAT practice
Тренажёры, пробные тесты и разбор ошибок.|Жаттығулар, сынақ тесттері және қателерді талдау.|Practice, mock tests and mistake review.
Задачи и дедлайны|Тапсырмалар мен мерзімдер|Tasks and deadlines
План подготовки с задачами и сроками подачи.|Тапсырмалар мен өтінім мерзімдері бар дайындық жоспары.|A preparation plan with tasks and application dates.
Обратная связь по эссе|Эссе бойынша кері байланыс|Essay feedback
Помощь со структурой и формулировками текста.|Мәтін құрылымы мен тұжырымдарын жақсартуға көмек.|Help with structure and wording.
Возможности указаны на|Мүмкіндіктер көрсетілген|Features are listed on the
сайте Ventorme|Ventorme сайтында|Ventorme website
; доступ к отдельным инструментам зависит от условий платформы.|; кейбір құралдарға қолжетімділік платформа шарттарына байланысты.|; access to individual tools depends on platform terms.
Данные примеров: официальные сайты вузов · проверено 14.10.2026|Мысалдар деректері: университеттердің ресми сайттары · 14.10.2026 тексерілді|Example data: official university websites · checked 14 Oct 2026
Источники:|Дереккөздер:|Sources:
КазНУ|ҚазҰУ|Al-Farabi KazNU
и|және|and
ПЕРЕД СТАРТОМ|БАСТАМАС БҰРЫН|BEFORE YOU START
Что важно знать|Нені білу маңызды|What to know
Что здесь бесплатно?|Мұнда не тегін?|What is free here?
Тест и результат без аккаунта; условия остальных инструментов — на Ventorme.|Тест пен нәтиже аккаунтсыз қолжетімді; басқа құралдардың шарттары Ventorme-де.|The quiz and results need no account; see Ventorme for other tools' terms.
Откуда информация о вузах?|Университеттер туралы ақпарат қайдан?|Where does university data come from?
Из официальных сайтов вузов: у каждой программы есть источник и дата проверки.|Университеттердің ресми сайттарынан: әр бағдарламада дереккөз бен тексеру күні бар.|Official university websites: each programme has a source and review date.
Мои ответы сохранятся?|Жауаптарым сақтала ма?|Can I keep my results?
Результат можно скачать файлом, чтобы вернуться к нему позже.|Нәтижені кейін қарау үшін файл ретінде жүктеуге болады.|Download your result as a file to revisit it later.
Это точный выбор профессии?|Бұл нақты мамандық таңдауы ма?|Does this determine my career?
Это ориентир по интересам; проверь выбор учебными планами и практикой.|Бұл қызығушылыққа негізделген бағдар; таңдауды оқу жоспарлары және тәжірибемен тексер.|It is a guide based on interests; explore curricula and try practical work.
ТВОЙ РЕЗУЛЬТАТ|СЕНІҢ НӘТИЖЕҢ|YOUR RESULT
Результат сразу|Нәтиже бірден|Your result is ready
на странице.|осы бетте.|on this page.
Регистрация — по желанию.|Тіркелу — өз қалауыңмен.|Sign-up is optional.
Уже знаешь цель? Открыть Ventorme|Мақсатың белгілі ме? Ventorme-ге өту|Know your goal? Open Ventorme
команда 175|175-команда|team 175
Что тебе ближе?|Саған не жақын?|What feels closest to you?
Разбирать, как всё устроено|Бәрінің қалай жұмыс істейтінін түсіну|Understanding how things work
Придумывать и оформлять|Ойлап тауып, безендіру|Creating and designing
Договариваться и вести людей|Келіссөз жүргізіп, адамдарды басқару|Negotiating and leading people
Помогать и разбираться в людях|Адамдарды түсініп, көмектесу|Helping and understanding people
Какие предметы заходят лучше?|Қай пәндер саған жақсы келеді?|Which subjects do you enjoy most?
Математика и информатика|Математика және информатика|Mathematics and computer science
Рисование, дизайн, языки|Сурет, дизайн, тілдер|Art, design and languages
История, география, экономика|Тарих, география, экономика|History, geography and economics
Биология и химия|Биология және химия|Biology and chemistry
Как хочешь учиться в вузе?|Университетте қалай оқығың келеді?|How would you like to learn at university?
Проекты, код, лаборатории|Жобалар, код, зертханалар|Projects, coding and labs
Портфолио и практика|Портфолио және тәжірибе|Portfolio work and practice
Кейсы и стажировки|Кейстер және тағылымдамалар|Case studies and internships
Клиническая или полевая практика|Клиникалық немесе далалық тәжірибе|Clinical or field practice
Куда смотришь поступать?|Қайда оқуға түскің келеді?|Where would you like to study?
Казахстан, грант по ЕНТ|Қазақстан, ҰБТ бойынша грант|Kazakhstan, a grant through UNT
Зарубеж, SAT / IELTS|Шетел, SAT / IELTS|Abroad, SAT / IELTS
Ещё не решил — нужен разбор|Әлі шешкен жоқпын — бағыт керек|Not decided yet — I need guidance
И там, и там, если прохожу|Шарттарға сай болсам, екі жақта да|Both, if I meet the requirements
Что сейчас больше всего путает?|Қазір ең түсініксіз нәрсе не?|What feels most confusing right now?
Не знаю профессию|Мамандықты білмеймін|I do not know which career to choose
Не знаю вуз и шансы|Университет пен мүмкіндіктерді білмеймін|I do not know which university or my chances
Боюсь экзаменов|Емтихандардан қорқамын|I am worried about exams
Не понимаю, с чего начать|Неден бастау керегін білмеймін|I do not know where to start
Как тебе спокойнее работать?|Қалай жұмыс істеген ыңғайлы?|How do you prefer to work?
Одному, глубоко в задаче|Жалғыз, тапсырмаға терең үңіліп|Alone, focusing deeply on a task
В команде над визуалом|Топпен, визуал жобалармен|In a team on visual projects
С людьми и переговорами|Адамдармен және келіссөздермен|With people and negotiations
С человеком, которому помогаю|Көмектесіп жүрген адаммен|With the person I am helping
Что хочешь увидеть после теста?|Тесттен кейін не көргің келеді?|What would you like after the quiz?
3–5 профессий под меня|Маған сай 3–5 мамандық|3–5 careers to explore
Вузы и требования к поступлению|Университеттер мен түсу талаптары|Universities and admission requirements
План на год до дедлайнов|Мерзімдерге дейінгі жылдық жоспар|A year-long plan before deadlines
Что учить к ЕНТ / SAT|ҰБТ / SAT үшін не оқу керек|What to study for UNT / SAT
Когда выпускной?|Қашан мектеп бітіресің?|When do you graduate?
В этом учебном году|Осы оқу жылында|This academic year
Через год|Бір жылдан кейін|In a year
Ещё 2–3 года|Тағы 2–3 жылдан кейін|In 2–3 years
Уже выпускаюсь / студент|Бітіріп жатырмын / студентпін|Graduating now / already a student
Анализ данных|Деректерді талдау|Data analysis
Прикладная математика|Қолданбалы математика|Applied mathematics
Программная инженерия|Бағдарламалық инженерия|Software engineering
Кибербезопасность|Киберқауіпсіздік|Cybersecurity
Дизайн интерфейсов|Интерфейс дизайны|Interface design
Медиакоммуникации|Медиакоммуникация|Media communications
Архитектура|Сәулет|Architecture
Цифровой дизайн|Цифрлық дизайн|Digital design
Менеджмент|Менеджмент|Management
Международные отношения|Халықаралық қатынастар|International relations
Финансы|Қаржы|Finance
Предпринимательство|Кәсіпкерлік|Entrepreneurship
Психология|Психология|Psychology
Социология|Әлеуметтану|Sociology
Педагогика|Педагогика|Education
Биомедицина|Биомедицина|Biomedicine
Казахстан|Қазақстан|Kazakhstan
Обучение за рубежом|Шетелде оқу|Study abroad
Казахстан и зарубежные программы|Қазақстан және шетел бағдарламалары|Kazakhstan and international programmes
Интересы пересекаются в нескольких областях.|Қызығушылықтарың бірнеше салада тоғысады.|Your interests span several fields.
Начни изучение с этих направлений.|Осы бағыттарды зерттеуден баста.|Start exploring these directions.
Выбери два направления из подборки и попробуй по одной небольшой практической задаче в каждом.|Екі бағытты таңдап, әрқайсысында шағын практикалық тапсырма орында.|Choose two directions and try a small practical task in each.
Сравни три программы по учебному плану, языку обучения, стоимости и требованиям.|Үш бағдарламаны оқу жоспары, тілі, құны және талаптары бойынша салыстыр.|Compare three programmes by curriculum, language, cost and requirements.
Пройди пробный тест по нужному экзамену и составь список тем для подготовки.|Қажетті емтиханның сынақ тестінен өтіп, дайындық тақырыптарын жаз.|Take a mock exam and list the topics you need to practise.
Собери в одном списке вузы, экзамены, документы и сроки подачи.|Университеттерді, емтихандарды, құжаттар мен мерзімдерді бір тізімге жина.|List universities, exams, documents and deadlines in one place.
На сайтах выбранных вузов уточни профильные предметы ЕНТ и условия участия в конкурсе на грант.|Таңдалған университеттердің сайттарынан ҰБТ бейіндік пәндері мен грант конкурсының шарттарын тексер.|Check UNT subject requirements and grant competition rules on your chosen universities' websites.
Проверь на сайтах программ язык обучения, необходимость IELTS / SAT и варианты финансирования.|Бағдарламалардың сайттарынан оқу тілін, IELTS / SAT қажеттілігін және қаржыландыруды тексер.|Check teaching language, IELTS / SAT requirements and funding on programme websites.
Сравни один вариант в Казахстане и один за рубежом: требования, расходы и сроки.|Қазақстандағы және шетелдегі бір нұсқаны талаптары, шығыны мен мерзімі бойынша салыстыр.|Compare one option in Kazakhstan and one abroad: requirements, costs and dates.
На этой неделе запиши актуальные дедлайны приёма и регистрации на экзамены в календарь.|Осы аптада қабылдау және емтиханға тіркелу мерзімдерін күнтізбеге жаз.|This week, add current application and exam registration deadlines to your calendar.
Распредели подготовку по месяцам: экзамены, выбор программ и сбор документов.|Дайындықты айларға бөл: емтихандар, бағдарлама таңдау және құжат жинау.|Plan by month: exams, programme selection and document collection.
Начни с знакомства с профессиями и небольших проектов; вернись к выбору после практики.|Мамандықтарды танып, шағын жобалардан баста; тәжірибеден кейін таңдауға қайта орал.|Explore careers and small projects, then revisit your choice after practice.
Проверь ближайший доступный набор и отдельно уточни условия поступления или перевода.|Ең жақын қабылдауды тексеріп, түсу немесе ауысу шарттарын анықта.|Check the next intake and the admission or transfer requirements.
Финляндия|Финляндия|Finland
США|АҚШ|USA
КазНУ им. аль-Фараби|Әл-Фараби атындағы ҚазҰУ|Al-Farabi KazNU
ЕНТ: математика + информатика; AET|ҰБТ: математика + информатика; AET|UNT: mathematics + computer science; AET
ЕНТ: математика + география; AET|ҰБТ: математика + география; AET|UNT: mathematics + geography; AET
ЕНТ и творческие экзамены; AET|ҰБТ және шығармашылық емтихандар; AET|UNT and creative entrance exams; AET
Для admission round A: SAT или ACT.|Admission round A үшін: SAT немесе ACT.|Admission round A: SAT or ACT.
Для admission round A: предварительное задание + SAT или ACT.|Admission round A үшін: алдын ала тапсырма + SAT немесе ACT.|Admission round A: preliminary assignment + SAT or ACT.
Творческие задания; английский, например IELTS Academic, если нет освобождения.|Шығармашылық тапсырмалар; босату болмаса, IELTS Academic сияқты ағылшын тілі дәлелі.|Creative assignments; English proficiency such as IELTS Academic unless exempt.
Для поступления после школы — ЕНТ; профильные предметы уточни для программы.|Мектептен кейін түсу үшін — ҰБТ; бағдарламаның бейіндік пәндерін тексер.|After school: UNT; check the programme's subject requirements.
Подтверждение английского, например IELTS; SAT / ACT необязательны.|IELTS сияқты ағылшын тілі дәлелі; SAT / ACT міндетті емес.|English proficiency such as IELTS; SAT / ACT are optional.
Набор 2026: зачисление 20 июня — 25 августа. Календарь 2027 уточни у вуза.|2026 қабылдауы: 20 маусым — 25 тамыз. 2027 күнтізбесін университеттен тексер.|2026 intake: enrolment 20 June–25 August. Check the 2027 calendar with the university.
Подача на набор 2027: 7–22 января 2027.|2027 қабылдауына өтінім: 2027 жылғы 7–22 қаңтар.|2027 intake applications: 7–22 January 2027.
Сроки следующего набора уточни в приёмной комиссии.|Келесі қабылдау мерзімдерін қабылдау комиссиясынан анықта.|Check the next intake dates with admissions.
Весна 2027: приоритетный срок 1 ноября 2026. Для подачи нужен документ об окончании школы.|2027 көктемі: басым мерзім 2026 жылғы 1 қараша. Мектеп бітіру құжаты қажет.|Spring 2027: priority deadline 1 November 2026. A school-leaving certificate is required.
Условия приёма|Қабылдау шарттары|Admission requirements
Официальный сайт вуза|Университеттің ресми сайты|Official university website
Открыть меню|Мәзірді ашу|Open menu
Закрыть меню|Мәзірді жабу|Close menu
Главная навигация|Негізгі навигация|Main navigation
Выбрать язык|Тілді таңдау|Choose language
Тест по интересам|Қызығушылық тесті|Interests quiz
Прогресс теста|Тест барысы|Quiz progress
Пример результата|Нәтиже мысалы|Example result
Барс Venti готовит заявку в университет за ноутбуком|Venti барысы ноутбукпен университетке өтінім дайындауда|Venti the snow leopard prepares a university application on a laptop
Меняем язык…|Тілді ауыстыру…|Changing language…
Для копии результата на этом устройстве скачай план файлом.|Нәтиже көшірмесін сақтау үшін жоспарды файл ретінде жүкте.|Download your plan to keep a copy on this device.
Ventorme — твоя отправная точка|Ventorme — алғашқы қадамың|Ventorme — your starting point
Направления:|Бағыттар:|Directions:
Программы:|Бағдарламалар:|Programmes:
Что сделать дальше:|Келесі қадамдар:|Next steps:
Продолжить:|Жалғастыру:|Continue:
Короткий ориентир, не профессиональная диагностика. Требования и сроки проверяй на официальных сайтах вузов.|Қысқа бағдар, кәсіби диагностика емес. Талаптар мен мерзімдерді ресми сайттардан тексер.|A short guide, not professional assessment. Check requirements and deadlines on official university websites.
`;
  const dictionary = new Map();
  const reverse = new Map();
  rows.trim().split('\n').forEach(line => { const [ru, kk, en] = line.split('|'); dictionary.set(ru, { ru, kk, en }); reverse.set(kk, ru); reverse.set(en, ru); });
  let language = 'ru';
  try { const saved = localStorage.getItem('ventorme.language'); if (['ru','kk','en'].includes(saved)) language = saved; } catch (_) {}
  const records = new WeakMap();
  const attributes = new WeakMap();
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  function translate(value) {
    const key = normalize(value);
    if (dictionary.has(key)) return dictionary.get(key)[language];
    const count = key.match(/^Вопрос (\d+) из (\d+) · 2 мин$/);
    if (count) return language === 'kk' ? `${count[2]} сұрақтың ${count[1]}-і · 2 мин` : language === 'en' ? `Question ${count[1]} of ${count[2]} · 2 min` : key;
    if (key === 'Готово · 8 из 8') return {ru:key,kk:'Дайын · 8 / 8',en:'Done · 8 of 8'}[language];
    const verified = key.match(/^проверено (.+)$/);
    if (verified) return {ru:'проверено ',kk:'тексерілді ',en:'checked '}[language] + verified[1];
    if (key.includes(' · ')) return key.split(' · ').map(translate).join(' · ');
    const continuation = key.match(/^Продолжить: (.+)$/);
    if (continuation) return translate('Продолжить:') + ' ' + continuation[1];
    const numbered = key.match(/^(\d+\. |• )(.+)$/);
    if (numbered) return numbered[1] + translate(numbered[2]);
    return key;
  }
  function apply() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!node.textContent.trim() || node.parentElement.closest('script,style,.language-menu,#language-code,#language-loading-target')) continue;
      let record = records.get(node);
      if (!record || node.textContent !== record.last) {
        const value = normalize(node.textContent);
        record = { source: reverse.get(value) || value, last: node.textContent, prefix: node.textContent.match(/^\s*/)[0], suffix: node.textContent.match(/\s*$/)[0] };
      }
      const next = record.prefix + translate(record.source) + record.suffix;
      if (node.textContent !== next) node.textContent = next;
      record.last = next;
      records.set(node, record);
    }
    document.querySelectorAll('[aria-label],img[alt]').forEach(element => {
      const saved = attributes.get(element) || {};
      ['aria-label','alt'].forEach(name => {
        if (!element.hasAttribute(name)) return;
        const current = element.getAttribute(name);
        let record = saved[name];
        if (!record || record.last !== current) record = { source: reverse.get(current) || current };
        const next = translate(record.source);
        if (current !== next) element.setAttribute(name, next);
        record.last = next; saved[name] = record;
      });
      attributes.set(element, saved);
    });
    document.documentElement.lang = language;
    document.getElementById('language-code').textContent = language.toUpperCase();
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-current', String(button.dataset.language === language)));
    document.querySelector('meta[name="description"]').content = {ru:'Пройди 8 вопросов без регистрации: получи 3 направления, примеры программ, экзамены и первые шаги к поступлению.',kk:'Тіркелусіз 8 сұраққа жауап бер: 3 бағыт, бағдарлама мысалдары мен оқуға түсу қадамдарын ал.',en:'Answer 8 questions without signing up: get 3 directions, programme examples, exams and admission steps.'}[language];
    document.title = {ru:'Ventorme — 3 направления и первые шаги к поступлению',kk:'Ventorme — 3 бағыт және оқуға түсудің алғашқы қадамдары',en:'Ventorme — 3 directions and first steps towards admission'}[language];
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = document.querySelector('meta[name="description"]').content;
  }
  const toggle = document.getElementById('language-toggle');
  const menu = document.getElementById('language-menu');
  const overlay = document.getElementById('language-loading');
  let changing = false;
  function close() { menu.hidden = true; toggle.setAttribute('aria-expanded','false'); }
  toggle.addEventListener('click', () => { const open = menu.hidden; menu.hidden = !open; toggle.setAttribute('aria-expanded',String(open)); if(open) menu.querySelector(`[data-language="${language}"]`).focus(); });
  menu.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    const next = button.dataset.language;
    close();
    if (next === language || changing) { toggle.focus(); return; }
    changing = true;
    document.getElementById('language-loading-text').textContent = translate('Меняем язык…');
    document.getElementById('language-loading-target').textContent = {ru:'Русский',kk:'Қазақша',en:'English'}[next];
    overlay.hidden = false;
    document.querySelector('main').setAttribute('aria-busy','true');
    const surfaces = [document.querySelector('header'),document.querySelector('main'),document.querySelector('footer')];
    surfaces.forEach(element => { element.inert = true; });
    setTimeout(() => {
      language = next;
      try { localStorage.setItem('ventorme.language', language); } catch (_) {}
      apply();
      overlay.hidden = true;
      surfaces.forEach(element => { element.inert = false; });
      document.querySelector('main').removeAttribute('aria-busy');
      changing = false;
      toggle.focus({preventScroll:true});
      window.dispatchEvent(new CustomEvent('ventorme:languagechange',{detail:{language}}));
    }, 1000);
  }));
  document.addEventListener('click', event => { if(!event.target.closest('.language-switcher')) close(); });
  document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && !menu.hidden) { close(); toggle.focus(); }
    if(!menu.hidden && ['ArrowDown','ArrowUp','Home','End'].includes(event.key)) {
      event.preventDefault(); const buttons = [...menu.querySelectorAll('button')]; let index = buttons.indexOf(document.activeElement);
      index = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length-1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[index].focus();
    }
  });
  window.VENTORME_I18N = { apply, translate, getLanguage: () => language };
  let scheduled = false;
  new MutationObserver(() => { if (!scheduled) { scheduled = true; queueMicrotask(() => { scheduled = false; apply(); }); } }).observe(document.querySelector('main'), {childList:true,subtree:true,characterData:true});
  apply();
})();
