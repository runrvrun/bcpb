import React from 'react';

import { SidebarMenu } from './../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboard"
        >
            <SidebarMenu.Item title="Rekap" to='/dashboards/rekap' exact />
            <SidebarMenu.Item title="Kantor" to='/dashboards/projects' exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-th"></i>}
            title="Browse"
        >
            <SidebarMenu.Item title="Rekap penerimaan" to='/browse/penerimaan' exact />
            <SidebarMenu.Item title="Data CN" to='/browse/cn' exact />
        </SidebarMenu.Item>
    </SidebarMenu >
);
