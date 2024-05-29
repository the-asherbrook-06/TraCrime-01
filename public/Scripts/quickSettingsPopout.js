clock = document.getElementById("quickSettingsClock");
account = document.getElementById("quickSettingsAccount");
setting = document.getElementById("quickSettingsSettings");
background = document.getElementById("quickSettingsBackgroundSwitch");
accentColor = document.getElementById("quickSettingsAccentColorSwitch");


clockPopout = document.querySelector('.quickSettingPopout .clock');
accountPopout = document.querySelector('.quickSettingPopout .account');
settingPopout = document.querySelector('.quickSettingPopout .settings');
backgroundPopout = document.querySelector('.quickSettingPopout .background');
accentColorPopout = document.querySelector('.quickSettingPopout .accentColor');


clock.addEventListener('mouseover', () => {
    clockPopout.style.display = 'inline';
});
clock.addEventListener('mouseout', () => {
    clockPopout.style.display = '';
});

account.addEventListener('mouseover', () => {
    accountPopout.style.display = 'inline';
});
account.addEventListener('mouseout', () => {
    accountPopout.style.display = '';
});

setting.addEventListener('mouseover', () => {
    settingPopout.style.display = 'inline';
});
setting.addEventListener('mouseout', () => {
    settingPopout.style.display = '';
});

background.addEventListener('mouseover', () => {
    backgroundPopout.style.display = 'inline';
});
background.addEventListener('mouseout', () => {
    backgroundPopout.style.display = '';
});

accentColor.addEventListener('mouseover', () => {
    accentColorPopout.style.display = 'inline';
});
accentColor.addEventListener('mouseout', () => {
    accentColorPopout.style.display = '';
});