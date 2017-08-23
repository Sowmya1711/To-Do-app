function formValidation(){
		if (document.myForm.fname.value == "") {
        	document.getElementById('errFirstName').innerHTML = "Please fill your firstname";
			document.myForm.fname.focus();
		//return false;        
		} else{
		}	
		
		if (document.myForm.lname.value == "") {
        	document.getElementById('errLastName').innerHTML = "Please fill your lastname";
			document.myForm.lname.focus();
		//return false;
		}else{	
		}	
		
		if ( ( myForm.gender[0].checked == false ) && ( myForm.gender[1].checked == false ) ) {	
       		document.getElementById('errGender').innerHTML = "Please choose your Gender";	
		//return false;
		}else{
			
		}

		var email = document.getElementById('txtEmail');
    	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	if (!filter.test(email.value)) {
    		document.getElementById('errEmail').innerHTML = "Enter valid mail Id with the conditions";
    		document.myForm.email.focus();
    	//return false;
    	}else{
			
		}

		var mobile = document.getElementById('phoneNumber');
		var phoneNum  = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
		if (!mobile.value.match(phoneNum)) {
			document.getElementById('errPhoneNumber').innerHTML = "Please enter valid Phone number";
			document.myForm.phone.focus();
		//return false;
		}else{
			
		}

  		var p = document.getElementById('password').value,
     	errors = [];     	
     	if (p.length < 6) {
     		errors.push("Password should be maximum 6 digits !");
     	} if (p.search(/[A-Z]/i) < 0) {
        errors.push(" use one upper case");
       	} if (p.search(/[~!,*@]/i) < 0) {
        errors.push(" use special characters ~!,*");
        } if (p.search(/[0-9]/) < 0) {
        errors.push(" and use one digit "); 
        } if (errors.length > 0) {
     		document.getElementById('errPassword').innerHTML = errors.join("\n");
     		return false;
     	}

		//confirm password validation 
		if (document.myForm.psw.value != document.myForm.cpsw.value) {
			document.getElementById('errConfirmPassword').innerHTML = "Password not matching";
		} else{
			alert(" Successfully registered !!");
		}
		return false;
}

//keypress function
		function firstNameFunction() {
			document.getElementById('errFirstName').innerHTML="";
		}
		function lastNameFunction(){
			document.getElementById('errLastName').innerHTML="";	
		}
		function genderFunction(){
			document.getElementById('errGender').innerHTML="";
		}
		function emailFunction(){
			document.getElementById('errEmail').innerHTML="";
		}
		function phoneFunction(){
			document.getElementById('errPhoneNumber').innerHTML="";
		}
		function pswFunction(){
			document.getElementById('errPassword').innerHTML="";
		}
		function cpswFunction(){
			document.getElementById('errConfirmPassword').innerHTML="";
		}
		

//onchange function
		function fnFunction() {
   		if( document.myForm.fname.value == "" )
   			document.getElementById('errFirstName').innerHTML = "Please provide your firstname";
   		}
		function lnFunction() {
   		if( document.myForm.lname.value == "" )
   	   		document.getElementById('errLastName').innerHTML = "Please provide your lastname";
   		}
		function emidFunction() {
   		var email = document.getElementById('txtEmail');
    	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	if (!filter.test(email.value)) {
    		document.getElementById('errEmail').innerHTML = "Enter valid mail Id with the conditions";
    		document.myForm.email.focus();
    		//return false;
    	}else{
			}
  		}  
		function phFunction() {
  		var mobile = document.getElementById('phoneNumber');
		var phoneNum  = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
		if (!mobile.value.match(phoneNum)) {
			document.getElementById('errPhoneNumber').innerHTML = "Please enter valid Phone number";
			document.myForm.phone.focus();
			//return false;
		}else{
			}
  		}
		function pdFunction() {
   		if( document.myForm.psw.value == "" )
   			document.getElementById('errPassword').innerHTML = "Please provide your password";
   		}
		function cpdFunction() {
   		if( document.myForm.psw.value == "" )
   			document.getElementById('errConfirmPassword').innerHTML = "Please provide your confirm password";
   		}