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

          {/* {pageData.services.services.map((service, index) => {
                // Start a new row for the first item or every second item
                const isFirstItemInRow = index % 2 === 0;
                const isLastItem = index === pageData.services.services.length - 1;
                return (
                    <React.Fragment key={index}>
                        {isFirstItemInRow && <div className="row">{"}"}
                            <div className="col-md-6">
                                {service.content}
                            </div>
                        {index % 2 === 1 || isLastItem && '</div>'}
                    </React.Fragment>
                );
            })} */}
          <div className="row feature">

            <div className="col-md-6" align="CENTER">

              <img src="images/devops-consultancy.svg" width="30%" alt="" />
              <h4>Developer to operations automation and consultancy,</h4>
              <p><a href="#">Read More</a></p>

            </div>

            <div className="col-md-6" align="CENTER" style={{ borderLeft: '1px dashed #3f5871' }}>
              <img SRC="images/database.svg" width="30%" alt="" />
              <h4>For Website, Email and Database Server Monitoring.</h4>
              <p><a href="#">Read More</a></p>


            </div>
          </div>


          <div className="row feature">
            <div style={{ borderTop: '1px dashed #3f5871', marginBottom: '30px' }}>

              <div className="col-md-6" align="CENTER" style={{ paddingTop: '40px' }}>

                <a href="#"> <img SRC="images/website.svg" width="30%" alt="" /></a>
                <h4>For Domain names, Hosting, Cloud & Dedicated Servers</h4>
                <p><a href="#">Read More</a></p>

              </div>

              <div className="col-md-6" align="CENTER" style={{ borderLeft: '1px dashed #3f5871', paddingTop: '40px' }}>
                <img src="images/email.svg" width="30%" alt="" />
                <h4>Our system can notify you via SMS or email whenever your website or server is in trouble.
                </h4>
                <p><a href="#">Read More</a></p>


              </div>
            </div>
          </div>


        </div>
      </div>
    </main>
  );
}
