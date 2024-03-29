import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  general: {
    applicant_type: "",
    program_type: "",
    last_complete_degree_type: "",
    programCode: "",
    education_shift: "",
    admission_semester: "",
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

  educationSectionCount: 1,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
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
    manageEducationCount: (state, action) => {
      if (action.payload === "ADD") {
        state.educationSectionCount += 1;
      } else if (action.payload === "REMOVE") {
        state.educationSectionCount -= 1;
      }
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
  manageEducationCount,
} = applicationSlice.actions;

export default applicationSlice.reducer;
