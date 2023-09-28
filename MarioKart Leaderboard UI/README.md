<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<!-- <br />
<div align="center">
  <a href="https://github.com/w00kster/mariokart-leaderboard">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">project_title</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/w00kster/mariokart-leaderboard"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/w00kster/mariokart-leaderboard">View Demo</a>
    ·
    <a href="https://github.com/w00kster/mariokart-leaderboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/w00kster/mariokart-leaderboard/issues">Request Feature</a>
  </p>
</div> -->



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
        </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#steps-to-connect-mysql-database-to-html-form">Steps to Connect MySQL Database to HTML Form</a></li>
        <li><a href="#how-to-run-locally">How To Run Locally</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

We want to design a single interface for users to interact with the database and post their times for Mario Kart.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- * [![Next][Next.js]][Next-url] -->
<!-- * [![React][React.js]][React-url] -->
<!-- * [![Vue][Vue.js]][Vue-url] -->
<!-- * [![Angular][Angular.io]][Angular-url] -->
<!-- * [![Svelte][Svelte.dev]][Svelte-url] -->
<!-- * [![Laravel][Laravel.com]][Laravel-url] -->
<!-- * [![Bootstrap][Bootstrap.com]][Bootstrap-url] -->
<!-- * [![JQuery][JQuery.com]][JQuery-url] -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

<!-- This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. -->

### Requirements
<!-- This is an example of how to list things you need to use the software and how to install them -->
- Install npm (local device specific).
  - npm packages:
    - mysql2
    - dotenv
    - slick-carousel 
      - `npm install slick-carousel`
    - grid 
      - `npm install grid`
    - jquery 
      - `npm install jquery`

### Steps to Connect MySQL Database to HTML Form
- Open command line and navigate to the MarioKart Leaderboard UI folder on your local machine
  - Run command `npm init` to create a package.json file.
    - Configure the package.json file, give it a description and set the entry point as connect.js
  - Next, install node.js for MySQL2 module by using the command `npm install mysql2` 
    - This will allow you to call on the MySQL2 library in order to connect the website to the MySQL Database
  - Finally, you will need to install dotenv by running the command `npm install dotenv`
    - This will allow you to hide your private connection information in a .env file and tap into it in the connect.js

### How To Run Locally
<!-- Information about user Docker for local MySQL db -->
- Clone a copy of this repo to your local machine. This can be done in the command line by navigating to the desired directory, then running:

        git clone https://github.com/w00kster/mariokart-leaderboard.git
- Once you have a local version of this repository, you'll need to set up your local development environment:
    - In the command line run the below command to Download the MySQL image:
              
              docker pull mysql
    - To start the MySQL instance run the below command (ensuring to update the name and secret password ): 
            
            docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8.0.26

            

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/w00kster/mariokart-leaderboard/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

<!-- Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

<!-- Distributed under the MIT License. See `LICENSE.txt` for more information. -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

<!-- Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/w00kster/mariokart-leaderboard](https://github.com/w00kster/mariokart-leaderboard) -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<!-- * []()
* []()
* []() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/w00kster/mariokart-leaderboard.svg?style=for-the-badge
[contributors-url]: https://github.com/w00kster/mariokart-leaderboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/w00kster/mariokart-leaderboard.svg?style=for-the-badge
[forks-url]: https://github.com/w00kster/mariokart-leaderboard/network/members
[stars-shield]: https://img.shields.io/github/stars/w00kster/mariokart-leaderboard.svg?style=for-the-badge
[stars-url]: https://github.com/w00kster/mariokart-leaderboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/w00kster/mariokart-leaderboard.svg?style=for-the-badge
[issues-url]: https://github.com/w00kster/mariokart-leaderboard/issues
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 