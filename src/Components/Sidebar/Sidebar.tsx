import { Fragment} from "react";
import React from "react";
import {Sidebars,Ul,Li} from '../Sidebar/styles';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


const Sidebar = () => {
    return (
    
        <Sidebars>
            <Router>     
            <Ul>
                <Li>
                    <Link  to="#"><FaIcons.FaHome/> Inicio </Link>
                </Li>
            </Ul>

            <Ul>
                <Li>
                    <Link to="#"><FaIcons.FaConnectdevelop/> Dashboard 1</Link>
                </Li>
            </Ul>
            </Router>
        </Sidebars>        

    );
}

export default Sidebar;