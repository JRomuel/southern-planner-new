import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

function Head() {
  return (
    <head>
        <title>Southern Planners</title>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Event planner and wedding coordinator" />

        <meta property="og:title" content="Southern Planners Event Planners & Stylists"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.southern-planners.com/"/>
        <meta property="og:image" content="https://www.southern-planners.com/misc/southern-planner-og-image.png"/>
        <meta property="fb:app_id" content="southernplanners" />
        <meta property="og:description" content="Southern Planners was stablished since 2018, we adore working with couples because we believe in the magic of love stories coming to life."/>

        <link rel="apple-touch-icon" sizes="180x180" href="/misc/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/misc/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/misc/favicon-16x16.png"/>
        <link rel="manifest" href="/misc/site.webmanifest"/>

        <meta name="google-site-verification" content="lhvU0vR7f1l-Ddqeyrzs00f2cywCjgRYm4npx4jhoNo" />
        <GoogleAnalytics gaId="G-Q6WCPLST65" />
    </head>
  )
}

export default Head