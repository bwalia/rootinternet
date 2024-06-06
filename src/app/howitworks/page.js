import React from 'react';
import { promises as fs } from 'fs';

const Page = async () => {
    const dataFile = await fs.readFile(process.cwd() + '/src/app/data/howitworks.json', 'utf8');
    const pageData = JSON.parse(dataFile);
    return (
        <div style={{ paddingTop: "155px" }}>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 content">
                            <h1>{pageData.title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 content">
                        {pageData.content.map((section, idx) => (
                            <React.Fragment key={idx}>
                                <h2>{section.title}</h2>
                                {section.content.map((desc, dIdx) => (
                                    <p key={dIdx}>
                                        {dIdx === 0 && (
                                            <img 
                                                src={section.image} 
                                                width="150" 
                                                align={idx % 2 ? "right" : "left"}
                                                alt={section.title}
                                                className={`pb-3 ${idx % 2 ? "ps-3" : "pe-3"}`}
                                            />
                                        )}
                                        {desc}
                                    </p>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page