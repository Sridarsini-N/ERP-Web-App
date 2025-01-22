import React from 'react';
import { Spin } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

const PageLoader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 64, color:'#1e439e' }} spin />;
  return (
    <div className="centerAbsolute">
      <Spin indicator={antIcon}></Spin>
    </div>
  );
};
export default PageLoader;
