---
path:	"/blog/responding-to-a-failed-sprint"
date:	"2017-12-05"
title:	"Responding to a “Failed” Sprint"
---

This post is about “failed” sprints and what to do about them. I use an example to demonstrate some key principles. Sprints are a forcing function meant to help us learn/improve. **The real failure is not learning from them.**

*Note: For various reasons, the boards in this post are not Kanban boards, but that is for another post.*

*Also Note: I’m going to use story counts and not story points for these examples. Why you can do this is a topic for another post.*

### End of Sprint 1

It is the end of a sprint, and the sprint board looks like this:

![](/images/1*WJVV9mY08YEX99AEwX8CGw@2x.jpeg)Hmmm. The team took on six stories, and finished four…except they didn’t finish four stories, as three of those stories have **dependencies** on a story in progress (looks like the stories were not independent)

. Only one of the stories is truly Done, and can be shipped.

What do teams typically do in this case?


> Well, we got four stories done, and got stuck on that One Story that seemed to block everything. Let’s be more reasonable, and only bring three new stories into the next sprint (so we have four stories in To Do).### Start of Sprint 2

At the start of Sprint 2, the board looks like this:

![](/images/1*hvsRZRtMiKjrnmK8zWQ87w@2x.jpeg)Hmmm. Seems like an intuitive idea (to the team)

 …


> We’ve moved from trying to get six stories done in a sprint to having four stories in the To Do column, and one story in the Doing column. That’s not even five stories! And we did get one story shipped.### End of Sprint 2

At the end of the next sprint (assuming things don’t go to plan, because they almost never do), things look like this…

![](/images/1*ExmHcuQA6sCuW-YhfdGUlw@2x.jpeg)Hmmm. What is happening here? The team finishes the story that was previously in Doing. Its dependency didn’t fair as well, and is now stuck in Doing. Two of the stories moved smoothly through to Shipped, but the third story got stuck (there was a production issue in the latter part of the week)

.

### Production Issue

If we include the production issue, the board looks like this….

![](/images/1*GtCrOlyJqtlw_6ooOkk3Lg@2x.jpeg)

There’s a whole host of things that could have had a similar impact: sickness, company events, planned vacation, a new team member struggling to get their environment in shape, or a seasoned team member hosing their machine somehow.

### So What?

The most obvious takeaway is that we should make our stories Independently Valuable (and independently releasable).

But that isn’t the whole story. There’s probably not a good deal of swarming on stories. The stories are being farmed out to individuals. The priority was not on removing that single blocking story (that one with the all the dependencies). One person was assigned to that thankless task and took it on alone.

Stepping back even further … the team has shipped three stories and one production issue in two sprints. In team retrospectives, there will be many plausible reasons given as to why they “almost” made it. When the big dependency blob moves through to Shipped the team will celebrate, and faith in the velocity metrics will be restored. But …

What the team ***should have done*** is to leave the board *exactly as is* at the conclusion of Sprint 1. Knock out those items and move the whole thing to Shipped. In the future, a better (conservative) target is one or two stories per sprint … with active pairing and swarming when required. Additionally…the big story blob (those five stories) should have been broken up, or left as a single story with tasks (see [INVEST](https://en.m.wikipedia.org/wiki/INVEST_%28mnemonic%29) again).

#### So What? Part 2

Embrace the forcing function. I don’t care if it is WIP limits in a “flow-based” approach, or producing “potentially shippable” software by the end of the increment. Sprints, in my opinion, are too easily abused…but that doesn’t make them ineffective as a forcing function in the right hands (and with the right mindset).

I’m increasingly seeing that the deciding factor isn’t the specific approach (flow vs. iterations), but rather the ease with which the team can sense the situation and use the various forcing functions to improve (and speed) feedback. Two weeks is a long time to get feedback as the situations unfold. Try shortening the sprint and/or reducing the amount of work.

