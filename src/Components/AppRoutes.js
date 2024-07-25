
import { Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Blog from "./Blog/blog";
import Oferta from "./Ofertas/oferta";
import Popular from "./Popular/popular";
import Sobre from "./Sobre/sobre";

function AppRouter(){
    return(
        <div>
            <Routes>                  
                <Route path='/' element={<Home />} /> 
                <Route path='/blog' element={<Blog />} /> 
                <Route path='/oferta' element={<Oferta />} /> 
                <Route path='/popular' element={<Popular />} /> 
                <Route path='/sobre' element={<Sobre />} /> 
             </Routes>
        </div>
    );
};

export default AppRouter;