---
layout: post
title:  "dscout mission invites"
date:   2017-6-1
categories: product design
subtitle: "Inviting participants to a research project"
tags: ["user research", "agile software development",
"prototyping", "user interface design"]
---
After our redesign of the Mission Builder, the product team continued focusing on other aspects of the experience of researchers creating projects with dscout.

The invites feature came out of our goal to streamline the research process, and to keep facilitating the use of dscout for researchers. Our research process, prototyping, and testing, ended up making sense of all of the essential parts for launching a research project—the research's mission details, the research itself, and the research participants.

For the invites project, we focused on the invitation of research participants to your project. Where does the process of inviting participants to a researcher's mission fits best? This question generated many ideas in our team's minds. With our users in mind, we proceeded to research and design a way to tackle this question.

We catalogued all of the activities in the researcher process—writing the questions script, inviting scouts, research analysis, managing research participants, etc.—and we used this data understand the researcher process. We wanted to determine the most intuitive place for inviting participants. We conducted an internal card sorting activity with team members from user success and research—they're the teams that use our platform as researchers, and are power users. In this activity we asked our colleagues to write down in each card each part of the researcher process, and group parts that go together, and then put them in the order they happen. The activity showed us a lot of different perspectives and also commonalities between peoples mental models. This helped us formulate our hypothesis of where the inviting participants process should be located in the research experience.

<figure>
	<img src="../../../../../../assets//images/card-sort.png" alt="Card sorting" />
	<figcaption class="media-caption center">Card sorting</figcaption>
</figure>

We came up with designs, and iterated on them through various prototypes, and concluded that the activity of inviting participants fits appropriately inside the Mission Builder, where researchers fill out their mission details and build their question script.

#### Why?
This is tied to our goal of getting together all of the essential pieces for launching your research:

1. Details (Instructions and Overview)
2. The question script (Your research)
3. Participants

It made sense to include an “Invites” tab where you can add your list of scouts inside the Mission Builder, next to “Details” and “Questions” . This also leaves Scout Management for purely tracking scout progress and communicating with scouts.

#### How inviting scouts works

There is an “Invites” tab in the builder next to “Details” and “Questions.” You may also notice “Invites” showing up on the status bar.

<figure>
	<img src="../../../../../../assets//images/invites-1.png" alt="The invites tab" />
	<figcaption class="media-caption center">The invites tab</figcaption>
</figure>

Inside “Invites” you will encounter an invitation—which consists of your invitation message (the email scouts get to join your mission), and scouts.

To add scouts simply click on the “Add Scouts” call to action. Note that below the CTA we tell you that your first wave of scouts is invited upon launching your mission—first wave scouts are automatically invited on launch, and will show up in Scout Management with the status of “Invited.”

You can add scouts manually by entering in the text area First Name, Last Name, and email—one per line. Or, we’ve added the capability of reading a CSV file, which can be a list of scouts entered by the same formula: First Name, Last Name, and email.

<figure>
	<img src="../../../../../../assets//images/invites-4.png" alt="Manually entering scouts" />
	<figcaption class="media-caption center">Manually entering scouts</figcaption>
</figure>

You can also pull scouts from a previous mission. You can pull scouts by filtering and picking only mission accomplished scouts, scouts who submitted entries, or all scouts.

<figure>
	<img src="../../../../../../assets//images/invites-2.png" alt="Adding scouts from a previous mission" />
	<figcaption class="media-caption center">Adding scouts from a previous mission</figcaption>
</figure>

#### Pulling Scouts From a Screener?

You need to add scouts to your mission by going to the screener Applications and selection scouts and promoting them to your mission. Once you’ve done this, they will be populated in the “Invitation” container under “Scouts” in “Invites.”

#### Launching Your Mission

Once you’ve added scouts, you should see them populated on the bottom of the invitation container. The “Invites” status in the status bar will also contain the count of invitees.

<figure>
	<img src="../../../../../../assets//images/invites-5.png" alt="Complete invitation" />
	<figcaption class="media-caption center">Complete invitation</figcaption>
</figure>

When you hit launch on the status bar, you will see a special modal that let’s you review your invitation and reminds you that this first wave is being invited upon launch. (During this point, our DIY users also go through the payment process)

<figure>
	<img src="../../../../../../assets//images/invites-6.png" alt="Launch modal" />
	<figcaption class="media-caption center">Launch modal</figcaption>
</figure>

After launching, you’re taken to Scout Management, where you will see your list of scouts added with the status of “Invited.”

#### Post Launch

Whenever you would like to invite more waves of scouts after launching, you can go back to the "Invites" tab in the Builder. Your previous invitation message will be saved there as well.

Since you're not going to re-launch your mission for future waves of scouts, now you will see a green button that says: “Invite Scouts.” You will send their invitations by clicking on this button after adding scouts.

<figure>
	<img src="../../../../../../assets//images/invites-7.png" alt="Invites during an open mission" />
	<figcaption class="media-caption center">Invites during an open mission</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets//images/invites-8.png" alt="Adding a new scout to an open mission" />
	<figcaption class="media-caption center">Adding a new scout to an open mission</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets//images/invites-9.png" alt="You're inviting more scouts modal" />
	<figcaption class="media-caption center">You're inviting more scouts modal</figcaption>
</figure>
