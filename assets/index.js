$( document ).ready(function() {
    let mobile =  (window.innerWidth <= 1200) ? true : false;
    let scrollWidth = Number(window.innerWidth) - Number(document.body.clientWidth)
    $(':root').css({
        "--scroll-width" : scrollWidth + 'px',
    })
    function onRunStyler() {
        $('select').each(function() {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $(this).styler({
                    selectSearch: true,
                });
            }
        })
    };

    onRunStyler();
    $(".datepicker").datepicker();
    $('.burger').on('click', () => {
        $('.burger').toggleClass('open');
        $('.header-navigation').slideToggle();
    })

    if(window.location.pathname === '/') {
        $('header').addClass('white')
        $('main').addClass('no-padding')
    }

    $(function() {
        const videos  = $(".video");

        videos.on("click", function(){
            let elm = $(this),
                conts   = elm.contents(),
                le      = conts.length,
                ifr     = null;

            for(let i = 0; i<le; i++){
                if(conts[i].nodeType == 8) ifr = conts[i].textContent;
            }

            elm.addClass("player").html(ifr);
            elm.off("click");
        });
    });

    $(window).on('load resize', function () {
        if(window.innerWidth <= 1200) {
            mobile = true;
        } else {
            mobile = false;
        }
    });

    if(mobile) {
        $('.header-navigation__link').each(function() {
            if($(this).next().length <= 0){
                $(this).addClass('no-arrow')
                return;
            } else {
                $(this).on('click', (e) => {
                    e.preventDefault();
                    $(this).toggleClass('open');
                    $(this).next().slideToggle(200);
                })
            }
        })
    }
const openPopup =   document.querySelectorAll('.popup__open');
    const closePopup = document.querySelectorAll("[data-role='popup-close']");
    const popup = $('.popup');

    Array.from(openPopup).forEach(function(el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            popup.fadeIn(500);
            blockScroll()
        })
    })

    Array.from(closePopup).forEach(function(el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            popup.fadeOut(400);
            blockScroll()
        })
    })
    

    if($("#tour-form").length) {
         $("input[type=tel]").inputmask("+7 (999) 999-99-99");

        $("#tour-form").validate({
            errorClass: "error fail-alert",
            validClass: "valid success-alert",
            rules: {
                name : {
                    required: true,
                    min: 2
                },
                email: {
                    required: true,
                },
                phone: {
                    required: true,
                    minlength: 11
                },
            },
            messages: {
                name : {
                    required: "Пожалуйста, введите свое имя",
                },
                email: {
                    required: "Пожалуйста, введите свое email",
                },
                phone: {
                    required: "Пожалуйста, введите свое номер",
                },
                tour: {
                    required: "Пожалуйста, выберите тур",
                }
            }
        })
    }

    if(document.querySelectorAll(".hadj__link")) {
        const changeTour = document.querySelectorAll(".hadj__link");

        Array.from(changeTour).forEach(function(el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();

            })
        })

        Array.from(changeTour).forEach(function(link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                Array.from($('#tour')).forEach((option ) => {
                    Array.from(option).forEach((el, index) => {
                        if(el.value === link.dataset.role) {
                            option[index].selected = true;
                        }
                    })
                })

                Array.from($('.jq-selectbox__dropdown li')).forEach((item) => {
                    if(item.innerHTML === link.dataset.role) {
                        $('.jq-selectbox__select-text')[0].innerHTML = item.innerHTML;
                        item.classList.add('sel')
                    } else {
                        item.classList.remove('sel')
                    }

                })
            })
        })
    }
    
});

function blockScroll() {
    document.documentElement.classList.toggle('no-scroll');
}


// Function that actually builds the swiper 
const buildSwiperSlider = sliderElm => {
    const sliderIdentifier = sliderElm.dataset.id;
    return swiper = new Swiper(sliderElm, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        navigation: {
            nextEl: `.swiper-button-next-${sliderIdentifier}`,
            prevEl: `.swiper-button-prev-${sliderIdentifier}`
        },
        pagination: {
            el: '.swiper-pagination',
          },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}

// Get all of the swipers on the page
const allSliders = document.querySelectorAll('.swiper');

// Loop over all of the fetched sliders and apply Swiper on each one.
allSliders.forEach(slider => buildSwiperSlider(slider));
