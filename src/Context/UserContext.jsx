import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// import { useGetUserByFirebaseIdQuery } from "../features/user/userApi";

export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.uid) {
        fetch(
          `http://localhost:8000/api/v1/users?firebaseId=${currentUser.uid}`
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.data.user.role);
            setUser(data.data.user);
            setUserRole(data.data.user.role);
            console.log(data.data.user.role);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      } else {
        setLoading(false);
        setUser(null)
        setUserRole(null)
      }
    });
    return () => unSubscribe();
  }, []);


  // console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const value = {
    createUser,
    updateUser,
    user,
    logIn,
    logOut,
    loading,
    userRole
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserContext;
