const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",()=> {
    question.innerHTML= "Yayy I love you ";
    gif.src="https://media2.giphy.com/media/1msDUtCpBk1BihoOGD/giphy.gif?cid=6c09b952k38afsi66m6ihawiuvptxaqlg5nxhtit999ajh3d&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"

})
noBtn.addEventListener("mouseover",()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random()* maxX)
    const randomY = Math.floor(Math.random()* maxY)
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

})