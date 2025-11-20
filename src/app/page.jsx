import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BirthdayMessage from "./components/BirthdayMessage";
import Poems from "./components/Poems";
import Final from "./components/Final";
import Home from "./components/Home"; // optional, if you have a home page

function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/birthday" element={<BirthdayMessage />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default Page;
