import React from 'react';
import { promises as fs } from 'fs';

const Page = async () => {
    const dataFile = await fs.readFile(process.cwd() + '/src/app/data/faq.json', 'utf8');
    const pageData = JSON.parse(dataFile);
    console.log({ pageData: pageData.content });
    return (
        <div>
            <div style={{ paddingTop: "155px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 content">
                            <h1>{pageData.head.title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 content">
                        {pageData.content.map((parent, pIdx) => (
                            <React.Fragment key={pIdx}>
                                <h2>{parent.category}</h2>
                                <div className="accordion mb-5" id="faqs">
                                    {parent.questions.map((question, qIdx) => (
                                        <div className={`accordion-item`} key={qIdx}>
                                            <h2 className={`accordion-header mt-1 ${qIdx == 0 && 'mt-0'}`}>
                                                <button
                                                    className={`faq-ques-button accordion-button ${qIdx != 0 && 'collapsed'}`}
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#collapse-${pIdx}-${qIdx}`}
                                                    aria-expanded="true"
                                                    aria-controls={`collapse-${pIdx}-${qIdx}`}
                                                >
                                                    {question.ques}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse-${pIdx}-${qIdx}`}
                                                className={`accordion-collapse collapse ${qIdx == 0 && 'show'}`}
                                                data-bs-parent="#faqs"
                                            >
                                                <div className="accordion-body">
                                                    {typeof (question.ans) == "string" ? question.ans : (
                                                        <React.Fragment>
                                                            {question.ans.map((ans, aIdx) => (
                                                                <React.Fragment key={aIdx}>
                                                                    <p className='mb-0'>{ans.child_title}: </p>
                                                                    <ul>
                                                                    {ans.child_details.map((childList, cIdx) => (
                                                                        <li style={{listStyle: 'inherit'}} key={cIdx}>{typeof(childList) === "string" ? childList : (
                                                                            <React.Fragment>
                                                                                <p className='mb-0 pb-2'>{childList.options_heading}: </p>
                                                                                <ul className='mb-3'>
                                                                                    {childList.options_value.map((option, oIdx) => (
                                                                                        <li style={{listStyle: 'inherit'}} key={oIdx}>{option}</li>
                                                                                    ))}
                                                                                </ul>
                                                                            </React.Fragment>
                                                                        )}
                                                                        </li>
                                                                    ))}
                                                                    </ul>
                                                                </React.Fragment>
                                                            ))}
                                                        </React.Fragment>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </React.Fragment>
                        ))}
                        {/* <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page