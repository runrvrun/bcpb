import React from 'react';

import { SidebarMenu } from '../../components';

export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Dashboard"
        >
            <SidebarMenu.Item title="Rekap" to='/dashboards/rekap' exact />
            <SidebarMenu.Item title="Kantor" to='/dashboards/kantor' exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-th"></i>}
            title="Browse"
        >
            <SidebarMenu.Item title="Rekap penerimaan" to='/browse/penerimaan' exact />
            <SidebarMenu.Item title="Data CN" to='/browse/cn' exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-files-o"></i>}
            title="Dokumen"
        >
            <SidebarMenu.Item title="Pengawasan" to='/dokumen/pengawasan' exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-user"></i>}
            title="Administrator"
        >
            <SidebarMenu.Item title="User management" to='/browse/penerimaan' exact />
        </SidebarMenu.Item>
    </SidebarMenu >
);
