import { Space, Layout, Divider, Typography } from 'antd';
// import logo from '@/style/images/idurar-crm-erp.svg';
import logo from '@/style/images/AcculerLogo-01.png';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content 
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="Acculer Media ERP"
          style={{ margin: '', display: 'block', height:'140px', width:'100%' }}
          height={63}
          width={220}
        />
        
      <center>
        <Title level={1} style={{ fontSize: 28 }}>
          Acculer Media  ERP / CRM
        </Title>
        <Text>
          Accounting / Invoicing / Quote / Payments - Web App for Enterprises - Customizable Based on the Needs
        </Text>
      </center>
       

        {/* <div className="space20"></div> */}
      </div>
    </Content>
  );
}
