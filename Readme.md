Reveal.js for Meteor
====================

Installation
------------

`mrt add reveal-js`


Usage
-----

JavaScript: add call to `Reveal.initialize()` into `Meteor.startup` function

```
if (Meteor.isClient) {
        Meteor.startup( function() {
                Reveal.initialize({
                        loop: true,
                        controls: false,
                        progress: false,
                        autoSlide: 2800
                });
        });
}
```

CSS: Import theme file

```
@import url(packages/reveal-js/reveal.js/css/theme/default.css);
```

Demo
----

See sample application running at http://reveal-js.meteor.com/

Source files are available at https://github.com/neo-technologies/meteor-reveal-js-demo
