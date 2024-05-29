backgroundSwitchButton = document.getElementById('quickSettingsBackgroundSwitch');
background = document.body;

nextBackgroundSelect = 1;

backgroundSwitchButton.addEventListener('click', () => {
    if(nextBackgroundSelect == 1) {
        console.log('background Click 1');
        background.style.backgroundImage = 'url("./Assets/BackgroundImages/Abstract_1.jpg")';
        nextBackgroundSelect = 2;
    }
    else if(nextBackgroundSelect == 2) {
        console.log('background Click 2');
        background.style.backgroundImage = 'url("../Assets/BackgroundImages/Abstract_2.jpg")';
        nextBackgroundSelect = 3;
    }
    else if(nextBackgroundSelect == 3) {
        console.log('background Click 3');
        background.style.backgroundImage = 'url("../Assets/BackgroundImages/Abstract_3.jpg")';
        nextBackgroundSelect = 4;
    }
    else if(nextBackgroundSelect == 4) {
        console.log('background Click 4');
        background.style.backgroundImage = 'url("../Assets/BackgroundImages/Abstract_4.jpg")';
        nextBackgroundSelect = 1;
    }
});