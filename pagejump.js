// PAGE JUMP DONE!
document.addEventListener('DOMContentLoaded', function () {
    // BUTTONS
    const startBtn = document.getElementById('startBtn');
    const playBtn = document.getElementById('playBtn');
    const settingBtn = document.getElementById('settingBtn');
    const normalBtn = document.getElementById('normalBtn');
    const categoryBtn = document.getElementById('categoryBtn');
    const gpSettingBtn = document.getElementById('gpSettingBtn');
    const resumeBtn = document.getElementById('resumeBtn');


    // About The Game
    const atgBtn = document.getElementById('atgBtn');
    // How to Play
    const htpBtn = document.getElementById('htpBtn');

    // SECTIONS
    const landingPage = document.querySelector('.landing-page');
    const startSection = document.querySelector('.start-section');
    const settingSection = document.querySelector('.setting-section');
    const aboutTheGameSection = document.querySelector('.about-the-game');
    const howToPlaySection = document.querySelector('.how-to-play');
    const modeSection = document.querySelector('.mode-section');
    const categorySection = document.querySelector('.category');
    const gameplaySection = document.querySelector('.gameplay-section');
    const gameplaySettingSection = document.querySelector('.gameplay-setting');
    const highscoreSection = document.querySelector('.highscore-section');

    // SECTION RETURN BUTTONS
    const atgRBtn = document.getElementById('atgReturnBtn');
    const htpRBtn = document.getElementById('htpReturnBtn');
    const settingRBtn = document.getElementById('settingReturnBtn');
    const categoryRBtn = document.getElementById('categoryReturnBtn');

    // GAMEPLAY SETTING
    gpSettingBtn.addEventListener('click', function (){
        gameplaySection.style.display = 'none';
        gameplaySettingSection.style.display = 'block';
    })
    //RESUME
    resumeBtn.addEventListener('click', function (){
        gameplaySection.style.display = 'block';
        gameplaySettingSection.style.display = 'none';
    })
    // //RESTART
    // restartBtn.addEventListener('click', function (){
    //     gameplaySection.style.display = 'none';
    //     gameplaySettingSection.style.display = 'block';
    // })
    // //QUIT
    // quitBtn.addEventListener('click', function (){
    //     gameplaySettingSection.style.display = 'none';
    //     startSection.style.display = 'block';
    // })


    // CATEGORY TO MODE JUMP
    categoryRBtn.addEventListener('click', function(){
        categorySection.style.display = 'none';
        modeSection.style.display = 'block';
    })

    // SETTING TO START JUMP
    settingRBtn.addEventListener('click', function(){
        settingSection.style.display = 'none';
        startSection.style.display = 'block';
    })

    // ATG TO SETTING JUMP
    atgRBtn.addEventListener('click', function(){
        aboutTheGameSection.style.display = 'none';
        settingSection.style.display = 'block';
    })

    // HTP TO SETTING JUMP
    htpRBtn.addEventListener('click', function(){
        howToPlaySection.style.display = 'none';
        settingSection.style.display = 'block';
    })

    // JUMP TO START SECTION
    startBtn.addEventListener('click', function () {
        landingPage.style.display = 'none';
        startSection.style.display = 'block';
    });

    //JUMP TO CATEGORY SECTION
    playBtn.addEventListener('click', function () {
        startSection.style.display = 'none';
        modeSection.style.display = 'block';
    });

    //JUMP TO SETTING SECTION
    settingBtn.addEventListener('click', function () {
        startSection.style.display = 'none';
        settingSection.style.display = 'block';
    });
    
    //JUMP TO ABOUT THE GAME SECTION
    atgBtn.addEventListener('click', function () {
        settingSection.style.display = 'none';
        aboutTheGameSection.style.display = 'block';
    });

    //JUMP TO HOW TO PLAY SECTION
    htpBtn.addEventListener('click', function () {
        settingSection.style.display = 'none';
        howToPlaySection.style.display = 'block';
    });

    // JUMP TO GAMEPLAY SECTION
    normalBtn.addEventListener('click', function () {
        modeSection.style.display = 'none';
        gameplaySection.style.display = 'block';
    });

    // JUMP TO CATEGORY SECTION
    categoryBtn.addEventListener('click', function () {
        modeSection.style.display = 'none';
        categorySection.style.display = 'block';
    });
});