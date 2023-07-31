import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB-_bgBpGkjBFuC5gPS5CjPD1xEZXzG42c",
  authDomain: "school-attendence-78201.firebaseapp.com",
  databaseURL: "https://school-attendence-78201-default-rtdb.firebaseio.com",
  projectId: "school-attendence-78201",
  storageBucket: "school-attendence-78201.appspot.com",
  messagingSenderId: "713356925958",
  appId: "1:713356925958:web:7f17b07cdf9ff8edc07787"
};

//initialize your database
if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
export default firebase.database();

  

