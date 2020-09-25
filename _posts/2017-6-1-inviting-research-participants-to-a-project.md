---
layout: post
title:  "Inviting research participants to a project"
date:   2017-6-1
categories: [user experience, user interface]
hero_image: "/../assets/images/6-1-2017-hero.png"
hero_color: "#FF8F8F, #FFBE8F"
problem_statement: "Researchers need a better way to invite research participants to their projects."
---
The invites feature launched to facilitate the process of building and launching a research study with dscout. Our user research, prototyping, and testing, helped us gather the essential parts that researchers need to launch their project.

With invites, we focused on the invitation of research participants to a researcher's project. We catalogued all of the activities in the research process—writing the questions script, inviting participants, conducting research analysis, managing research participants, and many more—and we used this data to understand the research process in dscout. Our goal was to determine the best place for inviting participants in the researcher flow.

We conducted internal card sorting with team members from user success, and research. In this activity we asked our colleagues to write down on each card each part of the researcher process in dscout, then group the parts that go together, and finally put them in the order that they happen. This activity showed us a lot of different perspectives and commonalities between our internal power users' mental models. This helped us come up with a hypothesis of where the invite process should be in dscout's research flow.

<figure>
	<img src="../../../../../../assets/images/card-sort.png" title="Card sorting" />
	<figcaption class="media-caption center">Card sorting</figcaption>
</figure>

We came up with designs, and user tested them with different prototypes. Finally, we concluded that inviting participants to a research project in dscout fits naturally in the Mission Builder, where researchers fill out their project's details and build their research questions script.

### What you need for launching your research project
We wanted to gather all of the essential pieces for launching a research project:

1. Details (Instructions and Overview)
2. The question script (Research questions)
3. Participants

In our UI, it made sense to include an “Invites” tab where researchers can add a list of participants to their project inside the Mission Builder. This change would leave dscout's Scout Management for purely tracking scout progress and communicating with scouts.

### Inviting research participants

There is an “Invites” tab in the Mission Builder next to “Details” and “Questions.” You can access “Invites” on the status bar as well.

<figure>
	<img src="../../../../../../assets/images/invites-1.png" title="The invites tab" />
	<figcaption class="media-caption center">The invites tab</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/invites-2.png" title="Manually entering scouts" />
	<figcaption class="media-caption center">You need research participants when you launch your research</figcaption>
</figure>

Inside “Invites” researchers will encounter an invitation UI—consisting of an invitation message (the email that participants get as an invite to join a research project).

Besides the invitation, researchers can add participants to their project. To add scouts they click on the “Add Scouts” call to action. Below the CTA note that the first wave of scouts is invited upon launching a mission—first wave scouts are automatically invited on launch, and will show up in Scout Management with the status of “Invited” until they accept the mission invitation.

Scouts can be added manually by entering their first name, last name, and email—one per line. Likewise, we’ve added the capability of reading a CSV file, which can be a list of participants entered by the same formula: first name, last name, and email.

<figure>
	<img src="../../../../../../assets/images/invites-3.png" title="Adding scouts from a previous mission" />
	<figcaption class="media-caption center">Adding scouts manually</figcaption>
</figure>

Additionally, researchers can also pull scouts from a previous mission. They can also pull scouts with the help of filters that let them select only mission accomplished scouts, for example.

<figure>
	<img src="../../../../../../assets/images/invites-4.png" title="Complete invitation" />
	<figcaption class="media-caption center">Adding scouts from a previous mission in the project</figcaption>
</figure>

### Moving scouts from a screener to a mission

If a researcher needs to add scouts to their mission from a screener, they should simply access Applications and select all of the desired scouts and promote them to their mission. Once that's been done, these scouts will show up under “Scouts” in the “Invites” tab on the Mission Builder.

### Launching a mission after writing your research

Researchers can launch their mission once they have added mission overview, details, research questions, and once they have added participants (participants are displayed under “Scouts” in “Invites” once added). The invites on the status bar also contain the count of invitees.

When researchers hit launch on the status bar, they will see a special modal that let’s them review their invitation message, invitees, and also reminds them that the participants added to “Invites” before launch are being invited upon launch.

<figure>
	<img src="../../../../../../assets/images/invites-5.png" title="Launch modal" />
	<figcaption class="media-caption center">Once scouts have been added to your mission, you can launch it!</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/invites-6.png" title="Invites during an open mission" />
	<figcaption class="media-caption center">Launching your mission modal</figcaption>
</figure>

After launching, researchers are taken to Scout Management, where they can see the list of scouts they invited.

### Inviting more participants after launching a research project

Whenever researchers would like to invite more waves of scouts after launching, they can go back to the “Invites” tab in the Builder. The previous invitation message will be saved there as well.

Since the researcher is not about to launch their project again, future waves of scouts will receive invites when a researcher clicks on a green button that says “Send Invitations” bellow “Add Scouts”.

<figure>
	<img src="../../../../../../assets/images/invites-7.png" title="Adding a new scout to an open mission" />
	<figcaption class="media-caption center">Researchers can still add more scouts after a mission is open</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/invites-8.png" title="You're inviting more scouts modal" />
	<figcaption class="media-caption center">Adding scouts to an open mission</figcaption>
</figure>

<figure>
	<img src="../../../../../../assets/images/invites-9.png" title="You're inviting more scouts modal" />
	<figcaption class="media-caption center">You're inviting more scouts modal</figcaption>
</figure>
