---
path:	"/blog/scaling-without-imploding"
date:	"2017-10-03"
title:	"Scaling Without Imploding"
---

#### Early warning signs, continuous improvement, and (the right kind of) discipline

This post is about scaling your company. In particular, it is about sensemaking and continuous improvement…keeping your finger on the heartbeat and health of the company, and making sure the inevitable problems don’t become chronic problems. We tend to view our organizations as unique, but in my experience (at least), the dynamics tend to be very similar. The symptoms also become confounding and confusing in somewhat predictable ways, which is something I will discuss below.

#### **At first, things are like this:**

![](/images/1*wGbfR5brgV5dbSEznqSdMQ@2x.jpeg)* High % of greenfield work. Everything is a first.
* Developers who wrote the code are still with the company and understand why certain decisions and trade-offs were made.
* Codebase and product(s) are less complex.
* Team tends to hire “known quantities” from prior jobs (more direct experience working together).
* Organization is flatter. Information flows more freely. Tighter feedback loops.
* Groups less likely to be locally optimized (less “kingdom building”)
* Easier to just “walk over to someone’s desk” (even if they are not in your “department”).
* Early customers are more accessible, engaged, and willing to provide feedback (and accept some cut corners).
#### **OK, fast forward a couple years:**

![](/images/1*xr-Ty5xGmAuDszbo6WpHGQ@2x.jpeg)* Lower % of greenfield work. “Completely new” stuff is rare. New work must occur within the constraints of old work.
* Original developers have moved on, and/or have stopped being individual contributors. Body of decisions/trade-offs is too large to be effectively communicated.
* Product has become much more complex.
* Fewer referred hires.
* Organization has grown taller. Information is channeled through layers in the hierarchy.
* More kingdom building among departments and teams. Concern is for local survival vs. global health.
* Less co-mingling between departments.
* Early customers are now dwarfed by new customers who passed through more traditional onboarding channels.
#### **When stuff “slows down”, this situations leads to a lot of questions and finger pointing:**

![](/images/1*LFzKmbxPiTaJAWqwnYRP1w@2x.jpeg)* Why is Team 1 struggling, while Team 2 is kicking ass?
* Have we lowered the hiring bar? Why?Maybe this is a process thing…maybe we were just too reckless before and this is the “new normal”?
* Have people lost their motivation? Are they trying hard?
* Did our original team members make poor decisions early on?
* Is product to blame for the feature bloat situation?
* Are the new managers not learning how to manage? Are the new senior managers / execs not coming up to speed fast enough?
* Do we have too many irons in the fire? Is this an overall strategy thing?
* I’m hearing about a list of impediments, but they can’t all be contributing equally. What has the greatest impact?
* Am I hearing the truth? Maybe we just don’t have the right people?
This is a small sampling of questions, but you get the idea.

#### Answering those questions and resolving those disputes is very difficult:

![](/images/1*L_3NNTU5eYAMga3u5jQjQA@2x.jpeg)* Most arguments are partially right. Almost anything can be correctly listed as a contributing factor.
* Some things will *always* get harder with growth/scale.
* A local view does not yield the whole story.
* A global — but far removed — view does not yield the whole story.
* Factions will form, galvanized by a correct (but incomplete) view.
* Any attempt to present the issue in its full complexity is — almost by definition — too complex for general consumption (and will be described as too threatening and/or “political suicide”).
* Similarly, any suitably nuanced experiment to address issues will span functional groups, and the org hierarchy. Therefore, this will be met with a lot of resistance as it challenges existing roles.
* Apples-to-apples comparisons (between teams and between other companies) are almost never possible.
#### Which leads to:

![](/images/1*kqf9ixo3nQCTM35QH5BZig@2x.jpeg)* Self-doubt. A newcomer, for example, might not know if their observations are “right” or if there is something they are missing.
* Fear, and less information sharing.
* Defensive stances. A shift from solving the problem to shaping the narrative and/or advancing individual solutions.
* Inaction, or rapid action where it is easiest and least controversial (typically on the front-line level).
* “Working around” blockers instead of through them.
* Scapegoating specific teams and/or groups.
* Excessive process to “prove” who is at fault (e.g. additional layers of management, more strict estimation practices, more rigid goal setting, progress checks, etc.)
* Additional process to serve as a trust proxy (e.g. “people need to be more accountable!”)
* The rate of problems will exceed the rate of successful attempts to resolve problems, problems will grow exponentially, and some problems will become truly chronic (and wicked)
#### Discussion

Sure, you can view the progression above as something unavoidable (and some do). Others believe that determining a root-cause is always possible, and that the dynamic above represents “bad management”. They’ll describe the org as “slipping” and then proceed to higher outsiders to tame the situation (somehow the “right people in the right roles” rarely involves existing staff).

I have a slightly different view. First, I think it is important to view this dynamic as “natural” in the sense that it rarely stems from people doing malicious things (or being incompetent). Second, I do believe that there are ways to counteract the drift, but don’t believe this is solely a management responsibility. You need to engage the front-line, and create a psychologically safe environment where information can be exchanged without fear.

In most orgs where I see this happen, there is some sort of slip and/or pragmatic adjustment. It’s an early warning sign. With the slip comes a rationalization. Some examples from my career include:

* Not addressing the root cause for an issue in production (we’ll fix it later, it is too big to fix now)
* An increase in the on-boarding time for new team members (we’re hiring younger engineers now)
* A slip in the lead and cycle times for initiatives (that team was inexperienced)
* An increase in the number of senior team members departing the company (well, who can blame them, cultures always change)
* Being unable to further shorten the release cycle (well, maybe we’ve hit our limit now with monthly releases)
* Spending less time with customers (our latest batch of engineers is less interested in chatting directly with customers)
The rationalizations are powerful. If the environment is already toxic, no amount of effort to reign things in will work, as people are already on the defensive.

#### The Answer

I’m definitely not an expert, but my biased hunch is around discipline, forcing functions, and psychological safety.

I’ve been thinking and reading on this for a while (delving into Lean, Theory of Constraints, and high safety cultures). When I look at companies that have done well for an extended period of time, I tend to see some set of non-negotiable set of values, principles, constraints, forcing-functions, and controls.

These might include:

* Fixed hiring standards (or a hiring approach, e.g. test-driving)
* Stop-the-line and fix the root cause of production issues
* No flaky tests (tests that routinely fail, but are ignored)
* Maximum limits for “unplanned” work
* Ability to push changes into production in [some time duration]
* Everyone does time in the support queue
* Quarterly, well-facilitated continuous improvement events and immediately addressing the topmost items
* Work in progress limits
* Track data on every product initiative and do follow up post-release comparing adoption estimates to actuals
* Always include a customer (or customers) on the team
* Some regular rotation of team members to circulate information and learnings
* Retrospectives for each initiative, and agreement to act on any of the key blockers whether or not it is solely within the team’s control
* Immediate refocusing if rolling NPS drops below 40
* CI/CD must not exceed N minutes/hours
* Weekly goals
* Chaos engineering in production environment (regularly bring down systems to test resiliency)
* Periodically shortening the release cycle (e.g. 1 month, 2 weeks, 1 week, 1 day)
The tendency is to write these things off as “too controlling” or “not flexible enough”. Or…the expectation is that a single manager will catch the problem, escalate accordingly, and/or resolve the issue(s) with other managers. I’d argue otherwise. To encourage continuous improvement and prevent the drift, you need to have some set of immovable forcing functions AND the commitment to “stop the line” and address the issue.

The key here is to pick forcing functions that can actually drive learning and action. Individual performance reviews and OKRs can feel too arbitrary and local. So can something silly like “ability to hit estimates.” It’s better to pick things that point to the global health of the system. This is a key point, as we tend to obscure the global influences on teams which makes it easy to rabbit hole on individual/local causes.

Most importantly, it cannot involve blame or personalizing the issue. And (this can be the toughest) must involve everyone in selecting the constraints, and leaving them open for debate.

### Summary

Make it safe to have discipline. Agree to a set of forcing functions. When the alarm trips, make it safe to address continuous improvement. Don’t make this a management thing. Make it a wh0le-org thing.

