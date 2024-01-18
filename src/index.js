function displayGrammar(response) {
  new Typewriter("#grammar_info", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateGrammarInfo(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user_instructions");
  let apiKey = "b75146af46et20c8d83f2ao3006e4a7d";
  let context = `You are an English as a foreign language teaching assistant. Help the user to understand the grammar term that is being requested.`;
  let prompt = `Use beginner level English to: write an example sentence about ${userInstructions.value}, for example: I went shopping yesterday. Explain the grammar, for example: 'went' is the past simple of 'go'. Highlight any key words, for example: yesterday is a key word that we use with past simple. Categorise the information like this: <strong>Example<strong/>:, Explanation:, Key words:. Please make verbs <strong><strong/>. `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayGrammar);
}

let formElement = document.querySelector("#grammar_term");
formElement.addEventListener("submit", generateGrammarInfo);
