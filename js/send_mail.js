$(document).ready(function(){
    
    // Contact Form Submition
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;	 
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			if($(this).hasClass('require')){
				if($(this).val().trim() == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You missed out some fields.');
					$(this).parent().addClass('has-error');
					return false; 
				}else{
					$(this).parent().removeClass('has-error');
				} 
            }else{
                targetResp.html('Mail has been sent successfully');
            }
               
			
			
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid'); 
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).parent().addClass('has-error');	
						$(this).focus();
						check = 1;
                        targetResp.html($(this).attr('data-error'));
            			return false; 
					}else{
						$(this).parent().removeClass('has-error');
					}
				}
			}else{
                targetResp.html('Mail has been sent successfully');
            }
		});
		return check;
	}

	/* contact us form submit start */
    $('#contact-form').on('click', function (e) {
        var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
        var check = checkRequire(targetForm , errroTarget);
        if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			var url = "./contact_us.php";
			$.ajax({
                type: "POST",
                url: url,
                data: formDetail,
                cache:false,		
                contentType: false,
                processData: false
            });
        }
	});
	/* contact us form submit end */
	
	/* Newsletter form submit start */
	$('#newsletter_submit, #newsletter_submit_widget').on('click', function (e) {
        var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
        var check = checkRequire(targetForm , errroTarget);
        if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			var url = "assets/newsletter.php";
			$.ajax({
                type: "POST",
                url: url,
                data: formDetail,
                cache:false,		
                contentType: false,
                processData: false
            });
        }
	});

	$(document).keypress(function(e) {
		if(e.which == 13) {
			$('#newsletter_submit').trigger('click');
		}
	});

	/* Newsletter form submit end */

	/* get quote form submit start */
    $('#get_quote_submit').on('click', function (e) {
        var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
        var check = checkRequire(targetForm , errroTarget);
        if(check == 0){
			var formDetail = new FormData(targetForm[0]);
			formDetail.append('form_type' , _this.attr('form-type'));
			var url = "assets/get_quote.php";
			$.ajax({
                type: "POST",
                url: url,
                data: formDetail,
                cache:false,		
                contentType: false,
                processData: false
            });
        }
	});
	/* get quote form submit end */

});