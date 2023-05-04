import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  id: String,
  name: String,
  dateOfBirth: String,
  ssn: String,
  gender: String,
  occupation: String,
});

//this only gets called when to toJson is called
//eg. res.json(data)
patientSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

//this gets called immediatelty after fetching the data from the database
patientSchema.set("toObject", {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Patient", patientSchema);
