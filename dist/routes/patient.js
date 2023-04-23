"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var patientService_1 = __importDefault(require("../services/patientService"));
var toNewPatientEntry_1 = __importDefault(require("../utils/toNewPatientEntry"));
var router = express_1.default.Router();
router.get("/", function (_req, res) {
    res.send(patientService_1.default.getAllPatientsNoSsn());
});
router.post("/", function (_req, res) {
    var body = _req.body;
    var newEntry = (0, toNewPatientEntry_1.default)(body);
    if (!newEntry) {
        res.status(401).json({
            error: "malformed patient data",
        });
    }
    try {
        var patientObject = patientService_1.default.createNewPatient(newEntry);
        res.status(201).json(patientObject);
    }
    catch (error) {
        res.status(501);
    }
});
router.get("/:id", function (req, res) {
    var id = req.params.id;
    var patientToFind = patientService_1.default.getAllPatients().find(function (patient) {
        return patient.id === id;
    });
    if (!patientToFind) {
        res.json({ error: "patient not found" });
    }
    res.json(patientToFind);
});
exports.default = router;
