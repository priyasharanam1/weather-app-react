# Weather App

A simple React application to fetch and display weather information for a given location using the OpenWeatherMap API.

## Features

- Fetches and displays current weather data for a specified location.
- Displays temperature, weather description, wind speed, "feels like" temperature, and humidity.
- Provides error handling for invalid locations.

## Screenshot

![Weather App Screenshot](./assets/screenshot.png)

## Technologies Used

- React
- Axios for API requests
- OpenWeatherMap API
- CSS for styling

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/priyasharanam1/weather-app-react.git
    cd weather-app-react
    ```

2. Install the dependencies:

    Using npm:
    ```sh
    npm install
    ```

    Using yarn:
    ```sh
    yarn install
    ```

3. Obtain an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).


### Running the Application

Using npm:
```sh
npm start

Using yarn:
```sh
yarn start

Open your browser and navigate to http://localhost:3000 to see the app in action.

### Running the Application
1. Enter the name of the location you want to search for in the input field.
2. Press Enter to fetch the weather data.
3. The weather information will be displayed, including temperature, weather description, wind   speed, "feels like" temperature, and humidity.
4. Project Structure