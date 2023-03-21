import {  Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import TemplatePage from "./pages/TemplatePage";


const App = () => {
  const [pages, setPages] = useState([]);

  async function fetchPagesAPI() {
    const page = await fetch("/api/pages");
    const response = await page.json();
    setPages(response);
	
  }
 
  useEffect(() => {
     fetchPagesAPI();
  }, []);
  console.log(pages)

  return(
  
	<Routes>
		{/* <Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} /> */}
		<Route path="/admin" element={<Admin/>} />
		{/* <Route path="/page1" element={<Page1 />} />
		<Route path="/page2" element={<Page2 />} /> */}
    {pages.map((item)=>{return <Route key={item.page_id} path={item.page_path} element={<TemplatePage pagetitle={item.page_title}/>}/>})}

	</Routes>
)};


export default App;