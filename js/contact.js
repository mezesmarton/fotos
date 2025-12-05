document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('offer-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Először töröljük az összes korábbi hibaüzenetet (querySelector/querySelectorAll)
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });

        const fullName = document.getElementById('fullName');
        if (fullName.value.trim().length < 3) {
            document.getElementById('error-fullName').textContent = 'Kérlek, add meg teljes neved (min. 3 karakter).';
            isValid = false;
        }

        const email = document.getElementById('email');
        // Egyszerű Regex minta a formátum ellenőrzésére
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailRegex.test(email.value)) {
            document.getElementById('error-email').textContent = 'Kérlek, érvényes e-mail címet adj meg.';
            isValid = false;
        }

        const eventDate = document.getElementById('eventDate');
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Beállítjuk éjfélre, hogy a mai napot is engedje
        const selectedDate = new Date(eventDate.value);
        if (selectedDate < today || eventDate.value === "") {
            document.getElementById('error-eventDate').textContent = 'A dátum nem lehet múltbeli, és kötelező.';
            isValid = false;
        }
        
        const shootType = document.getElementById('shootType');
        if (shootType.value === "") {
            document.getElementById('error-shootType').textContent = 'Kérlek, válaszd ki a fotózás típusát.';
            isValid = false;
        }

        const message = document.getElementById('message');
        if (message.value.trim().length < 20) {
            document.getElementById('error-message').textContent = 'Kérlek, írj egy részletes üzenetet (min. 20 karakter).';
            isValid = false;
        }
        
        const locationRadios = form.querySelectorAll('input[name="location"]');
        let locationSelected = false;
        locationRadios.forEach(radio => {
            if (radio.checked) {
                locationSelected = true;
            }
        });
        if (!locationSelected) {
            document.getElementById('error-location').textContent = 'Kérlek, válaszd ki a munkavégzés helyét.';
            isValid = false;
        }

        if (isValid) {
            alert('Adataid sikeresen elküldtük! Hamarosan felveszem Veled a kapcsolatot.');
            form.reset();
        }
    });
});