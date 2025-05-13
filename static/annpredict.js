// // On page load, get the form data from localStorage
// window.onload = function() {
//     const formData = JSON.parse(localStorage.getItem("formData"));

//     if (formData) {
//         // Display the form data
//         let formDataHtml = '<ul>';
//         for (const [key, value] of Object.entries(formData)) {
//             formDataHtml += `<li><strong>${key.replace(/_/g, " ")}:</strong> ${value}</li>`;
//         }
//         formDataHtml += '</ul>';

//         document.getElementById("formDataDisplay").innerHTML = formDataHtml;

//         // Simulate a prediction result
//         const prediction = "Positive for Kidney Cancer";  // You can replace this with actual prediction logic

//         // Display the prediction result
//         document.getElementById("predictionResult").style.display = "block";
//         document.getElementById("predictionText").innerText = prediction;
//     } else {
//         alert("No data found. Please go back and submit the form.");
//         window.location.href = "imagepredict.html";  // Redirect if no data found
//     }
// };




// window.onload = function() {
//     // Retrieve the form data from localStorage
//     const formData = JSON.parse(localStorage.getItem("formData"));

//     // Check if data exists in localStorage
//     if (formData) {
//         // Populate the form data into the HTML elements
//         document.getElementById("ageDisplay").textContent = formData.age;
//         document.getElementById("bloodPressureDisplay").textContent = formData.bloodPressure;
//         document.getElementById("albuminDisplay").textContent = formData.albumin;
//         document.getElementById("sugarDisplay").textContent = formData.sugar;
//         document.getElementById("redBloodCellsDisplay").textContent = formData.redBloodCells;
//         document.getElementById("pusCellDisplay").textContent = formData.pusCell;
//         document.getElementById("bacteriaDisplay").textContent = formData.bacteria;
//         document.getElementById("bloodGlucoseDisplay").textContent = formData.bloodGlucose;
//         document.getElementById("serumCreatinineDisplay").textContent = formData.serumCreatinine;
//         document.getElementById("potassiumDisplay").textContent = formData.potassium;
//         document.getElementById("anaemiaDisplay").textContent = formData.anaemia;
//         // document.getElementById("hemoglobinDisplay").textContent = formData.anaemia;

//         // Simulate a prediction (replace with actual prediction logic if necessary)
//         const prediction = "Positive for Kidney Cancer"; // This is a placeholder prediction
//         document.getElementById("predictionText").textContent = prediction;
//     } else {
//         // If no data is found, redirect to the input page (index.html)
//         alert("No data found. Please go back and submit the form.");
//         window.location.href = "/open";
//     }
// };



// window.onload = function() {
//     // Retrieve the form data and prediction result from localStorage
//     const formData = JSON.parse(localStorage.getItem("formData"));
//     const prediction = localStorage.getItem("prediction");

//     // Check if data exists in localStorage
//     if (formData && prediction) {
//         // Populate form data into the HTML elements
//         document.getElementById("ageDisplay").textContent = formData.age;
//         document.getElementById("bloodPressureDisplay").textContent = formData.bloodPressure;
//         document.getElementById("albuminDisplay").textContent = formData.albumin;
//         document.getElementById("sugarDisplay").textContent = formData.sugar;
//         document.getElementById("redBloodCellsDisplay").textContent = formData.redBloodCells;
//         document.getElementById("pusCellDisplay").textContent = formData.pusCell;
//         document.getElementById("bacteriaDisplay").textContent = formData.bacteria;
//         document.getElementById("bloodGlucoseDisplay").textContent = formData.bloodGlucose;
//         document.getElementById("serumCreatinineDisplay").textContent = formData.serumCreatinine;
//         document.getElementById("potassiumDisplay").textContent = formData.potassium;
//         document.getElementById("anaemiaDisplay").textContent = formData.anaemia;

//         // Display prediction result ("Normal" or "Abnormal")
//         document.getElementById("predictionText").textContent = `Prediction: ${prediction}`;
//     } else {
//         // If no data is found, redirect to the input page
//         alert("No data found. Please go back and submit the form.");
//         window.location.href = "/open";
//     }
// };




window.onload = function () {
    // Retrieve the form data and prediction result from localStorage
    const formData = JSON.parse(localStorage.getItem("formData"));
    const prediction = localStorage.getItem("prediction");

    // Debugging logs
    console.log("formData from LocalStorage:", formData);
    console.log("Prediction from LocalStorage:", prediction);

    if (formData && prediction) {
        document.getElementById("ageDisplay").textContent = formData.age;
        document.getElementById("bloodPressureDisplay").textContent = formData.blood_pressure;
        document.getElementById("albuminDisplay").textContent = formData.albumin;
        document.getElementById("sugarDisplay").textContent = formData.sugar;
        document.getElementById("redBloodCellsDisplay").textContent = formData.red_blood_cells;
        document.getElementById("pusCellDisplay").textContent = formData.pus_cell;
        document.getElementById("bacteriaDisplay").textContent = formData.bacteria;
        document.getElementById("bloodGlucoseDisplay").textContent = formData.blood_glucose;
        document.getElementById("serumCreatinineDisplay").textContent = formData.serum_creatinine;
        document.getElementById("potassiumDisplay").textContent = formData.potassium;
        document.getElementById("anaemiaDisplay").textContent = formData.anaemia;

        document.getElementById("predictionText").textContent = 
            prediction === "Abnormal" ? "Abnormal (Possible Condition Detected)" : "Normal (No Condition Detected)";
    } else {
        console.error("No form data or prediction found in localStorage.");
        alert("No data found. Please go back and submit the form.");
        window.location.href = "/open";
    }
};
