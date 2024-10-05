const data = [
    {
      id: "1",
      question: "What is JavaScript?",
      answer:
        "A high-level, interpreted programming language called JavaScript makes it possible to create interactive web pages and online apps with dynamic functionality. Commonly referred to as the universal language, Javascript is primarily used by developers for front-end and back-end work.",
    },
    {
      id: "2",
      question: " What is the difference between null and undefined?",
      answer:
        "null is an assignment value that represents no value or an empty value, while undefined is a variable that has been declared but not assigned a value.",
    },
    {
      id: "3",
      question: "What is the purpose of the “this” keyword in JavaScript?",
      answer:
        "The this keyword refers to the object that is executing the current function or method. It allows access to object properties and methods within the context of that object.",
    },
    {
      id: "4",
      question: "What are closures in JavaScript?",
      answer:
        "Closures (closureFn) are functions that have access to variables from an outer function even after the outer function has finished executing. They “remember” the environment in which they were created.",
    },
  ];

  const accordionWrapper = document.querySelector(".accordion");

  function createAccordionData() {
    accordionWrapper.innerHTML = data
      .map(
        (dataItem) => `
      <div class="accordion_item">
      <div class="accordion_title">
      <h3>${dataItem.question}</h3>
      <i class="fa-solid fa-arrow-down"></i>
      </div>
      <div class="accordion_content">
      <p>${dataItem.answer}</p>
      </div>
      </div>
      `
      )
      .join(" ");
  }
  
  createAccordionData();


  const getAccordionTitles = document.querySelectorAll(".accordion_title");
     

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });

      currentItem.classList.add("active");
    }
  });
});