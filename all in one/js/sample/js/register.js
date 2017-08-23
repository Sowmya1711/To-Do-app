$(document).ready(function(){
	$("#form").validate({
		rules:{
			name:"required",
			email:{//compound rule
				required:true,
				email:true
			},
			password:{
				required:true,
				minlength:5
			},
		}
	})
	
})