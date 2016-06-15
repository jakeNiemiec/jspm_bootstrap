#### Setting Up

Run
```shell
git clone git@github.com:jakeNiemiec/jspm_bootstrap.git
npm i
npm start
```

Open `http://localhost:8080/`

###Expected Output
(in chrome console)
```error
index.js:4 Bootstrap: ( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return ne…
index.js:5 jQuery aliased as `$` ( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return ne…
index.js:6 Test jQuery [body, prevObject: jQuery.fn.init[1], context: document, selector: "body"]0: bodycontext: documentlength: 1prevObject: jQuery.fn.init[1]selector: "body"__proto__: Object[0]
```