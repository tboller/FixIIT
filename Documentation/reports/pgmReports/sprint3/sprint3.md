# Sprint 3 Team 6

## Team Roles

### Project Manager
Vince Giaimo

### Developer
Matteo Giaimo

### Jr. Developer
Leydi Suriano

### IT Operations
Thomas Boller

### UI/UX Developer
Emmanuel Zambrano

## Sprint 2 Goals

Primary goals for Third sprint

1. Apache2 server running https protocol for security
2. Implement social media authentication
3. Incorporate Mongoose ODM 
4. Get our backend and front end both running on vagrant 
5. add features to webpages/design

## Sprint Accomplishments


### Accomplishments
This sprint our team has accomplished creating a multi-machine enviorment consisting of a load-balancer and two servers. We have created a new packer build of ubuntu that is running nginx service, which is used as a load balancer. Working on translating html into angular componets. 



### Goals for Next Sprint
1. Https with load balancer and webservers
2. Forward node js with load balancer
3. From vagrant we will run a local shell script to connect to cloud database
4.


## Bug Tracking
There was an issue with the packer iso that linked to the webpage url, what happend is the software got updated and the version name changed. This issue was resolved quickly by correcting the url name to match the version. Angular and css code are not matching up properly. Can't get node js traffic to foward with load balancer. 


## Security
Implemented a load balancer, which helps secure our web servers. Also, we have automated authenticating to a cloud MangoDB server. 

## Team Comments

### Project Manager
Vincenzo Giaimo

During this Third sprint I was able to accomplish the following:
- Creating goals for team members
- Applied tasks to Trello board
- Monitored Github
- Monitored team working on objectives
- Help prepair team for midterm deployment
- kept team on track and updated on project progress
- Continue to work on webdesign 

During the third sprint I was managing the group by making goals that we could meet for the sprint deadline. I also managed the trello board by creating tasks for each team member. In addition, I have done some research on how to create cards that would display our photos on the webpage, to give a social media user expirence when scrolling through content. Lastly, I worked on this sprint 3 report and created the midterm presentation/report for the class.

### Developers
Matteo Giaimo

For sprint 3 my main task was to create a multi machine envirornment. The first step I took was to create a new packer build to automate creating a ubuntu virtual machine image running nginx, this new packer build will be used as a load balancer that will forward traffic to our upstream web servers. The multi machince environment consists of 1 load balancer and 2 identical web servers. I then had to modify our machines vagrant file to open the correct ports and assign static ip addresses. I also worked on adding to our post installation script to automatically build the nodejs depdencies needed in order to start the service.

### Jr. Developer
Leydi Suriano

During this third Sprint I functioned as the Jr. Developer. I was responsible for creating the user and admin page of our platform. Based on the design that our team agreed on in the previous Sprint, I worked along with Vince to complete the layout of the pages, I worked on modifying the CSS to make it look like our proposed design. So far, our design consists of the main page that gives the user the option of sign up or login in, login page where the user can enter their credentials to be validated, user page which will be available to validated users, and admin page which will be available to validated admin users. We successfully completed the tasks that we had for this Sprint and plan to continue perfecting the pages design in the next Sprint. 

### IT Operations
Thomas Boller
During this third Sprint I was in the role of IT Operations. During this sprint I have been attempting to transfer our HTML and CSS designed website into Angular 5 components.  This needs to be done in order to have a fully coordinated front and backend. As part of this I worked with the HTML and CSS code provided by Leydi and Vince and also the Node backend code provided by Emmanuel. 

### UI/UX Developer
Emmanuel Zambrano

## References

- https://blog.codeship.com/packer-vagrant-tutorial/
- Instructor Packer.io tutorial
- The Dev Ops Handbook
- https://nodejs.org/en/download/package-manager/
- https://www.w3schools.com/howto/howto_css_team.asp