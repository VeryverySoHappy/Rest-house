$(function() {
  $('ul.tab li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('ul.tab li').removeClass('on');
    $('.tabcont').removeClass('on');
    $(this).addClass('on');
    $('#' + activeTab).addClass('on');
  })
});