# Color definitions

## Running the project 

### Install dependencies

To run the project Nodejs and Yarn are required(Node.js 22.14.0)

To setup dependencies run:
`yarn`

### Run the dev instance

To run the project client use:
`yarn dev`

To run the mocked api use:
`npx json-server db.json`

### Building the project

To build the project use:
`yarn build`

## Tools used
For the development of this app I used the following libs:
Tailwind CSS for the UI
React
JSON Server for API simulation
Axios for API request
Vite with aliases
ESLint for Code checking

Additionally, Snyx was used to security monitoring of the repository, for demonstration purposes, to monitor for security threats and outdated packages.

## The approach
Usually I would use the Test Driven approach to writting the code, but for this exercise I first built the UI, then API integration and finally store using Context for easier reviewing of the code and approaches used. Additionally I used a standarzied Git flow using feature, fix and chore branch naming conventions and using Pull requests through squashed commits to merge changes to into the codebase.
