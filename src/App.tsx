import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PORTAL_ROUTES} from "./constants/Routes";
import {Login} from "./features/Login";
import {Home} from "./features/Home";
import {PortalLayout} from "./components/layout/PortalLayout";
import {Organizations} from "./features/organizations/Organizations";
import {OrganizationWorkflows} from "./features/organizations/OrganizationWorkflows";
import {CreateOrganization} from "./features/organizations/CreateOrganization";
import {OrganizationWorkflow} from "./features/organizations/OrganizationWorkflow";





function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={PORTAL_ROUTES.login} element={<Login/>}/>
                <Route element={<PortalLayout/>}>
                    <Route path={PORTAL_ROUTES.home} element={<Home/>}/>
                    <Route path={PORTAL_ROUTES.organizations} element={<Organizations/>}/>
                    <Route path={PORTAL_ROUTES.createOrganizations} element={<CreateOrganization/>}/>
                    <Route path={PORTAL_ROUTES.organizationWorkflows} element={<OrganizationWorkflows/>}/>
                    <Route path={`${PORTAL_ROUTES.organizationWorkflows}/:workflow_id`} element={<OrganizationWorkflow/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;