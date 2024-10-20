var swiper = new Swiper('.swiper-container', {
    loop: true, // スライドをループさせる
    autoplay: {
      delay: 3000, // 自動再生の間隔を3秒に設定
      disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    },
  });