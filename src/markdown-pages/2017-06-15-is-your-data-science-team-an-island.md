---
path:	"/blog/is-your-data-science-team-an-island"
date:	"2017-06-15"
title:	"Is Your Data Science Team An Island?"
image:	"/images/1*kAHzTxmH28RTXx1RSlOQVQ.png"
---

I thought it might be interesting to use Search inside a multi-product SaaS provider— my current product domain — to explore some interesting topics around shared resources and complex internal service domains like data science. The topic came up a couple times during conversations at MTP 2017 (especially among companies with complex offerings), so I’d like to continue the conversation.

Here’s my simple overview of Search Relevance and UX. A user actively searching provides a “hint” (and there are some Search-specific challenges), but this is fairly similar to other data science problems.

![](/images/1*kAHzTxmH28RTXx1RSlOQVQ.png)At my current job, Search partners with other internal teams who understand our various **User** personas and their **Goals. **We also partner with folks who have a deep understanding of how to **Help** users achieve their goals in certain contexts and while visiting certain touch-points (e.g. web-widgets, Mobile SDKs, APIs etc.)

 And finally, we collaborate with individuals who are experts in certain types of **Information**: things like support tickets, chat threads, and knowledge content. Sometimes — when we’re lucky — this expertise is embodied in a single person or team. And in other cases we need to cast a wide net within the company.

For a complex business these distinctions are vital. The word *Product (*or even *Multi-Product)* is too simplistic. A single user persona may access many touch-points, with multiple goals, and with access to various chunks of information … all in a single day. It’s more of a service ecology.

Search teams (and other data science teams) cannot exist as remote tropical islands. Nor can they exist as islands connected to the mainland solely by Jira tickets, the promise of “extensible platforms”, heavy project management, and prescriptive feature requests. There will always be some skills — Search is a good example — where it is not feasible to hire dedicated resources. But that does not preclude teams from deeply partnering and embedding for the full duration of a “mission”… to the extent that for some period of time there is only one big, cross-functional team. At the end of the day … if it touches UX and the User, it can’t be done in a vacuum.

Deep integration of the teams, lessens the risk of:

* Building **shiny objects** in isolation, that while shiny don’t really integrate well with the complete experience (ignores good UX) and/or leverage domain expertise
* A **spray and pray** approach that adds a lot of bells and whistles, but introduces unmanageable and unsustainable complexity
* Forcing **premature convergence** for the sake of “efficient” and well-coordinated (temporary) “projects”. And never really moving the needle. Once the effort really get’s going, the teams disperse
If the technology is “left behind” with our internal partners we’re lucky, but most data science teams maintain certain tools, services, and infrastructure that exist in a dynamic state. There’s a spectrum … some services are very, very specific to certain emerging/novel use cases, other services are generic, and there’s a host of stuff in the middle. To make matters even more complicated, we might partner with other infrastructure / data engineering teams to keep the ship afloat. The BIG danger here is assuming economies of scale that may or may not exist, or assuming the technology stack (your stack, and the extend internal partner stack) is static. It isn’t.


> The BIG danger here is assuming economies of scale that may or may not exist, or assuming the technology stack (your stack, and the extend internal partner stack) is static. It isn’t.In the best case, the service evolves organically around actual problems (with regular refactoring):

![](/images/1*K-2lpeC5CoSp6LC9NMd7GA.png)What’s interesting for me personally, is that this dynamic is not that dissimilar from my prior work as a UX Researcher. The temptation with UX Research is to do big-batch upfront research and “land” that research on a team. This doesn’t really work. I’ve had much better results fully embedding with teams, and taking the team along for the journey. Frequently, what we thought was the problem (or would solve the problem)

 at first, proves to only play a bit-part in the big picture. You can’t just jump ship at this point.

So some tips:

* Work out an internal funding model that takes into account 1) the complexity you are maintaining (not just the “new stuff”), 2) the fragility of assumptions around economies of scale, 3) the maturity of your various engagements, and 4) the actual VALUE you are delivering vs. what you cost.
* Keep your team extremely fluid and resist pre-optimizing around structure or process. Boundaries must be flexible.
* Focus on actual problems not building platforms. Let the platform emerge as a result of a disciplined loop of iteration, converging generic components, and tackling new problems.
* Know what constitutes your problem space, and make sure you have direct access to domain experts (for us it is Users, Goals, Touch-points, and Information). Don’t skimp, and get their full attention when it counts.
* Embed deeply. Consider you and your collaborators as a single team. Resist the pull to multi-task and matrix simultaneously
* Avoid premature convergence or adopting a “ticket-taker” / feature request / team Tetris.
* Boil up the objective to the highest level possible. For example, Search exists as one component in an interface. Ask … “what makes the WHOLE interface effective for the User and their Goal (with the available Information)?” You might find that advanced data science approaches aren’t even required.
[![](/images/1*0hqOaABQ7XGPT-OYNgiUBg.png)](http://bit.ly/HackernoonFB)[![](/images/1*Vgw1jkA6hgnvwzTsfMlnpg.png)](https://goo.gl/k7XYbx)[![](/images/1*gKBpq1ruUi0FVK2UM_I4tQ.png)](https://goo.gl/4ofytp)
> [Hacker Noon](http://bit.ly/Hackernoon) is how hackers start their afternoons. We’re a part of the [@AMI](http://bit.ly/atAMIatAMI) family. We are now [accepting submissions](http://bit.ly/hackernoonsubmission) and happy to [discuss advertising & sponsorship](mailto:partners@amipublications.com) opportunities.
> If you enjoyed this story, we recommend reading our [latest tech stories](http://bit.ly/hackernoonlatestt) and [trending tech stories](https://hackernoon.com/trending). Until next time, don’t take the realities of the world for granted!![](/images/1*35tCjoPcvq6LbB3I6Wegqw.jpeg)