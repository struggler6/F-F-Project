var label = $('.DMC label');
var AElementHome = $(".HomeA");
var HomeImg = $(".UnboldedHome");
var HomeImgBolded = $(".BoldedHome");
var AElementSearch = $(".SearchA");
var SearchImg = $(".UnboldedSearch");
var SearchImgBolded = $(".BoldedSearch");
var ArrowFirst = $('.LeftArrow');
var ArrowSecond = $('.RightArrow');
var changeB = $(".DMC button");
var SettingsImg = $('.settingsImg');
$(ArrowFirst).click(function () {
    history.back();
});
$(ArrowSecond).click(function () {
    history.forward();
});
AElementHome.click(function () {
    HomeImg.toggle();
    HomeImgBolded.toggle();
});
AElementSearch.click(function () {
    SearchImg.toggle();
    SearchImgBolded.toggle();
});
$(".HomeAL").click(function () {
    $("UnboldedHomel").toggle();
    $("BoldedHomel").toggle();
});
AElementSearch.click(function () {
    SearchImg.toggle();
    SearchImgBolded.toggle();
});
$('.changeLanguage').click(function () {
    $('.ChangeLanguageContainer').fadeToggle();
});
$(label).click(function () {
    $('body').toggleClass('dark-mode');
});
$('.BurgerMenu').click(function () {
    $('.BurgerMenuContainer').fadeToggle();
});
$('.l-c-close').click(function () {
    $('.BurgerMenuContainer').fadeToggle();
});
$('.btn-close').click(function () {
    $("footer").remove();
});
$('.settingsImgL').click(function () {
    $('.SettingsImgL').toggleClass("rotate");
});

$('.settingsImgL').click(function () {
    $('.mini-header').fadeToggle();
    $('.mini-header-cont').toggleClass('mini-header-contD');
});
if ($("BurgerMenuContainer").css('display', 'none')) {
    $('.mini-header-cont').css('display', 'none') && $('.mini-header').css('display', 'none');
}
if ($("BurgerMenuContainer").css('display', 'block')) {
    $('.mini-header-cont').css('display', 'flex');
}
$(".CONTAINER section").hover(function () {
    $(this).find('.cont-play').toggleClass('cont-play-anime');
});
$(".MAINCONTAINER section").hover(function () {
    $(this).find('.cont-play').toggleClass('cont-play-anime');
});
$('.settingsImg').click(function () {
    $('.BurgerMenuContainer').fadeToggle();
});
function settingsclick(){
    $('.mini-header').fadeToggle()
}
$(".BurgerMenu").click(()=>{
    $('.leftBurgerMenu').addClass('burgeranimation')
})
$(".closeArrow").click(()=>{
    $('.leftBurgerMenu').removeClass('burgeranimation')
})
$(".arrows :first-child").click(()=>{
    history.back()
})
$(".arrows :last-child").click(()=>{
    history.forward()
})
$(".LArrows :first-child").click(()=>{
    history.back()
})
$(".LArrows :last-child").click(()=>{
    history.forward()
})  
 $('.cont-play img').click(function(e) {
    e.stopPropagation();
    $('.hop-on-container').show(); 
 })
$(".logS").click(()=>{
    window.open('./login.html', '_self'); 
})
$('.hop-on-container').hide(); 
$('p').click(()=>{
    $('.hop-on-container').hide()
})
 $('.cont-play').click(function(e) {
    e.stopPropagation();
    $('.hop-on-container').show(); 
    $(".hop-on-container section").addClass('hop-on-class')
  });

  $('.name').click(function() {
    window.open('./musicplayer.html', '_self')
  });
  $('.description').click(function() {
    window.open('./musicplayer.html', '_self')
  });
  $('.MAINCONTAINER section img:not(.playI)').click(function() {
    window.open('./musicplayer.html', '_self')
  });

  $(".burgerimg-r").click(()=>{
    $('.rightBurgerMenu').addClass('burgeranimation-2')
})
$(".xxxx").click(()=>{
    $('.rightBurgerMenu').removeClass('burgeranimation-2')
})
$(".searchLnk").click(()=>{window.open('./search.html', '_self')})