
<img width="1290" height="2796" alt="IMG_0234" src="https://github.com/user-attachments/assets/5b6e71da-f5ff-4879-81f2-da6d461529da" />

<img width="1290" height="2796" alt="IMG_0235" src="https://github.com/user-attachments/assets/132cdb3d-7135-4edf-bdc4-60786af5ef46" />

<img width="1290" height="2796" alt="IMG_0236" src="https://github.com/user-attachments/assets/b940c928-0a87-4797-a1a8-121b3f09e6d5" />


**Expo Authentication App (Secure + Modern)**

A secure and modern authentication flow built using the latest Expo SDK, featuring:

1. Signup & Login with validation (React Hook Form + Zod)

2. Encrypted credential storage using Expo SecureStore

3. Zustand global state management

4. Protected routing with Expo Router

5. Persistent session restore after reload & restart

6. Clean UI components and scalable architecture

This project uses Expo's file-based routing and follows best practices for React Native apps.

**Tech Stack**

Expo SDK (Latest)

React Native

Expo Router

Zustand (with secure persistence)

Expo SecureStore

React Hook Form

Zod Validation

**Getting Started**

Install dependencies:

npm install


Start the app:

npx expo start


Open the project on:

iOS Simulator

Android Emulator

Expo Go

Development Build

**Authentication Flow Overview**

User signs up → data stored securely with SecureStore

Password stored separately for extra safety

Login validates credentials securely

Zustand stores the logged-in user in-memory

On app restart → user restored automatically via SecureStore

Unauthorized users are blocked from protected screens


