$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.main, .header__bottom').toggleClass('opacity');
    });
});
const parent_orig = document.querySelector('.header__bottom');
const parent = document.querySelector('.header__content');
const item = document.querySelector('.header__lang-items');

function movingLag() {
    const viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width > 740) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[2]);
            item.classList.add('done');
        }
    } else {
        if (item.classList.contains('done')) {
            parent_orig.insertBefore(item, parent_orig.children[0]);
            item.classList.remove('done');
        }
    }
}

movingLag();

window.addEventListener('resize', function (event) {
    movingLag();
});
const parent_solution = document.querySelector('.solution');
const parent_choice = document.querySelector('.choice');
const solution__button = document.querySelector('.solution__button');

function movingButtonLifti() {
    const viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width > 740) {
        if (!solution__button.classList.contains('done')) {
            parent_solution.insertBefore(solution__button, parent_solution.children[1]);
            solution__button.classList.add('done');


        }
    } else {
        if (solution__button.classList.contains('done')) {
            parent_choice.insertBefore(solution__button, parent_choice.children[1].nextSibling);
            solution__button.classList.remove('done');
        }
    }
}

movingButtonLifti();

window.addEventListener('resize', function (event) {

    movingButtonLifti();

});
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 400;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];

        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.popup-close');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

//для открытия второго popup из первого по ссылке
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    if (lockPadding.length > 0) {

        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }

    document.body.style.paddingRight = lockPaddingValue;
    document.body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        document.body.style.paddingRight = '0px';
        document.body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}
