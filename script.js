// Функция для переключения вкладок
function openTab(tabId) {
    let contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    let buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Функция надежного автоматического копирования скрипта Stellar Hub
function copyScript() {
    // Две рабочие версии скрипта Stellar Hub, которые прислали ранее
    const textToCopy = 'loadstring(game:HttpGet("https://pandauth.com"))()\nloadstring(game:HttpGet("https://pandadevelopment.net"))()';
    
    // Создаем временное невидимое текстовое поле
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    textarea.style.position = "fixed"; 
    document.body.appendChild(textarea);
    
    // Автоматически выделяем текст внутри него
    textarea.select();
    
    try {
        // Выполняем команду копирования в буфер обмена
        const successful = document.execCommand("copy");
        if (successful) {
            alert("Скрипт Stellar Hub успешно скопирован в буфер обмена!");
        } else {
            alert("Не удалось скопировать автоматически. Попробуйте еще раз.");
        }
    } catch (err) {
        alert("Ошибка при копировании: " + err);
    }
    
    // Удаляем временное поле со страницы
    document.body.removeChild(textarea);
}
