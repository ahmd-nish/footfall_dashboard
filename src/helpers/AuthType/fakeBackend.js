import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as url from "../url_helper";

const firebaseConfig = {
  apiKey: "AIzaSyC-Z6F5l56POnp8eVDBdX-BC8lTtKpxro8",
  authDomain: "ffcdashboard.firebaseapp.com",
  projectId: "ffcdashboard",
  storageBucket: "ffcdashboard.appspot.com",
  messagingSenderId: "296415402160",
  appId: "1:296415402160:web:3bc6423e1748d61254c375",
  measurementId: "G-N99PX5TXEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const fakeBackend = () => {
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

  mock.onPost(url.POST_FAKE_LOGIN).reply((config) => {
    const user = JSON.parse(config["data"]);
    return signInWithEmailAndPassword(auth, user.email, user.password)
      .then((response) => {
        return [200, response.user];
      })
      .catch((error) => {
        return [400, error.message];
      });
  });

  mock.onPost(url.POST_FAKE_LOGOUT).reply(() => {
    return signOut(auth)
      .then(() => {
        return [200, "Logged out successfully"];
      })
      .catch((error) => {
        return [400, error.message];
      });
  });

  // ... (Keep the other mock implementations as they are)

};

export default fakeBackend;
