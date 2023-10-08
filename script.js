// Greet user
const nameForm = document.getElementById('nameForm');
const userName = document.getElementById('userName');
const greetUser = document.getElementById('greetUser');

// Add submit event listener to the name form
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = userName.value.trim();

    // If user name is not empty, greet the user; otherwise, show an error message and let the user retry
    name !== ''
        ? (greetUser.textContent = `Hello ${name}! 👋`)
        : (greetUser.textContent = 'Please enter your name.');
});

// What time is it?
function updateClock() {
    const clock = document.getElementById('time');
    const currentTime = new Date();

    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    clock.textContent = timeString;
}

// Call updateClock to immediately set the initial time
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

// Get user's age
const ageForm = document.getElementById('ageForm');
const birthdayInput = document.getElementById('birthday');
const userAge = document.getElementById('userAge');

ageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const birthday = new Date(birthdayInput.value);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthday.getFullYear();

    // Check if the birthday for this year has occurred or not
    if (
        currentDate.getMonth() < birthday.getMonth() ||
        (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() < birthday.getDate())
    ) {
        age--;
    }

    userAge.textContent = `You are ${age} years old.`;
});

// Handle form submission for the creative form
const submitFormButton = document.getElementById('submitForm');
const form = document.getElementById('userForm');
const formResults = document.getElementById('formResults');

submitFormButton.addEventListener('click', (event) => {
    event.preventDefault();

    const petSelect = document.getElementById('pet');
    const drinkInputs = document.querySelectorAll('input[name="drink"]');
    const hobbiesInput = document.getElementById('hobbies');
    const moodCheckboxes = document.querySelectorAll('input[name="mood"]:checked');
    const colorInput = document.getElementById('color');

    // Create a sentence based on the selected options
    let sentence = `Hello ${userName.value}! 👋`;
    sentence += ` Your favorite pet is a ${petSelect.value}.`;
    sentence += ` You seem to enjoy drinking ${getSelectedDrink(drinkInputs)}.`;
    sentence += ` Your hobbies include ${hobbiesInput.value}.`;
    sentence += ` You're currently feeling ${getSelectedMoods(moodCheckboxes)}.`;
    sentence += ` And your favorite color is ${colorInput.value}.`;

    // Display the sentence
    formResults.textContent = sentence;
});

// Helper function to get the selected drink
function getSelectedDrink(drinkInputs) {
    for (const input of drinkInputs) {
        if (input.checked) {
            return input.value;
        }
    }
    return 'Unknown';
}

// Helper function to get selected moods
function getSelectedMoods(moodCheckboxes) {
    const selectedMoods = [];
    for (const checkbox of moodCheckboxes) {
        const label = document.querySelector(`label[for="${checkbox.id}"]`);
        if (label) {
            selectedMoods.push(label.textContent.toLowerCase());
        }
    }
    return selectedMoods.join(', ') || 'Unknown';
}