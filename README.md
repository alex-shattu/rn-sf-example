### React Native & Salesforce Example App
Based on [forcereact](https://www.npmjs.com/package/forcereact)

<img src="https://github.com/alex-shattu/rn-sf-example/raw/master/screenshots/ios-settings.jpg" alt="React Native Salesforce Example App" width="250">

##### Includes:

- [react-navigation v5](https://www.npmjs.com/package/react-navigation)
- [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)
- [react-native-elements](https://www.npmjs.com/package/react-native-elements)
- [react-native-typography](https://github.com/hectahertz/react-native-typography)
- [redux](https://github.com/reduxjs/redux)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [redux-saga](https://github.com/redux-saga/redux-saga)
- Theming and font scaling
- Platform specific UI
- SalesforceMobileSDK-ReactNative


##### TODO
- [GraphQL Salesforce](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000G0l6nUAB)
- Profile screen with some functionality: edit profile, upload avatar.
- SmartStore
- MobileSync

### Install

For iOS only, installing pods:

`npm run pods`

For installing Salesforce SDK run (npm modules will be installed automatically):

`./installandroid.js` for Android

`./installios.js` for iOS

### Config
Change **remoteAccessConsumerKey** and **oauthRedirectURI** in:

`rn-sf-example/android/app/src/main/res/values/bootconfig.xml` for Android

`rn-sf-example/ios/FirstReact/bootconfig.plist` for iOS

for details read [documentation](http://rajaraodv.github.io/salesforce-react-native-tutorial/mobile-sdk-react-native-adding-connected-app.html)


