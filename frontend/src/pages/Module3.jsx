import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Module3() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="page-content">
        <h1> Toru - Classes &amp; Objects </h1>
        <h2> Object oriented programming with Python</h2>
        <div className="heading">
          <p>
            Content coming soon! <br />
            Watch this space...
          </p>
          <img
            className="ImageEight"
            src="../Images/ImageEight.jpg"
            alt="Cartoon of a coder"
          ></img>
        </div>
        <Link to="/modules">
          <button className="btn btn-big">
            <BsArrowLeftSquareFill />
            Menu
          </button>
        </Link>
      </div>
    </>
  );
}

export default Module3;
