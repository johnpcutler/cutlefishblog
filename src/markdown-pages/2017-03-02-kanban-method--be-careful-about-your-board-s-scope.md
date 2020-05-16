---
path:	"/blog/kanban-method-be-careful-about-your-boards-scope"
date:	"2017-03-02"
title:	"Kanban Method: Be Careful About Your Board’s Scope"
image:	"../images/defaultimage.png"
---

When using the [Kanban Method](http://www.djaa.com/principles-general-practices-kanban-method), one of the toughest dilemmas is figuring out how far to the left and right to extend the board, and how to handle outside resource dependencies.

In theory, you are supposed to “start with what you do now”. Where you are now might involve a broad sphere of interaction. Some examples might include:

* The availability of your UX resource is dictated by his involvement with other dev teams
* Your team requires Ops involvement to deploy features to production
* Far upstream, one of your team members is called on to provide an estimate
* A portfolio planning process “cues up” your next “project”
* UX “gets ahead” of some work
* Far downstream, a customer provides feedback. Turns out you missed the mark
* You need another team to review your PRs to their service
* Someone in procurement has to sign off on a contract for a new monitoring tool
For the systems thinkers among us, it can be tempting to push to visualize everything. Try it, and you’ll soon figure out the risks involved.

I remember the first time I walked over to an epic kanban board with a ball of string and some tape and added some portfolio planning steps to the left, a bunch of dependencies (with the string) to the middle, and some validation steps to the right culminating with “delivered desired outcome”.

A shitstorm swept in from across the building. What I added was technically correct — I was starting with what we did now — but seeing it up on the wall inspired some heated arguments. Down came the board.

Why? In this case, the kanban board inspired some cognitive dissonance. It was widely circulated that front-line teams were “autonomous” and in full control of their destiny. The reality was a little messier. For example, there was an upstream analysis/validation phase that lacked visibility, and meant that teams were frequently surprised with new projects. The fact that this was happening was not a secret. But seeing it in all its glory got people fired up (both managers and engineers).

Organizations and individuals tend to assume a strange equilibrium around resource constraints, impediments, toxic people, inexperienced teams, handoffs, big batches, high utilization, and long feedback loops. There may be a gradual “drift into failure” ([see Sidney Dekker](https://www.amazon.com/Drift-into-Failure-Components-Understanding/dp/1409422216)), but for the most part people pragmatically absorb the challenge. After a certain point, you stop making a fuss and do your best.

My advice is to be very, very cautious about boiling the ocean. Take small steps to indicate the dependencies while resisting the urge to visualize the work of other teams/individuals/resources. Figure out how to visualize points “off the board” (these can literally be nodes, lanes, stickies, etc.) without threatening people.

