---
layout: post
title:  "Skeleton pattern and component for Seeds"
date:   2020-6-12
categories: [design systems]
hero_image: "/../assets/images/8-14-2020-hero.png"
hero_color: "#B5FF8F, #8FD5FF"
role: User Interface Design and Front-end Development
team: Design Systems, Front-end Developer, and me
problem_statement: "Design, build, document, and release a skeleton component for Sprout Social's design system."
---

{% include team_and_role.md %}

I was tasked to design an experience for content loading at separate speeds on Sprout Social's month view calendar. I was inspired by our analytics team use of a skeleton of the UI for loading content.

I took a pattern inside the Analytics portion of our app, and brought it to our design system Seeds, so that we could all share it across the product.

<figure>
	<img src="../../../../../../assets/images/skeleton-1.png" title="Use of a skeleton loaders in Analytics" />
	<figcaption class="media-caption center">Use of a skeleton loaders in Analytics</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/skeleton-2.png" title="Loaded content after the skeleton screen" />
	<figcaption class="media-caption center">Loaded content after the skeleton screen</figcaption>
</figure>

I researched skeleton loaders, and learned that they provide a perceived performance experience to users, making them feel like there's little to no wait time when content loads. Perceived performance is achieved when we put skeleton in place of the content that will be loaded. Most of the content in our app is either a circular avatar, or square shaped or text. The Skeleton component is flexible and let's the user set a height, width, and border radius in order to achieve almost any shape of content inside the Sprout app.

<figure>
	<img src="../../../../../../assets/images/skeleton-3.png" title="More use of a skeleton loaders in Analytics" />
	<figcaption class="media-caption center">More use of a skeleton loaders in Analytics</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/skeleton-4.png" title="Implementing skeleton loading in a calendar view" />
	<figcaption class="media-caption center">Implementing skeleton loading in a calendar view</figcaption>
</figure>

Below I used Skeletons to give a better loading experience for Asset Library in Sprout, as a great amount of  different sized assets and folders are fetched.

<figure>
	<img src="../../../../../../assets/images/skeleton-5.png" title="Implementing skeleton loading when fetching assets in the asset library" />
	<figcaption class="media-caption center">Implementing skeleton loading when fetching assets in the asset library</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/skeleton-6.png" title="Loaded content in asset library after skeleton screen" />
	<figcaption class="media-caption center">Loaded content in asset library after skeleton screen</figcaption>
</figure>