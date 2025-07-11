# Weather App

A simple and responsive weather application that allows users to check the current weather conditions for any location.

## Visit

🌤️ [https://check-weather-saisonal.vercel.app/](https://check-weather-saisonal.vercel.app/)

## Features

- **Current Weather Data:** Get real-time weather information, including temperature, pressure, and condition.
- **Location-Based Search:** Search for weather conditions in any city or location.
- **Responsive Design:** The application is optimized for all screen sizes, providing a seamless experience on desktop and mobile devices.
- **Loading and Error States:** Clear indicators for loading and error states to enhance user experience.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Sass:** A CSS preprocessor that adds power and elegance to the basic language.
- **Axios:** A promise-based HTTP client for the browser and Node.js.
- **Prop-Types:** Runtime type checking for React props.
- **ESLint:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js:** Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **API Key:** You will need a Weather API key from [WeatherAPI.com](https://www.weatherapi.com/).

### Installation

1.  **Clone the repo:**

    ```sh
    git clone https://github.com/sonalsai/weather-app.git
    ```

2.  **Install NPM packages:**

    ```sh
    npm install
    ```

3.  **Create a `.env` file in the root of your project and add your API key:**

    ```env
    VITE_WEATHER_API_KEY=your_api_key
    VITE_WEATHER_API_URL=https://api.weatherapi.com/v1
    ```

4.  **Run the development server:**

    ```sh
    npm run dev
    ```

## Usage

Once the development server is running, you can open your browser and navigate to `http://localhost:5173/` to use the application.

## License

Distributed under the MIT License. See `LICENSE` for more information.
