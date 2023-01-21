import React, { useEffect, useState } from "react";
import Card from "./Card";
import { db } from "../config/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CardList() {
  const params = useParams();
  const navigate = useNavigate();

  const CategoryName = params.categoryName;


  const [isComplete, setIsComplete] = useState(false);
  const [ourUsers, setOurUsers] = useState([]);


  let q;
  if (params.searchQuery) {
    q = collection(db, "outfits");
  } else {
    q = query(
      collection(db, "outfits"),
      where("gender", "==", params.gender),
      where("category", "==", params.categoryName)
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      setOurUsers([]);

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        if (params.searchQuery) {
          if (
            doc
              .data()
              .title.toLowerCase()
              .includes(params.searchQuery.toLowerCase().trim())
          ) {
            setOurUsers((prevData) => [...prevData, doc.data()]);
          }
        } else {
          setOurUsers((prevData) => [...prevData, doc.data()]);
        }
        setIsComplete(true);
      });
    };
    fetchData();

    console.log("fetch called");
  }, [params]);

  return (
    <div>
      <div className="w-full mt-4 border rounded-3xl px-7 h-14  flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house"></i>
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/favourites")}>
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>

      <h2 className="ml-7 mt-7 text-2xl font-bold">
        {CategoryName
          ? `${params.categoryName.substr(
              0,
              params.categoryName.indexOf("-")
            )} Outfits (${params.gender})`
          : "Search Results"}
      </h2>
      <div className="w-5/6 mx-auto flex justify-evenly flex-wrap">
        {isComplete ? (
          ourUsers.length > 0 ? (
            ourUsers.map((user, index) => {
              return <Card key={user.id} userData={user} />;
            })
          ) : (
            <h1>No Results Found ...</h1>
          )
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </div>
  );
}
