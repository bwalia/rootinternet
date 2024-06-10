import React from 'react';
import { promises as fs } from 'fs';

const Footer = async () => {
    const dataFile = await fs.readFile(process.cwd() + '/src/app/data/footer.json', 'utf8');
    const pageData = JSON.parse(dataFile);
    return (
        <footer className="text-center">
            <div className="footer-above">
                <div className="container">
                    <div className="row">
                        {pageData.sections.map((section, idx) => (
                            <div className="footer-col col-md-4" key={idx}>
                                <h3>{section.title}</h3>
                                {section?.description && section.description.map((desc, dIdx) => (
                                    <p key={dIdx} className='mb-0 pb-0'>{desc}</p>
                                ))}

                                {section?.social_links && (
                                    <React.Fragment>
                                        <ul className="list-inline">
                                            {section.social_links.map((social, sIdx) => (
                                                <li>
                                                    <a 
                                                        href={social.link} 
                                                        className="btn-social btn-outline"
                                                    >
                                                        <i className={social.icon}></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </React.Fragment>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-below">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 copyright-wrapper">
                            Copyright &copy; {`2009 - ${new Date().getFullYear()}`} Root internet All rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer