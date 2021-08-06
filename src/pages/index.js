import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: 18,
  maxWidth: 768,
  padding: 16,
  paddingTop: 32,
}
const headingStyles = {
  marginTop: 16,
  marginBottom: 32,
}
const paragraphStyles = {
  color: "#232129",
  marginBottom: 32,
}

const listStyles = {
  paddingLeft: 16,
}
const listItemStyles = {
  marginBottom: 18,
}

const linkStyle = {
  color: "#232129",
}

const listDescription = {
  color: "#232129",
  display: "block",
  marginBottom: 8,
  padding: 0,
}

const hr = {
  height: 2,
  background: "#EEE",
  border: "none",
  marginBottom: 48,
  marginTop: 48,
}
// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   marginBottom: 24,
// }

const descriptionStyle = {
  color: "#232129",
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const photo = {
  borderRadius: 100,
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
    color: "#E95800",
  },
  {
    text: "Josh Berman, UX Strategist at Intouch Solutions",
    url: "https://www.joshberman.design/",
    description:
      "Jules was an empathetic mentor who got to know me as a person so that they could guide me towards opportunities that fit with my personal and professional objectives. Jules' thoughtful advice and wealth of industry knowledge was invaluable to me as a young designer!",
    color: "#1099A8",
  },
  {
    text: "Mike Joosse, Brand Studio Director at VMLY&R",
    url: "https://joosse.co/",
    description: "In every instance, they provided thoughtful, specific feedback and truly cared about making it a growth experience for the students they worked with... Their dedication to helping the design community grow and flourish in Chicago is a prime example for our students, our other mentors and critics, and designers across the city",
    color: "#BC027F",
  },
]

const speaks = [
  {
    text: "2017",
    url: "https://chicago.aiga.org/event/tune-up-portfolio-polish/",
    description: "Tune-up: Portfolio Polish",
    color: "#E95800",
  },
  {
    text: "2018",
    url: "https://chicago.aiga.org/event/design-pride-insights-and-experiences/",
    description: "Design Pride: Insights and Experiences",
    color: "#BC027F",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Jules Simplicio, Design Systems Lead</title>
      <StaticImage
        imgStyle={photo}
        src="../images/me.png"
        width={124}
        quality={100}
        alt="A Gatsby astronaut"
    />
      <h1 style={headingStyles}>
        Hey, I'm Jules. I design and code. ✌️
      </h1>
      <p style={paragraphStyles}>
        I am designing a <a style={linkStyle} href="https://designtokens.app/" title="Design Tokens app">macOS and iOS app</a> that lets people store and track design tokens. I am building these apps to make accessible tokens and to learn SwiftUI.
      </p>
      <p style={paragraphStyles}>
        I am a product designer and front-end engineer currently leading Design Systems at Firefox.
      </p>

      <hr style={hr}/>

      <p style={paragraphStyles}>
        I was born and raised in São Paulo, Brazil. I currently live with my partner and our two cats in Chicago. I like spinning records, playing the guitar, skateboarding, and building mechanical keyboards.
      </p>
      <p style={paragraphStyles}>
        My pronouns are they/he.
      </p>

      <hr style={hr}/>

      <p style={paragraphStyles}>
        I like to speak about my personal experience in the professional world of design and technology:
      </p>

      <ul style={listStyles}>
        {speaks.map(speak => (
          <li key={speak.url} style={{ ...listItemStyles, color: speak.color }}>
            <a
              style={listDescription}
              href={`${speak.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {speak.text}
            </a>
            <a
              style={descriptionStyle}
              href={`${speak.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {speak.description}
            </a>
          </li>
        ))}
      </ul>

      <hr style={hr}/>

      <p style={paragraphStyles}>
        Friends and colleagues say...
      </p>

      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <p style={listDescription}>{link.description}</p>              
            <a
              style={linkStyle}
              href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {link.text}
            </a>
            {link.badge && (
              <span style={badgeStyle} aria-label="New Badge">
                NEW!
              </span>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
