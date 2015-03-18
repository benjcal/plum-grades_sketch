window.onload = function() {

	function percentToLetter(percent) {
		if (percent >= 94 && percent <= 100) { return "A" }
		if (percent >= 90 && percent <= 93) { return "A-" }
		if (percent >= 87 && percent <= 89) { return "B+" }
		if (percent >= 83 && percent <= 86) { return "B" }
		if (percent >= 80 && percent <= 82) { return "B-" }
		if (percent >= 77 && percent <= 79) { return "C+" }
		if (percent >= 73 && percent <= 76) { return "C" }
		if (percent >= 70 && percent <= 72) { return "C-" }
		if (percent >= 67 && percent <= 69) { return "D+" }
		if (percent >= 63 && percent <= 66) { return "D" }
		if (percent >= 60 && percent <= 62) { return "D-" }
		if (percent < 60) { return "F" }
			else { return "error" }
	};

var x = document.getElementById('select1');
x.onchange = function() {
	if (this.value === "letter") {

	for (var i = 0; i < a.length; i++) {
		a[i].value = percentToLetter(a[i].value);
	};
		
	}
}

var a = document.getElementsByClassName('assignment1');


	

console.log("working!");
}

