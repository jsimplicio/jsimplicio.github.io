import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import "../styles/index.css" 

// styles
const pageStyles = {
  alignItems: "center",
  boxSizing: "border-box",
  color: "#232129",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  fontSize: 20,
  justifyContent: "center",
  margin: "0 auto",
  marginBottom: "64px",
  marginTop: "64px",
  maxWidth: 1224,
  paddingRight: 8,
  width: "100%"
}
const articleStyles = {
  background: "#FFF",
  margin: "0 auto",
  justifyContent: "space-between",
  padding: 0,
}
const sectionStyles = {
  margin: "0 auto",
  marginBottom: 32,
  marginTop: 32,
  padding: 0,
  width: "100%"
}

const imgStyles = {
  display: "block",
  margin: "24px auto 0 auto",
  width: "200px"
}


const captionStyles = {
  color: "#444",
  display: "block",
  fontSize: "1rem",
  margin: "8px auto 24px auto"
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

const headingStyles = {
  fontWeight: 400,
  lineHeight: 1.325,
  margin: "0 auto",
  marginBottom: 24,
  maxWidth: 668,
}
const subHeaderStyles = {
  color: "#232129",
  fontSize: 24,
  fontWeight: 700,
  margin: "0 auto",
  marginBottom: 16,
  maxWidth: 668,
}
const paragraphStyles = {
  color: "#232129",
  fontSize: 20,
  lineHeight: 1.4,
  listStyle: "none",
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
    description: "I brought consistency across Sprout Social's social publishing and scheduling products by focusing on contributions to Sprout's design system. I maintained, created, and documented reusable components and design patterns into the system's Figma UI kit, React UI kit (run on Storybook), and public-facing docs (built on Gatsby).",
    color: "#CC99C9",
    url: "https://sproutsocial.com/",
    hero: (
      <>
        <StaticImage width={1800}
          src="../images/sprout-1.png"
          quality={90}
          alt="Sprout Social"
        />   
        <StaticImage width={1800}
          src="../images/sprout-2.png"
          quality={90}
          alt="Sprout Social"
        />     
        <StaticImage width={1800}
          src="../images/sprout-3.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-4.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-5.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-6.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-7.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-8.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-9.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-10.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-11.png"
          quality={90}
          alt="Sprout Social"
        />
        <StaticImage width={1800}
          src="../images/sprout-12.png"
          quality={90}
          alt="Sprout Social"
        />
      </>
    ),
  },
  {
    name: "dscout",
    year: "2016-2019",
    description: "I redesigned dscout's research study products for the Web and Android that run on newer and more performant codebase with a brand new pattern library. I created a framework for desktop and mobile UI kits and style guides in Sketch. I added reusable UI components and design patterns into our React UI kit (run on Storybook).",
    color: "#9EC1CF",
    url: "https://dscout.com/",
    hero: (
      <>
        <StaticImage width={1800}
          src="../images/dscout-1.png"
          quality={90}
          alt="dscout"
        />   
        <StaticImage width={1800}
          src="../images/dscout-2.png"
          quality={90}
          alt="dscout"
        />
        <StaticImage width={1800}
          src="../images/dscout-3.png"
          quality={90}
          alt="dscout"
        />   
        <StaticImage width={1800}
          src="../images/dscout-4.png"
          quality={90}
          alt="dscout"
        />   
        <StaticImage width={1800}
          src="../images/dscout-5.png"
          quality={90}
          alt="dscout"
        />  
        <StaticImage width={1800}
          src="../images/dscout-6.png"
          quality={90}
          alt="dscout"
        />
        <StaticImage width={1800}
          src="../images/dscout-7.png"
          quality={90}
          alt="dscout"
        />  
        <StaticImage width={1800}
          src="../images/dscout-8.png"
          quality={90}
          alt="dscout"
        />  
        <StaticImage width={1800}
          src="../images/dscout-9.png"
          quality={90}
          alt="dscout"
        />  
        <StaticImage width={1800}
          src="../images/dscout-10.png"
          quality={90}
          alt="dscout"
        />   
         <StaticImage width={1800}
          src="../images/dscout-11.png"
          quality={90}
          alt="dscout"
        />   
         <StaticImage width={1800}
          src="../images/dscout-12.png"
          quality={90}
          alt="dscout"
        />    
      </>
    ),
  }
]	

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Jules Simplicio" />
        <meta name="keywords" content="jules simplicio, design systems, development, design, front-end, UI, software, engineering, front-end, product" />
        <meta name="description" content="Jules Simplicio is a software developer focused on design infrastructure that supports collaboration across disciplines." />
        <meta name="author" content="Jules Simplicio, hi@julessimplic.io" />
        <meta name="reply-to" content="hi@julessimplic.io" />
        <meta name="url" content="http://julessimplic.io" />
        <html lang="en" />
        <title>Jules Simplicio</title>
      </Helmet>
  
      <main style={pageStyles}>
        <section style={sectionStyles}> 
          <article style={articleStyles}>
            <h1 className="title" style={headingStyles}>
             Hey, I'm Jules Simplicio. I'm a software developer focused on design infrastructure that supports collaboration across disciplines.
            </h1>
          </article>
        </section>
        <section style={sectionStyles}>
          <article style={articleStyles}>
            <h2 style={subHeaderStyles}>
              About
            </h2>
            <p style={paragraphStyles}>
              I currently work for the design system behind Mozilla's <a href="https://www.mozilla.org/en-US/firefox/" title="Firefox Browser">Firefox Browser</a>.
            </p>
            <p style={paragraphStyles}>
              I support our team by documenting and maintaining the browser's user interface and experience, while promoting our software design best practices.
            </p>
            <p style={paragraphStyles}>
              My pronouns are they or he.
            </p>
            <p style={paragraphStyles}>
              <a href="mailto:hi@julessimplic.io" title="email">Contact me</a>
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
            I focus on design systems
          </h2>
          <article style={articleStyles}>
            <p style={paragraphStyles}>
              I am a design systems lead and advocate that promotes frameworks for maintaining AND scaling application programs. Especially for all the unknowns in the future of a product's life-cycle.
            </p>
            
            <p style={paragraphStyles}>
              In my career, I have worked at small-to-medium sized software startups and publically-traded enterprises. No matter the size, companies have ambitious goals, the need for flexibility and a streamlined path to growth.
            </p>

            <p style={paragraphStyles}>
              As a software developer, I provide infrastructure services that give piece of mind to companies that want to efficiently scale their products without creating debt for teams to manage.
            </p> 

            <h3 style={paragraphStyles}>Every time you build a chair you don't have to start from scratch because, thankfully, there are existing tools.</h3>

            <img loading="lazy" style={imgStyles} alt="Ikea" src="https://static.tvtropes.org/pmwiki/pub/images/ikea.png" />
            <caption style={captionStyles}>Confused person illustration from IKEA's timeless instruction manuals</caption>

            <p style={paragraphStyles}>PS: Design systems' services are sustainable <strong>and</strong> maintainable frameworks, but will require dedicated individiuals to do such maintenance. <strong>Consider investing in a design systems team.</strong> Or at the very least a decentralized model for maintaining tools.</p>


            <ul style={paragraphStyles}>
              <p style={paragraphStyles}>The following services are frameworks that encompass design and code, and are quite agnostic to specific tools (that being Figma or Adobe XD (your designs), React or Vue (your code)):</p>

              <li>
                🧰 UI Kits
                <ul>
                  <li>Reusable user interface components (buttons, modals, navigation...)</li>
                </ul>
              </li>

              <li>
                🧩 Design Patterns
                <ul>
                  <li>Reusable user experience patterns (forms, empty states...)</li>
                </ul>
              </li>

              <li>
                🎨 Style Guides
                <ul>
                  <li>Reusable product styles (colors, type, shadows, grids...).</li>
                </ul>
              </li>


              <li>
                📕 Docs
                <ul>
                  <li>Documentation that supports the system and its frameworks.</li>
                </ul>
              </li>

              <li>
                🛠 Custom Tooling
                <ul>
                  <li>Teams may need custom plugins and scripts.</li>
                </ul>
              </li>
            </ul>
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


    // "gatsby-plugin-netlify-cms": "^5.11.0",
