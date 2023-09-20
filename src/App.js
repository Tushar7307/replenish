import React from "react";
import Navbar from "../src/components/Navbar";
import Dashboard from "../src/pages/Dashboard";
import Loading from "../src/pages/Loading";

export default function App() {
  return (
    <>
      <Navbar />
      <Loading />
      <Dashboard />
    </>
  );
}
