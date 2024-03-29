## CMS-style Blog Site
This is a full-stack web application built to mimic a CMS-style blog site similar to Wordpress. This application allows developers to publish their blog posts and comment on other developers' posts. The site has been built from scratch and deployed to Heroku for ease of access.

The application follows the Model-View-Controller (MVC) paradigm in its architectural structure. The templating language used is Handlebars.js, which helps in creating a consistent layout and separating the view logic from the application logic. The Object-Relational Mapping (ORM) used is Sequelize, which helps in interacting with the database and querying data.

The authentication system used in this application is the express-session package, which helps in maintaining a session for the user, making sure they are logged in while they navigate through the site.

The application allows the user to perform CRUD operations, create, read, update and delete post and comments, on the blog posts and comments. The user can also filter posts by author and view all the comments on a post.

## Getting Started
To run this application locally on your machine, you will need to have Node.js and npm (Node Package Manager) installed. Once you have these dependencies set up, you can follow these steps:

Clone the repository to your local machine<br> 
git clone https://github.com/<your-username>/CMS-style-blog-site.git<br> 
Go to the cloned repository<br> 
cd CMS-style-blog-site<br> 
Install the required dependencies<br> 
npm install<br> 
Create a .env file with the necessary environment variables<br> 
Start the server<br> 
npm start<br> 
Open the application in your browser at http://localhost:3000/<br> 
Deployment<br> 
The application has been deployed to Heroku and is available for use at the following link: [https://your-app-name.herokuapp.com/](https://protected-woodland-61514.herokuapp.com/api/login)<br> 
  ![MVC](https://user-images.githubusercontent.com/111453328/211812463-7390a63c-2da1-4342-824e-9fe42332209d.jpg)

## Built With

Node.js
Express.js - Web framework
Handlebars.js - Templating language
Sequelize - ORM
express-session - Authentication

Final Note
This project is built as a class assignment. It is good to keep in mind that this project is only meant as a reference and not for any commercial use.
