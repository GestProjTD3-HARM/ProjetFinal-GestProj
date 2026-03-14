const bouton = document.getElementById('bt_fuis');

// Placement initial du bouton NON à côté du OUI au chargement
window.addEventListener('DOMContentLoaded', () => {
    const btnOui = document.getElementById('bt_oui');
    const rectOui = btnOui.getBoundingClientRect();
    bouton.style.top = rectOui.top + 'px';
    bouton.style.left = (rectOui.right + 20) + 'px';
});

// Le bouton fuit
document.addEventListener('mousemove', (souris) => {
    const rect = bouton.getBoundingClientRect();
    const centreX = rect.left + rect.width / 2;
    const centreY = rect.top + rect.height / 2;
    
    // Calcul de la distance entre la souris et le centre du bouton
    const distance = Math.sqrt(Math.pow(souris.clientX - centreX, 2) + Math.pow(souris.clientY - centreY, 2));
    
    // Si la souris approche à moins de 80px
    if (distance < 80) {
        // On s'assure que le bouton reste visible dans la fenêtre (on soustrait la taille du bouton)
        const newTop = Math.random() * (window.innerHeight - rect.height - 20) + 10;
        const newLeft = Math.random() * (window.innerWidth - rect.width - 20) + 10;

        bouton.style.top = newTop + 'px';
        bouton.style.left = newLeft + 'px';
    }
});

// Bouton "Oui" - Confettis
const boutonOui = document.getElementById('bt_oui');

boutonOui.addEventListener('click', () => {
    creerConfettis();
});

// Fonction pour créer les confettis 
function creerConfettis() {
    const conteneur = document.getElementById('confettis');

    for (let i = 0; i < 300; i++) { 
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const size = 6 + Math.random() * 12;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';

        const couleurs = ['#ff6b9d', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da', '#39C5BB'];
        confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];

        const duration = 2 + Math.random() * 4;
        const delay = Math.random() * 2;
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';

        conteneur.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, (duration + delay + 0.5) * 1000);
    }
}