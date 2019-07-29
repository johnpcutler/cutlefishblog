---
path:	"/blog/prioritizing-without-level-of-effort"
date:	"2019-03-15"
title:	"Prioritizing Without Level of Effort?"
image:	"0*Y7T0RYPNUGcMsUvO.png"
---

More reposts of answers to emailed questions, etc. I shared one [about deadlines](https://medium.com/@johnpcutler/should-we-have-deadlines-e621e1cdb132?source=friends_link&sk=6f01b1e782a64ecc79547c493307a703) the other day.


> Can you prioritize something without knowing the “level of effort”?First, it is important to discuss what we are actually prioritizing. Are we prioritizing the opportunity to focus on (e.g. decreasing on-boarding time), or are we prioritizing an actual intervention (e.g. an on-boarding checklist)?

Say we are considering whether to prioritize what opportunity to focus on. Using the example above, we’d ideally have some data/insights linking on-boarding time to something even higher up the chain (like churn rates, customer effectiveness with the product, ability to up-sell, etc.) Assume on-boarding is costing us $1,000,000 a month, and another option — the lack of additional customization options (another potential direction) — is costing us $200,000 a month. How do we pick?

This is where experience pays off. Here is what is going on in my mind as a product manager:


> We have a lot of promising options for solving both problems. Nothing really stands out as being a monster effort.The team has been kicking ass lately and figuring stuff out. It is all a wash. Let’s go with the bigger opportunity. Let’s tackle on-boarding.Note that I *am* estimating. But what I *am not* doing is converging on a particular solution, or bothering engineers for estimates. My experience has sized up each problem, and I’m doing a lot of pattern matching across when the team has tackled similar problems.

The story could be different:


> Oh, on-boarding is always tough, involves UX, is multi-step, gets everyone in the company riled up, and has lots of business logic! We’ve already tried to optimize on-boarding on two occasions, so we’re running out of headroom. Adding customization involves adding new options to admin screens. As long as we aren’t changing the schema, we should be ok.In which case I might choose to prioritize adding customization options instead, but only if that *type* of work happens a lot faster based **on actual cycle time / lead time data**.

Let’s say that is NOT the case. On-boarding wins. Which brings us to our checklist idea.

The key point thus far is that we may have discussed options (enough to gut-check what we are dealing with), but we haven’t discussed specifics. Why? We don’t want to overly constrain the team by asking for detailed estimates of many options. To accomplish that, they would need to flesh out and spec the options, which would in turn force some level of premature convergence, and probably fire up their confirmation bias. An on-boarding checklist is but one way to address the problem (and one that seems to be very “intuitive” and get people internally excited).

Assuming we have a lot of equal-looking options (in terms of likelihood to decrease on-boarding time), one good strategy at this point would be to prioritize things that help us learn, are conducive to experimentation, and/or things that are verifiably very small. And hopefully take a good long look at qualitative and quantitative insights.

Stepping back I wanted to point out something very important. Our ability to do things in this way is highly linked to the clarity of our “strategy”. We are confident on-boarding is important. We know the “value” of solving that problem. With this confidence it is much easier to rationalize taking an experimental approach. We can afford to fail and miss the mark (and likely will), provided we can place more bets. When value is less clear, we tend to get overly obsessed with particular ideas and exactly how long they will take.

The reason I like using CoD (cost of delay, the $1,000,000/month in this example) is that it helps us have an apples-to-apples discussion about which opportunities to chase. It hopefully forces a meaningful discussion about value, ideally resulting in some kind of mental model / causal relationship diagram / belief network that everyone can see. In cases where I see CoD being difficult to calculate, it is almost always because this understanding is lacking. There is no shared understanding. Which means that figuring out CoD for each individual item is a huge drag.

CD3 (CoD/duration or level of effort in time) is very helpful for prioritization, but you need to be a bit careful. It is your standard effort vs. reward ratio, but with the added twist of taking into account units of time both on the value side, and the effort side. Watch our for/to:

* Not to force premature convergence to get that duration
* Acknowledge that it may take a couple tries to make meaningful progress in terms of the broader opportunity (if you are assigning CD3 to individual interventions)
With a lot of SaaS work it feels unnecessary to think about CoD or CD3 on the intervention level.

Hope that helps! In short, prioritize opportunities. Put “rigor” into building shared understanding around the underlying value creation system/model and your strategy. As for how to exploit those opportunities — how to intervene — don’t consider prioritization as precious, and value small batches and experimentation whenever possible (CD3 can be your guide here as it really highlights the value of working small).

![](/images/0*Y7T0RYPNUGcMsUvO.png)Too much?