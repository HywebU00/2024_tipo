// 自行加入的JS請寫在這裡
$(function () {
  // 首頁輪播
  $('.mpSlider').slick({
    mobileFirst: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: '.mpBanner .outerBox .controlBox',
    customPaging: function (slider, i) {
      var title = $(slider.$slides[i]).find('img').attr('alt').trim();
      return $('<button type="button" aria-label="' + title + '"/>').text(title);
    },
  });

  // 控制自動播放的變數
  let isPlaying = true;

  // 更新輪播狀態提示
  function updateCarouselStatus(currentSlide, totalSlides) {
    $('#carousel-status').text(`目前顯示第 ${currentSlide} 張投影片，共 ${totalSlides} 張`);
  }

  // 處理暫停/播放按鈕點擊
  $('#mpSlider-toggle-autoplay').click(function () {
    if (isPlaying) {
      // 暫停播放
      $('.mpSlider').slick('slickPause');
      $(this).text('開始播放').attr('aria-label', '開始自動播放輪播').attr('aria-pressed', 'true').addClass('slickPause').removeClass('slickPlay');
    } else {
      // 開始播放
      $('.mpSlider').slick('slickPlay');
      $(this).text('暫停播放').attr('aria-label', '暫停自動播放輪播').attr('aria-pressed', 'false').addClass('slickPlay').removeClass('slickPause');
    }
    isPlaying = !isPlaying;
  });

  // 監聽輪播變化
  $('.mpSlider').on('afterChange', function (event, slick, currentSlide) {
    updateCarouselStatus(currentSlide + 1, slick.slideCount);
  });

  // 初始化狀態提示
  updateCarouselStatus(1, $('.mpSlider').slick('getSlick').slideCount);

  // 鍵盤控制
  $('.mpSlider').on('keydown', function (e) {
    switch (e.key) {
      case 'ArrowLeft':
        $(this).slick('slickPrev');
        break;
      case 'ArrowRight':
        $(this).slick('slickNext');
        break;
      case 'Space':
        $('#toggle-autoplay').click();
        e.preventDefault();
        break;
    }
  });
});

$(function () {
  $('.dataSlider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
  });
  // 控制自動播放的變數
  let isPlaying = true;

  // 更新輪播狀態提示
  function updateCarouselStatus(currentSlide, totalSlides) {
    $('#carousel-status').text(`目前顯示第 ${currentSlide} 張投影片，共 ${totalSlides} 張`);
  }

  // 處理暫停/播放按鈕點擊
  $('#dataSlider-toggle-autoplay').click(function () {
    if (isPlaying) {
      // 暫停播放
      $('.dataSlider').slick('slickPause');
      $(this).text('開始播放').attr('aria-label', '開始自動播放輪播').attr('aria-pressed', 'true').addClass('slickPause').removeClass('slickPlay');
    } else {
      // 開始播放
      $('.dataSlider').slick('slickPlay');
      $(this).text('暫停播放').attr('aria-label', '暫停自動播放輪播').attr('aria-pressed', 'false').addClass('slickPlay').removeClass('slickPause');
    }
    isPlaying = !isPlaying;
  });

  // 監聽輪播變化
  $('.dataSlider').on('afterChange', function (event, slick, currentSlide) {
    updateCarouselStatus(currentSlide + 1, slick.slideCount);
  });

  // 初始化狀態提示
  updateCarouselStatus(1, $('.dataSlider').slick('getSlick').slideCount);

  // 鍵盤控制
  $('.dataSlider').on('keydown', function (e) {
    switch (e.key) {
      case 'ArrowLeft':
        $(this).slick('slickPrev');
        break;
      case 'ArrowRight':
        $(this).slick('slickNext');
        break;
      case 'Space':
        $('#toggle-autoplay').click();
        e.preventDefault();
        break;
    }
  });
});

$(function () {
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  });

  //國際動態
  $('.newsSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  //國際事務
  $('.eventSlider').slick({
    mobileFirst: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    customPaging: function (slider, i) {
      const totalSlides = slider.slideCount; // 總圖片數量
      const currentSlide = i + 1; // 目前圖片的編號（1 開始）
      const formattedCurrent = currentSlide.toString().padStart(2, '0'); // 格式化為兩位數
      const formattedTotal = totalSlides.toString().padStart(2, '0'); // 總數也格式化為兩位數
      return `<div class="slick-dot"><span>${formattedCurrent}</span> / ${formattedTotal}</div>`;
    },
  });

  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
  //sticky sidebar
  // if ($('.stickySidebar').length > 0) {
  //   var stickySidebar = new StickySidebar('.stickySidebar', {
  //     containerSelector: '.main',
  //     topSpacing: 93,
  //     bottomSpacing: 0,
  //     minWidth: 768,
  //     resizeSensor: true,
  //   });
  // }
});
$('.mpBanner .outerBox').append(`<div class="countBox"><ul></ul></div>`);
$('.mpSlider').on('init reInit', function (event, slick, currentSlide) {
  const totalLength = $('.mpSlider .item').length;
  for (let i = 0; i < totalLength; i++) {
    $('.mpBanner .countBox ul').append(`<li>0${i + 1}</li>`);
  }
  $('.mpBanner .countBox ul li').eq(0).addClass('active');
});
$('.mpSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $('.mpBanner .countBox ul li').removeClass('active');
  $('.mpBanner .countBox ul li').eq(nextSlide).addClass('active');
});
// tab功能
tabFunction({
  target: '.tabSet',
  openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  openSwitch: true, // 是否可開合/切換
  autoClose: true, // 自動關閉其他開啟內容
  modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
  width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
  index: 0, // 預設開啟第幾個
});

//advSearch 顯示條件查詢
$(document).ready(function () {
  const advSearchButton = $('.advSearch button');
  const advSearchContent = $('.advSearchContent');
  const focusableElements = advSearchContent.find('input, select, button'); // 找到所有可 focus 的表單元素

  // 展開或收合內容的函數
  function toggleContent() {
    advSearchContent.slideToggle(); // 展開或收合 .advSearchContent
    advSearchButton.toggleClass('active');
  }

  // 滑鼠點擊事件：展開或收合內容
  advSearchButton.on('click', function () {
    toggleContent();
  });

  // 鍵盤事件：當按下 Enter 鍵時展開內容
  advSearchButton.on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // 阻止默認的 Enter 行為
      if (!advSearchContent.is(':visible')) {
        toggleContent(); // 只在內容未展開時展開
      }
    }
  });

  // 鍵盤事件：按下 Tab 鍵時，焦點移到第一個可 focus 的元素
  advSearchButton.on('keydown', function (e) {
    if (e.key === 'Tab' && advSearchContent.is(':visible')) {
      e.preventDefault(); // 阻止默認的 Tab 行為
      focusableElements.first().focus(); // 焦點移到第一個可 focus 元素
    }
  });

  // 監聽最後一個 focusable 元素上的 Tab 鍵按下事件
  focusableElements.last().on('keydown', function (e) {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault(); // 阻止默認的 Tab 行為
      advSearchContent.slideUp(); // 收合內容
      advSearchButton.removeClass('active').focus(); // 焦點返回到按鈕
    }
  });

  // 監聽第一個 focusable 元素上的 Shift+Tab 鍵按下事件
  focusableElements.first().on('keydown', function (e) {
    if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault(); // 阻止默認的 Shift+Tab 行為
      advSearchContent.slideUp(); // 收合內容
      advSearchButton.removeClass('active').focus(); // 焦點返回到按鈕
    }
  });
});

//accordion
$(document).ready(function () {
  function accordionFunction(obj) {
    'use strict';
    const accordion = $(obj.target);
    const autoClose = obj.autoClose;
    const openSwitch = obj.openSwitch;
    const openFirst = obj.openFirst;
    const { open, close } = obj.info;

    if (accordion.length) {
      let nowIndex = obj.index === null ? null : obj.index < accordion.find('.accordionList').length ? obj.index : accordion.find('.accordionList').length;

      // 初始化每個手風琴項
      accordion.find('.accordionList').each(function (index) {
        const $this = $(this);
        const $button = $this.find('.accordionBtn');
        const $content = $this.find('.accordionContent');

        $button
          .attr({
            'aria-expanded': 'false',
            role: 'button',
          })
          .append(`<span class="accordionState">${open}</span><span class="accordionArrow"></span>`);

        if (nowIndex === index) {
          $this.addClass('active');
          $button.attr('aria-expanded', 'true');
          $content.slideDown();
          $button.find('.accordionState').text(close);
        } else {
          $content.hide(); // 隱藏其他內容
        }
      });

      // 預先展開模式
      function openCheck() {
        if (!openFirst && nowIndex === null) {
          accordion.find('.accordionContent').slideUp();
        }
      }
      openCheck();

      accordion.find('.accordionList').each(function (index) {
        const $this = $(this);
        const $button = $this.find('.accordionBtn');
        const $content = $this.find('.accordionContent');
        const itemAllTarget = $content.find('a,button,input,textarea,select'); // 可聚焦元素
        const firstItem = itemAllTarget.first();
        const lastItem = itemAllTarget.last();
        const siblings = $this.siblings('.accordionList');
        const $nextButton = accordion
          .find('.accordionList')
          .eq(index + 1)
          .find('.accordionBtn'); // 下一個 accordion 按鈕
        const $prevButton = accordion
          .find('.accordionList')
          .eq(index - 1)
          .find('.accordionBtn'); // 上一個 accordion 按鈕

        // 點擊事件
        if (openSwitch) {
          $button.on('click', function (e) {
            e.preventDefault();
            if ($this.hasClass('active')) {
              // 如果已展開，則收合
              $this.removeClass('active');
              $content.slideUp();
              $button.attr('aria-expanded', 'false');
              $button.find('.accordionState').text(open);
            } else {
              // 如果未展開，則展開
              siblings.removeClass('active');
              siblings.find('.accordionContent').slideUp();
              siblings.find('.accordionBtn').attr('aria-expanded', 'false').find('.accordionState').text(open);

              $this.addClass('active');
              $content.slideDown();
              $button.attr('aria-expanded', 'true');
              $button.find('.accordionState').text(close);
            }

            nowIndex = index;

            // 自動關閉
            if (autoClose) {
              siblings.each(function () {
                $(this).find('.accordionContent').slideUp();
                $(this).removeClass('active');
                $(this).find('.accordionBtn').attr('aria-expanded', 'false').find('.accordionState').text(open);
              });
            }
          });

          // 鍵盤導航
          $button.on('keydown', function (e) {
            if (e.which === 9 && !e.shiftKey) {
              // Tab 鍵
              if (!$this.hasClass('active')) {
                $content.slideDown();
              }

              e.preventDefault();

              if (itemAllTarget.length > 0) {
                // 如果內容中有可聚焦元素，將焦點設置到第一個
                firstItem.focus();
              } else {
                // 如果沒有可聚焦元素，將焦點移到下一個按鈕
                $nextButton.focus();
              }
            } else if (e.which === 9 && e.shiftKey) {
              // Shift + Tab 鍵
              e.preventDefault();

              if (itemAllTarget.length > 0) {
                // 如果內容中有可聚焦元素，將焦點設置到最後一個
                lastItem.focus();
              } else {
                // 如果沒有可聚焦元素，將焦點移到上一個按鈕
                $prevButton.focus();
              }
            }
          });
        }

        // 內容內部的鍵盤導航
        itemAllTarget.each(function () {
          $(this).on('keydown', function (e) {
            if (e.which === 9 && e.shiftKey && $(this).is(firstItem)) {
              // Shift + Tab 從第一個聚焦元素回到按鈕
              $button.focus();
            }
          });
        });
      });
    }
  }

  // 手風琴功能
  accordionFunction({
    target: '.accordion',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
    openSwitch: true, // 是否可開合
    index: 0, // 預設開啟第幾個
    info: {
      open: '展開', // 收合時顯示
      close: '收合', // 展開時顯示
    },
  });
});

//npNode選單
$(document).ready(function () {
  $('.npNode ul').find('li').has('ul').addClass('hasChild');

  function setMenuHeight() {
    let heights = [$('.npNode ul').eq(0).height()];
    $('.npNode li.active')
      .children('ul')
      .each(function () {
        heights.push($(this).height());
      });
    $('.npNode').css('height', `${Math.max(...heights)}px`);
    $('.npNode ul').css('bottom', '0');
  }

  function initializeMenu() {
    $('.npNode .hasChild > a').on('click', function (e) {
      e.preventDefault();
      $('.npNode').removeAttr('style');
      $('.npNode ul').removeAttr('style');

      $(this).parent('li').toggleClass('active').siblings().removeClass('active').find('li').removeClass('active');
      setMenuHeight();
    });
  }

  function initializeToggleBehavior() {
    $('.npNode .hasChild > a').on('click', function (e) {
      e.preventDefault();
      $(this).parent('li').toggleClass('active').siblings().removeClass('active').find('li').removeClass('active');
    });
  }

  function checkWindowWidth() {
    $('.npNode .hasChild > a').off('click');
    if ($(window).width() >= 768) {
      setMenuHeight();
      initializeMenu();
    } else {
      $('.npNode, .npNode ul').removeAttr('style');
      initializeToggleBehavior();
    }
  }

  // 初始化及監控視窗大小改變
  checkWindowWidth();
  $(window).resize(checkWindowWidth);
});

//nodeMemu
$(function () {
  $('.nodeMenu ul').find('li').has('ul').addClass('hasChild');
  $('.nodeMenu .hasChild ul').before('<button class="m4Btn">第四層選單</button>');
  $('.nodeMenu').prepend('<button class="m3Btn">第三層選單</button>');

  $('.nodeMenu .hasChild > a').on('click', function (e) {
    e.preventDefault();

    $(this).parent('li').siblings().removeClass('active');
    $(this).parent('li').siblings().find('li').removeClass('active');
    $(this).parent('li').siblings().find('ul').removeClass('active');
    $(this).parent('li').toggleClass('active');
    $(this).siblings('ul').toggleClass('active');
    checkHeight();
  });

  $(window).on('resize load', function () {
    checkHeight();
  });

  $('.nodeMenu .m3Btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('openBtn');
    $(this).siblings('ul').children('li').children('a').toggleClass('open');
    checkHeight();
  });

  $('.nodeMenu .m4Btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('openBtn');
    $(this).siblings('ul').toggleClass('active');
    checkHeight();
  });

  // 在初次加載時調用 checkHeight
  checkHeight();

  function checkHeight(e) {
    const windowWidth = $(window).width();
    let nextHeight = $('.nodeMenu li.active').children('ul').outerHeight() || 0;
    let parentHeight = $('.nodeMenu li.active').parents('ul').outerHeight() || 0;
    let m3BtnHeight = $('.nodeMenu .m3Btn').outerHeight() || 0;
    let m4BtnHeight = $('.nodeMenu li.active .m4Btn').outerHeight() || 0;

    $('.nodeMenu').attr('style', '');
    $('.nodeMenu ul').attr('style', '');
    if (windowWidth > 768) {
      $('.nodeMenu a').removeClass('open');
      $('.nodeMenu').css('height', `${parentHeight + nextHeight + 16}px`);
      $('.nodeMenu li.active')
        .children('ul')
        .css('top', `${parentHeight + 16}px`);
    } else {
      $('.nodeMenu').css('height', `${parentHeight + nextHeight + m4BtnHeight + m3BtnHeight + 10}px`);
      $('.nodeMenu li.active')
        .children('ul')
        .css('top', `${parentHeight + m4BtnHeight + m3BtnHeight + 10}px`);
      $('.nodeMenu li.active .m4Btn').css('top', `${parentHeight + m3BtnHeight}px`);
    }
  }
});

$(function () {
  $('.nation ul li a,.nation2 ul li a').hover(
    function () {
      var nation_index = $(this).parents('li').index();
      $('svg .mapblock').addClass('focus');
      $('svg .mapblock').eq(nation_index).removeClass('focus');
    },
    function () {
      $('svg .mapblock').removeClass('focus');
    }
  );

  $('.nation ul li a,.nation2 ul li a').focus(function () {
    var nation_index = $(this).parent('li').index();
    $('svg .mapblock').addClass('focus');
    $('svg .mapblock').eq(nation_index).removeClass('focus');
  });

  $('.nation ul li a,.nation2 ul li a').blur(function () {
    $('svg g').removeClass('focus');
  });
  $('.nation .singapore').hover(
    function () {
      $('.sg_map').fadeIn();
    },
    function () {
      $('.sg_map').fadeOut();
    }
  );
  $('.nation .singapore').focus(function () {
    $('.sg_map').fadeIn();
  });

  $('.nation .singapore').blur(function () {
    $('.sg_map').fadeOut();
  });

  $('.mapblock').hover(
    function () {
      var map_index = $(this).index();
      $('.nation ul li,.nation2 ul li').eq(map_index).find('a').addClass('active');
    },
    function () {
      $('.nation ul li,.nation2 ul li').find('a').removeClass('active');
    }
  );
});

//錨點滾動
// 選取所有 anchorBlock 裡的 <a> 標籤
const anchors = document.querySelectorAll('.anchorNav a');

// 添加點擊事件給每個 <a>
anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    // 檢查 .header 是否有 .sticky 類別
    const header = document.querySelector('.header');
    if (header && header.classList.contains('sticky')) {
      event.preventDefault(); // 阻止預設滾動行為

      // 取得對應的錨點元素
      const targetId = this.getAttribute('href').substring(1); // 去掉 "#" 符號
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // 計算錨點的位置，加上額外的 100px 偏移
        // const offsetPosition = targetElement.offsetTop;
        const stickyHeight = 90; // 預設 sticky 的 top 值
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - stickyHeight;

        // 平滑滾動到計算好的位置
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        targetElement.focus({ preventScroll: true });
      }
    }
  });
});

$(function () {
  $('.result_bar .percent').each(function () {
    var aa = $(this).text();
    $(this)
      .prev('td')
      .find('.barbg')
      .append("<span class='bar' style='width:" + aa + "'></span>");
  });
});

$(function () {
  $('.left_block .left_menu').find('li').has('ul').addClass('hasChild');
  $('.left_block .left_menu ul>li ul').hide();
  $('.left_block .left_menu ul')
    .children('li.hasChild')
    .click(function (e) {
      $(this).siblings('li').children('ul').slideUp();
      $(this).children('ul').slideDown();
      e.preventDefault();
    });
  $('.left_block .left_menu ul')
    .children('li.hasChild')
    .keyup(function () {
      $(this).siblings().children('ul').slideUp();
      $(this).children('ul').slideDown();
      $(this)
        .siblings()
        .focus(function () {
          $(this).hide();
        });
    });

  function handleMenu() {
    if ($(window).width() < 992) {
      // if (!$('.leftMenuOpen').length) {
      //   $('.left_block .left_menu').before('<button class="leftMenuOpen">Open Menu</button>');
      // }

      if (!$('.leftMenuClose').length) {
        $('.left_block .left_menu').prepend('<button class="leftMenuClose">Close Menu</button>');
      }

      $('.leftMenuOpen')
        .off('click')
        .on('click', function () {
          $('.left_block .left_menu').slideDown();
          //$(this).hide(); // 隱藏開啟按鈕
        });

      $('.leftMenuClose')
        .off('click')
        .on('click', function () {
          $('.left_block .left_menu').slideUp();
          //$('.leftMenuOpen').show(); // 顯示開啟按鈕
        });

      $('.left_block .left_menu').hide();
      //$('.leftMenuOpen').show();
    } else {
      $('.left_block .left_menu').show();
      $(' .leftMenuClose').remove();
    }
  }

  handleMenu();

  $(window).resize(function () {
    handleMenu();
  });
});
