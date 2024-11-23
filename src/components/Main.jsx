import { Outlet } from "react-router-dom";
import Header from "./Header";


const Main = () => {
    return (
        <div style={{ marginLeft: "500px" }}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;