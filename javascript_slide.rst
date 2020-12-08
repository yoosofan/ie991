:data-transition-duration: 1000
:skip-help: true
:css: hovercraft_style.css
:substep: true

.. title: Ajax (By Ahmad Yoosofan)

:slide-numbers: true

.. role:: ltr
    :class: ltr

.. role:: rtl
    :class: rtl

DOM manipulation
======================
https://eslint.org

----

Ajax
===================================================
Single Page Application (SPA)
--------------------------------

* Send and receive part of html
* Send and receive Json

cons
-----

Search Enginges cannot index website 

Search Engine Optimization(SEO)

----

History
============
JSON grew out of a need for stateless, real-time server-to-browser communication protocol without using browser plugins such as Flash or Java applets, the dominant methods used in the early 2000s.

----

JSON Values
=================

.. class:: substep

    *   a string
    *   a number
    *   an object (JSON object)
    *   an array
    *   a boolean
    *   null

----

JSON Values
=================
.. class:: substep

    *   a string

    *   a number

    *   an object (JSON object)

    *   an array

    *   a boolean

    *   null

----

Sample
========
.. code:: javascript
    :number-lines:

    {
      "array": [
        1,
        2,
        3
      ],
      "boolean": true,
      "color": "#82b92c",
      "null": null,
      "number": 123,
      "object": {
        "a": "b",
        "c": "d",
        "e": "f"
      },
      "string": "Hello World"
    }

----

convert javascript to json
====================================

.. code:: javascript
    :number-lines:

    var myObj = {name: "John", age: 31, city: "New York"};
    var myJSON = JSON.stringify(myObj);
    window.location = "demo_json.php?x=" + myJSON;

----

convert json to javascript
============================

.. code:: javascript
    :number-lines:

    var myJSON = '{"name":"John", "age":31, "city":"New York"}';
    var myObj = JSON.parse(myJSON);
    document.getElementById("demo").innerHTML = myObj.name; 

----

storing json
=============

.. code:: javascript
    :number-lines:

    // Storing data:
    myObj = {name: "John", age: 31, city: "New York"};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("testJSON", myJSON);

    // Retrieving data:
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("demo").innerHTML = obj.name; 


----

Json vs XML
=============
.. code:: javascript
    :number-lines:

    {"employees":[
      { "firstName":"John", "lastName":"Doe" },
      { "firstName":"Anna", "lastName":"Smith" },
      { "firstName":"Peter", "lastName":"Jones" }
    ]}


.. code:: xml
    :number-lines:

    <employees>
      <employee>
        <firstName>John</firstName> <lastName>Doe</lastName>
      </employee>
      <employee>
        <firstName>Anna</firstName> <lastName>Smith</lastName>
      </employee>
      <employee>
        <firstName>Peter</firstName> <lastName>Jones</lastName>
      </employee>
    </employees>

----

Ajax json
===========

.. code:: javascript
    :number-lines:

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.name;
      }
    };
    xmlhttp.open("GET", "json_demo.txt", true);
    xmlhttp.send(); 

----

JSON for table
=================

.. code:: javascript
    :number-lines:

    obj = { table: "customers", limit: 20 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<table border='1'>"
        for (x in myObj) {
          txt += "<tr><td>" + myObj[x].name + "</td></tr>";
        }
        txt += "</table>"
        document.getElementById("demo").innerHTML = txt;
      }
    }
    xmlhttp.open("POST", "json_demo_db_post.php", true);
    xmlhttp.setRequestHeader("Content-type", 
        "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam); 

----

sql
====
.. code:: sql
    :number-lines:

    select json_build_object( 'name ', name) 
    from customer  limit 20;

.. code:: python
    :number-lines:

    qs ="select json_build_object( 'name ', name) "
    qs+=" from " + table_name + "limit " 
    qs+= record_limit + ";"
    res= await self.db.q(qs,'a')
    self.write(tornado.escape.json_encode(res))


----

.. code:: javascript
    :number-lines:

    //Create the XHR Object
    const xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', 'https://api.github.com/users', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    console.log(JSON.parse(this.responseText));
        }
                }
    //call send
    xhr.send();
    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN

----

.. code:: javascript
    :number-lines:

    fetch('https://api.github.com/users')
    .then(res => res.json())//response type
    .then(data => console.log(data)); //log the data;

----

.. code:: javascript
    :number-lines:

    async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://api.github.com/users');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
    //call getData function
    getData()
    .then(data => console.log(data));//log the data

----

.. code:: javascript
    :number-lines:

    var foo = null;
    fetch('https://jsonplaceholder.typicode.com/posts/1')
       .then(resp => resp.json())
       .then(obj => foo = obj)

----

.. code:: javascript
    :number-lines:

    fetch('http://example.com/movies.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });

----

.. code:: javascript
    :number-lines:

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }

    postData('https://example.com/answer', { answer: 42 })
      .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
      });

----

.. code:: javascript
    :number-lines:

        const data = { username: 'example' };

        fetch('https://example.com/profile', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

----

.. code:: javascript
    :number-lines:

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    formData.append('username', 'abc123');
    formData.append('avatar', fileField.files[0]);

    fetch('https://example.com/profile/avatar', {
      method: 'PUT',
      body: formData
    })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

----


.. code:: javascript
    :number-lines:

    const formData = new FormData();
    const photos = document.querySelector('input[type="file"][multiple]');

    formData.append('title', 'My Vegas Vacation');
    for (let i = 0; i < photos.files.length; i++) {
      formData.append('photos', photos.files[i]);
    }

    fetch('https://example.com/posts', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.json())
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);

----

.. code:: javascript
    :number-lines:

    async function* makeTextFileLineIterator(fileURL) {
      const utf8Decoder = new TextDecoder('utf-8');
      const response = await fetch(fileURL);
      const reader = response.body.getReader();
      let { value: chunk, done: readerDone } = await reader.read();
      chunk = chunk ? utf8Decoder.decode(chunk) : '';

      const re = /\n|\r|\r\n/gm;
      let startIndex = 0;
      let result;

      for (;;) {
        let result = re.exec(chunk);
        if (!result) {
          if (readerDone) {
            break;
          }
          let remainder = chunk.substr(startIndex);
          ({ value: chunk, done: readerDone } = await reader.read());
          chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
          startIndex = re.lastIndex = 0;
          continue;
        }
        yield chunk.substring(startIndex, result.index);
        startIndex = re.lastIndex;
      }
      if (startIndex < chunk.length) {
        // last line didn't end in a newline char
        yield chunk.substr(startIndex);
      }
    }

    async function run() {
      for await (let line of makeTextFileLineIterator(urlOfFile)) {
        processLine(line);
      }
    }

    run();

----

.. code:: javascript
    :number-lines:

    fetch('flowers.jpg')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((myBlob) => {
        myImage.src = URL.createObjectURL(myBlob);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });

----
      
.. code:: javascript
    :number-lines:

    const myHeaders = new Headers();

    const myRequest = new Request('flowers.jpg', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    });

    fetch(myRequest)
      .then((response) => response.blob())
      .then((myBlob) => {
        myImage.src = URL.createObjectURL(myBlob);
      });
  

----

.. code:: javascript
    :number-lines:

    const content = 'Hello World';
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'text/plain');
    myHeaders.append('Content-Length', content.length.toString());
    myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');

----

.. code:: javascript
    :number-lines:

    const myHeaders = new Headers({
      'Content-Type': 'text/plain',
      'Content-Length': content.length.toString(),
      'X-Custom-Header': 'ProcessThisImmediately'
    });

----

.. code:: javascript
    :number-lines:

    console.log(myHeaders.has('Content-Type')); // true
    console.log(myHeaders.has('Set-Cookie')); // false
    myHeaders.set('Content-Type', 'text/html');
    myHeaders.append('X-Custom-Header', 'AnotherValue');

    console.log(myHeaders.get('Content-Length')); // 11
    console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

    myHeaders.delete('X-Custom-Header');
    console.log(myHeaders.get('X-Custom-Header')); // [ ]

----

.. code:: javascript
    :number-lines:

    const myResponse = Response.error();
    try {
      myResponse.headers.set('Origin', 'http://mybank.com');
    } catch (e) {
      console.log('Cannot pretend to be a bank!');
    }

----

.. code:: javascript
    :number-lines:

    fetch(myRequest)
      .then((response) => {
         const contentType = response.headers.get('content-type');
         if (!contentType || !contentType.includes('application/json')) {
           throw new TypeError("Oops, we haven't got JSON!");
         }
         return response.json();
      })
      .then((data) => {
          /* process your data further */
      })
      .catch((error) => console.error(error));

----
  
.. code:: javascript
    :number-lines:

    const myBody = new Blob();

        addEventListener('fetch', function(event) {
          // ServiceWorker intercepting a fetch
          event.respondWith(
            new Response(myBody, {
              headers: { 'Content-Type': 'text/plain' }
            })
          );
        });

----

.. code:: javascript
    :number-lines:

    const form = new FormData(document.getElementById('login-form'));
    fetch('/login', {
      method: 'POST',
      body: form
    });

----



.. note:

    .. image:: img/memory_precess_addressing_parts.png
       :align: center
    https://www.w3schools.com/js/js_json_xml.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    https://stackoverflow.com/questions/26337969/how-to-decode-an-email-attachment-received-as-a-base64-text
    https://en.wikipedia.org/wiki/Base64
    https://ietf.org/
    https://superuser.com/questions/213563/how-can-i-extract-an-attachment-from-the-email-body-encoded-as-base64
    https://en.wikipedia.org/wiki/JSON
    https://www.w3schools.com/js/js_json_intro.asp
    https://www.w3schools.com/js/js_ajax_intro.asp
    https://www.ecma-international.org/publications/standards/Ecma-262.htm
    https://en.wikipedia.org/wiki/JSON
    https://www.w3schools.com/js/js_json_intro.asp    
    https://bob.ippoli.to/archives/2005/12/05/remote-json-jsonp/
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
    https://jsoneditoronline.org/
    https://www.quora.com/How-do-I-send-a-person-details-and-several-images-via-JSON-in-Android
    https://dotnetcoretutorials.com/2018/07/21/uploading-images-in-a-pure-json-api/
    https://stackoverflow.com/questions/34485420/how-do-you-put-an-image-file-in-a-json-object
    

