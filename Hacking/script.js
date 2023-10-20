const virus = document.querySelector('.virus');
const shield = document.querySelector('.shield');
const question = document.querySelector('.question');
const virusInfo = document.querySelector('.virusInfo');
const shieldInfo = document.querySelector('.shieldInfo');
const questionInfo = document.querySelector('.questionInfo');
const closeVirus = document.getElementById('closeVirus');
const closeShield = document.getElementById('closeShield');
const closeQuestion = document.getElementById('closeQuestion');

let isOpen = {
    shield: false,
    virus: false,
    question: false,
};

function toggleInfo(infoElement, flagName) {
    if (!isOpen[flagName]) {
        infoElement.style.opacity = '1';
        isOpen[flagName] = true;

        for (const element in isOpen) {
            if (element !== flagName) {
                if (isOpen[element]) {
                    document.querySelector(`.${element}Info`).style.opacity = '0';
                    isOpen[element] = false;
                }
            }
        }
    } else {
        infoElement.style.opacity = '0';
        isOpen[flagName] = false;
    }
}

shield.addEventListener('click', () => {
    toggleInfo(shieldInfo, 'shield');
});

virus.addEventListener('click', () => {
    toggleInfo(virusInfo, 'virus');
});

question.addEventListener('click', () => {
    toggleInfo(questionInfo, 'question');
});

closeShield.addEventListener('click', () => {
    shieldInfo.style.opacity = '0';
    isOpen.shield = false;
});

closeVirus.addEventListener('click', () => {
    virusInfo.style.opacity = '0';
    isOpen.virus = false;
});

closeQuestion.addEventListener('click', () => {
    questionInfo.style.opacity = '0';
    isOpen.question = false;
});
