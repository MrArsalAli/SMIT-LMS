import React from "react";
import footerImage from "../images/footerImage.jpg";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className=" text-white">
      <div className="bg-gray-500 mx-auto text-center bg-cover bg-center">
        <div className="grid grid-cols-3">
          <div className="flex flex-col h-96 border border-black">
            <img
              className="w-28 h-28 my-6 mx-auto rounded-full"
              src={logo}
              alt="SMIT"
            />
          </div>
          <div className="h-96 border border-black">
            <h1 className="text-2xl font-bold my-6">About</h1>
            <p className="my-6">News</p>
            <p className="my-6">Media</p>
            <p className="my-6">Report</p>
            <p className="my-6">Contact</p>
          </div>
          <div className="h-96 border border-black">
            <h1 className="text-2xl font-bold my-6">Contact</h1>
            <p>A-25, Bahadurabad Chowrangi Karachi, Pakistan</p>
            <p>CELL: 92-311-1729526</p>
            {/* <div className="h-60 w-96 mx-auto bg-gray-300 rounded overflow-hidden sm:mr-10 p-10 relative">
              <iframe
                width={600}
                height={450}
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d452.2734526705852!2d67.08976847889744!3d24.92567755271319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f60a0781265%3A0x2befaba123014ab1!2sSMIT%20Gulshan%20Campus!5e0!3m2!1sen!2s!4v1734117413080!5m2!1sen!2s"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              />
            </div> */}
          </div>
        </div>
        <p>
          <hr className="border-gray-500" /> 2024 LMS FOR GULSHAN CAMPUS SMIT
          with TEAM - I. All Rights Reserved. <hr className="border-gray-500" />
        </p>{" "}
      </div>
    </footer>
  );
}

export default Footer;

