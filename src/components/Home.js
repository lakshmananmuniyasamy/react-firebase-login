import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';

export const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

 

  return (
    <div>
      <center>
        <h1>Welcome back, {user.displayName || user.email}</h1>
        <hr />
        <h2>{user.email}</h2>
        {user.photoURL && <img src={user.photoURL} alt='profile' />}
        <hr />
        <button onClick={handleLogout}>Logout</button>
      </center>
    </div>
  );
}
