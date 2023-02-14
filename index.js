const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();

    });

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });
});

// card sliders

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((items, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollleft += containerWidth - 200;

        preBtns[i].addEventListener('click', () => {
            item.scrollleft -= containerWidth + 200;
        })

    });
});