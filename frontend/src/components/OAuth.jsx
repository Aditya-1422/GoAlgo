import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function OAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleClick = async () => {
    setLoading(true);
    setError('');

    try {
      const provider = new GoogleAuthProvider();

      // Initiate Google sign-in
      const result = await signInWithPopup(auth, provider);

      // Send user information to your backend
      const response = await axios.post('http://localhost:5000/api/auth/google', {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });

      if (response.status !== 200) {
        throw new Error('Failed to authenticate with the backend');
      }

      // Navigate to the home page or another page after successful login
      navigate('/');
    } catch (error) {
      console.error('Could not sign in with Google', error);
      setError('Could not sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleGoogleClick}
        type='button'
        className='bg-white text-black border border-black w-full p-3 rounded-lg uppercase hover:opacity-90'
      >
        {loading ? 'Signing in...' : 'Continue with Google'}
      </button>
    </div>
  );
}