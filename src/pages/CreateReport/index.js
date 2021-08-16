import { InputNumber, PageHeader, Space } from "antd";
import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { useStoreActions } from "easy-peasy";
import { v4 as uuid } from "uuid";
import moment from "moment";

export default function CreateReport() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const createReport = useStoreActions((actions) => actions.createReport);

  const onFinish = (values) => {
    console.log("Finish:", values);
    createReport({ id: uuid(), date: moment().format("d MM YYYY"), ...values });
    navigate("/");
  };
  return (
    <>
      <PageHeader onBack={() => navigate("/")} title="Add a new report" />
      <Form
        form={form}
        name="createReportForm"
        style={{ padding: 16 }}
        onFinish={onFinish}
      >
        <Title level={3}>Event Info</Title>
        <Form.Item
          label="Event Name"
          name="event"
          rules={[{ required: true, message: "Missing event name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Event Date"
          name="date"
          rules={[{ required: true, message: "Missing event date" }]}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          label="Event Location"
          name="location"
          rules={[{ required: true, message: "Missing event location" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Number of players"
          name="players"
          rules={[
            {
              required: true,
              message: "Missing number of players",
              type: "integer",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Number of rounds"
          name="rounds"
          rules={[
            {
              required: true,
              message: "Missing number of rounds",
              type: "integer",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Event Format"
          name="format"
          rules={[{ required: true, message: "Missing format" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Event Primer" name="primer">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          rules={[{ type: "url", message: "Please input an image URL" }]}
          label="Event Cover"
          name="cover"
        >
          <Input />
        </Form.Item>
        <Title level={3}>Results</Title>
        <Form.List name="results" rules={[{ required: true }]}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "playerName"]}
                    fieldKey={[fieldKey, "playerName"]}
                    rules={[{ required: true, message: "Missing player name" }]}
                  >
                    <Input placeholder="Player Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "deck"]}
                    fieldKey={[fieldKey, "deck"]}
                    rules={[{ required: true, message: "Missing deck" }]}
                  >
                    <Input placeholder="Deck" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "decklist"]}
                    fieldKey={[fieldKey, "decklist"]}
                    rules={[{ type: "url", message: "Please input an URL" }]}
                  >
                    <Input placeholder="Decklist URL" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add player
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item shouldUpdate>
          {() => (
            <Button
              disabled={
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
}
