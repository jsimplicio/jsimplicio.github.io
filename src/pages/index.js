import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// styles
const pageStyles = {
  color: "#232129",
  display: "flex",
  flexWrap: "wrap",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontSize: 18,
  paddingTop: 16,
}
const sectionStyles = {
  margin: 8,
  maxWidth: 480,
}
const headingStyles = {
  marginTop: 16,
  marginBottom: 32,
}
const paragraphStyles = {
  color: "#232129",
  margin: 0,
  marginBottom: 32,
  padding: 0,
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
    color: "#9EE09E",
  },
  {
    text: "Mike Joosse, Brand Studio Director at VMLY&R",
    url: "https://joosse.co/",
    description: "In every instance, they provided thoughtful, specific feedback and truly cared about making it a growth experience for the students they worked with... Their dedication to helping the design community grow and flourish in Chicago is a prime example for our students, our other mentors and critics, and designers across the city",
    color: "#FEB144",
  },
]

const jobs = [
  {
    year: "2019-2021",
    description: "Brought consistency across Sprout Social by focusing on redesigning and adapting Sprout's social media publishing user experience with the new design system.",
    color: "#CC99C9",
    url: "https://sproutsocial.com/"
  },
  {
    year: "2016-2019",
    description: "Redesigned dscout's research study products for Android and web with new pattern libraries under the same design system.",
    color: "#9EC1CF",
    url: "https://dscout.com/",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Jules Simplicio, Design Systems Lead</title>
      <section style={sectionStyles}>
        <StaticImage
          imgStyle={photo}
          src="../images/me.png"
          width={124}
          quality={100}
          alt="Jules Simplicio headshot"
      />
        <h1 style={headingStyles}>
          Hey, I'm Jules. I design and code. ✌️
        </h1>
        <p style={paragraphStyles}>
          I am designing a <a style={linkStyle} href="https://designtokens.app/" title="Design Tokens app">macOS and iOS app</a> that lets people store and track design tokens. I am building these apps to make accessible tokens and to learn SwiftUI.
        </p>
        <p style={paragraphStyles}>
          I was born and raised in São Paulo, Brazil. I currently live with my partner and our two cats in Chicago. I like spinning records, playing the guitar, skateboarding, and building mechanical keyboards.
        </p>
        <p style={paragraphStyles}>
          I am a product designer and front-end engineer currently leading design systems for <a style={linkStyle} href="https://www.mozilla.org/en-US/firefox/" title="Firefox">Firefox</a>.
        </p>
        <p style={paragraphStyles}>
          My pronouns are they/he.
        </p>
        <p style={paragraphStyles}>      
          📧: <a style={linkStyle} href="mailto:hi@julessimplic.io" title="email">email</a>
        </p>
      </section>
      <section style={sectionStyles}>
        <p style={paragraphStyles}>
          Previously I...
          <ul style={listStyles}>
            {jobs.map(job => (
              <li style={{ ...listItemStyles, color: job.color }}>
                <p style={listDescription}>{job.description}</p>
                <a
                style={linkStyle}
                href={job.url}
              >
                {job.year}
              </a>              
              </li>
            ))}
          </ul>
        </p>
        <p style={paragraphStyles}>
          Friends and colleagues say...
        </p>

        <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <p style={listDescription}>{link.description}</p>              
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
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default IndexPage
