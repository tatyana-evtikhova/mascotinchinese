function startLesson() {
    alert("Урок начинается!");
    // Логика для начала урока
}

function playTone(pinyin) {
    // Logic to play tone audio
    console.log(`Playing tone for: ${pinyin}`);
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    speechSynthesis.speak(utterance);
}
