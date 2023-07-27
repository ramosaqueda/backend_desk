## Backend_desk

Proyecto Backend final para curso de node y ts avanzado. Este proyecto corresponde al backend de un proyecto de lanzadera de aplicaciones, con autenticación y pefilamiento de usuarios para sistemas de intranet.

# Getting Started

# OPTION 1 - Run Backend-desk on Docker
1. Install Node.js - Backend_desk requires Node v8 or above

2. Clone the github repository: 

`git clone https://github.com/ramosaqueda/backend_desk.git`

3. Got to directory:

`cd backend-desk`

4.Build the images:
`docker-compose build`

5.-Run the app, this starts the Backend-desk application at http://localhost:3000/:

`docker-compose up`

`docker build -t node-api-final :1.0.0 . `

`docker network create node-app-net`

`docker network connect node-app-server cont-mysqlserver`

` docker run -d --name node-app-desk  -p 3000:3000 -e DB_HOST:cont-mysqlserver -e DB_PORT=3308 --network node-app-net node-api-desk:1.0.0`


# OPTION 2 - Run Backend-desk on your machine
1. Install Node.js - Backend_desk requires Node v8 or above

2. Clone the github repository: 

`git clone https://github.com/ramosaqueda/backend_desk.git`

3. Got to directory:

`cd backend-desk`
4. Install node packages:

`yarn` or `npm install`

5. Downlod and Install MySQL from [MysqlServer](https://dev.mysql.com/downloads/installer/)
   
7. Create Database

`CREATE DATABASE 'bddDesk' /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;`

8. Yarn run dev

   
