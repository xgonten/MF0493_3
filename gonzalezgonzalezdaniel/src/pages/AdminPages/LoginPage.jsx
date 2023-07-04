import { useContext } from "react";
import { LoginForm } from "../../components/LoginForm";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export function LoginPage() {
  const { user } =  useContext(UserContext)
  return (
    <>
      <LoginForm/>
      {user.uid && <Navigate to='/'/>}      
    </>
  )
}
