import React from 'react';
import { promises as fs, existsSync } from 'fs';

export async function generateStaticParams(context) {
    const apiUrl = process.env.API_BASE_URL;
    const bCode = process.env.BUSINESS_CODE;

    const url = `${apiUrl}/business/${bCode}/public/blogs`
    const article = await fetch(url).then((res) => res.json())

    return article.data.content.map((post) => ({
        slug: post.code,
    }))
}

async function getData(articleUuid) {
    try {
        const apiUrl = process.env.API_BASE_URL;
        const bCode = process.env.BUSINESS_CODE;

        const url = `${apiUrl}/business/${bCode}/public/blog/${articleUuid}`
        const article = await fetch(url).then((res) => res.json())
        return article.data.content;
    } catch {
        const dataFile = await fs.readFile(process.cwd() + '/src/app/data/blogs.json', 'utf8');
        const existingData = JSON.parse(dataFile);
        return existingData
    }
}

export default async function BlogPage({ params, searchParams }) {
    console.log({ searchParams });
    const articleData = await getData(searchParams.uuid);
    function trimHtmlTags(html) {
        const tagRegExp = /<[^>]*>/g; // Regular expression to match HTML tags
        return html.replace(tagRegExp, ''); // Remove HTML tags
    }
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

    return (
        <React.Fragment>
            <div className='container mb-3' style={{ paddingTop: '155px' }}>
                <div className='row'>
                    <div className='col-sm-10 m-auto text-center mb-3'>
                        <h1>{articleData.title}</h1>
                        <div className='article-meta'>
                            <span className='article-date me-3'>
                                Created on: {articleData.created}
                            </span>
                            <span className='article-author'>
                                Published on: {convertDate(articleData.publish_date)}
                            </span>
                        </div>
                        <hr className='hr' />
                        <div className='article-content'>
                            {trimHtmlTags(articleData.content)}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}