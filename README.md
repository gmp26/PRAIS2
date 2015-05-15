PRAIS2
======

Communicating the risks of infant surgery

Demo published at http://understandinguncertainty.org/files/animations/PRAIS2/index.html

To install locally
------------------

1. [Install git](http://git-scm.com/downloads).

2. [Install Nodejs](https://nodejs.org/)

3. Find a `shell` command line. In Linux it's a terminal, on the Mac it's in Applications/Utilities/Terminal. In Windows you'll need to install the `bash shell` that comes with the `git` distribution.

4. Open the terminal and type (excluding the $ which indicates a shell prompt):
```
$ mkdir -p ~/webtool			# This will create a folder called webtool inside your home directory
$ cd ~/webtool					# set it as the current directory
$ git clone https://github.com/gmp26/PRAIS2.git 		# clone the webtool into PRAIS2 subfolder from github
$ npm install -g bower			# Install bower package manager as a command tool
$ cd PRAIS2						# change to PRAiS2 folder
$ bower install					# install its dependencies from bower
$ npm install http-server -g	# install a local web server
$ http-server 					# run a local web server which serves the current folder (PRAIS2)
```

5. If all goes well you will now be able to access the web tool as served from your local system at the URL:
`http://localhost:8080`.

