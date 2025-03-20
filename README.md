# LingashPortfolio

This project was build using Angular 18, Angular Material, Bootstrap, SCSS

This Project is live at - https://lingashkassilingam.github.io/lingash-portfolio

How to Deploy Angular 18 app to GitHub Pages (Docs Method) -
There are two methods - Docs and Root (Using ghPages from Angular CLI)
I have used Docs method.

Step 1 - Update the angular.json file output path
 "outputPath": {
              "base": "docs",
              "browser": ""
            }
Note - We are forcing not to browser folder since github pages looks for index.html directly inside docs folder.

Step 2 - Ng Build with your repo name
ng build --base-href /<your github repo name>/

Step 3 - Check the index.html file inside docs folder
If your base href is not like this - <base href="/<your github repo name>/">
replace it with the above code.

Step 4 - Deploy your App in GitHub pages
Commit and push your changes to your repo.
Go to repo settings -> code and automation -> pages
Select your branch or use main -> folder - docs -> Save.
That's it your app will be deployed in few minutes!
            
