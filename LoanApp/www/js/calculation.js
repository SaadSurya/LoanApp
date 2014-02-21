var percentageArray = new Array(-0.15, -0.10, -0.05, 0.05, 0.10, 0.15);
function calculateLoanAmount() {
    var mi = $('#monthlyPayments').val();
    var air = $('#annualInterestRate').val();
    var mir = air / 1200;
    var nm = $('#numberOfMonths').val()*12;
    var la = mi / mir * (1 - (Math.pow((1 + mir), -nm)));

    $('#loanAmount').val(isNaN(la)?"All other fields are required":la.toFixed(0));
}
function calculateAnnualInterestRate() {
    var mi = $('#monthlyPayments').val();
    var la = $('#loanAmount').val();
    var nm = $('#numberOfMonths').val();
    var air = ((mi * nm * 12 / la) - 1) * 100 / nm;
    $('#annualInterestRate').val(isNaN(air) ? "All other fields are required" : air.toFixed(2));
}
function calculateMonthlyInstallment() {
    var air = $('#annualInterestRate').val();
    var mir = air / 1200;
    var la = $('#loanAmount').val();
    var nm = $('#numberOfMonths').val()*12;
    var mi = la * (mir / (1 - (Math.pow((1 + mir), -nm))));
    $('#monthlyPayments').val(isNaN(mi) ? "All other fields are required" : mi.toFixed(2));
}
function calculateNumberOfMonths() {
    var air = $('#annualInterestRate').val();
    var la = $('#loanAmount').val();
    var mi = $('#monthlyPayments').val();
    var nm = (la / mi) / (1 - (la * air / mi / 100) / 12) / 12;
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