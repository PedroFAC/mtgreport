import { Card, Image, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useStoreState } from "easy-peasy";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Report({ id }) {
  const navigate = useNavigate();
  const report = useStoreState((state) => state.reports).find(
    (report) => id === report.id
  );

  return (
    <Card
      onClick={() => navigate(`/report/${id}`)}
      hoverable
      cover={
        <Image
          preview={false}
          src={
            report.cover ||
            "https://i2.wp.com/overmental.com/wp-content/uploads/2015/04/EN_GrandPrix_Header.jpg?resize=750%2C438&ssl=1"
          }
          width={600}
        />
      }
      style={{ alignContent: "center", display: "flex" }}
    >
      <Space direction="vertical">
        <Title> {report.event}</Title>
        <Text>{report.location}</Text>
        <Text type="secondary">{report.date}</Text>
      </Space>
    </Card>
  );
}
