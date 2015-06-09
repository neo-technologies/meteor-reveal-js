Reveal.js for Meteor
====================

This Meteor package adds the Reveal.js JavaScript and CSS files to the client.

Installation
------------

`meteor add neo:reveal-js`


Usage
-----

**HTML**

Markup hierarchy needs to be ``<div class="reveal"> <div class="slides"> <section>`` where the ``<section>`` represents one slide and can be repeated indefinitely. If you place multiple ``<section>``'s inside of another ``<section>`` they will be shown as vertical slides. The first of the vertical slides is the "root" of the others (at the top), and it will be included in the horizontal sequence. For example:

```html
<div class="reveal">
	<div class="slides">
		<section>Single Horizontal Slide</section>
		<section>
			<section>Vertical Slide 1</section>
			<section>Vertical Slide 2</section>
		</section>
	</div>
</div>
```

Consult the [instructions of Reveal.js](https://github.com/hakimel/reveal.js#instructions) for more information.


**JavaScript**

You need to call **`Reveal.initialize()`** when the client DOM is ready.

This can be achieved in a **`Meteor.startup()`** function callback.

```javascript
if (Meteor.isClient) {
  Meteor.startup( function() {
    Reveal.initialize();
  });
}
```

If you use a template, you must do the initialization using **`Template.myTemplate.onRendered()`**

```javascript
Template.myTemplate.onRendered( function() {
  Reveal.initialize();
});
```

You can use configuration values as described in the [documentation of Reveal.js](https://github.com/hakimel/reveal.js#configuration), for example:

```javascript
Reveal.initialize({
  loop: true,
  controls: false,
  progress: false,
  autoSlide: 5000
});
```

The configuration can be updated after initialization using the configure method:

```javascript
// Turn autoSlide off
Reveal.configure({ autoSlide: 0 });

// Start auto-sliding every 5s
Reveal.configure({ autoSlide: 5000 });
```

**Themes**

You can import one of the built-in theme files, as follow:

```html
<head>
  <link rel="stylesheet" href="/packages/neo_reveal-js/reveal.js/css/theme/<theme_name>.css" id="theme"/>
</head>
```

Replace **`<theme_name>`** by one of the following built-in themes:

  - `beige`
  - `blood`
  - `default`
  - `moon`
  - `night`
  - `serif`
  - `simple`
  - `sky`
  - `solarized`


For example:

```html
<head>
  <link rel="stylesheet" href="/packages/neo_reveal-js/reveal.js/css/theme/<theme_name>.css" id="theme"/>
</head>
```

By setting the **`id`** attribute the theme can be changed by calling **`Reveal.configure()`**. For example:

```javascript
Reveal.configure({theme: "moon"});
```

Demo
----

See sample application running at http://reveal-js.meteor.com/

Source files are available at https://github.com/neo-technologies/meteor-reveal-js-demo
