//Shows result of the api call. Goes into the data, finds 'answer' and displays it one character at a time(typewriter).
function displayGrammar(response) {
  new Typewriter("#grammar_info", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

//Makes api call, selects the id 'unser_instructions' and tells the AI to respond to the value of user_instructions.
function generateGrammarInfo(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user_instructions");
  let apiKey = "b75146af46et20c8d83f2ao3006e4a7d";
  let context = `You are an English as a foreign language teaching assistant. Help the user to understand the grammar term that is being requested.`;
  let prompt = `Use beginner level English to write a short, clear example sentence about ${userInstructions.value}. In the next sentence, concisely explain the grammar. In all examples, categorise the information like this: <strong>Example<strong/>:, <strong>Explanation<strong/>:. If ${userInstructions.value} is a tense, highlight key words, for example: 'yesterday' is a key word that we use with past simple.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //Selects the id grammar_info and displays the message in that element.
  let grammarInfo = document.querySelector("#grammar_info");
  grammarInfo.innerHTML = `Generating information about ${userInstructions.value}...`;

  //axios allows the api call to take place
  axios.get(apiUrl).then(displayGrammar);
  //calls this function when the api call is made(submit button is clicked).
  flashAvatar();
}

//When submit is clicked, the generateGrammarInfo function is called
let formElement = document.querySelector("#grammar_term");
formElement.addEventListener("submit", generateGrammarInfo);

//This function makes the avatars change colour when the submit button is clicked. It loops through each avatar in the list. SetTimeout stops the colour change after 30secs.
function flashAvatar() {
  avatar.forEach((element) => {
    element.style.backgroundColor = "#a8e1e1";
  });

  setTimeout(() => {
    avatar.forEach((element) => {
      element.style.backgroundColor = "";
    });
  }, 3000);
}
let avatar = document.querySelectorAll(
  "#avatar_1, #avatar_2, #avatar_3, #avatar_4"
);

formElement.addEventListener("submit", flashAvatar);

//Each avatar is assigned to a variable and each variable is given an eventListener. The text to be displayed in the search bar is stored in the textToShow variable. textInput.value then takes the text defined in the textToShow variable and displays it at 'user_instructions' located in the input bar.
function displayText() {
  let image = document.getElementById("avatar_1");
  let image2 = document.getElementById("avatar_2");
  let image3 = document.getElementById("avatar_3");
  let image4 = document.getElementById("avatar_4");
  let textInput = document.getElementById("user_instructions");

  image.addEventListener("click", () => {
    let textToShow = "present simple";
    textInput.value = textToShow;
  });

  image2.addEventListener("click", () => {
    let textToShow = "past simple";
    textInput.value = textToShow;
  });

  image3.addEventListener("click", () => {
    let textToShow = "conditional";
    textInput.value = textToShow;
  });

  image4.addEventListener("click", () => {
    let textToShow = "passive";
    textInput.value = textToShow;
  });
}

displayText();

function alertInfo() {
  alert(
    "Top grammatical terms: Adjective, Adverb, Clause, Conjunction, Future, Object, Imperative, Predicate, Preposition, Pronoun, Present perfect simple, Present perfect continous, Past perfect, Past participle, Present participle, Subject, Subjunctive."
  );
}
let hint = document.querySelector("#hint");
hint.addEventListener("click", alertInfo);
