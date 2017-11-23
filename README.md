# GymApp

### Frontend development
We are using React Native to build the front end. 

#### Required Tools
##### Yarn
Packages are managed using Yarn. Get it here: https://yarnpkg.com/en/
Yarn uses the same registry as NPM but has some nice add ons, like caching packages locally and the such.

##### Expo SDK + app
Next, you will need to install Expo on your mobile device. 
Expo is a app + service that will build your React Native app for you and supports slick features like Hot Reloading. You don't even need the Android SDK or Xcode!


#### Running
Now you installed Yarn on your PC and Expo on your mobile phone, go into the `client` folder using a terminal, and run `yarn install` to install all the dependencies. 
Hopefully that goes okay.
Now you should simply be able to run `yarn start`, and a QR code will appear in the terminal. Scan it using the Expo app, and you are good to go!
Try editing `App.js` - the application on your phone should instantly reload.
