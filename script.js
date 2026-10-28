// Функция для переключения вкладок
function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Функция для копирования скриптов
function copyScript(scriptType) {
    let scriptText = "";

    if (scriptType === 'stellar') {
        scriptText = 'loadstring(game:HttpGet("https://githubusercontent.com"))()'; 
    } else if (scriptType === 'rivals') {
        // ТОТ САМЫЙ СКРИПТ, КОТОРЫЙ ТЫ СКИЗАЛ
        scriptText = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/kiciahook/kiciahook/refs/heads/main/loader.luau"))()';
    }

    // Копирование в буфер
    navigator.clipboard.writeText(scriptText).then(() => {
        alert('Скрипт успешно скопирован!');
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}
