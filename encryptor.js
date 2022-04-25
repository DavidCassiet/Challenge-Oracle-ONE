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
  } else {
    return alert("Por favor ingrese un texto valido");
  }
}

function decrypt() {
  if (validate(textDom.value)) {
    animation();
    showText(result, decryptText(textDom.value));
  } else {
    return alert("Por favor ingrese un texto valido");
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

function decryptText(text) {
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
  return text;
}

function validate(text) {
  let isValid = true;

  if (text.length > 0) {
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      let newLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/, "");
      if (letter != letter.toLowerCase() || letter != newLetter) {
        isValid = false;
        break;
      }
    }
  } else {
    isValid = false;
  }
  return isValid;
}

function showText(element, text) {
  return (element.textContent = text);
}

function copy() {
  result.select();
  document.execCommand("copy");
}

function clearInput() {
  textDom.value = "";
}
