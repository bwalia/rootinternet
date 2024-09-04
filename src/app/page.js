import React from 'react';
import { promises as fs } from 'fs';
import Link from 'next/link';

export const metadata = {
  title: 'Free Website Monitoring (from 48 Global Locations) - Monitoring Control Panel',
  description: "Be the first to know when your website goes down. Receive alerts by email, SMS and push notification. Sign up FREE!",
  keywords: "Monitoring Control Panel, website monitoring, web server monitoring, server monitoring, sms notification, push notification, "
}

export default async function Home() {
  const dataFile = await fs.readFile(process.cwd() + '/src/app/data/dashboard.json', 'utf8');
  const pageData = JSON.parse(dataFile);

  return (
    <main className="">
      {/* Heading Section */}
      <div className="container" style={{ padding: '190px 0 40px 0' }}>
        <div className="row">
          <div className='col-lg-6 text-center'>
            <img src='/images/Default_website_monitoring.jpg' className='img-fluid' id='img-main-dashboard' />
          </div>
          <div className="col-lg-6 slidetxt text-center" style={{alignContent: "center"}}>
            <h1 className='intro-heading'>{pageData.heading.title}</h1>
            <h2><u>{pageData.heading.tag_line}</u></h2>
            <h4>{pageData.heading.description}</h4>
            <div className="col-md-12">
              <h5 className="getstartbtn"><Link href="/pricing">{pageData.heading.button_text}</Link></h5>
            </div>
          </div>
        </div>
      </div>
      {/* /Heading Section */}

      {/* Services Section */}
      <div className="bcg">
        <div className="container">
          <div className="row feature">
            <div className="col-md-12" align="CENTER">
              <h2>{pageData.services.title}</h2>
              <h3>{pageData.services.tag_line}</h3>

            </div>
          </div>
          <div className="row feature">
            {pageData.services.services.map((service, index) => {
              const isFirstItemInRow = index % 2 === 0;
              const isLastItem = index === pageData.services.services.length - 1;
              return (
                <React.Fragment key={index}>
                  <div className="col-md-6 service-wrapper" align="CENTER" style={index % 2 === 1 ? { borderLeft: '1px dashed #3f5871' } : {}}>
                    <img src={service.image} width="10%" alt="" className='dashboard-icons' />
                    <h4>{service.name}</h4>
                    <p className='readmore-button'><Link href="/features">Read More</Link></p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      {/* /Services Section */}

      {/* Why Choose Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2
              align="CENTER"
              style={{ paddingTop: '40px', fontSize: '40px', color: '#2C3E50' }}
            >
              {pageData.why_choose.title}
            </h2>
            <hr className="star-primary" />
          </div>

          {pageData.why_choose.reasons.map((reason, idx) => (
            <div className="col-md-4 text-center textcolor" key={idx}>
              <i className={reason.icon} style={{ fontSize: "70px" }}></i>
              <h4>{reason.name}</h4>
            </div>
          ))}
        </div>

      </div>
      {/* /Why Choose Section */}

      {/* Features Section */}
      <div className="bcg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="serviceh2">{pageData.features.title}</h2>
            </div>

            {pageData.features.features.map((feature, idx) => (
              <div className="col-md-6 services  brdr-right-none" key={idx}>
                <h3>{feature.name_bold}</h3>
                <h4>{feature.name_small}</h4>
                <img src={feature.image} />
                <p>{feature.description}</p>
              </div>
            ))}

            <div className="col-md-12" align="CENTER" style={{ marginTop: "40px" }}>
              <Link href="/features" className="btn btn-warning btn-lg" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                {pageData.features.button_text}
              </Link>

            </div>
          </div>
        </div>
      </div>
      {/* /Features Section */}

      {/* How Works Section */}
      <div className="container">
        <h2
          style={
            {
              fontSize: "40px",
              color: "#2C3E50",
              borderBottom: "2px solid #2C3E50",
              paddingBottom: "10px",
              fontWeight: "700",
              marginTop: "20px"
            }
          }
        >
          {pageData.how_works.title}
        </h2>
        <p><em><strong>{pageData.how_works.sub_title}</strong></em></p>
        <p style={{ fontSize: "20px", lineHeight: "30px", textAlign: "justify" }}>
          <img src={pageData.how_works.image} align="left" width="130" style={{ padding: "0 30px 15px 0px" }} />
          {pageData.how_works.description}
        </p>

        <p className='text-center'>
          <Link href="/howitworks" className="btn btn-warning btn-lg" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            {pageData.how_works.button_text}
          </Link>
        </p>
      </div>
      {/* /How Works Section */}
    </main>
  );
}
