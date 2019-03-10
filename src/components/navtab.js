import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
                        <li> <Link to="/"> HOME </Link> </li>
                        <li>  <Link to="/notas"> NOTAS </Link> </li>
                        <li>  <Link to="/gastos"> GASTOS </Link> </li>
                        <li>  <Link to="/objetivos"> OBJETIVOS </Link></li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/" component={Home}/>
            <Route  path="/objetivos" component={Objetivos}/>
            <Route  path="/notas" component={Notas}/>
            <Route  path="/gastos" component={Gastos}/>

            </div>
        </ Router >
    )
}

export default NavTab;