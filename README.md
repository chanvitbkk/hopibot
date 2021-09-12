## Hopibot 
Hopibot is the hospital website that implemented Chatbot and 2-Factor authentications via Google Firebase. The patient's relative can asking the information about the patient by entering the command on the Chatbot chatbox.

## Tools
1. Google Firebase Console
2. Command Line Tool (or Terminal)
3. Email (for verifying)
4. Mobile (for OTP)

## Create Firebase Project
1. Create Firebase project https://console.firebase.google.com/
2. Go to Web Application and register web app
3. :white_check_mark: Also setup Firebase Hosting for this app and click Register app
4. Install firebase 
```
npm install firebase
```
5. Install Firebase CLI
```
npm install -g firebase-tool
```
6. Deploy to Firebase Hosting (Need to be Google account)
```
$ firebase login 
```
```
firebase init
```
```
firebase deploy
```

## Terminal 
1. Firebase initation
```
firebase init
```
- Select all function (Incase using database. Need to create database first.)<br>
- Select all function (if needed)
- :white_check_mark: For all file rules (For me it's overwrite because I alreay have one)

![](/src/READMEassets/firebase1.png)

2. Choose a folder to deploy (Generally Public)

![](/src/READMEassets/firebase2.png)

3. Connect with or without GitHub (y/n) 
- Connect to GitHub (format: user/repository)

![](/src/READMEassets/firebase3.png)

4. After that feel free to press ENTER untill finish :tada:

### :fire: Enjoy with the Firebase project :fire:

## For 2 Factor Authentications

Please select on of these function to the authentication process

![](/src/READMEassets/authentication.png)

## Deploy :rocket:

```
firebase deploy
```
Only hosting
```
firebase deploy --only hosting
```

## References :pushpin:
https://firebase.google.com/docs/cli