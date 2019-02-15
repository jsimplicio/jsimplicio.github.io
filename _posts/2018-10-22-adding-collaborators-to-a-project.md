---
layout: post
title:  "Adding collaborators to a project"
date:   2018-10-22
categories: product design
hero_image: "/../assets/images/10-22-2018-hero-2.png"
hero_color: "#ECF3FD"
tags: [dscout, software development, design, product, ]
---

With the new designs of [the project page and the dscout home](https://julessimplic.io/product/design/new-dscout-home-and-project-page/), I tackled the feature of adding collaborators to a project.

In the old version, adding collaborators wasn't a clear experience. There was lots of fine print on the modal, and ultimately, it was hard to tell when you succesfully added people to your project.

### Objective
* Re-design the experience of adding collaborators to a project.

### Key result
* The new experience facilitates the act of adding members to a project by fixing the complicated old user experience.

Before the engineering kick off meeting where we discuss how a feature is going to be built, I iterated on different designs during the design sprint.

The following are old versions which I iterated on through during the sprint.

The design below only has one main action button "Add to Project". When a researcher adds a person to the project, they show up on the table on a green row, so it looks like they perhaps are already added. What happens if a researcher tries to exit and they have queued up people on the table? We couldn't open a modal on top of this modal.

<figure>
	<img src="{{ site.baseurl }}/assets/images/old-1.png" title="Adding project collaborators - Concept" />
	<figcaption class="media-caption center">Adding project collaborators - Concept</figcaption>
</figure>

The design below separates viewers from members. While this keeps the distinction between the two kinds of user types, it makes the experience confusing by having one input that adds people to two different tables. This also has the same problem from the design above, where a researcher can queue people and try to exit the modal.

<figure>
	<img src="{{ site.baseurl }}/assets/images/old-2.png" title="Adding project collaborators - Concept" />
	<figcaption class="media-caption center">Adding project collaborators - Concept</figcaption>
</figure>

The design below has two different tabs depending on user type. This design carries the same problem of the design above, managing users in two different tables in one modal. Researchers would also have the problem of exiting the modal with people queued on the tables.

<figure>
	<img src="{{ site.baseurl }}/assets/images/old-3.png" title="Adding project collaborators - Concept" />
	<figcaption class="media-caption center">Adding project collaborators - Concept</figcaption>
</figure>

Lastly, I tried a design more close to Google Docs. A researcher can include a note to who they are inviting and they can set the user's permissions at the modal, and provide people a link to the project. Unfortunately, setting a user permission type only happens in the Account Management page, and we're also not technologically ready for generating a project link that can be accessed by a member and a viewer. However, this design helped me think for the final iteration.

<figure>
	<img src="{{ site.baseurl }}/assets/images/old-4.png" title="Adding project collaborators - Concept" />
	<figcaption class="media-caption center">Adding project collaborators - Concept</figcaption>
</figure>

For the final design, I was inspired by my last design iterations and Google's method of sharing a file with collaborators.

A researcher can only exit the modal by clicking on "Done". People are queued on the input instead of on the table, so its clear that they are not on the project yet. When there are people on the input a user can either "Add" them or Cancel, at which point the modal returns to the "Done" state.

<figure>
	<img src="{{ site.baseurl }}/assets/images/collaborators-1.png" title="Adding project collaborators" />
	<figcaption class="media-caption center">Adding project collaborators</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/collaborators-2.png" title="Adding project collaborators" />
	<figcaption class="media-caption center">Adding project collaborators</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/collaborators-3.png" title="Adding project collaborators" />
	<figcaption class="media-caption center">Adding project collaborators</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/collaborators-4.png" title="Adding project collaborators" />
	<figcaption class="media-caption center">Adding project collaborators</figcaption>
</figure>

Viewers and members are visibly different on the table and on the input.

<figure>
	<img src="{{ site.baseurl }}/assets/images/collaborators-5.png" title="Adding project collaborators" />
	<figcaption class="media-caption center">Adding project collaborators</figcaption>
</figure>

When people are succesfully added to the project, the researcher receives a notification, at which point the modal return to the "Done" state, with the table open to show the newly added collaborators.

<figure>
	<img src="{{ site.baseurl }}/assets/images/collaborators-6.png" title="Adding project collaborators" />
	<figcaption class="media-caption center">Adding project collaborators</figcaption>
</figure>

Below, I used our Pill React component on CodePen to generate the new different pill designs that we have throghout our platform.

<p data-height="475" data-theme-id="dark" data-slug-hash="yxRPwX" data-default-tab="result" data-user="jsimplicio" data-pen-title="Pills" class="codepen">See the Pen <a href="https://codepen.io/jsimplicio/pen/yxRPwX/">Pills</a> by Jules (<a href="https://codepen.io/jsimplicio">@jsimplicio</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
