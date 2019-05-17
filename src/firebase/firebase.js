import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//             });
//         });

//     console.log(expenses);
// }, (e) => {
//     console.log('Unable to fetch data', e);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });

//       console.log(expenses);
//   });
  
// database.ref('expenses').push({
//     description: 'Transportation',
//     note: 'Top up my EZ-Link Card',
//     amount: 93.50,
//     createdAt: 4444321
// });

//   database.ref('notes').push({
//     title: 'Coure Topics',
//     body: 'React, Angular, Vue'
//   });

//   const onPersonChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//   }, (e) => {
//     console.log('Unable to fetch data', e);
//   });

//   database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

//  database.ref().set({
//       name: 'Vern Seaw',
//       age: 27,
//       stressLevel: 6,
//       job: {
//           title: 'Software Engineer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Singapore',
//           country: 'Singapore'
//       },
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('Error:', e)
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });

//   database.ref('age').set(28);
//   database.ref('location/city').set('Ang Mo Kio');

// database.ref('isSingle').remove()
//   .then(() => {
//         console.log('Attribute is removed');
//   })
//   .catch((e) => {
//         console.log('Error:', e);
//   });