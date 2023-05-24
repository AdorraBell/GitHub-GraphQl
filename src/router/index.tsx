import React from "react";
import MainPage from "src/pages/MainPage";
import DetailPage from "src/pages/DetailPage";

export interface IRoute {
    path: string;
    element?: React.ReactElement;
    key: number
}

export enum RouteNames {
    MAIN_PAGE = '/',
    DETAIL_PAGE = '/detail/:id'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.MAIN_PAGE, key: 0, element: <MainPage />},
    {path: RouteNames.DETAIL_PAGE, key: 1, element: <DetailPage />}
]
