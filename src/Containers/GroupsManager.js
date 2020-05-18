import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { Tabs, Icon as AntIcon, Layout, Menu, Dropdown, Input, Row, Col } from "antd";
import Navbar from "../Components/Navbar/index";
import Icon from "../Components/Icon/Icon";
import ListPLG from "./List-PLG";

import { dataPLG } from "../Redux/dataMock";

import "../Styles/manager.scss";

const { TabPane } = Tabs;
const { Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/manager/1">Group manager 1</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/manager/2">Group manager 2</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link to="/manager/3">Group manager 3</Link>
    </Menu.Item>
  </Menu>
);
const searchInput=<Input
placeholder="Search ... "
prefix={<Icon name="search_input" extention="svg" />}
/>
const row_search_input= <Row> <Col xs={0} sm={0} md={24} lg={24} xl={24}>
<Input
style={ { width:'100%' }}
placeholder="Search ... "
prefix={<Icon name="search_input" extention="svg" />}
/>
</Col> </Row>
export default function GroupsManager({ match }) {
  console.log(match.params.id);
  return (
    <Fragment>
      <Navbar />
      <Content className={`container container-manager`}>
        <Tabs defaultActiveKey="1" tabBarExtraContent={row_search_input}>
          <TabPane
            tab={
              <span>
                <Icon name="search" />
                Find Stuff
              </span>
            }
            key="1"
          >
          <Row> <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <Input
          style={ { width:'100%' }}
          placeholder="Search ... "
          prefix={<Icon name="search_input" extention="svg" />}
          />
          </Col> </Row>
          <Dropdown overlay={menu} trigger={["click"]}>
          <b className="btn-default btn-dropdown">
            Playlist & Group manager
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6567 8L7.99988 13.6569L2.34303 8"
                stroke="#56B05B"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </b>
        </Dropdown>

        <ListPLG data={dataPLG} />

          </TabPane>
          <TabPane
            tab={
              <span>
              <Icon name="vector" />
                Your Stuff
              </span>
            }
            key="2"
          >
            Tab 2
          </TabPane>
        </Tabs>
      </Content>
    </Fragment>
  );
}
