#!/bin/bash 
set -e
set -v

mkdir -p /home/vagrant/.ssh
mkdir -p /root/.ssh
chmod 600 /home/vagrant/id_rsa
cp -v /home/vagrant/id_rsa /home/vagrant/.ssh/
cp -v /home/vagrant/config /home/vagrant/.ssh/
cp -v /home/vagrant/config /root/.ssh/
git clone git@github.com:illinoistech-itm/2018-itmt430-6.git

echo "ran git_down"