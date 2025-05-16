const messages = [
    "Você tem certeza? Clica aqui se não odeia",
    "100% de certeza??Clica aqui se não odeia",
    "Você garante??Clica aqui se não odeia",
    "Será mesmo...Clica aqui se não odeia",
    "Estava achando isso!Clica aqui se não odeia",
    "Se você falar sim vou ficar triste...Clica aqui se não odeia",
    "Muito triste amor...Clica aqui se não odeia",
    "Aff, será mesmo...Clica aqui se não odeia",
    "Beleza, só falar que sim...",
    "FALA SIM AGORA! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
