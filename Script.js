document.addEventListener("DOMContentLoaded", () => {
    // Kluis functionaliteit
    const kluis = document.getElementById("kluis");
    const hiddenImage = document.getElementById("hidden-image");

    kluis.addEventListener("click", () => {
        hiddenImage.classList.toggle("hidden");
    });

    // "KOOP NU!" knop
    const koopNuButton = document.getElementById("koop-nu-button");
    koopNuButton.addEventListener("click", () => {
        alert("Dit artikel kost slechts €1.000.000.000.000.000.000.000.000.000");
    });

    // Instellingen menu toggle
    const settingsIcon = document.getElementById("settings-icon");
    const settingsMenu = document.getElementById("settings-menu");

    settingsIcon.addEventListener("click", () => {
        settingsMenu.classList.toggle("hidden");
    });
});

function adjustKluis(type, amount) {
    const teller = document.getElementById("pepernoten-teller");
    let current = parseInt(teller.textContent) || 0;

    current = Math.max(0, current + amount);
    teller.textContent = current;
}

function resetKluis() {
    document.getElementById("pepernoten-teller").textContent = "0";
}
