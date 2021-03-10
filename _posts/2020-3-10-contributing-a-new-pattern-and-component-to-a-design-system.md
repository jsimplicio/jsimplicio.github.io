---
layout: post
title:  "Contributing a new pattern and component to a design system"
date:   2020-3-18
categories: [design_systems]
hero_image: "/../assets/images/3-18-2020-hero.png"
hero_color: "#8FD5FF"
role: User interface design and front-end engineering
team: Design systems and me
---

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-hero.png" title="Breadcrumb" />
</figure>


## Working with design systems
I had the opportunity to go through a design systems residency at <a target="_blank" title="Sprout Social" href="https://sproutsocial.com">Sprout Social</a>. During my month-long residency with the team, I tackled a couple projects, including the design, development and release of a brand new UX pattern and component for our design system, <a target="_blank" title="Sprout Social's Design System, Seeds" href="https://seeds.sproutsocial.com">Seeds</a>.

Outside of design systems, I sit in a feature team that creates and ships publishing features for social media managers. While designing a new feature for publishing, I had to support users creating a structure of folders with sub-folders. To let users navigate up and down their folder structure, we required a wayfinding and navigation element. The feature called exactly for breadcrumb navigation.

Knowing that breadcrumbs are a fairly common UX pattern in enterprise applications, I decided to present this pattern as a potential component to our design system. That way we wouldn't have to re-invent the wheel every time a design needs breadcrumbs.

## Design
I proposed different Breadcrumb component designs to the product design team based on research done on breadcrumb UX patterns. The team gave me feedback on the proposed design options, allowing me to land on a design that was conscious of header space, and fit well within our visual system.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-1.png" title="Breadcrumb variations" />
	<figcaption class="media-caption center">Breadcrumb variations</figcaption>
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
Throughout the process of developing Breadcrumb, I kept engineering and design in the loop and often seeked feedback from others, as seen on my development proposal. This lead me to developing this component completely in the open.

Upon releasing Breadcrumb to our component library, and the documentation to our live facing systems website, I plugged Breadcrumb to design systems, engineering and product channels, to announce our brand new tool in our toolkit.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-6.png" title="Putting Breadcrumb in the open" />
	<figcaption class="media-caption center">Putting Breadcrumb in the open</figcaption>
</figure>

## Adoption
Breadcrumb's first adoption was, as intended, for the new folders feature in Asset Library. 

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-3.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb in use inside Sprout Social's Asset Library</figcaption>
</figure>

Sprout's marketing software, <a href="https://sproutsocial.com/landscape/" title="Landscape" target="_blank">Landscape</a>, makes use of our component library, and it has also adopted the use of Breadcrumb.

<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-4.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Breadcrumb in use on <a target="_blank" title="Landscape" href="https://sproutsocial.com/landscape/">Landscape</a></figcaption>
</figure>

## Improving Breadcrumb
After user adoption, I assessed if the component was truly living up to its usefulness. 

Since the Asset Library folders feature introduced the possibility of really long structures of folders, I wanted to help developers and designers let the breadcrumb serve its main purpose without having to worry about the potential of long breadcrumbs. 

I introduced an overflow property that allows developers to split a breadcrumb in half, while focusing on the current page and its closest parents. The prop also changes the breadcrumb design adding a button that gives quick access to the rest of the truncated items.


<figure>
	<img src="{{ site.baseurl }}/assets/images/breadcrumb-5.png" title="Breadcrumb development proposal" />
	<figcaption class="media-caption center">Introducing an overflow menu</figcaption>
</figure>
