const botTitleText = "GLASSCO 10th";
const countBotTitleText = 20;

const botBlueTeamTitleText = document.getElementById("blueteam-bot-text-format");
const botRedTeamTitleText = document.getElementById("redteam-bot-text-format");

for (let i = 0; i < countBotTitleText; i++) {
    const span = document.createElement("span");
    span.className = "marquee-text mx-2 text-white text-xl font-bold";
    span.textContent = botTitleText;

    botBlueTeamTitleText.appendChild(span);
    botRedTeamTitleText.appendChild(span.cloneNode(true));
}

