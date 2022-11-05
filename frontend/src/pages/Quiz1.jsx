import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

function Quiz1() {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [contentCount, setContentCount] = useState(1);

  const [commentAnswers, setCommentAnswers] = useState({
    commentAnswer: "",
  });

  const { commentAnswer } = commentAnswers;

  const onChange = (e) => {
    setCommentAnswers((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onCheck = () => {
    if (btn2Selected && btn4Selected && commentAnswer === "#") {
      setContentCount(2);
      if (user.progress === 0) {
        dispatch(updateUser(user._id));
      }
    } else {
      setContentCount(3);
    }
  };

  const onTryAgain = () => {
    setContentCount(1);
  };

  const [btn1Selected, setBtn1] = useState(false);
  const [btn2Selected, setBtn2] = useState(false);
  const [btn3Selected, setBtn3] = useState(false);
  const [btn4Selected, setBtn4] = useState(false);
  const [btn5Selected, setBtn5] = useState(false);
  const [btn6Selected, setBtn6] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onBtn1 = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
  };
  const onBtn2 = () => {
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
  };
  const onBtn3 = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
  };
  const onBtn4 = () => {
    setBtn4(true);
    setBtn5(false);
    setBtn6(false);
  };
  const onBtn5 = () => {
    setBtn4(false);
    setBtn5(true);
    setBtn6(false);
  };
  const onBtn6 = () => {
    setBtn4(false);
    setBtn5(false);
    setBtn6(true);
  };

  return (
    <>
      <div className="page-content">
        <h1> Tahi - Python Basics</h1>
        <h1> Quiz</h1>

        <div className="content-box">
          {contentCount === 1 && (
            <>
              <h3>Which of these is a complete Python statement?</h3>
              <div className="quiz-box">
                <button
                  className={
                    btn1Selected ? "btn btn-quiz selected" : "btn btn-quiz"
                  }
                  onClick={onBtn1}
                >
                  a - 3
                </button>
                <button
                  className={
                    btn2Selected ? "btn btn-quiz selected" : "btn btn-quiz"
                  }
                  onClick={onBtn2}
                >
                  a = 3
                </button>
                <button
                  className={
                    btn3Selected ? "btn btn-quiz selected" : "btn btn-quiz"
                  }
                  onClick={onBtn3}
                >
                  a + 3
                </button>
              </div>
              <h3>
                Fill in the missing character to turn this statement into a
                comment:
              </h3>
              <div className="quiz-box">
                <form className="quiz-form">
                  <input
                    type="text"
                    className="quiz-input"
                    id="commentAnswer"
                    name="commentAnswer"
                    value={commentAnswer}
                    onChange={onChange}
                  />
                  <p>a = 1 + 2 + 3</p>
                </form>
              </div>
              <h3>Which of these shows the correct indentation?</h3>
              <div className="quiz-box">
                <button
                  className={
                    btn4Selected
                      ? "btn btn-quiz-small selected"
                      : "btn btn-quiz-small"
                  }
                  onClick={onBtn4}
                >
                  for i in range(1,11):
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;print(i)
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;if i == 5:
                  <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break
                </button>
                <button
                  className={
                    btn5Selected
                      ? "btn btn-quiz-small selected"
                      : "btn btn-quiz-small"
                  }
                  onClick={onBtn5}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;for i in range(1,11):
                  <br /> print(i)
                  <br /> if i == 5:
                  <br /> break
                </button>
                <button
                  className={
                    btn6Selected
                      ? "btn btn-quiz-small selected"
                      : "btn btn-quiz-small"
                  }
                  onClick={onBtn6}
                >
                  for i in range(1,11):
                  <br /> print(i)
                  <br /> if i == 5:
                  <br /> break
                </button>
              </div>
              <button className="btn btn-big" onClick={onCheck}>
                Check Answers
              </button>
            </>
          )}

          {contentCount === 2 && (
            <>
              <h2>Ka pai to mahi! You can now access module Rua:</h2>
              <Link to="/module2">
                <button className="btn btn-big">Continue</button>
              </Link>
            </>
          )}

          {contentCount === 3 && (
            <>
              <h2>Not quite! Review the module if you need to.</h2>
              <button className="btn btn-big" onClick={onTryAgain}>
                Try Again
              </button>
            </>
          )}
        </div>
        <Link to="/modules">
          <button className="btn btn-big">Menu</button>
        </Link>
      </div>
    </>
  );
}

export default Quiz1;
