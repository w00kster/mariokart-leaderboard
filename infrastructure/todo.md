Todo: work on doing some Infrastructure as Code for the database because
- [x] the free account I'm hosting this in will expire end of March
  - [x] I want to be able to re-create it all on a new free acount easily -or-
  - [] update the code to just put it in AWS/Azure or whatever cloud provider
- [] create users (for you two and anyone else that comes along to the project) with relevant privileges []
  - [x] connect to the db with root
    - create users
      - [x] paul
      - [] rosie
      - [] sully
    - grant privileges for relevant role [x--]
      - read/write only on mariokart_leaderboard
  - test with end users
  - remove plaintext password from shell script
  - work out better way to do passwords (no plaintext)
    - terraform random?
    - shove em into 1password vault & share link out ?
  - create service account for the JS function to connect
  
