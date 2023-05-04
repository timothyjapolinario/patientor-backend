import express from "express";
import patientService from "../services/patientService";
import toNewPatientEntry from "../utils/toNewPatientEntry";

const router = express.Router();
router.get("/", (_req, res) => {
  patientService.getAllPatients().then((result) => {
    res.send(result);
  });
  //res.send(patientService.getAllPatients());
});

router.post("/", (_req, res) => {
  const body = _req.body;
  const newEntry = toNewPatientEntry(body);
  if (!newEntry) {
    res.status(401).json({
      error: "malformed patient data",
    });
  }

  try {
    const patientObject = patientService.createNewPatient(newEntry);
    res.status(201).json(patientObject);
  } catch (error) {
    res.status(501);
  }
});

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   const patientToFind = patientService.getAllPatients().find((patient) => {
//     return patient.id === id;
//   });
//   if (!patientToFind) {
//     res.json({ error: "patient not found" });
//   }
//   res.json(patientToFind);
// });

export default router;
