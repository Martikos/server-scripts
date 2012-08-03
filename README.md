*Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Table of contents](#table-of-contents)
- [Installation procedure](#installation-procedure)
	- [Manual Steps](#manual-steps)
		- [Create a new user](#create-a-new-user)
	- [Scripts](#scripts)
		- [Important tools](#important-tools)
		- [Node related](#node-related)
		- [php apache mysql](#php-apache-mysql)

* auto-gen TOC:
{:toc}
# Manual Steps

## Create a new user

* Log in first using your root account.
* create a new user by following the directives stated [here](http://clipboard.com/clip/LQcvw4nICMqjz1jdSTlg7IGrxjI1KAEvahLe)
* Add your public ssh key into the machine's authorized_keys as shown [here](http://clipboard.com/clip/LQcwYYrilCbrSi5vHD_Udpg8avI5A2byW0Te)

# Scripts

## Important tools

Install needed packages (git, make, etc..):

`` curl https://raw.github.com/tUrG0n/server-scripts/master/dev-packages | sh ``

## Node related

Install nodejs:

`` curl https://raw.github.com/tUrG0n/server-scripts/master/node-installer | sh ``

Install npm basic packages:

`` curl https://raw.github.com/tUrG0n/server-scripts/master/npm-packages | sh ``

## php apache mysql

Install php5, apache2 and mysql

`` curl https://raw.github.com/tUrG0n/server-scripts/master/php-apache-mysql | sh ``

