import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Quiz2() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="page-content">
        <h1> Tahi - Python Basics</h1>
        <h1> Quiz</h1>
        <div className="content-box">
          <div className="heading">
            <p>Content coming soon, watch this space...</p>
          </div>
        </div>
        <Link to="/modules">
          <button className="btn btn-big">Menu</button>
        </Link>
      </div>
    </>
  );
}

export default Quiz2;
