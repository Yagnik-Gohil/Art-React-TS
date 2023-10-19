
## Git Guidelines:

### Branch related Guidelines:

### For new feature:

- feature/new-feature
- feature/sign-up

### For bug/issue fix:
- hotfix/pagination
- hotfix/alert-notification

### For code refactor:
- refactor/code-formatting
- refactor/api-call

### Merge Request Title:

### For new feature:
- [Feature] added signup page
 - [Feature] added pagination

### For Bug/Issue fix:
- [Hot-fix] Remove xyz
- [Hot-fix] fix pagination issue

### For code refactoring:
 - [Refactor] Refactor CSS file
 - [Refactor] Improve responsive design

# Commit Messages:

### For new feature:
 - feat: added signup page
 - feat: added pagination
 
### For bug/issue fix:
 - fix: remove alert from home page
 - fix: fix redirection issue in home page
 
### For refactor:
 - ref: modify CSS and readme file
 - ref: remove commented code

## Useful Commands 

#### commit

- $git commit -m "message"

#### push

- $git push <origin-name> <local-branch-name>
- $git push origin feature/sign-up

#### new branch

- $git branch feature/new-feature

#### checkout branch

- $git checkout feature/new-feature

#### create new branch and checkout

- $git switch -c feature/new-feature 

#### rename branch

- $git branch -m "new name"
#### delete commit but keep the changes

- $git reset HEAD^