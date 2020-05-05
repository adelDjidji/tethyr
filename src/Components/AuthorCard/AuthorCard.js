import React from "react";
import { Col, Row, Avatar } from "antd";
import Icon from "../Icon/Icon";

import "./authorCard.min.css";

export default function AuthorCard({
  AuthorName = "",
  AuthorImage = "",
  youtube,
  viemeo,
}) {
  let img = require("../../Assets/images/" + AuthorImage);
  return (
    <Row className="author-card">
      <Col span={15}>
        <Avatar size="small" className="author-card-image" src={img} />
        <span className="author-card-name">{AuthorName}</span>
      </Col>
      <Col span={9} className="author-card-icon-container">
        {youtube && (
          <span className="author-card-icon">
            <span className="author-card-icon-text">Youtube</span>{" "}
            <Icon name="youtube" />
          </span>
        )}
        {viemeo && (
          <span className="author-card-icon">
            <span className="author-card-icon-text">Viemeo</span>{" "}
            <Icon name="vimeo" />
          </span>
        )}
      </Col>
    </Row>
  );
}
