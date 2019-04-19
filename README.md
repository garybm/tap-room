# BOSE Site Rebuild

_Published_  3/29/2019 <br>
_Author_ **Gary Bermudez**

# Description:
I will be rebuilding the homepage of the Bose website [Bose Homepage](https://www.bose.com/en_us/index.html).
This is a project I built for school after finishing two weeks of learning ANGULAR to demonstrate understanding of the fundamental concepts. This ANGULAR application includes a working Firebase database and it has been deployed here [My ANGULAR Application](https://site-rebuild-80a1a.firebaseapp.com/).

The homepage will be divided into the following components:

* Header: top navigation menu
* Hero Section
* Recommended: The products information is fed by a Firebase database.
* Bose Home
* Bose Noise
* Sunglasses
* Footer: Social Media
* Footer: Sign up form
* Footer Links
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### Screen captures of the buildout version:

![Header and Hero sections](src/assets/images/sample.png)
![Recommended](src/assets/images/recommended.png)
![Product](src/assets/images/sample2.png)
![Footer](src/assets/images/sample3.png)


# Setup/Installation Requirements

#### Prerequisites:
* npm package manager
* Angular CLI
* Node.js

#### Cloning the Github repository (Mac OSX):
##### Important Note on  Firebase Credentials: If you decide to clone this repository, please make sure to acquire your own Firebase credentials and place them please them in a file `src/app/api-keys.ts`. See example below:

`export const masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };`

* Open the Terminal in your computer
* Make sure you're in your Desktop directory
* Clone the repository `git clone`: https://github.com/garybm/site-rebuild
* In your Terminal, navigate to the project site-rebuild
* Run `npm install` in the terminal to install dependencies
* Run `ng serve --open` in your terminal: The ng serve command launches the server. The --open (or just -o) option automatically opens your browser to http://localhost:4200/.

### Known Bugs

* Media queries have not been applied, the site is currently available only on Desktop view.

### Technologies Used
* HTML
* SCSS
* Angular
* Typescript
* Firebase

## Support and contact details

_Email garybm.17@gmail.com if you have any questions_

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Gary Bermudez**
