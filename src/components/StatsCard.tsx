import React from "react";
import { Card } from "react-bootstrap";

interface IStatsCardProps {
    title: string;
    content: string;
}

export const StatsCard = (props: IStatsCardProps) => {
    return <Card style={{ borderRadius: "10px" }}>
      <Card.Title style={{ fontSize: "26px", fontWeight: "bold" }}>
        {props.title}
      </Card.Title>
      <Card.Text style={{ fontSize: "18px" }}>
        {props.content}
      </Card.Text>
    </Card>;
}