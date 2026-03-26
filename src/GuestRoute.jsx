import { Navigate } from 'react-router-dom';
import useAuthStore from './store/useAuthStore';


export default function GuestRoute({ children }) {
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <Navigate to="/" />; 
  }

  return children;
}