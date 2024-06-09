// 72
const qrContent = [
  ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1", "0", "0", "1", "0", "1", "1", "1", "0", "0", "0", "0", "1", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "0", "1", "1", "1", "1", "1", "0", "1", "0", "0", "1", "1", "1", "1", "0", "1", "1", "0", "1", "1", "1", "1", "1", "0", "0", "1", "0", "1", "1", "1", "1", "1", "0", "1"],
  ["1", "0", "1", "0", "0", "0", "1", "0", "1", "1", "0", "1", "0", "0", "0", "0", "1", "0", "1", "0", "1", "1", "1", "1", "1", "1", "1", "0", "1", "0", "0", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "0", "0", "1", "0", "1", "0", "0", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "0", "0", "1", "0", "1", "1", "0", "1", "0", "0", "0", "1", "1", "0", "1", "0", "1", "1", "0", "0", "0", "0", "1", "0", "1", "0", "0", "0", "1", "0", "1"],
  ["1", "0", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "1", "0", "1", "0", "0", "0", "0", "0", "1", "1", "0", "1", "0", "1", "1", "0", "1", "1", "1", "1", "1", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "0", "0", "0", "0", "0", "0", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "1", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "1", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
  ["1", "0", "1", "0", "0", "1", "0", "0", "0", "1", "1", "1", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "1", "0", "0", "1", "0", "1", "1", "0", "1", "0", "0", "1"],
  ["1", "1", "1", "0", "0", "1", "0", "1", "1", "0", "1", "0", "0", "1", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "1", "1", "0", "0", "1", "0", "0", "1", "0", "1"],
  ["1", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "1", "1", "1", "0", "1", "1", "0", "1", "0", "1", "0", "0", "0", "0", "1", "0", "1", "0", "0", "0", "1", "0", "0", "1"],
  ["1", "0", "1", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1", "0", "1", "0", "1", "1"],
  ["1", "1", "1", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "0", "1", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "0", "1"],
  ["1", "1", "0", "0", "1", "0", "1", "1", "0", "0", "1", "0", "1", "1", "0", "0", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "0", "1", "0", "1", "0", "0", "0", "1", "1"],
  ["1", "1", "0", "1", "1", "0", "1", "0", "0", "1", "0", "0", "1", "1", "0", "0", "1", "1", "1", "0", "0", "0", "1", "1", "1", "0", "1", "0", "1", "1", "1", "1", "1", "1", "1"],
  ["1", "1", "0", "1", "0", "1", "0", "1", "0", "0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "1", "1", "0", "0", "0", "1", "1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "0", "0", "1", "0", "1", "0", "0", "1", "0", "1", "0", "1", "1", "1", "1", "1", "1", "0", "0", "0", "1", "1", "0", "0", "1", "0", "0", "0", "1", "1", "1"],
  ["1", "1", "0", "0", "1", "0", "0", "1", "0", "1", "0", "1", "1", "0", "1", "0", "0", "1", "1", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1", "0", "0", "1", "0", "1", "1"],
  ["1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "0", "1", "1", "0", "1", "0", "0", "1", "1", "1", "0", "1", "0", "0", "1", "0", "0", "1", "1"],
  ["1", "1", "1", "1", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "0", "0", "1", "1", "1", "0", "1", "0", "1", "1", "1", "0", "1", "1", "0", "0", "1"],
  ["1", "0", "0", "1", "1", "0", "0", "0", "0", "1", "0", "1", "0", "0", "0", "1", "1", "0", "1", "1", "0", "1", "1", "0", "1", "1", "1", "1", "0", "0", "0", "0", "1", "0", "1"],
  ["1", "0", "1", "1", "1", "1", "0", "1", "1", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "1", "1", "0", "0", "0", "1", "1", "1", "1", "1", "1", "0", "1", "1", "0", "1"],
  ["1", "1", "1", "0", "0", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1", "0", "1", "1", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "1"],
  ["1", "1", "0", "1", "0", "0", "1", "1", "0", "0", "0", "0", "0", "1", "1", "1", "0", "1", "1", "0", "1", "0", "1", "0", "0", "1", "1", "0", "1", "1", "0", "1", "1", "0", "1"],
  ["1", "0", "1", "1", "0", "0", "1", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "0", "0", "1", "0", "1", "1", "0", "1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "1", "0", "0", "0", "1", "0", "0", "0", "0", "0", "1", "0", "0", "1", "0", "0", "1", "0", "1", "1", "1", "0", "0", "1", "0", "1", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1", "0", "1", "0", "1", "1", "1", "0", "0", "0", "1", "0", "1", "0", "0", "1", "0", "1", "0", "1", "1", "0", "1", "1"],
  ["1", "0", "1", "1", "1", "1", "1", "0", "1", "0", "0", "1", "1", "0", "1", "0", "0", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1", "1", "1", "0", "0", "0", "1", "0", "1"],
  ["1", "0", "1", "0", "0", "0", "1", "0", "1", "1", "1", "1", "1", "1", "0", "0", "1", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "1"],
  ["1", "0", "1", "0", "0", "0", "1", "0", "1", "0", "0", "1", "0", "0", "0", "1", "1", "0", "1", "1", "0", "1", "1", "0", "0", "0", "1", "1", "0", "1", "1", "1", "0", "0", "1"],
  ["1", "0", "1", "0", "0", "0", "1", "0", "1", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1", "1", "1"],
  ["1", "0", "1", "1", "1", "1", "1", "0", "1", "1", "0", "0", "0", "1", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "0", "1", "0", "1", "0", "0", "1", "1", "1", "0", "1"],
  ["1", "0", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1", "1", "0", "1", "0", "1", "0", "0", "0", "0", "1", "0", "1", "0", "1", "1", "0", "1", "0", "1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
];

const qrElement = document.querySelector("#qr");
const squaresIds = [];

qrContent.forEach((line, lineIndex) => {
  console.log("new line");
  const lineDiv = document.createElement("div");
  lineDiv.className = "line";
  qrElement.appendChild(lineDiv);
  line.forEach((element, elementIndex) => {
    const squareDiv = document.createElement("div");
    const idName = `r${lineIndex}c${elementIndex}`;
    squareDiv.id = idName;
    squaresIds.push(idName)
    squareDiv.classList = (element === "1") ? "square square-full" : "square square-empty";
    lineDiv.appendChild(squareDiv);
  });
});


const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array; 
}; 

const shuffledArray = shuffle(squaresIds); 


const startQr = () => {
  if (shuffledArray.length === 0){
    window.clearTimeout(t)
  }else {
    const qrElement = document.querySelector(`#${shuffledArray.pop()}`);
    qrElement.classList += ` show` ;
  }
}
const t = setInterval(startQr, 20); // 1225 / 60
t();




console.log(shuffledArray)