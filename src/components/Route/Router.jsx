import React from "react"
import { Route, Routes } from 'react-router-dom'

import Main from "../Base_element/Main"
/* import Error from "../../pages/Error" */
import AboutMe from "../../pages/AboutMe"
import Services from "../../pages/Services"
import Projects from "../../pages/Projects"
import ProjectDetails from "../ProjectDetails"
function MainRoute() {


    return (
        <Routes>
            <Route path="/myportfolio/" element={<Main />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Main />} />
        </Routes>
    )
}
export default MainRoute

