#! /bin/bash

sudo docker build -f ./customer/Dockerfile . -t customer-ms &&
sudo docker build -f ./product/Dockerfile . -t product-ms &&
sudo docker build -f ./order/Dockerfile . -t order-ms &&
sudo docker build -f ./payment/Dockerfile . -t payment-ms &&
sudo docker-compose up