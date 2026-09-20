import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div>
      <header className="hide-when-mobile">
        <NavLink to="/">    <h1>React Course</h1>
        </NavLink>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              {" "}
              HTML{" "}
            </NavLink >
            <ul className="sub-ul">
              <li>
                <NavLink to="www">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="www">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="www">learn in 1h</NavLink>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              {" "}
              CSS{" "}
            </NavLink >
            <ul className="sub-ul">
              <li>
                <NavLink to="www">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="www">CSS Examples</NavLink>
              </li>
              <li className="mini-projects">
                <NavLink to="www">mini projects  + </NavLink>
                <ul className="sub-sub-ul">
                  <li>
                    <NavLink to="www">project 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="www">project 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="www">project 3</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              {" "}
              JavaScript{" "}
            </NavLink >
            <ul className="sub-ul sub-of-js">
              <li>
                <NavLink to="www">coming soon🔥</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>React Course</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />{" "}
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="www">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="www">Crash Course</NavLink>
              </li>
              <li>
                <NavLink to="www">learn in 1h</NavLink>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />{" "}
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="www">Full Course</NavLink>
              </li>
              <li>
                <NavLink to="www">CSS Examples</NavLink>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <NavLink to="www">project 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="www">project 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="www">project 3</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />{" "}
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                < NavLink to="www">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
