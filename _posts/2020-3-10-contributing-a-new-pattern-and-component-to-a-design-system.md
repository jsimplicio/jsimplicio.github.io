---
layout: post
title:  "Contributing a new pattern and component to a design system"
date:   2020-3-18
categories: [design systems]
hero_image: "/../assets/images/3-18-2020-hero.png"
hero_color: "#8FD5FF"
role: User interface design and front-end engineering
team: Design systems and me
---

<figure>
	<img src="{{ site.baseurl }}/assets/images/mar182020hero.png" title="Breadcrumb component" />
</figure>

{% include team_and_role.md %}

## Working with design systems
I had the opportunity to go through a residency in our design systems team at <a target="_blank" title="Sprout Social" href="https://sproutsocial.com">Sprout Social</a>. During my residency, I focused on a few projects, including the design, development and release of a brand new UX pattern and component on <a target="_blank" title="Sprout Social's Design System, Seeds" href="https://seeds.sproutsocial.com">Seeds</a>.

Outside of the design systems, I sit on a feature team that builds publishing features for Sprout Social. While designing a new feature for Publishing, I stumbled upon a structure of folders which required a navigation element to help users navigate. The feature called for a breadcrumb type navigation.

Knowing that breadcrumb navigations are a fairly common UX pattern, I decided to present this pattern as a potential component to our design system. That way we wouldn't have to re-invent the wheel every time a design needs breadcrumbs.

## Design
I proposed different designs to the team of product designers for the Breadcrumb component based on my research done on the breadcrumb pattern. The team gave me feedback on the proposed design options, allowing me to land on a design that was conscious of header space, and fit well within our visual system.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-1.png" title="Some proposed breadcrumb designs" />
	<figcaption class="media-caption center">Some proposed breadcrumb designs</figcaption>
</figure>

## Development

After landing on a design, I started planning the component. I decided to write a proposal in order to get input from other engineers.

I wrote a document document outlining the following:
* The definition of the breadcrumb component
* Proposed component structure
* HTML translation
* Prop Table
* Accessibility considerations

While writing the proposal, I researched and learned different ways of implementing breadcrumbs in a system.

My proposal provided foundational material to get feedback from engineers across the company.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-2.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb development proposal</figcaption>
</figure>

After receiving feedback engineering, I proceeded to build the component. By writing a proposal ahead of developing code, I was able to get all of my ideas down and get feedback, which made the process of building the actual component very smooth!

## Communication
Upon releasing the component to our component library and the Breadcrumb documentation to our live facing systems website, I plugged the component to design systems, engineering and product channels, to announce the new tool in our toolkit.

## Adoption
Breadcrumb's first adoption was for the folders feature in Sprout's Asset Library. 

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-3.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb in use inside Sprout Social's Asset Library</figcaption>
</figure>

Sprout's marketing software, Landscape, also makes use of our system, and specially of Breadcrumb.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-4.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb in use on <a target="_blank" title="Landscape" href="https://sproutsocial.com/landscape/">Landscape</a></figcaption>
</figure>