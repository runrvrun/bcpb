import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Login from './Pages/Login';

import Rekap from './Dashboards/Rekap';
import Kantor from './Dashboards/Kantor';

import Penerimaan from './Browse/Penerimaan';
import Cn from './Browse/Cn';

import Pengawasan from './Dokumen/Pengawasan';
import AddPengawasan from './Dokumen/AddPengawasan';

import NavbarOnly from './Layouts/NavbarOnly';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from '../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/login" exact />
            
            <Route path="/login" exact component={Login} />
            <Route path="/logout" exact component={Login} />
            <Route path="/dashboards/rekap" exact component={Rekap} />
            <Route path="/dashboards/kantor" exact component={Kantor} />

            <Route path='/browse/penerimaan' exact component={Penerimaan} />
            <Route path='/browse/cn' exact component={Cn} />

            <Route path='/dokumen/pengawasan' exact component={Pengawasan} />
            <Route path='/dokumen/pengawasan/add' exact component={AddPengawasan} />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        { /* Other Navbars: */}
        <Route
            component={ SidebarANavbar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ NavbarOnly.Navbar }
            path="/layouts/navbar"
        />
        <Route
            component={ SidebarWithNavbar.Navbar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Navbar: */}
        <Route
            component={ DefaultNavbar }
        />
    </Switch>  
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={ SidebarASidebar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ SidebarWithNavbar.Sidebar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Sidebar: */}
        <Route
            component={ DefaultSidebar }
        />
    </Switch>
);
