(function() {
  var stickySidebar;

  $(document).ready(function() {
    //interactions (click, on change) ========================================

    //click on sectTitle to jump to section
    $(".sectTitle").on("click", function() {
      $(".chectout_sect").removeClass("filled");

      var $openedSect = $(".chectout_sect.opened");
      $openedSect.removeClass("opened");

      var thisSect = $(this).closest(".chectout_sect");
      $(thisSect).addClass("opened");
      for (var i = 0; i < $(".chectout_sect").length; i++) {
        var $theSect = $($(".chectout_sect")[i]);
        $theSect.addClass("filled");
        if ($theSect.hasClass("opened")) {
          break;
        }
      }

      $openedSect.children(".sectContent").slideUp(300, function() {
        $("html, body").animate(
          { scrollTop: $(thisSect).offset().top - 100 },
          300
        ); //100 is manual number
      });

      $(thisSect)
        .children(".sectContent")
        .slideDown(300);
    });

    // 返回 / 下一步
    $(document).on("click", ".goSectBtn", function() {
      var $chectout_sect;
      //if( checked this section is Valid ){

      $chectout_sect = $(this).closest(".chectout_sect");
      $chectout_sect.removeClass("opened");
      $chectout_sect.addClass("filled");
      if ($chectout_sect.hasClass("chectout_pdts")) {
        $(".sidebar_forSticky .checkout_discountCode_wrap").fadeOut(
          300,
          function() {
            stickySidebar.updateSticky();
          }
        );
      }

      var goSect = $(this).attr("data-gosect");
      $(goSect).addClass("opened");

      $(goSect)
        .children(".sectContent")
        .slideDown(300);
      if ($(goSect).hasClass("chectout_pdts")) {
        $(".sidebar_forSticky .checkout_discountCode_wrap").fadeIn(
          300,
          function() {
            stickySidebar.updateSticky();
          }
        );
      }

      $chectout_sect.children(".sectContent").slideUp(300, function() {
        $("html, body").animate(
          { scrollTop: $(goSect).offset().top - 100 },
          300
        ); //100 is manual number, should check height dynmically in desktop/mobile
      });
      //100 ~= ( $( "header .nav_wrap_m" ).outerHeight() + 30)
      // minized menu in desktop is 1.5rem+1.25rem+1.875rem

      //}else{
      //$chectout_sect.removeClass("filled");
      //}
    });

    function checkBag() {
      $(".chectout_pdts .shoppingBagNum").text(
        $(".chectout_pdts .pdt_wrap").length
      );
      if ($(".chectout_pdts .pdt_wrap").length == 0) {
        $(".chectout_pdts .emptyBag_wrap").show();
        $(".chectout_pdts .pdts_wrap").hide();
      } else {
        $(".chectout_pdts .emptyBag_wrap").hide();
        $(".chectout_pdts .pdts_wrap").show();
      }
    }

    //我的購物袋
    $(".chectout_pdts .pdt_wrap .closeBtn").on("click", function() {
      $(this)
        .closest(".pdt_wrap")
        .remove();

      checkBag();
    });

    //配送選擇
    $(".deliverOption_btn").on("click", function() {
      //reset
      $(".deliverOption_btn").removeClass("active");
      $(".deliverOption_btn")
        .find(".icon")
        .each(function(index) {
          var theSrc = $(this).attr("src");
          theSrc = theSrc.replace("-active.svg", ".svg");
          $(this).attr("src", theSrc);
        });

      $(this).addClass("active");
      var $thisIcon = $(this).find(".icon");
      var thisSrc = $thisIcon.attr("src");
      thisSrc = thisSrc.replace(".svg", "-active.svg");
      $thisIcon.attr("src", thisSrc);

      $(".deliverOption_btn").each(function(index) {
        var $theContent = $($(this).attr("data-optioncontent"));
        $theContent.removeClass("active");
        if ($theContent.is(":visible")) {
          $theContent.slideUp();
        }
      });

      var $thisContent = $($(this).attr("data-optioncontent"));
      $thisContent.addClass("active");
      $thisContent.slideDown();
    });

    //配送選擇 -到分店取貨- 取貨分店 - 分店
    $("#pickup_stores").on("change", function() {
      if (this.value == 0) {
        $(".chectout_sect .pickup_wrap .store_details").slideUp();
      } else {
        $(".chectout_sect .pickup_wrap .store_details").slideDown();
      }
    });   

    //配送選擇 - 送貨服務 - 新增地址
    // $("#newAdd_btn").on("click", function() {
    //   $("#cancelSaveAdd_btn").show();
    //   $(".chectout_sect .delivery_newAddress_wrap").slideDown();
    //   $(".chectout_sect .delivery_details_wrap").slideUp();
    // });

    //配送選擇 - 送貨服務 - 取消 新增地址
    $("#cancelSaveAdd_btn").on("click", function() {
      $(".chectout_sect .delivery_newAddress_wrap").slideUp();
      $(".chectout_sect .delivery_details_wrap").slideDown();
    });

    //付款方式選擇
    $(".chectout_payment .paymentBtn").on("click", function() {
      $(".chectout_payment .paymentBtn").removeClass("active");
      $(this).addClass("active");
    });

    //init setup ========================================

    //right hand side
    stickySidebar = new StickySidebar(".sidebar_forSticky", {
      containerSelector: ".parent_forSticky",
      innerWrapperSelector: ".sidebarInner_forSticky",
      topSpacing: 150,
      //bottomSpacing: 100,
      resizeSensor: true,
      minWidth: 768
    });

    //check 我的購物袋 number
    checkBag();

    // slide down 我的購物袋 at first
    $(".opened")
      .children(".sectContent")
      .slideDown(300);

    //if logged in...
    //if ( customer already have saved address ){
    //$(".chectout_sect .delivery_details_wrap").show();
    //} else{
    $(".chectout_sect .delivery_details_wrap").show();
    //}
  });
})();
