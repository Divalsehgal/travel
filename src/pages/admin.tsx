import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";

type TravelData = {
  id: string;
  area: string;
  interest: string;
  budget: string;
  travelers: string;
  email: string;
};

function Admin() {
  const [travelData, setTravelData] = useState<TravelData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "travelData"));
      const fetchedData: TravelData[] = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push(doc.data() as TravelData);
      });
      setTravelData(fetchedData);
    }
    fetchData();
  }, []);

  return (
    <div>
    <div className="max-h-90 mt-10 overflow-y-auto">
      {travelData.map((data) => {
        const { id, area, interest, budget, travelers, email } = data;
        return (
          <div key={id} className="bg-white p-6 rounded shadow mb-4">
            <h2 className="text-2xl font-bold mb-2">ID: {id}</h2>
            <p className="text-gray-700 mb-2">
              Area: {area}
            </p>
            <p className="text-gray-700 mb-2">
              Interest: {interest}
            </p>
            <p className="text-gray-700 mb-2">
              Budget: {budget}
            </p>
            <p className="text-gray-700 mb-2">
              Travelers: {travelers}
            </p>
            <p className="text-gray-700 mb-2">
              Email: {email}
            </p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default Admin;
