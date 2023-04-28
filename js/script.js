/*slick*/
/*$('.slide').slick({
  centerMode: true,
  centerPadding: '25%',
  variableWidth: true,
})*/


$('.slide').slick({
  arrows: true,/*矢印の表示*/
  dots: true,/*ドットの表示*/
  centerMode: true,/*中央に画像表示*/
  slidesToShow: 3,/*表示する画像の数（奇数指定）*/
  centerPadding: '25%',/*見切れる画像の表示される範囲の幅*/
  variableWidth: true,/*幅の違う画像を揃える*/
  responsive: [{/*ここからはブレイクポイント事のレスポンシブの設定768px以下で変更*/
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 3
      }
    },
    {/*480px以下で変更*/
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '25%',
        slidesToShow: 1
      }
    }
  ]
});
