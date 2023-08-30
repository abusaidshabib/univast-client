import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  general: {
    applicant_type: "",
    program_type: "",
    last_complete_degree_type: "",
    program: "",
    education_shift: "",
  },

  personal: {
    firstName: "",
    lastName: "",
    gender: "",
    birth_date: "",
    religion: "",
    marital: "",
    blood_group: "",
    email: "",
    mobile: "",
    nid_Birth_certificate: "",
    passport: "",
    nationality: "",
    country: "",
    social_media: "",
    image: "",
    signature: "",
    address: {
      present_address: {
        present_country: "",
        present_state_division: "",
        present_thana: "",
        present_city: "",
        present_zip_code: "",
        present_street1: "",
        present_street2: "",
      },
      permanent_address: {
        permanent_country: "",
        permanent_state_division: "",
        permanent_thana: "",
        permanent_city: "",
        permanent_zip_code: "",
        permanent_street1: "",
        permanent_street2: "",
      },
    },
  },

  family: {
    father: {
      father_name: "",
      father_mobile: "",
      father_email: "",
      father_nid: "",
      father_passport: "",
      father_dob: "",
      father_age: 0,
      father_occupation: "",
      father_company: "",
      father_designation: "",
      father_income: 0,
    },
    mother: {
      mother_name: "",
      mother_mobile: "",
      mother_email: "",
      mother_nid: "",
      mother_passport: "",
      mother_dob: "",
      mother_age: 0,
      mother_occupation: "",
      mother_company: "",
      mother_designation: "",
      mother_income: 0,
    },
  },

  education: [
    {
      exam: "",
      institution_name: "",
      board: "",
      group_major: "",
      result: "",
      passing_year: "",
      certificates: "",
    },
  ],

  others: {
    is_parents_freedom_fighter: false,
    is_tribal: false,
    is_physical_disorder: false,
    is_first_division_player: false,
    accept_declaration: false,
    accept_terms: false,
  },
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    // admissionFormInput: (state, action) => {
    //   const { fieldName, value } = action.payload;
    //   const fieldNames = fieldName.split(".");
    //   let obj = state.admissionData;

    //   fieldNames.forEach((key, index) => {
    //     if (index === fieldNames.length - 1) {
    //       obj[key] = value;
    //     } else {
    //       if (!obj[key]) {
    //         obj[key] = {};
    //       }
    //       obj = obj[key];
    //     }
    //   });
    // },
    // setCurrentStep: (state, action) => {
    //   switch (action.payload.type) {
    //     case "PREVIOUS":
    //       if (state.currentStep > 0) {
    //         state.currentStep -= 1;
    //       }
    //       break;
    //     case "NEXT":
    //       if (state.currentStep < action.payload.payload.length - 1) {
    //         state.currentStep += 1;
    //       }
    //       break;
    //     default:
    //       state.currentStep = action.payload;
    //   }
    // },
    setGeneralInfo: (state, action) => {
      state.general = action.payload;
    },
    setPersonalInfo: (state, action) => {
      state.personal = action.payload;
    },
    setFamilyInfo: (state, action) => {
      state.family = action.payload;
    },
    setEducationInfo: (state, action) => {
      state.education = action.payload;
    },
    setOthersInfo: (state, action) => {
      state.others = action.payload;
    },
  },
});

export const {
  admissionFormInput,
  setCurrentStep,
  setGeneralInfo,
  setPersonalInfo,
  setFamilyInfo,
  setEducationInfo,
  setOthersInfo,
} = applicationSlice.actions;

export default applicationSlice.reducer;
