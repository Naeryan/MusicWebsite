// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCzppowdtbzxZNaQFBDypT7zdta-YCciLc',
  	authDomain: 'musicwebsite-b4c6e.firebaseapp.com',
  	databaseURL: 'https://musicwebsite-b4c6e.firebaseio.com',
  	projectID: 'musicwebsite-b4c6e',
  	storageBucket: 'musicwebsite-b4c6e.appspot.com',
  	messagingSenderId: '406944941204'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
