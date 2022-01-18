import * as React from "react"

const SITE_DOMAIN = `productdeveloper.net`
const PLAUSIBLE_DOMAIN = `plausible.io`
const SCRIPT_URI = `/js/plausible.outbound-links.js`

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    const scriptProps = {
      "data-domain": SITE_DOMAIN,
      src: `https://${PLAUSIBLE_DOMAIN}${SCRIPT_URI}`,
    }

    return setHeadComponents([
      <link
        key="plausible-preconnect"
        rel="preconnect"
        href={`https://${PLAUSIBLE_DOMAIN}`}
      />,
      <script async key="plausible-script" defer {...scriptProps} />,
      <script
        key="plausible-custom-events"
        dangerouslySetInnerHTML={{
          __html: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };
          `,
        }}
      />,
    ])
  }
  return null
}
