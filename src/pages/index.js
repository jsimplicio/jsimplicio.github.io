import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from 'styled-components'
import { default as email } from '../icons/email.svg';
import { default as notepad } from '../icons/notepad.svg';


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
  margin: "4px 0 24px 0",
}
const articleStyles = {
  background: "#FFF",
  boxShadow: "1px 1px 0 0 #CCC, inset 2px 2px 0 0 rgba(0,0,0,1)",
  padding: 32,
  justifyContent: "space-between",
}
const sectionStyles = {
  background: "#CFCFCF",
  border: "4px solid #CCC",
  borderRadius: 2,
  boxShadow: "2px 2px 0 0 rgba(0,0,0,1), inset 2px 2px 0 0 rgba(255,255,255,1)",
  maxWidth: 1224,
  marginBottom: 32,
  padding: 0,
  width: "100%",
}
const aside = {
  margin: 8,
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
  width: 548,
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
const quote = {
  display: "flex",
  flexDirection: "column",
  fontStyle: "italic",
  margin: "32px 0"
}
const linkStyle = {
  color: "#232129",
  fontStyle: "normal"
}
const emailLink = {
  color: "white",
  fontFamily: "Arial, sans-serif",
  fontSize: 12,
  fontWeight: "300",
  textDecoration: "none",
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
  textDecoration: "none",
}
const asideIcon = {
  display: "inline-block",
  marginRight: 16
}
const imageAside = {
  display: "block"
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
const startButton = {
  alignItems: "center",
  borderRadius: 2,
  color: "#232129",
  boxShadow: "inset 2px 2px 0 0 rgba(255,255,255,1), 2px 2px 0 0 rgba(0,0,0,1)",
  background: "#CFCFCF",
  display: "flex",
  fontFamily: "Arial, sans-serif",
  fontSize: 14,
  margin: 2,
  padding: 6,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textDecoration: "none",
  textOverflow: "ellipsis",
  maxWidth: 250,
  width: "100%",
}
const startButtonContent = {
  marginLeft: 4,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
}
const buttonGroup = {
  display: "flex",
  marginLeft: "auto",
  marginRight: 2,
}
const startMenu = {
  background: "#CFCFCF",
  bottom: 0,
  display: "flex",
  left: 0,
  padding: 2,
  position: "fixed",
  width: "100%"
}
const flexIcon = {
  flexShrink: 0,
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
    description: "In every instance, they provided thoughtful, specific feedback and truly cared about making it a growth experience for the students they worked with... Their dedication to helping the design community grow and flourish in Chicago is a prime example for our students, our other mentors and critics, and designers across the city.",
    color: "#FF6663",
  },
]

const jobs = [
  {
    name: "sproutsocial",
    year: "2019-2021",
    description: "I brought consistency across Sprout Social suite of social media management tools by focusing on redesigning Sprout's publishing UX patterns, which I adopted into the system wide design patterns library.",
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
        <StaticImage
          style={heroImage}
          src="../images/sprout-5.png"
          quality={60}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-6.png"
          quality={30}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-7.png"
          quality={30}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-8.png"
          quality={30}
          alt="Sprout Social"
        />
           <StaticImage
          style={heroImage}
          src="../images/sprout-9.png"
          quality={30}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-10.png"
          quality={30}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-11.png"
          quality={30}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-12.png"
          quality={30}
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
        <StaticImage
          style={heroImage}
          src="../images/dscout-5.png"
          quality={100}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-6.png"
          quality={100}
          alt="dscout"
        />
        <StaticImage
          style={heroImage}
          src="../images/dscout-7.png"
          quality={100}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-8.png"
          quality={100}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-9.png"
          quality={100}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-10.png"
          quality={100}
          alt="dscout"
        />   
         <StaticImage
          style={heroImage}
          src="../images/dscout-11.png"
          quality={100}
          alt="dscout"
        />   
         <StaticImage
          style={heroImage}
          src="../images/dscout-12.png"
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
      <aside style={aside}>
        <div style={asideIcon}>  
          <a style={imageAside} href="mailto:hi@julessimplic.io" title="email"><img alt="Email" src={email} /></a>
          <a style={emailLink} href="mailto:hi@julessimplic.io" title="email">Email</a>
        </div>
        <div style={asideIcon}>  
          <img style={imageAside} alt="Notepad" src={notepad} />
          <span style={emailLink}>Notepad</span>
        </div>
      </aside>
      <main style={pageStyles}>
        <section style={sectionStyles}>
          <a id="about" href="#about" style={titleBar}>About - Notepad {buttons()}</a>
          <article style={articleStyles}>
            <h1 style={headingStyles}>
              Hi! I'm Jules Simplicio. I'm a Design Engineer.
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
          </article>
        </section>

        {jobs.map(job => (
          <>
          <section style={sectionStyles}>
            <a id={job.name} href={"#" + job.name} style={titleBar}>Previously in {job.year}... - Notepad {buttons()}</a>
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
        </>
        ))}
        <section style={sectionStyles}>
          <a id="friends" href="#friends" style={titleBar}>Friends and colleagues say... - Notepad {buttons()}</a>
          <article style={articleStyles}>
          {links.map(link => (
            <div style={quote}>
              <p style={paragraphStyles}>{link.description}</p>              
              <a
                style={linkStyle}
                href={link.url}
              >
                {link.text}
              </a>
            </div>
          ))}
          </article>
        </section>
      </main>
      <footer style={startMenu}>
        <a href="#about" style={startButton}>
          <svg style={flexIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="1" width="1" height="1" fill="black"/>
            <rect x="3" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="5" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="7" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="9" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="11" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="10" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="12" y="2" width="1" height="1" fill="#FEFAFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H12V14H2V15H12H13V14V3Z" fill="#CAC5CA"/>
            <rect x="8" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="6" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="4" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="3" width="10" height="11" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H12V1H11V0ZM3 2H4V3H3V2ZM3 1V2H2V1H3ZM3 1H4V0H3V1ZM5 2H6V3H5V2ZM8 2H7V3H8V2ZM9 2H10V3H9V2ZM12 2H11V3H12V2ZM10 0H9V1H10V0ZM7 0H8V1H7V0ZM6 0H5V1H6V0ZM14 2H13V15H2V16H13V15H14V2ZM7 5H4V6H7V5ZM10 5V6H8V5H10ZM10 8V7H4V8H10ZM10 9V10H4V9H10ZM10 12V11H4V12H10Z" fill="black"/>
          </svg>
          <span style={startButtonContent}>About - Notepad</span>
        </a>

        <a href="#sproutsocial" style={startButton}>
          <svg style={flexIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="1" width="1" height="1" fill="black"/>
            <rect x="3" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="5" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="7" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="9" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="11" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="10" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="12" y="2" width="1" height="1" fill="#FEFAFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H12V14H2V15H12H13V14V3Z" fill="#CAC5CA"/>
            <rect x="8" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="6" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="4" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="3" width="10" height="11" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H12V1H11V0ZM3 2H4V3H3V2ZM3 1V2H2V1H3ZM3 1H4V0H3V1ZM5 2H6V3H5V2ZM8 2H7V3H8V2ZM9 2H10V3H9V2ZM12 2H11V3H12V2ZM10 0H9V1H10V0ZM7 0H8V1H7V0ZM6 0H5V1H6V0ZM14 2H13V15H2V16H13V15H14V2ZM7 5H4V6H7V5ZM10 5V6H8V5H10ZM10 8V7H4V8H10ZM10 9V10H4V9H10ZM10 12V11H4V12H10Z" fill="black"/>
          </svg>
          <span style={startButtonContent}>Previously in 2019-2021... - Notepad</span>
        </a>
        <a href="#dscout" style={startButton}>
          <svg style={flexIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="1" width="1" height="1" fill="black"/>
            <rect x="3" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="5" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="7" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="9" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="11" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="10" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="12" y="2" width="1" height="1" fill="#FEFAFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H12V14H2V15H12H13V14V3Z" fill="#CAC5CA"/>
            <rect x="8" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="6" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="4" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="3" width="10" height="11" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H12V1H11V0ZM3 2H4V3H3V2ZM3 1V2H2V1H3ZM3 1H4V0H3V1ZM5 2H6V3H5V2ZM8 2H7V3H8V2ZM9 2H10V3H9V2ZM12 2H11V3H12V2ZM10 0H9V1H10V0ZM7 0H8V1H7V0ZM6 0H5V1H6V0ZM14 2H13V15H2V16H13V15H14V2ZM7 5H4V6H7V5ZM10 5V6H8V5H10ZM10 8V7H4V8H10ZM10 9V10H4V9H10ZM10 12V11H4V12H10Z" fill="black"/>
          </svg>
          <span style={startButtonContent}>Previously in 2016-2019... - Notepad</span>
        </a>

        <a href="#friends" style={startButton}>
          <svg style={flexIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" y="1" width="1" height="1" fill="black"/>
            <rect x="3" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="5" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="7" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="9" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="11" y="1" width="1" height="1" fill="#FEFAFF"/>
            <rect x="10" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="12" y="2" width="1" height="1" fill="#FEFAFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 3H12V14H2V15H12H13V14V3Z" fill="#CAC5CA"/>
            <rect x="8" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="6" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="4" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="2" width="1" height="1" fill="#FEFAFF"/>
            <rect x="2" y="3" width="10" height="11" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H12V1H11V0ZM3 2H4V3H3V2ZM3 1V2H2V1H3ZM3 1H4V0H3V1ZM5 2H6V3H5V2ZM8 2H7V3H8V2ZM9 2H10V3H9V2ZM12 2H11V3H12V2ZM10 0H9V1H10V0ZM7 0H8V1H7V0ZM6 0H5V1H6V0ZM14 2H13V15H2V16H13V15H14V2ZM7 5H4V6H7V5ZM10 5V6H8V5H10ZM10 8V7H4V8H10ZM10 9V10H4V9H10ZM10 12V11H4V12H10Z" fill="black"/>
          </svg>
          <span style={startButtonContent}>Friends and colleagues say... - Notepad</span>
        </a>
      </footer>
    </>
  )
}

export default IndexPage
