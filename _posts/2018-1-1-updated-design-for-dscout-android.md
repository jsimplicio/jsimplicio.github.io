---
layout: post
title:  "Updated design for dscout Android"
date:   2018-1-1
categories: mobile design
hero_image: "/../assets/images/1-1-2018-hero.png"
hero_color: "#197FF6"
---
The dscout Diary mobile experience had to be redesigned with [the introduction of mission parts](/product/design/analyzing-entries-with-dscout/). Once parts were introduced, the mobile apps had to be updated so projects with missions could be broken up into multiple parts.

I was tasked with updating the UI and UX design for the Android application, working alongside our design director, Timo Kuhn, who did the iOS redesign.

This project was interesting because I am not an Android user and I never have been. I had to start by learning Material Design. I also consulted our Android engineers, Jared Davies and Jonathan Marsh, along the way.

### Goals
* Update the Android app to conform to the new scout dscout Diary experience.
* Bonus: modernize the Android app's outdated design.
* Bonus: handle some aspects of [dscout Live](https://dscout.com/live) in beta.

### Process
I started this project by reading [Google's guide on Material Design](https://material.io/design/). The guide, being thoughtfully laid out, made it easy to find the important nuggets of information necessary to start designing.

I focused on a new experience from login to completing a mission part. I also designed supplemental features, such as an upload progress screen where scouts can track their file uploads.

All of the designs below display a new experience for scouts with the re-design and reboot of Diary missions.

The following image shows an onboarding solution where I used a default Android carousel for an introduction to the app. I created small illustrations accomplanying each slide.

<figure>
	<img src="../../../../../../assets/images/android-0.png" alt="Android app - Welcome carousel" />
	<figcaption class="media-caption center">Android app - Welcome carousel</figcaption>
</figure>

Notice me utilizing Material Design elements on the following login form, such as inputs, buttons, and overall form design.

<figure>
	<img src="../../../../../../assets/images/android-1.png" alt="Android app - Login" />
	<figcaption class="media-caption center">Android app - Login</figcaption>
</figure>

On the following designs, the app homepage was rebuilt to support mission opportunities, missions, and live missions. We revised the layout of the missions home to handle projects in progress, new, or closed under accordions.

<figure>
	<img src="../../../../../../assets/images/android-2.png" alt="Android app - Opportunities and missions" />
	<figcaption class="media-caption center">Android app - Opportunities and missions</figcaption>
</figure>

The following flow displays the process of a scout submitting an entry to a Diary mission.

Under missions, a scout can navigate to the "new" tab to see new missions they have qualified for. On the mission card important information is displayed, such as how many parts the mission will have.

When a scout clicks on the mission card they are greeted with an overlay with the mission description and the same details the mission card had.

Once a scout accepts the mission through the mission details overlay, they can start to submit entries to open mission parts.

Scouts are able to tell new parts from parts in progress, or from locked parts, by color. New parts are always green, whereas parts that have been started and are in progress are blue. Parts that are locked are grey. Locked parts occur in manual missions where researchers control when to open parts to scouts.

The color differentiation between the parts helps scouts distinguish parts from one another in order to keep progress.

<figure>
	<img src="../../../../../../assets/images/android-3.png" alt="Android app - Accepting a new mission" />
	<figcaption class="media-caption center">Android app - Accepting a new mission</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/android-4.png" alt="Android app - Completing mission parts" />
	<figcaption class="media-caption center">Android app - Completing a mission part</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/android-5.png" alt="Android app - Deleting an incomplete entry" />
	<figcaption class="media-caption center">Android app - Deleting an incomplete entry</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/android-6.png" alt="Android app - Entry uploading" />
	<figcaption class="media-caption center">Android app - Entry uploading</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/android-7.png" alt="Android app - Closed missions" />
	<figcaption class="media-caption center">Android app - Closed missions</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/android-8.png" alt="Android app - Entry upload progress" />
	<figcaption class="media-caption center">Android app - Entry upload progress </figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/android-9.png" alt="Android app - dscout Live support" />
	<figcaption class="media-caption center">Android app - dscout Live support </figcaption>
</figure>

### Feedback

The dscout app has acquired 1,576 reviews on the Google Play store and a 4/5 rating.

The following are a couple recent reviews we have received from scouts on the Google Play store.

<blockquote>
	<h3>Gwen Geronimo</h3>
	<date class="post-meta">April 25, 2018</date>
	<p>Dscout is an excellent app. It is easy to use and intuitive.</p>
</blockquote>

<blockquote>
	<h3>Adriana Auten</h3>
	<date class="post-meta">April 25, 2018</date>
	<p>I really enjoy Dscout. This app is simplistic and is easy to follow. They have many opportunities, consistently.</p>
</blockquote>

<blockquote>
	<h3>Terry Dellow</h3>
	<date class="post-meta">July 25, 2018</date>
	<p>This is WONDERFUL. I've enjoyed the missions I've participated in and made some money doing it. Highly recommended!</p>
</blockquote>
