import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

import { CounterContainer, Layout, FuncCounterContainer } from '../pages';


export const Router = () => {
    return (
        <Routes>
            <Route path = {ROUTE_NAMES.HOME} element={<div>Lol</div>} />
            <Route path = {ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
            <Route path = {ROUTE_NAMES.LAYOUT} element={<Layout />} />
            <Route path = {ROUTE_NAMES.FUNCCOUNTER} element={<FuncCounterContainer />} />
        </Routes>
    );
};