function darkmode() {
    const body = document.body;
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';

    // Зміна режиму теми в локальному сховищі
    localStorage.setItem('darkmode', !wasDarkmode);

    // Перемикає клас dark-mode для body
    body.classList.toggle('dark-mode', !wasDarkmode);

    // Отримання елемента кнопки
    const btn = document.querySelector('.btn');

    // Зміна зображення кнопки в залежності від стану теми
    const newImgSrc = !wasDarkmode ? './img/light-mode.png' : './img/dark-mode.png';
    btn.src = newImgSrc;
}

// Налаштування обробника події click для кнопки
document.querySelector('.btn').addEventListener('click', darkmode);

// Функція для застосування режиму теми при завантаженні сторінки
function onload() {
    const body = document.body;
    const isDarkmode = localStorage.getItem('darkmode') === 'true';

    // Перемикає клас dark-mode для body на підставі локального сховища
    body.classList.toggle('dark-mode', isDarkmode);

    // Отримання елемента кнопки
    const btn = document.querySelector('.btn');

    // Зміна зображення кнопки в залежності від стану теми при завантаженні сторінки
    const newImgSrc = isDarkmode ? './img/light-mode.png' : './img/dark-mode.png';
    btn.src = newImgSrc;
}

// Застосовує режим теми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', onload);
