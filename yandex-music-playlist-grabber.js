var trackList = document.getElementsByClassName('longlist__cont');
var a = trackList.item(0);
//console.log(a.childElementCount);
var arr = [];

/*
curTrack = a.childNodes[0];
trackName = curTrack.childNodes[0].firstChild.firstChild.innerHTML;
trackArtist = curTrack.childNodes[3].firstChild.innerHTML;
trackLength = curTrack.childNodes[4].childNodes[1].innerHTML;
*/
var i = 0;

//запускаем рекурсивно с паузой для догрузки
var timerId = setTimeout(function tick() {
	a.childNodes[i].scrollIntoView();
	curTrack = a.childNodes[i];	
	//если информация о треке уже загрузилась
	if (hasClass(curTrack, 'track_in-lib')) {
		trackName = curTrack.childNodes[0].firstChild.firstChild.innerHTML;
		trackArtist = curTrack.childNodes[3].firstChild.innerHTML;
		trackLength = curTrack.childNodes[4].childNodes[1].innerHTML;
		//то считываем её и пишем
		arr[i] = [trackArtist, trackName, trackLength];
	
	}
	//иначе ждём и проверяем ещё раз
	else {
		timerId = setTimeout(tick, 500);
	}
	
	i++;
	if (i < a.childElementCount) {
		timerId = setTimeout(tick, 500);
	}
	else {
		clearTimeout(timerId);
		console.table(arr);
	}
	
}, 500);


function checkLoaded(curTrack) {

	if (hasClass(curTrack, 'track_in-lib')) {return true;}
	else {return false};
	
}


function hasClass( elem, klass ) {
     return (" " + elem.className + " " ).indexOf( " "+klass+" " ) > -1;
}


