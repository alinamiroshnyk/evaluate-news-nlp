# Project Instructions

In this repo you can see a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using an exciting new api called Aylien, we can build a simple web interface to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Getting started

1. To start you need to clone this repo

2. `cd` to the corresponding folder and run this command:
`npm install`
This command will install all the necessary dependencies.

3. Then you'll need to create a new `.env` file  in the project root directory and set the API `id` and `key` from  [Aylien](https://docs.aylien.com/newsapi/#getting-started)

4. Run in your terminal (and don't close it):
`npm run dev`

5. Run in another terminal:
`npm start`

## Usage
Enter the link to the text field and hit Submit button.