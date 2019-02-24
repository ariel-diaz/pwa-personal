import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tareas from './tareas';
import Notas from './notas';
import Gastos from './gastos';
import Home from './home';


const NavTab = () => {

    return (
        <Router>
            <div>
            <nav className="nav-container">
                <div className="div-nav-container">
                    <ul className="nav-list">
                        <li> <Link to="/"> H </Link> </li>
                        <li>  <Link to="/tareas"> TAREAS </Link></li>
                        <li>  <Link to="/notas"> NOTAS </Link> </li>
                        <li>  <Link to="/gastos"> GASTOS </Link> </li>
                    </ul>
                </div>
            </nav>

            <Route exact path="/" component={Home}/>
            <Route  path="/tareas" component={Tareas}/>
            <Route  path="/notas" component={Notas}/>
            <Route  path="/gastos" component={Gastos}/>

            </div>
        </ Router >
    )
}

export default NavTab;