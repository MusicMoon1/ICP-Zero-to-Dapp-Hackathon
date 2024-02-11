




import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtL_jDbmu26a_n0ZwY3MrlT6vLpJjYIFw",
  authDomain: "liveloop-1f42d.firebaseapp.com",
  projectId: "liveloop-1f42d",
  storageBucket: "liveloop-1f42d.appspot.com",
  messagingSenderId: "916748485164",
  appId: "1:916748485164:web:c52b0dfd2c485ab1bf8789"
};


if (!getApps().length) {
  initializeApp(firebaseConfig);
 
}
const app = initializeApp(firebaseConfig)
// export const storage = getStorage(app);

const db = getDatabase();
export {db,app} ;
