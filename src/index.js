function generateGrammarInfo(event) {
  event.preventDefault();

  new Typewriter("#grammar_info", {
    strings: "I went shopping yesterday.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#grammar_term");
formElement.addEventListener("submit", generateGrammarInfo);
