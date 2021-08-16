function validateLogin() {

        if (nameInput.value==""){
            alert("Please input username.");
            return false;
        } else if (passwordInput.value=="" || passwordInput.value.length<6){
            alert("Please input password with at least 6 characters.");
            return false;
        } else {
            window.close('login.html');
            window.open('form.html');
        } 
}

//*********************************************************************
function showHideBox(btn) {
    var inputBoxMedicine = document.getElementById("inputBoxMedicine");
    inputBoxMedicine.style.opacity = btn.value == "Yes" ? "100" : "0";

    if (btn.value=="yes" && inputBoxMedicine.value=="") {
        alert("error");
    }
}

function clearAll() {
    document.getElementById("patientForm").reset();
    var inputBoxMedicine = document.getElementById("inputBoxMedicine");
    inputBoxMedicine.style.opacity = '0';
}

function validateForm() {

    if ( ( document.patientForm.firstName.value == "" )
    || ( document.patientForm.middleName.value == "" ) 
    || (document.patientForm.lastName.value == ""))
    {
        alert ( "Please input your Complete Name." );
        return false;
    }

    else if ( ( document.patientForm.inputGender[0].checked == false )
    && ( document.patientForm.inputGender[1].checked == false ) )
    {
        alert ( "Please choose your Gender." );
        return false;
    }

    else if ( (document.patientForm.inputBirthday.value == "")) 
    {
        alert ( "Please input your Birth Date.");
        return false;
    }

    else if ( ( document.patientForm.inputContact.value == "" )
    || ( document.patientForm.inputContact.value.length != 11 ) )
    {
        // pattern="[0][9][0-9]{9}"
        alert ( "Please input a valid Contact Number." );
        return false;
    }

    else if ( ( document.patientForm.inputAddress.value == "" ))
    {
        alert ( "Please input your Address." );
        return false;
    }

    else if ( ( document.patientForm.yesBtn.checked == false)
    && ( document.patientForm.noBtn.checked == false) ) 
    {
        alert ( "Please specify if you are taking any medication (Yes or No).");
        return false;
    }

    else if ( (document.patientForm.yesBtn.checked == true )) 
    {
        if ( document.patientForm.inputMedication.value == "" || document.patientForm.inputMedication.value == null) {
            alert ( "Please input Name of Medication." );
            return false;
        } else { alert ( "Form successfully submitted!" );}
    } 
    
    else { alert ( "Form successfully submitted!" ); }

}

