import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';
import color from '@/utils/color';
import Iconlogo from '@/style/images/IconLogo-01.png'

const About = () => {
  const translate = useLanguage();
  return (
    
        <>
        <center>
          <img src={Iconlogo} alt="logo" style={{ marginLeft: '-20px', height: '150px' }} />
          <h1>Acculer Media</h1>
        {/* <p style={{color:"grey"}}>Do you want any modification in this app!!</p> */}
          <p>
            Website : <a href="https://www.acculermedia.com">www.acculermedia.com</a>{' '}
          </p>
          {/* <p>
            GitHub :{' '}
            <a href="https://github.com/idurar/idurar-erp-crm">
              https://github.com/idurar/idurar-erp-crm
            </a>
          </p> */}
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://acculermedia.com/contact.php`);
            }}
            style={{background: '#1e439e'}}
          >
            {translate('Contact us')}
          </Button>
        </center>
        </>
     
  );
};

export default About;
