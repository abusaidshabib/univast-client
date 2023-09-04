import { AiOutlineEye } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const TeachersEnroll = () => {
  const applications = [
    {
      general: {
        applicant_type: "Regular",
        program_type: "Undergraduate",
        last_complete_degree_type: "High School",
        program: "Computer Science",
        medium: "English",
        education_shift: "Morning",
        admission_test_venue: "Main Hall",
      },
      personal: {
        address: {
          present_address: {
            present_country: "USA",
            present_state_division: "California",
            present_thana: "Los Angeles",
            present_city: "Los Angeles",
            present_zip_code: "12345",
            present_street1: "123 Main Street",
            present_street2: "",
          },
          permanent_address: {
            permanent_country: "USA",
            permanent_state_division: "California",
            permanent_thana: "Los Angeles",
            permanent_city: "Los Angeles",
            permanent_zip_code: "12345",
            permanent_street1: "456 Elm Street",
            permanent_street2: "",
          },
        },
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        birth_date: "1995-08-10T00:00:00.000Z",
        religion: "Christian",
        marital: "Single",
        email: "john.doe@example.com",
        mobile: "1234567890",
        nid_Birth_certificate: "1234567890",
        passport: "ABC123XYZ",
        nationality: "American",
        country: "USA",
        social_media: "@johndoe",
        image: "https://example.com/john_doe.jpg",
        signature: "https://example.com/john_signature.jpg",
      },
      family: {
        father: {
          father_name: "Michael Doe",
          father_mobile: "9876543210",
          father_email: "michael.doe@example.com",
          father_nid: "0987654321",
          father_passport: "PQR789UVW",
          father_dob: "1968-03-25T00:00:00.000Z",
          father_age: 55,
          father_occupation: "Engineer",
          father_company: "TechCorp",
          father_designation: "Senior Engineer",
          father_income: 80000,
        },
        mother: {
          mother_name: "Mary Doe",
          mother_mobile: "8765432109",
          mother_email: "mary.doe@example.com",
          mother_nid: "876543210",
          mother_passport: "XYZ456ABC",
          mother_dob: "1972-06-15T00:00:00.000Z",
          mother_age: 51,
          mother_occupation: "Teacher",
          mother_company: "ABC School",
          mother_designation: "English Teacher",
          mother_income: 60000,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: true,
        accept_declaration: true,
        accept_terms: true,
      },
      _id: "64e47d85cc73eac1d1016f1f",
      education: [
        {
          exam: "High School",
          institution_name: "ABC High School",
          board: "State Board",
          group_major: "Science",
          result: "95",
          passing_year: 2012,
          certificates: "https://example.com/high_school_certificate.pdf",
          _id: "64e47d85cc73eac1d1016f20",
        },
        {
          exam: "Intermediate",
          institution_name: "XYZ College",
          board: "State Board",
          group_major: "Science",
          result: "85",
          passing_year: 2014,
          certificates: "https://example.com/intermediate_certificate.pdf",
          _id: "64e47d85cc73eac1d1016f21",
        },
      ],
      __v: 0,
    },
    {
      general: {
        applicant_type: "Regular",
        program_type: "Undergraduate",
        last_complete_degree_type: "High School",
        program: "Computer Science",
        medium: "English",
        education_shift: "Morning",
        admission_test_venue: "Main Hall",
      },
      personal: {
        address: {
          present_address: {
            present_country: "USA",
            present_state_division: "California",
            present_thana: "Los Angeles",
            present_city: "Los Angeles",
            present_zip_code: "12345",
            present_street1: "123 Main Street",
            present_street2: "",
          },
          permanent_address: {
            permanent_country: "USA",
            permanent_state_division: "California",
            permanent_thana: "Los Angeles",
            permanent_city: "Los Angeles",
            permanent_zip_code: "12345",
            permanent_street1: "456 Elm Street",
            permanent_street2: "",
          },
        },
        firstName: "John",
        lastName: "Doe",
        gender: "Male",
        birth_date: "1995-08-10T00:00:00.000Z",
        religion: "Christian",
        marital: "Single",
        email: "john.doe@example.com",
        mobile: "1234567890",
        nid_Birth_certificate: "12345678410",
        passport: "ABC123XYZ",
        nationality: "American",
        country: "USA",
        social_media: "@johndoe",
        image: "https://example.com/john_doe.jpg",
        signature: "https://example.com/john_signature.jpg",
      },
      family: {
        father: {
          father_name: "Michael Doe",
          father_mobile: "9876543210",
          father_email: "michael.doe@example.com",
          father_nid: "0987654321",
          father_passport: "PQR789UVW",
          father_dob: "1968-03-25T00:00:00.000Z",
          father_age: 55,
          father_occupation: "Engineer",
          father_company: "TechCorp",
          father_designation: "Senior Engineer",
          father_income: 80000,
        },
        mother: {
          mother_name: "Mary Doe",
          mother_mobile: "8765432109",
          mother_email: "mary.doe@example.com",
          mother_nid: "876543210",
          mother_passport: "XYZ456ABC",
          mother_dob: "1972-06-15T00:00:00.000Z",
          mother_age: 51,
          mother_occupation: "Teacher",
          mother_company: "ABC School",
          mother_designation: "English Teacher",
          mother_income: 60000,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: true,
        accept_declaration: true,
        accept_terms: true,
      },
      _id: "64e4833235f25b3d2dfedfe3",
      education: [
        {
          exam: "High School",
          institution_name: "ABC High School",
          board: "State Board",
          group_major: "Science",
          result: "95",
          passing_year: 2012,
          certificates: "https://example.com/high_school_certificate.pdf",
          _id: "64e4833235f25b3d2dfedfe4",
        },
        {
          exam: "Intermediate",
          institution_name: "XYZ College",
          board: "State Board",
          group_major: "Science",
          result: "85",
          passing_year: 2014,
          certificates: "https://example.com/intermediate_certificate.pdf",
          _id: "64e4833235f25b3d2dfedfe5",
        },
      ],
      __v: 0,
    },
    {
      general: {
        applicant_type: "Local student (Bangladeshi)",
        program_type: "Bachelor",
        last_complete_degree_type: "",
        program: "Computer Science & Engineering",
        education_shift: "Day",
      },
      personal: {
        address: {
          present_address: {
            present_country: "Select Type...",
            present_state_division: "",
            present_thana: "",
            present_city: "",
            present_zip_code: "",
            present_street1: "",
            present_street2: "",
          },
          permanent_address: {
            permanent_country: "Select Type...",
            permanent_state_division: "",
            permanent_thana: "",
            permanent_city: "",
            permanent_zip_code: "",
            permanent_street1: "",
            permanent_street2: "",
          },
        },
        firstName: "Md Golam Mehedi",
        lastName: "",
        gender: "",
        birth_date: "2001-04-19T00:00:00.000Z",
        religion: "Select Type...",
        marital: "Select Type...",
        email: "mdpulokhasan@gmail.com",
        mobile: "+8801998827178",
        nid_Birth_certificate: "123456789",
        passport: "",
        nationality: "",
        country: "Bangladesh",
        social_media: "",
        image: "",
        signature: "",
      },
      family: {
        father: {
          father_name: "",
          father_mobile: "",
          father_email: "",
          father_nid: "",
          father_passport: "",
          father_dob: null,
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
          mother_dob: null,
          mother_age: 0,
          mother_occupation: "",
          mother_company: "",
          mother_designation: "",
          mother_income: 0,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: false,
        accept_declaration: true,
        accept_terms: true,
      },
      _id: "64ebbafe84d83a2fbce859c8",
      education: [
        {
          exam: "",
          institution_name: "",
          board: "",
          group_major: "",
          result: "",
          passing_year: null,
          certificates: "",
          _id: "64ebbafe84d83a2fbce859c9",
        },
      ],
      __v: 0,
    },
    {
      general: {
        applicant_type: "Select Type...",
        program_type: "",
        last_complete_degree_type: "",
        program: "",
        education_shift: "Select Type...",
      },
      personal: {
        address: {
          present_address: {
            present_country: "Select Type...",
            present_state_division: "",
            present_thana: "",
            present_city: "",
            present_zip_code: "",
            present_street1: "",
            present_street2: "",
          },
          permanent_address: {
            permanent_country: "Select Type...",
            permanent_state_division: "",
            permanent_thana: "",
            permanent_city: "",
            permanent_zip_code: "",
            permanent_street1: "",
            permanent_street2: "",
          },
        },
        firstName: "",
        lastName: "",
        gender: "",
        birth_date: null,
        religion: "Select Type...",
        marital: "Select Type...",
        email: "",
        mobile: "",
        nid_Birth_certificate: "123456879",
        passport: "",
        nationality: "",
        country: "",
        social_media: "",
        image: "",
        signature: "",
      },
      family: {
        father: {
          father_name: "",
          father_mobile: "",
          father_email: "",
          father_nid: "",
          father_passport: "",
          father_dob: null,
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
          mother_dob: null,
          mother_age: 0,
          mother_occupation: "",
          mother_company: "",
          mother_designation: "",
          mother_income: 0,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: false,
        accept_declaration: true,
        accept_terms: true,
      },
      _id: "64ebbbde84d83a2fbce859d1",
      education: [
        {
          exam: "",
          institution_name: "",
          board: "",
          group_major: "",
          result: "",
          passing_year: null,
          certificates: "",
          _id: "64ebbbde84d83a2fbce859d2",
        },
      ],
      __v: 0,
    },
    {
      general: {
        applicant_type: "Local student (Bangladeshi)",
        program_type: "Bachelor",
        last_complete_degree_type: "",
        program: "Computer Science & Engineering",
        education_shift: "Day",
      },
      personal: {
        address: {
          present_address: {
            present_country: "Select Type...",
            present_state_division: "",
            present_thana: "",
            present_city: "",
            present_zip_code: "",
            present_street1: "",
            present_street2: "",
          },
          permanent_address: {
            permanent_country: "Select Type...",
            permanent_state_division: "",
            permanent_thana: "",
            permanent_city: "",
            permanent_zip_code: "",
            permanent_street1: "",
            permanent_street2: "",
          },
        },
        firstName: "Md Golam Mehedi",
        lastName: "",
        gender: "",
        birth_date: null,
        religion: "Select Type...",
        marital: "Select Type...",
        email: "",
        mobile: "+8801998827178",
        nid_Birth_certificate: "219651638947",
        passport: "",
        nationality: "",
        country: "Bangladesh",
        social_media: "",
        image: "",
        signature: "",
      },
      family: {
        father: {
          father_name: "",
          father_mobile: "",
          father_email: "",
          father_nid: "",
          father_passport: "",
          father_dob: null,
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
          mother_dob: null,
          mother_age: 0,
          mother_occupation: "",
          mother_company: "",
          mother_designation: "",
          mother_income: 0,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: false,
        accept_declaration: true,
        accept_terms: true,
      },
      _id: "64ebbfba84d83a2fbce859e9",
      education: [
        {
          exam: "",
          institution_name: "",
          board: "",
          group_major: "",
          result: "",
          passing_year: null,
          certificates: "",
          _id: "64ebbfba84d83a2fbce859ea",
        },
      ],
      __v: 0,
    },
    {
      general: {
        applicant_type: "Local student (Bangladeshi)",
        program_type: "Bachelor",
        last_complete_degree_type: "",
        program: "Computer Science & Engineering",
        education_shift: "Day",
      },
      personal: {
        address: {
          present_address: {
            present_country: "Select Type...",
            present_state_division: "",
            present_thana: "",
            present_city: "",
            present_zip_code: "",
            present_street1: "",
            present_street2: "",
          },
          permanent_address: {
            permanent_country: "Select Type...",
            permanent_state_division: "",
            permanent_thana: "",
            permanent_city: "",
            permanent_zip_code: "",
            permanent_street1: "",
            permanent_street2: "",
          },
        },
        firstName: "Md Golam Mehedi",
        lastName: "Mehedi",
        gender: "",
        birth_date: null,
        religion: "Select Type...",
        marital: "Select Type...",
        email: "mdloft09@gmail.com",
        mobile: "+8801998827178",
        nid_Birth_certificate: "8974651263",
        passport: "",
        nationality: "",
        country: "Bangladesh",
        social_media: "",
        image: "",
        signature: "",
      },
      family: {
        father: {
          father_name: "",
          father_mobile: "",
          father_email: "",
          father_nid: "",
          father_passport: "",
          father_dob: null,
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
          mother_dob: null,
          mother_age: 0,
          mother_occupation: "",
          mother_company: "",
          mother_designation: "",
          mother_income: 0,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: false,
        accept_declaration: false,
        accept_terms: false,
      },
      _id: "64ebcac984d83a2fbce859fe",
      education: [
        {
          exam: "",
          institution_name: "",
          board: "",
          group_major: "",
          result: "",
          passing_year: null,
          certificates: "",
          _id: "64ebcac984d83a2fbce859ff",
        },
      ],
      __v: 0,
    },
    {
      general: {
        applicant_type: "Select Type...",
        program_type: "",
        last_complete_degree_type: "",
        program: "",
        education_shift: "Select Type...",
      },
      personal: {
        address: {
          present_address: {
            present_country: "Select Type...",
            present_state_division: "",
            present_thana: "",
            present_city: "",
            present_zip_code: "",
            present_street1: "",
            present_street2: "",
          },
          permanent_address: {
            permanent_country: "Select Type...",
            permanent_state_division: "",
            permanent_thana: "",
            permanent_city: "",
            permanent_zip_code: "",
            permanent_street1: "",
            permanent_street2: "",
          },
        },
        firstName: "",
        lastName: "",
        gender: "",
        birth_date: null,
        religion: "Select Type...",
        marital: "Select Type...",
        email: "",
        mobile: "",
        nid_Birth_certificate: "854108915085051",
        passport: "",
        nationality: "",
        country: "",
        social_media: "",
        image: "",
        signature: "",
      },
      family: {
        father: {
          father_name: "",
          father_mobile: "",
          father_email: "",
          father_nid: "",
          father_passport: "",
          father_dob: null,
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
          mother_dob: null,
          mother_age: 0,
          mother_occupation: "",
          mother_company: "",
          mother_designation: "",
          mother_income: 0,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: false,
        accept_declaration: false,
        accept_terms: false,
      },
      _id: "64ebcb0c84d83a2fbce85a05",
      education: [
        {
          exam: "",
          institution_name: "",
          board: "",
          group_major: "",
          result: "",
          passing_year: null,
          certificates: "",
          _id: "64ebcb0c84d83a2fbce85a06",
        },
      ],
      __v: 0,
    },
    {
      general: {
        applicant_type: "Local student (Bangladeshi)",
        program_type: "Bachelor",
        last_complete_degree_type: "HSC/Alim",
        program: "Computer Science & Engineering",
        education_shift: "Day",
      },
      personal: {
        address: {
          present_address: {
            present_country: "Bangladesh",
            present_state_division: "Dhaka",
            present_thana: "",
            present_city: "Dhaka",
            present_zip_code: "1236",
            present_street1: "Kajirgaon, West Matuail, Jatrabari, Dhaka",
            present_street2: "Kajirgaon, West Matuail, Jatrabari, Dhaka",
          },
          permanent_address: {
            permanent_country: "Bangladesh",
            permanent_state_division: "Dhaka",
            permanent_thana: "",
            permanent_city: "Dhaka",
            permanent_zip_code: "1236",
            permanent_street1: "Kajirgaon, West Matuail, Jatrabari, Dhaka",
            permanent_street2: "Kajirgaon, West Matuail, Jatrabari, Dhaka",
          },
        },
        firstName: "Md Golam Mehedi",
        lastName: "Mehedi",
        gender: "Islam",
        birth_date: "2023-09-22T00:00:00.000Z",
        religion: "Islam",
        marital: "",
        email: "mdloft09@gmail.com",
        mobile: "+8801998827178",
        nid_Birth_certificate: "564551945",
        passport: "",
        nationality: "sdzfs",
        country: "Bangladesh",
        social_media: "",
        image: "C:\\fakepath\\meetGraduates.jpg",
        signature: "C:\\fakepath\\004-degree.png",
      },
      family: {
        father: {
          father_name: "fctghfhf",
          father_mobile: "+8801998827178",
          father_email: "",
          father_nid: "78672876",
          father_passport: "",
          father_dob: null,
          father_age: 0,
          father_occupation: "",
          father_company: "",
          father_designation: "",
          father_income: 0,
        },
        mother: {
          mother_name: "ghfhfnf",
          mother_mobile: "+8801998827178",
          mother_email: "",
          mother_nid: "786786",
          mother_passport: "",
          mother_dob: null,
          mother_age: 0,
          mother_occupation: "",
          mother_company: "",
          mother_designation: "",
          mother_income: 0,
        },
      },
      others: {
        is_parents_freedom_fighter: false,
        is_tribal: false,
        is_physical_disorder: false,
        is_first_division_player: false,
        accept_declaration: false,
        accept_terms: false,
      },
      _id: "64f0ffab0e2e51c285216a96",
      education: [
        {
          exam: "ssc",
          institution_name: "ddfgdfg",
          board: "dhaka",
          group_major: "science",
          result: "5",
          passing_year: 2011,
          certificates:
            "C:\\fakepath\\Goat Moves_Contract Offer_Md Golam Mehedi.pdf",
          _id: "64f0ffab0e2e51c285216a97",
        },
        {
          exam: "hsc",
          institution_name: "ghjghjg",
          board: "dhaka",
          group_major: "science",
          result: "4",
          passing_year: 1234,
          certificates:
            "C:\\fakepath\\Goat Moves_Contract Offer_Md Golam Mehedi Pulok.pdf",
          _id: "64f0ffab0e2e51c285216a98",
        },
      ],
      __v: 0,
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] w-full bg-gray-200 p-5 font-sans">
      <div className="p-10 bg-white">
        <div className="flex items-center gap-x-3">
          <h2 className="text-4xl font-semibold">Teacher Applied</h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {applications.length} Student
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full border-collapse w-full text-lg bg-p-white">
                  <thead className="bg-gray-50 dark:bg-gray-800 text-sm uppercase font-normal tracking-wider">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />
                          <span>Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Program Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Program
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Results
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {applications?.map((app) => (
                      <tr key={app._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                              />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {app.personal.firstName +
                                    " " +
                                    app.personal.lastName}
                                </h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                                  Id: {app._id}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.general.program_type}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.general.program}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.personal.email}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {app.education.map((edu, index) => (
                            <p key={index}>
                              <span>{edu.exam}</span> : &nbsp;
                              <span>{edu.result}</span>
                            </p>
                          ))}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl">
                              <RiDeleteBin6Line />
                            </button>
                            <Link
                              to={`/enroll/studentEnroll/${app._id}`}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl"
                            >
                              <AiOutlineEye />
                            </Link>
                            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none text-xl">
                              <IoMdCheckmark />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>previous</span>
          </a>

          <div className="items-center hidden lg:flex gap-x-3">
            <a
              href="#"
              className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
            >
              1
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              2
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              3
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              ...
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              12
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              13
            </a>
            <a
              href="#"
              className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              14
            </a>
          </div>

          <a
            href="#"
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeachersEnroll;
