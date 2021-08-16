import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import "antd/dist/antd.css";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import { StoreProvider } from "easy-peasy";
import store from "./store";

function App() {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Header>
          <Title style={{ color: "white" }}> MTG Report</Title>
        </Header>
        <Content>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Content>
      </Layout>
    </StoreProvider>
  );
}

export default App;
