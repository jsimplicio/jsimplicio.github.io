---
layout: post
title:  "Making a home, and re-designing the project page"
date:   2018-12-25
categories: product design
hero_image: "/../assets/images/12-25-2018-hero.png"
hero_color: "#197FF6"
tags: [dscout, software development, home, React app]
---
We designed and launched a home for the dscout web app. The app lacked a clear home, researchers upon logging in would arrive at the last active project. First time researchers would arrive at an empty first project, which was a confusing experience.

I was lead designer and Scrum Master on the project, and I also lead the re-design of the dscout project page, which we tackled alongside building the home.

### Objectives
* Provide a home for the dscout web app.
* Bring the project page to the v4 API.

### Key Results
* The dscout web app has a clear home in its structural design.
* The project page is revitalized with core project information and components.

### The new home

Dscout's home has a main column with a researcher's collection of projects. There is a primary call to action to create a new project to the left of the main column. To the right, there is a sidebar with account contact information, and help docs with help chat links.

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-1.png" title="Home Page" />
	<figcaption class="media-caption center">Home Page</figcaption>
</figure>

Researchers can use the main content's search bar to quickly look for projects , missions, or live panels.

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-2.png" title="Search for projects, missions, and screeners" />
	<figcaption class="media-caption center">Search for projects, missions, and screeners</figcaption>
</figure>

When a project is done, a researcher can mark it as complete, as if they're archiving a project. This project will then move to the completed projects tab on the main content.

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-3.png" title="Complete a project" />
	<figcaption class="media-caption center">Complete a project</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-4.png" title="Complete a project" />
	<figcaption class="media-caption center">Complete a project</figcaption>
</figure>

There's also the capability to pin projects to the top of the list. This is a power-up for long project lists.

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-5.png" title="Pin project to top" />
	<figcaption class="media-caption center">Pin project to top</figcaption>
</figure>

A researcher is able to delete projects under some caveats. Dscout does not allow researchers to delete projects which contain active or completed (closed) missions or screeners.

If a project is in draft and does not contain any launched missions, researchers are able to delete it. Below, we see a project which contains the trash icon and projects which don't.

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-6.png" title="Delete a project" />
	<figcaption class="media-caption center">Delete a project</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-7.png" title="Delete a project modal" />
	<figcaption class="media-caption center">Delete a project modal</figcaption>
</figure>

If a researcher is for example working under a big organization, they may be using different dscout accounts per team. In the following example, you see an account dropdown that lists two different accounts that this researcher is part of. This is the dropdown where a researcher is able to go between dscout accounts.

<figure>
	<img src="{{ site.baseurl }}/assets/images/home-8.png" title="Switching dscout accounts" />
	<figcaption class="media-caption center">Switching dscout accounts</figcaption>
</figure>

### The New Project Page

We have broken up what makes part of a dscout project into actionable items.

On the left sidebar, a quick click away to create a screener, mission, or panel.

The main content populates a researchers' diary missions in a container, followed by panels and screeners in the same fashion.

The right sidebar provides contact information about the project lead and dscout contact, with an addition of help links.

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-1.png" title="A dscout project" />
	<figcaption class="media-caption center">A dscout project</figcaption>
</figure>

It's easy to create a new screener through the "Create Screener" call to action. A screener can be started froms cratch or copied from a previous one.

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-2.png" title="Create a new Screener or copy from previous" />
	<figcaption class="media-caption center">Create a new Screener or copy from previous</figcaption>
</figure>

Below the Screener call to action, a researcher can create a Diary mission through the "Create Diary Mission" action. Not only can missions be created from scratch, they can be copied from a previous mission, or be created based on a template.

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-9.png" title="Copying a mission (or screener) from a previously created one" />
	<figcaption class="media-caption center">Copying a mission (or screener) from a previously created one</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-3.png" title="Create a new Diary Mission, copy from previous, or create from a template" />
	<figcaption class="media-caption center">Create a new Diary Mission, copy from previous, or create from a template</figcaption>
</figure>

There are instances where a researcher might need to move a mission, screener, or panel into another project. For that case, we provide an action through an actionable arrow icon which opens a dropdown where a researcher can pick a project within their account for this mission/panel/screener to be moved to.

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-4.png" title="Move a Mission or Screener" />
	<figcaption class="media-caption center">Move a Mission or Screener</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-5.png" title="Move a Mission or Screener" />
	<figcaption class="media-caption center">Move a Mission or Screener</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-6.png" title="Move a Mission or Screener" />
	<figcaption class="media-caption center">Move a Mission or Screener</figcaption>
</figure>

Screeners can be deleted if they're in draft mode.

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-7.png" title="Delete a draft Mission or Screener" />
	<figcaption class="media-caption center">Delete a draft Mission or Screener</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/project-8.png" title="Delete a draft Mission or Screener modal" />
	<figcaption class="media-caption center">Delete a draft Mission or Screener modal</figcaption>
</figure>