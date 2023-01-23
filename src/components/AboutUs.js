import React from "react";

export default function AboutUs() {
  return (
    <div className="h-fit mb-141">
      <h1 id="about-us" className="text-2xl font-bold mb-5 px-7 pt-16 pb-14">
        About Us
      </h1>
      <div className="flex  flex-col lg:flex-row justify-between items-center ">
        <div className="flex justify-center items-center w-full lg:w-2/4 mb-7">
          <img
            className="w-32 md:w-64"
            src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses_158538-5002.jpg?w=826&t=st=1674490957~exp=1674491557~hmac=ac3d36354295ae18b2a0a671328e6cec112b75458e3a97e479a99b71902340db"
          />
          <img
            className="w-32 md:w-64"
            src="https://images.pexels.com/photos/11997433/pexels-photo-11997433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="lg:w-2/4 flex flex-col   justify-between items-center px-7 lg:px-14">
          <h2 className="mb-4 text-2xl font-bold italic text-center ">
            TEAM Enosh & Anand
          </h2>
          <p className="text-center text-gray-800 mb-7">
            We are a group of Students who aim at creating a better future with
            the help of computer science and technology{" "}
          </p>
          <p className="text-center text-gray-800 mb-7">
            Our mission is to provide a convenient and user-friendly platform
            for users to discover and explore new fashion trends and styles. We
            are keep on trying to increase our database with a huge load of
            outfit collections. now the website is at alpha stage. sorry for any
            inconvinence you face while using our website. please let us know
            where you got the trouble. we are here to help you
          </p>
          <div className="bg-black text-white rounded-md text-center px-3 py-2 cursor-pointer mb-4">
            {" "}
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
