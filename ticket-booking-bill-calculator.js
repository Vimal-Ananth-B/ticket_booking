// Write Solution code here

function getPerTicketPriceBySeatType(seatType) {
    if (seatType === "Silver") {
        return 250.00;
    } else if (seatType === "Gold") {
        return 350.00;
    } else if (seatType === "Platinum") {
        return 450.00;
    } else {
        return "Invalid Seat Type";
    }
}

function getPerComboPrice(comboType) {
    if (comboType === "Combo-1") {
        return 150;
    } else if (comboType === "Combo-2") {
        return 275;
    } else if (comboType === "Combo-3") {
        return 475;
    } else {
        return "Invalid Combo Type";
    }
}	

function calculateTotalTicketAmount(seatType, ticketCount) {
    if (ticketCount > 0) {
        let ticketPrice = getPerTicketPriceBySeatType(seatType);
        if (ticketPrice === "Invalid Seat Type") {
            return "Invalid Seat Type";
        }
        return ticketPrice * ticketCount;
    } else {
        return "TicketCount should be greater than zero";
    }
}

function calculateTotalComboAmount(comboCount, comboType) {
    if (comboCount > 0) {
        let comboPrice = getPerComboPrice(comboType);
        if (comboPrice === "Invalid Combo Type") {
            return "Invalid Combo Type";
        }
        return comboPrice * comboCount;
    } else {
        return "ComboCount should be greater than zero";
    }
}

function calculateTotalBillAmount(seatCount, seatType, comboCount, comboType) {
    let totalTicketAmount = calculateTotalTicketAmount(seatType, seatCount);
    if (typeof totalTicketAmount === "string") {
        return totalTicketAmount; // Return error message if seatCount is invalid
    }

    let totalComboAmount = calculateTotalComboAmount(comboCount, comboType);
    if (typeof totalComboAmount === "string") {
        return totalComboAmount; // Return error message if comboCount is invalid
    }

    return totalTicketAmount + totalComboAmount;
}

function validateName(name) {
    name = name.trim(); // Trim leading/trailing spaces
    if (name.length === 0) {
        return false;
    }
    for (let i = 0; i < name.length; i++) {
        if (!((name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') || 
              (name.charAt(i) >= 'a' && name.charAt(i) <= 'z') || 
              name.charAt(i) === ' ')) { // Allow spaces between names
            return false;
        }
    }
    return true;
}


function validatePhoneNumber(PhoneNumber)
{
    PhoneNumber=PhoneNumber.trim();
    if(PhoneNumber.length !== 10)
    {
        return false;
    }
    for (let i = 0; i < PhoneNumber.length; i++) {
        if (!(PhoneNumber.charAt(i) >= '0' && PhoneNumber.charAt(i) <= '9')) {
            return false;
        }
    }
    return true;
}



function calculateGrandTotal() {
    let continueLoop = true;

    while (continueLoop) {
        let nameValid = false;
        while (!nameValid) {
            let username = prompt("Enter the name:");
            nameValid = validateName(username);
        }

        let phoneValid = false;
        while (!phoneValid) {
            let phoneNumber = prompt("Enter Phone Number:");
            phoneValid = validatePhoneNumber(phoneNumber);
        }

        let seatType = prompt("Enter the seat Type (Silver / Gold / Platinum): ");
        let seatCount = parseInt(prompt("Enter the seat Count (must be greater than zero): "));
        let comboType = prompt("Enter the Combo Type (Combo-1 / Combo-2 / Combo-3): ");
        let comboCount = parseInt(prompt("Enter the combo Count (must be greater than zero): "));

        let totalBillAmount = calculateTotalBillAmount(seatCount, seatType, comboCount, comboType);
        console.log("The total Bill Amount is: " + totalBillAmount);

        let continueResponse = prompt("Do you want to continue with another entry? (Yes/No):").toUpperCase();
        if (continueResponse !== 'YES') {
            continueLoop = false;
        }
    }
}




// do not delete/edit the below code, as it is written to export the functions to be tested
module.exports = {  getPerComboPrice,getPerTicketPriceBySeatType,calculateTotalTicketAmount,calculateTotalComboAmount,calculateTotalBillAmount,validateName,validatePhoneNumber,calculateGrandTotal}