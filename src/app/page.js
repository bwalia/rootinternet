import React from 'react';
import styles from "./page.module.css";
import { promises as fs } from 'fs';

export default async function Home() {
  const dataFile = await fs.readFile(process.cwd() + '/src/app/data/dashboard.json', 'utf8');
  const pageData = JSON.parse(dataFile);

  return (
    <main classNameName={styles.main}>
      {/* Heading Section */}
      <div className="container" style={{ paddingTop: '155px' }}>
        <div className="row">
          <div className="col-md-12 slidetxt text-center">
            <h1>{pageData.heading.title}</h1>
            <h2><u>{pageData.heading.tag_line}</u></h2>
            <h4>{pageData.heading.description}</h4>
            <div className="col-md-12">
              <h5 className="getstartbtn"><a href="#">{pageData.heading.button_text}</a></h5>
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
                    <img src={service.image} width="30%" alt="" />
                    <h4>{service.name}</h4>
                    <p><a href="#">Read More</a></p>
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
              ALIGN="CENTER"
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

            <div className="col-md-12" ALIGN="CENTER" style={{ marginTop: "40px" }}>
              <a href="#" className="btn btn-warning btn-lg" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                {pageData.features.button_text}
              </a>

            </div>
          </div>
        </div>
      </div>
      {/* /Features Section */}

      {/* How Works Section */}
      <div className="container">
        <h2
          style={
            { fontSize: "40px", 
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

        <p align="RIGHT">
          <a href="#" className="btn btn-warning btn-lg" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            {pageData.how_works.button_text}
          </a>
        </p>
      </div>
      {/* /How Works Section */}
    </main>
  );
}
