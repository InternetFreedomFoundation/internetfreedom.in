import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";

import { Layout } from "../../components/common";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";
import NewsletterWidget from "../../components/NewsletterWidget";
import { Helmet } from 'react-helmet';

/**
 * Single post preview (/:uuid)
 *
 * This file renders a single draft post and previews all the content.
 *
 */


function Uuid(props) {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/preview/' + props.params.uuid);
                if (!response.ok) {
                    throw new Error('Non-OK response:' + response.body);
                }
                const jsonData = await response.json();
                setApiData(jsonData);
            } catch (error) {
                return <div>Error: {error}</div>;
            }
        };
        fetchData();
    }, [props.params.uuid]);

    if (!apiData) {
        return <div>Loading... Please wait.</div>; // Render a loading state while waiting for data
    }

    const post = apiData.posts[0];
    const readingTime = readingTimeHelper(post);

    return (
        <>
            <Helmet>
                {post.codeinjection_head && (
                    <style type="text/css">
                        {`${post.codeinjection_head}`}
                    </style>
                )}

                {post.codeinjection_foot && (
                    <style type="text/css">
                        {`${post.codeinjection_foot}`}
                    </style>
                )}

            </Helmet>
            <Layout>
                <div className="">
                    <div className="bg-bg-black text-white">
                        <div className="px-4 py-4 mx-auto md:max-w-full lg:max-w-screen-md 2xl:max-w-screen-lg lg:pt-16">
                            <div className="md:mx-auto  text-left">
                                {post.primary_tag && (
                                    <div className="pb-4">
                                        <Link
                                            to={`/tag/${post.primary_tag?.slug}`}
                                            aria-label="Author"
                                            className="p-2 px-4 text-sm bg-bg-light-grey rounded-full tracking-tight text-gray-300 mr-2 capitalize hover:text-iff-orange"
                                        >
                                            {post.primary_tag.name}
                                        </Link>
                                    </div>
                                )}

                                <div>
                                    <h1 className="pb-4 font-sans block tracking-tight md:tracking-normal break-normal text-xl md:text-2xl text-left font-extrabold text-white">
                                        {post.title}
                                    </h1>
                                    <p className="text-left text text-body-grey text-big-body font-light">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="mb-4 mt-8 flex relative -translate-x-1">
                                    <div className="flex flex-col md:flex-row">
                                        {post.authors.map((author, index) => (
                                            <div className="flex items-center">
                                                <Link
                                                    to={`/author/${author.slug}`}
                                                    aria-label="Author"
                                                    className="inline-block mb-1"
                                                >
                                                    <img
                                                        src={
                                                            author.profile_image || "/images/icons/avatar.svg"
                                                        }
                                                        loading="lazy"
                                                        alt={author.name}
                                                        className="object-cover w-8 h-8 rounded-full z-10  border-none outline-none"
                                                    />
                                                </Link>
                                                <div className="text-center mb-[0.2rem]">
                                                    <Link
                                                        to={`/author/${author.slug}`}
                                                        aria-label="Author"
                                                        className="font-medium text-bold hover:underline text-iff-orange ml-2 mr-8"
                                                    >
                                                        {author.name}
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="ml-auto">
                                        <p className="ml-auto mt-2 text-sm text-iff-orange border-l-2 pl-2 border-iff-orange">
                                            {post.published_at_pretty} <br /> {readingTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <article
                        className="mt-16 mx-auto prose md:prose-xl prose-img:rounded-xl prose-img:shadow-xl prose-img:border hover:prose-headings:underline underline-offset-4 hover:prose-a:text-iff-orange px-4"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    ></article>
                </div>
                <NewsletterWidget />
            </Layout>
        </>
    );
};

export default Uuid;