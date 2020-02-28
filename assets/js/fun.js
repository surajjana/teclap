$(document).ready(function(){
  $.get('https://teclap.herokuapp.com/check', function(data){
    console.log(data)

    if(data == '1'){
      $('#hack').css('display', 'none')
      $('#maindiv').css('display', 'block')
    }else{
      $('#maindiv').css('display', 'none')
      $('#hack').css('display', 'block')
    } 
  })
})