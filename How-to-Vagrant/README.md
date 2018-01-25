# How to Configure Vagrant Environment

This guide will demonstrate how to get the Vagrant environment up and running on windows

## Prerequisites

Must have Virtualbox, Vagrant, Packer, and git installed

### Check to make sure above applications are installed correctly

right click on cmd.exe and run as administrator

![img](images/cmd.PNG "cmd")

then type in the command line vagrant --version

![img](images/1.PNG "1")

then type in the command line packer --version

![img](images/2.PNG "2")

Then type in the command line git --version

![img](images/gitv.PNG "gitv")

## Run Vagrant Plugin Command

vagrant plugin install vagrant-vbguest

![img](images/3.PNG "3")

Allow access 

![img](images/4.PNG "4")

## Clone github repo

right click on cmd.exe and run as administrator

Then enter in the command line git clone https://github.com/jhajek/packer-vagrant-build-scripts.git
Change directory to packer-vagrant-build-scripts/packer/vanilla-install

![img](images/5.PNG "5")

## Change Directory too packer-vagrant-build-scripts/packer/vanilla-install

cd packer-vagrant-build-scripts/packer/vanilla-install

![img](images/6.PNG "6")

now type in the command line packer build ubuntu16043-vanilla.json

![img](images/7.PNG "7")

(note: this download will take a while)

## Change directory too ../build

type in the command line cd ../build

![img](images/8.PNG "8")

## Find your build

type in the command line dir

and search for and copy ubuntu-vanilla-16043-server-virtualbox-1516773866.box

![img](images/9.PNG "9")

## Add Vagrant box to Vagrant

type in command line vagrant box add ./ubuntu-vanilla-16043-server-virtualbox-1516773866.box --name ubuntu-vanilla

![img](images/10.PNG "10")

## Create a directory to contain your Vagrantfile to launch the ubuntu-vanilla box

This part if for the user to decide where they would like to create their directory to contain the ubuntu-vanilla box

For this example i am going to create the directory in my users folder

Open up another command prompt (dont need admin priv) 

type in command line mkdir ubuntuvagrant

![img](images/11.PNG "11")

## Almost there

change your directoy to ubuntuvagrant

![img](images/12.PNG "12")

type in the command line vagrant init ubuntu-vanilla

![img](images/13.PNG "13")

now type vagrant up

![img](images/14.PNG "14")

now type vagrant ssh

![img](images/15.PNG "15")

## Success!

![img](images/16.PNG "16")

