## Running locally

Requirements: 
1. Create a folder in `c:\data (using Windows)` or change this one for a folder or mount in Linux.
2. Rename the file `docker-compose-local.yml` to `docker-compose.yml`. 
    -  If you haven't build the containers first try the following command: `docker-compose up --build` (This command build and run the images) 
    -  If you have already built the containers and you want to run locally, use docker-compose.yaml and this command: docker-compose up 
3. Then browse to http://localhost:3000 this will do a request to http://node-server:3001/api/items
4. Press ctrl + c twice to exit or use `docker-compose up -d` to detach.

## Deploying to Azure Container Registry

1. Run docker ps in your console.
2. Copy the images names 
3. docker login container.azurecr.io
4. docker tag clientname container.azurecr.io/client:01
5. docker push container.azurecr.io/client:01
6. docker tag servername container.azurecr.io/server:01
7. docker push container.azurecr.io/server:01

## Deploying to Azure Web Apps

1. Use docker-compose-azure-acr.yml  or docker-compose-azure-dockerhub.yml
2. Create a path mapping in the portal or using az cli, with media as the name using azure files and pointing to /data