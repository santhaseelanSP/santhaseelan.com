

window.setInterval
(

    function()
    {
        if(document.getElementById("name").innerHTML != "I'm Santhaseelan")
        {
            location.reload();
        }
        if(document.getElementById("occupation").innerHTML != "a game and web developer")
        {
            location.reload();
        }
    }
 
,10);


function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var contentDiv = document.getElementById("contentDiv");
  
    if (password === "200108200108") {
      contentDiv.style.display = "block";
    } else {
      alert("Incorrect password. Please try again.");
    }
  }


