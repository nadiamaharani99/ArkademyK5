function is_username_valid(username) {
	//Huruf a-z
	var lowercaseRe = /^[a-z]$/g;

	//mengecek panjang string dan memastikan karater yang dibuat sama dengan ketentuan panjang string
		if(username.length== {3,5} && username.match(lowercaseRe).length==username.length {
		return true;
		} 
		return false;
}

function is_password_valid(password {
	//3 digit angka
	var numberRe = /^[0-9]{3}$/g;

	//simbol "-"
	var spesialRe = /^[-]{1}$/g;

	//3 digit angka lagi
	var numberRe = /^[0-9]{3}$/g;

	//4 huruf besar
	var uppercaseRe = /^[A-Z]{4}$/g;

if (password.length == 11
	&& numberRe.test(password)
	&& spesialRe.test(password)
	&& numberRe.test(password)
	&& uppercaseRe.test(password)){

	return true;
	}
	return false;
}

isPasswordValid(139-099NADI);