finom = {
    init: function() {
        finom.sliderInit();
        finom.navigationMenuInit();
        finom.innerHeightResize();

        finom.addEvents();
    },

    addEvents: function() {
        var linkToAnchorArray = document.querySelectorAll('.navigation-anchor__link');
        var $burgerButton = document.querySelector('.main-navigation__button');

        $burgerButton.addEventListener('click', finom.addBurgerEvent);
        window.addEventListener('resize', finom.innerHeightResize);
        window.addEventListener('scroll', finom.windowScroll);

        if(linkToAnchorArray.length > 0) {
            for(linkToAnchor of linkToAnchorArray) {
                linkToAnchor.addEventListener('click', finom.anchorClick);
            }
        }
    },

    anchorClick: function(event) {
        event.preventDefault(); // Отменяет стандартное действие ссылки
        var targetId = event.currentTarget.hash.slice(1);
        finom.smoothScrollToAnchor(targetId); // Замените 'my-anchor' на ID вашего якоря
    },

    windowScroll: function() {
        var $navigationMenuWrapper = document.querySelector('.navigation-menu__wrapper');
        var $navigationMenu = document.querySelector('.navigation-burger-icon');
        $navigationMenuWrapper.classList.remove('open');
        $navigationMenu.classList.remove('open');
    },

    addBurgerEvent: function () {
        var $navigationMenuWrapper = document.querySelector('.navigation-menu__wrapper');
        var $navigationMenu = document.querySelector('.navigation-burger-icon');
        $navigationMenu.classList.toggle('open');
        $navigationMenuWrapper.classList.toggle('open');
    },

    navigationMenuInit: function() {
        var $navigationContainer = document.querySelector('.main-navigation');
        var $supportContainer = document.querySelector('.support');

        $navigationContainer.classList.add('loaded');
        $supportContainer.classList.add('loaded');
    },

    innerHeightResize: function() {
        var windowHeight = window.innerHeight;
        var $demoImage = document.querySelector('.demo__image');

        if(windowHeight < 660) {
            $demoImage.style.display = 'none';
            return;
        }

        $demoImage.style.display = 'block';
    },

    sliderInit: function() {
        var $personInfoSwaperContainer = document.querySelector('.person-info-swaper');
        var $paginationSwaperContainer = document.querySelector('.pagination-swaper');

        var paginationSwiper = new Swiper($paginationSwaperContainer, {
            slidesPerView: 4,
            spaceBetween: 20,
            watchSlidesProgress: true,
            freeMode: true,
        })

        new Swiper($personInfoSwaperContainer, {
            loop: true,
            spaceBetween: 100,
            effect: "fade",
            thumbs: {
                swiper: paginationSwiper,
                clicable: true
            },
        })
    },

    smoothScrollToAnchor: function(targetId) {
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 5,
                behavior: 'smooth',
            });
        }
    }
}
