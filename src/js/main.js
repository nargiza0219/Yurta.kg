//  Banner mobile btn

$(".searchbtn").click(function () {
  $(".mobile-filter").css({
    display: 'block'
  })
});
$(".mobile-filter__close").click(function () {
  $(".mobile-filter").css({
    display: 'none'
  })
});


// banner filter

$('select').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');



  $styledSelect.click(function (e) {
    if ($('.select-options').is(':visible')) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));

      $list.hide();
      //console.log($this.val());   

    } else {
      e.stopPropagation();
      $('div.select-styled.active').each(function () {
        $(this).removeClass('active').next('ul.select-options').toggle();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    } //end if
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});
// choose

$("#filter-btn").click(function () {
  $("#filter-focus").css({
    background: '#da7ee2'
  })
});
$("#filter-btn2").click(function () {
  $("#filter-focus2").css({
    background: '#da7ee2'
  })
});
$("#filter-btn3").click(function () {
  $("#filter-focus3").css({
    background: '#da7ee2'
  })
});
$("#filter-btn4").click(function () {
  $("#filter-focus4").css({
    background: '#da7ee2'
  })
});
$("#filter-btn5").click(function () {
  $("#filter-focus5").css({
    background: '#da7ee2'
  })
});
$("#filter-btn6").click(function () {
  $("#filter-focus6").css({
    background: '#da7ee2'
  })
});

// reset button-1

$(".reset").click(function () {
  $("#filter-focus").css({
    background: '#ffffff'
  })
  $("#filter-focus2").css({
    background: '#ffffff'
  })
  $("#filter-focus3").css({
    background: '#ffffff'
  })
  $("#filter-focus4").css({
    background: '#ffffff'
  })
  $("#filter-focus5").css({
    background: '#ffffff'
  })
  $("#filter-focus6").css({
    background: '#ffffff'
  })
});

// vybrat'

$("#rooms-inp").click(function () {
  $("#rooms-btn").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp2").click(function () {
  $("#rooms-btn2").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp3").click(function () {
  $("#rooms-btn3").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp4").click(function () {
  $("#rooms-btn4").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp5").click(function () {
  $("#rooms-btn5").css({
    background: '#da7ee2'
  })
});
$("#rooms-inp6").click(function () {
  $("#rooms-btn6").css({
    background: '#da7ee2'
  })
});

//reset button-2

$(".reset").click(function () {
  $("#rooms-btn").css({
    background: '#ffffff'
  })
  $("#rooms-btn2").css({
    background: '#ffffff'
  })
  $("#rooms-btn3").css({
    background: '#ffffff'
  })
  $("#rooms-btn4").css({
    background: '#ffffff'
  })
  $("#rooms-btn5").css({
    background: '#ffffff'
  })
  $("#rooms-btn6").css({
    background: '#ffffff'
  })

});

// header

$(".open-burger-menu").click(function () {
  $(".open-burger-menu, .close-burger-menu").toggle(0, function () {});
  $(".mobile-menu").css({
    top: '0%',
    transitionDuration: '.4s'
  });
  $(".banner, .things, .slider, .property_types, .popular__neighborhoods, .latest-news, .subscribe, .footer, .buy-mobile").css({
    display: 'none'
  });
});
$(".close-burger-menu").click(function () {
  $(".open-burger-menu, .close-burger-menu").toggle(0, function () {});
  $(".mobile-menu").css({
    top: '-500%'
  });
  $(".banner, .things, .slider, .property_types, .popular__neighborhoods, .latest-news, .subscribe, .footer, .buy-mobile").css({
    display: 'block'
  });
});

// subscribe section

$("#bayers").click(function () {
  $("#bayersPopup").css({
    display: 'block'
  });
  $("body").css({
    overflow: 'hidden'
  });
});

$(".popup__inner__close-btn").click(function () {
  $("#bayersPopup").css({
    display: 'none'
  });
  $("body").css({
    overflow: 'auto'
  });
});

$("#agents").click(function () {
  $("#agentsPopup").css({
    display: 'block'
  });
  $("body").css({
    overflow: 'hidden'
  });
});

$(".popup__inner__close-btn").click(function () {
  $("#agentsPopup").css({
    display: 'none'
  });
  $("body").css({
    overflow: 'auto'
  });
});

$(function () {
  $(".subscribe__more-btn").click(function () {
    $(".subscribe__content").css({
      maxHeight: 'none'
    });
    $(".subscribe__less-btn").toggle(0, function () {});
    $(".subscribe__more-btn").toggle(0, function () {});
  });
});
$(function () {
  $(".subscribe__less-btn").click(function () {
    $(".subscribe__content").css({
      maxHeight: '135px'
    });
    $(".subscribe__more-btn").toggle(0, function () {});
    $(".subscribe__less-btn").toggle(0, function () {});
  });
});

// footer column 1

$(function () {
  $("#more-btn1").click(function () {
    $("#region-list1").css({
      maxHeight: 'none'
    });
    $("#region-inner1").css({
      maxHeight: 'none'
    });
    $("#more-btn1").css({
      display: 'none'
    });
    $("#close-view1").css({
      display: 'block'
    });
    $("#region-list2").css({
      maxHeight: '290px'
    });
    $("#region-inner2").css({
      maxHeight: '260px'
    });
    $("#more-btn2").css({
      display: 'block'
    });
    $("#close-view2").css({
      display: 'none'
    });
    $("#region-list3").css({
      maxHeight: '290px'
    });
    $("#region-inner3").css({
      maxHeight: '260px'
    });
    $("#more-btn3").css({
      display: 'block'
    });
    $("#close-view3").css({
      display: 'none'
    });
    $("#region-list4").css({
      maxHeight: '290px'
    });
    $("#region-inner4").css({
      maxHeight: '260px'
    });
    $("#more-btn4").css({
      display: 'block'
    });
    $("#close-view4").css({
      display: 'none'
    });
    $("#region-list5").css({
      maxHeight: '290px'
    });
    $("#region-inner5").css({
      maxHeight: '260px'
    });
    $("#more-btn5").css({
      display: 'block'
    });
    $("#close-view5").css({
      display: 'none'
    });
    $("#region-list6").css({
      maxHeight: '290px'
    });
    $("#region-inner6").css({
      maxHeight: '260px'
    });
    $("#more-btn6").css({
      display: 'block'
    });
    $("#close-view6").css({
      display: 'none'
    });
    $("#region-list7").css({
      maxHeight: '290px'
    });
    $("#region-inner7").css({
      maxHeight: '260px'
    });
    $("#more-btn7").css({
      display: 'block'
    });
    $("#close-view7").css({
      display: 'none'
    });
  });
});
$(function () {
  $("#close-view1").click(function () {
    $("#region-list1").css({
      maxHeight: '290px'
    });
    $("#region-inner1").css({
      maxHeight: '260px'
    });
    $("#more-btn1").css({
      display: 'block'
    });
    $("#close-view1").css({
      display: 'none'
    });
  });
});

//footer column 2

$(function () {
  $("#more-btn2").click(function () {
    $("#region-list2").css({
      maxHeight: 'none'
    });
    $("#region-inner2").css({
      maxHeight: 'none'
    });
    $("#more-btn2").css({
      display: 'none'
    });
    $("#close-view2").css({
      display: 'block'
    });
    $("#region-list1").css({
      maxHeight: '290px'
    });
    $("#region-inner1").css({
      maxHeight: '260px'
    });
    $("#more-btn1").css({
      display: 'block'
    });
    $("#close-view1").css({
      display: 'none'
    });
    $("#region-list3").css({
      maxHeight: '290px'
    });
    $("#region-inner3").css({
      maxHeight: '260px'
    });
    $("#more-btn3").css({
      display: 'block'
    });
    $("#close-view3").css({
      display: 'none'
    });
    $("#region-list4").css({
      maxHeight: '290px'
    });
    $("#region-inner4").css({
      maxHeight: '260px'
    });
    $("#more-btn4").css({
      display: 'block'
    });
    $("#close-view4").css({
      display: 'none'
    });
    $("#region-list5").css({
      maxHeight: '290px'
    });
    $("#region-inner5").css({
      maxHeight: '260px'
    });
    $("#more-btn5").css({
      display: 'block'
    });
    $("#close-view5").css({
      display: 'none'
    });
    $("#region-list6").css({
      maxHeight: '290px'
    });
    $("#region-inner6").css({
      maxHeight: '260px'
    });
    $("#more-btn6").css({
      display: 'block'
    });
    $("#close-view6").css({
      display: 'none'
    });
    $("#region-list7").css({
      maxHeight: '290px'
    });
    $("#region-inner7").css({
      maxHeight: '260px'
    });
    $("#more-btn7").css({
      display: 'block'
    });
    $("#close-view7").css({
      display: 'none'
    });
  });
});
$(function () {
  $("#close-view2").click(function () {
    $("#region-list2").css({
      maxHeight: '290px'
    });
    $("#region-inner2").css({
      maxHeight: '260px'
    });
    $("#more-btn2").css({
      display: 'block'
    });
    $("#close-view2").css({
      display: 'none'
    });
  });
});

//footer column 3

$(function () {
  $("#more-btn3").click(function () {
    $("#region-list3").css({
      maxHeight: 'none'
    });
    $("#region-inner3").css({
      maxHeight: 'none'
    });
    $("#more-btn3").css({
      display: 'none'
    });
    $("#close-view3").css({
      display: 'block'
    });
    $("#region-list1").css({
      maxHeight: '290px'
    });
    $("#region-inner1").css({
      maxHeight: '260px'
    });
    $("#more-btn1").css({
      display: 'block'
    });
    $("#close-view1").css({
      display: 'none'
    });
    $("#region-list2").css({
      maxHeight: '290px'
    });
    $("#region-inner2").css({
      maxHeight: '260px'
    });
    $("#more-btn2").css({
      display: 'block'
    });
    $("#close-view2").css({
      display: 'none'
    });
    $("#region-list4").css({
      maxHeight: '290px'
    });
    $("#region-inner4").css({
      maxHeight: '260px'
    });
    $("#more-btn4").css({
      display: 'block'
    });
    $("#close-view4").css({
      display: 'none'
    });
    $("#region-list5").css({
      maxHeight: '290px'
    });
    $("#region-inner5").css({
      maxHeight: '260px'
    });
    $("#more-btn5").css({
      display: 'block'
    });
    $("#close-view5").css({
      display: 'none'
    });
    $("#region-list6").css({
      maxHeight: '290px'
    });
    $("#region-inner6").css({
      maxHeight: '260px'
    });
    $("#more-btn6").css({
      display: 'block'
    });
    $("#close-view6").css({
      display: 'none'
    });
    $("#region-list7").css({
      maxHeight: '290px'
    });
    $("#region-inner7").css({
      maxHeight: '260px'
    });
    $("#more-btn7").css({
      display: 'block'
    });
    $("#close-view7").css({
      display: 'none'
    });
  });
});
$(function () {
  $("#close-view3").click(function () {
    $("#region-list3").css({
      maxHeight: '290px'
    });
    $("#region-inner3").css({
      maxHeight: '260px'
    });
    $("#more-btn3").css({
      display: 'block'
    });
    $("#close-view3").css({
      display: 'none'
    });
  });
});

//footer column 4

$(function () {
  $("#more-btn4").click(function () {
    $("#region-list4").css({
      maxHeight: 'none'
    });
    $("#region-inner4").css({
      maxHeight: 'none'
    });
    $("#more-btn4").css({
      display: 'none'
    });
    $("#close-view4").css({
      display: 'block'
    });
    $("#region-list1").css({
      maxHeight: '290px'
    });
    $("#region-inner1").css({
      maxHeight: '260px'
    });
    $("#more-btn1").css({
      display: 'block'
    });
    $("#close-view1").css({
      display: 'none'
    });
    $("#region-list2").css({
      maxHeight: '290px'
    });
    $("#region-inner2").css({
      maxHeight: '260px'
    });
    $("#more-btn2").css({
      display: 'block'
    });
    $("#close-view2").css({
      display: 'none'
    });
    $("#region-list3").css({
      maxHeight: '290px'
    });
    $("#region-inner3").css({
      maxHeight: '260px'
    });
    $("#more-btn3").css({
      display: 'block'
    });
    $("#close-view3").css({
      display: 'none'
    });
    $("#region-list5").css({
      maxHeight: '290px'
    });
    $("#region-inner5").css({
      maxHeight: '260px'
    });
    $("#more-btn5").css({
      display: 'block'
    });
    $("#close-view5").css({
      display: 'none'
    });
    $("#region-list6").css({
      maxHeight: '290px'
    });
    $("#region-inner6").css({
      maxHeight: '260px'
    });
    $("#more-btn6").css({
      display: 'block'
    });
    $("#close-view6").css({
      display: 'none'
    });
    $("#region-list7").css({
      maxHeight: '290px'
    });
    $("#region-inner7").css({
      maxHeight: '260px'
    });
    $("#more-btn7").css({
      display: 'block'
    });
    $("#close-view7").css({
      display: 'none'
    });
  });
});
$(function () {
  $("#close-view4").click(function () {
    $("#region-list4").css({
      maxHeight: '290px'
    });
    $("#region-inner4").css({
      maxHeight: '260px'
    });
    $("#more-btn4").css({
      display: 'block'
    });
    $("#close-view4").css({
      display: 'none'
    });
  });
});

//footer column 5

$(function () {
  $("#more-btn5").click(function () {
    $("#region-list5").css({
      maxHeight: 'none'
    });
    $("#region-inner5").css({
      maxHeight: 'none'
    });
    $("#more-btn5").css({
      display: 'none'
    });
    $("#close-view5").css({
      display: 'block'
    });
    $("#region-list1").css({
      maxHeight: '290px'
    });
    $("#region-inner1").css({
      maxHeight: '260px'
    });
    $("#more-btn1").css({
      display: 'block'
    });
    $("#close-view1").css({
      display: 'none'
    });
    $("#region-list2").css({
      maxHeight: '290px'
    });
    $("#region-inner2").css({
      maxHeight: '260px'
    });
    $("#more-btn2").css({
      display: 'block'
    });
    $("#close-view2").css({
      display: 'none'
    });
    $("#region-list3").css({
      maxHeight: '290px'
    });
    $("#region-inner3").css({
      maxHeight: '260px'
    });
    $("#more-btn3").css({
      display: 'block'
    });
    $("#close-view3").css({
      display: 'none'
    });
    $("#region-list4").css({
      maxHeight: '290px'
    });
    $("#region-inner4").css({
      maxHeight: '260px'
    });
    $("#more-btn4").css({
      display: 'block'
    });
    $("#close-view4").css({
      display: 'none'
    });
    $("#region-list6").css({
      maxHeight: '290px'
    });
    $("#region-inner6").css({
      maxHeight: '260px'
    });
    $("#more-btn6").css({
      display: 'block'
    });
    $("#close-view6").css({
      display: 'none'
    });
    $("#region-list7").css({
      maxHeight: '290px'
    });
    $("#region-inner7").css({
      maxHeight: '260px'
    });
    $("#more-btn7").css({
      display: 'block'
    });
    $("#close-view7").css({
      display: 'none'
    });
  });
});
$(function () {
  $("#close-view5").click(function () {
    $("#region-list5").css({
      maxHeight: '290px'
    });
    $("#region-inner5").css({
      maxHeight: '260px'
    });
    $("#more-btn5").css({
      display: 'block'
    });
    $("#close-view5").css({
      display: 'none'
    });
  });
});

//footer column 6

$(function () {
  $("#more-btn6").click(function () {
    $("#region-list6").css({
      maxHeight: 'none'
    });
    $("#region-inner6").css({
      maxHeight: 'none'
    });
    $("#more-btn6").css({
      display: 'none'
    });
    $("#close-view6").css({
      display: 'block'
    });
    $("#region-list1").css({
      maxHeight: '290px'
    });
    $("#region-inner1").css({
      maxHeight: '260px'
    });
    $("#more-btn1").css({
      display: 'block'
    });
    $("#close-view1").css({
      display: 'none'
    });
    $("#region-list2").css({
      maxHeight: '290px'
    });
    $("#region-inner2").css({
      maxHeight: '260px'
    });
    $("#more-btn2").css({
      display: 'block'
    });
    $("#close-view2").css({
      display: 'none'
    });
    $("#region-list3").css({
      maxHeight: '290px'
    });
    $("#region-inner3").css({
      maxHeight: '260px'
    });
    $("#more-btn3").css({
      display: 'block'
    });
    $("#close-view3").css({
      display: 'none'
    });
    $("#region-list4").css({
      maxHeight: '290px'
    });
    $("#region-inner4").css({
      maxHeight: '260px'
    });
    $("#more-btn4").css({
      display: 'block'
    });
    $("#close-view4").css({
      display: 'none'
    });
    $("#region-list5").css({
      maxHeight: '290px'
    });
    $("#region-inner5").css({
      maxHeight: '260px'
    });
    $("#more-btn5").css({
      display: 'block'
    });
    $("#close-view5").css({
      display: 'none'
    });
    $("#region-list7").css({
      maxHeight: '290px'
    });
    $("#region-inner7").css({
      maxHeight: '260px'
    });
    $("#more-btn7").css({
      display: 'block'
    });
    $("#close-view7").css({
      display: 'none'
    });
  });
});
$(function () {
  $("#close-view6").click(function () {
    $("#region-list6").css({
      maxHeight: '290px'
    });
    $("#region-inner6").css({
      maxHeight: '260px'
    });
    $("#more-btn6").css({
      display: 'block'
    });
    $("#close-view6").css({
      display: 'none'
    });
  });
});

//footer column 7

$(function () {
  $("#more-btn7").click(function () {
    $("#region-list7").css({
      maxHeight: 'none'
    });
    $("#region-inner7").css({
      maxHeight: 'none'
    });
    $("#more-btn7").css({
      display: 'none'
    });
    $("#close-view7").css({
      display: 'block'
    });
    $("#region-list1").css({
      maxHeight: '290px'
    });
    $("#region-inner1").css({
      maxHeight: '260px'
    });
    $("#more-btn1").css({
      display: 'block'
    });
    $("#close-view1").css({
      display: 'none'
    });
    $("#region-list2").css({
      maxHeight: '290px'
    });
    $("#region-inner2").css({
      maxHeight: '260px'
    });
    $("#more-btn2").css({
      display: 'block'
    });
    $("#close-view2").css({
      display: 'none'
    });
    $("#region-list3").css({
      maxHeight: '290px'
    });
    $("#region-inner3").css({
      maxHeight: '260px'
    });
    $("#more-btn3").css({
      display: 'block'
    });
    $("#close-view3").css({
      display: 'none'
    });
    $("#region-list4").css({
      maxHeight: '290px'
    });
    $("#region-inner4").css({
      maxHeight: '260px'
    });
    $("#more-btn4").css({
      display: 'block'
    });
    $("#close-view4").css({
      display: 'none'
    });
    $("#region-list5").css({
      maxHeight: '290px'
    });
    $("#region-inner5").css({
      maxHeight: '260px'
    });
    $("#more-btn5").css({
      display: 'block'
    });
    $("#close-view5").css({
      display: 'none'
    });
    $("#region-list6").css({
      maxHeight: '290px'
    });
    $("#region-inner6").css({
      maxHeight: '260px'
    });
    $("#more-btn6").css({
      display: 'block'
    });
    $("#close-view6").css({
      display: 'none'
    });
  });
});
$(function () {
  $("#close-view7").click(function () {
    $("#region-list7").css({
      maxHeight: '290px'
    });
    $("#region-inner7").css({
      maxHeight: '260px'
    });
    $("#more-btn7").css({
      display: 'block'
    });
    $("#close-view7").css({
      display: 'none'
    });
  });
});

//footer column 8

$(function () {
  $("#more-btn8").click(function () {
    $("#region-list8").css({
      maxHeight: 'none'
    });
    $("#region-inner8").css({
      maxHeight: 'none'
    });
    $("#more-btn8").css({
      display: 'none'
    });
    $("#close-view8").css({
      display: 'block'
    });
  });
});
$(function () {
  $("#close-view8").click(function () {
    $("#region-list8").css({
      maxHeight: '290px'
    });
    $("#region-inner8").css({
      maxHeight: '260px'
    });
    $("#more-btn8").css({
      display: 'block'
    });
    $("#close-view8").css({
      display: 'none'
    });
  });
});

//ФИЛЬТР

$('select').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');



  $styledSelect.click(function (e) {
    if ($('.select-options').is(':visible')) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));

      $list.hide();
      //console.log($this.val());   

    } else {
      e.stopPropagation();
      $('div.select-styled.active').each(function () {
        $(this).removeClass('active').next('ul.select-options').toggle();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    } //end if
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.toggle();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

































$(function () {
  $("#firstBtn").click(function () {

    $("#cardsMap").css({
      display: 'none'
    });
    $("#firstColumn").css({
      display: 'flex'
    });
    $("#thirdColumn").css({
      display: 'none'
    });

  });
});


$(function () {
  $("#secondBtn").click(function () {

    $("#cardsMap").css({
      display: 'flex'
    });
    $("#firstColumn").css({
      display: 'none'
    });
    $("#thirdColumn").css({
      display: 'none'
    });

  });
});

$(function () {
  $("#thirdBtn").click(function () {

    $("#cardsMap").css({
      display: 'none'
    });
    $("#firstColumn").css({
      display: 'none'
    });
    $("#thirdColumn").css({
      display: 'block'
    });

  });
});

// dropdown
$('select').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');



  $styledSelect.click(function (e) {
    if ($('.select-options').is(':visible')) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));

      $list.hide();
      //console.log($this.val());   

    } else {
      e.stopPropagation();
      $('div.select-styled.active').each(function () {
        $(this).removeClass('active').next('ul.select-options').toggle();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    } //end if
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

// search btn input
// $(function () {
//     $("#searchBtn").click(function () {

//         $("#searchInput").css({
//             display: 'block'
//         });
//         $("#homeTypewrapper").css({
//             display: 'none'
//         });
//         $("#moreFilter").css({
//             display: 'none'
//         });

//     });
// });


// home type svg

$(function () {
  $("#homeType").click(function () {

    $("#moreFilter").css({
      display: 'none'
    });
    $("#homeTypewrapper").toggle(function () {});

    $("#searchInput").css({
      display: 'none'
    });

  });
});

// more filter
$(function () {
  $("#moreBtn").click(function () {

    $("#moreFilter").toggle(function () {});
    $("#homeTypewrapper").css({
      display: 'none'
    });

    $("#searchInput").css({
      display: 'none'
    });

  });
});


// search close

$(".search-filter__search-btn").click(function () {
  $(".search-filter__search-input-wrapper").toggle(0, function () {

  });
});


// Get the modal
var modal = document.getElementById("searchInput");

// Get the button that opens the modal
var btn = document.getElementById("searchBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("search-filter__input-close")[0];

// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// more  btn reset

// var modal = document.getElementById("moreFilter");


// var btn = document.getElementById("moreBtn");


// var span = document.getElementsByClassName("search-filter__reset-btn")[0];

// span.onclick = function () {
//     modal.style.display = "none";
// }

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }



// hometype reset

$("#type-inp").on("change",
  function () {
    $("#type-btn").css({
      border: "1px solid #533b86"

    })
  });


$("#type-inp2").on("change",
  function () {
    $("#type-btn2").css({
      border: "1px solid #533b86"
    })
    
  });

$("#type-inp3").on("change",
  function () {
    $("#type-btn3").css({
      border: "1px solid #533b86"
    })
    
  });
$("#type-inp4").on("change",
  function () {
    $("#type-btn4").css({
      border: "1px solid #533b86"
    })
    
  });
$("#type-inp5").on("change",
function () {
  $("#type-btn5").css({
    border: "1px solid #533b86"
  })
  
});

$("#type-inp6").on("change",
function () {
  $("#type-btn6").css({
   border: "1px solid #533b86"
  })
  if ($(this).is(":unchecked")) {
    $("#type-btn,#type-btn2,#type-btn3,#type-btn4,#type-btn5").css("background", "#ffffff");

  }
});



// $(".search-filter__reset-btn").click(function () {
//   $("#bedroom-btn6").css({
//     background: '#ffffff'
//   })
//   $("#bedroom-btn7").css({
//     background: '#ffffff'
//   })
//   $("#bedroom-btn8").css({
//     background: '#ffffff'
//   })
//   $("#bedroom-btn9").css({
//     background: '#ffffff'
//   })
//   $("#bedroom-btn10").css({
//     background: '#ffffff'
//   })


// });





// reset bedrooms 

$("#bedroom-inp").on("change",
  function () {
    $("#bedroom-btn6").css({
      background: '#da7ee2'

    })

    if ($(this).is(":checked")) {
      $("#bedroom-btn7,#bedroom-btn8,#bedroom-btn9,#bedroom-btn10").css("background", "#ffffff");


    }
  });


$("#bedroom-inp2").on("change",
  function () {
    $("#bedroom-btn7").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#bedroom-btn6,#bedroom-btn8,#bedroom-btn9,#bedroom-btn10").css("background", "#ffffff");

    }
  });

$("#bedroom-inp3").on("change",
  function () {
    $("#bedroom-btn8").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#bedroom-btn7,#bedroom-btn6,#bedroom-btn9,#bedroom-btn10").css("background", "#ffffff");


    }
  });
$("#bedroom-inp4").on("change",
  function () {
    $("#bedroom-btn9").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#bedroom-btn7,#bedroom-btn8,#bedroom-btn6,#bedroom-btn10").css("background", "#ffffff");


    }
  });
$("#bedroom-inp5").on("change",
  function () {
    $("#bedroom-btn10").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#bedroom-btn7,#bedroom-btn8,#bedroom-btn9,#bedroom-btn6").css("background", "#ffffff");


    }
  });



$(".search-filter__reset-btn").click(function () {
  $("#bedroom-btn6").css({
    background: '#ffffff'
  })
  $("#bedroom-btn7").css({
    background: '#ffffff'
  })
  $("#bedroom-btn8").css({
    background: '#ffffff'
  })
  $("#bedroom-btn9").css({
    background: '#ffffff'
  })
  $("#bedroom-btn10").css({
    background: '#ffffff'
  })


});




// reset bathrooms 

$("#rooms-inp").on("change",
  function () {
    $("#rooms-btn").css({
      background: '#da7ee2'

    })

    if ($(this).is(":checked")) {
      $("#rooms-btn2,#rooms-btn3,#rooms-btn4,#rooms-btn5").css("background", "#ffffff");


    }
  });


$("#rooms-inp2").on("change",
  function () {
    $("#rooms-btn2").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#rooms-btn,#rooms-btn3,#rooms-btn4,#rooms-btn5").css("background", "#ffffff");

    }
  });

$("#rooms-inp3").on("change",
  function () {
    $("#rooms-btn3").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#rooms-btn,#rooms-btn2,#rooms-btn4,#rooms-btn5").css("background", "#ffffff");


    }
  });
$("#rooms-inp4").on("change",
  function () {
    $("#rooms-btn4").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#rooms-btn,#rooms-btn2,#rooms-btn3,#rooms-btn5").css("background", "#ffffff");


    }
  });
$("#rooms-inp5").on("change",
  function () {
    $("#rooms-btn5").css({
      background: '#da7ee2'
    })
    if ($(this).is(":checked")) {
      $("#rooms-btn,#rooms-btn2,#rooms-btn3,#rooms-btn4").css("background", "#ffffff");


    }
  });



$(".search-filter__reset-btn").click(function () {
  $("#rooms-btn").css({
    background: '#ffffff'
  })
  $("#rooms-btn2").css({
    background: '#ffffff'
  })
  $("#rooms-btn3").css({
    background: '#ffffff'
  })
  $("#rooms-btn4").css({
    background: '#ffffff'
  })
  $("#rooms-btn4").css({
    background: '#ffffff'
  })


});
// mobile filter 

$(function () {
  $("#mobfilterBtn").click(function () {

    $("#mobfilterWrapper").toggle(function () {});

    // $("#homeTypewrapper").css({
    //     display: 'none'
    // });

    // $("#searchInput").css({
    //     display: 'none'
    // });

  });
});