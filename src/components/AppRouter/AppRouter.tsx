import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "src/router";

const AppRouter: FC = () => {
    return ( 
        <Routes>
            {publicRoutes.map(route =>
                <Route {...route} />
            )}
        </Routes>
    );
}
 
export default AppRouter;