import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      console.log(action,'existingADDStudent :>> ', state);
      state.push(action.payload);
    },
    editStudent: (state, action) => {
      const { id,photos, firstname,lastname,fathername, email,address,mobilenumber,gender,dob,country } = action.payload;
      console.log('state :>> ', state);
      const existingStudent = state.find((data) => data.id == id);
      console.log('existingEDITtudent :>> ', existingStudent);

      if (existingStudent) {
        existingStudent.photos = photos;
        existingStudent.firstname = firstname;
        existingStudent.lastname = lastname;
        existingStudent.fathername = fathername;
        existingStudent.email = email;
        existingStudent.address = address;
        existingStudent.mobilenumber = mobilenumber;
        existingStudent.gender = gender;
        existingStudent.dob = dob;
        existingStudent.country = country;
      }
    },
    deleteStudent: (state, action) => {
        const { id } = action.payload;
        const existingStudent = state.find(data => data.id === id);
        console.log('existingDELETEStudent :>> ', existingStudent);
        if(existingStudent) {
          return state.filter(data => data.id !== id);
        }
      }
  },
});

export const {addStudent,editStudent,deleteStudent}= studentSlice.actions;

export default studentSlice.reducer;
