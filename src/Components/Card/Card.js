import React from "react";
import * as Antd from "antd";
import Icon from "../Icon/Icon";
import "./card.min.css";

export default function Card({ title = "", date = "", image = "" }) {
  let img = require("../../Assets/images/" + image);
  return (
    <Antd.Card bordered={false}>
      <span className="card-title">
        <Icon
          name="youtube"
          style={{ height: 15.4, marginBottom: 3, marginRight: 3 }}
        />
        <b>WATCH LIVE :</b>
        <p className="p-content">{title}</p> - {date}
      </span>
      <Antd.Row className="card-content">
        <Antd.Col className="card-image" sm={24} md={6}>
          <img src={img} alt="" />
        </Antd.Col>
        <Antd.Col sm={24} md={18}>
          <span>
            A card can be used to display content related to a single subject.
            The content can consist of multiple elements of varying types and
            sizes. A card can be used to display content related to a single
            subject. The content can consist of multiple elements of varying
            types and sizes.
          </span>
        </Antd.Col>
      </Antd.Row>
      <Antd.Row className="card-footer">
        <span>
          <span className="btn-default btn-small ">
            <Icon name="green" extention="svg" />
          </span>
          <span className="btn-default btn-small ">
            <Icon name="make_offline" />
          </span>
          <span className="btn-default btn-small ">
            <Icon name="youtube_round" />
          </span>
          <span className="btn-default btn-small ">
            <Icon name="trash" />
          </span>
          <span className="btn-default btn-small ">
            <Icon name="p_public" />
          </span>
        </span>
      </Antd.Row>
    </Antd.Card>
  );
}
