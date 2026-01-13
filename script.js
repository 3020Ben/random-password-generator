const btnEl = document.querySelector(".btn");

const inputEl = document.getElementById("input");

const copyIconEl = document.querySelector(".fa-copy");

const alertContainerEl = document.querySelector(".alert-container");

const charsContainer = document.querySelector(".characters");

const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const TOTAL_CHARS = 80;

for (let i = 0; i < TOTAL_CHARS; i++){
    const span = document.createElement("span");

    // random character
    span.textContent = chars[Math.floor(Math.random() * chars.length)];

    // random horizontal position
    span.style.left = Math.random() * 100 + "vw";

    // random animation duration and delay
    const duration = Math.random() * 15 + 10;
    span.style.animationDuration = duration + "s";
    span.style.animationDelay = Math.random() * 5 + "s";

    // random font size
    span.style.fontSize = Math.random() * 20 + 20 + "px";

    // alternate colors
    if (Math.random() > 0.5) {
        span.classList.add("alt");
    }
    charsContainer.appendChild(span);
}

btnEl.addEventListener("click", ()=>{
    createPassword();
});

copyIconEl.addEventListener("click", ()=>{
    if(inputEl.value === "") {
        alert("Please generate password first.");
    } else {
        copyPassword();
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
        alertContainerEl.classList.add("active");
        }, 2000);
    }
});

function createPassword(){

    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1); 
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"
};

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
};