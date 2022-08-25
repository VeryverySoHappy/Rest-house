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

// date start
var picker = new Pikaday({ 
  field: document.getElementById('datepicker'),
  format: 'yyyy-MM-dd',
  toString(date, format) {
    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
});
// date end

// count start
  var count = 0;

  var countUp = function(){
    count = count + 1;
    document.querySelector('#count').innerText=count;
  };

  var countDown = function(){
    if(count>0){
      count = count-1;
      document.querySelector('#count').innerText=count;
    }
  };
// count end
