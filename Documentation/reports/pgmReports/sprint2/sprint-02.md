# Sprint 2 Team 6

## Team Roles

### Project Manager
Matteo Giaimo

### Developer
Leydi Suriano

### Jr. Developer
Emmanuel Zambrano

### IT Operations
Vince Giaimo

### UI/UX Developer
Thomas Boller

## Sprint 2 Goals

Primary goals for second sprint

1. Automate github repo to vagrant box using deploy keys
2. User Login available
3. Non user/login web page
4. Initial splash page upon login

## Sprint Accomplishments

### Accomplishments
The first major goal that our team had to overcome was making sure we could automate our git download to our vagrant box using deploy keys, since our development was being slowed down due to not being able to automate our github repo to our ubuntu server. Thomas was able to figure out how to automate our github repo which allowed us to overcome our biggest hurdle for this second sprint. Goal for our web devs to start working on creating our html web pages and getting a basic layout to continue working on in our third sprint. Another major goal that was accomplished was being able to now build our vagrant box and automating our webpages in the github repo to appear in our webserver.

### Goals for Next Sprint
1. Apache2 server running https protocol for security
2. Implement social media authentication
3. Incorporate Mongoose ODM 

## Bug Tracking
Issue that appeared during this second sprint was trying to overcome automating our github repo download. The script had to be open on the pc in order for it to go through the packer build without erroring ( add the solution to this problem here ). Trying to run our nodejs scripts on our server was giving us errors due to having an older version of nodejs, we overcame this issue by creating a new script that pointed to the newer version of nodejs. Another issue with nodejs was trying to automate npm starting, the system would not continue to build. Big issue was trying to automate copying contents from our github repo to the 
/var/www/html directory in our ubuntu server, this issue was resolved by trail and error using different arguments in our scripts.

## Security

Main security goal for this sprint was to make sure we can automate our team github repo to our ubuntu server using our github deploy keys.

## Team Comments

### Project Manager

During this second sprint I was able to accomplish the following:
- Creating small to medium sized goals for team members
- Apply tasks to Trello board
- Make sure github has no errors that could affect the development of the project
- Make sure team is working on objectives
- Help any team member if they come across a problem
- Give a status on how progess is going on development
- Continue working on ubuntu server

During this second sprint I was able to create a script to automate copying all of our webpage files from out github repo directory to the /var/www/html directory. I have also overcame an issue that we were having with an older version of nodejs which wasnt working with the files our team had. I figured out how to create a script to automate downloading the newest version of nodejs, which now is able to run the files our team has. Moving on I also worked inside of the vagrant file and have created a port forwarding so we can access our webserver and also our nodejs through a web browser on the host machine.

### Developer
During this second Sprint I functioned as the Developer. I was responsible for creating the index and login page of our platform. Based on the design that our team agreed on in the previous Sprint, I worked along with Vince to complete the layout of the pages, I worked on modifying the CSS to make it look like our proposed design, and Vince worked on the JavaScript portion. So far, our design consists of the main page that gives the user the option of sign up or login in, and a login page where the user can enter their credentials to be validated. We successfully completed the tasks that we had for this Sprint and plan to continue with the remaining pages in the next Sprint. 

### Jr. Developer



### IT Operations
During the second sprint, I have created the html and CSS webpages along with Leydi. I have created the navigation bar with the drop-down menu to help the user navigate through the webpage. Also, we have created the index page which will give the user options to login or signup and even give some more information about our site. Then, we have the login page where the user can enter their username and password to login and if they have trouble a java script message will be displayed on the screen. Next, we have developed the user page, which I am still currently working on building a thumbnail card to give a similar feel to Instagram, so the user can scroll down on pictures located on the news feed, which they will be able to vote on which items should be fixed at IIT. Also, we have an admin page that will be like the user page, but allow administrative access to delete posts and prioritize them. In the next sprint, the goal for the web design will be to finish creating the thumbnail voting cards and figure out how to let the user upload photos they would like to post. 

### UI/UX Developer



## References

- https://blog.codeship.com/packer-vagrant-tutorial/
- Instructor Packer.io tutorial
- The Dev Ops Handbook
- https://nodejs.org/en/download/package-manager/
