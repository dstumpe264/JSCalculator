//
$(document).ready(function() {
  $('#display').text('');
  $('td').css('cursor', 'pointer');

})

var result = "",
    prev = "",
    curr = "",
    op = "",
    toggle = false;

$('.number').click(function(e){

var number = $(this).attr('id');
if (toggle) {
  $('#display').text('');
}
toggle = false;
switch (number) {
  case '1':
    $('#display').text($('#display').text() + '1');
    break;
  case '2':
    $('#display').text($('#display').text() + '2');
    break;
  case '3':
    $('#display').text($('#display').text() + '3');
    break;
  case '4':
    $('#display').text($('#display').text() + '4');
    break;
  case '5':
    $('#display').text($('#display').text() + '5');
    break;
  case '6':
    $('#display').text($('#display').text() + '6');
    break;
  case '7':
    $('#display').text($('#display').text() + '7');
    break;
  case '8':
    $('#display').text($('#display').text() + '8');
    break;
  case '9':
    $('#display').text($('#display').text() + '9');
    break;
  case '0':
    $('#display').text($('#display').text() + '0');
    break;
  case 'decimal':
    $('#display').text($('#display').text() + '.');
    break;
  default:

}
});

$('.operator').on('click',function(e){
  prev = curr;
  curr = parseFloat($('#display').text())

  switch ($(this).text()) {
    case 'C':
      $('#display').text('');
      break;
  }
  if ($(this).text() !== '=' && $(this).text() !== 'C') {
    op = $(this).text();
    $('#display').text('');
  }
  if ($(this).text() === '=') {
    switch (op) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case 'X':
        result = prev * curr;
        break;
      case '/':
      if (curr === 0) {
        result = 'You broke it';
        break;
      }
        result = prev / curr;
        break;
      case 'percent':
        prev /= 100;
        result = prev * curr;
        break;
      }
      $('#display').text(result);
      result = 0;
      toggle = true;
  }
});
