jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // headerMV以下で透過解除
  $(window).on("scroll", function () {
    const sliderHeight = $(".mv").height();
    if (sliderHeight < $(this).scrollTop()) {
      $(".js-header").addClass("p-header-color-scroll");
    } else {
      $(".js-header").removeClass("p-header-color-scroll");
    }
  });

  //js-mv__swiper
  let swipeOption = {
    loop: true,
    effect: "fade",

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  };
  new Swiper(".js-mv__swiper", swipeOption);

  // works-swiper
  const swiper = new Swiper(".js-works__swiper", {
    slidesPerView: 1,
    loop: true,

    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var topBtn = $(".page-top");
  topBtn.hide();

  //ページ内リンク
    var headerHeight = $(".header").height();//固定ヘッダーの高さを入れる
    $('[href^="#"]').click(function(){
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-headerHeight; 
      $("html, body").animate({scrollTop:position}, 200, "swing");//200はスクロールの移動スピードです
      return false;
    });


  // ボタンの表示設定
  $(window).scroll(function () {
    const mvHeight = $(".mv").height();
    if ($(this).scrollTop() > mvHeight) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  $(".drawer-icon").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".drawer-icon").toggleClass("is-active");
    $(".drawer-content").toggleClass("is-active");
    // $(".drawer-background").toggleClass("is-active");
    $("html").toggleClass("is-fixed");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });
});
