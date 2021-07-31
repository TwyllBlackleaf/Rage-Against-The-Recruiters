

function renderQuestionLi(question) {
    const questionLiEl = document.createElement("li");
    const questionFormEl = document.createElement("form");



    switch (question.Questions.question_type) {
        case "decimal":
        case "integer":
            const questionTextEl = document.createElement("label");
            questionTextEl.setAttribute("for", question.Questions.questionid_pk);

            const numberInputEl = document.createElement("input");
            numberInputEl.setAttribute("type", "number");
            numberInputEl.setAttribute("id", question.Questions.questionid_pk);

            questionFormEl.appendChild(questionTextEl);
            questionFormEl.appendChild(numberInputEl);

            // set the initial value to the answer in the db, if anything

            // add event listener for submitting to the form element

            questionLiEl.appendChild(questionFormEl);
            break;
        case "boolean":
            const radioDivEl = document.createElement("div");
            const radioYesEl = document.createElement("input");
            const radioNoEl = document.createElement("input");
            radioYesEl.setAttribute("type", "radio");
            radioNoEl.setAttribute("type", "radio");
            radioYesEl.setAttribute("name", question.Questions.questionid_pk);
            radioNoEl.setAttribute("name", question.Questions.questionid_pk);
            radioYesEl.setAttribute("value", 1);
            radioNoEl.setAttribute("value", 0);

            // set the initial checked button to the answer in the db, if anything

            // add event listener for submitting to the form element

            questionLiEl.appendChild(questionFormEl);
            break;
        

    }
}

async function renderDealbreakers(event) {
    event.preventDefault();

    data = await fetch("api/preferences", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (data.ok) {
        data.forEach( (question) => {
            if (question.Questions.is_deal_breaker) {
                const questionLi = renderQuestionLi(question);
                
                document.querySelector("#dealbreaker-category").appendChild(questionLi);
            }
        })
    }
}

