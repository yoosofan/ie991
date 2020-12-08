###############
Web framework
###############

..  section-numbering::

Description
#############
A web framework (WF) or web application framework (WAF) is a software framework that is designed to support the development of web applications including web services, web resources, and web APIs. Web frameworks provide a standard way to build and deploy web applications on the World Wide Web. Web frameworks aim to automate the overhead associated with common activities performed in web development. For example, many web frameworks provide libraries for database access, templating frameworks, and session management, and they often promote code reuse.[1] Although they often target development of dynamic web sites, they are also applicable to static websites.[2]

Features
#########
Web template system
*********************
A web template system in web publishing lets web designers and developers work with web templates to automatically generate custom web pages, such as the results from a search. This reuses static web page elements while defining dynamic elements based on web request parameters. Web templates support static content, providing basic structure and appearance. Developers can implement templates from content management systems, web application frameworks, and HTML editors.

* A template engine: the primary processing element of the system;[1]
* Content resource: any of various kinds of input data streams, such as from a relational database, XML files, LDAP directory, and other kinds of local or networked data;
* Template resource: web templates specified according to a template language;

.. image:: img/web_framework/template_engine.svg
	 :align: center

Applications
===============
Web developers can use templates from any individual or organization to set up a website. Once they purchase or download a template, they replace all generic information in the web template with their personal, organizational, or product information. Templates are commonly used to:

* Display personal information or daily activities as in a blog
* Sell products online
* Display information about a company or organization
* Display family history
* Display a gallery of photos
* Place music files such as MP3 files on-line for play through a web browser
* Place videos online for public viewing
* Set up a private login area online

Kinds of template systems
===========================

A web browser and web server are a client–server architecture. Sites often also use a web cache to improve performance. Five templating system types are classified based on when they replace placeholders with real content and assemble pages.

* Server-side - run-time substitution happens on the web server
* Client-side - run-time substitution happens in the web browser
* Edge-side - run-time substitution happens on a proxy between web server and browser
* Outside server - static web pages are produced offline and uploaded to the web server; no run-time substitution
* Distributed - run-time substitution happens on multiple servers

Template languages may be:

* Embedded or event-driven.
* Simple, iterable, programmable, or complex.
* Defined by a consortium, privately defined, or de facto defined by an open implementation. Ownership influences the stability and credibility of a specification. However, in most jurisdictions, language specification cannot be copyrighted, so control is seldom absolute.

Jinja2
========
Jinja is a modern and designer-friendly templating language for Python, modelled after Django’s templates. It is fast, widely used and secure with the optional sandboxed template execution environment.

Jinja is a fast, expressive, extensible templating engine. Special placeholders in the template allow writing code similar to Python syntax. Then the template is passed data to render the final document.

It includes:

* Template inheritance and inclusion.
* Define and import macros within templates.
* HTML templates can use autoescaping to prevent XSS from untrusted user input.
* A sandboxed environment can safely render untrusted templates.
* AsyncIO support for generating templates and calling async functions.
* I18N support with Babel.
* Templates are compiled to optimized Python code just-in-time and cached, or can be compiled ahead-of-time.
* Exceptions point to the correct line in templates to make debugging easier.
* Extensible filters, tests, functions, and even syntax.

Jinja's philosophy is that while application logic belongs in Python if possible, it shouldn't make the template designer's job difficult by restricting functionality too much.

.. code:: html

		<!DOCTYPE html>
		<html>
			<head>
				<title>{{ variable|escape }}</title>
			</head>
			<body>
			{%- for item in item_list %}
				{{ item }}{% if not loop.last %},{% endif %}
			{%- endfor %}
			</body>
		</html>

templating code

.. code:: python

		from jinja2 import Template
		with open('example.html.jinja') as f:
				tmpl = Template(f.read())
		print tmpl.render(
				variable = 'Value with <unsafe> data',
				item_list = [1, 2, 3, 4, 5, 6]
		)

This produces the HTML string:

.. code:: html

		<!DOCTYPE html>
		<html>
			<head>
				<title>Value with &lt;unsafe&gt; data</title>
			</head>
			<body>
				1,
				2,
				3,
				4,
				5,
				6
			</body>
		</html>


.. code:: html

		{% extends "base.html" %}
		{% block title %}Members{% endblock %}
		{% block content %}
			<ul>
			{% for user in users %}
				<li><a href="{{ user.url }}">{{ user.username }}</a></li>
			{% endfor %}
			</ul>
		{% endblock %}

install
------------
.. code:: sh

		pip install -U Jinja2
		pip3 install -U Jinja2

websites
-------------
* https://github.com/pallets/jinja
* https://jinja.palletsprojects.com/en
* https://pypi.org/project/Jinja2/

Mustache (template system)
=============================
Mustache is described as a "logic-less" system because it lacks any explicit control flow statements, like if and else conditionals or for loops; however, both looping and conditional evaluation can be achieved using section tags processing lists and lambdas.

It is named "Mustache" because of heavy use of braces, { }, that resemble a sideways moustache.

Mustache inspired numerous JavaScript template libraries which forked from the original simplicity to add certain functionality or use.

install (mustache.js)
------------------------
.. code:: sh

		npm install mustache --save

Command line tool
--------------------
.. code:: sh

		npm install -g mustache

		mustache dataView.json myTemplate.mustache > output.html

samples
--------
.. code:: javascript

		var view = {
			title: "Joe",
			calc: function () {
				return 2 + 4;
			}
		};

		var output = Mustache.render("{{title}} spends {{calc}}", view);

If you need a template for a dynamic part in a static website, you can consider including the template in the static HTML file to avoid loading templates separately. Here's a small example using jQuery:

.. code:: html

		<!DOCTYPE HTML>
		<html>
		<body onload="loadUser()">
		<div id="target">Loading...</div>
		<script id="template" type="x-tmpl-mustache">
		Hello {{ name }}!
		</script>
		</body>
		</html>

.. code:: javascript

		function loadUser() {
			var template = $('#template').html();
			Mustache.parse(template);   // optional, speeds up future uses
			var rendered = Mustache.render(template, {name: "Luke"});
			$('#target').html(rendered);
		}

View:
-------
.. code:: javascript

	{
		"stooges": [
			{ "name": "Moe" },
			{ "name": "Larry" },
			{ "name": "Curly" }
		]
	}

Template:
----------
.. code:: html

		{{#stooges}}
		<b>{{name}}</b>
		{{/stooges}}


Output:
--------------
.. code:: html

		<b>Moe</b>
		<b>Larry</b>
		<b>Curly</b>

View:
-------
.. code:: javascript

		{
			"musketeers": ["Athos", "Aramis", "Porthos", "D'Artagnan"]
		}

Template:
----------
.. code:: html

		{{#musketeers}}
		* {{.}}
		{{/musketeers}}

Output:
--------
* Athos
* Aramis
* Porthos
* D'Artagnan

View:
------
.. code:: javascript

		{
			"beatles": [
				{ "firstName": "John", "lastName": "Lennon" },
				{ "firstName": "Paul", "lastName": "McCartney" },
				{ "firstName": "George", "lastName": "Harrison" },
				{ "firstName": "Ringo", "lastName": "Starr" }
			],
			"name": function () {
				return this.firstName + " " + this.lastName;
			}
		}

Template:
----------
.. code:: javascript

		{{#beatles}}
		* {{name}}
		{{/beatles}}

Output:
--------
.. code:: html

		* John Lennon
		* Paul McCartney
		* George Harrison
		* Ringo Starr

websites
-----------
* https://en.wikipedia.org/wiki/Mustache_(template_system)
* https://github.com/Mustache/Mustache
* http://mustache.github.io/
* https://github.com/janl/mustache.js

Caching
********
Web caching is the caching of web documents in order to reduce bandwidth usage, server load, and perceived "lag". A web cache stores copies of documents passing through it; subsequent requests may be satisfied from the cache if certain conditions are met. Some application frameworks provide mechanisms for caching documents and bypassing various stages of the page's preparation, such as database access or template interpretation.

Security
*********
Web application security is a branch of information security that deals specifically with security of websites, web applications and web services. At a high level, web application security draws on the principles of application security but applies them specifically to internet and web systems.

.. csv-table::

		37%,  Cross-site scripting
		16%,  SQL injection
		5% ,  Path disclosure
		5% ,  Denial-of-service attack
		4% ,  Arbitrary code execution
		4% , Memory corruption
		4% , Cross-site request forgery
		3% , Data breach (information disclosure)
		3% , Arbitrary file inclusion
		2% , Local file inclusion
		1% , Remote file inclusion
		1% , Buffer overflow
		15%, "Other, including code injection (PHP/JavaScript), etc."


Database access, mapping and configuration
********************************************
Many web frameworks create a unified API to a database backend, enabling web applications to work with a variety of databases with no code changes, and allowing programmers to work with higher-level concepts. Additionally, some object-oriented frameworks contain mapping tools to provide object-relational mapping, which maps objects to tuples.

Some frameworks minimize web application configuration through the use of introspection and/or following well-known conventions. For example, many Java frameworks use Hibernate as a persistence layer, which can generate a database schema at runtime capable of persisting the necessary information. This allows the application designer to design business objects without needing to explicitly define a database schema. Frameworks such as Ruby on Rails can also work in reverse, that is, define properties of model objects at runtime based on a database schema.

URL mapping
***************
A framework's URL mapping or routing facility is the mechanism by which the framework interprets URLs. Some frameworks, such as Drupal and Django, match the provided URL against pre-determined patterns using regular expressions, while some others use rewriting techniques to translate the provided URL into one that the underlying engine will recognize. Another technique is that of graph traversal such as used by Zope, where a URL is decomposed in steps that traverse an object graph (of models and views).[citation needed]

A URL mapping system that uses pattern matching or rewriting to route and handle requests allows for shorter more "friendly URLs" to be used, increasing the simplicity of the site and allowing for better indexing by search engines. For example, a URL that ends with "/page.cgi?cat=science&topic=physics" could be changed to simply "/page/science/physics". This makes the URL easier for people to remember, read and write, and provides search engines with better information about the structural layout of the site. A graph traversal approach also tends to result in the creation of friendly URLs. A shorter URL such as "/page/science" tends to exist by default as that is simply a shorter form of the longer traversal to "/page/science/physics

AJAX
*********
Ajax, shorthand for "Asynchronous JavaScript and XML", is a web development technique for creating web applications. The intent is to make web pages feel more responsive by exchanging small amounts of data with the server behind the scenes, so that the entire web page does not have to be reloaded each time the user requests a change. This is intended to increase a web page's interactivity, speed, and usability.[citation needed]

Due to the complexity of Ajax programming in JavaScript, there are numerous Ajax frameworks that exclusively deal with Ajax support. Some Ajax frameworks are even embedded as a part of larger frameworks. For example, the jQuery JavaScript library is included in Ruby on Rails.[citation needed]

With the increased interest in developing "Web 2.0" rich media applications, the complexity of programming directly in Ajax and JavaScript has become so apparent that compiler technology has stepped in, to allow developers to code in high-level languages such as Java, Python and Ruby. The first of these compilers was Morfik followed by Google Web Toolkit, with ports to Python and Ruby in the form of Pyjs and RubyJS following some time after. These compilers and their associated widget set libraries make the development of rich media Ajax applications much more akin to that of developing desktop applications.


Some famous web frameworks
##############################
Bootstrap
*************
Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.

Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.

https://getbootstrap.com/

AngularJS
************
AngularJS is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications.

AngularJS is the frontend part of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, Angular.js itself, and Node.js server runtime environment.

https://angularjs.org/

https://angular.io/

https://github.com/angular/angular

Ember.js
***********
Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications[3] by incorporating common idioms and best practices into the framework.

Ember is used on many popular websites, including Apple Music[4] Square, Inc.[5] Discourse,[6] Groupon,[7] LinkedIn, Vine, Live Nation, Nordstrom, Twitch.tv, and Chipotle.[8] Although primarily considered a framework for the web, it is also possible to build desktop and mobile applications in Ember.[9][10][11] The most notable example of an Ember desktop application is Apple Music,[12] a feature of the iTunes desktop application. The Ember trademark is owned by Tilde Inc.

https://emberjs.com/

Vue.js
********
Vue.js features an incrementally adoptable architecture that focuses on declarative rendering and component composition. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages[12], with Nuxt.js as one of the most popular solutions

https://vuejs.org/

ReactJS
********
React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API:[7][8] Redux[9], React Router[10] and axios[11] are examples of such libraries.

http://reactjs.org/

The React Cheatsheet for 2020 📄‬ (+ real-world examples)
=================================================================
https://dev.to/codeartistryio/the-react-cheatsheet-for-2020-real-world-examples-4hgg?utm_medium=email&utm_source=topic+optin&utm_campaign=awareness&utm_content=20200129+web+nl&mkt_tok=eyJpIjoiWlRNd01qZGxOR1l6WXpJMCIsInQiOiJTRlwvSk1yUmxmUWFmZ3ZvaVFaZEtidzFzOXRaYUZRWnJTbk9aQm9aY1gwY1RUK2N0WUV1eWRqTytFRm8xMmxCQVVUdDIxTURFcHBldGhqb010UlpaUGxiR0pvYWNaNXJRWWMxNWpzdXByVnJaQ0JqNjlJK2FXYjhcL1JBSjAxd0RhIn0%3D

Ext JS
**********
Ext JS is a pure JavaScript application framework for building interactive cross platform web applications[1] using techniques such as Ajax, DHTML and DOM scripting. It can be used as a simple component framework (to e.g. create dynamic grids on otherwise static pages), but also as a full framework for building single-page applications.

Originally built as an add-on library extension[2] of YUI by Jack Slocum on April 15, 2007[3], beginning with version 1.1, Ext JS retains no dependencies on external libraries, instead making their use optional.[4] Nowadays Ext JS can be used both as a single script (with all classes and components in one file) or by building the application with Sencha Cmd.

https://www.sencha.com/products/extjs/

Laravel
**********
Laravel is a Model-View-Controller framework that uses PHP, which is one of the most popular languages of the web. It’s relatively young compared to other frameworks on this list.

Laravel comes with API support out of the box, and it also possesses a decent amount of packages that could extend its reach. Laracasts is a screencasts tutorials website with over a thousand videos on PHP, Laravel, and frontend technologies in the Laravel ecosystem that could be considered to be a beginner’s heaven. In terms of performance, however, Laravel doesn’t compare to Django or Express, which might be a drawback for massive projects.

Laravel is a framework created by Taylor Otwell in 2011 and like all other modern frameworks, it also follows the MVC architectural pattern. Laravel values Elegance, Simplicity, and Readability. One can rightaway start learning and developing Laravel with Laracasts which has hundreds of tutorials in it.

Language : PHP

Framework Link: https://laravel.com/

Github Link : https://github.com/laravel/laravel

Websites using Laravel : Deltanet Travel , Neighbourhood Lender

Symfony
**********
Symphony is a well-known framework among the community of PHP developers. It significantly reduces the time required for the creation of complicated PHP-based web apps.

Here are some of its major features. Symfony framework is appreciated for its stability, high speed, flexibility, and a possibility for code reuse. Also, when it comes to creating high-performing apps, it offers a very convenient event dispatcher together with dependency injection, and possibilities for code optimization. In addition, it consumes a comparatively little amount of memory. However, Symfony is a bit slow for real-time apps.

Symfony is one of the most trustworthy and most popular web frameworks and has more than 9000 live websites using this technology.

Symfony is a set of reusable PHP components

The standard foundation on which the best PHP applications are built. Choose any of the 50 stand-alone components available for your own applications.

https://symfony.com/

Zend Framework 3
*********************
Zend Framework is a collection of 60+ packages for professional PHP development. Each package is available on GitHub and can be installed via Composer.

Zend Framework is a collection of professional PHP packages with more than 480 million installations. It can be used to develop web applications and services using PHP 5.6+, and provides 100% object-oriented code using a broad spectrum of language features.

Zend Framework uses Composer as a package dependency manager; PHPUnit to test all packages; and Travis CI as a Continuous Integration service. Zend Framework also follows PHP-FIG standards, and includes an implementation of PSR-7 for HTTP message interfaces (as shepherded by Matthew Weier O'Phinney, Zend Framework project lead).

Zend Framework 3 evolved from both Zend Framework 2 and 1; cumulatively, the previous versions were downloaded more than 15 million times.

The principal sponsor of Zend Framework is Zend, a Rogue Wave Company, but many others have contributed components or significant features to the framework. Companies such as Google, Microsoft, and StrikeIron have partnered with Zend to provide interfaces to web services and other technologies they wish to make available to ZF developers.

Zend Framework 3 could not deliver and support all of these features without the help of the vibrant community. Community members, including contributors, make themselves available on mailing lists, IRC channels and other forums. Whatever question you have about Zend Framework, the community is always available to address it.

https://framework.zend.com/

https://getlaminas.org/

https://en.wikipedia.org/wiki/Zend_Framework

Flask (web framework)
*********************
Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.[3] It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools. Extensions are updated far more frequently than the core Flask program.

pip3 install flask

http://flask.pocoo.org

tornado
**********
Tornado is a Python web framework and asynchronous networking library, originally developed at FriendFeed. By using non-blocking network I/O, Tornado can scale to tens of thousands of open connections, making it ideal for long polling, WebSockets, and other applications that require a long-lived connection to each user.

http://www.tornadoweb.org/en/stable/

METEOR
***********
Meteor or MeteorJS is another framework which gives one a radically simpler way to build realtime mobile and web apps. It allows for rapid prototyping and produces cross-platform (Web, Android, iOS) code. Its cloud platform, Galaxy, greatly simplifies deployment, scaling, and monitoring.

Language : JavaScript

https://www.meteor.com/

https://github.com/meteor/meteor

Websites using Meteor : HaggleMate ,  WishPool , Telescope

ASP.NET Core
****************
ASP.NET is a popular web-development framework for building web apps on the .NET platform.

ASP.NET Core is the open-source version of ASP.NET, that runs on macOS, Linux, and Windows. ASP.NET Core was first released in 2016 and is a re-design of earlier Windows-only versions of ASP.NET.

https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core

https://www.asp.net/core/overview/aspnet-vnext

Django – Python
Zend – PHP*
Express.js – Javascript

Ruby on Rails
***************
Ruby on Rails is an extremely productive web application framework written by David Heinemeier Hansson. One can develop an application at least ten times faster with Rails than a typical Java framework. Moreover, Rails includes everything needed to create a database-driven web application, using the Model-View-Controller pattern.

http://rubyonrails.org/
https://github.com/rails/rails

Django
********
Django is another framework that helps in building quality web applications. It was invented to meet fast-moving newsroom deadlines, while satisfying the tough requirements of experienced Web developers. Django developers say the applications are it’s ridiculously fast, secure, scalable and versatile.

Language : Python

https://www.djangoproject.com

Express.js
************
Express or Expressjs is a minimal and flexible framework that provides a robust set of features for web and mobile applications. It is relatively minimal meaning many features are available as plugins. Express facilitates rapid development of Node.js based Web applications. Express is also one major component of the MEAN software bundle.

Language : JavaScript

http://expressjs.com/

https://github.com/strongloop/express

Websites using Express : Storify , Myspace , LearnBoost

Static site generators
############################
What is a Static Site
********************************
A static website is made of pre-built pages with content that doesn’t change between user visits. Because each page is delivered to the browser the same way every time, static pages are often much faster than pages with dynamic content that rely on the server to process each request for each page load.

A static site generator is an application that converts files (usually stored locally) into webpages. This allows content creators to focus on content, without needing to learn code or stylesheets, and without needing to manage many of the complexities of a backend server.

Why Choose a Static Site Generator Over a CMS
******************************************************
Content Management Systems (CMS) make it easy to create and manage content through an interactive front-end. They rely on the server to retrieve data from a database with each visit. This allows pages to show dynamic content, but slows the delivery to the end-user, since each page is built as it’s requested. Because each page request is sent to the server, and because some major CMS features rely on plugins, system security may be compromised if precautions aren’t taken.

A static site generator lets you create content offline in a text editor and preview what the final web page will look like before it is published. When it’s time to build the pages, a short command compiles all new and changed pages within seconds.

While a static site generator doesn’t need a complex backend and database, it does generally require that the compiled files be moved to a server. This step can be automated, but might require using the command line to set up.

When to Use a Static Site Generator
*************************************
Many static site generators have pre-built themes for easy blogging. This allows bloggers to write in a distraction-free environment, while still having the option to format text using Markdown.

Static sites can also be used for documentation. For example, Linode’s documentation library is built using Hugo. Check out the source Markdown file for this guide on GitHub to see what it looks like before Hugo applies our custom theme.

Personal or event websites (portfolios, wedding sites, and campaign pages) are also easy to set up using a static site generator.

Many websites are built using static site generators, including this list of Jekyll sites, these Hugo examples, and the Gatsby site showcase.

A common CMS (Content Management System), like WordPress for instance, builds the web page dynamically as it is being requested by the client: it assembles all the data from the database, and processes the content through a template engine.

On the other hand, a static site generator:

takes a different approach and generates all the pages of the website once when there’s actually changes to the site. This means there’s no moving parts in the deployed website. Caching gets much easier, performance goes up and static sites are far more secure.

Compare Features
*********************
StaticGen has an updated list of static site generators. To find the right one for you, consider the following:

* Tools you build with - Node / Ruby / Python / Git / Markdown / etc.
* Themes - have you found a theme you’ve fallen in love with?
* Plugins - will you be able to connect it to that thing you need?
* Language - is the generator available in your language?
* Project activity - is the generator still in active development?

Since static site generators are easy to set up, it’s worth installing a few and creating test pages to see which works best for your workflow.

document-markup languages
****************************
* DocBook
* html
* xhtml
* markdown
* Office Open XML (OOXML)
* reStructuredText
* Rich Text Format (RTF)
* Tex
* Texinfo

Hugo
********
Hugo is a very popular static site generator with over 32,000 stars on GitHub right now. It is written in Go, and advertises itself as being the fastest framework for building websites. In fact, Hugo comes with a fast build process, which makes building static websites a breeze and works great for blogs with lots of posts.

The docs are great and the Hugo website offers a fantastic quickstart guide that gets you up and running with the software in no time.

Here are some of Hugo’s best features:

* Designed and optimized for speed: as a rule of thumb, each piece of content renders in about 1 millisecond
* No need to install extra plugins for things like pagination, redirection, multiple content types, and more
* Rich theming system
* Shortcodes available as an alternative to using Markdown
* Since July 2018, Hugo offers a powerful assets pipeline, Hugo Pipes.

https://gohugo.io/

Jekyll
********
Jekyll is a simple, extendable, static site generator. You give it text written in your favorite markup language and it churns through layouts to create a static website. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed in the layout, and more.

https://jekyllrb.com/

https://learn.cloudcannon.com/jekyll/why-use-a-static-site-generator/

https://snipcart.com/blog/choose-best-static-site-generator

GitBook
*********
Built around Git, GitBook aims to make many of the features that make Git useful (branches, pull requests, version tracking) accessible to users more familiar with traditional desktop publishing. GitBook is commonly used for technical/API documentation, user manuals, or knowledge bases, and has built-in templates for these and other types of content.

https://www.gitbook.com/

https://www.staticgen.com/

Nikola
**************
pip3 install nikola

pip3 install --user --upgrade "Nikola[extras]"

pip3 install --user -e "git+https://github.com/getnikola/nikola#egg=Nikolaextras"

References
############
* https://en.wikipedia.org/wiki/Web_framework
* https://en.wikipedia.org/wiki/Web_template_system
* https://en.wikipedia.org/wiki/Comparison_of_document-markup_languages
* https://en.wikipedia.org/wiki/Comparison_of_web_frameworks
* https://djangostars.com/blog/what-is-a-web-framework/
* https://hackr.io/blog/top-10-web-development-frameworks-in-2019
* https://www.linode.com/docs/websites/static-sites/how-to-choose-static-site-generator/

.. comments:

		rst2html.py web_development_framework.rst web_development_framework.html
