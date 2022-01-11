import React, { useState, useEffect } from "react";
const arrayFeature = [
  {
    title: "Mission",
    desc: "Our main mission is to support our customers in the development of their IT systems",
  },
  {
    title: "Vision",
    desc: "Our vision is to create a better relationship between customers and IT services providers",
  },
  {
    title: "Values",
    desc: `We keep our promises and are committed to doing business the right way,      
  We provide quality products and services tham meet our customers needs
  and We encourage innovation to meet challenges`,
  },
];

const Header = () => {
  const [descIndex, setDescIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => setDescIndex((descIndex + 1) % 3), 5000);
  }, [descIndex]);
  return (
    <div
      key={descIndex}
      className="w-25"
      style={{ color: "white", marginTop: "30vh", marginLeft: "10vw" }}
    >
      <h1 className="animate__animated animate__fadeInUp">
        {arrayFeature[descIndex].title}
      </h1>

      <h4 className="animate__animated animate__fadeInUp">
        {arrayFeature[descIndex].desc}{" "}
      </h4>
    </div>
  );
};

export default Header;
