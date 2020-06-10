# WingsBookClub
## What is it?
A 5-page website (with subpages for stories) made using **HTML5**, **CSS3** and **Bootstrap**.


## What does it do? 
I wanted a website for sharing book recommendations as well as my own writings and friends' stories. 


## Wireframes / mock-ups
I used the old version of the website (made on Repl.it for practice after the five day challenge) as my "mock-up" as well as testing the compatibility of lay-out on [Shoelace](http://shoelace.io/). This has been a very helpful resource in deciding the right sidebar should be hidden on all but the largest screens.


## Design

The chosen colour scheme was influenced by the choice of background picture on the header (an image of myself reading on top of a hill, which went well with the slogan of "Reading Everywhere". I used the ColorPick Eyedropper to find out the exact hex-value of the colours I wanted. 

The fonts used came from [Google Fonts](fonts.google.com). I wanted something fun and quirky, but also had to make sure the main text was legible both in the reviews / summaries on the main pages and on the story pages.

The images of the books are my own pictures of books I own. The drawing for A Dragon's tale was also drawn by myself.  The images for The Elf and The Tree Spirit were commissioned from [Toby Curden Illustration](https://www.tobycurden.com/), the cover photo was my own.

The images contain transitions to make text appear on tapping on / hovering over the cover photo of a book or story. This was done by creating a div that contained the image as a background and then inserting a second div with the content, which has an opacity of 0 until hovered/tapped, when it becomes visible (opacity: 1). Credit where due: Niel McEwen of the Code Institute Tutor team suggested this approach when my original attempt (using an overlaying picture and transitioning to opacity 0) turned out to block the links. For clarity's sake, the code itself was written by me.


## Libraries and other components

As mentioned, **[Bootstrap](https://getbootstrap.com/)** has been used for the grid and the navbar. 

**JQuery** has been added to the document to make Bootstrap components such as the navbar work properly.

EmailJS has been added for form functionality.


## Has it been tested?
Yes, it has been **tested on multiple browsers and devices**.  
The HTML5 and CSS3 have also been validated with **C3W Mark-up Validator** and **C3W CSS Validator**, all errors have been corrected. 


## Deployment
The website has been deployed via GitHub pages.


## Thank you
- to the creators of Bootstrap for having such an efficient framework for mobile-friendly development.
- to Neil McEwen of the tutor team for the help when I ran into a problem with the transitions.
- to Yoni Lavi for the help with getting forms to work. (I know this is technically the next module but it's still great that they're working now!)
- to my fellow students, especially <a href="https://github.com/eventyret" target="_blank">Simen Daehlin</a>, for the ongoing patience and encouragement.
