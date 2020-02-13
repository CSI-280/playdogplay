# PlayDogPlay website

## Description

A website for pets, the three major features of this site include(subject to change): searching for a breed of pet,
viewing the library of all pets, and a guessing game.
see the current page [here](https://csi-280.github.io/playdogplay/).

## How to Run the program if starting with nothing


### To download the git repository using GitHub

1. Click **Clone or download** at the top right of the page
2. Click **Download zip**
3. Extract the file using a zip extractor (like winzip, 7-zip, etc.)


### To download the git repository and run it using git

1. install node.js (https://nodejs.org/en/) (LTS Perferably)
    (this will take a few minuets)

2. in a terminal, run the following command in a direcotry where you want the project to run from.
```bash
    $ npx create-react-app <name-of-file>
```

3. Run the following commands
```bash
    $ cd <name-of-file>
    $ git init
    $ git remote add origin https://github.com/CSI-280/playdogplay.git
    $ git pull origin master --allow-unrelated-histories -X theirs
	$ git branch --set-upstream-to=origin/master master
    $ npm install --save @petfinder/petfinder-js
```

4. make sure to merge master onto a new branch before pushing

5. to Run
```bash
	npm start
```



### To download the git repository and run it manually

1. install node.js (https://nodejs.org/en/) (LTS Perferably)
    (this will take a few minuets)

2. in a terminal, run the following command in a direcotry where you want the project to run from.
```bash
    $ npx create-react-app <name-of-file>
```

3. download the repository @ https://github.com/CSI-280/playdogplay as a zip

4. Replace the public folder, src folder, and jsons with ones created in step 2.

5. in a terminal, navigate to the directory you created in step 2.

6. run the command 
```bash 
$ npm install --save @petfinder/petfinder-js
```

7. to run
```bash 
$ npm start
```



### Youre all set!





## How to use git

In the direcotry that you created for the project, run the commands:
```bash
$ git init
$ git add remote origin https://github.com/CSI-280/playdogplay.git
```

## Contributors
* Michael Leonard
* Alexander Waters (Correctly)
* Noah Patterson-LaBaw
* Kai Wilens
* Hayden Stegman
* Calvin Rose
