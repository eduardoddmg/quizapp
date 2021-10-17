const quizData = [
    {
        question:"Qual lei explica que força resultante aplica a um corpo?",
        a: "primeira lei de newton",
        b: "segunda lei de newton",
        c: "terceira lei de newton",
        d: "primeira lei de mendel",
        correct:"b",
    },
    {
        question:"Qual lei é conhecida como princípio da segregação dos caracteres?",
        a: "primeira lei de mendel",
        b:"segunda lei de mendel",
        c:"lei de darwin",
        d:"lei de karl marx",
        correct:"a",
    },
    {
        question: "Opção que preenche corretamente as lacunas: O gerente dirigiu-se ___ sua sala e pôs-se ___ falar ___ todas as pessoas convocadas.",
        a:"à - à - à",
        b:"a - à - à",
        c:"à - a - a",
        d:"a - a - à",
        correct:"c",
    },
    {
        question:"Qual movimento foi responsável pela transição para novos processos de manufatura?",
        a:"Revolução Francesa",
        b:"Independência do Haiti",
        c:"Primeira Guerra Mundial",
        d:"Revolução Industrial",
        correct:"d",
    },
]

const quiz = document.getElementById("container");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length} questões.</h2>
                
                <button onclick="location.reload()">Recomeçar o quiz</button>
            `;
        }
    }
});