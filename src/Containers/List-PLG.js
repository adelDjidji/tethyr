import React, { Fragment } from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import ItemPLG from "../Components/ItemPLG/ItemPLG";

import Icon from "../Components/Icon/Icon";

const menu_by_page = (
  <Menu>
    <Menu.Item key="0">10 rows</Menu.Item>
    <Menu.Item key="1">20 rows</Menu.Item>
    <Menu.Item key="3">30 rows</Menu.Item>
    <Menu.Item key="4">50 rows</Menu.Item>
    <Menu.Item key="5">100 rows</Menu.Item>
  </Menu>
);

export default function ListPLG({ data }) {
  return (
    <Fragment>
      <Row className="list-header">
        <Col xs={4} sm={4} md={8} lg={2} xl={2}>
          ID
        </Col>
        <Col xs={20} sm={20} md={16} lg={4} xl={4}>
          Group Name
        </Col>
        <Col xs={0} sm={0} md={0} lg={3} xl={3} className="center">
          Author
        </Col>
        <Col xs={0} sm={0} md={0} lg={13} xl={13}>
          Group Description
        </Col>
        <Col xs={0} sm={0} md={0} lg={2} xl={2}>
          Actions
        </Col>
      </Row>
      {data.map((item) => (
        <ItemPLG item={item} />
      ))}
      <Row type="flex" justify="end" className="pagination-row">
        <Col xs={24} sm={12} md={10} lg={8} xl={6}>
          <Dropdown overlay={menu_by_page} trigger={["click"]}>
            <span className="btn-default btn-small">
              20 rows <Icon className="small" name="shevrone_down" />
            </span>
          </Dropdown>
          <div className="inline">
            <span className="btn-default btn-small">
              <Icon className="small inverse-direction" name="arrows" />{" "}
            </span>
            <span className="btn-default btn-small">
              <Icon className="small inverse-direction" name="shevrone_right" />{" "}
            </span>
            <span>1-16 of 16</span>
            <span className="btn-default btn-small">
              <Icon className="small" name="shevrone_right" />{" "}
            </span>
            <span className="btn-default btn-small">
              <Icon className="small" name="arrows" />{" "}
            </span>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
