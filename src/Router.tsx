import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./templates/DefaultLayout";

export function Router() {
     return (
          <Routes>
               <Route path="/" element={<DefaultLayout />}>
                    {/* <Route path="/" element={} /> */}
                    {/* <Route></Route> */}
               </Route>
          </Routes>
     )
}
