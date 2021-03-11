---
layout: post
title:  "Building a Figma plugin for file setup, organization, and hand off"
date:   2020-4-9  
categories: [plugins]
hero_image: "/../assets/images/4-7-2020-hero.png"
hero_color: "#A48FFF"
role: Front-end Engineering
team: Design Systems, Product Design, and me
---

I built Sprout Social's first Figma plugin, a Figma project setup and organizer for the product design team. 

With Figma being a new thing for designers at the time, we decided that we needed to organize our files similarly for the sake of consistency for any product team members who navigate our files. One of our lead product designers came up with a system for file cover designs, and a structure for organizing content into pages designated for in-progress work, components, early sketches, and final hand off.

The plugin helps designer organize their work in Figma in a way that is easy for any member of the product team to navigate it.

## How our Figma plugin works
Every thing, but the page structure, that the plugin generates is a component that comes from a file in our team's library. A cover is a component, and so are all of the starter app templates.

I learned how to use the <a target="_blank" href="https://www.figma.com/plugin-docs/api/api-overview/" title="Figma plugin API">Figma plugin API</a> to extract the cover and starter UI templates from a library file by their component ID. Using Figma components is particularly exciting because we can update component designs in Figma and push them as updates without having to touch the code! 

The cover has content that is generated from the user input when they run the plugin. Depending on what type of project and team are selected on the form, a theme is chosen. The cover includes icons that represent what team the project is under, and the project title and squad name.

Generating the page structure for the plugin was very easy, since the API contains page properties as well.

During this project I became acquainted with the process of coding in TypeScript and shipping a Figma plugin to our organization. I also was responsible for launching the plugin internally and teaching the team how to install and run it.

## How our Figma plugin has evolved
The plugin has had many additions since its launch. It now houses app templates for mobile and desktop, and even low-fi wireframes to help designers get their brainstorming started.

Every time we have an idea of a new tool that needs to be in the plugin we create a component for it in our library file then modify our plugin code by pulling new components via ID like I described it above.

Since I am the plugin creator and we haven't switched ownership in our org, I currently have to publish our plugin to the organization every time there is a new change, which is not that often. I find it important to be involved either way, so I can help other designers with any contributions.

<figure>
	<img src="../../../../../../assets/images/plugin-1.png" title="Filling out the plugin's form" />
	<figcaption class="media-caption center">Filling out the plugin's form</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/plugin-2.png" title="The cover the plugin generates based on input" />
	<figcaption class="media-caption center">File cover generated</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/plugin-3.png" title="Different covers based on themes" />
	<figcaption class="media-caption center">Different covers based on themes</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/plugin-4.png" title="App templates" />
	<figcaption class="media-caption center">App templates</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/plugin-5.png" title="Figma 101" />
	<figcaption class="media-caption center">Figma 101</figcaption>
</figure>