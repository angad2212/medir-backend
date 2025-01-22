# Medir Backend

## Overview
Medir is a Node.js and Express.js backend system for managing APIs related to medicines, pharmacies, and users. It uses MongoDB for data storage and JWT for authentication.

## Technologies Used
1. **Node.js**: Runtime environment for building the server.
2. **Express.js**: Framework for API routing and middleware.
3. **MongoDB**: NoSQL database for storing medicines, pharmacies, and user data.
4. **Mongoose**: ODM library for MongoDB schema and model management.
5. **JWT**: Secure user authentication.
6. **bcrypt**: Password hashing.

## Key Routes
- **Medicine API**:
  - `GET /medicines?name=xyz`: Search medicines by name.
  - `GET /medicines/:id`: Fetch specific medicine details.

- **Pharmacy API**:
  - `GET /pharmacies?medicineId=xyz`: List pharmacies offering a specific medicine with prices.

- **User API**:
  - `POST /signup`: Register a user with hashed passwords.
  - `POST /login`: Authenticate user and issue a JWT.
  - `GET /favorites`: Retrieve favorite medicines (protected).

## Description
Medir simplifies medicine and pharmacy management, enabling users to search medicines, view available pharmacies, and maintain personalized favorites. The secure JWT-based authentication ensures data protection.

---

For setup and running instructions, see the full documentation.
