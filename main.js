
function fieldEmpty(fieldvalue, errorString) {
    if (fieldvalue == "") {
		return (errorString);
	} else {
    	return "";    
	}
}
    function validateState(fieldvalue){
    if(fieldvalue.length>2 || fieldvalue.length<2){
        return "State needs to be 2 letters\n";
    }
    else{
        return "";
    }
}
function radioButtonSelected (radioButtons, errorString) {
	radioSelected = -1;
	for (i=radioButtons.length-1; i > -1; i--) {
		if (radioButtons[i].checked) {
			radioSelected = i; 
			i = -1;   
		}
	}
	if (radioSelected == -1) {
		return (errorString);
	} else {
		return "";
	}
}
function checkboxesSelected (checkboxes, errorString) {
	var checkboxesSelected = 0;
	for (i=0; i<checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			checkboxesSelected += 1; 
		}
	}
	if (checkboxesSelected<2) {
		return (errorString);
	} else {
		return "";
	}
}
    function validateAge(fieldvalue){
        if(fieldvalue=="select"){
            return "age group not selected\n";
        }
        else{
            return "";
        }
    }
function validateEmail (fieldvalue) {
    if (fieldvalue == "") return "Email is not entered.\n"
        else if (!((fieldvalue.indexOf(".") > 0) &&
                   (fieldvalue.indexOf("@") > 0)) ||
                  /[^a-zA-Z0-9.@_-]/.test(fieldvalue))
        return "The Email address is invalid.\n"
    return ""
}

// validate function that calls other functions and acculumates errorString and test if this is empty or not //
function validate (form) {
    fail  = fieldEmpty(form.name.value, "Name is empty.\n")  
    fail += fieldEmpty(form.address.value, "Address is empty.\n")
	fail += fieldEmpty(form.city.value, "City is empty.\n")
	fail += validateState(form.state.value)
	fail += fieldEmpty(form.zip.value, "Zip is empty.\n")
	fail += validateEmail(form.email.value)
    fail += validateAge(form.age.value)
	fail += radioButtonSelected(form.version, "version not selected.\n")
	fail += checkboxesSelected(form.genres, "Atleast two genres to be selected.\n")
    fail += radioButtonSelected(form.use, "your opinion on this app is not selected.\n")
    if (fail == "") return true
    else { alert(fail); return false }
}
