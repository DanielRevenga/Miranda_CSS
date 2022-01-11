
const runGlider = () => {

    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        SlidesToScroll: 1,
        dots: '.dots',
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });


}

export default runGlider;