---
path:	"/blog/why-experiment"
date:	"2018-12-02"
title:	"Why Experiment?"
---

*Note: I wrote this post for the *[*Amplitude*](https://amplitude.com/)* blog (my current employer). While mentioning Amplitude in a couple places, I think it’s decent and worth sharing here. Creating an environment friendly to continuous learning is something I am very passionate about.*


> A learning experience is one of those things that says, ‘You know that thing you just did? Don’t do that.’ — Douglas Adams, The Salmon of Doubt
> If you’re good at course correcting, being wrong may be less costly than you think, whereas being slow is going to be expensive for sure. — Jeff Bezos, 2016 Letter to Shareholders“Experimentation” is, at its core, about active learning *and* value creation. To thrive, your team must learn faster than the competition AND convert that learning into value faster than the competition. [Amplitude](https://amplitude.com/) is an opinionated product in this respect. We design and build for product development teams acting and learning continuously in the trenches, not data-snacking or planning big-bang yearly releases. Our own [North Star Metric](https://amplitude.com/blog/2018/03/21/product-north-star-metric) is weekly *querying* users, not just folks wandering into the product once a month to ‘pull a report.’

Which brings me back to experimentation. It has become cliche in our industry to talk about “running experiments.” It’s a slippery word. At Amplitude, we have a broader (and perhaps more inclusive) perspective.

A good place to start is what the experimentation mindset *isn’t*.

### Fear and Loathing

For some, experimentation (and its cousin “being data-driven”) serves as a proxy for trust and safety. “With data we’ll have fewer meetings! We’ll have 100% confidence and certainty! No more guessing! No more arguments! We’ll be using science…no more [HiPPO decision making](https://www.forbes.com/sites/bernardmarr/2017/10/26/data-driven-decision-making-beware-of-the-hippo-effect/#72110a7a80f9)!” This manifests in seriously dysfunctional behavior: cherry picking experiments/data, ignoring all qualitative data, [p-Hacking](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3204791), data-hoarding, slipping into local maximums, and flawed experimental design. The spirit of curiosity and learning is missing.

And then you have the non-Netflixes, non-Googles, non-Airbnbs of the world assuming that running a [feature factory](https://hackernoon.com/12-signs-youre-working-in-a-feature-factory-44a5b938d6a2) is their only option. They’ve got reasons. Their “n” is too small. They can’t afford data scientists and data engineers (or their data scientists are too busy). “Experimentation is too expensive and takes too long!” Their problem space is not A/B or multivariate testing-friendly. They’ve committed to features on the roadmap. They’ve talked themselves out of experimenting, and in so doing, sadly, they’ve talked themselves out of being curious, learning, and taking calculated risks in their context.

For these two types of organizations, we find four things missing:

1. Viewing experimentation as a catalyst for learning
2. Building a foundation of trust and safety
3. Embracing uncertainty
4. The need for Minimally Viable Experimental Rigor (MVER)
They’re stuck in what [Doc Norton brilliantly describes](https://www.youtube.com/watch?v=9Khvf1oExds) as the implementation mindset (“get it right”) vs. the experimentation mindset (“explore different ways”).

### Horses for Courses

Experiments come in many forms: randomized controlled trials, natural/quasi-experiments, observational studies, and *gasp* ‘just trying stuff.’ Trial and error with completely random inputs is very rarely how humans solve problems. [Fascinatingly, children learn using a Bayesian approach](https://slate.com/technology/2012/10/how-do-children-learn-so-quickly-bayesian-statistics-and-probabilities-help-nate-silver-and-kids.html) (exploring the “balance between ‘priors,’ the beliefs [they] bring to a problem, and data”) and in some cases, “kids understand the probabilities of possibilities better than adults do.”

In complex systems with lots of moving parts, our “experiments” are more like [safe-to-fail](http://cognitive-edge.com/methods/safe-to-fail-probes/) interventions. Try something. Sense impact. Amplify the good. Dampen the bad. Try something again. Keep tightening the *sense and respond* loop.

Pick your model: [PDCA](https://en.wikipedia.org/wiki/PDCA), [DMAIC](https://en.wikipedia.org/wiki/DMAIC), [OODA loop](https://en.wikipedia.org/wiki/OODA_loop), [Build-Measure-Learn](https://steveblank.com/2015/05/06/build-measure-learn-throw-things-against-the-wall-and-see-if-they-work/), [Research-Hypothesis-Test-Analyze-Report](https://en.wikipedia.org/wiki/Scientific_method), [Kolb Learning Cycle](https://en.wikipedia.org/wiki/Kolb%27s_experiential_learning); they all share the fundamental components of sensemaking, processing, and acting (in perpetuity).

### (Complex) Games

While we often *apply* science in our experimentation efforts, we do so in environments best described by the acronym [VUCA](https://en.wikipedia.org/wiki/Volatility,_uncertainty,_complexity_and_ambiguity): Volatility, Uncertainty, Complexity, and Ambiguity. Business is strategic gameplay and rarely resembles a brute-force optimization problem (e.g. increase avg. shopping cart $ size with 2px rounded button corners) or a lab setting. The winners can exploit this uncertainty for competitive advantage. They learn faster, reduce the cost of being wrong, make lots of reasonably informed (but not perfect) decisions, and exploit asymmetric opportunities.

Most importantly, they are asking the right questions — resisting the urge to rigorously optimize for X (e.g. tackling the “leaky top of the funnel”) without questioning whether X is the right “play” from a business gameplay perspective (the end of the funnel represents a viable, defensible business). At a high level, the experimentation is focused, appropriate, and grounded in sound product development strategy, vision, and gameplay.

### Yes, It’s “Significant”

The stalwarts of massive-scale controlled online experiments — Google, Amazon, Netflix, Facebook, AirBnb, Intuit, etc. — [offer many, many valuable lessons](https://www.fastcompany.com/3063846/why-these-tech-companies-keep-running-thousands-of-failed). No doubt, they are impressive in their ability to experiment at scale and generate outcomes in their respective contexts. I’m also impressed by my friend who recently [Mechanical-Turked](https://en.wikipedia.org/wiki/Amazon_Mechanical_Turk) an “AI powered” application approval idea at his B2B SaaS company, and started earning revenue (and learning a ton) in three days. Somewhere, out there, is a team trying something new this week/month, be it a design sprint with participatory design, trunk-based development, usability testing, or maybe a new retrospective format. All experimentation, but not formal experiments.

In *Creative Selection: Inside Apple’s Design Process During the Golden Age of Steve Jobs*, Ken Kocienda explains Apple’s version of “experimentation”:


> We always started small, with some inspiration. We made demos. We mixed in feedback. We listened to guidance from smart colleagues. We blended in variations. We honed our vision. We followed the initial demo with another and then another. We improved our demos in incremental steps. We evolved our work by slowly converging on better versions of the vision. Round after round of creative selection moved us step by step from the spark of an idea to a finished product.This is not Netflix-esque controlled experimentation, but it still captures the experimentation mindset beautifully. It’s the curiosity, testing, repetition, and refinement that truly counts.

### Better Products

So, what does this all have to do with Amplitude and product analytics? At Amplitude, our mission is to help our customers make better products. Our customers come in all shapes and sizes. Yes, some customers run concurrent large-scale controlled growth experiments, and we welcome that. Others (Amplitude included) may use historical regression, target and elicit qualitative feedback from beta customers, and sometimes (gasp!) “just try stuff” when the decisions are reversible, and/or the problem is complex. The crux here is 1) are you learning, and 2) are you turning that learning into a better product.

We run North Star Metric and Customer Journey workshops with our customers to help keep their eyes on the prize instead of on red herrings and vanity metrics. We believe passionately in data democratization paired with [data integrity](https://amplitude.com/taxonomy), empowering anyone in the organization to get trustworthy answers without writing SQL.

We want to remove all barriers to learning, and then convert that learning to value — for everyone, regardless of context and domain.

“Step by step.” “Round after round.”

![](/images/1*rMXXlKlNYoGXcvArVxEMWQ.png)