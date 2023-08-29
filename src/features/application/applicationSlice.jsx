import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  admissionData : {
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
          father_age:  0,
          father_occupation: "",
          father_company: "",
          father_designation: "",
          father_income:  0,
        },
        mother: {
          mother_name: "",
          mother_mobile: "",
          mother_email: "",
          mother_nid: "",
          mother_passport: "",
          mother_dob: "",
          mother_age:  0,
          mother_occupation: "",
          mother_company: "",
          mother_designation: "",
          mother_income:  0,
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
    }
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    admissionFormInput: (state, action) => {
      const { fieldName, value } = action.payload;
      const fieldNames = fieldName.split(".");
      let obj = state.admissionData;

      fieldNames.forEach((key, index) => {
        if (index === fieldNames.length - 1) {
          obj[key] = value;
        } else {
          if (!obj[key]) {
            obj[key] = {};
          }
          obj = obj[key];
        }
      });
    },
  },
});

export const { admissionFormInput } = applicationSlice.actions;

export default applicationSlice.reducer;
