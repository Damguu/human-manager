const mongoose = require("mongoose");

let a = {
    firstName: "Anthony Kerr",
    middleName: "Gromio",
    lastName: "Dulla",
    prefix: "Jr.",
    suffix: "",
    birthDate: "April 1, 1999",
    age: "24",
    gender: "non-binary",
    nickname: "Nene",
    buildingNumber: "111",
    buildingName: "Dulla residence",
    street: "Dulla Street",
    addressLine: "Lapuz",
    city: "Iloilo City",
    province: "Iloilo",
    country: "Philippines",
    postalCode: "5000",
    isOpen: false,
};

const HumanSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
    },
    suffix: {
        type: String,
    },
    nickname: {
        type: String,
    },
    birthDate: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        buildingNumber: {
            type: String,
            required: true,
        },
        buildingName: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        addressLine: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
    },
    isOpen: {
        type: Boolean,
        required: true,
    },
    updated_date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Human = mongoose.model("human", HumanSchema);
