import patients from "../data/patients";
import { Patient, NoSsnPatient, NewPatientEntry } from "../types";
import { v1 as uuid } from "uuid";
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
  return patient;
};

const getAllPatients = (): Patient[] => {
  return patients;
};

export default { getAllPatientsNoSsn, getAllPatients, createNewPatient };
