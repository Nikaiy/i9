document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.classList.add('indicators');
    document.querySelector('.banner').appendChild(indicatorsContainer);

    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const slideCount = slides.length;

    const updateSlide = (index) => {
        slider.style.transform = `translateX(-${index * 100}%)`;
        document.querySelector('.indicator.active').classList.remove('active');
        indicators[index].classList.add('active');
    };

    const autoSlide = () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlide(currentIndex);
    };

    let slideInterval = setInterval(autoSlide, 5000);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.dataset.index);
            updateSlide(currentIndex);
            clearInterval(slideInterval);
            slideInterval = setInterval(autoSlide, 5000);
        });
    });
});
