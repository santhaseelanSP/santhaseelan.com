

firebase.initializeApp({
    apiKey: 'AIzaSyAOgBaVjazFLpyugBTZii_Tgx4f7whz5H4',
    authDomain: 'ekalvi-cb74c.firebaseapp.com',
    projectId: 'ekalvi-cb74c'
});

const db = firebase.firestore();
const searchBox = document.getElementById('searchBox');


document.addEventListener('DOMContentLoaded', function() {


function clearContainer(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = ""; // Clear the contents
    } else {
        console.error("Container with ID", containerId, "not found.");
    }
}


function displayLinks(category, containerId) {
    db.collection("links").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.id == "linkList") {
                const data = doc.data();
                const linksContainer = document.getElementById(containerId);
                const linkContainer = document.createElement("div");

                let isFirstLink = true;
                let divIndex = 0;

                for (const key in data) {

                    const dataArray = data[key].split(',');
                    if (key.startsWith(category) && dataArray.length >= 3 && dataArray[3] == "0") {
                        if (!isFirstLink) {
                            // Add space between divs
                            const space = document.createElement("div");
                            space.style.height = "30px";
                            linkContainer.appendChild(space);
                        } else {
                            isFirstLink = false;
                        }

                        const singleDiv = document.createElement("div");
                        singleDiv.classList.add("single");

                        const image = document.createElement("img");
                        image.src = data[key].split(',')[1]; // Replace with your global link
                        //unity favour = image.src = "https://drive.google.com/uc?id=1UdGgDit_l1DA87gyrRj2PmzmYg-aTTYk";
                        image.classList.add("thumbnail");
                        singleDiv.appendChild(image);

                        const linkName = document.createElement("h3");
                        linkName.textContent = key;
                        singleDiv.appendChild(linkName);

                        const linkUrl = document.createElement("a");
                        linkUrl.textContent = "Download";
                        linkUrl.href = data[key].split(',')[0];
                        linkUrl.addEventListener('click', function() {
                            // Split data value and update the second index with download count
                            const dataArray = data[key].split(',');
                            const downloadCount = parseInt(dataArray[2]) || 0; // Parse the download count or default to 0
                            dataArray[2] = downloadCount + 1; // Increment the download count
                            const updatedDataValue = dataArray.join(',');
                            db.collection("links").doc("linkList").update({
                                [key]: updatedDataValue
                            });

                            location.reload();
                        });
                        singleDiv.appendChild(linkUrl);

                        linkContainer.appendChild(singleDiv);
                        divIndex++;
                    }
                }
                linksContainer.appendChild(linkContainer);
            }
        });
    });
}



// Call displayLinks function for each category
displayLinks("10th", "container-10th");
displayLinks("11th", "container-11th");
displayLinks("12th", "container-12th");








// Get the button elements

const openButton10th = document.getElementById('openButton10th');
const openButton11th = document.getElementById('openButton11th');
const openButton12th = document.getElementById("openButton12th");




// Add click event listeners to the buttons
openButton10th.addEventListener('click', function() {
    // Redirect to 10th HTML file
    window.location.href = '10th.html';
});

openButton11th.addEventListener('click', function() {
    // Redirect to 11th HTML file
    window.location.href = '11th.html';
});

openButton12th.addEventListener('click', function() {
    // Redirect to 12th HTML file
    window.location.href = '12th.html';
});

 

 
});



