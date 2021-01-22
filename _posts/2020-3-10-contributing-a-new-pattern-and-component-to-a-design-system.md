---
layout: post
title:  "Contributing a new pattern and component to a design system"
date:   2020-3-18
categories: [design systems]
hero_image: "/../assets/images/3-18-2020-hero.png"
hero_color: "#8FD5FF"
role: User Interface Design and Front-end Engineering
team: Design Systems and me
problem_statement: "Proposing a new user experience pattern, and designing and developing its component for Seeds."
---

{% include team_and_role.md %}

## Working with Design Systems
I had the opportunity to go through a residency in our Design Systems team at Sprout Social. During my residency, I focused on a few projects, one being the design, development and release of the Breadcrumb component on <a target="_blank" title="Sprout Social's Seeds" href="https://seeds.sproutsocial.com">Seeds</a>.

Outside of the residency, my actual team builds Publishing features for Sprout Social. My latest design for Publishing involved an interface where there could be a limitless amount of nested folders. The structure of folders requires a navigation element to help users navigate and locate themselves within the app. This feature called for a breadcrumb navigation.

Knowing that breadcrumb navigations are a fairly common UX pattern, I decided to present this as a possible component to the product design team. That way we could house it in our design system and continue to use it in areas that require breadcrumb navigation.

## Design proposal
I proposed different designs to the team of product designers for the Breadcrumb component based on research and analysis done on breadcrumb UX patterns. The team gave me immediate feedback on the proposed design options during the presentation, so I was able to get feedback on which design direction to take. We landed on a design that was conscious of space, provided easy wayfinding, and fit well within our system.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-1.png" title="Breadcrumb design proposal" />
	<figcaption class="media-caption center">Breadcrumb design proposal</figcaption>
</figure>

## Development proposal

When the design proposal was presented, the final design was chosen. Later, I started thinking about how I would build the component. I decided to write a development proposal in order to get input from other engineers.

I wrote a development proposal document outlining the following:
* The definition of the breadcrumb component
* Proposed component structure
* HTML translation
* Prop Table
* Accessibility considerations

By writing a development proposal, I spent time researching other design systems ways of implementing breadcrumbs, which provided me inspiration and ideas of how I would uniquely implement Breadcrumb in our design system.

My proposal provided enough starting material to get actionable feedback from engineers across the company.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-2.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb development proposal</figcaption>
</figure>

After receiving feedback from my engineer peers, I was able to make adjustments to the development strategy. I then proceeded to build the component. By writing a proposal ahead of developing code, I was able to get all of my ideas down and get feedback as well, which made the process of building the actual component very smooth! I was able to receive more code review feedback during this round of the build process.

## Breadcrumb in use
Breadcrumb's first adoption was in Asset Library after we launched the folders feature. It began as a pattern in our design system, and it is now even used in other Sprout apps like Landscape.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-3.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb in use inside Sprout Social's Asset Library</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-4.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb in use on <a target="_blank" title="Landscape" href="https://sproutsocial.com/landscape/">Landscape</a></figcaption>
</figure>