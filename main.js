future = new Date('oct 14, 2022 00:00:00').getTime();

function newDate(){
	let now = new Date().getTime();
	gap =  future - now;

	days = Math.floor(gap / (1000 * 60 * 60 * 24));
	hours = Math.floor(gap / (1000 * 60 * 60));
	minutes = Math.floor(gap / (1000 * 60));
	seconds = Math.floor(gap / 1000);

	d = days;
	h = hours - days * 24;
	m = minutes - hours * 60;
	s = seconds - minutes * 60;



	document.getElementById('day').innerText = d;
	document.getElementById('hour').innerText = h;
	document.getElementById('minute').innerText = m;
	document.getElementById('second').innerText = s;

}

setInterval('newDate()', 1000);
