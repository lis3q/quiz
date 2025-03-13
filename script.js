const answer = document.querySelectorAll(".answer");
console.log(answer)

answer.forEach(ans => {
    ans.addEventListener("click", () => {
        answer.forEach(ans => ans.classList.remove("checked"));
        ans.classList.add("checked");
    })
})

// Check question
const checkQuestion = () => {
    answer.forEach(ans => {
        if(ans.classList.contains("good-ans") || ans.classList.contains("good-ans checked")) {
            ans.classList.add("active");
        } 
        if(ans.classList.contains("checked")) {
            ans.classList.add("wrong");
        }
    }) 
}

// Visited questions
const questionBtns = document.querySelectorAll(".content .question");

const visitedQuestions = JSON.parse(localStorage.getItem("visitedQuestions")) || [];

questionBtns.forEach(btn => {
    if (visitedQuestions.includes(btn.dataset.id)) {
        btn.classList.add("visited");
    }

    btn.addEventListener("click", () => {
        btn.classList.add("visited");

        if (!visitedQuestions.includes(btn.dataset.id)) {
            visitedQuestions.push(btn.dataset.id);
            localStorage.setItem("visitedQuestions", JSON.stringify(visitedQuestions));
        }
    });
});

// Resetowanie localStorage po kliknięciu w przycisk resetu
document.getElementById("resetVisited").addEventListener("click", () => {
    localStorage.removeItem("visitedQuestions");
    location.reload(); // Odświeżenie strony, aby zresetować oznaczenia
});