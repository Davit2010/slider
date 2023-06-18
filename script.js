let btn_prev = document.querySelector('.btn_prev'),
    btn_next = document.querySelector('.btn_next'),
    image = document.querySelector('.image'),
    All_images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];
let res = 0

btn_next.addEventListener('click', () => {
    res++
    if (res == All_images.length) {
        res = 0
    }
    image.src = All_images[res]
})

btn_prev.addEventListener('click', () => {
    res--
    if (res == -1) {
        res = All_images.length - 1
    }
    image.src = All_images[res]

})