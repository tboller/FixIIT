# Sprint 4 Team 6

## Team Roles

### Project Manager
Leydi Suriano

### Developer
Vince Giaimo

### Jr. Developer
Thomas Boller

### IT Operations
Emmanuel Zambrano

### UI/UX Developer
Matteo Giaimo

## Sprint 4 Goals

1. Create a ReadMe file with explicit steps to deploy our project via packer and vagrant.
2. Implement https with load balancer and webservers.
3. Forward node js with load balancer.
4. From vagrant we will run a local shell script to connect to cloud database.
5. Add features to webpages/design.

## Sprint Accomplishments

1. Connected Angular Front End Register page to the Database through the back end.
2. Divided our css into separate files, to make it easy for the angular frontend to implement.
3. Completed html and css design for angular frontend (home, login, register, user and admin components).
4. Added functionality to create, view, update, and delete tickets through the backend API.
5. Created the ReadMe file that demonstrates how to build our current infrastructure.
6. Created a new json packer file to be able to build a server without having to use an Ubuntu ISO file.

## Goals for Next Sprint
1. Getting front end done for creating tickets and the voting functionality
2. Integrating amazon s3 for images
3. Complete Login function using Angular Frontend
4. Https with load balancer and werservers
5. Forward node js with load balancer
6. Implement social media authentication
7. Finilize our webpages design

## Bug Tracking

- Our team didn't have any bug tracking issues during this sprint.

## Security

- Our main security goal for this sprint was to implement the https protocol, we have ran into some issues and we are still working on it.

## Team Comments

### Project Manager
Leydi Suriano

During this fourth sprint I was able to accomplish the following:
- Applied tasks to Trello board.
- Monitored Github.
- Prepared team's sprint report.
- Followed up on team accomplishments and project progress.
- Continued to work on the design of our angular pages.
- Separated the css to have only one css file per html page.

### Developer
Vince Giaimo

- Continued to develop the web pages for our site. 
- Added a background image of the IIT campus for our index and login page, the purpose of this was to give users a feel of the location of our campus. 
- Modified the index and login boxes to be somewhat transparent with the background image. 
- Created an upload button for us to use on the backend that way users can upload their own photos of items they would like to fix. 
- Created a Terms of Use page and implemented a legal statement for uses to understand the Terms of using our web application that is embeded in a scroll box. 
- Created a contact page that has general information about us and how users can contact us for support. 
- Added two photos for our user page and admin page for the purpose of giving a visial effect on how the web application will display on the endusers side. 

### Jr. Developer
Thomas Boller

- Made minor style fixes to front end pages.
- Connected Angular Front End Register page to the Database through the back end.
- Started the connection to the backend from login page.
- Mostly focused on figuring out the connection to the back end. 
- Next sprint I will be connecting the login page, then connecting the ticketing to the back end. With those connections the main purpose of our site will be functional.

### IT Operations
Emmanuel Zambrano

- Added functionality to create, view, update, and delete tickets through the backend API. Testing was done using Postman. 
- Focused on setting up the main functionality of the application which is to report tickets. 
- For the next sprint we will integrate this with the front end. 

### UI/UX Developer
Matteo Giaimo

- For this sprint I was tasked with creating the readme file that would demonstrate how to build our current infrastructure. 
- Created a new json packer file to be able to build a server without having to use an Ubuntu ISO file. Now with this build anyone can download it as long as they have access to our github repo and also private and public keys created. 
- Ran across a lot of walls that I was not able to overcome. The load balancer was having a lot of errors and I also couldn't figure out how to pass nodejs traffic through it. 
- Automating the webserver to have certificates needed for the https protocol have been a big challenge as well.

## References

- (n.d.). Codeship's Software Development, Coding & DevOps Blog | Codeship Blog | via @codeship. Packer & Vagrant Tutorial: Build Virtual Machines | Codeship | via @codeship. Retrieved from http://blog.codeship.com/packer-vagrant-tutorial/
- Instructor Packer.io tutorial
- (n.d.). Node.js. Installing Node.js via package manager | Node.js. Retrieved from http://nodejs.org/en/download/package-manager/
