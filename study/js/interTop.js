;(function($, win, doc) {
  function bigBannerSlider(speed) {
    var $wrapper = $('.themeBigBanners');
    var bigBannerList = $wrapper.find('.themeBigBannerList');
    var themeTab = $wrapper.find('.themeTab');
    var tabChildren = $wrapper.find('.themeTabChildren');
    var tabChildWrap = tabChildren.find('.tabChildWrap');
    var tabCounter = $wrapper.find('.tabChildCounter');
    var tabCurrentNum = tabCounter.find('.currentNum');
    var tabTotalNum = tabCounter.find('.totalNum');

    var bannerEl = bigBannerList.find('li');
    var tabEl = tabChildren.find('a');
    var tabsEl = themeTab.find('a');

    var controller = $wrapper.find('.themeBigBannerController a');
    var prevController = $wrapper.find('.themeBigBannerController a.prev');

    if (bannerEl.length !== tabEl.length) {
      return;
    }

    $.fn.bannerChange = function(no) {
      var $this = $(this);
      var tabNo = no === undefined ? $this.data('bannerIdx') : no;

      bannerEl
        .eq(tabNo)
        .addClass('current')
        .siblings()
        .removeClass('current');

      $this
        .parent()
        .addClass('current')
        .siblings()
        .removeClass('current')
        .closest('.tabChildWrap')
        .addClass('current')
        .siblings()
        .removeClass('current');

      var isSingleChild = $this.closest('.tabChildWrap').find('li').length === 1;

      if (isSingleChild) {
        $this
          .closest('.tabChildWrap')
          .addClass('current')
          .siblings()
          .removeClass('current');
      }
    };

    var countEvent = function() {
      var $this = tabChildren.find('ul').find('> .current');
      var tabTotal = $this.find('ol').find('> li').length;
      var tabCurrent = $this.find('ol').find('> li.current').index();

      tabCurrentNum.text(tabCurrent + 1);
      tabTotalNum.text(tabTotal);
    };

    var themeTabChange = function() {
      var tabNo = tabChildren.find('ul').find('> .current').index();

      themeTab
        .find('li')
        .eq(tabNo)
        .addClass('current')
        .siblings()
        .removeClass('current');
    };

    var changeEvent = function() {
      var $this = $(this);

      $this.bannerChange();
      themeTabChange();
      countEvent();
    };

    var changeTab = function() {
      var $this = $(this);

      if ($this.parent().hasClass('current')) {
        return;
      }

      var tabNo = $this.parent().index();
      var changeEl = tabChildWrap.eq(tabNo).find('.tabChild').eq(0).find('a');

      changeEl.bannerChange();
      themeTabChange();
      countEvent();
    };

    var controlEvent = function(e) {
      e.preventDefault();

      var $button = $(this);
      var direction = $button.attr('class');

      var currentNo = bigBannerList.find('.current').index();
      var changeNo;

      if (direction === 'next') {
        changeNo = currentNo === bannerEl.length - 1 ? 0 : currentNo + 1;
      } else {
        changeNo = currentNo === 0 ? bannerEl.length - 1 : currentNo - 1;
      }

      var targetTab = tabChildren.find('a[data-banner-idx="'+ changeNo +'"]');

      targetTab.bannerChange();
      themeTabChange();
      countEvent();
    };

    var intervalEvent = function() {
      $('.themeBigBannerController .next').trigger('click');
    };

    var interval = setInterval(intervalEvent, speed);

    $wrapper.on({
      'mouseenter': function() {
        clearInterval(interval);
        interval = 0;
      },
      'mouseleave': function() {
        if (!interval) {
          interval = setInterval(intervalEvent, speed);
        }
      }
    });

    tabEl.on('mouseenter focus', changeEvent);
    tabsEl.on('mouseenter focus', changeTab);
    controller.on('click', controlEvent);
    countEvent();
  }
  bigBannerSlider(4000);
})(jQuery, window, document)