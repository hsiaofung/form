$(document).ready(function(){

  init();
  function init(){
    hashDirect();
  }

  function hashDirect(){
    var _hash = window.location.hash;
    var elm ;
    switch (_hash) {
      case "#bangles":
        elm = $("a[href='#guide-bangles']");
        break;
      case "#necklaces":
        elm = $("a[href='#guide-necklaces']");
        break;
      case "#bracelets":
        elm = $("a[href='#guide-bracelets']");
        break;
      case "#rings":
        elm = $("a[href='#guide-rings']");
        break;
      default:elm = $("a[href='#guide-rings']");
    }
    elm.trigger('click');
  }

  $(".sizeguidetable td").on('mouseenter',function(){
    if($(this).closest('.tab-pane').attr('id')=='guide-necklaces'){
      return;
    }
    var _index = $(this).index();
    var _selector = parseInt(_index)+1;
    var _row = $(this).closest('tr');
    var _root = $(this).closest('.sizeguidetable');
    _root.find('td:nth-child('+_selector+')').addClass('highlight');
    _root.find('th:nth-child('+_selector+')').addClass('highlight');
    _row.find('td').addClass('highlight');
  }).on('mouseleave',function(){
    if($(this).closest('.tab-pane').attr('id')=='guide-necklaces'){
      return;
    }
    var _index = $(this).index();
    var _selector = parseInt(_index)+1;
    var _row = $(this).closest('tr');
    var _root = $(this).closest('.sizeguidetable');
    _root.find('td:nth-child('+_selector+')').removeClass('highlight');
    _root.find('th:nth-child('+_selector+')').removeClass('highlight');
    _row.find('td').removeClass('highlight');
  })

})
