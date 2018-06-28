# Contributing to LearningLab
This guideline is designed to organize and make contribution changes to
LearningLab run as smoothly and efficiently as possible.
## Clone the Repository
* Clone the LearningLab repository.
  * `git clone https://github.com/STSILABS/LearningLab.git`
* For information on forking a repo and cloning to your local machine, see [Fork a repo](https://help.github.com/articles/fork-a-repo/)
## Making Changes
* Create a topic branch from where you want to base your work.
  * `git checkout -b new-branch-name`
  
* Make your changes and commit to local machine
  * `git add .` : More info on [git add](https://git-scm.com/docs/git-add)
  * `git commit` : More info on [git commit](https://git-scm.com/docs/git-commit)
  
  **NOTE:** Follow the guideline for [writing good commit](http://chris.beams.io/posts/git-commit/) message
  * Make sure your tests pass!
  
## Pull in Main Branch
  * `git pull origin gh-pages`
  * If necessary, resolve [Merge Conflicts](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/)
  
## Push Feat
  * Push your changes the new-branch-name in your fork of the repository.
  * `git push origin new-branch-name`: More info on [git push](https://git-scm.com/docs/git-push)
  
## Pull Request
  * Using Github.com UI, submit the new-branch-name pull request.
  * Wait for Approval
  * More information on [Pull Request](https://help.github.com/articles/using-pull-requests/)
  
  
  **NOTE:** Request code Review e.g slack channel, discussion, comments
   * Pull Request message guidance (Closing issues in waffle.io)
   * e.g. `git commit -m "closes #104"`
