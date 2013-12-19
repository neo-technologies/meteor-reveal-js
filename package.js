Package.describe({
  summary: "Reveal.js - HTML Presentation Framework"
});

Package.on_use(function (api, where) {
  api.add_files([
	'reveal.js/css/theme/beige.css',
	'reveal.js/css/theme/blood.css',
	'reveal.js/css/theme/default.css',
	'reveal.js/css/theme/moon.css',
	'reveal.js/css/theme/night.css',
	'reveal.js/css/theme/serif.css',
	'reveal.js/css/theme/simple.css',
	'reveal.js/css/theme/sky.css',
	'reveal.js/css/theme/solarized.css',
	'reveal.js/lib/css/zenburn.css',
	'reveal.js/lib/font/league_gothic_license',
	'reveal.js/lib/font/league_gothic-webfont.eot',
	'reveal.js/lib/font/league_gothic-webfont.svg',
	'reveal.js/lib/font/league_gothic-webfont.ttf',
	'reveal.js/lib/font/league_gothic-webfont.woff'
  ], 'client', { isAsset: true });

  api.add_files([
	'reveal.js/js/reveal.js',
	'reveal.js/css/reveal.css'
  ], 'client');

  api.export('Reveal', 'client');
});
