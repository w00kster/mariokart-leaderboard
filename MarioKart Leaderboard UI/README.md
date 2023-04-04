We want to design a single interface for users to interact with the database and post their times for Mario Kart.

Requirements:

- Install npm (local device specific).

STEPS TO CONNECT MYSQL DATABASE TO HTML FORM:
- Open command line and navigate to the MarioKart Leaderboard UI folder on your local machine
  - Run command `npm init` to create a package.json file.
    - Configure the package.json file, give it a description and set the entry point as connect.js
  - Next, install node.js for MySQL2 module by using the command `npm install mysql2` 
    - This will allow you to call on the MySQL2 library in order to connect the website to the MySQL Database
  - Finally, you will need to install dotenv by running the command `npm install dotenv`
    - This will allow you to hide your private connection information in a .env file and tap into it in the connect.js