var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getURL(text){
    var URL = serverURL + "?" + "text=" + text;
    // console.log(URL)
    return URL;
}

function errorHandler(error){
    alert("Something went wrong! Please try again later!")
    console.log(error)
}
function eventHandler(){
    var inputText = txtInput.value;
    
    fetch(getURL(inputText))
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => {txtOutput.innerText = json.contents.translated })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",eventHandler);