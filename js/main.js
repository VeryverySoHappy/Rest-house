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
var count01=0;
var count02=0;
var count03=0;
var count04=0;
var count05=1250;

var countUp01=function(){
  count01=count01+1;
  document.querySelector("#count01").innerText=count01;
};

var countUp02=function(){
  count02=count02+1;
  document.querySelector("#count02").innerText=count02;
};

var countUp03=function(){
  count03=count03+1;
  document.querySelector("#count03").innerText=count03;
};

var countUp04=function(){
  count04=count04+1;
  document.querySelector("#count04").innerText=count04;
};
var countUp05=function(){
  count05=count05+1;
  document.querySelector("#count05").innerText=count05;
};

var countDown01=function(){
  if(count01!==0){
      count01=count01-1;        
      document.querySelector("#count01").innerText=count01;
  }
};

var countDown02=function(){
  if(count02!==0){
      count02=count02-1;        
      document.querySelector("#count02").innerText=count02;
  }
};

var countDown03=function(){
  if(count03!==0){
      count03=count03-1;        
      document.querySelector("#count03").innerText=count03;
  }
};

var countDown04=function(){
  if(count04!==0){
      count04=count04-1;        
      document.querySelector("#count04").innerText=count04;
  }
};
// count end

// region start
$(document).ready(function(){
  $('.product_list li:first a').css('color','#222')
  $('.product_list li:not(:eq(0)) > .product').hide();

  $('.wrap').on({
    mouseenter:function(){
      $('.product').mousemove(function(event){
        var pageCode = event.pageX - $('.product').offset().left;
        if(pageCode>713.5){
          $('.rightBtn').css('display','block')
          $('.leftBtn').css('display','none')
        }else{
          $('.leftBtn').css('display','block')
          $('.rightBtn').css('display','none')
        }
      })

    },
    mouseleave:function(){
      $('.leftBtn').css('display','none')
      $('.rightBtn').css('display','none')
    }
  })
  var indexNum = 0;
  $('.product_list > li > a').on({
    click:function(e){
      e.preventDefault();
      indexNum=$(this).parent().index();
      $('.product').hide();
      $(this).next().show();
      $('.product_list > li > a').css('color','#222')
      $(this).css('color','#887862')
    },
    mouseenter:function(){
      $('.leftBtn').css('display','none')
      $('.rightBtn').css('display','none')
    }
  })

  $('.leftBtn').on({
    click:function(e){
      e.preventDefault();
      var temp = indexNum-1;
      if(temp<0){
        temp=5
      }
      $('.product_list > li > a').eq(temp).trigger('click');
    }
  })
  $('.rightBtn').on({
    click:function(e){
      e.preventDefault();
      var temp = indexNum+1;
      if(temp>5){
        temp=0
      }
      $('.product_list > li > a').eq(temp).trigger('click');
    }
  })
})
// region end

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