:data-transition-duration: 1000
:skip-help: true
:css: style.css
:substep: true
:slide-numbers: true

----

Security
===================
Ahmad Yoosofan
---------------
University of Kashan

Fall 2020

----

Encryption
===========
* Symmetric
* Asymmetric

----

Secure Shell (SSH)
===================
SSH provides a secure channel over an unsecured network by using a client–server architecture, connecting an SSH client application with an SSH server.

SSH was designed as a replacement for Telnet and for unsecured remote shell protocols such as the Berkeley rsh and the related rlogin and rexec protocols.

* Symmetrical encryption
* Asymmetrical encryption
* Hashing.

Port: 22

`hostinger <https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work>`_
`wikipedia <https://en.wikipedia.org/wiki/Ssh_(Secure_Shell)>`_

----

Symmetrical encryption
=============================
.. image:: security/symmetric-encryption-ssh-tutorial.jpg
    :align: center

If two Ubuntu 14.04 LTS machines are communicating with each other over SSH, they will use aes128-ctr as their default cipher.
`hostinger <https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work>`_

----

Asymmetric Encryption
=====================
.. image:: security/asymmetric-encryption.jpg
    :align: center

public-private key pair
`hostinger <https://www.hostinger.com/tutorials/ssh-tutorial-how-does-ssh-work>`_

asymmetrical encryption is not used to encrypt the entire SSH session.
it is only used during the key exchange algorithm of symmetric encryption.

----

Hashing
==============
SSH uses hashes to verify the authenticity of messages. This is done using HMACs, or Hash-based Message Authentication Codes. This ensures that the command received is not tampered with in any way.

----

Important Asymmetrical Encryption in ssh
================================================
* RSA (old but yet secure)
* ECDSA
* ed25519 (best)

`chealion.ca <https://chealion.ca/2016/06/20/ssh-key-types-and-cryptography-the-short-notes/>`_
`linuxnatives.net <https://linuxnatives.net/2019/how-to-create-good-ssh-keys>`_
`safecurves.cr.yp.to <http://safecurves.cr.yp.to/rigid.html>`_

----

Creating SSH keys on Ubuntu
=============================
`openssh <https://www.openssh.com/>`_
----------------------------------------
The OpenSSH suite consists of the following tools:

* Remote operations are done using ssh, scp, and sftp.
* Key management with ssh-add, ssh-keysign, ssh-keyscan, and ssh-keygen.
* The service side consists of sshd, sftp-server, and ssh-agent.

`github <https://docs.github.com/en/free-pro-team@latest/github/writing-on-github>`_

-----

Generate the SSH RSA Key Pair
===============================
.. code:: sh

    mkdir –p $HOME/.ssh
    chmod 0700 $HOME/.ssh
    ssh–keygen –t rsa 4096

`phoenixnap.com <https://phoenixnap.com/kb/generate-setup-ssh-key-ubuntu>`_
`digitalocean <https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys>`_
`security.stackexchange <https://security.stackexchange.com/a/144044/10376>`_

----

Generate the SSH ED25519 Key Pair
=====================================
.. code:: sh

    ssh-keygen -t ed25519 -a 100

GitAhead also needs to be taught to look for the correct identity file. You may be able to work around it by explicitly specifying an identity file in ~/.ssh/config like this:

.. code:: ssh

	Host *
	  IdentityFile ~/.ssh/id_ed25519

* Does this work for you when both rsa/dsa and ed25519 exist?
* Yes, I have both rsa and ed25519 keys and config file entries to choose the correct key for each host.

..code:: sh

	ssh -i ~/.ssh/id_ed25519 -o IdentitiesOnly=yes -v g...@github.com

Or the following snippet in your ~/.ssh/config:

.. code:: sh

	Host github.com
		IdentityFile ~/.ssh/id_ed25519
		IdentitiesOnly yes


`github gitahead <https://github.com/gitahead/gitahead/issues/140>`_
`wikipedia <https://en.wikipedia.org/wiki/Ssh-keygen>`_
`google group <https://groups.google.com/forum/#!topic/nairobi-gnu/PeQ1Lu7Ccjg>`_
`docs.github <https://docs.github.com/en/free-pro-team@latest/github/writing-on-github>`_

----

Managing multiple keys
===========================
It is possible — although controversial [8] [9] — to use the same SSH key pair for multiple hosts.

On the other hand, it is rather easy to maintain distinct keys for multiple hosts by using the IdentityFile directive in your openSSH config file:

~/.ssh/config

Host SERVER1
   IdentitiesOnly yes
   IdentityFile ~/.ssh/id_rsa_SERVER1

Host SERVER2
   IdentitiesOnly yes
   IdentityFile ~/.ssh/id_ed25519_SERVER2

`archlinux <https://wiki.archlinux.org/index.php/SSH_keys>`_
`ianix <https://ianix.com/pub/ed25519-deployment.html>`_
`security.stackexchange <https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices>`_

----

Copy Public Key to the Ubuntu Server
---------------------------------------
.. code:: sh

    ip a
    ssh-copy-id username@<server_IP>

Log in to the Remote Server
---------------------------------
.. code:: sh

    ssh username@server_IP

`ssh.com <https://www.ssh.com/ssh/keygen/>`_
`stribika.github <https://stribika.github.io/2015/01/04/secure-secure-shell.html>`_

----

Disable Password Authentication
================================
.. code:: sh

    sudo nano /etc/ssh/sshd_config

Search the file and find the PasswordAuthentication option.

Edit the file and change the value to no:

.. code:: sh

    sudo systemctl restart ssh

    ssh username@server_IP

or

.. code:: sh

    eval `ssh-agent -s`
    ssh-add -l


----

Change or Remove the passphrase
================================
.. code:: sh

    ssh-keygen -p

Enter your new passphrase or press ENTER to remove the passphrase.

Displaying the SSH Key Fingerprint
-------------------------------------
.. code:: sh

    ssh-keygen -l

`digitalocean <https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys>`_

----

Running a Single Command on a Remote Server
============================================
.. code:: sh

    ssh username@<server_IP> command_to_run

Logging in to a Server with a Different Port
-----------------------------------------------
.. code:: sh

    ssh -p port_num username@<server_IP> command_to_run

`digitalocean <https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys>`_

----

Online key pair generator
============================
https://travistidwell.com/jsencrypt/demo/
https://www.cryptosys.net/pki/rsakeyformats.html
https://www.cryptosys.net/pki/rsakeyformats.html
https://tools.ietf.org/html/rfc4716
https://stackoverflow.com/questions/12749858/rsa-public-key-format
http://phpseclib.sourceforge.net/rsa/examples.html
https://docs.github.com/en/free-pro-team@latest/rest/overview/other-authentication-methods#basic-authentication
https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token
github token authentication terminal fatal: Authentication failed for 'https://github.com/yoosofan/ie991.git/'


----


OATH Toolkit
================
The OATH Toolkit provide components for building one-time password authentication systems.

https://www.nongnu.org/oath-toolkit/

https://infosec.mozilla.org/guidelines/openssh#Modern

----

Other Instructions
====================
.. class:: substep

*  HEAD: this is similar to GET, but without the message body. It's used to retrieve the server headers for a particular resource, generally to check if the resource has changed, via timestamps.
*  TRACE: used to retrieve the hops that a request takes to round trip from the server. Each intermediate proxy or gateway would inject its IP or DNS name into the Via header field. This can be used for diagnostic purposes.
*  OPTIONS: used to retrieve the server capabilities. On the client-side, it can be used to modify the request based on what the server can support.

----

.. comments:

    rst2html.py http.rst http.html --stylesheet=../../tools/farsi.css,html4css1.css
    
    Best for ssh
    ==============
	https://wiki.archlinux.org/index.php/SSH_keys
    https://gravitational.com/blog/comparing-ssh-keys/
    https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices
    https://linuxnatives.net/2019/how-to-create-good-ssh-keys

