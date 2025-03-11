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

// Visited question
const questionBtns = document.querySelectorAll(".content .question");
questionBtns.forEach(btn => 
    btn.addEventListener("click", () => {
        btn.classList.add("visited");
}))

function closeTab() {
    window.close();
}