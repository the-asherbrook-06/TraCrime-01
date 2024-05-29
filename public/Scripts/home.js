overviewButton = document.getElementById('homeContentOverviewButton');
findButton = document.getElementById('homeContentFindButton');
overview3Button = document.getElementById('homeContentOverviewButton3');

overview = document.getElementById('homeContentOverview');
find = document.getElementById('homeContentFind');
overview3 = document.getElementById('homeContentOverview3');

homeSelected = overview;

overviewButton.style.backgroundColor = 'var(--globalActiveColor)';
findButton.style.backgroundColor = '';
overview3Button.style.backgroundColor = '';
find.style.display = 'none';
overview3.style.display = 'none';

overviewButton.addEventListener('click', () => {
    overviewButton.style.backgroundColor = 'var(--globalActiveColor)';
    findButton.style.backgroundColor = '';
    overview3Button.style.backgroundColor = '';

    overview.style.display = 'inline';
    find.style.display = 'none';
    overview3.style.display = 'none';
});

findButton.addEventListener('click', () => {
    overviewButton.style.backgroundColor = '';
    findButton.style.backgroundColor = 'var(--globalActiveColor)';
    overview3Button.style.backgroundColor = '';

    overview.style.display = 'none';
    find.style.display = 'inline';
    overview3.style.display = 'none';
});

overview3Button.addEventListener('click', () => {
    overviewButton.style.backgroundColor = '';
    findButton.style.backgroundColor = '';
    overview3Button.style.backgroundColor = 'var(--globalActiveColor)';

    overview.style.display = 'none';
    find.style.display = 'none';
    overview3.style.display = 'inline';
});