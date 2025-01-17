# 🎥 Movie Search App

## Overview

The **Movie Search App** allows users to search for movies, view detailed information, and save their favorite films. It leverages the **OMDB API** to retrieve movie data.

## Prerequisites

Before using this project, you need an **API key** from the OMDB API. Here's how to obtain it:

1. Go to the [OMDB API website](https://www.omdbapi.com/apikey.aspx).
2. Fill in the sign-up form with your email address.
3. Check your email for a confirmation message and click **Activate Key**.
4. Copy the API key from the email.

Make sure to replace the placeholder `YOUR_API_KEY` in the `script.js` file with your actual API key.

---

## Project Structure

- **Starter Files**:
  - Contains the HTML and CSS files.
  - Focus on writing JavaScript to implement functionality.
- **Completed Files**:
  - Includes the full project with HTML, CSS, and JavaScript.

---

## Instructions

1. Add your **API key** to the `API_URL` variable in the `script.js` file:
   ```javascript
   const URL = "https://www.omdbapi.com/?apikey=YOUR_API_KEY";
   ```
2. Open the `index.html` file in a browser.
3. Use the search bar to find movies.
4. Add your favorite movies to the favorites section.

---

## Features

- Search for movies through the OMDB API.
- Store your favorite movies using **localStorage**.
- Add and remove movies from the favorites list dynamically.
