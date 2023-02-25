#!/bin/bash

# Define o nome da imagem e do contêiner
IMAGE_NAME="startista-web-i"
CONTAINER_NAME="startista-web-c"

# Para o contêiner, se estiver em execução
if [[ $(docker ps -q -f name=$CONTAINER_NAME) ]]; then
    docker stop $CONTAINER_NAME
fi

# Remove o contêiner, se existir
if [[ $(docker ps -aq -f name=$CONTAINER_NAME) ]]; then
    docker rm $CONTAINER_NAME
fi

# Remove a imagem antiga, se existir
if [[ $(docker images -q $IMAGE_NAME) ]]; then
    docker rmi $IMAGE_NAME
fi

# Cria uma nova imagem com base no Dockerfile atual
docker build . -t $IMAGE_NAME

# Cria o novo contêiner com base na imagem Docker mais recente
docker run -p 8080:80 --name $CONTAINER_NAME $IMAGE_NAME
