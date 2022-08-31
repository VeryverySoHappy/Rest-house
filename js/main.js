// tab start
$(function() {
  $('ul.tab li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('ul.tab li').removeClass('on');
    $('.tabcont').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');
  })
});
// tab end

// count start
  var count = 0;

  var countUp= function(){
    count = count + 1;
    // document.querySelector('#count_04').innerText=count;
    document.querySelector('.count').children[i].innerText=count
  };

  var countDown = function(){
    if(count>0){
      count = count-1;
      document.querySelector('#count').innerText=count;
    }
  };
// count end

// sale start
function remaindTime() {
  var now = new Date();
  var open = new Date(now.getFullYear(),now.getMonth(),now.getDate(),24,00,00);
  var end = new Date(now.getFullYear(),now.getMonth(),now.getDate(),23,59,59);

  var nowtime = now.getTime();
  var opentime = open.getTime();
  var endtime = end.getTime();

 if(nowtime<opentime){
   $(".time").fadeIn();

   sec =parseInt(opentime - nowtime) / 1000;
   day  = parseInt(sec/60/60/24);
   sec = (sec - (day * 60 * 60 * 24));
   hour = parseInt(sec/60/60);
   sec = (sec - (hour*60*60));
   min = parseInt(sec/60);
   sec = parseInt(sec-(min*60));
   if(hour<10){hour="0"+hour;}
   if(min<10){min="0"+min;}
   if(sec<10){sec="0"+sec;}
    $(".hours").html(hour);
    $(".minutes").html(min);
    $(".seconds").html(sec);
 } else if(nowtime>endtime){
  $(".time").fadeOut();
 }else {
  $(".time").fadeIn();
   sec =parseInt(endtime - nowtime) / 1000;
   day  = parseInt(sec/60/60/24);
   sec = (sec - (day * 60 * 60 * 24));
   hour = parseInt(sec/60/60);
   sec = (sec - (hour*60*60));
   min = parseInt(sec/60);
   sec = parseInt(sec-(min*60));
   if(hour<10){hour="0"+hour;}
   if(min<10){min="0"+min;}
   if(sec<10){sec="0"+sec;}
    $(".hours").html(hour);
    $(".minutes").html(min);
    $(".seconds").html(sec);
 }
}
setInterval(remaindTime,1000);
// sale end

//popup start
$(document).ready(function(){
  $('.popupBtn').on('click', function(e){
    e.preventDefault();
    $('body').append('<div id="shadow"></div>')
    $('#shadow').css({
      width:'100%',
      height:'100%',
      position:'fixed',
      top:'0',
      left:'0',
      background: 'rgba(0, 0, 0, 0.342)'
    })
    $('#shadow').on('click', function(e){
      e.preventDefault();
      $('#closeBtn').trigger('click')
    })
    $('#layerPop').css({
      position:'fixed',
      top:'50%',
      left:'50%',
      transform: 'translate(-50%, -50%)',
    })
    $('#layerPop').show();
  })
  $('#closeBtn').on('click', function(e){
    e.preventDefault();
    $('#layerPop').hide();
    $('#shadow').remove();
  })
})
//popup end