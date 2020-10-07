# MERN Stack Whatsapp Clone (not a code along xD)

As the name says, this is a whatsapp clone but with fewer features and a smaller dev team (@neildahiya)
![Imgur](https://i.imgur.com/Xje4ZWK.png)

## Technologies Used :globe_with_meridians:

- React (frontend)
- NodeJS - ExpressJS (backend)
- Redux (for state management)
- Passport-JWT (for authentication)
- Material UI for icons
- MongoDB
- Socket.io ( to watch for change streams in MongoDB and make it look realtime)

## Things to improve/bugs :part_alternation_mark:

- Adding API endpoints in documentation
- Adding responsiveness
- Passort bug token not being saved in frontend sometimes
- Making dropdowns for additional features

This text you see here is _actually_ written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Installation

This application requires [Node.js](https://nodejs.org/) to run.

Adding the config.env file in /api/config folder

```sh
NODE_ENV=development
PORT=5000
MONGO_URI=""
```

Install the dependencies and devDependencies.

```sh
$ cd frontend
$ npm i
$ cd ..
$ cd api
$ npm i
```

To start react server

```sh
$ cd frontend
$ npm start
```

To start node server

```sh
$ cd api
$ npm start
```
