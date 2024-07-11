# Study Pal: Collaborative Study Platform

## Getting Started

`node v20.15.0` is required.

### Frontend

```sh
# The frontend project is stored in the `frontend` directory.
cd frontend

# Install project dependencies, should only need to run this once.
npm install

# Start the development server.
npm run dev
```

### Backend

```sh
# The backend project is stored in the `backend` directory.
cd backend

# Install project dependencies, should only need to run this once.
npm install

# Start the development server.
DEBUG=study-pal:* npm start
```

## Contributing

Use [GitHub Issues](https://github.com/devsoc-unsw/trainee-rogue-24t2/issues) to track tasks for this project.
Create tasks for both features and fixes.
Assign tasks to the relevant devs.

Use `git` [branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) to make changes.
For feature implementation, use the `feat/` prefix in your branch names.
For example, to implement a feature for adding friends, create a branch called `feat/add-friend`.
For bug fixing, use the `fix/` prefix in your branch names.
For example, to fix a bug where the user cannot find other users, create a branch called `fix/user-cannot-find-other-users`.

Use pull requests to merge complete changes into `master`.
Request reviews from training leads, who will **squash merge and delete branch** if there are no problems.
Mention the issues (with #) in the description of the pull request to link them.

## Features

- Track your progress using milestones on tasks
- View how your friends are progressing on shared milestones
- Collaborate with friends to accomplish study goals together effortlessly
- Compete against friends in studying for extra motivation
- Hold each other accountable and committed to tasks
- Share resources with your study group

## Roadmap

- Notifications
- Comments and reacts
- Find mentors for particular areas of study as a student
- Find students looking for mentors in your area of expertise as a mentor
