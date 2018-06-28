# LearningLab
LearningLab is a web application developed by two interns at STSI, Jimmy Flores and Emmett Dorlester, with the mentorship of STSI Employees Kevin Melendez and Ben Morris. The idea of LearningLab is to create a set of web applications to run on a Raspberry Pi, web applications consisting of a Weather App, a Traffic App, and more. 

[![Build Status](https://travis-ci.org/STSILABS/LearningLab.svg?branch=Develop)](https://travis-ci.org/STSILABS/LearningLab)
[![Coverage Status](https://coveralls.io/repos/github/STSILABS/LearningLab/badge.svg?branch=Develop)](https://coveralls.io/github/STSILABS/LearningLab?branch=Develop)

## Requirements

[Node.js](https://nodejs.org/en/) - Required libraries will be automatically installed by npm when running the app for the first time.

## Install

Clone repository:
```sh
$ git clone https://github.com/STSILABS/LearningLab.git <my-project-name>
$ cd <my-project-name>
```

and run:

```npm
$ npm install
```

## Running the Project

After completing the [installation](#install) step, you're ready to start the project! Below are the commands
available via package.json.

```npm
$ npm start            # Start the development server
$ npm test             # Run tests using jest
$ npm run coverage     # Run tests with coverage option
$ npm run build        # Builds the application to ./dist
```

## Travis CI
We use Travis as our Continuous Integration pipeline to check in code and run our tests with each build.
Setting up [Travis CI](https://travis-ci.org/) is fairly easy. Create an account on their website, and follow the directions to set up your project
which you will need to push to github if you haven't done so already.

**Note:** If your version of Node is higher then 6 you should update the .travis.yml file by changing the node_js version. This
tells Travis CI which version of code to run your build with.

## Coveralls.io
We use Coveralls to monitor code coverage to make sure our test coverage is constantly up to date.
Create an account on [Coveralls.io](https://coveralls.io/) and add the repo on github for your project. Then create a coveralls.yml file using
the command that corresponds to the system you are working in.

```npm
$ touch coveralls.yml        //Unix Command
$ type nul > coveralls.yml   //Windows Command
```

The coveralls.yml file should not be uploaded to github, but it is useful for manually testing that coveralls works
before you do a commit and it runs via Travis CI. Inside the file you will need to add your repo token from the Coveralls.io website. It should look like this:

```yaml
repo_token: YOUR_REPO_TOKEN_GOES_HERE
```

## Semantic UI React
[Semantic UI React](https://react.semantic-ui.com) is included as a dependency in this project and used to create the cards. The CSS file is include via a link tag in ./src/index.html

# Contributing
Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

# Authors
* Jimmy Flores
* Emmett Dorlester

