import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SectionPage from "./pages/SectionPage/SectionPage";
import Layout from "./components/Layout/Layout";
import {useAppDispatch} from "./hook/useAppDispatch";
import {fetchFloors} from "./redux/floorSlice";
import ElementPage from "./pages/ElementPage/ElementPage";

const App = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFloors())
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path=':section' element={<SectionPage/>}/>
          <Route path=':section/:element' element={<ElementPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

export const API_URL = 'https://moscow.fargospc.ru'