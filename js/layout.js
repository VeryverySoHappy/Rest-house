$(document).ready(function(){
  $('.serchBtn').on('click', function(e){
    e.preventDefault();
    $('body').append('<div id="shadow"></div>')
    // 화면을 클릭하면 body태그에 <div id="shadow"></div>가 추가됌
    $('#shadow').css({
      width:'100%',
      height:"100%",
      position:'fixed',
      left:'0',
      top:'0',
      background:'url(pop/modal-bg.png)',
      // 사선무늬가 화면에 꼭참
      opacity:'50%'
    })
    $('#shadow').on('click',function(e){
      // 버튼 뿐만 아니라 shadow를 클릭햇을 때도 닫히게 하는 함수
      // shadow가 덮고 있눈 상태라서 shadow안에서 작업을 해야됌
      e.preventDefault();
      $('#closeBtn').trigger('click')
      // 버튼을 클릭했을 때 이 동작이  실행되도록 할 것
    })
    $('#serchpop').css({
      position:'fixed',
      top:'150px',
      left:'50%',
      marginLeft:'-20px'
    })
    $('#serchpop').show();

  })
  $('#closeBtn').on('click',function(e){
    e.preventDefault();
    $('#serchpop').hide();
    $('#shadow').remove()
  })
})