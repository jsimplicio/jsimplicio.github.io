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
  margin: "32px 0",
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
          <div style={titleBar}>About - Notepad {buttons()}</div>
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
            <span>      
              📧: <a style={linkStyle} href="mailto:hi@julessimplic.io" title="email">email</a>
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
