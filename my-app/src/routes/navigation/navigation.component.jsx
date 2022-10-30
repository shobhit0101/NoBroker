import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./navigation.styles.css"
const Navigation = () => {
    return (
        <Fragment>
            <nav className="Navigationmenu">
                <ul className="main-menu">
                    {/* <div className='logo-link'>
                            <Link className='navLink'>NoBroker</Link>
                        </div> */}
                    <li><i className="fa fa-home"></i><Link className='navLink' to="/">Home</Link></li>
                    {/* <li class="with-submenu">
                            <i class="fa fa-briefcase"></i>Post Property <i class="fa fa-caret-down"></i>
                            <ul class="submenu">
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>Animation</li>
                            </ul>
                        </li> */}
                    <li><i class="fa fa-external-link"></i><Link className='navLink' to="/postyourproperty">Post</Link></li>
                    <li><i class="fa fa-id-card"></i><Link className='navLink'>About</Link></li>
                    <li><i class="fa fa-user-circle"></i><Link className='navLink' to="/auth">Register</Link></li>
                </ul>
            </nav>

            <Outlet />
        </Fragment>
    );
};

export default Navigation;
