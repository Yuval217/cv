// const faq = document.querySelectorAll('.faq-container .faq');


// faq.forEach((f) => {
//     f.addEventListener('click', () => {
//         document.querySelectorAll('.faq').forEach((x) => x.classList.remove('active'))
//         f.classList.toggle('active')
//     })
// })

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})