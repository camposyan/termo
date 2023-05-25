import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./templates/DefaultLayout";
import { Termo } from "./pages/Termo";

export function Router() {
     return (
          <Routes>
               <Route path="/" element={<DefaultLayout />}>
                    <Route path="/" element={<Termo />} />
                    {/* <Route></Route> */}
               </Route>
          </Routes>
     )
}
