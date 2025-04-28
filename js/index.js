$(function () {
  // header 애니메이션
  $(".header_center").on("mouseenter", function () {
    $(".logo_c").css({ display: "block" });
    $(".logo_w").css({ display: "none" });

    $("header").addClass("on");
    $(".h_center_bg").stop().slideDown();
  });

  // header 애니메이션 지움
  $(".header_center").on("mouseleave", function () {
    let has = $("header").hasClass("on");

    if (has) {
      $(".logo_c").css({ display: "block" });
      $(".logo_w").css({ display: "none" });
      $("header").addClass("on");
    } else {
      $(".logo_c").css({ display: "none" });
      $(".logo_w").css({ display: "block" });
      $("header").removeClass("on");
    }

    $(".h_center_bg").stop().slideUp();
  });

  // gnb hover시 snb 나옴
  $(".gnb li").on("mouseenter", function () {
    // let el = $(this);
    $(".gnb li").find(".snb").removeClass("on");

    // setTimeout(function () {
    //   $(el).find(".snb").addClass("on");
    // }, 300);

    // setTimeout에서는 this는 이벤트 당사자가 아닌 window를 가리키게 됨, 따라서 원하는 객체에 효과가 들어가지 않음. 따라서 this를 변수에 저장해서 사용하자.

    setTimeout(() => {
      $(this).find(".snb").addClass("on");
    }, 100);

    // 화살표함수로 쓰면 this의 객체가 변하지 않음.
  });

  // gnb snb 지움
  $(".gnb li").on("mouseleave", function () {
    $(".gnb li").find(".snb").removeClass("on");
  });

  // lang
  $(".lang").on("click", function () {
    $(".lang").toggleClass("on");
    $(".lang_drop").stop().slideToggle(200);
  });

  // 스크롤 이벤트
  $(window).on("scroll", function () {
    let sr = $(this).scrollTop();

    // header 스크롤
    if (sr > 0) {
      $(".logo_c").css({ display: "block" });
      $(".logo_w").css({ display: "none" });
      $("header").addClass("on");
    } else {
      $(".logo_c").css({ display: "none" });
      $(".logo_w").css({ display: "block" });
      $("header").removeClass("on");
    }

    // con1 스크롤
    let con1 = $(".con1").offset().top;
    if (sr >= con1 - 300) {
      for (let i = 0; i < $(".con1_title p").length; i++) {
        setTimeout(function () {
          $(".con1_title p").eq(i).addClass("on");
        }, i * 200);
      }
      $(".con1_img").addClass("on");
    }

    // con2 스크롤
    let con2 = $(".con2").offset().top;
    if (sr >= con2 - 500) {
      $(".con2_title").addClass("on");
      for (let i = 0; i < $(".con2 .flow span").length; i++) {
        setTimeout(function () {
          $(".con2 .flow span").eq(i).addClass("on");
        }, i * 100);
      }
    }

    for (let i = 0; i < $(".con2_content li").length; i++) {
      if (sr >= $(".con2_content li").eq(i).offset().top - 500) {
        $(".con2_content li").eq(i).addClass("on");
      }
    }

    // con3 스크롤
    let con3 = $(".con3").offset().top;
    if (sr >= con3 - 500) {
      $(".con3_title").addClass("on");
      for (let i = 0; i < $(".con3 .flow span").length; i++) {
        setTimeout(function () {
          $(".con3 .flow span").eq(i).addClass("on");
        }, i * 100);
      }

      $(".con3_content").addClass("on");
    }

    // con4 스크롤
    let con4 = $(".con4").offset().top;

    if (sr >= con4 - 500) {
      $(".con4_title").addClass("on");
    }

    for (let i = 0; i < $(".con4 .flow span").length; i++) {
      setTimeout(function () {
        $(".con4 .flow span").eq(i).addClass("on");
      }, i * 100);
    }
  });

  // 비쥬얼 타이틀
  for (let i = 0; i < $(".big_txt p").length; i++) {
    setTimeout(function () {
      $(".big_txt p").eq(i).addClass("on");
    }, i * 300);
  }
  setTimeout(function () {
    $(".small_txt p").addClass("on");
  }, 1000);

  //   비쥬얼 fade
  let o = 0;

  $(".visual_img").eq(0).addClass("on");

  let start = setInterval(next, 5000);

  function next() {
    if (o !== $(".visual_img").length - 1) {
      o++;
    } else {
      o = 0;
    }
    $(".visual_img").removeClass("on");
    $(".visual_img").eq(o).addClass("on");
    $(".circle span").removeClass("on");
    $(".circle span").eq(o).addClass("on");
  }

  $(".next").on("click", function () {
    clearInterval(start);
    next();
    start = setInterval(next, 5000);
  });

  function prev() {
    if (o == 0) {
      o = $(".visual_img").length - 1;
    } else {
      o--;
    }

    $(".visual_img").removeClass("on");
    $(".visual_img").eq(o).addClass("on");
    $(".circle span").removeClass("on");
    $(".circle span").eq(o).addClass("on");
  }

  $(".prev").on("click", function () {
    clearInterval(start);
    prev();
    start = setInterval(next, 5000);
  });

  $(".circle span").on("click", function () {
    let i = $(this).index();

    clearInterval(start);
    $(".visual_img").removeClass("on");
    $(".visual_img").eq(i).addClass("on");
    $(".circle span").removeClass("on");
    $(".circle span").eq(i).addClass("on");
    start = setInterval(next, 5000);
  });

  // 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
});
