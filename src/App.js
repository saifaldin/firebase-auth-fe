import { loginUser, logoutUser } from "./auth/auth";
import { LoginFormSection } from "./login-form";

function App() {
  return (
    <>
      <LoginFormSection onSubmit={loginUser} title='Login' buttonDescription='Login with Google'></LoginFormSection>
      <LoginFormSection onSubmit={logoutUser} title='Logout' buttonDescription='Logout with Google'></LoginFormSection>
    </>
  );
}

export default App;
