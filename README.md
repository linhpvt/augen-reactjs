# Linh Pham Practical test START

## The repos:
 1. Client side: https://github.com/linhpvt/augen-reactjs, written by ReactJs, version 16.8.6 or higher
 2. Server side: https://github.com/linhpvt/augen-api, written by C# and WEB API. This application runs as a RESTFull API.

## What i've have done
1. Client side: A web page display contact list with paging
2. Server side: An API allows client can search contacts by inputting the criteria.

3. A contact page displays on browser with the first page by default, The cursor activated in input textbox, user can input criteria immediately.

4. User can nagivate to other pages by clicking the page number at Paging Section

5. User inputs criteria and then hit `enter` or `Search` button to search. A small spinner shows to indicate, the page is searching. It disappears when response arrives client.


## Log time
### Client side
1. Init project: 15 minutes
2. Adding Paging component: 20 minutes
3. Adding TableHeader component: 25 minutes
4. Adding TableRow component: 25 minutes
5. Adding UniversalSearch compoment: 25 minutes
6. Adding ContactList container: 30 minutes
7. Implement entire Search contact page: 3 hours

### Server side
1. Research .NET core and setup working environment (Visual studio community version 2019) : 15 minutes

2. Create and run dotnet console application to check out .NET Core is installed correctly:
 Using command line `dotnet new console -o ConsoleApp`.
 Using command line to run ConsoleApp successfully.
 `Spent time: 7 minutes`

3. Download and install IDE - Visual Studio 2019 community Version 2019
- Spent time: 45 minutes

4. Create new WebAPI project
- Using command line `dotnet new -o webapi` to create new webapi project.
- Start webapi with visual studio IDE
- Checking first APIs started successfully; access https://localhost:44310/api/values and browser displayed: ["value1","value2"]

- Spent time: 10 minutes

5. Adding new ContactsController to the project
 - Adding new ContactsController
 - Test contacts api
 - Spent time: 7 minutes.
 
6. Research getting query strings of GET mothod from webAPI
 - Spent time: 10 minutes

7. Adding necessary classes
 - Contact class
 - Data class
 - ResponseContacts class
 - Spent time: 15 minutes

8. Research reading file and respond client with specific format { code, error, data: { total, result } }

 - implement readFile function by passing a filePath argument
 - implement search with some parameters: term, pageNumber, pageSize
 - Spent time: 2h : 45mins

9. Integrating the API with client
 - Research and add `proxy`: `https://localhost:44310/` to package.json
 - Spent time: 15 minutes

## Guide to start
1. clone code API from https://github.com/linhpvt/augen-api, open project with Visual studio 2019 comminity, starting project by hit F5.
Let's say, WEB API will run under https://localhost:44310/

2. clone code Client from https://github.com/linhpvt/augen-reactjs. Change proxy node in package.json to `https://localhost:44310/`.

3. Adding node modules, run yarn install or npm install

4. Start client application, yarn start.

# Linh Pham Practical test END


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
