// Teller voor de kluisinhoud
let kluisInhoud = {
    pepernoten: 0
};

// Kluis aanpassen
function adjustKluis(type, amount) {
    if (kluisInhoud[type] !== undefined) {
        kluisInhoud[type] += amount;
        document.getElementById(`${type}-teller`).innerText = kluisInhoud[type];
    }
}

// Reset de kluis
function resetKluis() {
    kluisInhoud = { pepernoten: 0 };
    document.getElementById('pepernoten-teller').innerText = 0;
}

// Klik op kluis om afbeelding te tonen
document.getElementById('kluis').addEventListener('click', () => {
    const hiddenImage = document.getElementById('hidden-image');
    hiddenImage.style.display = 'block';
});

// Open en sluit het instellingenmenu
document.getElementById('settings-icon').addEventListener('click', () => {
    const menu = document.getElementById('settings-menu');
    menu.classList.toggle('show');
});
