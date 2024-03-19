MERN E-Commerce App using React
This project is a simple MERN (MongoDB, Express, React, Node.js) e-commerce app using React for the frontend.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js and npm installed
MongoDB installed
Installing
Clone the repository
Edit
Full Screen
Copy code
git clone https://github.com/your-username/mern-ecommerce.git
Install the dependencies
Edit
Full Screen
Copy code
cd mern-ecommerce
npm install
Create a .env file in the root directory and add the following:
Edit
Full Screen
Copy code
MONGO_URI=mongodb://localhost:27017/mern-ecommerce
JWT_SECRET=your-jwt-secret
Start the application
Edit
Full Screen
Copy code
npm run dev
Database Seed
The seed command will create an admin user in the database
The email and password are passed with the command as arguments
Like below command, replace brackets with email and password.
Edit
Full Screen
Copy code
npm run seed:db [email-***@****.com] [password-******]
Demo
This application is deployed on Vercel. Please check it out here.

See admin dashboard demo

Building for Production
Simple build for production
Edit
Full Screen
Copy code
npm run build
Run build for production
Edit
Full Screen
Copy code
npm start
Languages & Tools
Node
Express
React
