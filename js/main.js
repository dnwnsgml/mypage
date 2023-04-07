// 메뉴 네비게이션 기능
$(function () {
  var menu = $(".nav > li");
  var contents = $("#wrap > div");
  var logo = $(".logo");

  $(".nav > li").click(function (event) {
    event.preventDefault();

    var tg = $(this);
    var i = tg.index();

    var section = $("#wrap > div").eq(i);
    var tt = section.offset().top;

    $("html, body").stop().animate({ scrollTop: tt });
  });

  //메뉴에 addclass를 적용
  // $(window).scroll(function(){
  //     var sct = $(window).scrollTop();

  //     $('#wrap > div').each(function(){
  //         var tg = $(this);
  //         var i = tg.index();
  //         if(tg.offset().top <= sct){
  //             $('.nav > li').removeClass('on');
  //             $('.nav > li').eq(i).addClass('on');
  //     }
  // });
  // $(window).scroll(function(){
  // var sct = $(window).scrollTop();

  // contents.each(function(){
  //     var tg = $(this);
  //     var i = tg.index();
  //     if(tg.offset().top <= sct){
  //         menu.removeClass('on');
  //         menu.eq(i).addClass('on');
  //     }
  // });
});

//스킬 리스트
$(document).ready(function () {

})

// 퀵메뉴 기능
$(function () {
  $(window).scroll(function () {
    var windowTop = $(window).scrollTop() + 300;
    $("#q_mn")
      .stop()
      .animate({ top: windowTop + "px" }, 500);
    //$("#q_mn").stop().animate({속성:"속성값", 속성:"속성값" },1000);
  });
});
