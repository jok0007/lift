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