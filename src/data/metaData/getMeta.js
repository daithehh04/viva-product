export const getMeta = (title, excerpt, featuredImage) => {
  return {
    title: title,
    description: excerpt,
    applicationName: process.env.SITE_NAME,
    openGraph: {
      title: title,
      description: excerpt,
      url: process.env.DOMAIN || '',
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title || ''
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
      creator: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title || ''
        }
      ]
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}
