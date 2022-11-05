import React from "react";
import { Link } from "react-router-dom";

function Home() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="page-content">
        <div className="heading">

          <p>
            Kia ora!
            <br />
            Want to learn how to code?
            <br />
            You've come to the right place.
          </p>
          <img
            className="ImageEight"
            src="../Images/ImageEight.jpg"
            alt="Cartoon of a coder"
          ></img>
        </div>

        <Link to="/register">
          <button className="btn btn-big">Get Started</button>
        </Link>
        <Link to="/login">
          <p className="link">Already have an account?</p>
        </Link>

        <h1>Coding Made Simple!</h1>
        <ul className="home-list">
        <img
            className="ImageThree"
            src="../Images/ImageThree.jpg"
            alt="Image3"
          ></img>
          <li>Kia Ora and Nau Mai Haere Mai</li>
          <li>
            Tikanga Waehere roughly translates as "the coding method", and this
            is what we are here to teach you.
          </li>
          <li>Python is a fun and flexible language to learn.</li>
          <li>
            It is a great language to begin learning coding, and it has many
            industry applications.
          </li>
          <li>Tikanga Waehere teaches Python in an easy, interactive style.</li>
          <li>
            Each lesson finishes with a fun quiz to test your new knowledge.
          </li>
          <li>Your progress is saved to your account.</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
