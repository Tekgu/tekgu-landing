$(document).ready(function () {
	/* work slider start */
	new Swiper('.swiper-container', {
		slidesPerView: 3,
		spaceBetween: 44,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			480: {
			  slidesPerView: 2,
			  spaceBetween: 10,
			},
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			0: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			
		}
	});
	/* work slider end */

	/* animation start */
	var textWrapper = document.querySelector('.lp_anim_logo_heading');
	if(textWrapper){
		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	}
	anime.timeline({loop: false})
	.add({
		targets: '.lp_anim_logo_heading .letter',
		scale: [4,1],
		opacity: [0,1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: (el, i) => 70*i
	});
	
	anime({
		targets: '.lp_vector_big',
		translateX: [0,10],
		translateY: [0,20],
		direction: 'alternate',
		loop: true,
		easing: 'linear'
	});


	var section_heading_anim = new WOW({
		boxClass:     'lp_section_heading > h1',
		animateClass: 'animated',
		offset:       0,         
		mobile:       true,      
		live:         true,      
		callback:     function(box) {
			box.innerHTML = box.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
			anime.timeline({loop: false}).add({
				targets: '.lp_section_heading > h1 .letter',
				translateX: [200,0],
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 500,
				delay: (el, i) => 70*i
			});
		},
		scrollContainer: null,
		resetAnimation: true, 
		}
	);
	section_heading_anim.init();

	var section_subheading_anim = new WOW({
		boxClass:     'lp_section_heading > h3',
		animateClass: 'animated',
		offset:       0,         
		mobile:       true,      
		live:         true,      
		callback:     function(box) {
			box.innerHTML = box.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
			anime.timeline({loop: false, delay: 500}).add({
				targets: '.lp_section_heading > h3 .letter',
				translateX: [200,0],
				opacity: [0,1],
				easing: 'cubicBezier(0.65, 0.05, 0.36, 1)',
				duration: 500,
				delay: (el, i) => 70*i
			});
		},
		scrollContainer: null,
		resetAnimation: true, 
		}
	);
	section_subheading_anim.init();
	
	
	var work_item_anim = new WOW({
		boxClass:     'lp_work_item',
		animateClass: 'animated',
		offset:       0,         
		mobile:       true,      
		live:         true,      
		callback:     function(box) {
			anime({
				targets: '.lp_work_item',
				opacity: [0,1],
				translateX: [100,0],
				easing: 'cubicBezier(0.65, 0.05, 0.36, 1)',
				delay: (el, i) => 70*i
			});
		},
		scrollContainer: null,
		resetAnimation: true, 
		}
	);
	work_item_anim.init();
	
	var blog_item_anim = new WOW({
		boxClass:     'lp_blog_item',
		animateClass: 'animated',
		offset:       0,         
		mobile:       true,      
		live:         true,      
		callback:     function(box) {
			anime({
				targets: box,
				opacity: [0,1],
				translateY: [50,0],
				easing : 'cubicBezier(0.65, 0.05, 0.36, 1)',
				delay: (el, i) => 50*i
			});
		},
		scrollContainer: null,
		resetAnimation: true, 
		}
	);
	blog_item_anim.init();

	var lp_fade_up = new WOW({
		boxClass:     'lp_fade_up',
		animateClass: 'animated',
		offset:       0,         
		mobile:       true,      
		live:         true,      
		callback:     function(box) {
			anime({
				targets: box,
				opacity: [0,1],
				easing: 'cubicBezier(0.65, 0.05, 0.36, 1)',
				duration: 500,
				translateY: [50,0],
			});
		},
		scrollContainer: null,
		resetAnimation: true, 
		}
	);
	lp_fade_up.init();
	/* animation end */

	/* menu start */
	function menuOpen(){
		$('body').addClass('menu_open');
		var motl = anime.timeline()
		motl.add({
			targets: '.lp_menu_bg > span',
			opacity: [0,1],
			translateY: [50,0],
			duration: 200,
			easing : 'cubicBezier(0.65, 0.05, 0.36, 1)',
			delay: (el, i) => 20*i
		});
		motl.add({
			targets: '.lp_menu > ul > li',
			opacity: [0,1],
			translateX: [50,0],
			delay: (el, i) => 50*i
		});
	}
	function menuClose(){
		var mctl = anime.timeline()
		mctl.add({
			targets: '.lp_menu > ul > li',
			opacity: [1,0],
			translateX: [-50,0],
			delay: (el, i) => 50*i
		});
		mctl.add({
			targets: '.lp_menu_bg > span',
			opacity: [1,0],
			duration: 200,
			easing : 'cubicBezier(0.65, 0.05, 0.36, 1)',
			delay: (el, i) => 20*i,
			complete: function() {
				$('body').removeClass('menu_open');
			}
		}, '-=1000');
	}
	if($('.lp_menu_toggle').length){
		$('.lp_menu_toggle').on('click', function(){
			if($('body').hasClass('menu_open')){
				menuClose();
			}else{
				menuOpen();
			}
		});
	}

	$(document).keyup(function(e) {
		if(e.key === "Escape") {
			if($('body').hasClass('menu_open')){
				menuClose();
			}
		}
   });
	/* menu end */

	/* loader animation start */
	var textWrapper2 = document.querySelector('.lp_anim_loader_heading');
	if(textWrapper2){
		textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	}
	var tl = anime.timeline({
		easing: 'easeInOutSine',
		duration: 500
	});
	tl.add({
		targets: '.lp_loader_overlay',
		translateY: ['100%','0%'],
		duration: 300
	}).add({
		targets: '.lp_loader_overlay',
		translateY: ['0%','-100%'],
		duration: 300
	}).add({
		targets: '.lp_anim_loader_heading .letter',
		scale: [2,1],
		opacity: [0,1],
		translateZ: 0,
		easing: "easeOutExpo",
		duration: 950,
		delay: (el, i) => 70*i
	}).add({
		targets: '.lp_loader_wrapper',
		translateY: ['0%','-100%']
	});
	/* loader animation end */

	let anim_box = document.querySelector('.anim_box');
	if(anim_box){
		var tl_box = anime.timeline({
			easing: 'easeOutQuad',
			duration: 1000,
		});
		tl_box.add({
			targets: '.anim_box',
			d: [
				{ value: 'M0 0H1V21H0V0Z' },
				{ value: 'M0 0H391V21H0V0Z' },
				{ value: 'M0 0H391V288H0V0Z' },
			]
		})
		tl_box.add({
			targets: '.anim_box',
			scale: [1,5],
		})
		tl_box.add({
			targets: '.anim_box',
			opacity: [1,0],
		}, '-= 800')
	}

	/* gradient animation start */
	var tl_g = anime.timeline({
		easing: 'easeOutQuad',
		duration: 500,
	})
	tl_g.add({
		targets: '.lp_logo',
		scale: [0,1],
		delay: 100,
		translateY: [200,0]
	}, '+=2500')
	tl_g.add({
		targets: '.lp_banner_text > h3',
		opacity: [0,1],
		easing: 'easeInOutExpo',
		duration: 800,
		translateY: [100,0]
	})
	tl_g.add({
		targets: '.lp_banner_text > .lp_scroll_down',
		opacity: [0,1],
		easing: 'easeInOutExpo',
		duration: 800,
		translateY: [100,0]
	}, '-=600')
	tl_g.add({
		targets: '.heart1, .heart2',
		opacity: [0,1],
		easing: 'easeInOutExpo',
		duration: 800,
		translateY: [100,0],
		delay: (el, i) => 70*i
	})
	tl_g.add({
		targets: '.heart1, .heart2',
		translateX: [0,10],
		duration: 800,
		direction: 'alternate',
		loop: true,
	})
	tl_g.add({
		targets: '.cartoon1, .cartoon2, .cartoon3',
		opacity: [0,1],
		easing: 'easeInOutExpo',
		duration: 800,
		translateY: [-10,0],
		delay: (el, i) => 100*i
	}, '-=500')
	tl_g.add({
		targets: '.leaf1, .leaf2',
		opacity: [0,1],
		easing: 'easeInOutExpo',
		duration: 800,
		translateY: [100,0],
		delay: (el, i) => 100*i
	}, '-=2000')
	/* gradient animation end */


	/* scroll down start */
	$(".lp_scroll_down").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			menuClose();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
		  	}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
	/* scroll down end */

});
