$(document).ready(function() {
    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        
        controls: false,
        responsive: {
            // 640: {
            //     mouseDrag: true,
            //     edgePadding: 200,
            //     gutter: 200,
            //     items: 1
            // },
            320: {
                mouseDrag: true,
                nav: true,
            },
            768: {
                nav: false,
                mouseDrag: false
                
            }
          }
        
        
        // rewind: true

        // responsive: {
        //   640: {
        //     edgePadding: 20,
        //     gutter: 20,
        //     items: 2
        //   },
        //   700: {
        //     gutter: 30
        //   },
        //   900: {
        //     items: 3
        //   }
    });


    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each( function(i){
    //     $(this)
    //     .on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     });
    // })
    // $('.catalog-item__back').each( function(i){
    //     $(this)
    //     .on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     });
    // })
    function toggleSlide(item) {
        $(item).each( function(i){
                $(this)
                .on('click', function(e) {
                    e.preventDefault();
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
                });
            });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    
    //Modal
   
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    //Valide form
    // jQuery.validator.setDefaults({
    //     debug: true,
    //     success: "valid"
    //   });

    // $('#consultation-form').validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2,
    //             maxlength: 8
    //         },
    //         phone: {
    //             required: true,
    //             minlength: 10,
    //             maxlength: 12
    //         },          
    //         email: {
    //             required: true,
    //             email: true
    //       }
    //     },
    //     messages: {
    //         name: {
    //             required: "Пожалуйста, введите свое имя",
    //             minlength: jQuery.validator.format("Введите не менее {0} символов!"),
    //             maxlength: jQuery.validator.format("Введите не более {0} символов!")
    //         },
    //         phone: {
    //             required: "Пожалуйста, введите свой номер телефона",
    //             minlength: jQuery.validator.format("Введите не менее {0} символов!"),
    //             maxlength: jQuery.validator.format("Введите не более {0} символов!")
    //         },
    //         email: {
    //           required: "Пожалуйста, введите свою почту",
    //           email: "Ваша почта должна быть в формате name@domain.com"
    //         }
    //     }
    // });


    // $('#consultation form').validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2,
    //             maxlength: 8
    //         },
    //         phone: {
    //             required: true,
    //             minlength: 10,
    //             maxlength: 12
    //         },          
    //         email: {
    //             required: true,
    //             email: true
    //       }
    //     },
    //     messages: {
    //         name: {
    //             required: "Пожалуйста, введите свое имя",
    //             minlength: jQuery.validator.format("Введите не менее {0} символов!"),
    //             maxlength: jQuery.validator.format("Введите не более {0} символов!")
    //         },
    //         phone: {
    //             required: "Пожалуйста, введите свой номер телефона",
    //             minlength: jQuery.validator.format("Введите не менее {0} символов!"),
    //             maxlength: jQuery.validator.format("Введите не более {0} символов!")
    //         },
    //         email: {
    //           required: "Пожалуйста, введите свою почту",
    //           email: "Ваша почта должна быть в формате name@domain.com"
    //         }
    //       }
    // });
    // $('#order form').validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2,
    //             maxlength: 8
    //         },
    //         phone: {
    //             required: true,
    //             minlength: 10,
    //             maxlength: 12
    //         },          
    //         email: {
    //             required: true,
    //             email: true
    //       }
    //     },
    //     messages: {
    //         name: {
    //             required: "Пожалуйста, введите свое имя",
    //             minlength: jQuery.validator.format("Введите не менее {0} символов!"),
    //             maxlength: jQuery.validator.format("Введите не более {0} символов!")
    //         },
    //         phone: {
    //             required: "Пожалуйста, введите свой номер телефона",
    //             minlength: jQuery.validator.format("Введите не менее {0} символов!"),
    //             maxlength: jQuery.validator.format("Введите не более {0} символов!")
    //         },
    //         email: {
    //           required: "Пожалуйста, введите свою почту",
    //           email: "Ваша почта должна быть в формате name@domain.com"
    //         }
    //     }
    // });
    function valideForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 8
                },
                phone: {
                    required: true,
                },          
                email: {
                    required: true,
                    email: true
              }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!"),
                    maxlength: jQuery.validator.format("Введите не более {0} символов!")
                },
                phone: {
                    required: "Пожалуйста, введите свой номер телефона",
                },
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Ваша почта должна быть в формате name@domain.com"
                }
              }
        });
    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');
    // Mask for phone

 
    $('input[name=phone]').mask("+38 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find('input').val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');


            $('form').trigger('reset');
        });
        return false;
    });
    
    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() >1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    
    new WOW().init();

});
