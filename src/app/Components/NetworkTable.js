'use client'
import React from 'react';
import "./table.css"

const NetworkTable = ({ pageData }) => {
    return (
        <div className="container mb-4">
            <div className='table-header row'>
                {pageData.network.table_headings.map((heading, idx) => (
                    <div className={`table-cell table-heading ${idx == 0 ? 'col-1' : idx == 1 ? 'col-6' : 'col-md-5 text-center'}`} key={idx}>{heading}</div>
                ))}
            </div>
            {pageData.network.stations.map((station, sIdx) => (
                <React.Fragment key={sIdx}>
                    {station.region && (
                        <p className='text-muted mb-0 table-region'>{station.region}</p>
                    )}
                    {station.locations.map((location, lIdx) => (
                        <div key={lIdx} className='table-row row'>
                            <div className='table-cell col-1 table-data'>{location.no}</div>
                            <div className='table-cell col-6'>
                                {location.image && (
                                    <span>
                                        <img src={location.image} className='img-fluid table-country-image' />
                                    </span>
                                )}
                                <span className='table-data table-country-name'>
                                    {location.name}
                                </span>
                            </div>
                            <div className='table-cell col-5 table-data text-center'>{location.ip}</div>
                        </div>
                    ))}
                </React.Fragment>

            ))}
        </div>
    )
}

export default NetworkTable