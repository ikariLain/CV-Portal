 /*Hämta aktuell sidans filnamn
 const currentPage = window.location.pathname.split("/").pop();

/*
"window.location.pathname" innebär att den hämtar hela url -sök väg (detta: "/mapp/undersida.html")
*/

// .split("/") skapar en array där varje / delas

//.pop(); Tar den sista värde vilket blir i detta fall "index.html"


 /* Hämta alla länkar i navbaren och subnav
 const links = document.querySelectorAll(".navbar a, .subnav-content a");

 /* Loopa igenom länkar och markera den aktiva sidan
 links.forEach(link => {
     if (link.getAttribute("href") === currentPage) {
         link.classList.add("active");
     }
 });

*/


function setActivePage() {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.submenu-item');
    
    menuItems.forEach(item => {
        item.classList.remove('active');
        
        const itemPath = item.getAttribute('href');
        // Compare full paths or just filenames
        if (currentPath.endsWith(itemPath) || currentPath.includes(itemPath)) {
            item.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActivePage);




// Påskägg

// Ta bort denna del eftersom du redan har en DOMContentLoaded-händelse
// Hämta påskäggselementet (den osynliga delen)
// const easterEgg = document.getElementById('easter-egg');
// easterEgg.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'darkblue'; 
//     alert("Grattis, du hittade påskägget!");
// });


document.addEventListener('DOMContentLoaded', function() {
    const easterEgg = document.getElementById('easter-egg');

    setTimeout(function() {
        easterEgg.style.opacity = 1; 
    }, 5000); // 5000 ms = 5sec

    easterEgg.addEventListener('click', function() {
        document.body.style.backgroundColor = 'darkblue'; // Byt bakgrund
        alert("Grattis, du hittade påskägget!"); // Visa alert
    });
});

document.addEventListener("keydown", detect1337);

let inputBuffer = ""; // Håller reda på vad användaren skriver

function detect1337(event) {
    inputBuffer += event.key; // Lägg till varje tangent som användaren trycker på
    if (inputBuffer.includes("1337")) {
        alert("Du skrev 1337! Du är en riktig hacker!");
        inputBuffer = ""; // Nollställ bufferten efter att popup har visats
    }

    // Begränsa bufferten till de senaste 4 tecknen
    if (inputBuffer.length > 4) {
        inputBuffer = inputBuffer.slice(-4);
    }
}
