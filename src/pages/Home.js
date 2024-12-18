import React from "react";

import { PaginatedEstablishmentsTable } from "../components/PaginatedEstablishmentsTable";
import Background from "../static/site-logo.svg";

const logoStyle = {
  width: "640px",
  height: "100px",
  background: `transparent url(${Background}) no-repeat center`,
  margin: "20px auto",
};

export const Home = () => (
  <div>
    <header style={logoStyle} />
    <PaginatedEstablishmentsTable />
  </div>
);
