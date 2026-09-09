// BMI Calculator Logic
document.getElementById('calc-btn').addEventListener('click', function () {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('bmi-result');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = '<span style="color: #ff4500;">Please enter valid height and weight!</span>';
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

   resultDiv.innerHTML = `Your BMI: <span style="color: #ff4500;">${bmi}</span> (${category})`;
});

// Mobile Menu Toggle Functionality
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}// BMI Calculator Code
document.getElementById('calc-btn').addEventListener('click', function () {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('bmi-result');

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = 'Please enter valid values.';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultDiv.innerHTML = `Your BMI: <span style="color: #ff4500;">${bmi}</span> (${category})`;
});

// Mobile Menu Toggle Code
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (mobileMenu && navList) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}