document.addEventListener('DOMContentLoaded', () => {
    const sliderButton = document.querySelector('.butn2');
    const clothsContainer = document.querySelector('.cloths');
    let scrollAmount = 0;

    sliderButton.addEventListener('click', () => {
        const scrollStep = 259; // Width of one item + margin
        const maxScroll = clothsContainer.scrollWidth - clothsContainer.clientWidth;

        if (scrollAmount < maxScroll) {
            scrollAmount += scrollStep;
        } else {
            scrollAmount = 0;
        }

        clothsContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });
});
