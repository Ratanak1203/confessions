const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click",()=> {
    question.innerHTML= "Yayy I love you ";
    gif.src="https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/467983155_2377981199211849_680039011264312608_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF9dYgWS7PliLFP8NTJ_5C0LTKSYElnaDMtMpJgSWdoM8yPmZzFFes9wlCF_QHxjK2R1ceieAS4gPrD_Sh2goO8&_nc_ohc=JBvbmDPDtPYQ7kNvgGZ3C6I&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AQMbzly0qGnJN_eIdTk2Tew&oh=00_AYD5N_2Qv_QZWGsYtlBQsdBVzpdLBFA97cxm167X6yhqiA&oe=67450C10"

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
