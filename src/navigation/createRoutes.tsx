import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import About from "../pages/about";
import Contact from "../pages/contact";
import { PrivateRoute } from "./routes";
import Admin from "../pages/admin";
import User from "../pages/user";
import LoginForm from "../pages/login";

type Props = {};

function CreateRoutes({}: Props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route
            path="admin"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={"404"} />
      </Routes>
    </>
  );
}

export default CreateRoutes;
