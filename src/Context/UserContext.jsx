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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [oldUser, setOldUser] = useState(null);
  console.log(oldUser)
  const [user, setUser] = useState(null);

  // const {data: userData} = useGetUserByFirebaseIdQuery(user?.uid)
  // console.log(userData);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setOldUser(currentUser);
      setLoading(false);
    });
    if (oldUser?.uid) {
      console.log(oldUser?.uid);
      const firebaseId = oldUser?.uid;
  
      fetch(`http://localhost:8000/api/v1/users?firebaseId=${firebaseId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data.user.role);
          setUser(data.data.user)
        });
    }
    return () => unSubscribe();
  }, [oldUser]);


  console.log(user);
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserContext;
