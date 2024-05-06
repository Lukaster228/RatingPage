const markEl = document.querySelectorAll(".mark-el");
const topBarEl = document.getElementById("top-bar-div-el");
const submitBtnEl = document.getElementById("submit-btn-el");
const questionTxtEl = document.getElementById("question-txt-div");
const innerContentEl = document.getElementById("inner-dontent-div-el");
const mainTxtEl = document.getElementById("main-txt-container-div");
const bottomRowEl = document.getElementById("bottom-row-content-div");

let btnStatuses = [isBtn1Clicked = {state: false}, isBtn2Clicked = {state: false}, isBtn3Clicked = {state: false}, isBtn4Clicked = {state: false}, isBtn5Clicked = {state: false}];

function changeMarkColor(markElem, isBtnClicked) { //change button color on click
    console.log(isBtnClicked.state);
    if (isBtnClicked.state === false) {
        markElem.style.color = "white";
        markElem.style.backgroundColor = "orange";
        isBtnClicked.state = true;
        makeDefaultAllExceptOne(markElem, markEl, btnStatuses);
    } else {
        markElem.style.color = "hsl(217, 16%, 53%)";
        markElem.style.backgroundColor = "hsl(180, 2%, 19%)";
        isBtnClicked.state = false;
    }
    console.log(isBtnClicked.state);
}

function makeDefaultAllExceptOne(mainEl, elementsToChange, allBtnStatuses) { //restore other buttons status and color after one of buttons is clicked(to prevert more that one button beign orange)
    for (let count = 0; count < elementsToChange.length; count++) {
        if (elementsToChange[count] !== mainEl) {
            elementsToChange[count].style.color = "hsl(217, 16%, 53%)";
            elementsToChange[count].style.backgroundColor = "hsl(180, 2%, 19%)";
            allBtnStatuses[count].state = false;
        }
    }
}

function setTextMark(allOfBtnStatuses) { //change text after submit according to mark
    for (let count = 0; count < allOfBtnStatuses.length; count++) {
        if (allOfBtnStatuses[count].state === true) {
            questionTxtEl.innerHTML = `<p>You selected ${count+1} out of 5</p>`;
            questionTxtEl.style.color = "orange";
            questionTxtEl.style.backgroundColor = "hsl(213, 19%, 18%)";
            questionTxtEl.style.display = "block";
            questionTxtEl.style.margin = "30px auto";
            questionTxtEl.style.width = "190px";
            questionTxtEl.style.padding = "5px 0";
            questionTxtEl.style.borderRadius = "20px";
        }
    }
}

markEl[0].addEventListener("click", () => changeMarkColor(markEl[0], btnStatuses[0]));
markEl[1].addEventListener("click", () => changeMarkColor(markEl[1], btnStatuses[1]));
markEl[2].addEventListener("click", () => changeMarkColor(markEl[2], btnStatuses[2]));
markEl[3].addEventListener("click", () => changeMarkColor(markEl[3], btnStatuses[3]));
markEl[4].addEventListener("click", () => changeMarkColor(markEl[4], btnStatuses[4]));

submitBtnEl.addEventListener("click", function() {
    if (isBtn1Clicked.state === true || isBtn2Clicked.state === true || isBtn3Clicked.state === true || isBtn4Clicked.state === true || isBtn5Clicked.state === true) {
        innerContentEl.style.textAlign = "center";
        topBarEl.innerHTML = `<img src='images/illustration-thank-you.svg'>`;
        setTextMark(btnStatuses);
        mainTxtEl.innerHTML = `<h1>Thank you!</h1>`;
        mainTxtEl.style.color = "white";
        bottomRowEl.innerHTML = `<p>We appreciate you taking the time to give a rating.
                                    If you ever need more support, don't hesitate to get in toch!</p>`;
        bottomRowEl.style.color = "hsl(217, 16%, 53%)";
        bottomRowEl.style.width = "95%";
        bottomRowEl.style.display = "block";
        bottomRowEl.style.margin = "20px auto 0 auto";
    }
});

//06.05.2024