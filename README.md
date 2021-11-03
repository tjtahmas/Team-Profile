# Team Member Generator
## Description
The Team Member Generator is a prompt-driven HTML-file generator that allows you to add a team manager, engineers, and interns. The motivation for this project was to easily consolidate contact information for a team in one organized place. This project was built so that various teams could generate contact pages for their own projects in the future. It is a quick way to get everyone's contact information stored in one place and easily share with the rest of the team. My skills using classes, subclasses, and npm packages came in handy while creating this project. 

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To install the Team Member Generator, first download the files from the Github repo, open a terminal inside the appropriate folder, and run "npm install" (or just install inquirer and fs)

## Usage
![Screenshot](/Screenshot.png)
To begin creating your team, enter "node index.js" in the terminal. You will first be prompted for the team manager's information. From there, you will repeatedly be asked if you would like to add another team member, and if yes, what type of team member (engineer or intern). You may add as many team members as you like. Upon quitting the program, an HTML file with the name 'teamSite.html' will be generated and added to the folder. Open the file in your broswer to view your team. 

## Credits
The Github repository resides at https://github.com/tjtahmas/Team-Profile

You can contact me with any questions or comments about the project at tjtahmas@gmail.com

## License

MIT License

Copyright (c) 2021 Thomas Tahmassebi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
---