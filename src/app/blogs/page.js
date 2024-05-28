import React from 'react';
import { promises as fs, existsSync } from 'fs';
import Link from 'next/link';

async function getData() {
    try {
        const apiUrl = process.env.API_BASE_URL;
        const pubUrl = process.env.PUB_BASE_URL;
        const bCode = process.env.BUSINESS_CODE;
        const res = await fetch(`${apiUrl}/business/${bCode}/public/blogs`);
        const apiData = await res.json();
        console.log({ apiData });
        const filePath = process.cwd() + '/src/app/data/blogs.json';
        console.log({ apiData: apiData.data.content });
        let results;
        if (!res.ok) {
            const dataFile = await fs.readFile(process.cwd() + '/src/app/data/blogs.json', 'utf8');
            const existingData = JSON.parse(dataFile);
            return existingData;
        }
        if (existsSync(filePath)) {
            const dataFile = await fs.readFile(filePath, 'utf8');
            const existingData = JSON.parse(dataFile);
            const newData = apiData.data.content.filter(item => !existingData.data.content.some(existingItem => existingItem.publish_date === item.publish_date));
            if (newData.length > 0) {
                await fs.writeFile(filePath, JSON.stringify(apiData, null, 2));
                results = apiData;
            } else {
                results = existingData;
            }
        } else {
            await fs.writeFile(filePath, JSON.stringify(apiData));
            results = apiData;
        }
        return results;
    } catch {
        const dataFile = await fs.readFile(process.cwd() + '/src/app/data/blogs.json', 'utf8');
        const existingData = JSON.parse(dataFile);
        return existingData
    }
}

const Page = async () => {
    const pageData = await getData();
    const convertDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const formattedDate = new Intl.DateTimeFormat(
            'en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(date);
        return formattedDate;
    }

    const spliceText = (str) => {
        if (str.length > 50) {
            return str.slice(0, 50 - 3) + '...';
        }
        return str;
    }

    function trimHtmlTags(html) {
        const tagRegExp = /<[^>]*>/g;
        return html.replace(tagRegExp, '');
    }

    return (
        <React.Fragment>
            <div className="container" style={{ paddingTop: '155px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Blogs</h1>
                    </div>
                </div>
                <div className='row'>
                    {pageData?.data?.content.map((blog) => (
                        <div key={blog.id} className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3">
                            <div className="card">
                                <Link href={{ pathname: `blogs/${blog.code}`, query: { uuid: blog.uuid } }}>
                                    <img className="card-img" src={blog.image ?? 'images/default-blog.svg'} alt={blog.code} />
                                </Link>
                                <div className="card-img-overlay">
                                    <Link 
                                        className="btn btn-light btn-sm" 
                                        href={{ pathname: `blogs/${blog.code}`, query: { uuid: blog.uuid } }}
                                    >
                                        {blog.code}
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{blog.title}</h4>
                                    <small className="text-muted cat">
                                        <i className="far fa-clock text-info"></i> 30 minutes
                                        <i className="fas fa-users text-info"></i> 4 portions
                                    </small>
                                    <p className="card-text">{trimHtmlTags(spliceText(blog.content))}</p>
                                    <a href="#" className="btn btn-info">Read More</a>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div className="views">{convertDate(blog.publish_date)}
                                    </div>
                                    {/* <div className="stats">
                                        <i className="far fa-eye"></i> 1347
                                        <i className="far fa-comment"></i> 12
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Page