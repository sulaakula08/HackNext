/* Examples checked against official catalogues on 2026-10-14. */
(function () {
  var aitu = 'https://astanait.edu.kz/ru/how-to-apply';
  var aalto = 'https://www.aalto.fi/en/admission-services/apply-to-bachelors-programmes-in-english';
  var design = 'https://www.aalto.fi/en/admission-services/admission-to-bachelors-programme-in-design-and-media-bachelor-and-master-of-arts-3-yrs-2-yrs';
  var kaznu = 'https://welcome.kaznu.kz/ru/education_programs/bachelor/';
  var asu = 'https://admission.asu.edu/apply/international/first-year';
  function item(uni, name, exams, dates, url, admissions) {
    return { university: uni, name: name, exams: exams, dates: dates, url: url, admissions: admissions || url, checked: '14.10.2026' };
  }
  function it(name, exams) { return item('Astana IT University · Казахстан', name, exams + '; AET', 'Набор 2026: зачисление 20 июня — 25 августа. Календарь 2027 уточни у вуза.', aitu); }
  function a(name, exams, source) { return item('Aalto University · Финляндия', name, exams, 'Подача на набор 2027: 7–22 января 2027.', source || aalto); }
  function k(name) { return item('КазНУ им. аль-Фараби · Казахстан', name, 'Для поступления после школы — ЕНТ; профильные предметы уточни для программы.', 'Сроки следующего набора уточни в приёмной комиссии.', kaznu); }
  function us(name) { return item('Arizona State University · США', name, 'Подтверждение английского, например IELTS; SAT / ACT необязательны.', 'Весна 2027: приоритетный срок 1 ноября 2026. Для подачи нужен документ об окончании школы.', 'https://psychology.asu.edu/admission/undergraduate-admission/choose-your-degree', asu); }
  window.VENTORME_PROGRAMS = {
    tech: { kz: [it('Software Engineering', 'ЕНТ: математика + информатика'), it('Big Data Analysis', 'ЕНТ: математика + информатика')], abroad: [a('Data Science', 'Для admission round A: SAT или ACT.'), a('Computer Engineering', 'Для admission round A: SAT или ACT.')] },
    design: { kz: [it('Media Technologies', 'ЕНТ: математика + информатика'), it('Digital Journalism', 'ЕНТ и творческие экзамены')], abroad: [a('Design and Media', 'Творческие задания; английский, например IELTS Academic, если нет освобождения.', design), a('Technology, Business and Design', 'Для admission round A: предварительное задание + SAT или ACT.')] },
    biz: { kz: [it('IT Management', 'ЕНТ: математика + география'), it('IT Entrepreneurship', 'ЕНТ: математика + география')], abroad: [a('International Business', 'Для admission round A: SAT или ACT.'), a('Finance', 'Для admission round A: SAT или ACT.')] },
    care: { kz: [k('Психология · 6B03107'), k('Социология · 6B03101')], abroad: [us('Psychology, BS'), us('Neuroscience, BS')] }
  };
})();
