import React from "react";
import { useQuery } from "@apollo/client";
import "./home.css"

const Home = () => {

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <h3>Welcome to custom made leather patches</h3>
          <p>
            Using only the best, top grain leather and made on our brand new XTool D1
            Pro machine we can make just about anything you can dream. We mainly
            stay with leather but we can also etch may other mediums such as
            wood and can mark metal. If you can dream up an idea then we will do
            our best to make that dream come true. Limited to a workspace of
            32in x 32in
          </p>
        </div>
        <div className="col-12 col-md-8 mb-3">
          <img className="home-image" src='https://res.cloudinary.com/dmeqych6o/image/upload/v1665344898/Project%203/per_cap_patch_qf66fi.jpg'></img>
          <img className="home-image" src='https://res.cloudinary.com/dmeqych6o/image/upload/v1665350020/Project%203/per_coasters_gaea11.jpg'></img>
          <img className="home-image"  src='https://res.cloudinary.com/dmeqych6o/image/upload/v1665344915/Project%203/per_dog_collar_ne1gme.jpg'></img>
          <img className="home-image" src='https://res.cloudinary.com/dmeqych6o/image/upload/v1665344910/Project%203/per_keychain_fatme6.jpg'></img>
        </div>
      </div>
    </main>
  );
};

export default Home;
