      $(document).ready(function() {

        $('#frases-inicio').owlCarousel({
          animateIn: 'fadeInUp',
          animateOut: 'fadeOutUp',
          autoplay:true,
          margin:0,
          loop:true,
          nav:false,
          items:1,
        });

        $('#productos').owlCarousel({
          autoplay:true,
          nav: true,
          margin:10,
          loop:false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true,
              loop:true,
            },
            767: {
              items: 2,
              loop: true,
              nav: true,
            },
            991: {
              items: 3,
              loop: true,
              nav: true,
            },
            1199: {
              items: 4,
              nav: true,
              margin: 20,
            }
          }
        });

        $('#gestion').owlCarousel({
          autoplay:true,
          loop: true,
          margin: 10,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: true
            },
            767: {
              items: 2,
              nav: true
            },
            991: {
              items: 3,
              nav: true,
              loop: true,
              margin: 20
            },
            1199: {
              items: 4,
              nav: true,
              loop: true,
              margin: 20
            }
          }
        })

        $('#sedes').owlCarousel({
          autoplay:true,
          margin:0,
          loop:true,
          nav:true,
          items:1,
        });

        $('#notas').owlCarousel({
          animateOut: 'zoomOut',
          animateIn: 'zoomIn',
          autoplay:true,
          margin:0,
          loop:true,
          nav:false,
          items:1,
        });

        $('#noticias-int').owlCarousel({
          autoplay:true,
          nav: true,
          margin:10,
          loop:false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
              loop:true,
            },
            767: {
              items: 1,
              loop: true,
              nav: false,
            },
            991: {
              items: 3,
              loop: true,
              nav: false,
            },
            1199: {
              items: 3,
              nav: false,
              margin: 20,
            }
          }
        }); 

        $('#sostenibilidad1').owlCarousel({
          autoplay:false,
          nav: true,
          dots:false,
          margin:10,
          loop:false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            767: {
              items: 1,
              loop: true,
            },
            991: {
              items: 3,
              loop: true,
            },
            1199: {
              items: 3,
              margin: 20,
            }
          }
        });

        $('#sostenibilidad2').owlCarousel({
          autoplay:false,
          nav: true,
          dots:false,
          margin:10,
          loop:false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            767: {
              items: 1,
              loop: true,
            },
            991: {
              items: 3,
              loop: true,
            },
            1199: {
              items: 3,
              margin: 20,
            }
          }
        });

        $('#sostenibilidad3').owlCarousel({
          autoplay:false,
          nav: true,
          dots:false,
          margin:10,
          loop:false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            767: {
              items: 1,
              loop: true,
            },
            991: {
              items: 3,
              loop: true,
            },
            1199: {
              items: 3,
              margin: 20,
            }
          }
        });

        $('#infraestructura1').owlCarousel({
          autoplay:false,
          nav: true,
          dots:false,
          margin:10,
          loop:true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            767: {
              items: 1,
              loop: true,
            },
            991: {
              items: 2,
              loop: true,
            },
            1199: {
              items: 3,
              margin: 20,
            }
          }
        });

        $('#infraestructura2').owlCarousel({
          autoplay:false,
          nav: true,
          dots:false,
          margin:10,
          loop:true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            767: {
              items: 1,
              loop: true,
            },
            991: {
              items: 2,
              loop: true,
            },
            1199: {
              items: 3,
              margin: 20,
            }
          }
        });

        $('#infraestructura3').owlCarousel({
          autoplay:false,
          nav: true,
          dots:false,
          margin:10,
          loop:true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            767: {
              items: 1,
              loop: true,
            },
            991: {
              items: 2,
              loop: true,
            },
            1199: {
              items: 3,
              margin: 20,
            }
          }
        });

        $('#infraestructura4').owlCarousel({
          autoplay:false,
          nav: true,
          dots:false,
          margin:10,
          loop:true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              loop: true,
            },
            767: {
              items: 1,
              loop: true,
            },
            991: {
              items: 2,
              loop: true,
            },
            1199: {
              items: 3,
              margin: 20,
            }
          }
        });

        // nosotros
        $('.cd-horizontal-timeline .timeline ol li > a').first().addClass('selected');
        $('.cd-horizontal-timeline .events-content ol li').first().addClass('selected');

      })