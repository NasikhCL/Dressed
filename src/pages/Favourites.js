import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Favourites() {
  const navigate = useNavigate();
  const [myFavs, setMyFavs] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const localStorageFavCards =
      JSON.parse(localStorage.getItem("favCards")) || [];

    setMyFavs(localStorageFavCards);

    console.log(JSON.parse(localStorage.getItem("favCards")));
    setIsComplete(true);

    // Listen for changes in local storage
    window.addEventListener("storage", (e) => {
      if (e.key === "favCards") {
        setMyFavs(JSON.parse(e.newValue));
      }
    });
    return () => {
      window.removeEventListener("storage", (e) => {});
    };
  }, []);

  const handleRemoveClick = (id) => {
    const updatedFavCards = myFavs.filter((card) => card.id !== id);
    setMyFavs(updatedFavCards);
    localStorage.setItem("favCards", JSON.stringify(updatedFavCards));
  };

  return (
    <div>
      <div className="w-full mt-4 border rounded-3xl px-7 h-14  flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house"></i>
        </div>
      </div>
      <h1 className="text-2xl font-bold my-5 px-7">My Favourites</h1>
      <div className="w-full flex flex-wrap justify-evenly items-center">
        {isComplete ? (
          myFavs && myFavs.length !== 0 ? (
            myFavs.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border rounded-lg shadow-md max-w-sm mt-7 mx-1 "
                >
                  <div className="h-96">
                    <img
                      className="object-contain w-full h-full shadow-xl"
                      src={item.photoUrl}
                      alt="user"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between">
                      <h4 className="text-xl font-semibold tracking-tight text-blue-900">
                        {item.title}
                      </h4>
                      <button onClick={() => handleRemoveClick(item.id)}>
                        <h4 className="text-red-500 text-2xl cursor-pointer">
                          <i className="fa-solid fa-heart"></i>
                        </h4>
                      </button>
                    </div>
                    <p className="mb-2 leading-normal">{item.description}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2>No Data Found...</h2>
          )
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
