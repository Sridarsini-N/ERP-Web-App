import { Statistic, Progress, Divider, Row, Spin } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function CustomerPreviewCard({
  isLoading = false,
  activeCustomer = 0,
  newCustomer = 0,
}) {
  const translate = useLanguage();
  return (
    <Row className="gutter-row">
      <div className="whiteBox shadow" style={{ height: 458 }}>
        <div
          className="pad20"
          style={{
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <h3 style={{ color: '#1e439e', marginBottom: 40, marginTop: 15, fontSize: 'large' }}>
            {translate('Customers')}
          </h3>

          {isLoading ? (
            <Spin />
          ) : (
            <div
              style={{
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              <Progress type="dashboard" percent={newCustomer} size={148}/>
              <p style={{color:'#595959'}}>{translate('New Customer this Month')}</p>
              <Divider />
              <Statistic
                title={translate('Active Customer')}
                value={activeCustomer}
                precision={2}
                valueStyle={
                  activeCustomer > 0
                    ? { color: '#1e439e' }
                    : activeCustomer < 0
                      ? { color: '#333' }
                      : { color: '#000000' }
                }
                prefix={
                  activeCustomer > 0 ? (
                    <ArrowUpOutlined />
                  ) : activeCustomer < 0 ? (
                    <ArrowDownOutlined />
                  ) : null
                }
                suffix="%"
              />
            </div>
          )}
        </div>
      </div>
    </Row>
  );
}
