# Sprint 1 Team 6

## Team Roles

### Project Manager
Thomas Boller

### Developer
Emmanuel Zambrano

### Jr. Developer
Vince Giaimo

### IT Operations
Matteo Giaimo

### UI/UX Developer
Leydi Suriano

## Sprint 1 Goals

For this first sprint we had three primary goals
1. Develop the architecture for our application, and the UI/UX drawings
2. Create a shell of the application and its Webpages
3. Have a functioning Packer/Vagrant Apache Webserver created

Of these goals we can say we successfully accomplished the majority of all three. After learning of the Dev Ops methods there are a number of things we might have changed.
Adapting our goal setting into smaller more immediately accomplished tasks would have made the work more manageable. 

## Sprint Accomplishments

### Accomplishments
Our first goal for this sprint was to develop the architecture for our application and the UI/UX drawings.  We were first able to come up with the drawing for the Database's main tables. Then were drew up how our application's pages would look, and then each individual page. We also managed to put together a drawing of our server's contents. Having these completed we were able to start up a skeleton structure of our application and its pages. Leading us to complete our second goal. The third goal proved most difficult. All of us had to do extensive research on the topic of Packer.io and Vagrant. Our IT Operations specialist for the sprint was eventually able to create a working packer/vagrant box for our server.  We then began work on making that box more secure with git deploy keys. 

### Goals for Next Sprint
- User Login available
- Non user/login web page
- Initial splash page upon login

## Bug Tracking
We ran into an issue with our file structure on github. There was a saved file in a reposity with the special character ':' in the name.
This prevented Windows users from pulling/cloning the repository.  We corrected this by renaming the directory without the ':', and deciding on a file structure and on forking to prevent such an issue from happening again.

## Security

One primary security goal for this sprint is to automate our git download to our vagrant box using deploy keys.

## Team Comments

### Project Manager

During this first sprint I was able to accomplish the following:

- Develop small to midsized goals, and assign tasks to team members
- Writing a scope document
- Coordinate team members to assit one another with goals
- Assisted other team members in accomplishment of goals

During this sprint I spent quite alot of time researching. In particular I spent most of my time researching Vagrant and Packer.io.  Along with those I did significant research on integration with git and security using rsa keys. Further I have spent time research the MEAN stack, particularly node.js and angular.js.

### Developer

For the first sprint, Emmanuel functioned as the developer. The following was accomplished:

- Planned the application architecture and technologies that will be used.
- Created Hello World application using angular and express.
- Setup up hosted online database, mLab, and setup user accounts.

Alot of research was done during this sprint. Research that helped us plan our application architecture and began the setup of the application. For the next Sprint, we plan to build off what has already been created. Our development goals for the next sprint are:

- Add user-login functionality. From past experience, we have come to the conclusion that this should be done first. This includes, beginning to work with the database and use a technology such as passport.js.
- Implement the UI that the UI/UX developer created.

### Jr. Developer

During, this first sprint I have helped develop and create the basic skeleton structure of what our web application design will look with Leydi.  I have created the 
sketch diagram for the news feed page that will represent the main page of our web application. Also, I have done research and worked with the team members to learn 
how to develop the vagrant and packer build for our environment. Furthermore, I have helped do some research on the apache server build that will have all of our configurations 
and will host the teams web application pages. Lastly, I am starting to learn how to use the “Boot Strap” application tool, this will help make our page be more responsive and 
present a professional look to the web application. This won’t start getting implemented until the next sprint. In the web application I will make it consist of a well-designed, 
user friendly navigation bar and there will be a thumb nail design implemented within the news feed, users can interact with voting and commenting on the items that need to be fixed. 

### IT Operations

For the First sprint I was tasked with dealing with “It Operations”. The first thing I started working on was making sure I understand how to use Packer and Vagrant,
this was very challenging and it took a good chuck of time of the first sprint to figure out. I was having issues understanding how packer would automate builds to
the ubuntu server. Tom stumbled across an article that really helped me understand how Packer and Vagrant automates builds. The article helped me come to a better
understanding on how the ubuntu.json file was linked to the post_install_script. Once I understood that connection I was able to enter my configurations and build
the ubuntu-server to my Specs. The Ubuntu Server we have running currently has the following packages installed, npm, NodeJs and Git. The following service that I have
installed and running is Apache2 web server, although currently it is only using protocol http and is not secure at the moment. I have also created a visio diagram of
our current services and packages we have installed on our server so we can easily keep track of our builds from our Server diagram. I also made sure that I created a
document to help guide my team through building our vagrant build so if they ever had any confusion they can reference that document. There is still a ton of work that
needs to be completed on our server in order to make sure we have a stable environment that we can rapidly deploy within minutes.

### UI/UX Developer

During this first Sprint I functioned as the UI/UX Developer. I was responsible for creating the basic UI/UX design of our web page and worked along with Vince to accomplish that. 
After all the team agreed with one design I drafted a sample for the index, login, user and admin pages. I also created a document that outlines each page’s design with tentative 
fonts and colors. We are still working on the design of the logo. I also put together a basic HTML for such pages to give us a skeleton to start working on. I did some research on 
the web page layout, I looked for some colors that would usually work together and fonts that would go well with our design. But still, we are planning on perfecting this design 
as we go along.

## References

- https://blog.codeship.com/packer-vagrant-tutorial/
- Instructor Packer.io tutorial
- The Dev Ops Handbook
