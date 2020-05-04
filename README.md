### React Native & Salesforce Example App
Based on [forcereact](https://www.npmjs.com/package/forcereact)

##### Includes:

- [react-navigation v5](https://www.npmjs.com/package/react-navigation)
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
- [react-native-elements](https://www.npmjs.com/package/react-native-elements)

### Install
For installing modules:

`npm i`

For iOS only, installing pods:

`npm run pods`

For installing Salesforce SDK run:

`./installandroid.js` for Android

`./installios.js` for iOS

### Config
Change **remoteAccessConsumerKey** and **oauthRedirectURI** in:

`rn-sf-example/android/app/src/main/res/values/bootconfig.xml` for Android

`rn-sf-example/ios/FirstReact/bootconfig.plist` for iOS

for details read [documentation](http://rajaraodv.github.io/salesforce-react-native-tutorial/mobile-sdk-react-native-adding-connected-app.html)


