// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import Amplify from 'aws-amplify';
// import config from './aws-exports';
// Amplify.configure(config);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// export { default as Navigation } from "./Navigation";
// export { default as Footer } from "./Footer";
// export { default as Home } from "./Home";
// export { default as About } from "./About";
// export { default as Contact } from "./Contact";
// export { default as Blog } from "./blog/Blog";
// export { default as Posts } from "./blog/Posts";
// export { default as Post } from "./blog/Post";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Callout,
  Callout2,
  About,
  Contact,
  Blog,
  Googlepro,
  Posts,
  Post,
  ImgToText,
  PdfToText,
  Mp4ToMp3,
  Movie,
} from "./components/";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/callout" element={<Callout />} /> */}
      <Route path="/callout2" element={<Callout2 />} />
      <Route path="/imgtotext" element={<ImgToText />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
      <Route path="/googlepro" element={<Googlepro />} />
      <Route path="/pdftotext" element={<PdfToText />} />
      <Route path="/mp4tomp3" element={<Mp4ToMp3 />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
