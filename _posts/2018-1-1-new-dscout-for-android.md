---
layout: post
title:  "New dscout for Android"
date:   2018-1-1
categories: mobile design
hero_image: "/../assets/images/1-1-2018-hero.png"
hero_color: "#197FF6"
---
The researcher experience with dscout Diary was redesigned when we introduced [mission parts](/product/design/analyzing-entries-with-dscout/). Now missions are capable of being divided up into parts, so researchers don't have to analyze data across separate missions.

I was tasked with updating the scout experience for the Android application, working alongside our design director, Timo Kuhn, who was responsible for the iOS redesign.

### Goal
- Update the Android app to conform to the new scout dscout Diary experience.
	- Bonus: modernize the Android app's outdated design.
	- Bonus: handle some aspects of [dscout Live](https://dscout.com/live) in beta.

### Process
I started by researching and learning from [Google's guide on Material Design](https://material.io/design/).

I focused on the experience from login to completion of a mission part. I also designed additional features, such as an upload progress screen where scouts can track their media uploads.

The images below display the new experience for scouts with the launch of the new dscout Diary.

The following image shows an onboarding carousel design where I created small illustrations to go along each slide.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-0.png" alt="Android app - Welcome carousel" />
	<figcaption class="media-caption center">Android app - Welcome carousel</figcaption>
</figure>

The following login form shows the use of Material Design elements, such as inputs, buttons, and overall form design practices.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-1.png" alt="Android app - Login" />
	<figcaption class="media-caption center">Android app - Login</figcaption>
</figure>

The app home was redesigned to support mission opportunities, diary missions, and live missions. We revised the layout of the missions home to handle projects in progress, new, or closed under accordions.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-2.png" alt="Android app - Login" />
	<figcaption class="media-caption center">Android app - Opportunities and missions</figcaption>
</figure>

Under missions, scouts can navigate to the "new" tab to see new missions they have qualified for. On the mission card there are important details, such as how many parts the mission will have.

When a scout taps on a mission card they are greeted with an overlay with the full mission description and the same important mission details the card had.

Once a scout accepts the mission through on the overlay, they arrive on the mission where they can start to submit entries to open mission parts.

Scouts can tell new parts apart from parts in progress, or from locked parts, by color. New parts are always green, whereas parts in progress are blue. Parts that are locked are grey. Locked parts occur in manual missions where researchers control when the parts open to scouts.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-3.png" alt="Android app - Accepting a new mission" />
	<figcaption class="media-caption center">Android app - Accepting a new mission</figcaption>
</figure>

Once a scout starts an entry, they first see the instructions. Following that, they start answering the entry's questions.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-4.png" alt="Android app - Completing mission parts" />
	<figcaption class="media-caption center">Android app - Completing a mission part</figcaption>
</figure>

Scouts don't have to finish an entry when they start one. We are aware that sometimes it takes time for them to come up with ellaborate answers, or for them to respond to video prompts.

Once a scout returns to the dscout app to complete an entry, in the mission they will see their paused entry as a square marked with [...]. They can tap and hold to delete the draft entry, or tap once to continue answering prompts from where they left off.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-5.png" alt="Android app - Deleting an incomplete entry" />
	<figcaption class="media-caption center">Android app - Deleting an incomplete entry</figcaption>
</figure>

When a scout submits an entry, they will see the entry component with a spinner, indicating that their submission is uploading.

Whenever there is an error with an entry uploading, for example a media attached was too big, the entry component changes to warn you something went wrong, and an error message pops up.

If an entry submission is successful, the entry media image renders on the entry component if there is a media attached to the entry. The entry also gets a number to indicate and guide scouts how many entries they've submitted out of the total required.

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-6.png" alt="Android app - Entry uploading" />
	<figcaption class="media-caption center">Android app - Entry uploading</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-7.png" alt="Android app - Closed missions" />
	<figcaption class="media-caption center">Android app - Closed missions</figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-8.png" alt="Android app - Entry upload progress" />
	<figcaption class="media-caption center">Android app - Entry upload progress </figcaption>
</figure>

<figure>
	<img src="{{ site.baseurl }}/assets/images/android-9.png" alt="Android app - dscout Live support" />
	<figcaption class="media-caption center">Android app - dscout Live support </figcaption>
</figure>

### Scout Feedback

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
