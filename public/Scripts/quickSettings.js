var quickSettingsPopout = document.getElementById("quickSettingPopout");
var quickSettingsPopoutButton = document.getElementById("quickSettingButton");
var quickSettingsPopoutState = 'close';

quickSettingsPopoutButton.addEventListener('click', () => {
    if( quickSettingsPopoutState == "close") {
        console.log("open");
        quickSettingsPopout.style.display = 'grid';
        quickSettingsPopoutState = 'open';
        quickSettingsPopoutButton.style.backgroundColor = "var(--globalActiveColor)";
    }
    else {
        console.log("close");
        quickSettingsPopout.style.display = 'none';
        quickSettingsPopoutState = 'close';
        quickSettingsPopoutButton.style.backgroundColor = "";
    }
});