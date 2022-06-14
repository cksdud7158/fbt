import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function useAuth() {
  const auth = getAuth();
  auth.useDeviceLanguage();

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider);
}
