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