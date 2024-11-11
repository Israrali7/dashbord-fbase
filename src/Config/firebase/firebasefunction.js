// Import Firebase services from firebaseconfig.js
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, deleteDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { app, db } from "./firebaseconfig";

const auth = getAuth(app)

// Function to sign up a user
export const signUpUser = (obj) => {
  return createUserWithEmailAndPassword(auth, obj.email, obj.password); // Return the Promise
};


// Function to sign in a user
export const signInUser = (obj) => {
  return signInWithEmailAndPassword(auth, obj.email, obj.password);
};

// Function to set data in Firestore (e.g., a document)
export const dataSet = (nodeName, obj) => {
  const docRef = collection(db, nodeName);
  addDoc(docRef, obj);
};

export const dataGet = async (nodeName) => {
  const collectionRef = collection(db, nodeName); // Reference to the collection
  const dt = await getDocs(collectionRef); // Retrieve all documents

  // Map over each document to get an array of data
  const dataList = dt.docs.map(doc => ({
    id: doc.id,           // Unique document ID
    ...doc.data()         // Document data
  }));

  return dataList; // Return the array of document data
};


// // Function to edit data in Firestore (e.g., update a document)
// export const dataEdit = (nodeName, docId, obj) => {
//     const docRef = doc(db, nodeName, docId);
//     updateDoc(docRef, obj)
//         .then(() => {
//             console.log('Document updated successfully');
//         })
//         .catch((error) => {
//             console.error("Error updating document: ", error);
//         });
// };

// // Function to delete data in Firestore (e.g., a document)
// export const dataDelete = (nodeName, docId) => {
//     const docRef = doc(db, nodeName, docId);
//     deleteDoc(docRef)
//         .then(() => {
//             console.log('Document deleted successfully');
//         })
//         .catch((error) => {
//             console.error("Error deleting document: ", error);
//         });
// };
