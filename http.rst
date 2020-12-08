:data-transition-duration: 1000
:skip-help: true
:css: style.css
:substep: true
:slide-numbers: true

----

Internet
===================

.. image:: img/internet/Simplified-structure-of-the-Internet.jpg
   :align: center

.. ::

	https://www.researchgate.net/figure/1-Simplified-structure-of-the-Internet_fig15_305443420
	
----

http
===================================================
URL
-----------------------------------------------------------------------------------------
.. image:: img/http1urlstructure.png
   :align: center

----

.. image:: img/http/01.png
   :align: center

----

.. image:: img/http/02.png
   :align: center


----

.. image:: img/http/03.png
   :align: center

----

https://www.whizlabs.com/blog/how-dns-works/

.. image:: img/http/dns.png
   :align: center

----

.. image:: img/http/04.png
   :align: center


----

.. image:: img/http/05.png
   :align: center

----

.. image:: img/http/06.png
   :align: center


----

.. image:: img/http/07.png
   :align: center

----

.. image:: img/http/08.png
   :align: center


----

.. image:: img/http/09.png
   :align: center


----

.. image:: img/http/10.png
   :align: center


----

.. image:: img/http/11.png
   :align: center


----

.. image:: img/http/12.png
   :align: center

----

.. image:: img/http/13.png
   :align: center

----

.. image:: img/http/14.png
   :align: center

----

.. image:: img/internet/browser_internet_website_visit_process.jpg
   :align: center

How-The-Web-Works.jfif
https://twitter.com/kamranahmedse/status/1297131414190776320/photo/1
https://www.knowbe4.com/hubfs/How-The-Web-Works.jfif
https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a


----

Instructions
======================
.. class:: substep

*  GET: fetch an existing resource. The URL contains all the necessary information the server needs to locate and return the resource.
*  POST: create a new resource. POST requests usually carry a payload that specifies the data for the new resource.
*  PUT: update an existing resource. The payload may contain the updated data for the resource.
*  DELETE: delete an existing resource.

----

Other Instructions
====================
.. class:: substep

*  HEAD: this is similar to GET, but without the message body. It's used to retrieve the server headers for a particular resource, generally to check if the resource has changed, via timestamps.
*  TRACE: used to retrieve the hops that a request takes to round trip from the server. Each intermediate proxy or gateway would inject its IP or DNS name into the Via header field. This can be used for diagnostic purposes.
*  OPTIONS: used to retrieve the server capabilities. On the client-side, it can be used to modify the request based on what the server can support.

----

Types of messages
==================================================================
1xx: Informational Messages
------------------------------------------------------------------
All HTTP/1.1 clients are required to accept the Transfer-Encoding header.

----

2xx: Successful
======================
.. class:: substep

*  202 Accepted: the request was accepted but may not include the resource in the response. This is useful for async processing on the server side. The server may choose to send information for monitoring.
*  204 No Content: there is no message body in the response.
*  205 Reset Content: indicates to the client to reset its document view.
*  206 Partial Content: indicates that the response only contains partial content. Additional headers indicate the exact range and content expiration information.

----

3xx: Redirection
========================
.. class:: substep

*  301 Moved Permanently: the resource is now located at a new URL.
*  303 See Other: the resource is temporarily located at a new URL. The Location response header contains the temporary URL.
*  304 Not Modified: the server has determined that the resource has not changed and the client should use its cached copy. This relies on the fact that the client is sending ETag (Enttity Tag) information that is a hash of the content. The server compares this with its own computed ETag to check for modifications.

----

4xx: Client Error
=======================
.. class:: substep

*  400 Bad Request: the request was malformed.
*  401 Unauthorized: request requires authentication. The client can repeat the request with the Authorization header. If the client already included the Authorization header, then the credentials were wrong.
*  403 Forbidden: server has denied access to the resource.
*  405 Method Not Allowed: invalid HTTP verb used in the request line, or the server does not support that verb.
*  409 Conflict: the server could not complete the request because the client is trying to modify a resource that is newer than the client's timestamp. Conflicts arise mostly for PUT requests during collaborative edits on a resource.

----

http Authentication
=======================

.. class:: substep

  http://natas0.natas.labs.overthewire.org/

----

5xx: Server Error
=====================
.. class:: substep

*  501 Not Implemented: the server does not yet support the requested functionality.
*  503 Service Unavailable: this could happen if an internal system on the server has failed or the server is overloaded. Typically, the server won't even respond and the request will timeout.

----

Types of headers
==================================================================
General Headers
-------------------------------------------------------------------
.. class:: substep

*  Via header is used in a TRACE message and updated by all intermittent proxies and gateways
*  Pragma is considered a custom header and may be used to include implementation-specific headers. The most commonly used pragma-directive is Pragma: no-cache, which really is Cache-Control: no-cache under HTTP/1.1. This will be covered in Part 2 of the article.
*  The Date header field is used to timestamp the request/response message
*  Upgrade is used to switch protocols and allow a smooth transition to a newer protocol.
*  Transfer-Encoding is generally used to break the response into smaller parts with the Transfer-Encoding: chunked value. This is a new header in HTTP/1.1 and allows for streaming of response to the client instead of one big payload.

----

Entity headers
=========================
.. class:: substep

*  Allow                    
*  Content-Encoding  
*  Content-Language  
*  Content-Length    
*  Content-Location  
*  Content-MD5       
*  Content-Range     
*  Content-Type      
*  Expires           
*  Last-Modified

----
               
Request Format
=========================
address binding, loader
-------------------------------------
.. image:: img/http_get_header.png
   :align: center

----

.. image:: img/http_get_timing.png
   :align: center

----

Invalid IP Address
======================

* https://smallbusiness.chron.com/ip-address-invalid-68006.html
* https://en.wikipedia.org/wiki/Reserved_IP_addresses
* https://en.wikipedia.org/wiki/IP_address


----

NAT
========================================
Network Address Translation
-------------------------------
.. image:: img/internet/NAT_Concept.svg
    :align: center

https://en.wikipedia.org/wiki/Network_address_translation

----

http2
============
* https://www.geeksforgeeks.org/computer-organization-basic-computer-instructions/
* https://www.digitalocean.com/community/tutorials/http-1-1-vs-http-2-what-s-the-difference
* https://www.cloudflare.com/learning/performance/http2-vs-http1.1/

----

References(1)
===============
http methods
-----------------
* https://restfulapi.net/http-methods/
* https://www.w3schools.com/tags/ref_httpmethods.asp

----

References(2)
===============
Checksum
---------------
* http://www.emcu.it/CRC/CRCuk.html
* https://en.wikipedia.org/wiki/Cyclic_redundancy_check
* https://en.wikipedia.org/wiki/Hamming(7,4)
* https://www.thegeekstuff.com/2012/05/ip-header-checksum/
* 

----

Packet parts
===============
* https://en.wikipedia.org/wiki/User_Datagram_Protocol
* https://en.wikipedia.org/wiki/Header_check_sequence
* https://en.wikipedia.org/wiki/IPv4_header_checksum

----

.. comments:

    rst2html.py http.rst http.html --stylesheet=../../tools/farsi.css,html4css1.css

    https
    ===============================================================
    https://www.digitalocean.com/community/tutorials/http-1-1-vs-http-2-what-s-the-difference?utm_medium=email&utm_source=IaaN&utm_campaign=02142019
    https://www.digitalocean.com/community/tutorials?utm_medium=email&utm_source=IaaN&utm_campaign=02142019


    javascript differenct hash and crypto based algorithms
    ===============================================================

    https://gchq.github.io/CyberChef/

    https://onezero.medium.com/the-end-of-app-stores-is-rapidly-approaching-b972da395097?utm_medium=email&utm_source=topic+optin&utm_campaign=awareness&utm_content=20190529+web+nl&mkt_tok=eyJpIjoiWVdRMU1qTTVaR05oTURVMSIsInQiOiJsWVR2aWp3TnlXQk5yMEh1aVMyenFrR3NtaTRMVHRnWVNLSjdKYjRnYmgrRmZrWGU1TWI2Z0R4cldFWGxUVTF4ZTFPZkVna3ZMZDh4dnNzUnl3anFtUk1sS2FBM3YxVTJMWFZlSGhrcHRadm91RVRQTXQySm81M1hXc2JoTlVYQiJ9

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

    http cookie
    https://en.wikipedia.org/wiki/HTTP_cookie
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie
    https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
    https://networkencyclopedia.com/http-cookie/
    
    python 3 http server
    https://pymotw.com/3/http.server/
    https://gist.github.com/mdonkers/63e115cc0c79b4f6b8b3a6b797e485c7
    https://riptutorial.com/python/example/26748/basic-handling-of-get--post--put-using-basehttprequesthandler
    https://stackoverflow.com/questions/2121481/python3-http-server-post-example
    https://docs.python.org/3/library/http.server.html
    https://blog.anvileight.com/posts/simple-python-http-server/
    https://blog.anvileight.com/posts/simple-python-http-server/#do-get
    https://blog.anvileight.com/posts/simple-python-http-server/#do-post
    https://xlsxwriter.readthedocs.io/example_http_server3.html
    
    ubuntu nginx cgi
    https://www.howtoforge.com/serving-cgi-scripts-with-nginx-on-debian-squeeze-ubuntu-11.04-p3
    https://www.nginx.com/resources/wiki/start/topics/examples/fastcgiexample/
    https://www.nginx.com/resources/wiki/start/topics/examples/fcgiwrap/
    https://www.server-world.info/en/note?os=Ubuntu_18.04&p=nginx&f=5
    https://www.server-world.info/en/note?os=CentOS_8&p=nginx&f=6
       
    Inernet History
    https://cs.stanford.edu/people/eroberts/courses/soco/projects/2003-04/internet-2/architecture.html
    https://cyber.harvard.edu/digitaldemocracy/internetarchitecture.html
    https://en.wikipedia.org/wiki/Internet
    
    world wide web www    
    https://en.wikipedia.org/wiki/World_Wide_Web#WWW_prefix
    
    
    xampp place of static htmls
    https://itstillworks.com/create-computer-shortcut-5899688.html
    https://stackoverflow.com/questions/18555699/how-to-store-html-files-on-an-xampp-test-server
    
