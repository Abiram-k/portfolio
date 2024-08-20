
document.getElementById('form').addEventListener('submit', (e) => {
    const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const name_check = /^[a-zA-Z\s]+$/;
    
    // Select form elements and error message elements
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    const name_error = document.querySelector('#name_error');
    const email_error = document.querySelector('#email_error');
    const subject_error = document.querySelector('#subject_error');
    const message_error = document.querySelector('#message_error');

    let isValid = true;

    // Clear previous error messages
    name_error.innerHTML = '';
    email_error.innerHTML = '';
    subject_error.innerHTML = '';
    message_error.innerHTML = '';

    // Validate name
    if (name.value === '' || name.value == null) {
        isValid = false;
        name_error.innerHTML = "Name is required";
    } else if (!name_check.test(name.value)) {
        isValid = false;
        name_error.innerHTML = "Name should be in alphabets";
    }

    // Validate email
    if (!email.value.match(email_check)) {
        isValid = false;
        email_error.innerHTML = "Invalid email address";
    }

    // Validate subject
    if (subject.value === '' || subject.value == null) {
        isValid = false;
        subject_error.innerHTML = "Subject is required";
    }

    // Validate message
    if (message.value === '' || message.value == null) {
        isValid = false;
        message_error.innerHTML = "Enter any message";
    }

    if (!isValid) {
        e.preventDefault();
    }
});


// ISOTOPE FILTER

jQuery(document).ready(function($){

	if ( $('.iso-box-wrapper').length > 0 ) { 

	    var $container 	= $('.iso-box-wrapper'), 
	    	$imgs 		= $('.iso-box img');



	    $container.imagesLoaded(function () {

	    	$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
	    	});

	    	$imgs.load(function(){
	    		$container.isotope('reLayout');
	    	})

	    });

	    //filter items on button click

	    $('.filter-wrapper li a').click(function(){

	        var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({ 
				filter: filterValue,
				animationOptions: { 
				    duration: 750, 
				    easing: 'linear', 
				    queue: false, 
				}              	 
			});	            

			// don't proceed if already selected 

			if ( $this.hasClass('selected') ) { 
				return false; 
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

	      return false;
	    }); 

	}

});


// MAIN NAVIGATION

 $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    }); 

    /* NAVIGATION VISIBLE ON SCROLL */
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '0',
            "top": '-75'
        });
    }


// HIDE MOBILE MENU AFTER CLIKING ON A LINK

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
