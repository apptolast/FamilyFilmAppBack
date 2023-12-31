# FamilyApp API
Development environment for the FamilyApp. Composed of an API service in Node TS, and a PostgreSQL database, both containerized in Docker.

Designed to facilitate development tasks.

## Prerequisites

### <b>Docker</b>
Docker daemon is required to start the development server. Can download from the official web: 
- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Linux](https://docs.docker.com/desktop/install/linux-install/)
- [MacOS](https://docs.docker.com/desktop/install/mac-install/)

### <b>Yarn</b>
Package manager

- [Official install](https://yarnpkg.com/getting-started/install)

### <b>Node JS - NVM</b>
Node engine is a JavaScript runtime built on Chrome's V8 JavaScript engine. That allows to execute Javascript in our machines. We can install it through NVM (Node Version Manager), and so we need to install it first. Here is a FreeCodeCamp tutorial, very easy. 

- [Windows](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
- [Linux](https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/)
- [MacOS](https://tecadmin.net/install-nvm-macos-with-homebrew/)

> You need a version of node 12 or higher. I recomend to use Node 16.20.0 (LTS).


### Download Git repository

Clone the current repository on your development machine.

## Installation

> Only is necesary to install the first time. The next time we want to use the server, it will only be necessary to execute the commands described in the <b>Usage</b> section. 

In the main folder of the project:

Start a terminal and run the following command
```sh 
yarn run server:create 
```

<i>This will create the docker containers where our server will be running. It spend aroung 30 - 40 second on create it. Then you will see a message that says</i> `Done in 00.00s`


## Usage



### Start development server
Use the following command to init the server.
```sh
yarn run start
```
### Stop development server
Use the command below to stop the server, when you finish to use it.

```sh
yarn run stop
```

## Test

You can test the app is running, navigate to `localhost:3000` in your browser. You need to see the following message: 

```{"status":"success","message":"STATUS: OK!"}```

# Status

Work in progress...