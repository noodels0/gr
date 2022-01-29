

const firebaseConfig = {
      apiKey: "AIzaSyCnvRuz4wjbuc76kizVeUbjzxyTwCtKyS0",
      authDomain: "kwitter-f7c3a.firebaseapp.com",
      projectId: "kwitter-f7c3a",
      storageBucket: "kwitter-f7c3a.appspot.com",
      messagingSenderId: "823729765054",
      appId: "1:823729765054:web:c3a7e27aaa5fdff0fafcef"
    };
    

    const app = initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    
    //End code
    });});}
    getData();
     
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
     


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter_room.html"
}

function send()
{
      msg = document.getElementById("msg").value; 
}
