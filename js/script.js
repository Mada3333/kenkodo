'use strict';

//手書き風アニメーション
let stroke;

stroke = new Vivus('mask', {
    start: 'manual',
    type: 'oneByOne',
    duration: 300,
    forceRender: false,
    animTimingFunction: Vivus.LINEAR,
});

function vivus() {
    stroke.play();
}

window.addEventListener('load', vivus);


//ロード画面切り替え
function loadView() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

window.onload = setTimeout(loadView, 7000);


//ふわっとロード
function loadEffect() {
    let element = document.getElementsByClassName('load-fade');
    if (!element) {
        return;
    }

    for (let i = 0; i < element.length; i++) {
        element[i].classList.add('is-show');
    }
}

setTimeout(loadEffect, 600);


//ふわっとスクロール
function scrollEffect() {
    let element = document.getElementsByClassName('scroll-up');
    if (!element) {
        return;
    }

    let scrollY = window.scrollY;
    let windowH = window.innerHeight;
    let showTiming = 200;

    for (let i = 0; i < element.length; i++) {
        let elemClientRect = element[i].getBoundingClientRect();
        let elemY = scrollY + elemClientRect.top;
        if (scrollY > elemY - windowH + showTiming) {
            element[i].classList.add('is-show');
        }
    }
}

window.addEventListener('scroll', scrollEffect);

//ハンバーガーメニュー
const menuBtn = document.querySelector('.menu-btn');
const menuBtnBar = document.querySelectorAll('.menu-btn-bar');
const gnav = document.querySelector('.gnav');
const link = document.querySelectorAll('.gnav__list');

menuBtn.addEventListener('click', () => {
    gnav.classList.toggle('active');
    menuBtnBar.forEach(function (element) {
        element.classList.toggle('active');
    });
    if(gnav.classList.contains('active')){
        bodyScrollLock.disableBodyScroll(gnav);
    }else{
        bodyScrollLock.clearAllBodyScrollLocks();
    }

    
});

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
        gnav.classList.remove('active');
        menuBtnBar.forEach(function (element) {
            element.classList.remove('active');
        });
        bodyScrollLock.clearAllBodyScrollLocks();

    });
}
console.log('ok'); //チェック用