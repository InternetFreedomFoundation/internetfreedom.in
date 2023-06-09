import React from "react"

export const SEO = ({ title, description, url, image, children }) => {

    const seo = {
        title: title,
        description: description,
        url: url,
        image: image || "https://static.internetfreedom.in/content/images/2023/06/blog_placeholder_image.png",
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            {children}
        </>
    )
}