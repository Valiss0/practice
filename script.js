(function () {
  const cards = document.querySelectorAll(".threat-card");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!cards.length || !prevBtn || !nextBtn || !dots.length) return;

  let current = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    current = index;
  }

  prevBtn.addEventListener("click", () => {
    const nextIndex = (current - 1 + cards.length) % cards.length;
    showCard(nextIndex);
  });

  nextBtn.addEventListener("click", () => {
    const nextIndex = (current + 1) % cards.length;
    showCard(nextIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showCard(index));
  });
})();

(function () {
  const backToTopBtn = document.getElementById("backToTop");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();

(function () {
  const btn = document.getElementById("fortuneButton");
  const resultBox = document.getElementById("fortuneResult");
  if (!btn || !resultBox) return;

  const titleEl = resultBox.querySelector(".fortune-card-title");
  const textEl = resultBox.querySelector(".fortune-card-text");
  const imageWrapper = resultBox.querySelector(".fortune-card-image-wrapper");
  const imageEl = resultBox.querySelector(".fortune-card-image");
  const startTextEl = resultBox.querySelector(".fortune-start-text");

  const cards = [
        {
      title: "Шут",
      text: "Защита пройдет с элементом неожиданности. Ты можешь волноваться, но именно легкость, спонтанность и искренность сыграют тебе в плюс. Возможен нестандартный вопрос — и ты ответишь лучше, чем сам/сама от себя ожидаешь.",
      img: "./таро/шут.jpg"
    },
    {
      title: "Маг",
      text: "Ты будешь говорить уверенно и убедительно. Отличное владение темой, хорошая речь, логика, умение «продать» свою работу. Очень сильная карта — ты контролируешь процесс.",
      img: "./таро/маг.jpg"
    },
    {
      title: "Жрица",
      text: "Ты знаешь больше, чем показываешь. Внутреннее спокойствие, интуитивные ответы, умение выдержать паузу. Даже если молчишь — это выглядит уверенно.",
      img: "./таро/жрица.jpg"
    },
    {
      title: "Императрица",
      text: "Защита пройдет мягко и благожелательно. Комиссия настроена к тебе тепло. Твоя работа воспринимается как зріла, «выношенная», продуманная.",
      img: "./таро/императрица.jpg"
    },
    {
      title: "Император",
      text: "Четкая структура, строгие ответы, уважение со стороны комиссии. Ты выглядишь собранной и дорослою. Возможна поддержка авторитетного викладача.",
      img: "./таро/император.jpg"
    },
    {
      title: "Иерофант",
      text: "Ты действуешь строго по правилам. Классическая защита, без сюрпризов. Комиссии нравится, что ты «вписываешься» в академические стандарты.",
      img: "./таро/жрец.jpg"
    },
    {
      title: "Влюбленные",
      text: "Ключевой момент выбора или вопроса. Тебе зададут что-то важное — и от ответа зависит впечатление. Но ты выбираешь правильно.",
      img: "./таро/любовники.jpg"
    },
    {
      title: "Колесница",
      text: "Ты берешь ситуацию под контроль и уверенно доходишь до финала. Даже если будут вопросы — ты их «продавишь». Успешное завершение.",
      img: "./таро/колесница.jpg"
    },
    {
      title: "Сила",
      text: "Ты справишься благодаря внутренней устойчивости. Даже если волнуешься — этого не видно. Спокойствие, выдержка, харизма.",
      img: "./таро/сила.jpg"
    },
    {
      title: "Отшельник",
      text: "Ты опираешься на свой опыт и глубокие знания. Возможно, защита пройдет тихо, без шума, но очень достойно.",
      img: "./таро/отшельник.jpg"
    },
    {
      title: "Колесо Фортуны",
      text: "Удача на твоей стороне. Все сложится лучше, чем ты планировала. Могут попасться «удобные» вопросы или лояльная комиссия.",
      img: "./таро/фортуна.jpg"
    },
    {
      title: "Справедливость",
      text: "Объективная оценка. Ты получишь ровно то, что заслужила. Если готовилась — результат будет честно высоким.",
      img: "./таро/справедливость.jpg"
    },
    {
      title: "Повешенный",
      text: "Может быть ощущение, что ты зависла или не сразу понимаешь вопрос. Но если не суетиться и посмотреть под другим углом — все станет ясно.",
      img: "./таро/повешенный.jpg"
    },
    {
      title: "Смерть",
      text: "Это конец важного этапа. Защита — как символ завершения и перехода в новую жизнь. Бояться нечего: трансформация во благо.",
      img: "./таро/смерть.jpg"
    },
    {
      title: "Умеренность",
      text: "Спокойная, ровная защита. Без крайностей, без провалов. Ты чувствуешь баланс и держишь темп.",
      img: "./таро/умеренность.jpg"
    },
    {
      title: "Дьявол",
      text: "Сильное напряжение, страх оценки или давления. Но если не дать эмоциям взять верх — ты не проиграешь. Главное — не сомневаться в себе.",
      img: "./таро/дьявол.jpg"
    },
    {
      title: "Башня",
      text: "Неожиданный вопрос или резкий комментарий может выбить из колеи. Но это не провал — просто момент стресса, который быстро пройдет.",
      img: "./таро/башня.jpg"
    },
    {
      title: "Звезда",
      text: "Очень хорошая карта. Надежда оправдывается. Защита оставит приємне послевкусие, можливо — похвалу або підтримку.",
      img: "./таро/звезда.jpg"
    },
    {
      title: "Луна",
      text: "Ты будешь переживать сильнее, чем нужно. Много тревог в голове, но они не отражают реальность.",
      img: "./таро/луна.jpg"
    },
    {
      title: "Солнце",
      text: "Успех, признание, отличная оценка. Ты сияешь, тебя слушают, ты довольна собой. Одна из лучших карт для защиты.",
      img: "./таро/солнце.jpg"
    },
    {
      title: "Суд",
      text: "Момент истины. Ты выходишь и показываешь результат всей своей работы. Возможна высокая оценка или особое внимание к твоему проекту.",
      img: "./таро/верх суд.jpg"
    },
    {
      title: "Мир",
      text: "Триумфальное завершение. Защита прошла успешно, ты закрываешь этот этап с чувством удовлетворения и облегчения.",
      img: "./таро/мир.jpg"
    }
  ];

  function getRandomCard() {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
  }

  function restartAnimation(el, className) {
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
  }

  btn.addEventListener("click", () => {
    const card = getRandomCard();

    if (startTextEl) {
      startTextEl.style.display = "none";
    }

    imageEl.src = card.img;
    imageEl.alt = card.title;

    titleEl.textContent = card.title;
    textEl.textContent = card.text;

    restartAnimation(imageWrapper, "pop-in");

    titleEl.classList.remove("typing");
    textEl.classList.remove("typing", "typing-long");
    void titleEl.offsetWidth;
    void textEl.offsetWidth;

    titleEl.classList.add("typing");
    if (card.text.length > 120) {
      textEl.classList.add("typing-long");
    } else {
      textEl.classList.add("typing");
    }
  });
})();
