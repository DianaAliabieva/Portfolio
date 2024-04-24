
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Card, Row, Col, Typography, Space } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const { Footer, Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
};

function Chosen() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const continent = params.get('continent');


  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = () => {
    axios
      .get('https://restcountries.com/v3/all')
      .then((response) => {
        const filtered = response.data.filter(country =>
          country.continents.includes(continent) && country.name.common !== 'Russia'
        );
        setCountries(response.data);
      setFilteredCountries(filtered);
      console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <Layout>
      <Content style={contentStyle}>
        <Space
          direction='vertical'
          style={{
            width: '100%',
          }}
          size={[0, 48]}
        >
          <Row gutter={[16, 16]} className='card-container'>
            {filteredCountries
              .filter((country) => country.continents.includes(continent) && country.name.common !== 'Russia')
              .map((country, index) => (
                <Col span={8} key={index} onClick={() => handleCardClick(country)}>
                 

                  <Card
                    hoverable
                    className='ant-card'
                    cover={
                    
                    
                      <Link to={`/CountryDetails?country=${country.name.common}`}>
                      <img
                        alt='Flag'
                        src={country.flags[0]}
                        style={{ width: '100%', height: '300px', objectFit: 'cover', border: '2px solid black' }}
                      />
                    </Link>
                    }>
                    <a
                      href={country.maps.googleMaps}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <AimOutlined style={{ marginRight: 0 }} />
                    </a>
                    <Meta
                      title={country.name.common}
                      description={
                        <>
                          Status: {country.status}
                        </>
                      }
                    />
                  </Card>
                

                </Col>
              ))}
          </Row>
        </Space>
      </Content>
    </Layout>
  );
}

export default Chosen;
