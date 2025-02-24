import {Route, Routes} from "react-router";
import Home from './components/Home.jsx';
const Routers = () => {
    return (
       <Routes>
           <Route path="/" element={<Home/>} />
       </Routes>
    );
};

export default Routers;