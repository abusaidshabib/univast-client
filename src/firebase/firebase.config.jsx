// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_apiKey,
  authDomain: import.meta.env.VITE_REACT_APP_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const auth = getAuth(app);
export default auth;

// Function to upload multiple files to Firebase Storage
// export const uploadFilesToFirebase = async (files) => {
//   const uploadPromises = [];

//   for (const file of files) {
//     const storageRef = ref(storage, `images/student/${file.name}`);
//     const uploadTask = uploadBytes(storageRef, file);

//     uploadPromises.push(uploadTask);
//   }

//   try {
//     await Promise.all(uploadPromises);

//     const downloadURLPromises = files.map((file) => {
//       const storageRef = ref(storage, `images/student/${file.name}`);
//       return getDownloadURL(storageRef);
//     });

//     return Promise.all(downloadURLPromises);
//   } catch (error) {
//     throw new Error("Error uploading files: " + error.message);
//   }
// };

// Function to upload a single file to Firebase Storage
export const uploadImageToFirebase = async (file) => {
  try {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    throw new Error("Error uploading file: " + error.message);
  }
};

export const uploadFileToFirebase = async (file) => {
  try {
    const storageRef = ref(storage, `files/${file.name}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    throw new Error("Error uploading file: " + error.message);
  }
};

export const uploadCourseAsstesToFirebase = async (file, fileName) => {
  try {
    const storageRef = ref(storage, `course_assets/${fileName}_${file.name}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    throw new Error("Error uploading file: " + error.message);
  }
};
