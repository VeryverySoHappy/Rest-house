$(function() {
  $('ul.tab li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('ul.tab li').removeClass('on');
    $('.tabcont').removeClass('on');
    $(this).addClass('on');
    $('javascript:void(0)' + activeTab).addClass('on');
  })
})