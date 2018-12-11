# db-task

Live demo can be seen here: https://horolug.github.io/db-task/

### Layout
* Menu Dropdown on desktop has unset witdh to cater for different link text
* Dropdown for last menu item is intentionally not centered to handle screens with low resolution 

### User interactions
* Form validation is done only on form submit
* Form validation has 2 rules: "Required value" and "Value must be longer than 3 symbols"
* Error message is constructed dynamically using input label and error type
* Form error handling and click handling for mobile menu are done using jQuery 

### Workflow decisions 
* SASS .scss is used to genereate the stylesheet
* grunt.js is used to compile scss to css 
* .js and .css are not minified 

## To view the static page on local machine: 
* clone the repositoty ```https://github.com/horolug/db-task.git  ```
* Cd into project directory
* open ``` index.html``` in your browser 

## To run the build on local machine you will need to have Ruby, Sass, Grunt CLI
* clone the repositoty ```https://github.com/horolug/db-task.git  ```
* Cd into project directory and run  ``` npm install  ```
* Run ``` grunt  ```
* open ``` index.html``` in your browser 
