import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <div class="area"></div><nav class="main-menu">
                <ul>
                    <li>
                        <Link to='/dashboard'>
                            <i class="fa fa-home fa-2x"></i>
                            <span class="nav-text">
                                Dashboard
                            </span>
                        </Link>

                    </li>
                    <li class="has-subnav">
                        <Link to="/emi">
                            <i class="fa fa-laptop fa-2x"></i>
                            <span class="nav-text">
                                Stars Components
                            </span>
                        </Link>

                    </li>
                    <li class="has-subnav">
                    <Link to="/form">
                            <i class="fa fa-list fa-2x"></i>
                            <span class="nav-text">
                                Forms
                            </span>
                            </Link>
                    </li>
                    <li class="has-subnav">
                        <a href="#">
                            <i class="fa fa-folder-open fa-2x"></i>
                            <span class="nav-text">
                                Pages
                            </span>
                        </a>

                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-bar-chart-o fa-2x"></i>
                            <span class="nav-text">
                                Graphs and Statistics
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-font fa-2x"></i>
                            <span class="nav-text">
                                Quotes
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-table fa-2x"></i>
                            <span class="nav-text">
                                Tables
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-map-marker fa-2x"></i>
                            <span class="nav-text">
                                Maps
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-info fa-2x"></i>
                            <span class="nav-text">
                                Documentation
                            </span>
                        </a>
                    </li>
                </ul>

                <ul class="logout">
                    <li>
                        <a href="#">
                            <i class="fa fa-power-off fa-2x"></i>
                            <span class="nav-text">
                                Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
