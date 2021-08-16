import { Button, PageHeader, Space } from "antd";
import { useStoreState } from "easy-peasy";
import React from "react";
import { useNavigate } from "react-router-dom";
import Report from "../../components/Report";

export default function Home() {
  const navigate = useNavigate();
  const reports = useStoreState((state) => state.reports);
  return (
    <>
      <PageHeader
        title="Home"
        subTitle="All Reports"
        extra={
          <Button onClick={() => navigate("createReport")}>Add a Report</Button>
        }
      />

      <Space direction="vertical" style={{ padding: 16 }}>
        {reports.map(({ id }) => (
          <Report id={id} key={id} />
        ))}
        {/* <Report /> */}
      </Space>
    </>
  );
}
