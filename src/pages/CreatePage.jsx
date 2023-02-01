import React, { useEffect } from "react";
import BoxContent from "../Components/BoxContent";
import DescNavbar from "../Components/DescNavbar";
import Navbar from "../Components/Navbar";
import "../styles/CreatePage.css";

const CreatePage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="create">
      <Navbar />
      <DescNavbar />
      <BoxContent />
    </div>
  );
};

export default CreatePage;
