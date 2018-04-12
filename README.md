# 2018-itmt430-6
ITMT 430 Team Project

# FixIIT
FixIIT is a collaborative work of 5 students of the Information Technology Managment (ITM) department of Illinois Institute of Technology (IIT). Primarily designed to be a web based application, we have hopes to integrate an Android Application. The purpose of the application is to allow for collaboration between students, faculty, and staff of IIT in deciding what things around campus need to most repair or refurbishment.

# Contact Information

## Emmanuel Zambrano
ezambran@hawk.iit.edu

## Leydi Suriano
lsuriano@hawk.iit.edu

## Matteo Giaimo
mgiaimo@hawk.iit.edu

## Vince Giaimo
vgiaimo@hawk.iit.edu

## Thomas Boller
tboller@hawk.iit.edu

# Build Instructions
# How to build PACKER & VAGRANT INFRASTRUCTURE#

This guide will demonstrate how to get the Vagrant environment up and running.

## Create Deploy Keys for Github Repo ##

 Open up a gitBash terminal, then type in the following command as seen in the screenshot, but replace the string at the end with your own email address and press enter

![ssh](images/ssh.PNG "ssh")

When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

![ssh.1](images/ssh.1.PNG "ssh.1")

Next it will ask you to enter a passphrase, which we will not be using so just press enter twice

Now open up a windows command prompt and make sure that you are in your users directory

![ssh.2](images/ssh.2.PNG "ssh.2")

Enter the command: dir /a          This command will display are hidden files, the one we are looking for is .ssh

![ssh.3](images/ssh.3.PNG "ssh.3")

![ssh.4](images/ssh.4.PNG "ssh.4")

Change Directory into .ssh and type in the command: dir

![ssh.5](images/ssh.5.PNG "ssh.5")

![ssh.6](images/ssh.6.PNG "ssh.6")

you should see your private and public key

Next, create a new folder on your desktop called keys, we will now be copying our keys into this folder. NOTICE that my users name is captainG, you will be on your own users account.

![ssh.7](images/ssh.7.PNG "ssh.7")

![ssh.7.1](images/ssh.7.1.PNG "ssh.7.1")

Your keys folder will now look like the following

![ssh.8](images/ssh.8.PNG "ssh.8")

Open up the id_rsa.pub key with a text editor and copy all the data inside of the file.

Log into your github account and enter our teams repo landing page and click on settings

![ssh.9](images/ssh.9.PNG "ssh.9")

Then click on deploy keys 

![ssh.10](images/ssh.10.PNG "ssh.10")

click add deploy key

![ssh.10.1](images/ssh.10.1.PNG "ssh.10.1")

Add a title for your key and then paste the copied conents of the id_rsa.pub key into the key section as i did in the screen shot below and then click add key 

![ssh.11](images/ssh.11.PNG "ssh.11")


YOU ARE NOW DONE CREATING THE KEYS NEEDED FOR THIS BUILD.

## Two Build Versions ##

We have to seperate Json files that build a same identical server, the only differences are that one requires and ISO for ubuntu and one does not require an ISO to build the server.

The reason we have two versions is because it is faster to deploy our server by having the ISO locally, but we need are server to be able to be built by anyone so we also have a build that does not require and ISO

server build that needs an iso is 'ubuntu16043-vanilla-ISO.json'

server build that does not need a iso is 'ubuntu-16044-server-NON-ISO.json'

## Step 1 ##

CLONE GITHUB REPO to make sure we have the latest release of our build
 
## Step 2 ##

Open up a windows PowerShell terminal

![2](images/2.PNG "2")

## Step 3 ##

Install vagrant VirtualBox plugin

Command : vagrant plugin install vagrant-vbguest

![3](images/3.PNG "3")

## Step 4 ##

Open our team GitHub file directory on your local machine (Make sure you clone the repo beforehand)

![4](images/4.PNG "4")

## Step 5 ##

Click on "PackerVagrant" then "vagrant-current-builds". Now you should see the directory with our current server builds.

![5](images/5.PNG "5")

## Step 6 ## 

Drag and drop the WebserverS4 folder onto your desktop

![6](images/6.PNG "6")

Here is the Contents that are within the WebserverS4 folder

![cont](images/cont.PNG "cont")


## Step 7 ##

Now locate your folder where you have YOUR "id_rsa" key and also ubuntu ISO (if building the ISO version)

![7](images/7.PNG "7")


## Step 8 ## 

Copy and paste your id_rsa key into the WebserverS4 folder

![8](images/8.PNG "8")


WARNING - IF BUILDING VERSION WHERE YOU NEED ISO FOLLOW STEP BELOW

Copy and paste your id_rsa key and ubuntu iso into the WebserverS4 folder


## Step 9 ##

Open up windows PowerShell and navigate to the WebserverS4 directory

![9](images/9.PNG "9")

Now list the directory with the "ls" command

command: ls

![9.1](images/9.1.PNG "9.1")

## Step 10 ##

We will now be using PACKER

If you are building the NON-ISO-VERSION of the Webserver follow the steps below

on the windows PowerShell enter the command: packer build ubuntu-16044-server-NON-ISO.json

![10](images/10.PNG "10")

If you are building the ISO-VERSION please follow the step below

on the windows PowerShell enter the command: packer build ubuntu16043-vanilla-ISO.json

![10.1](images/10.1.PNG "10.1")

You should now see that packer will open up your virtual machine and start the configuration 
(PACKER GHOST)

![ghost](images/ghost.PNG "ghost")

Leave everything alone and be patient, packer will close the virtual box by its self and finish exporting the box file.

## Step 11 ##

Packer will create a folder named "build" and within that file will be are ubuntu box file 

![11](images/11.PNG "11")

![11.1](images/11.1.PNG "11.1")

Now go back to your windows power shell and make sure you are still in the WebserverS4 directory. 
Then copy the text exactly how I do it, highlight it and then press Ctrl + c

![11.2](images/11.2.PNG "11.2")

Then on the command line type: vagrant box add  --name webserverS4

![11.3](images/11.3.PNG "11.3")

you will now copy and paste your box file address in between add & --name

![11.4](images/11.4.PNG "11.4")

now press enter


## Step 12 ## 

On windows power shell make sure you are still in the WebserverS4 directory.

Now on the windows PowerShell command line type: vagrant up

![12](images/12.PNG "12")

## Step 13 ## 

Our vagrant box is now up, we now need to ssh into our VirtualBox

command: vagrant ssh

![13](images/13.PNG "13")

## Step 14 ##

Since this build is meant to be deployed in any environment i have setup the vagrant file to automaticaly bridge to the network and get an address assigned via DHCP.

Now on the ssh terminal of webserverS4 type in the command: ifconfig

![14.](images/14.PNG "14")

Look at the ipv4 address for interface enp0s8, that is the ip address we will be using to access our webserver. 

![14.1](images/14.1.PNG "14.1")

## Step 15 ##

We will now start our angualr application for our webserverS4

From our webserverS4 home directory change directory to the following 

cd 2018-itmt430-6/FixMe/

![15](images/15.PNG "15")

then verify you are in the right directory with the following command: pwd

![15.1](images/15.1.PNG "15.1")

Now start the angualr app with command: npm start 

![15.2](images/15.2.PNG "15.2")


## Step 16 ##

Accessing our webserverS4 html pages through port 80.

Open any brower and type in the ip address of your webserver into the browser's url and press enter

![16](images/16.PNG "16")

![16.1](images/16.1.PNG "16.1")

## Step 17 ##

Accessing our webserverS4 angular app through port 3000

Open any brower and type in the ip address of your webserver and at the end of that add a colon and port 3000 into the browser's url and press enter

![17](images/17.PNG "17")

![17.1](images/17.1.PNG "17.1")

## Power Down Vagrant Box ##

When you are ready to power down the server you will have two options

vagrant halt: Will shutdown the system without destroying it, this will take resources from your hard drive but not much.

vagrant destroy: Will destroy the machine and remove resources from your system. When you run vagrant up you will have a newly built machine to start working on again. (I use this option)

![power](images/power.PNG "power")



## MUST DO WHEN REBUILDING TO AVOID ERRORS ##

When new configs are made to our server and we need to do this rebuilding process again there are a few things we need to think about. If we need to build a new config of our server and it still has the same vagrant box name we must remove it from the vagrant box list, because otherwise when we do vagrant box add command it will give you an error ( you can use the --force flag to overcome this). If we are using a new name for the server then we are fine and dont have to follow this guideline.

![rebuild](images/rebuild.PNG "rebuild")





### Guide Written by Matteo Giaimo ###



