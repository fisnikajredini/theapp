const dataCategories = [
  { categoryName: "01 - ОСНОВАЊЕ, ОРГАНИЗАЦИЈА И РАЗВОЈ", categoryId: 1 },
  { categoryName: "02 - УПРАВУВАЊЕ И РАКОВОДЕЊЕ", categoryId: 2 },
  {
    categoryName: "03 - КАНЦЕЛАРИСКО - АРХИВСКИ, ПРАВНИ И ОПШТИ РАБОТИ",
    categoryId: 3,
    categoryTime: 1,
  },
  { categoryName: "04 - ЧОВЕЧКИ РЕСУРСИ", categoryId: 4 },
  { categoryName: "05 - ФИНАНСИСКО И МАТЕРИЈАЛНО РАБОТЕЊЕ", categoryId: 5 },
  { categoryName: "06 - ОДБРАНА И БЕЗБЕДНОСТ", categoryId: 6 },
  {
    categoryName:
      "07 - ЕЛЕКТРОНСКИ СИСТЕМ И АВТОМАТСКА ОБРАБОТКА НА ПОДАТОЦИ (АОП)",
    categoryId: 7,
    categoryTime: 1,
  },
  { categoryName: "08 - ПОСЕБЕН ДЕЛ", categoryId: 8 },
];

const dataSubcat = [
  {
    subcatName:
      "0101 - Документи/записи за основање, регистрација и статусни промени (одлука за основање, договор за основање, пријава за упис и сл.), општи акти кои произлегуваат од надлежноста и дејноста на имателот (колективни договори, статути, правилници, упатства и сл.), акти за организација, интеграција, трансформација, ликвидација, ак¬ционерска книга и сл.",
    subcatId: 1,
    categoryId: 1,
    categoryTime: 1,
  },
  {
    subcatName:
      "0102 - Програми и планови за работа и развој (перспективни, годишни, периодични), Извештај за работењето на имателот (годишни и периодични).",
    subcatId: 2,
    categoryId: 1,
    categoryTime: 1,
  },
  {
    subcatName:
      "0103 - Анализи, елаборати, студии, информации и сл. за работата и дејноста на имателот.",
    subcatId: 3,
    categoryId: 1,
    categoryTime: 1,
  },
  {
    subcatName:
      "0201 - Акти, материјали и записници од работата на органот на управување (Собрание, Собир на содружници, Совет или други органи) и материјали што произлегуваат од донесените одлуки.",
    subcatId: 4,
    categoryId: 2,
    categoryTime: 1,
  },
  {
    subcatName:
      "0202 - Акти, материјали и записници од работата на извршниот орган (Управен одбор, Извршен одбор, Одбор на директори или друг орган) и материјали што произлегуваат од донесените одлуки.",
    subcatId: 5,
    categoryId: 2,
    categoryTime: 1,
  },
  {
    subcatName:
      "0203 - Материјали и записници од работата на надзорните органи (Надзорен одбор, ревизор и сл.).",
    subcatId: 6,
    categoryId: 2,
    categoryTime: 1,
  },
  {
    subcatName:
      "0204 - Акти и материјали од работата на раководниот орган (функционер, управител и сл.).",
    subcatId: 7,
    categoryId: 2,
    categoryTime: 1,
  },
  {
    subcatName:
      "0205 - Материјали од работата на стручните и советодавните органи (Колегиум, Стручен колегиум и сл.).",
    subcatId: 8,
    categoryId: 2,
    categoryTime: 1,
  },
  {
    subcatName:
      "0206 - Материјали и записници од работата напостојани и повремени комисии.",
    subcatId: 9,
    categoryId: 2,
    categoryTime: 1,
  },
  {
    subcatName: "0207 - Изборни материјали на органите на управување.",
    subcatId: 10,
    categoryId: 2,
    categoryTime: 1,
  },
  {
    subcatName:
      "Книги за основна евиденција на документите во канцелариското рабо¬те¬ње:",
    subcatId: 11,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0302 - Преписка (расписи, писма од информативен карактер, покани за седници и состаноци, предлози, издавање на уверенија и потврди, одлуки, известувања и писма добиени од други правни или физички лица, барања на услуги и сл.), записници за извршено примопредавање на работите и должностите.",
    subcatId: 12,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0303 - Евиденции и документи во врска со канцелариското и архивското работење: План на архивски знаци, Листа на архивски материјал и Листа на документарен материјал со рокови на негово чување; Попис и опис на архивскиот материјал. Попис на документарниот материјал предложен за уништување, барање на согласност за уништување и решение за негово уништување. материјали во врска со чувањето, заштитата и користењето на архивскиот материјал кај имателот. записници за примопредавање на архивскиот материјал.",
    subcatId: 13,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0304 - Записници, решенија и преписка за извршениот инспекциски и стручен надзор.",
    subcatId: 14,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0305 - Статистички извештаи и прегледи (годишни и периодични).",
    subcatId: 15,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0306 - Правни работи (евидентни книги, тужби, жалби, приговори, полномошна, полиси, налози, опомени, решенија, рекламации, барања, преписка и сл.).",
    subcatId: 16,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0307 - Договори: за деловно-техничка соработка, за техничко-технолошки иновации и унапредувања, за услуги и сл.",
    subcatId: 17,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0308 - Акти и материјали за имотно-правни работи (договори решенија, спогодби, техничка документација, согласности, дозволи, имотни листови и сл.).",
    subcatId: 18,
    categoryId: 3,
    categoryTime: 1,
  },
  {
    subcatName:
      "0401 - Материјали во врска со распишување и спроведување на конкурсоглас (одлуки за распишување, записници на комисијата, известувања, приговори и сл.).",
    subcatId: 19,
    categoryId: 4,
    categoryTime: 1,
  },
  {
    subcatName:
      "0402 - Досиеја на вработените",
    subcatId: 20,
    categoryId: 4,
    categoryTime: 1,
  },
  {
    subcatName:
      "0403 - Книги за евиденција, планови, програми и материјали за стручно образование и оспособување на работниците, специјализација, стипендирање и сл.",
    subcatId: 21,
    categoryId: 4,
    categoryTime: 1,
  },
  {
    subcatName:
      "0404 - Материјали и акти во врска со одговорноста на работниците (барања за покренување постапка, решенија за формирање на комисија, покани, записници од сослушувања, изјави, извештаи за проценки, решенија за изрекување мерки и приговори).",
    subcatId: 22,
    categoryId: 4,
    categoryTime: 1,
  },
  {
    subcatName:
      "0405 - Преписка во врска со остварување права од работен однос.",
    subcatId: 23,
    categoryId: 4,
    categoryTime: 1,
  },
  {
    subcatName:
      "0501 - Годишна сметка, Годишен финансиски извештај, финансиски планови.",
    subcatId: 24,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName:
      "0502 - Прописи и упатства за финансиско и материјалното работење.",
    subcatId: 25,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName:
      "0503 - Евиденции и документи за финансиското работење за буџетски корисници.",
    subcatId: 26,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName:
      "0504 - Евиденции и документи за финансиското работење за даночни обврзници.",
    subcatId: 27,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName:
      "0505 - Евиденции и документи за финансиското работење на непрофитни организации.",
    subcatId: 28,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName:
      "0506 - Исплатни листи за плати, картони за плати и пријави на податоци за утврдување на нето плати и стаж на осигурувањето.",
    subcatId: 29,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName: "0507 - Досиеја за јавни набавки.",
    subcatId: 30,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName: "0508 - Преписка за финансиско и материјалното работење.",
    subcatId: 31,
    categoryId: 5,
    categoryTime: 1,
  },
  {
    subcatName:
      "0601 - Акти и материјали од работата на органите на управување и раководење во врска со одбраната и безбедноста (упатства, одлуки, решенија, наредби, извештаи, анализи, сертификати, информации и сл.).",
    subcatId: 32,
    categoryId: 6,
    categoryTime: 1,
  },
  {
    subcatName:
      "0602 - Евидентни книги за одбраната и безбедноста (посебен деловодник за документи со степен на класификација).",
    subcatId: 33,
    categoryId: 6,
    categoryTime: 1,
  },
  {
    subcatName:
      "0603 - Плански документи за спроведување на подготовки за одбраната и безбедноста.",
    subcatId: 34,
    categoryId: 6,
    categoryTime: 1,
  },
  {
    subcatName:
      "0604 - Записници од инспекцискиот надзор во врска со одбраната и безбедноста.",
    subcatId: 35,
    categoryId: 6,
    categoryTime: 1,
  },
  {
    subcatName:
      "0605 - Материјали во врска со мерките за посебна заштита на архивскиот и документарниот материјал.",
    subcatId: 36,
    categoryId: 6,
    categoryTime: 1,
  },
  {
    subcatName: "0606 - Преписка во врска со одбраната и безбедноста.",
    subcatId: 37,
    categoryId: 6,
    categoryTime: 1,
  },
  {
    subcatName:
      "0701 - Документација и преписка за изградба и функционирање на електронски систем.",
    subcatId: 38,
    categoryId: 7,
    categoryTime: 1,
  },
  {
    subcatName:
      "0702 - Документација и преписка за чување и заштита на електронски документи (бекап заштитни копи и миграција и сл).",
    subcatId: 39,
    categoryId: 7,
    categoryTime: 1,
  },
  {
    subcatName: "0801 - Понуда за ревизија на финансиските извештаи.",
    subcatId: 40,
    categoryId: 8,
    categoryTime: 1,
  },
  {
    subcatName: "0802 - Договор за ревизија на финансиските извештаи.",
    subcatId: 41,
    categoryId: 8,
    categoryTime: 1,
  },
  {
    subcatName: "0803 - Понуда за сметководствен и даночен косалтинг.",
    subcatId: 42,
    categoryId: 8,
    categoryTime: 1,
  },
  {
    subcatName: "0804 - Договор за сметководствен и даночен косалтинг.",
    subcatId: 43,
    categoryId: 8,
    categoryTime: 1,
  },
];
const dataSubsubcat = [
  {
    subsubcatName:
      "Деловодници",
    subsubcatId: 1,
    subcatId: 11,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Уписници, попис на документи за архивски материјал зависно од видот и чувањето на документите, регистри, книги за штембили и печати, книги зареверси и сл.",
    subsubcatId: 2,
    subcatId: 11,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Помошни книги за евиденција (регистри, попис на документи зa документарен материјал зависно од видот и чувањето на документите, доставни книги и сл.)",
    subsubcatId: 3,
    subcatId: 11,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Правни работи  (евидентни  книги, тужби,  жалби,  приговори,  налози, ре-шенија)",
    subsubcatId: 4,
    subcatId: 16,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Преписка,  полномошна,  барања, полиси,  рекламации,  опомени и сл.",
    subsubcatId: 5,
    subcatId: 16,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Пријави и одјави на вработени, договор/решение за вработување, одлуки за засновање и престанок на работен однос, решенија за распоредување на работа",
    subsubcatId: 6,
    subcatId: 20,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "За минат труд, годишен одмор, отсуства, боледување и сл.",
    subsubcatId: 7,
    subcatId: 20,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Деловни книги на буџетите и буџетските корисници: (дневник, главна книга (книга на приходи и расходи и книга на средствата, обврските и изворите на средствата).",
    subsubcatId: 8,
    subcatId: 26,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Помошни книги (аналитичка евиденција: книга на влезни сметки, книга на излезни сметки, книга за набавки, книга (попис) за инвентарот, книга (попис) на капиталниот имот, книга за јавниот долг, книга за благајна, книга на побарувањата и обврските и книга на изводи на сметката).",
    subsubcatId: 9,
    subcatId: 26,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Сметководствени документи врз основа на кои се внесени податоците во деловните книги.",
    subsubcatId: 10,
    subcatId: 26,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Исправи што се однесуваат на платниот промет.",
    subsubcatId: 11,
    subcatId: 26,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Продажни и контролни блокови, помошни пресметки и слични исправи.",
    subsubcatId: 12,
    subcatId: 26,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Трговски книги, сметководствени документи, записи и пописи, белешки за применети сметководствени политики и други документи во врска со организацијата; Деловни писма и кореспонденции, Сметки за книжење.",
    subsubcatId: 13,
    subcatId: 27,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Други документи доколку имаат значење за оданочување; Евиденции за готовински промет (денарска и девизна благајна).",
    subsubcatId: 14,
    subcatId: 27,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Дневник. Главна книга.",
    subsubcatId: 15,
    subcatId: 28,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Помошни книги (аналитичка евиденција). Сметководствени документи врз основа на кои се внесени податоците во деловните книги.",
    subsubcatId: 16,
    subcatId: 28,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Исправи што се однесуваат на платниот промет.",
    subsubcatId: 17,
    subcatId: 28,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Продажни и контролни блокови, помошни пресметки и слични исправи.",
    subsubcatId: 18,
    subcatId: 28,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Спецификација, идеен и главен проект, атести, сертификати, лиценци, одржување, надградба, обуки, упатства, препораки, извештаи и сл.",
    subsubcatId: 19,
    subcatId: 38,
    categoryTime: 1,
  },
  {
    subsubcatName:
      "Преписка  за изградба и функционирање на електронски систем.",
    subsubcatId: 20,
    subcatId: 38,
    categoryTime: 1,
  },
];
export { dataCategories, dataSubcat, dataSubsubcat };
