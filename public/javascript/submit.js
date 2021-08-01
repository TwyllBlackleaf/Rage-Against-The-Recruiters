function clearCategory() {
    document.querySelector("#dealbreaker-category").hidden = true;
    document.querySelector("#compensation-category").hidden = true;
    document.querySelector("#benefits-category").hidden = true;
    document.querySelector("#workplace-category").hidden = true;
    document.querySelector("#perks-category").hidden = true;
    document.querySelector("#location-category").hidden = true;
    document.querySelector("#travel-category").hidden = true;
    document.querySelector("#citizenship-category").hidden = true;
}

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

function renderDealbreakers() {
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


// async function renderCategories(event) {
//     event.preventDefault();

//     data = await fetch("/api/preferences", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
// }


// async function fillOutAnswers(event) {
//     event.preventDefault();

//     data = await fetch("", {

//     });
// }

async function submitAnswer(event) {
    event.preventDefault();
}

renderDealbreakers();