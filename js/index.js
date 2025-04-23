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

  // 스크롤 이벤트
  $(window).on("scroll", function () {
    let sr = $(this).scrollTop();

    if (sr > 0) {
      $(".logo_c").css({ display: "block" });
      $(".logo_w").css({ display: "none" });
      $("header").addClass("on");
    } else {
      $(".logo_c").css({ display: "none" });
      $(".logo_w").css({ display: "block" });
      $("header").removeClass("on");
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

  // 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
});
