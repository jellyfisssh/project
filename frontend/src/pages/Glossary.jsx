import React from "react";
import { Link } from "react-router-dom";

function Glossary() {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="page-content">
        <div className="heading">
          <h1> Glossary </h1>
          <p>Maori terms translated</p>
        </div>
        <table>
          <tr>
            <th>Term</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Tikanga Waehere</td>
            <td>The coding method</td>
          </tr>
          <tr>
            <td>Tahi</td>
            <td>One</td>
          </tr>
          <tr>
            <td>Rua</td>
            <td>Two</td>
          </tr>
          <tr>
            <td>Toru</td>
            <td>Three</td>
          </tr>
          <tr>
            <td>Kia Ora</td>
            <td>Hello</td>
          </tr>
          <tr>
            <td>Nau Mai, Haere Mai</td>
            <td>Welcome, come</td>
          </tr>{" "}
          <tr>
            <td>Ka Pai</td>
            <td>It will be good</td>
          </tr>
        </table>
        <br /> <br /> <br />
        <Link to="/modules">
          <button className="btn btn-big"> Continue </button>
        </Link>
        <br /> <br /> <br />
      </div>
    </>
  );
}

export default Glossary;
