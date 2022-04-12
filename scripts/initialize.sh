#!/bin/bash
cd /home/ubuntu/diet-challenge/server
npm ci
npm install pm2@latest -g
sudo apt-get update
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown root /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80