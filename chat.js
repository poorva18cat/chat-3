// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBv2nKbwerQ__bE4DFFYp2tFKXlvPDgMnE",
    authDomain: "chat-cf31c.firebaseapp.com",
    databaseURL: "https://chat-cf31c-default-rtdb.firebaseio.com",
    projectId: "chat-cf31c",
    storageBucket: "chat-cf31c.appspot.com",
    messagingSenderId: "620048891575",
    appId: "1:620048891575:web:7025cedeb527e987405732"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



