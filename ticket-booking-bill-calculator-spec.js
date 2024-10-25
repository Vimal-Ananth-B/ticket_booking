// Write test specs for the functions located at solution/ticket-booking-bill-calculator.js
//import { expect } from "chai";
// import {
//     getPerComboPrice,
//     getPerTicketPriceBySeatType,
//     calculateTotalTicketAmount,
//     calculateTotalComboAmount,
//     calculateTotalBillAmount,
//     calculateGrandTotal,
// } from "../solution/ticket-booking-bill-calculator.js";

const {expect} = require('chai');
const {
    getPerComboPrice,
        getPerTicketPriceBySeatType,
        calculateTotalTicketAmount,
        calculateTotalComboAmount,
        calculateTotalBillAmount,
        validateName,
        validatePhoneNumber,
        calculateGrandTotal,
}= require("../solution/ticket-booking-bill-calculator");

describe('Check type', function () {
    it('should have function getPerComboPrice()', function () {
        expect(typeof getPerComboPrice).to.equal('function');
    });
    it('should have function getPerTicketPriceBySeatType()', function () {
        expect(typeof getPerTicketPriceBySeatType).to.equal('function');
    });
    it('should have function calculateTotalTicketAmount()', function () {
        expect(typeof calculateTotalTicketAmount).to.equal('function');
    });
    it('should have function calculateTotalComboAmount()', function () {
        expect(typeof calculateTotalComboAmount).to.equal('function');
    });
    it('should have function calculateTotalBillAmount()', function () {
        expect(typeof calculateTotalBillAmount).to.equal('function');
    });
    it('should have function calculateGrandTotal()', function () {
        expect(typeof calculateGrandTotal).to.equal('function');
    });
});

describe('getPerComboPrice()', function() {
    it('should return price for Combo-1', function() {
        const ComboPrice = getPerComboPrice("Combo-1");
        expect(ComboPrice).to.be.equal(150);
    });
    it('should return error message "Invalid Combo Type" for invalid Combo type value', function() {
        const ComboPrice = getPerComboPrice("Combo-4");
        expect(ComboPrice).to.be.equal("Invalid Combo Type");
    });
});

describe('getPerTicketPriceBySeatType()', function() {
    it('should return ticket price for Gold seat', function() {
        const seatPrice = getPerTicketPriceBySeatType("Gold");
        expect(seatPrice).to.be.equal(350.00);
    });
    it('should return error message "Invalid Seat Type" for invalid seat type value', function() {
        const seatPrice = getPerTicketPriceBySeatType("Bronze");
        expect(seatPrice).to.be.equal("Invalid Seat Type");
    });
});

describe('calculateTotalTicketAmount()', function() {
    it('should total ticket amount for 2 silver seat', function() {
        const TotalTicketAmount = calculateTotalTicketAmount("Silver",2);
        expect(TotalTicketAmount).to.be.equal(500.00);
    });
    it('should return error message if ticket count is zero', function() {
        const TotalTicketAmount = calculateTotalTicketAmount("Silver",0);
        expect(TotalTicketAmount).to.be.equal("TicketCount should be greater than zero");
    });
    it('should invalid seat type', function() {
        const TotalTicketAmount = calculateTotalTicketAmount("Bronze",2);
        expect(TotalTicketAmount).to.be.equal("Invalid Seat Type");
    });
});

describe('calculateTotalComboAmount()', function() {
    it('should return total combo amount for 3 Combo-2s', function() {
        const totalComboAmount = calculateTotalComboAmount(3, "Combo-2");
        expect(totalComboAmount).to.be.equal(825);
    });
    it('should return error message if combo count is zero', function() {
        const totalComboAmount = calculateTotalComboAmount(0, "Combo-1");
        expect(totalComboAmount).to.be.equal("ComboCount should be greater than zero");
    });
    it('should return "Invalid Combo Type" for invalid combo type', function() {
        const totalComboAmount = calculateTotalComboAmount(2, "Combo-4");
        expect(totalComboAmount).to.be.equal("Invalid Combo Type");
    });
});

describe('calculateTotalBillAmount()', function() {
    it('should return total booking amount for 2 Platinum seats and 1 Combo-1', function() {
        const totalBillAmount = calculateTotalBillAmount(2,"Platinum",1,"Combo-1");
        expect(totalBillAmount).to.be.equal(1050);
    });
    it('should return error message if ticket count is negative', function() {
        const totalBillAmount = calculateTotalBillAmount(-1,"Platinum",1,"Combo-1");
        expect(totalBillAmount).to.be.equal("TicketCount should be greater than zero");
    });
    it('should return error message if combo count is negative', function() {
        const totalBillAmount = calculateTotalBillAmount(2,"Platinum",-1,"Combo-1");
        expect(totalBillAmount).to.be.equal("ComboCount should be greater than zero");
    });
});

describe('validateName()', function() {
    it('should return false if name is empty or just spaces', function() {
        const name = validateName(" ");
        expect(name).to.be.equal(false);
    });
    it('should return false if digits or special characters are present', function() {
        const name = validateName("V#$%^i");
        expect(name).to.be.equal(false);
    });
    it('should return true if name has only alphabets', function() {
        const name = validateName("Vimal");
        expect(name).to.be.equal(true);
    });
    it('should return true for names with spaces between words', function() {
        const name = validateName("John Doe");
        expect(name).to.be.equal(true);
    });
});

describe('validatePhoneNumber()', function() {
    it('should return false if phone number is empty or just spaces', function() {
        const number = validatePhoneNumber(" ");
        expect(number).to.be.equal(false);
    });
    it('should return false if special characters or alphabets are present', function() {
        const number = validatePhoneNumber("987#$%^789");
        expect(number).to.be.equal(false);
    });
    it('should return true if phone number has exactly 10 digits', function() {
        const number = validatePhoneNumber("9751046254");
        expect(number).to.be.equal(true);
    });
});