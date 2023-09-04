// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk605lo34yeYvib9eXRduPtDIGh3cniZ8",
  authDomain: "univast-2023.firebaseapp.com",
  projectId: "univast-2023",
  storageBucket: "univast-2023.appspot.com",
  messagingSenderId: "656971017298",
  appId: "1:656971017298:web:9391d7decf1a95afab838b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;

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