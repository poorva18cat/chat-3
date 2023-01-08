var firebaseConfig = {
    apiKey: "AIzaSyCxbvFjCpql_Em95Et3_8O7iQ4laQ9SwLw",
    authDomain: "class-test-f3edb.firebaseapp.com",
    databaseURL: "https://class-test-f3edb-default-rtdb.firebaseio.com",
    projectId: "class-test-f3edb",
    storageBucket: "class-test-f3edb.appspot.com",
    messagingSenderId: "330407457129",
    appId: "1:330407457129:web:258372a0e9b11cf8b88df8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementsById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_room.html";
}
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name-" + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
});});
}
getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_room.html";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "chat_room.html";
}
