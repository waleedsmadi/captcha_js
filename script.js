// selectors
const captchaText = document.querySelector("[data-c-text]"),
      changeBtn = document.querySelector("[data-c-change-btn]"),
      theInput = document.querySelector("[data-c-input]"),
      checkBtn = document.querySelector("[data-c-check-btn]"),
      result = document.querySelector("[data-c-result]");
    

// set all letters to randomize
const letters = ["a","b","c","d","e","f","g","h","i","j","k"
                ,"l","m","n","o","p","q","r","s","t","u","v",
                "w","y","z","A","B","C","D","E","F","G","H",
                "I","J","K","L","M","N","O","P","Q","R","S","T",
                "U","V","W","X","Y","Z"]



// when start the program >> fill the captcha text
captchaText.innerText = getRandomLetters();



// to get 6 random letters
function getRandomLetters(){
    let theString = '';

    // get 6 random letters
    for(let i=0; i<6; i++){
        const randomIdx = parseInt(Math.random() * letters.length);
        theString += letters[randomIdx];
    }
    return theString;
}


// re-fill the captcha text
changeBtn.addEventListener("click", ()=>{
    captchaText.innerText = getRandomLetters();
});



// to show check btn when input not empty
theInput.addEventListener("input", (e)=>{
    const theValue = e.target.value;

    if(theValue !== ''){
        checkBtn.classList.remove("hide");
    }else{
        checkBtn.classList.add("hide");
    }
});


// when click on check btn
checkBtn.addEventListener("click", ()=>{
    const theValue = theInput.value;

    // if equals > make sure remove incorrect then add correct class
    if(theValue == captchaText.textContent){
        result.classList.remove("incorrect");
        result.classList.add("correct");
        result.innerText = "Nice! you don't appear to be a robot.";
    
    // if not equal > make sure remove correct then add incorrect class
    }else{
        result.classList.remove("correct");
        result.classList.add("incorrect");
        result.innerText = "Captcha not matched. Please try again!";
    }
});