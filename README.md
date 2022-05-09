<h1 align="center">⚛ React Native Starter Kit AWS Amplify⚛</h1>

<p align="center"> 
  <a href='#-intro'><b>Introduction</b></a> 
    &nbsp;&nbsp;—&nbsp;&nbsp; <a href="#-tools"><b>Tools</b></a> 
    &nbsp;&nbsp;—&nbsp;&nbsp; <a href="#-getting-started"><b>Usage</b></a> 
</p>
  
</br>

---

## 👋 Intro

A react native starter kit aws amplify created with latest react native.

This project is created to kick-start your new react native app development with aws amplify. It is using common tools to make your devlopment more easy, all ready to go.

---

## 🧰 Tools

This project is using following common tools:

- **Redux Architecture**
  - [Redux](https://redux.js.org/)
  - [Redux ToolKit](https://redux-toolkit.js.org/)

* **Routing and navigation**
  - [React Navigation v6](https://reactnavigation.org/)

- **Data Caching / Offline**
  - [Redux Persist](https://github.com/rt2zz/redux-persist#readme)

* **Logger**

  - [Redux Logger](https://github.com/LogRocket/redux-logger#readme)

* **AWS Amplify**
  - [AWS Amplify](https://docs.amplify.aws/lib/q/platform/js/)

---

## 🚀 Getting Started

- Add `eslint`, `prettier` and `editor config` plugins into your IDE
- Your machine must have [React Native dependencies](https://reactnative.dev/docs/environment-setup) installed

#### Add AWS config

    1. create aws-exports.js in src/awsConfig directory
    2. export awsConfig
        export const config = {
            aws_cognito_region: 'xxx',
            aws_user_pools_id: 'xxx',
            aws_user_pools_web_client_id: 'xxx',
            aws_mandatory_sign_in: 'disable',
            aws_appsync_graphqlEndpoint: 'xxx',
            aws_appsync_region: 'xxx',
            aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
            aws_appsync_apiKey: 'xxx',
        };

#### Install dependencies

```
yarn && npx pod-install ios
```

#### Android

```
npx react-native run-android
```

#### iOS

```
npx react-native run-ios
```

Or

```
Open project.xcworkspace file from ios folder and build from xcode
```
