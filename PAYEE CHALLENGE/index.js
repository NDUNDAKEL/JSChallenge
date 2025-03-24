
function calculateNetSalary() {
    let basicSalary = parseFloat(document.getElementById("basicSalary").value) || 0;
    let benefits = parseFloat(document.getElementById("benefits").value) || 0;

    // Step 1: Compute Gross Salary
    let grossSalary = basicSalary + benefits;

    // Step 2: Compute PAYE (Income Tax)
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        payee = (24000 * 0.10) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary <= 500000) {
        payee = (24000 * 0.10) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30);
    } else if (grossSalary <= 800000) {
        payee = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((grossSalary - 500000) * 0.325);
    } else {
        payee = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }

    // Step 3: Compute SHIF (2.75% of Gross Salary)
    let shif = grossSalary * 0.0275;

    // Step 4: Compute NSSF (February 2025 onwards)
    let nssf = 0;
    if (grossSalary <= 8000) {
        nssf = grossSalary * 0.06; // Tier I only
    } else if (grossSalary <= 72000) {
        nssf = (8000 * 0.06) + ((grossSalary - 8000) * 0.06); // Tier I + Tier II
    } else {
        nssf = (8000 * 0.06) + (64000 * 0.06); // Max cap
    }

    // Step 5: Compute Housing Levy (1.5% of Gross Salary)
    let housingLevy = grossSalary * 0.015;

    // Step 6: Compute Net Salary
    let totalDeductions = payee + shif + nssf + housingLevy;
    let netSalary = grossSalary - totalDeductions;

    // Display Results
    document.getElementById("grossSalary").textContent = grossSalary.toFixed(2);
    document.getElementById("payee").textContent = payee.toFixed(2);
    document.getElementById("shif").textContent = shif.toFixed(2);
    document.getElementById("nssf").textContent = nssf.toFixed(2);
    document.getElementById("housingLevy").textContent = housingLevy.toFixed(2);
    document.getElementById("totalDeductions").textContent = totalDeductions.toFixed(2);
    document.getElementById("netSalary").textContent = netSalary.toFixed(2);
}
