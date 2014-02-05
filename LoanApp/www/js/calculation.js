function calculateLoanAmount() {
    var mi = $('#monthlyPayments').val();
    var air = $('#annualInterestRate').val();
    var nm = $('#numberOfMonths').val();
    var la = mi * nm / (1 + (nm * air / 1200));
    $('#loanAmount').val(isNaN(la)?"All other fields are required":la.toFixed(0));
}
function calculateAnnualInterestRate() {
    var mi = $('#monthlyPayments').val();
    var la = $('#loanAmount').val();
    var nm = $('#numberOfMonths').val();
    var air = ((mi * nm / la) - 1) * 1200 / nm;
    $('#annualInterestRate').val(isNaN(air) ? "All other fields are required" : air.toFixed(2));
}
function calculateMonthlyInstallment() {
    var air = $('#annualInterestRate').val(); 
    var la = $('#loanAmount').val();
    var nm = $('#numberOfMonths').val();
    var mi = la / nm * (1 + (nm * air / 1200));
    $('#monthlyPayments').val(isNaN(mi) ? "All other fields are required" : mi.toFixed(2));
}
function calculateNumberOfMonths() {
    var air = $('#annualInterestRate').val();
    var la = $('#loanAmount').val();
    var mi = $('#monthlyPayments').val();
    var nm = (la / mi) / (1 - (la * air / mi / 1200));
    $('#numberOfMonths').val(isNaN(nm) ? "All other fields are required" : nm.toFixed(0));
}
function calculate(id) {
    if (id == 'loanAmount') {
        calculateLoanAmount();
    } else if (id == 'annualInterestRate') {
        calculateAnnualInterestRate();
    } else if (id == 'monthlyPayments') {
        calculateMonthlyInstallment();
    } else if (id == 'numberOfMonths') {
        calculateNumberOfMonths();
    }
}