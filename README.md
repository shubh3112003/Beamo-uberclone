Overview

This repository contains the source code for an Uber clone app with additional functionality for food delivery. The app is built using React Native and Expo, making it compatible with both iOS and Android platforms. It utilizes MongoDB for database management, Google Places API for location services, Google Directions API for navigation, and implements login functionality for security purposes.

Features

Ride Booking: Users can request rides similar to Uber, specifying their pickup and drop-off locations.
Food Delivery: In addition to ride booking, users can also order food from restaurants within the app.
Real-Time Tracking: Users can track the status of their ride or food delivery in real-time using the app.
Navigation: Integrated navigation tools powered by Google Directions API provide drivers with optimal routes to reach the pickup and drop-off locations.
Secure Login: Secure login functionality ensures that only authorized users can access the app and its features.
iOS Compatibility: The app is compatible with iOS devices and can be run on the iOS Simulator using Xcode.
Setup Instructions

Clone Repository: Clone this repository to your local machine.

bash
Copy code
git clone https://github.com/your/repository.git
Install Dependencies: Navigate to the project directory and install the necessary dependencies using npm or yarn.

bash
Copy code
cd uber-clone-app
npm install
Set Up MongoDB: Install MongoDB and set up a local or cloud-based database. Update the MongoDB connection string in the app configuration file.

Obtain API Keys: Obtain API keys for Google Places API and Google Directions API. Add these keys to the app configuration file.

Run the App: Start the Expo development server and run the app on the iOS Simulator.

sql
Copy code
expo start
Test the App: Test the app functionality by booking rides, ordering food, and ensuring that navigation and login features work as expected.
few of the output screenshots - 
<img width="1470" alt="Screenshot 2024-05-13 at 9 27 45 PM" src="https://github.com/shubh3112003/Beamo-uberclone/assets/87533795/ff1a6cf6-af99-4972-ae05-b520a71d6835">
<img width="1470" alt="Screenshot 2024-05-13 at 9 28 15 PM" src="https://github.com/shubh3112003/Beamo-uberclone/assets/87533795/674f4625-af54-4d09-aa00-f244a1de2bb5">
<img width="1470" alt="Screenshot 2024-05-13 at 9 28 26 PM" src="https://github.com/shubh3112003/Beamo-uberclone/assets/87533795/dde8304d-d90f-443f-9c36-6a1f1bc539c7">


Contributors

shubh goyal (shubhgoyal311@gmail.com)
License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

React Native
Expo
MongoDB
Google Places API
Google Directions API
