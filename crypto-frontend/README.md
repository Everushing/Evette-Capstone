# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Crypto-frontend...
This is a frontend application for a cryptocurrency price tracking app built using React. It utilizes Axios for API requests and React Router for navigation between different pages.

Installation
To run this application locally, follow these steps:

1.Clone the repository: https://github.com/Everushing/Evette-Capstone.git

2.Install dependencies:
npm install
Dependencies
React - A JavaScript library for building user interfaces.
React DOM - Provides DOM-specific methods that can be used at the top level of your app.
React Router DOM - Declarative routing for React applications.
Axios - Promise-based HTTP client for the browser and Node.js.

Make sure you have Node.js and npm installed on your machine.

3. npm start or npm run dev 
This will start the development server and open the application in your default web browser

Project Structure
The project structure includes the following components and pages:

Components:

Nav.jsx - Navigation component for the app.
Pages:

Currencies.jsx - Displays a list of cryptocurrencies with links to their respective price details.
Login.jsx - Login page for user authentication.
Main.jsx - Main landing page or dashboard of the application.
Price.jsx - Page displaying the current price of a selected cryptocurrency.
Signup.jsx - Signup page for new user registration.
Other Files:

App.jsx - Main component where routing and layout are defined.
App.css - Stylesheet for the entire application.
Usage
Navigation:
Navigate to different pages using the links provided in the Nav.jsx component.
Functionality:
Login: Enter valid credentials to access the application.
Signup: Create a new account with a valid email and password.
Currencies: View a list of cryptocurrencies and click on any to see its current price.
Price: Displays the current exchange rate of the selected cryptocurrency.



