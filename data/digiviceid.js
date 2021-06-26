//for toggling elements visibility
function toggle(e) {
	var e = document.getElementById(e);
	e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}
//This is to fix the numbers that are supposed to have a zero in front of them.
function fixzero(num) {
	var val = "";
	if ( num < 10 ) {
		val = "0" + num;
	} else {
		val = num;
	}
	return val;
}

//Not even going to bother with this at the moment. 
//Will end up using it to make sure your year is using a valid number of days for febuary.
//I haven't seen one sight that checks this though.
function leap(year) {
	if (year % 100 == 0) {	
		if (year % 400 == 0) { return true; }
	} else {
		if ((year % 4) == 0) { return true; }
	}
}

//Random number generator with minimum and maximum range.
function rand(min,max) {
	return (Math.floor(Math.random()*(max-min)) + min);
}

//Quicker than calling the random number generator 5 times.
function seed() {
	var val = "";
	for (var i=0;i<5;i++){
		val += Math.floor(Math.random()*10);
	}
	return val;
}

//I didn't feel like having to type in a shitload of document.getElement shit.
function change(what,val,czero) {
	if (czero) {
	document.getElementById(what).value = fixzero(val);
	} else {
	document.getElementById(what).value = val;
	}
}

//This function takes all the information, creates a checksum, outputs your ID :)
function makeID() {
	var y = document.getElementById('Year').value;
	var m = document.getElementById('Month').value;
	var d = document.getElementById('Day').value;
	var s = document.getElementById('Sex').value;
	var sd = document.getElementById('Seed').value;
	var checksum = 
	(
		(
		11 - 
			(
				(
				y.charAt(0)*2 + y.charAt(1)*3 + m.charAt(0)*4 +
				m.charAt(1)*5 + d.charAt(0)*6 + d.charAt(1)*7 +
				s.charAt(0)*8 + sd.charAt(0)*9 + sd.charAt(1)*2 +
				sd.charAt(2)*3 + sd.charAt(3)*4 + sd.charAt(4)*5 
				)
			% 11
			)
		)
	% 10
	);
	change('ID',y + m + d + "-" + s + sd + checksum);
}

//Randomizes the data.
function randomize() {
	var d = new Array( 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	change('Year',rand(0,92),1);
	m = rand(1,13);
	change('Month',m,1);
	change('Day',rand(0,d[m]),1);
	change('Sex',rand(1,3));
	change('Seed',seed());
	makeID();
}
function randomwhere() {
	var oj = new Array("都","道","府","県");
	change('OJBox',oj[rand(0,4)]);
}
