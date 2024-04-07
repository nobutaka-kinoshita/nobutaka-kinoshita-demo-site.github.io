const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/usagi.png") {
    myImage.setAttribute("src", "images/wear.png");
  } else {
    myImage.setAttribute("src", "images/usagi.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
  }
}

//初期化コード
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
