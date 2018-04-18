$( document ).ready(function() {
  $(window).scroll(function(){
    if ($(window).scrollTop() > 40) {
        $('.nav_bar').addClass('nav_bar_slide');
    }
    else {
        $('.nav_bar').removeClass('nav_bar_slide')
    }
  });

  if(document.getElementById("beijing-time")) {
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date();

        var utc = now.getTime() - (now.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        var new_date = new Date(utc + (7200000*1));

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((new_date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((new_date % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((new_date % (1000 * 60)) / 1000);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Output the result in an element with id="demo"
        document.getElementById("beijing-time").innerHTML = hours + ":" + minutes + ":" + seconds;

    }, 1000);
  }

  /* Mobile Nav */
  $('.js--icon-menu').click(function() {
      var nav = $('.js--nav-body');
      var icon = $('.js--icon-menu');

      nav.slideToggle(200);

      if (icon.hasClass('icon-menu-lines')) {
          icon.addClass('icon-close');
          icon.removeClass('icon-menu-lines');
      } else {
          icon.addClass('icon-menu-lines');
          icon.removeClass('icon-close');
      }
  })

  $('.main-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="icomoon icon-arrow-left"></span>',
    nextArrow: '<span class="icomoon icon-arrow-right"></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  });


  $('.certificates').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="icomoon icon-arrow-left"></span>',
    nextArrow: '<span class="icomoon icon-arrow-right"></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

    $('.reviews').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '<span class="icomoon icon-arrow-left"></span>',
      nextArrow: '<span class="icomoon icon-arrow-right"></span>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

  $('.partners').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    prevArrow: '<span class="icomoon icon-arrow-left"></span>',
    nextArrow: '<span class="icomoon icon-arrow-right"></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.specialists').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="icomoon icon-arrow-left"></span>',
    nextArrow: '<span class="icomoon icon-arrow-right"></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $( ".question-container .question").click(function() {
    $( this ).parent().toggleClass( "scrolled" );
  });
  $( ".question-container .arrow-container" ).click(function() {
    $( this ).parent().toggleClass( "scrolled" );
  });

  $( ".speciality-hidden-button" ).click(function() {
    $(".speciality-hidden").toggleClass( "scrolled" );
    if($(".speciality-hidden").hasClass("scrolled")) $( ".speciality-hidden-button" ).html('Посмотреть все направления лечения <span class="icomoon icon-arrow-down">');
    else $( ".speciality-hidden-button" ).html('Скрыть все направления лечения <span class="icomoon icon-arrow-up">');
  });

  // Get the modal
  var modal_discount = document.getElementById('modal-discount');

  // Get the <span> element that closes the modal
  var close_popup = document.getElementsByClassName("js--close-popup")[0];

  // When the user clicks on <span> (x), close the modal
  close_popup.onclick = function() {
      modal_discount.style.display = "none";
      document.getElementsByClassName("modal-p-1")[0].style.display = "none";
  }
  function openPopup() {
      alert(545);
      modal_discount.style.display = "block";
  }



  if(document.getElementById("discount-counter-1")) {

  // Update the count down every 1 second
  var distance = 0;
  if(!localStorage.getItem("timer")) distance = 121000;
  else distance = parseInt(localStorage.getItem("timer"));
  var x = setInterval(function() {


      // Find the distance between now an the count down date
      if(distance > 0){
        distance=distance-1000;
        localStorage.setItem("timer", distance);
      }
      if(distance == 65000){
    		modal_discount.style.display="block";
    	}
      if(distance == 0){
    		$(".form-discount").each(function(index,item) {
    		   $(item.elements).attr("disabled",true);
    		});
    	}
      // Time calculations for days, hours, minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // Output the result in an element with id="demo"
      document.getElementById("discount-counter-1").innerHTML = minutes + "<span>м</span>&nbsp;:&nbsp;" + seconds + "<span>с</span> ";
      document.getElementById("discount-counter-2").innerHTML = minutes + "<span>м</span>&nbsp;:&nbsp;" + seconds + "<span>с</span> ";
      document.getElementById("discount-counter-3").innerHTML = minutes + "<span>м</span>&nbsp;:&nbsp;" + seconds + "<span>с</span> ";

      // If the count down is over, write some text
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
  }, 1000);
  }

});

// Get the modal
var modal_discount = document.getElementById('modal-discount');

function openPopup() {
  modal_discount.style.display = "block";
}

$(document).ready(function(){
  if(window.location.href.split('#')[1]) {
  var href_url = "#" + window.location.href.split('#')[1];
    $('.tab-content').removeClass('active');
    $(href_url).addClass('active');
    $('.section-page-title h1').text($('a[href="'+href_url + '"]').first().text());
    $('.third').html('<a href="' + href_url + '">' +   $('a[href="'+href_url + '"]').first().text() +'</a>');
    $('.tabs-nav li').removeClass('active');
    $('a[href="'+href_url + '"]').parent().addClass('active');
  }
	// Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
          var href_tab = "#" + $(this).attr('href').split('#')[1];
          if(~href_tab.indexOf('doctor') && !~href_tab.indexOf('doctors')) {
            $('.tab-content').removeClass('active');
            $(href_tab).addClass('active');
            $('.fouth').css("display", "block");
            $('.fouth').text($('a[href="'+href_tab + '"]').first().text());
          } else {
            $('.fouth').css("display", "none");
            $('.tab-content').removeClass('active');
            $(href_tab).addClass('active');
            $('.section-page-title h1').text($('a[href="'+href_tab + '"]').first().text());
            $('.third').html('<a href="' + href_tab + '">' +   $('a[href="'+href_tab + '"]').first().text() +'</a>');
            $('.tabs-nav li').removeClass('active');
            $('a[href="'+href_tab + '"]').parent().addClass('active');
          }

        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          var nav_height = 0;
          $('html, body').animate({
            scrollTop: 0
          }, 1000)
            return false;
        }
      }
    });

	$(".callbackForm").submit(function(e) {

		e.preventDefault();
        var nameElement = this.elements.name;
        var phoneElement = this.elements.phone;
		var name = nameElement.value.trim();
        var phone = phoneElement.value.trim();

			$.ajax({
			  type: 'POST',
			  url: 'http://jensinclinic.com/mail.php',
			  data: 'name='+name+'&phone='+phone,
			  success: function(data){
			  	console.log(data);
			  }
			});

			nameElement.value = '';
			phoneElement.value = '';

			$(this).find('.result').html('Ваша заявка отправлена. Скоро наши менеджеры свяжутся с Вами.');

			setTimeout(function(){
				$('.result').html('');
			}, 5000);
	});
});
