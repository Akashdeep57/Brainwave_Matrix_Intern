# ChatRoomApp

Welcome to the ChatRoomApp project! This project demonstrates a simple real-time chat application built using Firebase, showcasing Firebase’s authentication, database, and hosting features.

# Project Overview
ChatRoomApp is a real-time chat application allowing users to sign in and participate in chat rooms. It utilizes Firebase for backend services, including authentication and real-time data synchronization.

# Features
User authentication with Firebase Authentication
Real-time messaging using Firebase Realtime Database
Hosting on Firebase Hosting
Integration with Firebase Cloud Functions (if applicable)
Analytics and performance monitoring with Firebase
# Setup
# Prerequisites
Ensure Node.js and npm are installed on your machine.
Install Firebase CLI by running npm install -g firebase-tools.
# Clone the Repository
Start by cloning the repository:

git clone https://github.com/username/ChatRoomApp.git

Navigate into the project directory:

cd ChatRoomApp

# Install Dependencies
Navigate to the project directory and install the necessary dependencies:

npm install

# Firebase Configuration
# 1.Initialize Firebase

Run 'firebase init' to set up Firebase in project. Follow the prompts to configure Firebase Hosting, Authentication, and Database.

# 2.Create firebase.json

Ensure to have a firebase.json file in project root with the following content:

{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}

# 3.Update Environment Configuration

Update app with the Firebase configuration from the Firebase Console, including API keys and project details.

# Deployment
Deploy application to Firebase Hosting with:

firebase deploy

Application will be live at: https://fir-chatroom-4841e.web.app upon successful deployment.

# Usage
# 1.Run Locally

To test the app locally, use: firebase serve

Access your app at: http://localhost:5000 in your browser.

# 2.Navigate the App

Sign In: Use Firebase Authentication to sign in.
Chat Rooms: Join or create chat rooms and start chatting in real-time.
