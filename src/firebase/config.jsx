import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDp_iRYvF39XlUGyhIJYbe8d8GNgaEijrc",
  authDomain: "lutzferrandojm-cfa86.firebaseapp.com",
  projectId: "lutzferrandojm-cfa86",
  storageBucket: "lutzferrandojm-cfa86.appspot.com",
  messagingSenderId: "151927018671",
  appId: "1:151927018671:web:a8f478a13c2f70eb48705a"
};

const app = initializeApp(firebaseConfig);
export const initFirebase = () => app