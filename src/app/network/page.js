import React from 'react';
import { promises as fs } from 'fs';
import NetworkTable from '../Components/NetworkTable';

const Page = async () => {
  const dataFile = await fs.readFile(process.cwd() + '/src/app/data/network.json', 'utf8');
  const pageData = JSON.parse(dataFile);

  return (
    <div style={{ paddingTop: '155px' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>{pageData.title}</h1>
            <p>{pageData.tag_line}</p>
            <iframe src="https://www.google.com/maps/d/embed?mid=1iM4aSCGheGTvEKHdfE4bRIlouH0&ehbc=2E312F" width="100%" height="480"></iframe>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <h4>{pageData.network.heading}</h4>
            <p>{pageData.network.description}</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <NetworkTable pageData={pageData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page