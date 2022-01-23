import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  a.active {
    background: #EEE!important;
    box-shadow: inset 2px 2px 0 0 rgba(0,0,0,1), 2px 2px 0 0 rgba(255,255,255,1)!important;
  }

  .title-bar-buttons button:active {
    background: #999!important;
    box-shadow: inset 1px 1px 0 0 rgba(0,0,0,1), 1px 1px 0 0 rgba(255,255,255,1)!important;
  }
`

// styles
const pageStyles = {
  alignItems: "center",
  boxSizing: "border-box",
  color: "#232129",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  fontFamily: "Georgia, serif",
  fontSize: 20,
  justifyContent: "center",
  margin: "0 auto",
  marginBottom: "64px",
  maxWidth: 1224,
  paddingRight: 8,
  width: "100%"
}
const articleStyles = {
  background: "#FFF",
  padding: 8,
  margin: "0 auto",
  justifyContent: "space-between",
}
const sectionStyles = {
  margin: "0 auto",
  marginBottom: 32,
  marginTop: 32,
  padding: 0,
  width: "100%"
}

const heroImages = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  position: "relative",
  marginRight: 0,
  width: "100%",
}
const hrefStyles = {
  display: "inline-block",
  margin: 8,
  textDecoration: "none",
}
const heroImage = {
  borderRadius: 4,
  width: 548,
  marginTop: 32,
}
const headingStyles = {
  fontFamily: "Georgia, serif",
  fontSize: 26,
  fontWeight: 300,
  lineHeight: 1.3,
  margin: "0 auto",
  marginBottom: 24,
  maxWidth: 668,
}
const subHeaderStyles = {
  color: "#232129",
  fontFamily: "Verdana, sans-serif",
  fontSize: 22,
  margin: "0 auto",
  marginBottom: 16,
  maxWidth: 668,
}
const paragraphStyles = {
  color: "#232129",
  fontSize: 20,
  lineHeight: 1.4,
  margin: "0 auto",
  marginBottom: 16,
  padding: 0,
  maxWidth: 668,
}
const quote = {
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  marginBottom: 28,
  maxWidth: 668,
}

const friends = [
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
    name: "Sprout Social",
    year: "2019-2021",
    description: "I brought consistency across Sprout Social's social media management platform with a focus on maintaining and improving the experience of their social publishing tools. I contributed to Sprout's design system by adding reusable components and design patterns from social publishing features into our Figma UI kit, React UI kit, and public-facing systems docs.",
    color: "#CC99C9",
    url: "https://sproutsocial.com/",
    hero: (
      <>
        <StaticImage
          style={heroImage}
          src="../images/sprout-1.png"
          quality={40}
          alt="Sprout Social"
        />   
        <StaticImage
          style={heroImage}
          src="../images/sprout-2.png"
          quality={40}
          alt="Sprout Social"
        />     
        <StaticImage
          style={heroImage}
          src="../images/sprout-3.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-4.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-5.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-6.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-7.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-8.png"
          quality={40}
          alt="Sprout Social"
        />
           <StaticImage
          style={heroImage}
          src="../images/sprout-9.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-10.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-11.png"
          quality={40}
          alt="Sprout Social"
        />
        <StaticImage
          style={heroImage}
          src="../images/sprout-12.png"
          quality={40}
          alt="Sprout Social"
        />
      </>
    ),
  },
  {
    name: "dscout",
    year: "2016-2019",
    description: "I redesigned dscout's research study products for the Web and Android that run on a new, fast, and performant codebase with a new streamlined pattern library. I created a framework for desktop and mobile UI kits and style guides in Sketch. I added reusable components and patterns from designs into our React UI kit.",
    color: "#9EC1CF",
    url: "https://dscout.com/",
    hero: (
      <>
        <StaticImage
          style={heroImage}
          src="../images/dscout-1.png"
          quality={40}
          alt="dscout"
        />   
        <StaticImage
          style={heroImage}
          src="../images/dscout-2.png"
          quality={40}
          alt="dscout"
        />
        <StaticImage
          style={heroImage}
          src="../images/dscout-3.png"
          quality={40}
          alt="dscout"
        />   
        <StaticImage
          style={heroImage}
          src="../images/dscout-4.png"
          quality={40}
          alt="dscout"
        />   
        <StaticImage
          style={heroImage}
          src="../images/dscout-5.png"
          quality={40}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-6.png"
          quality={40}
          alt="dscout"
        />
        <StaticImage
          style={heroImage}
          src="../images/dscout-7.png"
          quality={40}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-8.png"
          quality={40}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-9.png"
          quality={40}
          alt="dscout"
        />  
        <StaticImage
          style={heroImage}
          src="../images/dscout-10.png"
          quality={40}
          alt="dscout"
        />   
         <StaticImage
          style={heroImage}
          src="../images/dscout-11.png"
          quality={40}
          alt="dscout"
        />   
         <StaticImage
          style={heroImage}
          src="../images/dscout-12.png"
          quality={40}
          alt="dscout"
        />    
      </>
    ),
  }
]	

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Jules Simplicio" />
        <meta name="keywords" content="jules simplicio, design systems, development, design, front-end, UI, software, product" />
        <meta name="description" content="Jules Simplicio is a design engineer focused on design infrastructure that supports product teams in efficiently shipping software apps." />
        <meta name="author" content="Jules Simplicio, hi@julessimplic.io" />
        <meta name="reply-to" content="hi@julessimplic.io" />
        <meta name="url" content="http://julessimplic.io" />
        <html lang="en" />
        <title>Jules Simplicio</title>
      </Helmet>
  
      <main style={pageStyles}>
        <section style={sectionStyles}> 
          <article style={articleStyles}>
            <h1 style={headingStyles}>
              I am a design engineer focused on design infrastructure that supports teams in efficiently adapting and scaling software products.
            </h1>
          </article>
        </section>
        <section style={sectionStyles}>
          <article style={articleStyles}>
            <h2 style={subHeaderStyles}>
              About
            </h2>
            <p style={paragraphStyles}>
              I currently work as a Design Engineer Lead for <a href="https://www.mozilla.org/en-US/firefox/" title="Firefox">Firefox</a> Design Systems. I support our team by maintaining and documenting the browser's user interface and experience, and promoting and documenting design best practices for keeping up Firefox Browser products look and feel.
            </p>
            <p style={paragraphStyles}>
              My pronouns are they or he.
            </p>
            <p style={paragraphStyles}>
              <a href="mailto:hi@julessimplic.io" title="email">Contact me.</a>
            </p>
          </article>
        </section>

        {jobs.map(job => (
          <>
          <section style={sectionStyles}>
            <article style={articleStyles}>
              <h2 style={subHeaderStyles}>
                {job.name}
                <a
                  style={hrefStyles}
                  href={job.url}
                >
                  🔗
                </a>
              </h2>
              <p style={paragraphStyles}>{job.description}</p>
              <div style={heroImages}>
                {job.hero}
              </div>   
            </article>
          </section>
        </>
        ))}
        <section style={sectionStyles}>
          <h2 style={subHeaderStyles}>
            References
          </h2>
          <article style={articleStyles}>
          {friends.map(link => (
            <div style={quote}>
              <p style={paragraphStyles}>{link.description}</p>   
              <span>
               ❏ {link.text}
              <a
                style={hrefStyles}
                href={link.url}
              >
                🔗
              </a>
              </span>         
            </div>
          ))}
          </article>
        </section>

        <section style={sectionStyles}>
          <h2 style={subHeaderStyles}>
            Looking for help?
          </h2>
          <article style={articleStyles}>
            <p style={paragraphStyles}>
              Do you need to get started on a design system or help bringing an old one back to life? <a href="mailto:hi@julessimplic.io" title="email">I am open for part-time consulting.</a>
            </p>
          </article>
        </section>
      </main>
      <footer style={pageStyles}>
        2022, Jules Simplicio
      </footer>
    </>
  )
}

export default IndexPage
