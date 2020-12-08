بش.. meta::
   :http-equiv=Content-Language: fa

..  section-numbering::


.. role:: ltr
    :class: ltr

===================================================
مروری بر روند javascript
===================================================


https://javascript.info/object
https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
https://dev.to/srebalaji/es6-for-beginners-with-example-c7
https://www.codecademy.com/courses/introduction-to-javascript/projects/mini-linter
https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators?action=resume_content_item
https://www.w3schools.com/js/DEFAULT.asp
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/
https://www.guru99.com/learn-functions-in-javascript-in-5-minutes.html
https://www.learn-js.org/en/Contributing_Tutorials
https://programmingspirit.com/learn-javascript/

http://ecma-international.org/

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript

https://www.udacity.com/course/intro-to-javascript--ud803

https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/getting-started/README.md
https://github.com/getify/You-Dont-Know-JS/tree/1st-ed
https://github.com/getify/You-Dont-Know-JS
https://snipcart.com/blog/functional-programming-paradigm-concepts
https://auth0.com/blog/glossary-of-modern-javascript-concepts/
https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks
https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70
https://snipcart.com/blog/javascript-podcasts
https://frontendmasters.com/teachers/kyle-simpson/


console.log
console.dir
console.info
console.warn
console.error

console.group('name of group for next messages')

console.groupEnd(); /* End of group messages */


console.groupCollapsed("name of collapsed group")

console.groupEnd()


console.time("bigLoop");
for( let i = 10000000; i>0; i--){}
console.timeEnd("bigLoop")


console.assert(
  document.querySelectorAll('nav ol>li') === 2,
  "Sorry"
);



selector
========================================================================================

document.getElementById("IdOfAnElement")

document.getElementByTagName("tagName")

document.getElementByClass("nameOfClass")

document.querySelector(".exmapleClass")

document.querySelector("#exmapleId")

document.querySelector("p"); 

document.querySelector("p.example"); 

document.querySelector("#demo").innerHTML = "Hello World!";
 
document.querySelector("div > p"); 

document.querySelector("a[target]"); 

<h2>A h2 element</h2>
<h3>A h3 element</h3>

document.querySelector("h2, h3").style.backgroundColor = "red"; 



// Get all <p> elements in the document
var x = document.querySelectorAll("p");

// Set the background color of the first <p> element
x[0].style.backgroundColor = "red"; 




// Get all <p> elements in the document with class="example"
var x = document.querySelectorAll("p.example");

// Set the background color of the first <p> element with class="example" (index 0)
x[0].style.backgroundColor = "red";



var x = document.querySelectorAll(".example").length; 
 

var x = document.querySelectorAll(".example");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
} 



var x = document.querySelectorAll("p");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
} 




var x = document.querySelectorAll("a[target]");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.border = "10px solid red";
} 


var x = document.querySelectorAll("div > p");
var i;
for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "red";
} 




<div id="foo\bar"></div>
<div id="foo:bar"></div>

<script>
  console.log('#foo\bar');               // "#fooar" (\b is the backspace control character)
  document.querySelector('#foo\bar');    // Does not match anything

  console.log('#foo\\bar');              // "#foo\bar"
  console.log('#foo\\\\bar');            // "#foo\\bar"
  document.querySelector('#foo\\\\bar'); // Match the first div

  document.querySelector('#foo:bar');    // Does not match anything
  document.querySelector('#foo\\:bar');  // Match the second div
</script>




/* Selectors can also be really powerful, as demonstrated in the following example. Here, the first <input> element with the name "login" (<input name="login"/>) located inside a <div> whose class is "user-panel main" (<div class="user-panel main">) in the document is returned: */
var el = document.querySelector("div.user-panel.main input[name='login']"); 



var el = document.body.querySelector("style[type='text/css'], style:not([type])");

HTML

<div>
  <h5>Original content</h5>
  <p>
    inside paragraph
    <span>inside span</span>
    inside paragraph
  </p>
</div>
<div>
  <h5>Output</h5>
  <div id="output"></div>
</div>


JavaScript

var baseElement = document.querySelector("p");
document.getElementById("output").innerHTML =
         (baseElement.querySelector("div span").innerHTML);
 

Browser compatibility
====================================================================================================

Supporting old browsers without hurting everyone
----------------------------------------------------------------------------------------------------
https://sgom.es/posts/2019-03-06-supporting-old-browsers-without-hurting-everyone/?&utm_medium=email&utm_source=topic+optin&utm_campaign=awareness&utm_content=20190327+web+nl&mkt_tok=eyJpIjoiT0RSbU16Z3pPVGhtT0dZdyIsInQiOiIyUlBKMjFLUVdMQTdONnVDRUJYMFl4M1lsTVFGeVNveXVxOFNlbmFjK2tJT29zT2dDY2xlYTRsRU1VYVpjN0hjcmZwNFZ6RERFR1pTQ2MrV2srZFhkYlZtSDVsaUZPRWVZazlcL0pMZyt0UVhaVGhkUUZBY1wvXC9CTW9vRFNyY1wvM1QifQ%3D%3D


Event loop: tasks, microtasks, requestAnimationFrame, requestIdleCallback, and where events land
====================================================================================================

https://www.youtube.com/watch?v=cCOL7MC4Pl0&feature=youtu.be

Have you ever had a bug where things were happening in the wrong order, or particular style changes were being ignored? Ever fixed that bug by wrapping a section of code in a setTimeout? Ever found that fix to be unreliable, and played around with the timeout number until it kinda almost always worked? 
This talk looks at the browser's event loop, the thing that orchestrates the main thread of the browser, which includes JavaScript, events, and rendering. We'll look at the difference between tasks, microtasks, requestAnimationFrame, requestIdleCallback, and where events land. 
Hopefully you'll never have to use setTimeout hacks again!"

Jake is developer advocate for Google Chrome. He's one of the editors of the service worker spec, so he's into offline-first, push messaging and web performance.

forms
========
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
https://www.tutorialspoint.com/html/html_forms.htm
https://www.w3schools.com/html/html_forms.asp
https://www.w3schools.com/tags/tag_form.asp


Fetch
==================================================
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://codingthesmartway.com/fetch-api-introduction-to-promised-based-data-fetching-in-plain-javascript/
https://mdn.github.io/fetch-examples/fetch-text/
https://stackoverflow.com/questions/53875205/javascript-fetch-and-then-innerhtml-problems
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
https://javascript.info/fetch
https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
https://appdividend.com/2018/08/20/javascript-fetch-api-example-tutorial/
https://gist.github.com/justsml/529d0b1ddc5249095ff4b890aad5e801
https://github.com/mdn/fetch-examples/blob/master/fetch-text/index.html
https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/
https://css-tricks.com/using-fetch/
https://create-react-app.dev/docs/fetching-data-with-ajax-requests/
https://dev.to/nikola/making-ajax-calls-using-the-fetch-api-7b1
https://www.sitepoint.com/xmlhttprequest-vs-the-fetch-api-whats-best-for-ajax-in-2019/

Cheat sheet for moving from jQuery to vanilla JavaScript
====================================================================================================
https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/

JQuery is still a useful and pragmatic library, but chances are increasingly that you’re not dependent on using it in your projects to accomplish basic tasks like selecting elements, styling them, animating them, and fetching data—things that jQuery was great at. With broad browser support of ES6 (over 96% at the time of writing), now is probably a good time to move away from jQuery.

I recently removed jQuery from this blog and found myself googling for some of the patterns over and over again. To spare you the time, I’ve compiled this practical reference guide with some of the most common jQuery patterns and their equivalents in JavaScript. We’ll cover how to move over to vanilla JavaScript from these concepts and functions:

Selecting elements
----------------------------------------------------------------------------------------------------
Selecting one or several DOM elements to do something with is one of the most basic elements of jQuery. The equivalent to $() or jQuery() in JavaScript is querySelector() or querySelectorAll(), which, just like with jQuery, you can call with a CSS selector.

.. code:: javascript

    // jQuery, select all instances of .box
    $(".box");

    // Instead, select the first instance of .box
    document.querySelector(".box");

    // …or select all instances of .box  
    document.querySelectorAll(".box");

Running a function on all elements in a selection
----------------------------------------------------------------------------------------------------
querySelectorAll() returns a NodeList containing all of the elements matching the query. Whereas you can run a function with jQuery on the entire selection of elements simply by calling the method on the jQuery object, however, you’ll have to loop over the NodeList of elements using NodeList.forEach() in vanilla JavaScript:

.. code:: javascript

    // with jQuery
    // Hide all instances of .box
    $(".box").hide();

    // Without jQuery
    // Loop over the nodelist of elements to hide all instances of .box
    document.querySelectorAll(".box").forEach(box => { box.style.display = "none" }

Finding one element within another
----------------------------------------------------------------------------------------------------
A common jQuery pattern is to select an element within another element using .find(). You can achieve the same effect, scoping the selection to an element’s children, by calling querySelector or querySelectorAll on an element:

.. code:: javascript

    // With jQuery
    // Select the first instance of .box within .container
    var container = $(".container");
    // Later...
    container.find(".box");

    // Without jQuery
    // Select the first instance of .box within .container
    var container = document.querySelector(".container");
    // Later...
    container.querySelector(".box");

Traversing the tree with parent(), next(), and prev()
----------------------------------------------------------------------------------------------------
If you wish to traverse the DOM to select a subling or a parent element relative to another element, you can access them through nextElementSibling, previousElementSibling and parentElement on that element:

.. code:: javascript

    // with jQuery
    // Return the next, previous, and parent element of .box
    $(".box").next();
    $(".box").prev();
    $(".box").parent();

    // Without jQuery
    // Return the next, previous, and parent element of .box
    var box = document.querySelector(".box");
    box.nextElementSibling;
    box.previousElementSibling;
    box.parentElement;

Working with events
----------------------------------------------------------------------------------------------------
There’s a myriad of ways to listen to events in jQuery, but whether you’re using .on(), .bind(), .live or .click(), you’ll make do with the JavaScript equivalent .addEventListener:

.. code:: javascript

    // With jQuery
    $(".button").click(function(e) { /* handle click event */ });
    $(".button").mouseenter(function(e) {  /* handle click event */ });
    $(document).keyup(function(e) {  /* handle key up event */  });

    // Without jQuery
    document.querySelector(".button").addEventListener("click", (e) => { /* ... */ });
    document.querySelector(".button").addEventListener("mouseenter", (e) => { /* ... */ });
    document.addEventListener("keyup", (e) => { /* ... */ });

Event listening for dynamically added elements
----------------------------------------------------------------------------------------------------
jQuery’s .on() method enables you to work with “live” event handlers, where you listen to events on objects that get dynamically added to the DOM. To accomplish something similar without jQuery you can attach the event handler on an element as you add it to the DOM:

.. code:: javascript

    // With jQuery
    // Handle click events .search-result elements, 
    // even when they're added to the DOM programmatically
    $(".search-container").on("click", ".search-result", handleClick);

    // Without jQuery
    // Create and add an element to the DOM
    var searchElement = document.createElement("div");
    document.querySelector(".search-container").appendChild(searchElement);
    // Add an event listener to the element
    searchElement.addEventListener("click", handleClick);

Triggering and creating events
----------------------------------------------------------------------------------------------------
The equivalent to manually triggering events with trigger() can be achieved by calling dispatchEvent(). The dispatchEvent() method can be invoked on any element, and takes an Event as the first argument:

.. code:: javascript

    // With jQuery
    // Trigger myEvent on document and .box
    $(document).trigger("myEvent");
    $(".box").trigger("myEvent");

    // Without jQuery
    // Create and dispatch myEvent
    document.dispatchEvent(new Event("myEvent"));
    document.querySelector(".box").dispatchEvent(new Event("myEvent"));

Styling elements
----------------------------------------------------------------------------------------------------
If you’re calling .css() on an element to change its inline CSS with jQuery, you’d use .style in JavaScript and assign values to its different properties to achieve the same effect:

.. code:: javascript

    // With jQuery
    // Select .box and change text color to #000
    $(".box").css("color", "#000");

    // Without jQuery
    // Select the first .box and change its text color to #000
    document.querySelector(".box").style.color = "#000";

With jQuery, you can pass an object with key-value pairs to style many properties at once. In JavaScript you can set the values one at a time, or set the entire style string:

.. code:: javascript

    // With jQuery
    // Pass multiple styles
    $(".box").css({
      "color": "#000",
      "background-color": "red"
    });

    // Without jQuery
    // Set color to #000 and background to red
    var box = document.querySelector(".box");
    box.style.color = "#000";
    box.style.backgroundColor = "red";

    // Set all styles at once (and override any existing styles)
    box.style.cssText = "color: #000; background-color: red";

hide() and show()
----------------------------------------------------------------------------------------------------
The .hide() and .show() convenience methods are equivalent to accessing the .style property and setting display to none and block:

.. code:: javascript

    // With jQuery
    // Hide and show and element
    $(".box").hide();
    $(".box").show();

    // Without jQuery
    // Hide and show an element by changing "display" to block and none
    document.querySelector(".box").style.display = "none";
    document.querySelector(".box").style.display = "block";

Document ready
----------------------------------------------------------------------------------------------------
If you need to wait for the DOM to fully load before e.g. attaching events to objects in the DOM, you’d typically use $(document).ready() or the common short-hand $() in jQuery. We can easily construct a similar function to replace it with by listening to DOMContentLoaded:

.. code:: javascript

    // With jQuery
    $(document).ready(function() { 
      /* Do things after DOM has fully loaded */
    });

    // Without jQuery
    // Define a convenience method and use it
    var ready = (callback) => {
      if (document.readyState != "loading") callback();
      else document.addEventListener("DOMContentLoaded", callback);
    }

    ready(() => { 
      /* Do things after DOM has fully loaded */ 
    });


Working with classes
----------------------------------------------------------------------------------------------------
You can easily access and work with classes through the classList property to toggle, replace, add, and remove classes:

.. code:: javascript

    // With jQuery
    // Add, remove, and the toggle the "focus" class
    $(".box").addClass("focus");
    $(".box").removeClass("focus");
    $(".box").toggleClass("focus");

    // Without jQuery
    // Add, remove, and the toggle the "focus" class
    var box = document.querySelector(".box");
    box.classList.add("focus");
    box.classList.remove("focus");
    box.classList.toggle("focus");

If you want to remove or add multiple classes you can just pass multiple arguments to .add() and .remove():

.. code:: javascript

    // Add "focus" and "highlighted" classes, and then remove them
    var box = document.querySelector(".box");
    box.classList.add("focus", "highlighted");
    box.classList.remove("focus", "highlighted");

If you’re toggling two classes that are mutually exclusive, you can access the classList property and call .replace() to replace one class with another:

.. code:: javascript

  // Remove the "focus" class and add "blurred"
  document.querySelector(".box").classList.replace("focus", "blurred");

Checking if an element has a class
----------------------------------------------------------------------------------------------------
If you only want to run a function depending on if an element has a certain class, you can replace jQuery’s .hasClass() with .classList.contains():

.. code:: javascript

    // With jQuery
    // Check if .box has a class of "focus", and do something
    if ($(".box").hasClass("focus")) {
      // Do something...
    }

    // Without jQuery
    // Check if .box has a class of "focus", and do something
    if (document.querySelector(".box").classList.contains("focus")) {
      // Do something...
    }


Network requests with .get() or .ajax()
----------------------------------------------------------------------------------------------------
feth() lets you create network requests in a similar fashion to jQuery’s ajax() and get() methods. fetch() takes a URL as an argument, and returns a Promise that you can use to handle the response:

.. code:: javascript

    // With jQuery
    $.ajax({
        url: "data.json"
      }).done(function(data) {
        // ...
      }).fail(function() {
        // Handle error
      });

    // Without jQuery
    fetch("data.json")
      .then(data => {
        // Handle data
      }).catch(error => {
        // Handle error
      });


Creating elements
----------------------------------------------------------------------------------------------------
If you want to dynamically create an element in JavaScript to add to the DOM you can call createElement() on document and pass it a tag name to indicate what element you want to create:

.. code:: javascript

    // Create a div & span
    $("<div/>");
    $("<span/>");

    // Create a div and a span
    document.createElement("div");
    document.createElement("span");

If you want to add some content to those elements, you can simply set the textContent property, or create a text node with createTextNode and append it to the element:

.. code:: javascript

    var element = document.createElement("div");
    element.textContent = "Text"
    // or create a textNode and append it
    var text = document.createTextNode("Text");
    element.appendChild(text);

Updating the DOM
----------------------------------------------------------------------------------------------------
If you’re looking to change the text of an element or to add new elements to the DOM chances are that you’ve come across innerHTML(), but using it may expose you to cross-site scripting (XSS) attacks. Although you can work around it and sanitize the HTML, there are some safer alternatives.

If you’re only looking to read or update the text of an element, you can use the textContent property of an object to return the current text, or update it:

.. code:: javascript

    // With jQuery
    // Update the text of a .button
    $(".button").text("New text");
    // Read the text of a .button
    $(".button").text(); // Returns "New text"

    // Without jQuery
    // Update the text of a .button
    document.querySelector(".button").textContent = "New text";
    // Read the text of a .button
    document.querySelector(".button").textContent; // Returns "New text"

If you’re constructing a new element, you can then add that element to another element by using the method on the parent appendChild():

.. code:: javascript

    // Create div element and append it to .container
    $(".container").append($("<div/>"));

    // Create a div and append it to .container
    var element = document.createElement("div");
    document.querySelector(".container").appendChild(element);

Put together, here’s how to create a div, update its text and class, and add it to the DOM:

.. code:: javascript

    // Create a div
    var element = document.createElement("div");

    // Update its class
    element.classList.add("box");

    // Set its text
    element.textContent = "Text inside box";

    // Append the element to .container
    document.querySelector(".container").appendChild(element);

In summary
----------------------------------------------------------------------------------------------------
This is by no means a comprehensive guide to any of the native JavaScript methods utilized here, but I hope it’s been helpful a guide if you’re looking to move away from jQuery. In summary, here are the methods that we’ve covered:

*    Selecting elements with querySelector and querySelectorAll
*    Listening for events with addEventListener
*    Updating CSS and styles through style property
*    Working with classes through the classList property
*    AJAX requests with fetch
*    Triggering events with dispatchEvent
*    Creating elements with createElement
*    Updating text through the textContent property
*    Adding elements to the DOM with appendChild


DOM and javascript
==================================================
JS HTML DOM
https://www.w3schools.com/js/js_htmldom.asp
https://gabrieltanner.org/blog/javascript-dom-introduction
https://www.tutorialspoint.com/javascript/javascript_html_dom.htm
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

Audio with javascript
==================================================
Click anywhere on the image to select a pixel row to hear 🎧🔊
(Dark colours give deeper, longer notes)
https://codepen.io/2Mogs/pen/LYYpNvg

https://vuejs.org/
==================================================
https://vuejs.org/

The Progressive JavaScript Framework

https://github.com/vuejs/vue


https://electronjs.org/
==================================================
https://electronjs.org/

Build cross platform desktop apps with JavaScript, HTML, and CSS 

If you can build a website, you can build a desktop app. Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

https://github.com/electron/electron-api-demos/releases

https://github.com/electron

https://github.com/electron/electron

https://github.com/electron/electron/releases

Typescript
==================================================
https://medium.com/m/global-identity?redirectUrl=https%3A%2F%2Fitnext.io%2Fchoosing-typescript-vs-javascript-technology-popularity-ea978afd6b5f%3Futm_medium%3Demail%26utm_source%3Dtopic%2520optin%26utm_campaign%3Dawareness%26utm_content%3D20190529%2520web%2520nl%26mkt_tok%3DeyJpIjoiWVdRMU1qTTVaR05oTURVMSIsInQiOiJsWVR2aWp3TnlXQk5yMEh1aVMyenFrR3NtaTRMVHRnWVNLSjdKYjRnYmgrRmZrWGU1TWI2Z0R4cldFWGxUVTF4ZTFPZkVna3ZMZDh4dnNzUnl3anFtUk1sS2FBM3YxVTJMWFZlSGhrcHRadm91RVRQTXQySm81M1hXc2JoTlVYQiJ9

References:
==================================================

*  `https://developer.mozilla.org`_
*  `https://www.w3schools.com`_
*  `https://jsfiddle.net`_
*  `https://codepen.io`_
*  https://medium.com/javascript-in-plain-english/understanding-closures-in-javascript-in-3-minutes-557ebb8a215b?utm_medium=email&utm_source=topic+optin&utm_campaign=awareness&utm_content=20190327+web+nl&mkt_tok=eyJpIjoiT0RSbU16Z3pPVGhtT0dZdyIsInQiOiIyUlBKMjFLUVdMQTdONnVDRUJYMFl4M1lsTVFGeVNveXVxOFNlbmFjK2tJT29zT2dDY2xlYTRsRU1VYVpjN0hjcmZwNFZ6RERFR1pTQ2MrV2srZFhkYlZtSDVsaUZPRWVZazlcL0pMZyt0UVhaVGhkUUZBY1wvXC9CTW9vRFNyY1wvM1QifQ%3D%3D
*  https://medium.com/better-programming/learning-how-to-learn-javascript-1989eeae2122?utm_medium=email&utm_source=topic+optin&utm_campaign=awareness&utm_content=20190529+web+nl&mkt_tok=eyJpIjoiWVdRMU1qTTVaR05oTURVMSIsInQiOiJsWVR2aWp3TnlXQk5yMEh1aVMyenFrR3NtaTRMVHRnWVNLSjdKYjRnYmgrRmZrWGU1TWI2Z0R4cldFWGxUVTF4ZTFPZkVna3ZMZDh4dnNzUnl3anFtUk1sS2FBM3YxVTJMWFZlSGhrcHRadm91RVRQTXQySm81M1hXc2JoTlVYQiJ9
*  

https://developer.mozilla.org/en-US/docs/Web/API/Body/text

symbol

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

.. comments:

    rst2html.py http.rst http.html --stylesheet=../../tools/farsi.css,html4css1.css

    https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    https://en.wikipedia.org/wiki/HTTP/2
    https://en.wikipedia.org/wiki/HTTPS
    https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
    https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    https://en.wikipedia.org/wiki/Representational_state_transfer
    https://en.wikipedia.org/wiki/Roy_Fielding
    https://www.dartlang.org/tutorials/dart-vm/httpserver
    http://www.wpbeginner.com/wp-tutorials/how-to-add-ssl-and-https-in-wordpress/
    https://www.tutorialspoint.com/security_testing/https_protocol_basics.htm
    https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/HTTP_Basics.html
    https://developer.mozilla.org/en-US/docs/Web/HTTP
    https://en.wikipedia.org/wiki/Basic_access_authentication
    https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
    https protocol tutorial




Enterprise Web Development. From Desktop to Mobile
- See more at: http://www.onlineprogrammingbooks.com/enterprise-web-development-from-desktop-to-mobile/#sthash.VFQQxONm.dpuf

http://www.onlineprogrammingbooks.com/enterprise-web-development-from-desktop-to-mobile/
https://github.com/Farata/EnterpriseWebBook 

http://web-engineering.info/tech/JsFrontendApp/book/
https://www.codeschool.com/learn/javascript
http://www.javascriptkit.com/
https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics
https://developer.mozilla.org/en-US/Learn/JavaScript
http://blog.watchandcode.com/2016/03/17/the-single-piece-of-javascript-on-hacker-news/
https://www.codecademy.com/learn/javascript
https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--goinghttps://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going
https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond
https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/ch1.md
https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch1.md
https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/README.md#you-dont-know-js-async--performance
https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch1.md
https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch1.md

http://joshondesign.com/p/books/canvasdeepdive/title.html
http://chimera.labs.oreilly.com/books/1234000001654/index.html



https://portswigger.net/web-security/cross-site-scripting
https://owasp.org/www-community/attacks/xss/
https://en.wikipedia.org/wiki/Cross-site_scripting
