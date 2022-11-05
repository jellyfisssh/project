import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Module1 () {
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

    navigate("/quiz1");
  };

  const onNext = () => {
    if (contentCount < 3) {
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
        <h1> Tahi - Python Basics</h1>
        <h2> Python Statement, Indentation, and Comments</h2>
        <p>
          In this lesson, you will learn about statements, indentation, and
          comments.
        </p>

        <div className="content-box">
          {contentCount === 1 && (
            <>
              <br />
              <h2>Python Statements</h2>
              <p>
                Statements are the instructions that a python interpreter uses
                to execute the code.
                <br />
                There are different types of statements such as an assignment
                statement,
                <br />
                if statement, for statement, and while statement. These will be
                discussed later.
              </p>
              <br />
              <h4> Example of a statement: </h4>
              <h4> a = 1 + 2 + 3</h4>
              <br />
              <h3> Multi-Line statement</h3>
              <p>
                In Python, the end of a statement is marked by a newline
                character.
                <br />
                We can make a statement extend over multiple lines with the line
                <br />
                continuation character (\).
              </p>
              <br />
              <h4>Example of a multi-line statement:</h4>
              <h4>
                a = 1 + 2 + 3 + \
                <br /> 4 + 5 + 6 + \
                <br /> 7 + 8 + 9
              </h4>
              <br />
              <p>
                Line continuation is implied inside parentheses ( ), brackets [
                ], and braces .
              </p>
              <br />
              <h4> Example of line continuation using parentheses (): </h4>
              <h4>
                a = (1 + 2 + 3 +
                <br /> 4 + 5 + 6 +
                <br /> 7 + 8 + 9)
              </h4>
              <br />
              <h4> Example of line continuation using brackets[]: </h4>
              <h4>
                colors = ['red',
                <br /> 'blue',
                <br /> 'Green']
                <br />
                We can also put multiple statements in a single line using
                semicolons, as follows:
                <br />a = 1; b = 2; c = 3
              </h4>
              <br />
              <button className="btn btn-big" onClick={onNext}>
                Next
              </button>
            </>
          )}

          {contentCount === 2 && (
            <>
              <br />
              <h2>Python Indentation</h2>
              <p>
                Indentation is used on code blocks (body of a function, loop,
                etc) at
                <br />
                the beginning of each code line and is very important in the
                Python language.
                <br />
                Indentation is the space at the beginning of each line of code.
                <br />
                Most programmers use 4 spaces, but it is your choice, as long as
                it has at
                <br />
                least 1 space and is consistent throughout the block.
              </p>
              <br />
              <h4> Example of indentation: </h4>
              <h4>
                for i in range(1,11):
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;print(i)
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;if i == 5:
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break
                <br />
                Execute code
              </h4>
              <br />
              <p>
                Indentation makes the code easier to read and looks neat and
                clean. This results in Python
                <br /> programs that look similar and consistent.
                <br />
                Indentation can be ignored in line continuation, but it's always
                a good idea to indent.
              </p>
              <br />
              <h4> Example of indentation: </h4>
              <h4>
                if True:
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;print('Kia Ora’)
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;a = 5
              </h4>
              <br />
              <h4> Example of no indentation: </h4>
              <h4> if True: print(‘Kia Ora’); a = 5 </h4>
              <br />
              <p>
                While they are both valid, the first example is more
                straightforward.
                <br />
                Incorrect indentation will result in IndentationError.
              </p>
              <br />
              <div className="nav-buttons">
                <button className="btn btn-reverse" onClick={onBack}>
                  Back
                </button>
                <button className="btn btn-big" onClick={onNext}>
                  Next
                </button>
              </div>
            </>
          )}

          {contentCount === 3 && (
            <>
              <br />
              <h2> Python Comments </h2>
              <p>
                Comments explain the code inside a program, similar to in-code
                documentation.
              </p>
              <br />
              <h4>Example of commenting: </h4>
              <h4>
                # call function main
                <br />
                main()
              </h4>
              <br />
              <p>
                It helps the code be more readable, assists people unfamiliar
                with the project to understand
                <br />
                what is going on, and is a refresher to the original programmer,
                especially if it has been
                <br /> some time since the code was written.
                <br />
                Python Interpreter ignores comments.
              </p>
              <br />
              <h4> Example of a comment: </h4>
              <h4>
                #This is a comment
                <br />
                print('Kia Ora, World!')
              </h4>
              <br />
              <p>
                A comment does not have to be text that explains the code, it
                can also be used to prevent
                <br />
                Python from executing code.
              </p>
              <br />
              <h4> Example of comment: </h4>
              <h4>
                #print('Kia Ora, World!')
                <br />
                print('Ka Pai, Mate!')
              </h4>
              <br /> <br />
              <h3>Multi-line comments </h3>
              <p>
                Comments can extend up to multiple lines. The hash(#) symbol is
                used at the beginning of each line.
              </p>
              <br />
              <h4>Example of multi-line comment: </h4>
              <h4>
                #This is a comment
                <br />
                #written in
                <br />
                #more than just one line
                <br />
                print('Kia Ora, World!')
              </h4>
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

export default Module1;
