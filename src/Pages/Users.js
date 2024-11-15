import React, { useEffect, useState } from "react";
import { dataGet } from "../Config/firebase/firebasefunction";
import Screen from "../Components/Screen";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [userList, setUserList] = useState([]);
  const navigation = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const usersData = await dataGet("DataOfUser");
      setUserList(usersData);
    }
    fetchData();
  }, []);

  return (
    <> <Screen 
    title={"Users"}
    label={"Add Users"}
    onclick={()=>{navigation('/signup')}}
     />
      <div className="p-6">

        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-6 py-3  font-semibold">User Name</th>
              <th className="px-6 py-3  font-semibold">Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id} className="hover:bg-teal-50">
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{user.userName}</td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}
