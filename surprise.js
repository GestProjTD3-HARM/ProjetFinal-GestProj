const bouton = document.getElementById('bt_fuis');
const zone = document.querySelector('.interactive-zone'); // On cible la boîte bleue

// Placement initial du bouton NON
window.addEventListener('DOMContentLoaded', () => {
    const btnOui = document.getElementById('bt_oui');
    // On le place juste à côté au démarrage
    bouton.style.top = '120px'; 
    bouton.style.left = '60%';
});

// Le bouton fuit, mais reste dans la zone !
document.addEventListener('mousemove', (souris) => {
    const rect = bouton.getBoundingClientRect();
    
    // Calcul de la distance de la souris
    const distance = Math.sqrt(
        Math.pow(souris.clientX - (rect.left + rect.width / 2), 2) + 
        Math.pow(souris.clientY - (rect.top + rect.height / 2), 2)
    );
    
    // Si la souris approche
    if (distance < 80) {
        // On récupère la taille de la boîte bleue
        const zoneRect = zone.getBoundingClientRect();
        
        // On calcule une position aléatoire strictement DANS cette boîte
        const newTop = Math.random() * (zoneRect.height - rect.height - 20) + 10;
        const newLeft = Math.random() * (zoneRect.width - rect.width - 20) + 10;

        bouton.style.top = newTop + 'px';
        bouton.style.left = newLeft + 'px';
    }
});

// Bouton "Oui" - Confettis
const boutonOui = document.getElementById('bt_oui');

boutonOui.addEventListener('click', () => {
    creerConfettis();
});

//fonction pour créer les confettis
function creerConfettis() {
    const conteneur = document.getElementById('confettis');

    for (let i = 0; i < 600; i++) { 
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const size = 6 + Math.random() * 12; 
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';

        const couleurs = ['#ff6b9d', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da'];
        confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];

        const duration = 2 + Math.random() * 4; 
        const delay = Math.random() * duration; 
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';

        conteneur.appendChild(confetti);

        const remaining = duration + delay;
        setTimeout(() => {
            confetti.remove();
        }, (remaining + 0.5) * 1000);
    }
}