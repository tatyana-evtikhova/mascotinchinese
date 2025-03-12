function startLesson() {
    alert("Урок начинается!");
    // Логика для начала урока
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    speechSynthesis.speak(utterance);
}
