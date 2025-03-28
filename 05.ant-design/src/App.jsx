import { FileOutlined, DesktopOutlined, TeamOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;

const defaultTheme = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
};

const siderStyle = {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'var(--bg-color-sider-rgb)',
}

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8')
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: defaultTheme,
      }}
    >
      <Layout hasSider>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(isCollapsed) => {
            setCollapsed(!isCollapsed)
          }}
          style={siderStyle}
        >
          <div style={{ height: '100%', overflow: 'auto' }}>
            <div className="demo-logo-vertical" />
            <Menu
              theme='dark'
              defaultSelectedKeys={['1']}
              mode="inline"
              items={items}
              style={{ padding: '0.7rem', backgroundColor: 'var(--bg-color-sider-rgb)' }}
            />
          </div>
        </Sider>

        <Layout
          className="site-layout"
          style={{
            marginLeft: collapsed ? 200 : 0,
            transition: 'margin-left .3s',
          }}
        >
          <Header style={{ background: colorBgContainer, }}>

          </Header>

          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial',
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: 'center',
                background: colorBgContainer,
              }}
            >
              <p>long content</p>
              {
                // indicates very long content
                Array.from(
                  {
                    length: 100,
                  },
                  (_, index) => (
                    <React.Fragment key={index}>
                      {index % 20 === 0 && index ? 'more' : '...'}
                      <br />
                    </React.Fragment>
                  ),
                )
              }
            </div>
          </Content>

          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default App;