document.addEventListener('DOMContentLoaded', () => {
    const baseService = document.getElementById('baseService');
    const hoursInput = document.getElementById('hours');
    const retouchCheckbox = document.getElementById('retouch');
    const printingCheckbox = document.getElementById('printing');
    const totalPriceDisplay = document.getElementById('totalPrice');

    const HOURLY_RATE = 15000;
    const INITIAL_HOURS = 2; // Alapértelmezett óraszám a kalkulátorban

    function calculatePrice() {
        let total = parseInt(baseService.value);
        
        let hours = parseInt(hoursInput.value);

        let extraHours = Math.max(0, hours - INITIAL_HOURS); 
        total += (extraHours * HOURLY_RATE);

        if (retouchCheckbox.checked) {
            total += parseInt(retouchCheckbox.value); 
        }

        if (printingCheckbox.checked) {
            total += parseInt(printingCheckbox.value);
        }

        totalPriceDisplay.textContent = total.toLocaleString('hu-HU') + ' Ft';
    }
    
    // Bármilyen változásnál elindítjuk a calculatePrice függvényt
    baseService.addEventListener('change', calculatePrice);
    hoursInput.addEventListener('input', calculatePrice);
    retouchCheckbox.addEventListener('change', calculatePrice);
    printingCheckbox.addEventListener('change', calculatePrice);

    // Kezdeti ár kiszámítása az oldal betöltésekor
    calculatePrice(); 
});