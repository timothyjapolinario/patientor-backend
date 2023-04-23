"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var patients_1 = __importDefault(require("../data/patients"));
var uuid_1 = require("uuid");
var getAllPatientsNoSsn = function () {
    return patients_1.default.map(function (_a) {
        var id = _a.id, name = _a.name, dateOfBirth = _a.dateOfBirth, gender = _a.gender, occupation = _a.occupation;
        return {
            id: id,
            name: name,
            dateOfBirth: dateOfBirth,
            gender: gender,
            occupation: occupation,
        };
    });
};
var createNewPatient = function (newPatient) {
    var id = (0, uuid_1.v1)();
    var patient = __assign({ id: id }, newPatient);
    patients_1.default.push(patient);
    return patient;
};
var getAllPatients = function () {
    return patients_1.default;
};
exports.default = { getAllPatientsNoSsn: getAllPatientsNoSsn, getAllPatients: getAllPatients, createNewPatient: createNewPatient };
