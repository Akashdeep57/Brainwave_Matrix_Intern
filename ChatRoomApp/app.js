// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCuOr3TD82xlx8zqPEahAVBqG4b3t-9mQ",
  authDomain: "fir-chatroom-4841e.firebaseapp.com",
  projectId: "fir-chatroom-4841e",
  storageBucket: "fir-chatroom-4841e.appspot.com",
  messagingSenderId: "343270786579",
  appId: "1:343270786579:web:f9f8c7213f6e871cd3e1e6",
  measurementId: "G-NB00M2ZSEY" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Function to add a document to Firestore
async function addDocument(collectionName, docId, data) {
  try {
    await setDoc(doc(db, collectionName, docId), data);
    console.log("Document added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// Function to fetch a document from Firestore
async function getDocument(collectionName, docId) {
  try {
    const docSnap = await getDoc(doc(db, collectionName, docId));
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
  }
}

// Function to sign up a new user
async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error.message);
  }
}

// Function to sign in an existing user
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:", userCredential.user);
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
}

// Function to sign out the user
async function signOutUser() {
  try {
    await signOut(auth);
    console.log("User signed out successfully!");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
}

// Example Usage:

// Add a document
addDocument("chatrooms", "room1", { name: "General Chat", createdBy: "admin" });

// Get a document
getDocument("chatrooms", "room1");

// Sign up a new user
signUp("user@example.com", "password123");

// Sign in an existing user
signIn("user@example.com", "password123");

// Sign out the current user
signOutUser();
