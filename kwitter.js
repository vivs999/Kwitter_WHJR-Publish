// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBVa4nP6OiCJWbheNE0qfYtoMywfn-Q0iU",
  authDomain: "kwitter-whjr-publish.firebaseapp.com",
  databaseURL: "https://kwitter-whjr-publish-default-rtdb.firebaseio.com",
  projectId: "kwitter-whjr-publish",
  storageBucket: "kwitter-whjr-publish.appspot.com",
  messagingSenderId: "667826760474",
  appId: "1:667826760474:web:2a4796f19f51017cac5aa3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}