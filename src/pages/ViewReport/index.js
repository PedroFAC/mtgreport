import { Image, PageHeader, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import Link from "antd/lib/typography/Link";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";

export default function ViewReport() {
  const { id } = useParams();
  const navigate = useNavigate();
  const report = useStoreState((state) => state.reports).find(
    (report) => id === report.id
  );

  return (
    <>
      <PageHeader
        onBack={() => navigate("/")}
        title={`${report.event} @ ${report.location}`}
      />
      <Space style={{ padding: 16 }} direction="vertical">
        <Image
          preview={false}
          src={
            report.cover ||
            "https://i2.wp.com/overmental.com/wp-content/uploads/2015/04/EN_GrandPrix_Header.jpg?resize=750%2C438&ssl=1"
          }
          width={600}
        />
        <Text type="secondary">{report.date}</Text>
        {report.description && <Text>{report.description}</Text>}

        <Text>Format: {report.format}</Text>
        <Text>Number of players: {report.players}</Text>
        <Text>Number of rounds: {report.rounds}</Text>
        <Title level={3}>Results</Title>
        {report.results.map((result, idx) => (
          <Text>
            {idx + 1} - {result.playerName} -
            {result.decklist ? (
              <Link href={result.decklist} target="_blank">
                {result.deck}
              </Link>
            ) : (
              result.deck
            )}
          </Text>
        ))}
      </Space>
    </>
  );
}
