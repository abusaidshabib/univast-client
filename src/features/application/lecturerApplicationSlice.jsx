import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal: {
    firstName: "",
    lastName: "",
    gender: "",
    father_name: "",
    mother_name: "",
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

  experience: [],

  publication: [],

  others: {
    is_parents_freedom_fighter: false,
    is_tribal: false,
    is_physical_disorder: false,
    is_first_division_player: false,
    accept_declaration: false,
    accept_terms: false,
  },

  educationSectionCount: 1,
  experienceSectionCount: 1,
  publicationSectionCount: 1,
};

const lecturerApplicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.personal = action.payload;
    },
    setEducationInfo: (state, action) => {
      state.education = action.payload;
    },
    setExperienceInfo: (state, action) => {
      state.experience = action.payload;
    },
    setPublicationInfo: (state, action) => {
      state.publication = action.payload;
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
    manageExperienceCount: (state, action) => {
      if (action.payload === "ADD") {
        state.experienceSectionCount += 1;
      } else if (action.payload === "REMOVE") {
        state.experienceSectionCount -= 1;
      }
    },
    managePublicationCount: (state, action) => {
      if (action.payload === "ADD") {
        state.publicationSectionCount += 1;
      } else if (action.payload === "REMOVE") {
        state.publicationSectionCount -= 1;
      }
    },
  },
});

export const {
  setPersonalInfo,
  setEducationInfo,
  setExperienceInfo,
  setPublicationInfo,
  setOthersInfo,
  manageEducationCount,
  manageExperienceCount,
  managePublicationCount,
} = lecturerApplicationSlice.actions;

export default lecturerApplicationSlice.reducer;
