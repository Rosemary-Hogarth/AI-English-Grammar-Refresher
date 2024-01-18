function displayGrammar(response) {
  new Typewriter("#grammar_info", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateGrammarInfo(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user_instructions");
  let apiKey = "b75146af46et20c8d83f2ao3006e4a7d";
  let context = `You are an English as a foreign language teaching assistant. Help the user to understand the grammar term that is being requested.`;
  let prompt = `Use beginner level English to write an example sentence about ${userInstructions.value}, for example: I went shopping yesterday. In the next sentence, explain the grammar, for example: 'went' is the past simple of 'go'. In the next sentence, highlight key words connected to the grammar, for example: 'yesterday' is a key word that we use with past simple. Do NOT hightlight nouns, for example: 'Anna' or 'breakfast'. In all examples, categorise the information like this: <strong>Example<strong/>:, <strong>Explanation<strong/>:, <strong>Key words<strong/>:.. `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let grammarInfo = document.querySelector("#grammar_info");
  grammarInfo.innerHTML = `Generating information about ${userInstructions.value}...`;
  axios.get(apiUrl).then(displayGrammar);
  flashAvatar();
}

let formElement = document.querySelector("#grammar_term");
formElement.addEventListener("submit", generateGrammarInfo);

let avatar = document.querySelectorAll(
  "#avatar_1, #avatar_2, #avatar_3, #avatar_4"
);
formElement.addEventListener("submit", flashAvatar);

function flashAvatar() {
  avatar.forEach((element) => {
    element.style.backgroundColor = "#ed9206";
  });

  setTimeout(() => {
    avatar.forEach((element) => {
      element.style.backgroundColor = "";
    });
  }, 3000);
}

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
