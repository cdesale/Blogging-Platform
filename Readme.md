# Blogging-Platform

This is the API service for the Blogging-Platform. The service uses Node.js for service code, MongoDB for database, and Docker for containerisation.

## Setup
The setup required is a simple two part process:
- First, clone this repository.
- Then create a `.env` file with the following variables defined:
    - `PORT` the port on which the API service should listen on.
    - `DB_CONNECTOR` the url of the remote MongoDb hosting. 
    - `TOKEN_SECRET` some random secret token that will be used for OAuth token generation.

## Run

### With Docker

To run the API service in a Docker container run the following commands:
- `docker image build -t miniwall:1 .`
  - The command uses `miniwall` for image file. This can be changed.
- `docker container run -d --name miniwall-container --publish 80:3000 miniwall:1`
   - The command uses `miniwall-container` as the container's name.
   - The `-d` flag runs the contaier in background.
   - The command uses `3000` as the PORT that the API service will listen on.
- Use `docker restart miniwall-container` to restart the container in case of any issues.

### Without Docker
To run the API service without Docker run the following commands:
- `npm install`
    - This command installs all the necessary modules.
- `npm start`
    - This command starts the API service.


