import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Module2() {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [contentCount, setContentCount] = useState(1);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onQuiz = () => {
    if (user.progress === 1) {
      dispatch(updateUser(user._id));
    }
    navigate("/quiz2");
  };

  const onNext = () => {
    if (contentCount < 2) {
      setContentCount(contentCount + 1);
      window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
    }
  };

  const onBack = () => {
    if (contentCount > 1) {
      setContentCount(contentCount - 1);
      window.scrollTo({ top: 300, left: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="page-content">
        <h1> Rua - Python Syntax </h1>
        <h2> Basic Python Syntax</h2>
        <p>In this lesson, you will learn about Python syntax.</p>

        <div className="content-box">
          {contentCount === 1 && (
            <>
              <br />
              <h3> Syntax </h3>
              <p>
                The syntax is the set of rules that define the structure of the
                Python language.
                <br /> It represents the rules or structure that control the
                layout of the keywords,
                <br /> symbols, and punctuation of Python programming.{" "}
              </p>
              <br />
              <h4>
                Python syntax can be executed by writing directly in the Command
                Line:{" "}
              </h4>
              <h4>
                print(”Kia Ora, World!")
                <br />
                Kia Ora, World!{" "}
              </h4>
              <br />
              <p>
                Or by creating a python file on the server, using the .py file
                extension,
                <br />
                and running it in the Command Line:
                <br />
                C:\Users\Your Name - python myfile.py{" "}
              </p>
              <br />
              <button className="btn btn-big" onClick={onNext}>
                Next
              </button>
            </>
          )}

          {contentCount === 2 && (
            <>
              <br />
              <h3>Identifiers </h3>
              <p>
                Python uses identifiers that identify variables, functions,
                modules, classes, and other
                <br />
                objects in Python. They are case sensitive. Apples and apples
                are examples of two different identifiers.
              </p>
              <br />
              <p>
                The name of an identifier needs to be a letter or underscore
                (_). The following characters can be
                <br /> alphanumeric or underscore.
              </p>
              <br />
              <p>
                In addition, you cannot use Python keywords for naming
                identifiers.
              </p>
              <br />
              <h3>Keywords</h3>
              <p>Keywords have special meanings in Python. </p>
              <br /> <br />
              <h4>The following are keywords: </h4>
              <table>
                <tr>
                  <td>False</td>
                  <td>class</td>
                  <td>finally</td>
                  <td>from</td>
                </tr>
                <tr>
                  <td>is</td>
                  <td>return</td>
                  <td>None</td>
                  <td>nonlocal</td>
                </tr>
                <tr>
                  <td>continue</td>
                  <td>for</td>
                  <td>lambda</td>
                  <td>while</td>
                </tr>
                <tr>
                  <td>and</td>
                  <td>del</td>
                  <td>global</td>
                  <td>not</td>
                </tr>
                <tr>
                  <td>with</td>
                  <td>as</td>
                  <td>elif</td>
                  <td>if</td>
                </tr>
                <tr>
                  <td>or</td>
                  <td>yield</td>
                  <td>assert</td>
                  <td>else</td>
                </tr>
                <tr>
                  <td>import</td>
                  <td>pass</td>
                  <td>break</td>
                  <td>except</td>
                </tr>
              </table>
              <br />
              <button className="btn btn-reverse" onClick={onBack}>
                Back
              </button>
              <h1> Test your knowledge and take the quiz!</h1>
              <br />
              <button className="btn btn-big" onClick={onQuiz}>
                Quiz
              </button>
              <br />
            </>
          )}
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

export default Module2;
