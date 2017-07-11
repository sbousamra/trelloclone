# Bass's Trello Clone 

Web application project to clone trello.com with client side written in React and server side using express.

## Goals

This project's main goal is to learn how to code a web app as well as improve general understanding of HTTP protocol and web application design. 

  * Learn the React approach for client side rendering.

  * Building a website using the single page app approach.

  * Authentication of the client through use of tokens stored in cookies.

  * Storing of data using plain old variables (no database or SQL used)

  * Learn Express to handle server side.

  * Learn Axios to handle client side HTTP.

## Design

This project was separated into many parts, but essentially there is a client side and a server side.

  ### Server side

  The handling of the server is inside /server/app.js. 

  This file uses express as well as other libraries such as bodyParser to handle the body of an incoming HTTP request and cookieParser to handle incoming cookies/sending the user cookies.

  ### Client side

  The handling of the client is in the /src folder. There are 2 main parts: 

  1. The components folder where components are created and separated into individual files. At the highest level inside app.js we then call the components we want to use just before we render it inside the DOM. 

  2. This leads into the second main part, being index.js, where ReactDOM.render method is called and react renders our app.js in step 1 for us. Our main html file with the id 'root' is also rendered here, contained inside /public/index.html where we call our imports through CDN aswell as the main body.

  ##### Approach

  The interaction between the server and client is dependent on if the user is logged in or not. 

  1. The user makes a GET request to our server every single time the client side is re-rendered using react's componentDidMount function in our app.js. The user will get back a different result depending on if the user is or isn't logged in. 

      * If the user isn't logged in, we render a page that asks the user to sign up. They have limited functionality. 

      * If the user is logged in, they will have extended functionality.

  2. When a user signs up, they must enter a username/password. On submitting this form, the data is sent to our server via a POST request. The server handles this POST request, and has 2 possible responses. 

      * If the username doesn't exist, we will return a 200 response, and this username/password will be stored in our users var.

      * If the username does exist, we will return a 409 response, saying the username already exists and there is a conflict.

  3. If the user successfully signs up, they can then log in. On submitting this form, the data is sent to our server via a POST request. The server handles this POST request, and has 2 possible responses.

      * If the username/password match correctly, we will return a 200 response, and we will send the user a token generated via a random number generator. This token will be stored in the users cookies. This allows the user to move between pages and not be logged out. Every time the POSTing of a board/list/card or even on GET requesting on every re-render via componentDidMount is done, the authenticate method in the server file is passed in as middleware to match the cookie on the client with the server (aka. To verify they are authorized to make requests)

      * If the username/password don't match correctly, we will return a 401 response, saying they are unauthorized and must try again.

  4. When the user is logged in, they have access to the creating of boards, accessing that board to create a list and any cards to do with that list. They can change between boards via a dropdown list at the top. At any point they can log in and out and make changes while logged in so long as the token sent by the server is still stored in the client's cookies.

##### Things I still want to do

* Delete buttons on the board page for lists and cards.

* Dragging and dropping of buttons between lists.

* Allowing multiple users to share boards so that they can work on it together.

* Fix search button to have a user look up information (possibly connected to a search engine api that filters for trello related information) and also public boards to do with the searched topic.

##### Bugs

* When logged in, but going back to home page, it renders the component for when "isloggedin" state is set to false, until the http response comes through for being authorized, in which "isloggedin" is then set to true in the promise and the other component is then rendered. There is a delay and the user shouldn't see anything but the loggedin state if they are loggedin.