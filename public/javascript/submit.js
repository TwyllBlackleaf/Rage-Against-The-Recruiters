function clearCategory() {
    document.querySelector("#dealbreaker-category").hidden = true;
    document.querySelector("#category-1").hidden = true;
    document.querySelector("#category-2").hidden = true;
    document.querySelector("#category-3").hidden = true;
    document.querySelector("#category-4").hidden = true;
    document.querySelector("#category-5").hidden = true;
    document.querySelector("#category-6").hidden = true;
    document.querySelector("#category-7").hidden = true;
}

// function checkDealbreaker(questionId) {
//     fetch("/api/opportunity", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
// }

function renderQuestionLi(question) {
    const questionLiEl = document.createElement("li");
    const questionFormEl = document.createElement("form");
    const submitButtonEl = document.createElement("button");

    submitButtonEl.setAttribute("type", "submit");
    submitButtonEl.textContent = "Submit";
    submitButtonEl.setAttribute("name", "questionid_pk");
    submitButtonEl.setAttribute("value", question.questionid_pk);


    switch (question.question_type) {
        case "decimal":
        case "integer":
            const questionTextEl = document.createElement("label");
            questionTextEl.setAttribute("for", question.questionid_pk);
            questionTextEl.textContent = question.question_text;

            const numberInputEl = document.createElement("input");
            numberInputEl.setAttribute("type", "number");
            numberInputEl.setAttribute("id", question.questionid_pk);
      
            questionFormEl.appendChild(questionTextEl);
            questionFormEl.appendChild(numberInputEl);
            questionFormEl.appendChild(submitButtonEl);

            questionLiEl.appendChild(questionFormEl);

            break;
        case "boolean":
            const radioDivEl = document.createElement("div");
            const radioYesEl = document.createElement("input");
            const radioNoEl = document.createElement("input");
            radioYesEl.setAttribute("type", "radio");
            radioNoEl.setAttribute("type", "radio");
            radioYesEl.setAttribute("id", "yes");
            radioNoEl.setAttribute("id", "no");
            radioYesEl.setAttribute("name", question.questionid_pk);
            radioNoEl.setAttribute("name", question.questionid_pk);
            radioYesEl.setAttribute("value", 1);
            radioNoEl.setAttribute("value", 0);

            const yesLabelEl = document.createElement("label");
            const noLabelEl = document.createElement("label");
            yesLabelEl.setAttribute("for", "yes");
            yesLabelEl.textContent = "Yes";
            noLabelEl.setAttribute("for", "no");
            noLabelEl.textContent = "No";

            const radioQuestionEl = document.createElement("p");
            radioQuestionEl.textContent = question.question_text;

            radioDivEl.appendChild(radioYesEl);
            radioDivEl.appendChild(yesLabelEl);
            radioDivEl.appendChild(radioNoEl);
            radioDivEl.appendChild(noLabelEl);

            questionFormEl.appendChild(radioQuestionEl);
            questionFormEl.appendChild(radioDivEl);
            questionFormEl.appendChild(submitButtonEl);

            questionLiEl.appendChild(questionFormEl);
            break;
    }
    return questionLiEl;
}

function renderDealbreakers(event) {
    clearCategory();
    document.querySelector("#dealbreaker-category").hidden = false;

    fetch("/api/preferences", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then(data => {
            console.log(data);

            document.querySelector("#dealbreaker-category").innerHTML = "";

            data.categories.forEach(category => {
                console.log(category);

                category.Questions.forEach(question => {
                    console.log(question);
                    if (question.is_deal_breaker) {
                        const questionLi = renderQuestionLi(question);
                        
                        document.querySelector("#dealbreaker-category").appendChild(questionLi);
                    }
                })
                
            });
        })
    }).catch(err => {
        console.log(err);
    });
}


function renderCategories(event) {
    clearCategory();

    var catId;
    
    if (event.target.matches("#compensation-button")) {
        document.querySelector("#category-1").hidden = false;
        catId = 1;
    } else if (event.target.matches("#benefits-button")) {
        document.querySelector("#category-2").hidden = false;
        catId = 2;
    } else if (event.target.matches("#workplace-button")) {
        document.querySelector("#category-3").hidden = false;
        catId = 3;
    } else if (event.target.matches("#perks-button")) {
        document.querySelector("#category-4").hidden = false;
        catId = 4;
    } else if (event.target.matches("#location-button")) {
        document.querySelector("#category-5").hidden = false;
        catId = 5;
    } else if (event.target.matches("#travel-button")) {
        document.querySelector("#category-6").hidden = false;
        catId = 6;
    } else if (event.target.matches("#citizenship-button")) {
        document.querySelector("#category-7").hidden = false;
        catId = 7;
    } 


    fetch("/api/preferences", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
        response.json().then(data => {
            document.querySelector(`#category-${catId}`).innerHTML = "";

            data.categories.forEach(category => {
                if (category.categoryid_pk === catId) {
                    category.Questions.forEach(question => {
                        const questionLi = renderQuestionLi(question);
                        
                        document.querySelector(`#category-${catId}`).appendChild(questionLi);
                    });
                }
            });
        })
    }).catch(err => {
        console.log(err);
    });
}


// async function fillOutAnswers(event) {
//     event.preventDefault();

//     data = await fetch("", {

//     });
// }

async function submitAnswer(event) {
    event.preventDefault();
}


document.querySelector("#dealbreaker-button").addEventListener("click", renderDealbreakers);
document.querySelector("#compensation-button").addEventListener("click", renderCategories);
document.querySelector("#benefits-button").addEventListener("click", renderCategories);
document.querySelector("#workplace-button").addEventListener("click", renderCategories);
document.querySelector("#perks-button").addEventListener("click", renderCategories);
document.querySelector("#location-button").addEventListener("click", renderCategories);
document.querySelector("#travel-button").addEventListener("click", renderCategories);
document.querySelector("#citizenship-button").addEventListener("click", renderCategories);

if (user) {
    console.log(user);
}
renderDealbreakers();