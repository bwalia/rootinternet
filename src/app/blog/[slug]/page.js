import React from 'react';
import { promises as fs, existsSync } from 'fs';

export async function generateMetadata({ params, searchParams }, parent) {
    const {uuid} = searchParams;
    const filePath = process.cwd() + `/src/app/data/blog/${uuid}.json`;
    try {
        const apiUrl = process.env.API_BASE_URL;
        const bCode = process.env.BUSINESS_CODE;
    
        const url = `${apiUrl}/business/${bCode}/public/blog/${uuid}`
        const response = await fetch(url)
        const article = await response.json();
        let results = article;
        if (!res.ok) {
            const dataFile = await fs.readFile(filePath, 'utf8');
            const existingData = JSON.parse(dataFile);
            results = existingData;
        }
        return {
          title: results.data.content.meta_title,
          description: results.data.content.meta_description,
          keywords: results.data.content.meta_keywords
        }
    } catch (error) {
        const dataFile = await fs.readFile(filePath, 'utf8');
        const existingData = JSON.parse(dataFile);
        return {
            title: existingData.data.content.meta_title || existingData.data.content.title,
            description: existingData.data.content.meta_description,
            keywords: existingData.data.content.meta_keywords
          }
    }
  }

async function getData(articleUuid) {
    try {
        const apiUrl = process.env.API_BASE_URL;
        const bCode = process.env.BUSINESS_CODE;

        const url = `${apiUrl}/business/${bCode}/public/blog/${articleUuid}`
        const res = await fetch(url);
        const article = await res.json();
        fs.mkdir(`${process.cwd()}/src/app/data/blog`);
        const filePath = process.cwd() + `/src/app/data/blog/${articleUuid}.json`;
        let resultsData;
        if (!res.ok) {
            const dataFile = await fs.readFile(filePath, 'utf8');
            const existingData = JSON.parse(dataFile);
            return existingData;
        }
        if (existsSync(filePath)) {
            const dataFile = await fs.readFile(filePath, 'utf8');
            const existingData = JSON.parse(dataFile);
            if (article.data.content.publish_date !== existingData.data.content.publish_date) {
                await fs.writeFile(filePath, JSON.stringify(article, null, 2));
                resultsData = article;
            } else {
                resultsData = existingData;
            }
        } else {
            await fs.writeFile(filePath, JSON.stringify(article));
            resultsData = article;
        }
        return resultsData;
    } catch {
        const dataFile = await fs.readFile(process.cwd() + `/src/app/data/blog/${articleUuid}.json`, 'utf8');
        const existingData = JSON.parse(dataFile);
        return existingData;
    }
}

export default async function BlogPage({ params, searchParams }) {
    const articleData = await getData(searchParams.uuid);
    const articleContent = articleData.data.content;
    function trimHtmlTags(html) {
        const tagRegExp = /<[^>]*>/g;
        return html.replace(tagRegExp, '');
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
                    <div className='col-sm-10 m-auto mb-3'>
                        <h1 className='text-center'>{articleContent.title}</h1>
                        <div className='article-meta text-center'>
                            <span className='article-date me-3'>
                                Created on: {articleContent.created}
                            </span>
                            <span className='article-author'>
                                Published on: {convertDate(articleContent.publish_date)}
                            </span>
                        </div>
                        <hr className='hr' />
                        {articleContent.image && (
                            <div className='blog-image row mb-5'>
                                <div className='col-md-10 m-auto'>
                                    <img className='img-fluid' src={articleContent.image} alt={articleContent.title} />
                                </div>
                            </div>
                        )}
                        <div className='article-content'>
                            {trimHtmlTags(articleContent.content)}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}