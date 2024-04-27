# Sumz (Article Summarization App)
Check out the deployed app [here] https://ai-summarizer-5v1r.onrender.com/

## Overview
This is a web application built for summarizing articles from URLs. It allows users to input a URL of an article, and it provides a summarized version of the article's content. The app utilizes a third-party API for article extraction and summarization.

### Features
- Input field to enter the URL of the article
- Button to submit the URL and fetch the summarized content
- Display area to show the summarized content
- History section to view previously summarized articles
- 
### Technologies Used
- React: Frontend JavaScript library for building user interfaces
- Redux Toolkit: State management library for managing application state
- Tailwind CSS: Utility-first CSS framework for styling the app
- RapidAPI: Third-party API used for article extraction and summarization

### Setup Instructions
-Clone the repository to your local machine.
- Install dependencies using npm install.
- Obtain an API key from RapidAPI for accessing the article summarization API.
- Create a .env file in the root directory and store your API key as - --VITE_RAPID_API_KEY=your_api_key_here.
- Run the development server using npm start.
- Access the app in your browser at http://localhost:5173.

### Usage
- Enter the URL of the article you want to summarize in the input field.
- Click the submit button to fetch and display the summarized content.
- View the summarized content in the display area.
- Optionally, explore the history section to view previously summarized articles.

### Visual Overview:
![sumz](https://github.com/hihassan1998/ai_summarizer/assets/150392365/dac90b06-0b74-4d0a-a84e-fd70c8cf8921)


### License
This project is licensed under the MIT License. See the LICENSE file for details.
