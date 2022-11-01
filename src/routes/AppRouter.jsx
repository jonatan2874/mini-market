import { Route, Routes } from "react-router-dom"

import  Layout from "../pages/Layout.jsx"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Layout />} />
            </Routes>
        </>
    )
}