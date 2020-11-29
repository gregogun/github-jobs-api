# gitjobs

## Overview

This app was originally created as a submission for the Chingu Voyage 25 solo pre-solo project.

Pulling data from the [Github Jobs API](https://jobs.github.com/api), it's used to create a site for those seeking their first/next job in tech with re-imagined design and functionality.

**LIVE LINK** - https://go-gitjobs.netlify.app/

## Features

- After pulling the data from the Github Jobs API, this is then displayed to the user in a list of cards.
- Users are initially able to see a maximum of 50 jobs  with the option to load more via a button and are also notified how many jobs are currently displayed.
- Upon clicking on the job title, users can view the job description, check out the company site and then hit then 'Apply Now' button to be taken to the link on Github Jobs where they can apply for the role.
- Users can also search for jobs based on the title, company, location and/or whether they are full time only.
- After loading the first batch of jobs upon loading the site, it's ensured that each query sent to the API endpoints only fetches the necessary data from the API, which helps to boost performance to promote a more user-friendly experience.

## Running the project

**Live version**:

[**gitjobs**](https://go-gitjobs.netlify.app/)

- From the repo:

### `git clone`

Clone the project locally.

- On the command line, you can run:

### `npm install`

Installs dependencies required for the project to run.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

## Dev Dependencies

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)
- [React-DOM](https://www.npmjs.com/package/react-dom)
- [Jest](https://jestjs.io/)
- [Chakra UI](https://chakra-ui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Storybook](https://storybook.js.org/)

## Features to be added

- Scroll to top button
- Users can save job to a 'favourites' list which will be held there for the duration of their session
- Testing (use Jet to perform unit tests)
