let result = document.getElementById("showText");

function encrypt() {
  let text = document.getElementById("domText").value;
  let encryptedText = "";

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

  showText(result, encryptedText);
}

function decrypt() {
  let text = document.getElementById("domText").value;
  let decryptedText = text;

  let rega = /ai/g;
  let rege = /enter/g;
  let regi = /imes/g;
  let rego = /ober/g;
  let regu = /ufat/g;

  decryptedText = decryptedText.replace(rega, "a");
  decryptedText = decryptedText.replace(rege, "e");
  decryptedText = decryptedText.replace(regi, "i");
  decryptedText = decryptedText.replace(rego, "o");
  decryptedText = decryptedText.replace(regu, "u");

  showText(result, decryptedText);
}

function showText(value, text) {
  return (value.textContent = text);
}

function copy() {
  let textDommm = document.getElementById("showText");
  textDommm.select();
  document.execCommand("copy");
}

function clearInput() {
  let textDom = document.getElementById("domText");
  textDom.value = "";
}

// function copy() {
//   let textDom = document.getElementById("domText");
//   let text = document.getElementById("showText").innerHTML;

//   textDom.value = text;
// }
