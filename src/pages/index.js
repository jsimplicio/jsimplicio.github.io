import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontSize: 21,
  maxWidth: 768,
  padding: 16,
  paddingTop: 48,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const paragraphStyles = {
  marginBottom: 24,
}

const listStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  marginBottom: 21,
}

const linkStyle = {
  color: "#232129",
  fontWeight: "bold",
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
        My pronouns are they/them/theirs.
      </p>

      <hr style={hr}/>

      <p style={paragraphStyles}>
        I like to speak about my personal struggle and success stories in design and technology:
      </p>

      <ul style={listStyles}>
        {speaks.map(speak => (
          <li key={speak.url} style={{ ...listItemStyles, color: speak.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${speak.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {speak.text}
              </a>
            
              <p style={descriptionStyle}>{speak.description}</p>
            </span>
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
            <span>
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
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
