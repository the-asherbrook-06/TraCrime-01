purpleAccentButton = document.getElementById('purpleAccentButton');
blueAccentButton = document.getElementById('blueAccentButton');
cyanAccentButton = document.getElementById('cyanAccentButton');
greenAccentButton = document.getElementById('greenAccentButton');
yellowAccentButton = document.getElementById('yellowAccentButton');
orangeAccentButton = document.getElementById('orangeAccentButton');
redAccentButton = document.getElementById('redAccentButton');


redAccentButton.addEventListener('click', () =>{
    console.log('Hello Red');
    document.documentElement.style.setProperty('--globalHoverColor', '#FFC9C966');
    document.documentElement.style.setProperty('--globalClickColor', '#FFC9C999');
    document.documentElement.style.setProperty('--globalActiveColor', '#FFA0A0bb');

    redAccentButton.innerHTML = 'check_circle';
    orangeAccentButton.innerHTML = 'radio_button_checked';
    yellowAccentButton.innerHTML = 'radio_button_checked';
    greenAccentButton.innerHTML = 'radio_button_checked';
    cyanAccentButton.innerHTML = 'radio_button_checked';
    blueAccentButton.innerHTML = 'radio_button_checked';
    purpleAccentButton.innerHTML = 'radio_button_checked';
});

orangeAccentButton.addEventListener('click', () =>{
    console.log('Hello Orange');
    document.documentElement.style.setProperty('--globalHoverColor', '#FFCA8B66');
    document.documentElement.style.setProperty('--globalClickColor', '#FFCA8B99');
    document.documentElement.style.setProperty('--globalActiveColor', '#FFCA8Bbb');

    redAccentButton.innerHTML = 'radio_button_checked';
    orangeAccentButton.innerHTML = 'check_circle';
    yellowAccentButton.innerHTML = 'radio_button_checked';
    greenAccentButton.innerHTML = 'radio_button_checked';
    cyanAccentButton.innerHTML = 'radio_button_checked';
    blueAccentButton.innerHTML = 'radio_button_checked';
    purpleAccentButton.innerHTML = 'radio_button_checked';
});

yellowAccentButton.addEventListener('click', () =>{
    console.log('Hello Yellow');
    document.documentElement.style.setProperty('--globalHoverColor', '#C3E08666');
    document.documentElement.style.setProperty('--globalClickColor', '#C3E08699');
    document.documentElement.style.setProperty('--globalActiveColor', '#C3E086bb');

    redAccentButton.innerHTML = 'radio_button_checked';
    orangeAccentButton.innerHTML = 'radio_button_checked';
    yellowAccentButton.innerHTML = 'check_circle';
    greenAccentButton.innerHTML = 'radio_button_checked';
    cyanAccentButton.innerHTML = 'radio_button_checked';
    blueAccentButton.innerHTML = 'radio_button_checked';
    purpleAccentButton.innerHTML = 'radio_button_checked';
});

greenAccentButton.addEventListener('click', () =>{
    console.log('Hello Green');
    document.documentElement.style.setProperty('--globalHoverColor', '#85FFB666');
    document.documentElement.style.setProperty('--globalClickColor', '#85FFB699');
    document.documentElement.style.setProperty('--globalActiveColor', '#85FFB6bb');

    redAccentButton.innerHTML = 'radio_button_checked';
    orangeAccentButton.innerHTML = 'radio_button_checked';
    yellowAccentButton.innerHTML = 'radio_button_checked';
    greenAccentButton.innerHTML = 'check_circle';
    cyanAccentButton.innerHTML = 'radio_button_checked';
    blueAccentButton.innerHTML = 'radio_button_checked';
    purpleAccentButton.innerHTML = 'radio_button_checked';
});

cyanAccentButton.addEventListener('click', () =>{
    console.log('Hello Cyan');
    document.documentElement.style.setProperty('--globalHoverColor', '#66BDD866');
    document.documentElement.style.setProperty('--globalClickColor', '#66BDD899');
    document.documentElement.style.setProperty('--globalActiveColor', '#66BDD8bb');

    redAccentButton.innerHTML = 'radio_button_checked';
    orangeAccentButton.innerHTML = 'radio_button_checked';
    yellowAccentButton.innerHTML = 'radio_button_checked';
    greenAccentButton.innerHTML = 'radio_button_checked';
    cyanAccentButton.innerHTML = 'check_circle';
    blueAccentButton.innerHTML = 'radio_button_checked';
    purpleAccentButton.innerHTML = 'radio_button_checked';
});

blueAccentButton.addEventListener('click', () =>{
    console.log('Hello Blue');
    document.documentElement.style.setProperty('--globalHoverColor', '#7E8BFF66');
    document.documentElement.style.setProperty('--globalClickColor', '#7E8BFF99');
    document.documentElement.style.setProperty('--globalActiveColor', '#7E8BFFbb');

    redAccentButton.innerHTML = 'radio_button_checked';
    orangeAccentButton.innerHTML = 'radio_button_checked';
    yellowAccentButton.innerHTML = 'radio_button_checked';
    greenAccentButton.innerHTML = 'radio_button_checked';
    cyanAccentButton.innerHTML = 'radio_button_checked';
    blueAccentButton.innerHTML = 'check_circle';
    purpleAccentButton.innerHTML = 'radio_button_checked';
});

purpleAccentButton.addEventListener('click', () =>{
    console.log('Hello Purple');
    document.documentElement.style.setProperty('--globalHoverColor', '#A484FF66');
    document.documentElement.style.setProperty('--globalClickColor', '#A484FF99');
    document.documentElement.style.setProperty('--globalActiveColor', '#A484FFbb');

    redAccentButton.innerHTML = 'radio_button_checked';
    orangeAccentButton.innerHTML = 'radio_button_checked';
    yellowAccentButton.innerHTML = 'radio_button_checked';
    greenAccentButton.innerHTML = 'radio_button_checked';
    cyanAccentButton.innerHTML = 'radio_button_checked';
    blueAccentButton.innerHTML = 'radio_button_checked';
    purpleAccentButton.innerHTML = 'check_circle';
});