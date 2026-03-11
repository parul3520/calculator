function calc() {
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("Weight").value;

    var male = document.getElementById("male");
    var female = document.getElementById("female");

    var gender = "";

    if (male.checked) {
        gender = "Male";
    } else if (female.checked) {
        gender = "Female";
    } else {
        gender = "Not specified";
    }

    if (age === "" || height === "" || weight === "") {
        document.getElementById("intro").innerHTML = "Please fill all fields!";
        return;
    }

    // Convert height from cm to meters
    var heightInMeters = height/100;

    // BMI formula
    let bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(2);

    var category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("intro").innerHTML =
        "Age: " + age + "<br>" +
        "Gender: " + gender + "<br>" +
        "Your BMI is: " + bmi + "<br>" +
        "Category: " + category;
}
