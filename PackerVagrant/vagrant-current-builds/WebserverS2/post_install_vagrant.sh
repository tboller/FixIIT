#!/bin/bash 
set -e
set -v


# http://superuser.com/questions/196848/how-do-i-create-an-administrator-user-on-ubuntu
# http://unix.stackexchange.com/questions/1416/redirecting-stdout-to-a-file-you-dont-have-write-permission-on
# This line assumes the user you created in the preseed directory is vagrant
echo "%admin  ALL=NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/init-users
sudo groupadd admin
sudo usermod -a -G admin vagrant


# Installing vagrant keys
wget --no-check-certificate 'https://raw.github.com/mitchellh/vagrant/master/keys/vagrant.pub'
#sudo mkdir -p /home/vagrant/.ssh
sudo chown -R vagrant:vagrant /home/vagrant/.ssh
cat ./vagrant.pub >> /home/vagrant/.ssh/authorized_keys
sudo chown -R vagrant:vagrant /home/vagrant/.ssh/authorized_keys
echo "All Done!"


#http://www.fail2ban.org/wiki/index.php/MANUAL_0_8#Jails
sudo sed -i "s/bantime = 600/bantime = -1/g" /etc/fail2ban/jail.conf
sudo systemctl enable fail2ban
sudo service fail2ban restart

##################################################
# Add User customizations below here
##################################################
#Ensure the apt-get is up to date
sudo apt-get update

#Install apache2 Sever
sudo apt-get install -y apache2

#Start apache2 web service
sudo systemctl start apache2

#HTML file directory
cd /var/www/html
sudo rm /var/www/html/index.html
cd /home/vagrant/2018-itmt430-6/FixIITWD
sudo cp -a /home/vagrant/2018-itmt430-6/FixIITWD/. /var/www/html

#Install nodejs (doesnt start like a service)
cd ~
curl -sL https://deb.nodesource.com/setup_9.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt-get -y install nodejs
sudo apt-get install -y build-essential

#Install Git
sudo apt-get install -y git

#Remove vim-tiny
sudo apt -y remove vim-tiny

#Add full installation of VIM
sudo apt -y install vim


##################################################
# Add Microsoft Powershell preview for Ubuntu
##################################################
# Import the public repository GPG keys
curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -

# Register the Microsoft Ubuntu repository
curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list | sudo tee /etc/apt/sources.list.d/microsoft.list

# Update the list of products
sudo apt-get update

# Install PowerShell
sudo apt-get install -y powershell

# Start PowerShell
pwsh


##################################################
# Perform Changes to filesystem
##################################################

#make vagrant user the owner of the cloned git repository
sudo chown -R vagrant:vagrant ~/2018-itmt430-6
