//Show active html site

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

//-------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const easterEgg = document.getElementById('easter-egg');

    if (!easterEgg) {
        console.error('Easter egg element not found!');
        return;
    }

    // Göm ägget initialt
    easterEgg.style.opacity = '0';
    
    // Visa ägget med fade-in effekt
    setTimeout(function() {
        easterEgg.style.opacity = '1';
        easterEgg.style.transform = 'scale(1)';
    }, 5000);

    easterEgg.addEventListener('click', function() {
        // Spela upp hittad-animation
        easterEgg.style.animation = 'eggFound 1s forwards';
        
        // Ändra bakgrund med fade-effekt
        document.body.style.transition = 'background-image 1s ease-in-out';
        document.body.style.backgroundImage = "url('Asset/Pokemon-egg.png')";
        
        // Vänta lite innan alert visas
        setTimeout(() => {
            alert("Grattis, du hittade påskägget! 🎉");
            localStorage.setItem('easterEggFound', 'true');
        }, 1000);
    });

    // Lägg till mouseover ljud-effekt (valfritt)
    easterEgg.addEventListener('mouseover', function() {
        // Om du vill lägga till ett ljud när man hovrar över ägget
        // const hoverSound = new Audio('Asset/hover-sound.mp3');
        // hoverSound.play();
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
