Prerequisites:
Install Node.js (v14.x or later): Download Node.js
Install Appium: Run npm install -g appium in the terminal to install Appium globally.
Install Appium Desktop: Download Appium Desktop (optional for GUI-based debugging).
Install Android Studio: Download and set up Android Studio to use Android emulators.
Install Appium Drivers: For mobile automation, install Appium drivers (e.g., appium@next for the latest version).

Set Up Android Emulator:
Open Android Studio, create an AVD (Android Virtual Device), and start the emulator.

Install Dependencies:

Install required libraries:
bash
Copy
Edit
npm init -y
npm install appium --save-dev
npm install webdriverio --save-dev
npm install @wdio/appium-service --save-dev
npm install chai --save-dev
Set Up Environment Variables:
Set ANDROID_HOME to your Android SDK path.
Add necessary tools like platform-tools to your PATH.

run appium to start the appium server.
Use appium inspector to get the xpath of the elements. ( use host and other details based on the details of the server )

Troubleshooting:
Ensure Android emulator is running and accessible.
Check the Appium server logs for any connection or capability issues.
Validate that the correct platformVersion, deviceName, and app path are set in your script.
