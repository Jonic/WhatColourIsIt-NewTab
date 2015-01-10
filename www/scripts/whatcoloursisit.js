
function $(s) {
	return document.querySelector(s);
}

function pad(str, pad) {
	return (pad + str).slice(-pad.length - 1);
}

(function update_time () {
	var date  = new Date();
	var hours = pad(date.getHours(),   '0');
	var mins  = pad(date.getMinutes(), '0');
	var secs  = pad(date.getSeconds(), '0');
	var color = '#' + hours + mins + secs;

	$('#time').innerHTML  = [hours, mins, secs].join(' : ');
	$('#color').innerHTML = color;

	document.body.style.background = color;

	setTimeout(function () {
		update_time();
	}, 1000);
}());