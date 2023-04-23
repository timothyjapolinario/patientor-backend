"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var isString = function (text) {
    return typeof text === "string" || text instanceof String;
};
var isDate = function (date) {
    return Boolean(Date.parse(date));
};
var isGender = function (gender) {
    return Object.values(types_1.Gender)
        .map(function (v) { return v.toString(); })
        .includes(gender);
};
var parseName = function (name) {
    if (!name || !isString(name)) {
        throw new Error("Incorrect or missing name");
    }
    return name;
};
var parseSsn = function (ssn) {
    if (!ssn || !isString(ssn)) {
        throw new Error("Incorrect or missing SSN");
    }
    return ssn;
};
var parseDateOfBirth = function (date) {
    //order matters here, if not string,
    //it assumes it is a date obj,
    //otherwise, throw error.
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing name");
    }
    return date;
};
var parseGender = function (gender) {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error("Incorrect or missing gender: ".concat(gender));
    }
    return gender;
};
var parseOccupation = function (occupation) {
    if (!occupation || !isString(occupation)) {
        throw new Error("Incorrect or missing occupation");
    }
    return occupation;
};
var toNewPatientEntry = function (object) {
    if (!object || typeof object !== "object") {
        throw new Error("Incorrect or missing data");
    }
    //   id: string;
    //   name: string;
    //   dateOfBirth: string;
    //   ssn: string;
    //   gender: Gender;
    //   occupation: string;
    if ("name" in object &&
        "dateOfBirth" in object &&
        "ssn" in object &&
        "gender" in object &&
        "occupation" in object) {
        var newEntry = {
            name: parseName(object.name),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation),
        };
        return newEntry;
    }
    throw new Error("Incorrect Data: some fields are missing.");
};
exports.default = toNewPatientEntry;
