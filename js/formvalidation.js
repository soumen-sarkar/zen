$().ready(function() {
	// validate signup form on keyup and submit
	submitForm("enquiryForm");
	submitForm("enquiryFormBottom");
	submitForm("contactForm");
	function submitForm(id){
		
		$("#"+id).validate({
			rules: {
				name: "required",
				subject: "required",
				message: "required",
				tel: {
					required: true
					//number: true
				},
				email: {
					required: true,
					email: true
				},
				dailyrate: {
					required: true
					//number: true
				}
			},
			messages: {
				name: "Please enter your name",
				email: "Please enter a valid email address",
				tel: "Please enter telephone no",
				dailyrate: "Please enter the amount",
				subject: "Please enter subject",
				message: "Please enter your message"
			}
		});
	
	}
});