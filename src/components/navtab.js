import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Objetivos from './objetivos/objetivos';
import Notas from './notas/notas';
import Gastos from './gastos/gastos';
import Home from './home';


const NavTab = () => {

    return (
        <Router>
            <div>
            <nav className="nav-container">
                <div className="div-nav-container">
                    <ul className="nav-list">
                        <li > <NavLink to="/"  
                                       exact
                                       activeClassName="active"
                                    > HOME </NavLink> </li>
                        <li>  <NavLink to="/notas" 
                                    activeClassName="active"> NOTAS </NavLink> </li>
                        <li>  <NavLink to="/gastos" 
                                    activeClassName="active"> GASTOS </NavLink> </li>
                        <li>  <NavLink to="/objetivos" 
                                    activeClassName="active"> OBJETIVOS </NavLink></li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/" component={Home}/>
            <Route  path="/notas" component={Notas}/>
            <Route  path="/gastos" component={Gastos}/>
            <Route  path="/objetivos" component={Objetivos}/>

            </div>
        </ Router >
    )
}

export default NavTab;