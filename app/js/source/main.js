(function(){
  'use strict';

  $(document).ready(init);

  var currentUser = 0;
  var currentRoll = 3;

  function init(){
    $('#add').click(add);
    $('.arrow').click(arrow);
    $('body').keydown(move);
    $('#add-score').click(score);
  }

  function score(event){
    var points = $('#score').val();
    $('.horizontal .vertical').text(points);
    event.preventDefault();
  }

  function move(event){
    switch(event.keyCode){
      case 38:
        currentUser--;
        paintScreen();
        break;
      case 40:
        currentUser++;
        paintScreen();
        break;
      case 37:
        currentRoll--;
        paintScreenV();
        break;
      case 39:
        currentRoll++;
        paintScreenV();
  }

  if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40){
    event.preventDefault();
  }
}

  function arrow(){
    switch(this.id){
      case 'up':
        currentUser--;
        paintScreen();
        break;
      case 'down':
        currentUser++;
        paintScreen();
        break;
      case 'left':
        currentRoll--;
        paintScreenV();
        break;
      case 'right':
        currentRoll++;
        paintScreenV();
    }
  }

  function paintScreen(){
    $('.horizontal').removeClass();
    var $trs = $('#game > tbody > tr');
    var tr = $trs[currentUser];
    $(tr).addClass('horizontal');
  }

  function paintScreenV(){
    $('.vertical').removeClass();
    var td = $('#game > tbody > tr > td:nth-child('+currentRoll+')');
    $(td).addClass('vertical');
  }

  function add(event){
    var username = $('#username').val();
    var avatar = $('#avatar').val();
    createRow(username, avatar);
    event.preventDefault();
  }

  function createRow(username, avatar){
      var $tr = $('<tr>');
      var tds = [];

      for(var i = 0; i < 16; i++){
        tds.push('<td></td>');
      }

      $tr.append(tds);
      $('#game > tbody').append($tr);

      var count = $('#game > tbody > tr').length;
      if(count === 1){
        $tr.addClass('horizontal');
      }

      var $img = $('<img>');
      $img.addClass('avatar');
      $img.attr('src', avatar);

      $tr.children('td:nth-child(1)').append($img);
      $tr.children('td:nth-child(2)').text(username);
      $tr.children('td:nth-child(3)').addClass('vertical');
  }
})();
