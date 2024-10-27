import { BrowserRouter, Route, Routes } from "react-router-dom";

import axios from "axios";
import Home from "./pages/Home";
import BaseLayout from "./components/layouts/BaseLayout";
import BookRide from "./pages/BookRide";
import ComingSoon from "./pages/ComingSoon";

axios.defaults.baseURL = "https://api.niprfct.org.ng/api";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="book-a-ride" element={<BookRide />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
