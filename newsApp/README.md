## NewsApp

This is a React-Redux-node web app, which pulls the specific (Top 10) news of a news channel from "NewsApi.org" Api.

## Implementation

This app uses React-redux for building the frontend part and node(express) for backend and webpack.js for files management. What's more, it uses the bootsrap and less for styling.

For optimization, it uses the sessionStorage to save the articles, which dynamically feteched (wrapped this inside a promise) from "NewsApi.org" Api. The sessionStorage will refresh if user hit the refresh buttons.

## Usage

1. install node
2. install the whole newsApp zip
3. cd newsApp && npm i
4. npm start
5. open another terminal and cd newsApp
6. webpack
7. open localhost:3000

