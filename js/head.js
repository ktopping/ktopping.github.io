WebFontConfig = {
google: { families: [ 'Source+Sans+Pro:300,400,600,300italic,400italic,600italic:latin' ] }
};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'https') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();


for (var i=0; i<1000 ; i++) {
  console.log(i);
}
