// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_apiKey,
  authDomain: import.meta.env.VITE_REACT_APP_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// Function to upload multiple files to Firebase Storage
export const uploadFilesToFirebase = (files) => {
  const storageRef = app.storage().ref();
  const uploadPromises = [];

  for (const file of files) {
    const fileRef = storageRef.child(`uploads/${file.name}`);
    const uploadTask = fileRef.put(file);

    uploadPromises.push(uploadTask);
  }

  return Promise.all(uploadPromises)
    .then((snapshots) => {
      const downloadURLPromises = snapshots.map((snapshot) => snapshot.ref.getDownloadURL());
      return Promise.all(downloadURLPromises);
    })
    .catch((error) => {
      throw new Error('Error uploading files: ' + error.message);
    });
};