let result = document.querySelector("#showText");
let textDom = document.querySelector("#domText");
let section = document.querySelector("#hidden");
let defect = document.querySelector("#defect");

function encrypt() {
  let text = textDom.value;
  let encryptedText = "";

  if (validate(text)) {
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];

      if (letter == "a") {
        letter = "ai";
      } else if (letter == "e") {
        letter = "enter";
      } else if (letter == "i") {
        letter = "imes";
      } else if (letter == "o") {
        letter = "ober";
      } else if (letter == "u") {
        letter = "ufat";
      }
      encryptedText = encryptedText + letter;
    }
    animation();
    showText(result, encryptedText);
  }
}

function decrypt() {
  let text = textDom.value;

  if (validate(text)) {
    animation();
    const dictionary = {
      a: /ai/g,
      e: /enter/g,
      i: /imes/g,
      o: /ober/g,
      u: /ufat/g,
    };

    for (const [key, value] of Object.entries(dictionary)) {
      text = text.replace(value, key);
    }
    showText(result, text);
  }
}

function animation() {
  defect.classList.add("fadeOut");

  setTimeout(function () {
    defect.classList.add("invisible");
    section.classList.add("fadeOut");
    section.classList.remove("invisible");
  }, 1000);

  setTimeout(function () {
    section.classList.remove("fadeOut");
    section.classList.add("appear");
  }, 1100);
}

function validate(text) {
  let isValid = true;

  if (text.length > 0) {
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      let newLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/, "");
      if (letter != letter.toLowerCase() || letter != newLetter) {
        invalidText();
        isValid = false;
      }
    }
  } else {
    emptyText();
    isValid = false;
  }
  return isValid;
}

function showText(element, text) {
  return (element.value = text);
}

function copy() {
  result.select();
  document.execCommand("copy");
}

function clearInput() {
  showText(textDom, "");
}
