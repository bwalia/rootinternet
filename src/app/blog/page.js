import React from 'react';
import { promises as fs, existsSync } from 'fs';
import Link from 'next/link';
import Pagination from '../Components/Pagination';
import MonthPicker from '../Components/MonthPicker';

async function getData(params) {
    const page = params.page ?? 1;
    try {
        const currentDate = new Date();
        const apiUrl = process.env.API_BASE_URL;
        const perPage = process.env.PER_PAGE_RECORDS;
        const bCode = process.env.BUSINESS_CODE;
        const month = params.month ?? currentDate.getMonth() + 1;
        const year = params.year ?? currentDate.getFullYear();

        const url = `${apiUrl}/business/${bCode}/public/blogs?page=${page}&perPage=${perPage}&month=${month}&year=${year}`;
        const res = await fetch(url);
        const apiData = await res.json();
        const filePath = process.cwd() + `/src/app/data/blogs-page__${page}.json`;
        
        let results;
        if (!res.ok) {
            const dataFile = await fs.readFile(process.cwd() + `/src/app/data/blogs-page__${page}.json`, 'utf8');
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
        const dataFile = await fs.readFile(process.cwd() + `/src/app/data/blogs-page__${page}.json`, 'utf8');
        const existingData = JSON.parse(dataFile);
        return existingData
    }
}

const Page = async ({ searchParams }) => {
    const pageData = await getData(searchParams);
    const blogsPerPage = 10;
    const totalBlogs = pageData?.data?.total;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);
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
                    <div className="col-8">
                        <h1>Blog</h1>
                    </div>
                    <div className='col-4'>
                        <MonthPicker />
                    </div>
                </div>
                <div className='row'>
                    {pageData?.data?.content.length ? pageData?.data?.content.map((blog) => (
                        <div key={blog.id} className="col-12 col-sm-8 col-md-6 col-lg-4 mt-3 mb-3">
                            <div className="card">
                                <Link href={{ pathname: `/blog/${blog.code}`, query: { uuid: blog.uuid } }}>
                                    <img className="card-img" src={blog.image ?? '/images/mountains.png'} alt={blog.code} />
                                </Link>
                                <div className="card-img-overlay">
                                    <Link
                                        className="btn btn-light btn-sm"
                                        href={{ pathname: `/blog/${blog.code}`, query: { uuid: blog.uuid } }}
                                    >
                                        {blog.code}
                                    </Link>
                                </div>
                                <div className="card-body" style={{ position: 'relative' }}>
                                    <h4 className="card-title">{blog.title}</h4>
                                    <small className="text-muted cat">
                                        <i className="far fa-clock text-info"></i> 30 minutes
                                        <i className="fas fa-users text-info"></i> 4 portions
                                    </small>
                                    <p className="card-text">{trimHtmlTags(spliceText(blog.content))}</p>
                                    <Link
                                        className="btn btn-info"
                                        href={{ pathname: `/blog/${blog.code}`, query: { uuid: blog.uuid } }}
                                    >
                                        Read More
                                    </Link>
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
                    )) : (
                        <div className="col-12">
                            <h2>No blogs found</h2>
                        </div>
                    )}
                </div>
                <Pagination currentPage={10} totalPages={totalPages} />
            </div>
        </React.Fragment>
    )
}

export default Page