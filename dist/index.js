"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var diagnoses_1 = __importDefault(require("./routes/diagnoses"));
var patient_1 = __importDefault(require("./routes/patient"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var cors_1 = __importDefault(require("cors"));
var PORT = 3001;
app.use((0, cors_1.default)());
app.use("/api/diagnose", diagnoses_1.default);
app.use("/api/patients", patient_1.default);
app.get("/api/ping", function (_req, res) {
    console.log("someone pinged here");
    res.send("pong");
});
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
