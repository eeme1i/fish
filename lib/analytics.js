

export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', process.env.ANALYTICS_API_KEY, {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}