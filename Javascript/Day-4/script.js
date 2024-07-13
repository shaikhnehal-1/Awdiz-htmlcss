function validateAge() {
    const age = parseInt(document.getElementById('ageInput').value);
    const messageElement = document.getElementById('message');

    if (isNaN(age) || age < 1 || age > 99) {
        messageElement.textContent = "Invalid Age (Enter age from 1 to 99)";
        messageElement.style.color = "#004643";
    } else if (age >= 1 && age <= 17) {
        messageElement.textContent = "You're not eligible for driving license";
        messageElement.style.color = "red";
    } else if (age === 18) {
        messageElement.textContent = "You're Eligible for Learner's License";
        messageElement.style.color = "#2a9d8f";
    } else if (age >= 19 && age <= 99) {
        messageElement.textContent = "You're eligible for Driving License";
        messageElement.style.color = "#8ac926";
    }
}