import { authentication } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const SignInScreen = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    provider
      .addScope('email')
      .addScope('profile');

    signInWithPopup(authentication, provider)
      .then(async (re) => {
        console.log(re);

        const idToken = await re.user.getIdToken();

        try {
          const response = await axios.post(
            `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/auth`,
            { authIdToken: idToken },
          );
          console.log('API Response:', response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <div className='App'>
      <button onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );
}

export default SignInScreen;
