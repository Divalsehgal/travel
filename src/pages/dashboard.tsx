import  { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Travelform from "../components/travelform";
import useAuth from "../hooks/useAuth";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import {v4 as uuid} from "uuid"
import { useForm } from "react-hook-form";
import ThankYouCard from "./thankyou";

type Props = {};

function Dashboard({}: Props) {
  const location = useLocation();
  const { authState, logout } = useAuth();
  const otherUrls = ["/login", "/dashboard/admin"];
  const homeUrls = ["/", "/dashboard"];

  const [showthankyou, setShowThankyou] = useState(false);
  const { register, handleSubmit, reset } = useForm<any>();
  let timeout:any=0;
  const onSubmit = async (data: any) => {
    data.id = uuid()
    const travelEntry = doc(collection(db, "travelData"));
    try {
      if (data.email === "") {
        alert("enter the details");
        return;
      }
      const res = await addDoc(collection(db, "travelData"), { travelEntry });
      if (res) {
        setShowThankyou(true);
      }
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  useEffect(() => {
    if (!showthankyou) return;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setShowThankyou(false);
    }, 6000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showthankyou]);

  return (
    <div className="grid min-h-screen grid-rows-[0.1fr,1fr,auto] grid-cols-11">
      <Header authState={authState} logout={logout} />
      <main
        className={`col-span-12 bg-gradient-to-b from-white to-blue-600 py-4 px-6 overflow-hidden`}
      >
        <h2 className="text-xl font-bold mb-4">
          <Outlet />
        </h2>
        {!otherUrls.includes(location.pathname) && ""}
        {homeUrls.includes(location.pathname) ? (
          <Travelform
            register={register}
            handleSubmit={handleSubmit}
            reset={reset}
            onSubmit={onSubmit}
          />
        ) : (
          ""
        )}
        {showthankyou && <ThankYouCard />}
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
