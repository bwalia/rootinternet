import React from 'react';
import { promises as fs } from 'fs';
import './features.css'

const Page = async () => {
    const dataFile = await fs.readFile(process.cwd() + '/src/app/data/features.json', 'utf8');
    const pageData = JSON.parse(dataFile);
    return (
        <div className="container" style={{ paddingTop: "155px" }}>
            <div className="row">
                <div className='col-12'>
                    <h2 className='mt-0'>{pageData.title}</h2>
                </div>
                <div className='row'>
                    {pageData.content.map((feature, idx) => (
                        <div className="col-md-6 feature-col" key={idx}>
                            <dl>
                               
                                <dt className='feature-heading'>
                                    <img src={feature.image} alt={feature.title} />
                                    <span className='ps-3'>{feature.title}</span>
                                    
                                </dt>
                                <dt> <img src={feature.content_image} className='feature-image' alt={feature.title} /></dt>

                                <dd>
                                    <p>{feature.description}</p>
                                </dd>
                            </dl>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page