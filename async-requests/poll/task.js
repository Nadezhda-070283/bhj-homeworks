const pollTitle=document.querySelector("#poll__title");
const pollsList=document.querySelector("#poll__answers");

const getPollResult= async (voteId,index) => {
    const response = await fetch ("https://students.netoservices.ru/nestjs-backend/poll",{
    method: "POST",
    headers: {
        "Content-type": "application/x-www-form-urlencoded"
    },
    body:`vote=${voteId}&answer=${index}`
});

const {stat} = await response.json();
pollsList.textcontent = "";
let totalvotes=0;
for({votes} of stat) {
    alert("Спасибо, ваш голос засчитан!");
};
}

(async() => {
    const response = await fetch("https://students.netoservices.ru/nestjs-backend/poll");
    const body = await response.json();
    pollTitle.textContent = body.data.title;
    body.data.answers.forEach((item, index) => {
        const pollAnswer = document.createElement ("button");
        pollAnswer.classList.add("poll__answer");
        pollAnswer.style.margin="3px";
        pollAnswer.textContent= item;
        pollAnswer.addEventListener("click", ()=>{
            getPollResult(body.id, index);
        });
       pollsList.append(pollAnswer);
    });
})();
