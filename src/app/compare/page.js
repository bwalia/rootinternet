import React from 'react';
import { promises as fs } from 'fs';
import NetworkTable from '../Components/NetworkTable';

const Page = async () => {
    const dataFile = await fs.readFile(process.cwd() + '/src/app/data/compare.json', 'utf8');
    const pageData = JSON.parse(dataFile);

    return (
        <div style={{ paddingTop: "155px" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>{pageData.title}</h1>
                    </div>
                </div>
                <div className='row mt-3 mb-3'>
                    <div className='col-md-12'>
                        <div className='container'>
                            <div className='table-header row'>
                                {pageData.comparison_headings.map((heading, idx) => (
                                    <div
                                        className={`table-cell table-heading ${idx == 0 ? 'col-3' : idx == 1 ? 'col-4' : 'col-md-5'}`}
                                        key={idx}
                                    >
                                        {heading}
                                    </div>
                                ))}
                            </div>
                            {pageData.comparisons.map((comparison, cIdx) => (
                                <React.Fragment key={cIdx}>
                                    <div className='table-row row'>
                                        <div className='table-cell col-3 table-data'>{comparison.feature}</div>
                                        <div className='table-cell col-4'>
                                            <span className='table-data table-country-name'>
                                                {comparison.free_account}
                                            </span>
                                        </div>
                                        <div className='table-cell col-5 table-data'>{comparison.pro_account}</div>
                                    </div>
                                </React.Fragment>

                            ))}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <p>{pageData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page