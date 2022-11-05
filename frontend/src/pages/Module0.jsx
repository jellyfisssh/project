import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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


    const menu = () => {
        navigate("/module1")
    }

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

    const cSharpExample = `using System;
    namespace HelloWorld {
        class Program {
            static void Main (string[] args) {
                Console.WriteLine("Hello World!");
            }
        }
    } 
    //expected output: Hello World!
    `

    const javascriptExample = `console.log("Hello World!") 
    //expected output: Hello World!`

    const pythonExample = `print("Hello World!") //expected output: Hello World!`


    return (
        <>
            <div className="page-content">
                <h1> Taketake - Coding Basics &#38; Principles </h1>
                <h2> Programming Syntax, indentations and terminologies! </h2>
                <p>
                    In this lesson we will be learning about the basic fundamentals <br />
                    in computer programming.
                </p>

                <div className="content-box">
                    {contentCount === 1 && (
                        <>
                            <br />
                            <h2> What is Syntax? </h2>
                            <p>
                                Syntax is the set of rules that define what the various combinations of symbols mean.
                                <br /> sThis tells the computer how to read the code.
                                Syntax refers to a concept in writing code
                                dealing with a very specific set of words and a very specific order to those words when we give the computer instructions.
                            </p>
                            <br />
                            {/* C# Example */}
                            <h4> Examples of different types of printing 'Hello World' using different programming language syntax: </h4>
                            <h4> C# &#8211; Pronounced 'See Sharp' : <br /> <SyntaxHighlighter language="c#" style={docco}>
                                {cSharpExample}
                            </SyntaxHighlighter> </h4>
                            {/* Javascript Example */}
                            <h4> Javascript: <br /> <SyntaxHighlighter language="javascript" style={docco}>
                                {javascriptExample}
                            </SyntaxHighlighter> </h4>
                            {/* Javascript Example */}
                            <h4> Python: &#8211; In this app we will be learning about Python! <br /> <SyntaxHighlighter language="python" style={docco}>
                                {pythonExample}
                            </SyntaxHighlighter> </h4>
                            <h4>
                                As we can see different programming languages have different syntax  &#8211; although, some programming languages may have some
                                syntaxing that is  very similar
                            </h4>
                            <br />
                            <h3> Why Python? </h3>
                            <p>
                                &#x2022; Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
                                <br />
                                &#x2022; Python has a simple syntax similar to the English language.
                                <br />
                                &#x2022; Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
                                <br />
                                &#x2022; Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
                                <br />
                                &#x2022; Python can be treated in a procedural way, an object-oriented way or a functional way.
                                <br />
                                &copy; <a href="https://www.w3schools.com/python/python_intro.asp">Source &#8211; W3Schools </a>
                            </p>
                            <br />
                            <button className="btn btn-big" onClick={onNext}>
                                Next
                            </button>
                        </>
                    )}

                    {/* Next Page */}
                    {contentCount === 2 && (
                        <>
                            <br />
                            <h2> What is Front end and Back end? </h2>
                            <br />
                            <h3> In simple words.. <br /> </h3>
                            <p>
                                Front end is basically anything that has to do with UI or user interaction; example: navbars, notifications, popups, text fields etc..
                                <br />
                                Whereas back end is anything that has to do handling and managing data given by the user from the front end. Connecting to
                                databases and servers.
                            </p>
                            <br />
                            <h3> What is full-stack development? <br /> </h3>
                            <p>
                                Full-stack development or a full-stack developer is when someone who both develops front and back end in software.
                                <br /> Meaning you do not really have to just stick to one software development 'branch'.
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
                            <h2> What is programming language? </h2>
                            <p>
                                A programming language is a set of vocabulary and set of
                                rules/instructions to dictate a computer to perform specific tasks. <br />
                                Just like human speech and vocabulary there are different types of programming languages as well, <br />
                                and different types of 'rules' of how they are pronounced and uttered. Some programming languages have different sets of rules
                                <br /> or syntax that must be followed.
                            </p>

                            <br />
                            <div className="nav-buttons">
                                <button className="btn btn-reverse" onClick={onBack}>
                                    Back
                                </button>
                                <button className="btn btn-big" onClick={menu}>
                                    Start Module 1
                                </button>
                            </div>
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
