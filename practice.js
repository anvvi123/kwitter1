var firebaseConfig = {
    apiKey: "AIzaSyBP3yyxuqv0UhhsNG6BXDSc-g-iLvgyg58",
    authDomain: "practise-a385c.firebaseapp.com",
    databaseURL: "https://practise-a385c-default-rtdb.firebaseio.com",
    projectId: "practise-a385c",
    storageBucket: "practise-a385c.appspot.com",
    messagingSenderId: "707909126361",
    appId: "1:707909126361:web:16741560d1abfcf509d6c8",
    measurementId: "G-683CK93PCV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose:"adding user"
});
  }