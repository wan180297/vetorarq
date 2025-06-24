function animationCount(elementId, valueEnd, duration) {
    const element = document.getElementById(elementId);
    let valueCurrent = 0;
    const interval = 10;
    const incremento = valueEnd / (duration / interval);

    const count = setInterval(() => {
    valueCurrent += incremento;
    if (valueCurrent >= valueEnd) {
        valueCurrent = valueEnd;
        clearInterval(count);
    }
    element.textContent = Math.floor(valueCurrent).toLocaleString("pt-BR");
    }, interval)
}

animationCount("contador1", 18900600, 2000);
animationCount("contador2", 156, 1500);
