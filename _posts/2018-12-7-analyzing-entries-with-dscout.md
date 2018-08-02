---
layout: post
title:  "Analyzing entries with dscout"
date:   2017-12-7
categories: product design
hero_image: "/../assets/images/12-7-2017-hero.png"
hero_color: "#FEFEFE"
---
Our teams of product and engineers took over a year to overhaul the Diary product at dscout. We implemented a new interface which improves how projects are structured. With this redesign we facilitated the experience of conducting research analysis on the responses (entries) submitted by scouts.

Historically, a researcher would create a project that was made out of one or more missions. They often wanted participants to go through distinct tasks, so they would accomplish this by making scouts go through multiple mission. However, when researchers wanted to see all of their scouts response data across every mission, they couldn't—because each mission was structured like an individual part of a project, in silos separated from one another, which made it hard to compare data across missions. Each mission had its own entries viewer, separated from the other missions inside the project.

With the new Diary release, we broke missions up into parts. Now researchers don't have the need to create multiple missions because a mission can be divided up into parts. For example: before researchers wanting to run a diary study of three distinct tracks, hits, misses, and wishes, would split their project up into three missions. Now researchers can split one mission into three parts. Subsequently, their entries viewer will contain data submitted across the whole mission, which is the entire project.

### Goals
* Allow researchers to see all submissions data from their project contained in one place for easy comprehension and analysis
* Adapt to the new design system (we call our design system Particle) as product of redesigning this section of our application

<figure>
	<img src="../../../../../../assets/images/entries-1.png" alt="Entering testers" />
	<figcaption class="media-caption center">Multiple scout entries across one mission divided in three parts. The whole breadth of your research</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/entries-2.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer: sorting by part</figcaption>
</figure>

Inside the entries viewer, the default is the grid view. The grid view allows researchers to see submissions across all parts of their mission shaped as cards, with a thumbnail and submission details.

You can sort results by scout name, date, part, or group.

<figure>
	<img src="../../../../../../assets/images/entries-3.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer: mission notes</figcaption>
</figure>

Researchers can leave notes as reminders or observations. As part of notes they can highlight text on the text submissions and transcripts. Researchers can access these notes easily on the sidebar.

<figure>
	<img src="../../../../../../assets/images/entries-4.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer: mission comments</figcaption>
</figure>

Researchers can leave comments on entries. Unlike entry notes, comments are seen by research participants—who can reply to them.

<figure>
	<img src="../../../../../../assets/images/entries-5.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer: filtering by question and demographic attributes</figcaption>
</figure>

A unique and powerful feature dscout's entries viewer is the capability of filtering participants responses by attributes such as demographics, or by answers to a question.

<figure>
	<img src="../../../../../../assets/images/entries-6.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/entries-7.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer</figcaption>
</figure>

A researcher can also export data from the viewer. By clicking on the export icon on the sub-navigation, they're prompted with a modal that lets them pick what kind of export they want, that being all entries media, or a csv of entry data for example.

<figure>
	<img src="../../../../../../assets/images/entries-8.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/entries-9.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer</figcaption>
</figure>

By navigating to the Summary tab in the Entries viewer, a researcher can see quantifiable data on participants' demographics and answers to close-ended questions.

<figure>
	<img src="../../../../../../assets/images/entries-10.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer</figcaption>
</figure>

By navigating to the Analysis tab, a researcher will see bubble charts that represent word frequency and parts of speech from open-ended scout responses.

<figure>
	<img src="../../../../../../assets/images/entries-12.png" alt="Entering testers" />
	<figcaption class="media-caption center">Entries viewer</figcaption>
</figure>

Lastly, the Map view is a visual of where scouts from a mission are located.
