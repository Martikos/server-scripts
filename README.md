**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Manual Steps](#manual-steps)
	- [Create a new user](#create-a-new-user)
- [Scripts](#scripts)
	- [Important tools](#important-tools)
	- [Node related](#node-related)
	- [php apache mysql](#php-apache-mysql)

# Manual Steps

## Create a new user

* Log in first using your root account.
* Create a new user by following the directives stated [here](http://clipboard.com/clip/LQcvw4nICMqjz1jdSTlg7IGrxjI1KAEvahLe)
* Add your public ssh key into the machine's authorized_keys as shown [here](http://clipboard.com/clip/LQcwYYrilCbrSi5vHD_Udpg8avI5A2byW0Te)

# Scripts

## Important tools

Install needed packages (git, make, etc..):

`` curl https://raw.github.com/tUrG0n/server-scripts/master/scripts/dev-packages | sh ``

## Node related

Install nodejs:

`` curl https://raw.github.com/tUrG0n/server-scripts/master/scripts/node-installer | sh ``

Install npm basic packages:

`` curl https://raw.github.com/tUrG0n/server-scripts/master/scripts/npm-packages | sh ``

## php apache mysql

Install php5, apache2 and mysql

`` curl https://raw.github.com/tUrG0n/server-scripts/master/LAMP/php-apache-mysql | sh ``

# Troubleshooting

## Apache

``  ... waiting apache2: Could not reliably determine the server's fully qualified domain name, using 127.0.1.1 for ServerName  ``

Run the following:

``` bash
sudo su
echo "ServerName localhost" >> /etc/apache2/httpd.conf
/etc/init.d/apache2 restart
```
