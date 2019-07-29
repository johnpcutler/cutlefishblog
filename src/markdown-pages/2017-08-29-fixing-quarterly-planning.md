---
path:	"/blog/fixing-quarterly-planning"
date:	"2017-08-29"
title:	"Fixing Quarterly Planning"
image:	"/images/1*xCZX9amQWhhH_-zbI45rpA.png"
---

This post is about making quarterly planning more effective. You may have an awesome quarterly planning approach. If so… You’re A Winner! For many PMs — especially at bigger companies — the process…\n\n\n![](/images/1*xCZX9amQWhhH_-zbI45rpA.png)
> I absolutely hate quarterly planning. It feels so counterproductive and disruptive!This post is about making quarterly planning more effective. You may have an awesome quarterly planning approach. If so… You’re A Winner! For many PMs — especially at bigger companies — the process is fraught with pain and frustration.

#### It’s a non-subtle form of masochism: a 91.25 day sprint including 28 days of planning, that doesn’t “work”.

Why?

Quarterly planning is disruptive when it introduces *too much new information *at once: too many new projects, too many new dependencies, and too many shifting priorities. There’s simply no way you can build adequate shared understanding. Tweaking the planning quarterly is simply too slow (and too disruptive) for a rapidly growing company. Without shared understanding, you’ll never get optimal results. But we get caught up in the drama and excitement and just perpetuate the problem.

![](/images/1*FGfZZoNAhYAGGkMph1RkNg.png)Equally disruptive is that we tend to synchronize *execution* cadence with the *planning and prioritization* cadence. Somehow, all projects start to take one, two, three, or four quarters. This worsens the quarterly “hit” (due to harmonic oscillation)

, and impacts decision making. The shit goes down… at the start and end of every quarter.

Common symptoms of a unhealthy quarterly planning process include:

* Low completion rates (teams can’t meet their often artificial “commitments”)
* Longer than normal lead times
* Rework, or work items completely miss window of opportunity
* Last minute dependency management (shared teams are overloaded)
* Items in progress need to be “punted” to the next quarter
* Teams rush to get their projects “in the system” for the next quarter
* Silver bullet projects materialize
* Network effects (snowball effect) as one shared team is delayed
* Planning is rushed. People aren’t on the same page
* Invisible work

> But isn’t this how you *have* to do it? We want less process, not more! It sucks, but there’s no other way! How can we move quickly unless we set stretch goals!?This isn’t how it has to be.

#### A Quick Scrum Diversion

Let’s check out a fixed-length sprint (Scrum) analogy. For a sprint to be considered “successful”, you finish *all *of the *committed items. *You don’t get *credit *for items left in progress. At the end of the sprint, you deliver a potentially shippable increment (there are no multi-phase or artificially split stories). The smart team figures out its *sprint velocity *by looking at prior sprints, and sets a reasonable goal. And at the end of the sprint there’s a retrospective and demo, and the whole process repeats.

Note the critical point here: the team bases velocity on actual data, and embarks on a sustainable approach. You don’t beat yourself up!

This all takes incredible discipline and repetition. An organization that has trouble “making its quarterly commitments”, does so for the exact reasons a scrum team has trouble making its sprint commitments…albeit on **a much grander scale**. These reasons typically include unplanned work, rework, artificially splitting stories, multi-tasking, high utilization, handoffs, dependencies, non-shippable work, external blockers, changing requirements, overoptimism, etc.

It’s the usual suspects… but addressed every 91 days on, again, **a much grander scale**.

On a scrum team you reflect and adapt. Typical fixes include taking on less work, better story decomposition and grooming, fixing the source of production issues, dedicated QA and UX, and more active dependency management.

Interestingly (and counterintuitively), Agile stalwart [Ron Jeffries](https://medium.com/u/a45b68b1ab11) recommends (I’m paraphrasing) “shortening the sprint, down to a day if necessary.” Can the team reliably plan and deliver SOMETHING during the increment, even if it is a day? His approach** starts with success and builds from there**. This is very different from the idea of loading up a sprint (or quarter), doing your best, shooting high, and just punting along the work that doesn’t get done.


> Ah! I see … we need to total up story points across 60 teams, do careful estimation, and “fill up” the quarter just like we fill up a sprint! Right?Nope. Scrum-don’t-play-that. But we’re getting close.

And this sort of gets to the crux of the problem. Consider how hard it is for an individual team to crack this nut. Now increase the complexity non-linearly across the whole organization. **There’s no possible way that a big-batch planning approach across this many teams will EVER produce predictability.** The system just can’t calibrate itself because 1) the calibrating and inspect/adapt happens too infrequently, and 2) there are too many moving parts.

### A Solution…

On a high level, the solution is to:

1. Decouple planning, prioritization, and execution. Use just-in-time and cadenced meetings appropriately
2. Adopt a pull-based approach instead of a push-based approach
3. Make the next rolling 6–12 months of work visible, and always current
What do I mean?

Consider this Kanban board:

![](/images/0*KTuj4J7BxIEOR3Ln.)* Longer term prioritization occurs in A
* Planning and coordination occurs in B
* Dependency management is maintained through C
* Last minute prioritization occurs in D. At this point it is committed. It’s going to happen
* Checking in on execution happens in E
* We review long term benefits delivered in F
This is a PULL system with WIP constraints. When Card 1 moves to Delivered, work on Card 2 starts, and Card 3 is moved from Planning to Committed (assuming it really is committed).

![](/images/0*YbFMZgqpJSACIgl5.)

Pull-based system. To move work “ahead”, a downstream item must move aheadThe important thing here from a quarterly planning standpoint is that you’ve reduced the “big bang” nature of the exercise. By visualizing the upstream part of the process — the prioritized backlog, planning, and commitment steps — you’ll have far less “resetting” to do each quarter. If you do this right, you’ll always have a year’s worth of work up there. Of course things will change … you’ll pull things from planning, or shuffle priorities for committed items, but it’s clear what is going on.

Executives often incorrectly assume that this approach will trigger anarchy. The push-back goes as follows:


> *Us executives are so busy! The business works on a quarterly cadence, so we need to set up a ton of meetings to review the quarter and give our blessing. How can this ever work? Our calendar’s are full!**Side Note: Consider whether executive availability is the actual bottleneck*

The quarterly planning process becomes a way for senior people to exert influence, get “face time”, horse-trade, and politic for their top priorities. They kind of like it. They love the drama.

So this is where working agreements come in. For example (just riffing, I wouldn’t do all this), you could decide that:

* Directors meet monthly to review items in the **Planning** column
* VPs review all items **In Progress** monthly
* Quarterly, conduct a 60 person Kaizen event using board. Review all items
* Any VP or above can expedite an item into the **Planning** column
* Items that are L or XL need C-level approval to move into the **Committed** column
* Any **Committed** items that has dependencies needs to be signed off on by all participating teams
* An item stuck in **In Progress** for more than 180 days triggers an immediate COO facilitated meeting
* Etc.
I’m more of a distributed decision making kind of person, but you can be as command-and-control as you want here. Executives can be as involved as they want to be. Some activities are:

1. **Triggered **(e.g. backlog replenishment, when card count falls below X) and other activities are…
2. **Cadenced** (e.g. monthly review of blocked In Progress items)
The key is to make the working agreements explicit and make the work visible.

How is this different than normal quarterly planning. Normal quarterly planning is a PUSH based system, not a continuous PULL based system. Normal quarterly planning is like the running of the bulls.

**Subway is a PULL based system**. Note how the sandwich-making is *never overloaded*. The line might grow slightly, but Subway gets the job done.

![](/images/1*GOsNNK0LiwjztvavJ8yTAg.png)A quarterly planning process can occur ON TOP OF a continuous flow-based, pull-based system. We imagine a big calendar cut into four blocks and mistakenly believe that “predictability” in this context involves dropping work — the execution — into those blocks. Instead, think about regularly scheduled (or just in time, pull based)

 meetings that keep watch over a flow of work.

You go from this:

![](/images/1*c3a_Bg0U2TKeNlZ93fZAPQ.png)

To this ….

![](/images/1*T5G3HFUee06POx8IesZ69w.png)

What you often learn is that the development teams were never the bottleneck. Rather, it was shifting priorities, silver-bullets, and too much work in progress that brought the operation to a grinding halt. Sure there were issues with delivery, but the process itself obscured those issues. It made it difficult to swarm resources on addressing those problems.

And now you can fix that. If you are unfamiliar with Kanban, [Amazon is your friend](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Ddigital-text&field-keywords=kanban).


> But when will things be done? That isn’t possible unless you put it in a calendar.That’s for another post, but the basic answer is that by limiting work in progress and focusing on flow, you’ll be better able — using actual data for different classes of work — to predict when something will be done. And do so with far better confidence than a big-batch, wipe-the-slate-clean quarterly planning process. This approach might not work well if you make your money delivering singular, unique custom projects, but should be possible in a modern SaaS company.

