import React, { Suspense } from "react";
import CreateRoutes from "./navigation/createRoutes";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>
        <CreateRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
