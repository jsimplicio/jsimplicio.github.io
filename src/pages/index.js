import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    background: #008080;
  }
`
// styles
const pageStyles = {
  alignItems: "center",
  color: "#232129",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  fontFamily: "Times New Roman, serif",
  fontSize: 18,
  justifyContent: "center",
  margin: "24px 0",
}

const articleStyles = {
  background: "#FFF",
  boxShadow: "1px 1px 0 0 rgba(255,255,255,1), inset 2px 2px 0 0 rgba(0,0,0,1)",
  padding: 32,
}

const sectionStyles = {
  background: "#CFCFCF",
  border: "1px solid #DDD",
  borderRadius: 2,
  boxShadow: "2px 2px 0 0 rgba(0,0,0,1), inset 2px 2px 0 0 rgba(255,255,255,1)",
  maxWidth: 1024,
  marginBottom: 32,
  padding: 0,
  width: "100%",
}

const heroImages = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  position: "relative",
  marginRight: 0,
  width: "100%",
}

const heroImage = {
  borderRadius: 4,
  width: 468,
  marginTop: 32,
}

const headingStyles = {
  fontSize: 24,
  margin: 0,
  marginBottom: 32,
}
const paragraphStyles = {
  color: "#232129",
  margin: 0,
  marginBottom: 18,
  padding: 0,
  maxWidth: 668,
}
const linkStyle = {
  color: "#232129",
}
const emailLink = {
  color: "#232129",
  marginLeft: 8,
}
const titleBar = {
  alignItems: "center",
  background: "linear-gradient(48deg, rgba(0,28,136,1) 0%, rgba(57,142,203,1) 100%)",
  color: "white",
  display: "flex",
  height: 28,
  fontFamily: "Arial, sans-serif",
  fontSize: 14,
  padding: "0 0 0 8px",
}
const emailStyles = {
  alignItems: "center",
  display: "flex",
}
const winButton = {
  alignItems: "center",
  borderRadius: 2,
  boxShadow: "inset 1px 1px 0 0 rgba(255,255,255,1), 1px 1px 0 0 rgba(0,0,0,1)",
  background: "#CFCFCF",
  display: "flex",
  margin: 2,
  padding: 0
}
const buttonGroup = {
  display: "flex",
  marginLeft: "auto",
  marginRight: 2,
}
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Justin Conway, Engineer Manager at Sprout Social",
    url: "https://www.conwaydev.com/",
    description:
      "Jules is a passionate designer and a total blast to work with. They are a product focused thinker and a true advocate for user experience best practices.",
    color: "#FEB144",
  },
  {
    text: "Mike Joosse, Brand Studio Director at VMLY&R",
    url: "https://joosse.co/",
    description: "In every instance, they provided thoughtful, specific feedback and truly cared about making it a growth experience for the students they worked with... Their dedication to helping the design community grow and flourish in Chicago is a prime example for our students, our other mentors and critics, and designers across the city",
    color: "#FF6663",
  },
]

const jobs = [
  {
    name: "Sprout Social",
    year: "2019-2021",
    description: "I brought consistency across Sprout Social suite of social media management tools by focusing on redesigning Sprout's publishing UX patterns with their new design system.",
    color: "#CC99C9",
    url: "https://sproutsocial.com/",
    hero: (
      <>
        <StaticImage
          style={heroImage}
          src="../images/sprout-1.png"
          quality={60}
          alt="Sprout Social"
        />   
        <StaticImage
          style={heroImage}
          src="../images/sprout-2.png"
          quality={60}
          alt="Sprout Social"
        />     
        <StaticImage
          style={heroImage}
          src="../images/sprout-3.png"
          quality={60}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-4.png"
          quality={60}
          alt="Sprout Social"
        />
      </>
    ),
  },
  {
    name: "dscout",
    year: "2016-2019",
    description: "I redesigned dscout's research study products for web and Android with new pattern libraries under the same design system.",
    color: "#9EC1CF",
    url: "https://dscout.com/",
    hero: (
      <>
        <StaticImage
          style={heroImage}
          src="../images/dscout-1.png"
          quality={100}
          alt="dscout"
        />   
        <StaticImage
          style={heroImage}
          src="../images/dscout-2.png"
          quality={100}
          alt="dscout"
        />
        <StaticImage
          style={heroImage}
          src="../images/dscout-3.png"
          quality={100}
          alt="dscout"
        />   
        <StaticImage
          style={heroImage}
          src="../images/dscout-4.png"
          quality={100}
          alt="dscout"
        />    
      </>
    ),
  },
  // {
  //   name: "Threadless",
  //   year: "2016",
  //   description: "Lead usability testing and ecommerce tools for Artist Shops, Threadless' platform for artists to create and host an online storefront to sell their art printed on custom products fulfilled by Threadless.",
  //   color: "#9EE09E",
  //   url: "https://threadless.com/",
  //   hero: "../images/sprout-3.png",
  // },
]

// markup
const IndexPage = () => {
  const buttons = () => {
    return(
      <div style={buttonGroup}>
        <button disabled style={winButton}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="8" height="2" fill="black"/>
          </svg>
        </button>
        <button disabled style={winButton}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11111 2H2.88889H2V3.77778V9.11111V10H2.88889H9.11111H10V9.11111V3.77778V2H9.11111ZM9.11111 9.11111V3.77778H2.88889V9.11111H9.11111Z" fill="black"/>
          </svg>
        </button>
        <button disabled style={winButton}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3H4V4H5V5H7V4H8V3H10V4H9V5H8V6H7V7H8V8H9V9H10V10H8V9H7V8H5V9H4V10H2V9H3V8H4V7H5V6H4V5H3V4H2V3Z" fill="black"/>
          </svg>
        </button>
      </div>
    )
  }
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Jules Simplicio" />
        <meta name="keywords" content="your, tags" />
        <meta name="description" content="My personal home on the Web" />
        <meta name="author" content="Jules Simplicio, hi@julessimplic.io" />
        <meta name="reply-to" content="hi@julessimplic.io" />
        <meta name="url" content="http://julessimplic.io" />
        <html  lang="en" />
        <title>Jules Simplicio, Design Systems Lead</title>
      </Helmet>
      <main style={pageStyles}>
        <section style={sectionStyles}>
          <div style={titleBar}>
            About - Notepad {buttons()}</div>
          <article style={articleStyles}>
            <h1 style={headingStyles}>
              I'm Jules Simplicio. I design and code.
            </h1>
            <p style={paragraphStyles}>
              I am building a <a style={linkStyle} href="https://designtokens.app/" title="Design Tokens app">macOS and iOS app</a> that lets people store and track design systems' design tokens. I am building these apps to make accessible tokens and to learn <a style={linkStyle} href="https://developer.apple.com/xcode/swiftui/" title="SwiftUI">SwiftUI</a>.
            </p>
            <p style={paragraphStyles}>
              I work as a product designer and front-end engineer leading design systems for <a style={linkStyle} href="https://www.mozilla.org/en-US/firefox/" title="Firefox">Firefox</a>.
            </p>
            <p style={paragraphStyles}>
              I was born and raised in São Paulo, Brazil, where I fell in love with art through my formative years that were filled with skateboarding sessions, family music gatherings, doodling during class, and playing in a middle school punk rock band.</p>
            <p style={paragraphStyles}>I live with my partner and our two cats in Chicago. I enjoy spinning house music records, playing the guitar, skateboarding, and building mechanical keyboards.
            </p>
            <p style={paragraphStyles}>
              My pronouns are they/he.
            </p>
            <span style={emailStyles}>  
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3V4H11V3H13Z" fill="#CAC5CA"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1H11V2H9V3H7V4H9V5H11V6H13V5H15V6H17V7H19V20H18V8H17V21H16V22H11V23H10V24H11V25H10V26H8V25H6V24H5V22H4V20H3V19H2V18H1V24H2V25H4V26H6V27H8V28H10V29H12V30H14V31H15V24H11V23H16V22H18V21H20V20H22V19H24V17H23V18H22V6H21V5H19V4H17V3H15V2H13V1ZM13 3V2H11V3H9V4H11V5H13V4H15V5H17V6H19V7H20V19H21V6H19V5H17V4H15V3H13Z" fill="#CAC5CA"/>
                <path d="M5 12H6V14H5V12Z" fill="#CAC5CA"/>
                <path d="M17 1H16V2H17V1Z" fill="#CAC5CA"/>
                <path d="M9 5H8V6H9V5Z" fill="#87210F"/>
                <path d="M10 7H9V8H10V9H11V8H10V7Z" fill="#87210F"/>
                <path d="M10 5H11V6H10V5Z" fill="#87210F"/>
                <path d="M9 4H8V5H9V6H8V8H9V7H10V8H11V6H10V5H9V4Z" fill="#EE4024"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 2H17V3H19V4H21V5H23V7H24V9H23V10H25V11H28V12H29V13H30V14H29V15H30V14H31V13H30V12H31V11H30V10H29V9H30V8H29V7H28V8H27V4H26V3H24V2H21V3H19V2ZM28 9H29V8H28V9ZM28 10H29V11H28V10ZM28 10V9H27V10H28ZM29 11V12H30V11H29Z" fill="#378524"/>
                <path d="M23 12H24V14H23V12Z" fill="#378524"/>
                <path d="M26 3H27V4H26V3Z" fill="black"/>
                <path d="M30 8H29V6H30V8Z" fill="black"/>
                <path d="M31 10H30V8H31V10Z" fill="black"/>
                <path d="M31 18V10H32V18H31Z" fill="black"/>
                <path d="M30 20V18H31V20H30Z" fill="black"/>
                <path d="M29 22V20H30V22H29Z" fill="black"/>
                <path d="M27 25V18H28V22H29V23H28V25H27Z" fill="black"/>
                <path d="M26 26V25H27V26H26Z" fill="black"/>
                <path d="M24 27V26H26V27H24Z" fill="black"/>
                <path d="M22 28V27H24V28H22Z" fill="black"/>
                <path d="M20 29V28H22V29H20Z" fill="black"/>
                <path d="M18 30V29H20V30H18Z" fill="black"/>
                <path d="M16 31V30H18V31H16Z" fill="black"/>
                <path d="M14 31H16V32H14V31Z" fill="black"/>
                <path d="M12 30H14V31H12V30Z" fill="black"/>
                <path d="M10 29H12V30H10V29Z" fill="black"/>
                <path d="M8 28H10V29H8V28Z" fill="black"/>
                <path d="M6 27H8V28H6V27Z" fill="black"/>
                <path d="M4 26H6V27H4V26Z" fill="black"/>
                <path d="M2 25H4V26H2V25Z" fill="black"/>
                <path d="M2 25H1V24H2V25Z" fill="black"/>
                <path d="M28 5H27V6H28V5Z" fill="black"/>
                <path d="M27 7H28V8H27V7Z" fill="black"/>
                <path d="M19 8H18V20H19V8Z" fill="black"/>
                <path d="M20 7H21V19H20V7Z" fill="black"/>
                <path d="M23 6H22V18H23V6Z" fill="black"/>
                <path d="M13 0H14V1H13V0Z" fill="white"/>
                <path d="M5 10H6V11H5V10Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 17H1V18H2V19H3V20H4V22H5V24H6V25H8V26H10V25H11V24H16V23H18V22H20V21H22V20H24V19H26V17H24V16H23V17H24V19H22V20H20V21H18V22H16V21H17V8H15V7H13V6H11V9H10V8H8V4H7V23H8V18H9V24H10V25H8V24H6V22H5V20H4V18H2V17ZM11 23H16V22H11V23ZM11 23H10V24H11V23ZM14 12H15V20H14V12ZM12 10H13V19H12V10Z" fill="white"/>
                <path d="M4 16V17H2V16H4Z" fill="white"/>
                <path d="M4 16V15H6V16H4Z" fill="white"/>
                <path d="M27 9H28V10H27V9Z" fill="#378890"/>
                <path d="M16 1H15V2H16V1Z" fill="#378890"/>
                <path d="M6 11H5V12H6V11Z" fill="#378890"/>
                <path d="M19 1H22V2H20V3H19V1Z" fill="#378890"/>
                <path d="M23 7H24V8H23V7Z" fill="#378890"/>
                <path d="M28 6H27V7H28V6Z" fill="#378890"/>
                <path d="M24 10H25V11H24V10Z" fill="#378890"/>
                <path d="M24 14H23V15H24V14Z" fill="#378890"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0H13V1H11V2H9V3H7V23H9V24H10V25H8V24H6V22H5V20H4V18H2V17H4V16H6V15H4V10H5V14H6V10H5V8H6V2H8V1H10V0ZM4 15V16H2V17H1V25H0V16H1V15H4ZM11 3H9V4H11V5H13V6H15V7H17V8H19V7H21V6H23V5H21V4H19V3H17V2H18V1H22V2H24V3H26V2H24V1H22V0H14V1H13V2H11V3ZM13 3H11V4H13V5H15V6H17V7H19V6H21V5H19V4H17V3H15V2H17V1H15V2H13V3ZM15 4H13V3H15V4ZM17 5H15V4H17V5ZM17 5H19V6H17V5ZM28 4H27V5H28V6H29V5H28V4ZM18 29V30H16V31H15V24H16V23H18V22H20V21H22V20H24V19H26V17H27H28V18H27V25H26V26H24V27H22V28H20V29H18Z" fill="#918C91"/>
                <rect x="23" y="11" width="1" height="1" fill="#001D8C"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 1H19V2H18V1ZM13 10H12V19H13V10ZM14 12H15V20H14V12ZM8 18H9V23H8V18ZM20 2H21V3H20V2ZM23 8H24V9H23V8ZM23 12V11V10H24V11H28V12H29V13H28V15H27V16H28V17H26V16H24V15H25V13H26V12H23ZM28 16H29V15H28V16ZM29 13H30V14H29V13Z" fill="#003BF5"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28 6H29V7H28V6ZM28 8H29V9H28V8ZM30 10V9H29V10H28V11H29V12H30V13H31V12H30V11H31V10H30ZM30 10H29V11H30V10ZM27 15H28V16H27V15ZM29 15H30V14H31V18H30V20H29V22H28V16H29V15ZM29 15V13H28V15H29ZM24 12H26V13H25V15H24V12ZM24 12H23V11H24V12Z" fill="#001D8C"/>
              </svg>
              <a style={emailLink} href="mailto:hi@julessimplic.io" title="email">email</a>
            </span>
          </article>
        </section>

        {jobs.map(job => (
          <section style={sectionStyles}>
            <div style={titleBar}>Previously... - Notepad {buttons()}</div>
            <article style={articleStyles}>
              <p style={paragraphStyles}>{job.description}</p>
              <a
                style={linkStyle}
                href={job.url}
              >
                {job.year}
              </a>    
              <div style={heroImages}>
                {job.hero}
              </div>   
            </article>
          </section>
        ))}

        {links.map(link => (
          <section style={sectionStyles}>
            <div style={titleBar}>Friends and colleagues say... - Notepad {buttons()}</div>
            <article style={articleStyles}>
              <p style={paragraphStyles}>{link.description}</p>              
              <a
                style={linkStyle}
                href={link.url}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
            </article>
          </section>
        ))}
      </main>
    </>
  )
}

export default IndexPage
