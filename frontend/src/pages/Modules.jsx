import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightSquareFill, BsFillPencilFill } from "react-icons/bs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Modules () {
  window.scrollTo(0, 0);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  var module1Unlocked = false
  var module2Unlocked = false;
  var module3Unlocked = false;

  if (user && user.progress === 1) {
    module1Unlocked = true;
  }
  if (user && user.progress === 2) {
    module2Unlocked = true;
    module3Unlocked = true;
  }

  return (
    <>
      <div className="page-content">
        <h1>Learning Modules</h1>
        <Link to="/module0">
          <button className="btn btn-unlocked">
            Taketake - Coding Basics / Introduction &nbsp;&nbsp;&nbsp; <BsArrowRightSquareFill />
          </button>
        </Link>
        <Link
          style={module1Unlocked ? null : { pointerEvents: "none" }}
          to="/module1">
          <button className={module1Unlocked ? "btn btn-unlocked" : "btn btn-locked"}>
            Tahi - Python Basics &nbsp;&nbsp;&nbsp; <BsArrowRightSquareFill />
          </button>
        </Link>
        <Link
          style={module2Unlocked ? null : { pointerEvents: "none" }}
          to="/module2"
        >
          <button
            className={module2Unlocked ? "btn btn-unlocked" : "btn btn-locked"}
          >
            Rua - Python Syntax &nbsp;&nbsp;&nbsp;
            <BsArrowRightSquareFill />
          </button>
        </Link>
        <Link
          style={module3Unlocked ? null : { pointerEvents: "none" }}
          to="/module3"
        >
          <button
            className={module3Unlocked ? "btn btn-unlocked" : "btn btn-locked"}
          >
            Toru - Classes &amp; Objects &nbsp;&nbsp;&nbsp;
            <BsArrowRightSquareFill />
          </button>
        </Link>

        {/* Button to To-Do list */}
        <Link
          to="/todo"
        >
          <button
            className={"btn btn-unlocked"}
          >
            To-Do List &nbsp;&nbsp;&nbsp;
            <BsFillPencilFill />
          </button>
        </Link>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Modules;
