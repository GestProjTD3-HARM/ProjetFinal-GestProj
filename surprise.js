const bouton = document.getElementById('bt_fuis');
document.addEventListener('mousemove',(souris) => {
    const rect = bouton.getBoundingClientRect();
    const distance = Math.sqrt(Math.pow(souris.clientX - (rect.left + rect.width / 2),2)+Math.pow(souris.clientY - (rect.top + rect.height / 2),2));
    if(distance < 80){
        const newTop = Math.random() * (window.innerHeight - rect.height);
        const newLeft = Math.random() * (window.innerWidth - rect.width);

        bouton.style.top = newTop + 'px';
        bouton.style.left = newLeft + 'px';
    }
});

// Bouton "Oui" - Confettis
const boutonOui = document.getElementById('bt_oui');

boutonOui.addEventListener('click', () => {
    // Crée les confettis
    creerConfettis();
});

// Fonction pour créer les confettis
function creerConfettis() {
    const conteneur = document.getElementById('confettis');

    // Crée 600 confettis qui partent du haut; certains seront déjà "en cours" grâce à un délai négatif
    for (let i = 0; i < 1500; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Taille aléatoire
        const size = 6 + Math.random() * 12; // 6px à 18px
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';

        // Position horizontale aléatoire, départ en haut
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';

        // Couleur aléatoire
        const couleurs = ['#ff6b9d', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181', '#aa96da'];
        confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)];

        // Durée et délai (tous démarrent du haut; délai non-négatif pour qu'ils partent plus tard)
        const duration = 2 + Math.random() * 4; // 2s à 6s
        const delay = Math.random() * duration; // valeur entre 0 et duration
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';

        // Ajoute le confetti au conteneur
        conteneur.appendChild(confetti);

        // Calcul du temps restant avant que l'animation ne se termine
        const remaining = duration + delay;
        setTimeout(() => {
            confetti.remove();
        }, (remaining + 0.5) * 1000);
    }
}