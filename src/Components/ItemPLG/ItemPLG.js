import React from "react";
import { Row, Col, Tooltip } from "antd";
import Icon from "../Icon/Icon";
import "./itemPLG.scss"
export default function ItemPLG({ item }) {
  return (
    <Row className="list-plg-item">
      <Col xs={4} sm={4} md={8} lg={2} xl={2}>
        <Icon name="pgroup" />
        <span className="list-item-id">{item.id}</span>
      </Col>
      <Col xs={20} sm={20} md={16} lg={4} xl={4} className="middle-align">
        <span className="list-item-title">{item.groupName}</span>
        <img
          className="list-item-image"
          src={"/pictures/" + item.image}
          alt="image"
        />
      </Col>
      <Col xs={0} sm={0} md={0} lg={3} xl={3} className="center">
        {item.authors.map((author) => (
          <Tooltip title={author.fullName}>
          <div className="list-item-author">
          <img
              src={"/authors/" + author.picture}
              alt=""
            />
          </div>
            
          </Tooltip>
        ))}
      </Col>
      <Col xs={0} sm={0} md={0} lg={13} xl={13}>
        <div className="list-item-desc">{item.description}</div>
        <div className="list-item-desc-sub">
          {item.numberOfPL} playlists - updated on {item.lastUpdate} by{" "}
          {item.lastUpdateBy}
          {item.hashtags.map((hastag) => (
            <span className="list-item-hashtag">{hastag}</span>
          ))}
        </div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={2} xl={2}>
        {item.action == "read" && (
          <span className="btn-default">
            <Icon name="your_stuff" />
          </span>
        )}
        {item.action == "add" && (
          <span className="btn-default">
            <Icon name="plist_add" />
          </span>
        )}
      </Col>
    </Row>
  );
}
