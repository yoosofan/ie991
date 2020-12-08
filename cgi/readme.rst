WebServer configuration
####################################################################################################

How to install apache2 on Ubuntu
****************************************************************************************************
Step 1 — Installing Apache
====================================================================================================
sudo apt update
sudo apt install apache2

Step 2 — Adjusting the Firewall
====================================================================================================
sudo ufw app list

.. code:: sh

    Output
    Available applications:
      Apache
      Apache Full
      Apache Secure
      OpenSSH

sudo ufw allow 'Apache'
sudo ufw status

.. code:: sh

    Output
    Status: active

    To                         Action      From
    --                         ------      ----
    OpenSSH                    ALLOW       Anywhere                  
    Apache                     ALLOW       Anywhere                  
    OpenSSH (v6)               ALLOW       Anywhere (v6)             
    Apache (v6)                ALLOW       Anywhere (v6)

Step 3 — Checking your Web Server
====================================================================================================
sudo systemctl status apache2

.. code:: sh

    apache2.service - The Apache HTTP Server
     Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor preset: enabled)
    Drop-In: /lib/systemd/system/apache2.service.d
             └─apache2-systemd.conf
     Active: active (running) since Tue 2018-04-24 20:14:39 UTC; 9min ago
    Main PID: 2583 (apache2)
      Tasks: 55 (limit: 1153)
     CGroup: /system.slice/apache2.service
             ├─2583 /usr/sbin/apache2 -k start
             ├─2585 /usr/sbin/apache2 -k start
             └─2586 /usr/sbin/apache2 -k start

http://your_server_ip

Step 4 — Setting Up Virtual Hosts (Recommended)
====================================================================================================
sudo mkdir /var/www/your_domain

sudo chown -R $USER:$USER /var/www/your_domain

sudo chmod -R 755 /var/www/your_domain

nano /var/www/your_domain/index.html

.. code:: html

    <html>
        <head>
            <title>Welcome to Your_domain!</title>
        </head>
        <body>
            <h1>Success!  The your_domain virtual host is working!</h1>
        </body>
    </html>

sudo nano /etc/apache2/sites-available/your_domain.conf

.. code:: sh

    <VirtualHost *:80>
        ServerAdmin webmaster@localhost
        ServerName your_domain
        ServerAlias your_domain
        DocumentRoot /var/www/your_domain
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>

sudo a2ensite your_domain.conf

sudo a2dissite 000-default.conf

sudo apache2ctl configtest

.. code:: sh

    Output
    Syntax OK

sudo systemctl restart apache2

http://your_domain

https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-ubuntu-18-04-quickstart

CGI programming configuration
****************************************************************************************************
apache2 -v

Anyways, You just need to make changes on two configuration files, them being

* /etc/apache2/apache2.conf
* /etc/apache2/conf-available/serve-cgi-bin.conf

.. code:: sh

    mkdir /var/www/cgi-bin
    cd /var/www/cgi-bin/
    sudo nano /etc/apache2/apache2.conf

And add the following at the end

.. code::

    ###################################################################
    #########     Adding capaility to run CGI-scripts #################
    ServerName localhost
    ScriptAlias /cgi-bin/ /var/www/cgi-bin/
    Options +ExecCGI
    AddHandler cgi-script .cgi .pl .py

sudo nano /etc/apache2/conf-available/serve-cgi-bin.conf

.. code::

    <IfModule mod_alias.c>
      <IfModule mod_cgi.c>
        Define ENABLE_USR_LIB_CGI_BIN
      </IfModule>

      <IfModule mod_cgid.c>
        Define ENABLE_USR_LIB_CGI_BIN
      </IfModule>

      <IfDefine ENABLE_USR_LIB_CGI_BIN>
        #ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
        #<Directory "/usr/lib/cgi-bin">
        #	AllowOverride None
        #	Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
        #	Require all granted
        #</Directory>

        ## cgi-bin config
        ScriptAlias /cgi-bin/ /var/www/cgi-bin/
          <Directory "/var/www/cgi-bin/">
              AllowOverride None
              Options +ExecCGI
          </Directory>

      </IfDefine>
    </IfModule>

    # vim: syntax=apache ts=4 sw=4 sts=4 sr noet


.. code:: 

    ScriptAlias /cgi-bin/ /var/www/cgi-bin/
      <Directory "/var/www/cgi-bin/">

sudo service apache2 restart

Creating a simple CGI script
====================================================================================================
sudo nano hello.py

.. code:: python

    #!/usr/bin/env python

    import cgitb
    cgitb.enable()
    print("Content-Type: text/html;charset=utf-8")

    print "Content-type:text/html\r\n\r\n"
    print '<html>'
    print '<head>'
    print '<title>Hello Word - First CGI Program</title>'
    print '</head>'
    print '<body>'
    print '<h2>Hello Word! This is my first CGI program</h2>'
    print '</body>'
    print '</html>'

chmod o+x hello.py

http://localhost/cgi-bin/hello.py

Debugging :
====================================================================================================
If the script is not running, you can check the logs stored in

/var/log/apache2/error.log

====================================================================================================


References
====================================================================================================
* https://tasdikrahman.me/2015/09/30/Running-CGI-Scripts-on-Apache2-Ubuntu/
* http://httpd.apache.org/docs/current/howto/cgi.html#configuring
* https://www.tutorialspoint.com/How-to-configure-Apache-for-Python-CGI-Programming


