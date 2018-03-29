# myGym
a simple iOS/Android application for finding local gyms to fit your fitness needs. Due to the potential charges from
Google API usage, this app is not on the iOS or Android marketplace. 

![Welcome Screen](https://github.com/dorandoran/myGym/blob/master/images/welcome%20screen.gif)

Welcome screen and authentication using *Facebook* 

## Application Demo

##### Menu Navigation
![Opening Menu](https://github.com/dorandoran/myGym/blob/master/images/menu%20options.gif)

##### Gym Search 
![Map Search](https://github.com/dorandoran/myGym/blob/master/images/map%20search.gif)
![Gym Deck](https://github.com/dorandoran/myGym/blob/master/images/gym%20deck.gif)

Creates *Tinder*-style cards with information on each gym from your search area.
Swipe right if you are interested in more info on the gym, swipe left if not interested.

#### Liked Gym Review
![Review Gyms](https://github.com/dorandoran/myGym/blob/master/images/review%20gyms.gif)
![Reset Liked Gyms](https://github.com/dorandoran/myGym/blob/master/images/reset%20gyms.gif)

Navigating to the 'Review Gyms' screen allows you to view more information about each gym.
Clicking 'Get More Info!' will open users default browser and bring up the *Google Maps*
information about that particular location. The 'Settings' menu allows you to reset the 
'Review Gyms' list.

## Features
- Cross-Platform (iOS/Android)
- User Authentication with [Facebook Login](https://developers.facebook.com/docs/facebook-login)
- Use of Google Maps for Map View
- One-Time-Login (authentication token saved)
- Offline Data Persistence
- (Optional)Push Notifications

## Running Tests
In order to test the application, several services are required.

#### Prerequisites
- [React-Native](https://facebook.github.io/react-native/)
- [Facebook Developers Account](https://developers.facebook.com/) for API Key
- Google Account for [Google Places API](https://developers.google.com/places/) Key
- [Expo](https://expo.io/) development environment

#### Installing
If you surivived the lengthy install process, you will want to clone the repository:
```sh
 git clone https://github.com/dorandoran/myGym
 cd myGym
```

After navigating to cloned repository folder, make sure you install packages:
```sh
 npm install
```
 
**Lastly, make sure you insert your API keys into the code:**

> In auth_actions.js, line 18:
```javascript
const doFacebookLogin = async (dispatch) => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('[INSERT FACEBOOK DEV KEY]', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
```

>In gym_actions.js, line 15:
```javascript
const GYM_QUERY_PARAMS = {
    radius: 15000,
    type: 'gym',
    key: '[INSERT GOOGLE PLACES API KEY]',
};
```
 
 ## Built With
 - [Axios](https://www.npmjs.com/package/axios)
 - [Expo](https://expo.io/)
 - [Facebook](https://developers.facebook.com/)
 - [Google Places API](https://developers.google.com/places/)
 - [qs](https://www.npmjs.com/package/qs)
 - [Redux](https://redux.js.org/)
 
 # License
 MIT &copy; Phillip Doran
 
 # Acknowledgements
 - Thanks to everyone whose packages I used. You are beautiful people, I don't care what anyone says!
 - Stephen Grider : a true inspiration. I was lost at sea until you gave me the tools to succeed! Thank you so much!!
