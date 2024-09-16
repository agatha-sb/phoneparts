

// ************************************************* //
// * ++++++++ 01. Header sticky & navbar +++++++++ * //
// ************************************************* //

$(window).on('scroll', function() {
  if($(this).scrollTop() > 250 ) {
    $(".asb19__header").addClass("fixed__header");
    $(".header-top").slideUp();
  } else {
    $(".asb19__header").removeClass("fixed__header");
    $(".header-top").slideDown();
  }
});

// ************************************************* //
// * ++++++++      02. Fancybox          +++++++++ * //
// ************************************************* //
Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});

$(document).ready(function(){
  if ($(window).width() > 991) {
    $(".asb19__header .nav-link.dropdown-toggle").removeAttr("data-bs-toggle");
  }
})


$(document).ready(function() {
  $('.asb19__category--item.has-children .caret').on('click', function() {
      $('.asb19__category--sub-1').not($(this).siblings('.asb19__category--sub-1')).slideUp();
      $(this).siblings('.asb19__category--sub-1').slideToggle();
      $('.caret').not(this).removeClass('show');
      $(this).toggleClass('show');
  });
});


var heroSwiper = new Swiper(".asb19__hero--swiper", {
  autoPlay: false,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-heroSW",
    prevEl: ".swiper-button-prev-heroSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    }
  }
});
var categorySwiper = new Swiper(".asb19__category--swiper", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-agentsSW",
    prevEl: ".swiper-button-prev-agentsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    }
  }
});
var productSwiper = new Swiper(".asb19__product--swiper", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-productSW",
    prevEl: ".swiper-button-prev-productSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    }
  }
});
var bestsellerSwiper1 = new Swiper(".asb19__bestseller--swiper1", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-bestsellerSW1",
    prevEl: ".swiper-button-prev-bestsellerSW1",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    }
  }
});
var bestsellerSwiper2 = new Swiper(".asb19__bestseller--swiper2", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-bestsellerSW2",
    prevEl: ".swiper-button-prev-bestsellerSW2",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    }
  }
});
var bestsellerSwiper3 = new Swiper(".asb19__bestseller--swiper3", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-bestsellerSW3",
    prevEl: ".swiper-button-prev-bestsellerSW3",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    }
  }
});
var bestsellerSwiper4 = new Swiper(".asb19__bestseller--swiper4", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-bestsellerSW4",
    prevEl: ".swiper-button-prev-bestsellerSW4",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    }
  }
});
var relatedSwiper = new Swiper(".asb19__related--swiper", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-relatedSW",
    prevEl: ".swiper-button-prev-relatedSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }

  }
});
var promotionSwiper = new Swiper(".asb19__promotion--swiper", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-promotionSW",
    prevEl: ".swiper-button-prev-promotionSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 5
    }
  }
});
var blogSwiper = new Swiper(".asb19__blog--swiper", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-blogSW",
    prevEl: ".swiper-button-prev-blogSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});
var testimonialsSwiper = new Swiper(".asb19__testimonials--swiper", {
  autoPlay: false,
  spaceBetween: 15,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next-testimonialsSW",
    prevEl: ".swiper-button-prev-testimonialsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});

$('.popup-youtube').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function (url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      },
      vimeo: {
        index: 'vimeo.com/',
        id: function (url) {
          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});
