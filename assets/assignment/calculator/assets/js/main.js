$('.btn').click(function (){
    setValue($(this).text());
})

$('.symbol').click(function (){
    setSymbol($(this).text())
})

$('#clear').click(function (){
    $('#txt').text('');
})

function setSymbol(symbol) {
    $('#txt').text($('#txt').text()+symbol)
}
function setValue(value){
    $('#txt').text($('#txt').text()+value)
}