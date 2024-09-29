const firebaseConfig = {
  apiKey: "AIzaSyCHmay-A6NCOVwOUv6Wj2nOP6l4PwSETHs",
  authDomain: "web1-58957.firebaseapp.com",
  databaseURL: "https://web1-58957-default-rtdb.firebaseio.com",
  projectId: "web1-58957",
  storageBucket: "web1-58957.appspot.com",
  messagingSenderId: "801585614125",
  appId: "1:801585614125:web:cf76af9379227465c057a4"
};
firebase.initializeApp(firebaseConfig);



let passwordDB;

firebase.database().ref('password').on('value',(snap)=>{
  passwordDB = snap.val();

});



function checkPassword() {
    var password = document.getElementById("passwordInput").value;
  
    if (password == passwordDB) 
    {
      getDetails(displayDetails);
    } 
    else {
      location.reload();

      alert("Incorrect password. Please try again.");
    }
  }

  function checkPasswordForAdd() {


    var password = document.getElementById("passwordForAdd").value;
  
    if (password == passwordDB) 
    {
      getDetails(addDetailsToDb);
    } 
    else {
      location.reload();

      alert("Incorrect password. Please try again.");
    }
  }

let allDetails;

function getDetails(callback)
{
  firebase.database().ref('edata').once('value',(snap)=>{
  allDetails = snap.val();
  
  });
  
  setTimeout(function () {
    // Call the callback function after the delay
    callback();
}, 1000);
}

function addDetailsToDb(key , value)
{
  var key = document.getElementById("key").value;
  var value = document.getElementById("value").value;

  firebase.database().ref('edata').set(allDetails+","+key+" : "+value);
  document.getElementById("added").innerHTML = "<p>Added</p>";

  setTimeout(function() { removeAdded(); }, 2000);

}




function displayDetails() 
{

  var detailList = allDetails.split(',');
  document.getElementById("contentDiv").innerHTML = "";
  // Iterate through each element and list them
  for (var i = 0; i < detailList.length; i++) 
  {
      document.getElementById("contentDiv").innerHTML += "<h3>"+detailList[i]+"</h3>";

  }

}



function removeAdded()
{
  document.getElementById("added").innerHTML = "";
}
