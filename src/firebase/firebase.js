import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  googleAuthProvider.setCustomParameters({
    'prompt': 'select_account'
})

  export { firebase, googleAuthProvider, database as default }

//   database.ref('expenses').push({
//       description: 'rent',
//       note: 'rent for Jan 2019',
//       amount: 10050,
//       createdAt: 10090084957
//   })

//   database.ref('expenses').push({
//     description: 'phonr bill',
//     note: 'phone bill for Jan 2019',
//     amount: 5050,
//     createdAt: 10090084967
// })

// database.ref('expenses').push({
//     description: 'grocery',
//     note: 'grocery for Jan 2019',
//     amount: 20050,
//     createdAt: 10090084977
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


//   database.ref()
//   .on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
//   })
//   .catch(e => {
//       console.log('something is wrong' + e)
//   })

//   database.ref('job/title').set(
//       'product manager'
//   )

//   database.ref().set({
//       name: 'Annie Taylor CHEN', 
//       age: 30,
//       stressLevel: 6,
//       job: {
//         title: 'teacher',
//         company: 'Smile School'
//       },
//       isSingle: false,
//       location: {
//           city: 'Stockholm',
//           country: 'Sweden'
//       }
//   }).then(()=> {
//       console.log('working')
//   }).catch(()=> {
//       console.log('something is wrong!')
//   })

// database.ref('attributes').set({
//     height: 175,
//     weight: 45
// }).then(() => {
//     console.log('second call working')
// }).catch((error)=> {
//     console.log('second call error,' + error)
// })

// database.ref('isSingle')
// .remove()
// .then(()=> {
//     console.log('removing working')
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/title': 'software engineer',
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })