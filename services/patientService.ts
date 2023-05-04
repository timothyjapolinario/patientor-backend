import patients from "../data/patients";
import { Patient, NoSsnPatient, NewPatientEntry } from "../types";
import { v1 as uuid } from "uuid";
const PatientModel = require("../database/models/patient");
const getAllPatientsNoSsn = (): NoSsnPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    };
  });
};

const createNewPatient = (newPatient: NewPatientEntry): Patient => {
  const id = uuid();
  const patient: Patient = {
    id,
    ...newPatient,
  };
  patients.push(patient);
  const patientDb = new PatientModel(patient);
  patientDb.save();
  return patient;
};

const getAllPatients = (): Patient[] => {
  PatientModel.find({}).then((patientsDB: any) => {
    console.log(patientsDB);
  });
  return patients;
};

export default { getAllPatientsNoSsn, getAllPatients, createNewPatient };
