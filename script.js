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
    const eggZone = document.querySelector('.egg-zone');

    if (!easterEgg || !eggZone) {
        console.log('Easter egg elements not found!');
        return;
    }

    // Kontrollera om ägget redan är hittat
    if (localStorage.getItem('easterEggFound')) {
        easterEgg.style.opacity = '1';
        easterEgg.style.pointerEvents = 'auto';
    } else {
        // Initiala inställningar
        easterEgg.style.opacity = '0';
        easterEgg.style.pointerEvents = 'none';
    }

    eggZone.addEventListener('mouseenter', function() {
        easterEgg.style.opacity = '1';
        easterEgg.style.pointerEvents = 'auto'; // Aktivera musinteraktioner för ägget
    });

    eggZone.addEventListener('mouseleave', function() {
        if (!localStorage.getItem('easterEggFound')) {
            easterEgg.style.opacity = '0';
            easterEgg.style.pointerEvents = 'none';
        }
    });

    // Lägg till click event direkt på ägget
    easterEgg.addEventListener('click', function(e) {
        console.log('Egg clicked!');
        e.preventDefault();
        
        // Spela animationen
        this.style.animation = 'eggFound 1s forwards';
        
        // Kontrollera vilken sida vi är på och sätt rätt sökväg
        const currentPath = window.location.pathname;
        const imagePath = currentPath.includes('/Pages/') 
            ? '../Asset/Pokemon-egg.png'  // Om vi är i Pages-mappen
            : './Asset/Pokemon-egg.png';  // Om vi är i index.html
        
        // Ändra bakgrunden med korrekt sökväg
        document.body.style.transition = 'background-image 1s ease-in-out';
        document.body.style.backgroundImage = `url("${imagePath}")`;
        
        // Visa meddelandet och spara i localStorage
        setTimeout(() => {
            alert("Grattis, du hittade påskägget! 🎉");
            localStorage.setItem('easterEggFound', 'true');
            this.style.opacity = '1';
            this.style.pointerEvents = 'auto';
        }, 1000);
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

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Stäng modalen om användaren klickar utanför den
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
