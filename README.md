## Running locally

1. To run locally, use docker-compose.yaml and this command: docker-compose up
2. Then browse to http://localhost:3000 this will do a request to http://localhost:3001/api/items

## Deploying to Azure Container Registry

1. Run docker ps in your console.
2. Copy the images names 
3. docker login container.azurecr.io
4. docker tag clientname container.azurecr.io/client:01
5. docker push container.azurecr.io/client:01
6. docker tag servername container.azurecr.io/server:01
7. docker push container.azurecr.io/server:01

## Deploying to Azure Web Apps

1. Use docker-compose.azure.yml 