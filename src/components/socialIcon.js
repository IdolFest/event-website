import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function createSocialIcon(url, iconName, siteName, iconLibrary = 'fab', size='5') {
    if (iconName === 'bluesky') {
        // Our fontawesome fork doesn't quite keep up, so bring in the bsky icon manually.
        return (
            <a href={url} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className={`svg-inline--fa fa-${size}x svg-inline--fa fa-w-16`} viewBox="0 0 512 512"><path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"/></svg>
                {siteName ? <span>{siteName}</span> : null}
            </a>
        )
    } else if (iconName === 'applemusic') {
        return (
            <a href={url} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className={`svg-inline--fa fa-${size}x svg-inline--fa fa-w-16`} viewBox="0 0 640 640"><path d="M532 71C539.6 77.1 544 86.3 544 96L544 400C544 444.2 501 480 448 480C395 480 352 444.2 352 400C352 355.8 395 320 448 320C459.2 320 470 321.6 480 324.6L480 207.9L256 257.7L256 464C256 508.2 213 544 160 544C107 544 64 508.2 64 464C64 419.8 107 384 160 384C171.2 384 182 385.6 192 388.6L192 160C192 145 202.4 132 217.1 128.8L505.1 64.8C514.6 62.7 524.5 65 532.1 71.1z"/></svg>                {siteName ? <span>{siteName}</span> : null}
            </a>
        )
    } else if (iconName === 'showroom') {
        return (
            <a href={url} target="_blank" rel="noreferrer">
                <StaticImage src="../images/showroom.png"  style={{width: '5em'}} alt='Showroom' />
                {siteName ? <span>{siteName}</span> : null}
            </a>
        )

    } else if (iconName === 'threads') {
        return (
            <a href={url} target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className={`svg-inline--fa fa-${size}x svg-inline--fa fa-w-16`} viewBox="0 0 640 640"><path d="M427.5 299.7C429.7 300.6 431.7 301.6 433.8 302.5C463 316.6 484.4 337.7 495.6 363.9C511.3 400.4 512.8 459.7 465.3 507.1C429.1 543.3 385 559.6 322.7 560.1L322.4 560.1C252.2 559.6 198.3 536 162 489.9C129.7 448.9 113.1 391.8 112.5 320.3L112.5 319.8C113 248.3 129.6 191.2 161.9 150.2C198.2 104.1 252.2 80.5 322.4 80L322.7 80C393 80.5 447.6 104 485 149.9C503.4 172.6 517 199.9 525.6 231.6L485.2 242.4C478.1 216.6 467.4 194.6 453 177C423.8 141.2 380 122.8 322.5 122.4C265.5 122.9 222.4 141.2 194.3 176.8C168.1 210.1 154.5 258.3 154 320C154.5 381.7 168.1 429.9 194.3 463.3C222.3 498.9 265.5 517.2 322.5 517.7C373.9 517.3 407.9 505.1 436.2 476.8C468.5 444.6 467.9 405 457.6 380.9C451.5 366.7 440.5 354.9 425.7 346C422 372.9 413.9 394.3 401 410.8C383.9 432.6 359.6 444.4 328.3 446.1C304.7 447.4 282 441.7 264.4 430.1C243.6 416.3 231.4 395.3 230.1 370.8C227.6 322.5 265.8 287.8 325.3 284.4C346.4 283.2 366.2 284.1 384.5 287.2C382.1 272.4 377.2 260.6 369.9 252C359.9 240.3 344.3 234.3 323.7 234.2L323 234.2C306.4 234.2 284 238.8 269.7 260.5L235.3 236.9C254.5 207.8 285.6 191.8 323.1 191.8L323.9 191.8C386.5 192.2 423.8 231.3 427.6 299.5L427.4 299.7L427.5 299.7zM271.5 368.5C272.8 393.6 299.9 405.3 326.1 403.8C351.7 402.4 380.7 392.4 385.6 330.6C372.4 327.7 357.8 326.2 342.2 326.2C337.4 326.2 332.6 326.3 327.8 326.6C284.9 329 270.6 349.8 271.6 368.4L271.5 368.5z"/></svg>
                {siteName ? <span>{siteName}</span> : null}
            </a>
        )

    }
    return (
        <a href={url} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={[iconLibrary, iconName]} size={`${size}x`} />
            {siteName ? <span>{siteName}</span> : null}
        </a>
    )
}