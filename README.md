## Architecture

In this project, I used two main approaches to build the user interface. 
First, I used Express HTML, where the server creates a new webpage whenever a link is clicked 
or a form is submitted, causing the entire page to reload. JavaScript was then added 
to make the pages more interactive. The second approach was a Single-Page Application (SPA), 
which works differently by loading the content once and then using JavaScript to handle 
most of the updates without needing to reload the entire page. This makes the app feel faster 
and more like a desktop application. For the backend, I chose MongoDB because it’s flexible 
with how data is stored. Unlike traditional databases that require a fixed structure, 
MongoDB can handle data that doesn’t fit neatly into rows and columns, 
making it easier to adjust the data structure or add new features without a lot of extra work.

## Functionality
JSON (JavaScript Object Notation) is a simple format used to structure data 
in a way that is easy for both humans and computers to read. Although it’s based on JavaScript, 
JSON is more about organizing data than performing operations or creating interactivity. 
In this project, JSON was crucial for allowing the frontend and backend to communicate 
by sending data back and forth in a format they both understood. As I worked through the project, 
I often went back and reorganized the code to make it cleaner and easier to use. 
One major improvement was creating reusable UI components like buttons and forms, 
which I could use across different parts of the app without having to rewrite the code each time. 
This made the app more consistent and saved time when fixing bugs or adding new features.

## Testing
In my app, methods refer to the different ways data can be requested or sent to the server, 
while endpoints are specific addresses on the server where these requests go. 
Testing these parts of the app was important to make sure everything worked as expected, 
especially when adding security features to ensure that only authorized users could access or change certain data.

## Reflection
This course has been really helpful in teaching me practical skills for building web apps. 
I’ve learned how to create both the frontend and backend parts of an app, manage databases, 
and make sure everything is secure. These are important skills in today’s job market, and 
working on real projects has made me more confident in applying for jobs in software development.
I’ve also improved my problem-solving skills and learned how to work effectively in a team, 
which are valuable in any career. Overall, this course has given me a solid foundation to start
a career as a developer and the tools I need to keep growing in this field.
