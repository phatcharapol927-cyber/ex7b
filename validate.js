function checkSID() {
    let sid = document.getElementById("sid").value.trim();
    let pattern = /^[0-9]{10}$/;

    if (pattern.test(sid)) {
        return true;
    } else {
        return false;
    }
}

function checkCandiNo() {
    let candi = document.getElementById("candi").value.trim();

    if (!/^[0-9]+$/.test(candi)) {
        return false;
    }

    let number = parseInt(candi);

    if (number >= 1 && number <= 10) {
        return true;
    } else {
        return false;
    }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}