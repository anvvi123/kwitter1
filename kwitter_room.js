var firebaseConfig = {
  apiKey: "AIzaSyAkCHsGiV_utUJ3Ng4uXQcm9eHDKJ9gy94",
  authDomain: "kwitter01-5d1dd.firebaseapp.com",
  databaseURL: "https://kwitter01-5d1dd-default-rtdb.firebaseio.com",
  projectId: "kwitter01-5d1dd",
  storageBucket: "kwitter01-5d1dd.appspot.com",
  messagingSenderId: "367106350555",
  appId: "1:367106350555:web:f86ceae98ac69b02251bfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}