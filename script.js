function calculateAge() {
    // Get the elements safely without TypeScript assertions
    const dobInput = document.getElementById('dob');
    const resultElement = document.getElementById('result');

    // Ensure the elements exist before proceeding
    if (!dobInput || !resultElement) {
        console.error("Could not find 'dob' or 'result' elements.");
        return;
    }

    // Get the value of the date input
    const dob = dobInput.value;

    if (!dob) {
        resultElement.textContent = "Please select your date of birth!";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Display the calculated age
    resultElement.textContent = `You are ${age} years old.`;
}
