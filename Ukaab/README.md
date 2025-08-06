# 📱 Ukaab Android App

Welcome to the Ukaab Android app! This repository contains the React Native codebase for our mobile application.

This guide is tailored for interns or new developers joining the team. Please follow the instructions carefully to get the app up and running in your local development environment.

---

## 🚀 Project Overview

- **Platform:** React Native
- **Backend:** Supabase (Authentication, Realtime, Storage, Database)
- **API Gateway / Hosting:** Railway
- **Package Manager:** `npm` (no Yarn used)

---

## 📦 Prerequisites

Make sure the following tools are installed before continuing:

| Tool | Required Version |
|------|------------------|
| Node.js | >= 18.x.x |
| npm | >= 9.x |
| Git | Latest |
| Android Studio | Latest |
| Java | >= 17 (required for Gradle) |
| VS Code | Recommended |

---

## 📁 Project Setup

```bash
# Clone the repository
git clone https://github.com/Ukaab-The-Evolution/android-app.git

# Navigate into the project
cd ukaab

# Install dependencies
npm install

🧪 Running the App
Step 1: Start Metro Bundler
npx react-native start

Step 2: Launch Android App
In a separate terminal:
npx react-native run-android
Make sure you have an Android emulator running or a physical device connected.

🔐 Setting Up .env File
Create a .env file in the root directory:

bash
touch .env
Here’s a sample .env file template you can follow:

env
# Supabase credentials
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Railway API endpoint (if using Railway backend)
RAILWAY_API_URL=https://your-api.up.railway.app

# Other environment variables
APP_ENV=development
🚨 Make sure you never commit .env to the repository. It's ignored in .gitignore.

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);


Paste it in the .env under RAILWAY_API_URL

Use this base URL to connect to backend endpoints from your frontend code.

🛠️ Useful Commands
Command	Description
npx react-native start	Starts the Metro bundler
npx react-native run-android	Builds and runs the Android app
npm install	Installs dependencies
npm run clean	Optional: custom clean script if available
adb devices	Lists connected Android devices

⚠️ Troubleshooting
Emulator not starting? Run it manually from Android Studio or use:

emulator -avd <your_avd_name>
Build issues? Try:

cd android
./gradlew clean
👨‍💻 Intern Workflow 

Summary

Clone the repo

Install dependencies via npm install

Create .env with Supabase and Railway credentials

Run Metro bundler

Run on Android via npx react-native run-android

Ask your mentor or team lead for Supabase and Railway credentials if you don't have access.