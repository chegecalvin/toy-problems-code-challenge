function calculateNetSalary(basicSalary,benefits){
     //calculates gross salary
     grossSalary = basicSalary + benefits
     //calculates nssf deduction
     nssfDeduction = 0.06 * basicSalary
     //calculates taxable income
     taxableIncome= grossSalary - nssfDeduction
     //places taxable income in its tax bracket
     if ( taxableIncome <= 24000){
        taxRate= 0.10 
        payee=taxableIncome*taxRate
     }
     else if (taxableIncome <= 32333){
        taxRate= 0.25
        payee=(taxableIncome-24000)*taxRate+2400
     } 
     else if (taxableIncome >32333){
        taxRate= 0.30
        payee=(taxableIncome-32333)*taxRate+2400+2083.25
     } 
     //uses gross salary to get nhif deduction bracket
     if (grossSalary <= 5999){
        nhifDeduction = 150 
     }
     else if (grossSalary <= 7999){
        nhifDeduction = 300
     } 
     else if (grossSalary <= 11999){
        nhifDeduction = 400
     } 
     else if (grossSalary <= 14999){
        nhifDeduction = 500
     }
     else if (grossSalary <= 19999){
        nhifDeduction = 600
     }
     else if (grossSalary <= 24999){
        nhifDeduction = 700
     }
    else if (grossSalary <= 29999) {
        nhifDeduction = 800
    }
    else if (grossSalary <= 34999){
        nhifDeduction = 900
    }
    else if (grossSalary <= 39999){
        nhifDeduction = 950
    }
    else if (grossSalary <= 44999){
        nhifDeduction = 1000
    }
    else if (grossSalary <= 49999){
        nhifDeduction = 1100
    }
    else if (grossSalary <= 59999){
        nhifDeduction = 1200
    }
    else if (grossSalary <= 69999){
        nhifDeduction = 1300
    }
    else if (grossSalary <= 79999){
        nhifDeduction = 1400
    }
    else if (grossSalary <= 89999){
        nhifDeduction = 1500
    }
    else if (grossSalary <= 99999){
        nhifDeduction = 1600
    }
    else if (grossSalary <= 100000){
        nhifDeduction = 1700
    }
    // calculates net salary
    netSalary = taxableIncome - payee - nhifDeduction
    return netSalary
}
    // input basic salary and benefits here
    console.log(calculateNetSalary(0,0))