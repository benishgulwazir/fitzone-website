document.addEventListener('DOMContentLoaded', () => {

    // 1. BMI Calculator Logic
    const calcBtn = document.getElementById('calc-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', function () {
            const heightInput = document.getElementById('height');
            const weightInput = document.getElementById('weight');
            const resultDiv = document.getElementById('bmi-result');

            if (!heightInput || !weightInput || !resultDiv) return;

            const height = parseFloat(heightInput.value) / 100;
            const weight = parseFloat(weightInput.value);

            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                resultDiv.innerHTML = '<span style="color: #ff4500;">Please enter valid height and weight!</span>';
                return;
            }

            const bmi = (weight / (height * height)).toFixed(1);
            let category = '';

            if (bmi < 18.5) category = 'Underweight';
            else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal Weight';
            else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
            else category = 'Obese';

            resultDiv.innerHTML = `Your BMI: <span style="color: #ff4500;">${bmi}</span> (${category})`;
        });
    }

    // 2. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // 3. Smooth Close Menu on Link Click
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList) {
                navList.classList.remove('active');
            }
        });
    });

});