import React from "react";
import { Layout } from "antd";
import Navbar from "../Components/Navbar/index";


import "../Styles/App.min.css";

const { Content } = Layout;

export default function GroupsManager({ match }) {
  console.log(match.params.id);
  return (
    <>
      <Navbar />
      <Content className={`container container-manager`}></Content>
    </>
  );
}
