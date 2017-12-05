# GymApp

### Frontend development
We are using React Native to build the front end. 

#### Required Tools
##### Yarn
Packages are managed using Yarn. Get it here: https://yarnpkg.com/en/
Yarn uses the same registry as NPM but has some nice add ons, like caching packages locally and the such.

##### Expo SDK + app
Next, you will need to install Expo on your mobile device. 
Expo website is here https://expo.io/ but you can find the app in the Play Store or App Store.
Expo is a app + service that will build your React Native app for you and supports slick features like Hot Reloading. You don't even need the Android SDK or Xcode!


#### Running
Now you installed Yarn on your PC and Expo on your mobile phone, go into the `client` folder using a terminal, and run `yarn install` to install all the dependencies. 
Hopefully that goes okay.
Now you should simply be able to run `yarn start`, and a QR code will appear in the terminal. Scan it using the Expo app, and you are good to go!
Try editing `App.js` - the application on your phone should instantly reload.

### Backend development

We are using .NET Core for the backend. Get it here: https://www.microsoft.com/net/download/

You can open it in Visual Studio 2017, VSCode, or any editor. `cd backend` into the project, then run `dotnet restore` to install the packages. Run `dotnet build` to build. Then `dotnet run` to run. Access localhost:5000/api/values and you should see `["value1","value2"]`.


