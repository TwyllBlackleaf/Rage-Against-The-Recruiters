

function renderQuestionLi(question) {
    const questionLiEl = document.createElement("li");
    const questionFormEl = document.createElement("form");

    switch (question.Questions.question_type) {
        case "decimal":
        case "integer":
            const questionTextEl = document.createElement("label");
            questionTextEl.setAttribute("for", question.Questions.questionid_pk);
            questionTextEl.textContent = question.Questions.question_text;

            const numberInputEl = document.createElement("input");
            numberInputEl.setAttribute("type", "number");
            numberInputEl.setAttribute("id", question.Questions.questionid_pk);

            const submitButtonEl = document.createElement("button");
            submitButtonEl.setAttribute("type", "submit");
            submitButtonEl.textContent = "Submit";
            submitButtonEl.setAttribute("name", "questionid_pk");
            submitButtonEl.setAttribute("value", question.Questions.questionid_pk);

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
            radioYesEl.setAttribute("name", question.Questions.questionid_pk);
            radioNoEl.setAttribute("name", question.Questions.questionid_pk);
            radioYesEl.setAttribute("value", 1);
            radioNoEl.setAttribute("value", 0);

            const radioQuestionEl = document.createElement("p");
            radioQuestionEl.textContent = question.Questions.question_text;

            const submitButtonEl = document.createElement("button");
            submitButtonEl.setAttribute("type", "submit");
            submitButtonEl.textContent = "Submit";
            submitButtonEl.setAttribute("name", "questionid_pk");
            submitButtonEl.setAttribute("value", question.Questions.questionid_pk);

            radioDivEl.appendChild(radioYesEl);
            radioDivEl.appendChild(radioNoEl);

            questionFormEl.appendChild(radioDivEl);
            questionFormEl.appendChild(submitButtonEl);

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
        document.querySelector("#dealbreaker-category").innerHTML = "";

        data.forEach( (question) => {
            if (question.Questions.is_deal_breaker) {
                const questionLi = renderQuestionLi(question);
                
                document.querySelector("#dealbreaker-category").appendChild(questionLi);
            }
        });
    }
}

async function renderCategories(event) {
    event.preventDefault();

    data = await fetch("api/preferences", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
}


async function fillOutAnswers(event) {
    event.preventDefault();

    data = await fetch("", {
        
    });
}

async function submitAnswer(event) {
    event.preventDefault();
}