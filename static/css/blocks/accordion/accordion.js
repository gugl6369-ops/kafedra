console.log("loliki");

const accordionItems = document.querySelectorAll('.accordion_item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion_header')
    const content = item.querySelector('.accordion_close')
    const arrow = item.querySelector('.accordion_arrow');

    header.addEventListener('click', () => {
        content.classList.toggle('accordion_close--hidden')
        arrow.classList.toggle('accordion_arrow--rotate')
    })
});


