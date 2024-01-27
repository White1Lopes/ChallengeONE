function encryptText() {
  let textToEncrypt = document.getElementById("encryptTextArea").value;

  if (textToEncrypt == null || textToEncrypt == "") {
    alert("Nenhum texto digitado!");
    return;
  }

  let encryptedText = encrypt(textToEncrypt);
  console.log(encryptedText);

  let image = document.getElementById("encryptImage");
  image.classList.add("hide");

  let subTitle = document.getElementById("encryptSubtitle");
  subTitle.classList.add("hide");

  let textCryptography = document.getElementById("textCryptography");
  textCryptography.classList.add("presentation__textCryptographyAlone");

  let paragraph = document.getElementById("encryptParagraph");
  console.log(paragraph)
  paragraph.classList.add("presentation__textCryptography__paragraphAlone");
  paragraph.innerHTML = encryptedText;
}

function decryptText() {
  let textToEncrypt = document.getElementById("encryptTextArea").value;

  if (textToEncrypt == null || textToEncrypt == "") {
    alert("Nenhum texto digitado!");
    return;
  }

  let decryptedText = decrypt(textToEncrypt);

  console.log(decryptedText);

  let image = document.getElementById("encryptImage");
  image.classList.add("hide");

  let subTitle = document.getElementById("encryptSubtitle");
  subTitle.classList.add("hide");

  let textCryptography = document.getElementById("textCryptography");
  textCryptography.classList.add("presentation__textCryptographyAlone");

  let paragraph = document.getElementById("encryptParagraph");
  console.log(paragraph)
  paragraph.classList.add("presentation__textCryptography__paragraphAlone");
  paragraph.innerHTML = decryptedText;
}

function encrypt(text) {
  let textEncrypted = "";

  for (let i = 0; i < text.length; i++) {
    let encrypted = encryptWord(text[i]);
    textEncrypted += encrypted;
  }
  return textEncrypted;
}

function decrypt(text) {
  let textDecrypted = "";

  for (let i = 0; i < text.length; ) {
    let decryptedJson = decryptWord(text, i);

    textDecrypted += decryptedJson.word;

    if (decryptedJson.length == 0) {
      i++;
    } else {
      i += decryptedJson.length;
    }
  }

  return textDecrypted;
}

function encryptWord(letterToFind) {
  switch (letterToFind) {
    case "a":
      return "ai";
    case "e":
      return "enter";
    case "i":
      return "imes";
    case "o":
      return "ober";
    case "u":
      return "ufat";
    default:
      return letterToFind;
  }
}

function decryptWord(text, index) {
  switch (text[index]) {
    case "a":
      if (text.substr(index, 2) == "ai") return { word: "a", length: 2 };
    case "e":
      if (text.substr(index, 5) == "enter") return { word: "e", length: 5 };
    case "i":
      if (text.substr(index, 4) == "imes") return { word: "i", length: 4 };
    case "o":
      if (text.substr(index, 4) == "ober") return { word: "o", length: 4 };
    case "u":
      if (text.substr(index, 4) == "ufat") return { word: "u", length: 4 };
    default:
      return { word: text[index], length: 0 };
  }
}
