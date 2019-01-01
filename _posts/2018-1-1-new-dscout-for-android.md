---
layout: post
title:  "New dscout for Android"
date:   2018-1-1
categories: mobile design
hero_image: "/../assets/images/1-1-2018-hero.png"
hero_color: "#197FF6"
---
The dscout Diary researcher experience was redesigned with the introduction of [Mission parts](/product/design/analyzing-entries-with-dscout/). Now Missions are capable of being divided up into parts, so researchers don't have to create multiple Missions and analyze data across these separate missions.

I updated the Scout experience design for the Android application, working alongside our design director, Timo Kuhn, who was responsible for the iOS redesign.

### Objective
- Update the Android Scout app to conform to the new dscout Diary researcher experience.

### Designing the Scout experience
I researched and learned Material Design best practices from [Google's guide on Material Design](https://material.io/design/).

My goal was quite broad--the Scout experience from login all the way to the completion of a mission part.

I also designed additional features that became priority along the way, such as an upload progress screen where Scouts can track their entry uploads.

Beginning with the login form, I utilized Material Design elements and components, such as inputs, buttons, and overall form design practices.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-1.png" title="Android app - Login" />
	<figcaption class="media-caption center">Android app - Login</figcaption>
</figure>

The app was redesigned to support Mission opportunities, Diary Missions, and Live Missions. We revised the layout of the Missions screen to handle all projects under accordions: in progress, new, or closed (dscout staff members can see projects in draft as you can see below).

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-2.png" title="Android app - Login" />
	<figcaption class="media-caption center">Android app - Opportunities and missions</figcaption>
</figure>

Under Missions, Scouts can navigate to the "New" accordion tab to see new Missions they have qualified for. On the Mission card component there are important details, such as how many parts the mission will have.

When a Scout taps on a Mission card they are greeted with an overlay with the full mission description and details.

Once a Scout accepts the Mission through the overlay, they arrive on the Mission screen, where they can start submitting entries to open Mission parts.

Scouts can tell new parts apart from parts in progress, or from locked parts, by color. New parts are always green, whereas parts in progress are blue. Parts that are locked are grey. Locked parts occur in manual Missions--where researchers can control when the parts open to Scouts.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-3.png" title="Android app - Accepting a new mission" />
	<figcaption class="media-caption center">Android app - Accepting a new mission</figcaption>
</figure>

Once a Scout starts an entry, they first see the entry's instructions. Following that, they can start answering the entry's questions.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-4.png" title="Android app - Completing mission parts" />
	<figcaption class="media-caption center">Android app - Completing a mission part</figcaption>
</figure>

Scouts don't have to finish an entry when they start it. Sometimes it takes time for Scouts to come up with ellaborate answers, or for them to respond to video prompts. We save an entry's progress so Scouts can complete it at a later time.

Once a Scout returns to the Mission to complete their entry, they will see the paused entry as a square marked with [...]. They can tap and hold to delete the draft entry, or tap once to continue answering prompts from where they left off.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-5.png" title="Android app - Deleting an incomplete entry" />
	<figcaption class="media-caption center">Android app - Deleting an incomplete entry</figcaption>
</figure>

When a Scout submits an entry, they see a spinner icon on their entry, indicading that it's being uploaded.

Whenever an error occurs with an entry upload, for example a media attached was too big, the entry component turns red to warn Scouts something went wrong, and an error message pops up.

If an entry submission is successful, the entry gets a number to indicate how many entries a Scout has submitted so far out of the total required. The entry media renders on the entry's component as a background image if there is a media.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-6.png" title="Android app - Entry uploading" />
	<figcaption class="media-caption center">Android app - Entry uploading</figcaption>
</figure>

Scouts can access the history of Missions that have closed that they participated in. They're still able to message with their Mission advisor in a closed Mission.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-7.png" title="Android app - Closed missions" />
	<figcaption class="media-caption center">Android app - Closed missions</figcaption>
</figure>

Through a Scout's account settings they can access the "Entry Upload Progress". This screen is particularly helpful for submissions that contain big media attachments. Scouts are able to cancel uploads and retry them. Uploads occur in a queue in the order they were submitted.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-8.png" title="Android app - Entry upload progress" />
	<figcaption class="media-caption center">Android app - Entry upload progress </figcaption>
</figure>

With the release of [dscout Live](https://dscout.com/live) we were able to start implementing small mobile features that supplement the Scout web Live experience. For example, Scouts are able to see the time for scheduled Live interviews and get a link to their session. They can also see details such interview time length and reward.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-9.png" title="Android app - dscout Live support" />
	<figcaption class="media-caption center">Android app - dscout Live support </figcaption>
</figure>

The following are new designs for a new Explore tab where you apply for quick tasks and Mission opportunities, and a Rewards tab.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-10.png" title="Android app - dscout Live support" />
	<figcaption class="media-caption center">Android app - Rewards and Explore</figcaption>
</figure>

### Scout Feedback

The dscout app acquired over 1,570 reviews on the Google Play store and a 4/5 rating.

The following are a couple recent reviews we have received from Scouts on the Google Play store.

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
