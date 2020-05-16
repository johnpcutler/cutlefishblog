---
path:	"/blog/juggling-growth-and-usability-a-ux-debt-primer"
date:	"2015-12-29"
title:	"Juggling Growth and Usability: A UX Debt Primer"
image:	"../images/defaultimage.png"
---

The concept of technical debt is generally understood. But what happens when we extend the concept to product design and user experience? Can an interface accumulate debt? And what can we do about it?

### Technical Debt Primer

The now well known metaphor technical debt was coined by [Ward Cunningham](http://en.wikipedia.org/wiki/Ward_Cunningham)to describe both the intentional and unintentional accumulation of loose ends in software design. Taking the metaphor too literally gets you in trouble (and can derail any meeting, especially with engineers), but the general idea is that at some point all organizations have to “pay off” the debt through a deliberate allocation of resources, “write off” the debt by starting over, and/or suffer the consequences.

Lucky companies play the balancing act to perfection, foregoing key decisions until the last possible moment, while benefitting from current knowledge and data. Unlucky companies eventually take a big hit, falling behind competitors as they struggle to dig out. And negligent organizations inject debt haphazardly, without any quantitative sense of the debt being accumulated or the interest rate.

### Agile, XP, and Technical Debt

One thing that agile does very well is to iteratively address customer-focused features. When paired with [extreme programming (XP) practices](http://www.extremeprogramming.org/rules.html), such as test-driven development and pair programming, agile does a decent job of hedging against certain forms of technical debt, and striking that fine balance between speed, quality, and cost. Evolved teams dedicate some percentage of resources to the [gradual reduction of debt,](http://deloitte.wsj.com/cio/2014/03/04/reversing-your-organizations-technical-debt/?mod=wsjcio_hp_deloitte) and use sound design principles (e.g. system decoupling, design patterns, etc.) to ease the pain. So for technical debt, we have some models for success, albeit with a lot of debate in the engineering community.

### UX Debt

The discussion becomes a bit more complicated when we discuss the concept of UX debt. What happens when we accumulate baggage in our product design and interface?

[Lean UX](http://www.smashingmagazine.com/2011/03/07/lean-ux-getting-out-of-the-deliverables-business/) practices have done a great deal towards integrating design into the agile process, with a strong focus on cross-team facilitation, less up-front design, and tighter collaboration between engineers, designers, and other usability/design oriented disciplines (like researchers, information architects, etc.)

But many designers will admit to a nagging worry. The thought that keeps them up at night is whether the whole product experience is the best it can be, and when will they need to pay off the debt incurred during rapid, feature-focused design. If big upfront design is dead, then how do we create cohesive user experiences in a flurry of discrete features?

### The Symptoms

UX debt can be recognized by some of the following symptoms:

* The interface fails to gracefully absorb new features (tab overload, action overload). Remember Amazon prior to the [2011 redesign](http://techcrunch.com/2011/09/02/amazon-coms-big-redesign-is-arriving-soon/)?
* Design patterns are highly specialized, linear, and task based (which isn’t surprising given the features were built based on user stories)
* Customer blindness to new features. Interface does not encourage natural exploration of new features
* Inconsistency with regards to interaction patterns, information architecture, and UI components. For new users [this causes significant cognitive load](http://www.clemson.edu/catlab/wp-content/uploads/2010/02/mendel-pak-2009.pdf)
* Difficulty adapting interface for new screens, new applications, new integrations
* Heavy coupling between the presentation layer and backend. “Re-skinning” the whole product, or similar components across product, is difficult or impossible
* Addressing usability issues in “green field” type projects, while ignoring UX issues in core flows in the product. This typically suggests some technical limiters / blockers when it comes to refactoring the UX.
A key takeaway here is that accumulating design debt is not inherently bad. There might be perfectly good reasons why your company exhibits these symptoms, and chooses to focus elsewhere. Design is certainly not the only discipline to be sacrificed in the quest for speed to market and growth (think gathering data, tools to speed customer service, etc.). The trouble is that UX debt is often poorly understood and misvalued. It just starts to “feel” wrong, without any quantitative metrics to prove otherwise.

### Lack of Forcing Function

As with technical debt, the difficulty here is that there is rarely some “do or die” moment that acts as a forcing function. Big tidal shifts like the rise of mobile, or a violent loss of market share do happen, but most of the time things don’t move that fast.

Like a sailboat picking up barnacles and kelp, the slowdown can be barely perceptible, until impacts start to accrue exponentially (as is common with highly dynamic systems like interfaces). Going from 8 mph to 7 mph takes a while, but suddenly you’ve dropped from 7 mph to 4 mph, and you need to turn into the wind, pull down the sails, and send someone overboard to address the issue. And it is never easy: existing customers seldom welcome redesigns with open arms, even if you are making the product more generally usable.

### Invisible

Another problem is that UX debt is often invisible (which is rather counterintuitive considering it is the central touchpoint for the customer). Engineers seldom use all the product features on a regular basis. And UX debt just doesn’t hit home like failing systems and code modules. Customer support staff, while often being expert users, adopt workarounds. Especially in B2B products, there exists a general sense that users can be “trained” to adopt suboptimal flows. And finally, and probably most importantly, humans have trouble noticing slight changes. The product design literally changes under our noses, until something big and serious happens. This often comes in the form of a competitor who offers superior design and ease of use, while we’re left struggling to keep up.

### Usability Testing

Usability testing in the context of agile development often focuses solely on the feature in question. Tasks are developed, and the participant is asked to proceed through a task while talking out loud. Like an architect building extremely comfortable rooms with awkwardly placed doors and lights, it is possible for flows to test well while remaining unusable and inconsistent within the context of the whole product. The agile focus on tested usable features delivered quickly is immensely valuable, but doesn’t inherently address consistency and general usability.

### A Continuous Juggling Act (And Some Tips)

The juggling act never ends. The best strategy is one of quantification, informed risk mitigation, and building awareness of the issue. The integration of UX on agile teams is relatively new, and there simply might not be a full appreciation for the risks involved. Cataloging missing features is old hat, but understanding why the holistic design strategy matters is a relatively new challenge. To get the discussion going, I’d like to present a few possible strategies to make UX debt real, address it early, and build awareness across the team:

1. **Always test your product with people who fit your customer profile**, but who are not current customers. Do your best to avoid the[anchoring bias](http://en.wikipedia.org/wiki/Anchoring) whereby the standard for excellence is the current product. Think of this as TDD (test driven development) for product design. Ask yourself how you can develop a repeatable process to assess whole-product usability by user role.
2. **Establish usability benchmarks against commonly used products both in your domain and outside your domain**. And test your product against those benchmarks. Time to completion for tasks is informative only when relative to the time it would take the same user to complete a familiar task. In many domains with late adopters, it can be easy to trounce the competition from a usability perspective. But remember that your customers will evolve and establish new benchmarks. Mobile is a major catalyst in terms of turning late adopters into power users with high UX expectations.
3. **Catalog components** in your software and categorize by pattern, application, visitor traffic, and whether they are on the critical path to key conversions. Many teams are unaware of just how many variations they have developed
4. **Find a way to quantify your UX debt**. Options could include combining the results of benchmark tests (both customers and non-customers), customer feedback, and inline surveys. The emphasis here is getting buy in for your methodologies across the team, and making the accumulation (and pay off) of debt visible
5. **Leverage pattern libraries and frameworks** for DRY UI development.
6. **Assume that the interface will change**. Trends will develop. Technologies will develop. So how will you consistently offer the best user experience possible? Approach this challenge in partnership with your engineers, and adopt practices in systems design that will allow an [architecture to emerge](http://www.scrumalliance.org/community/articles/2013/august/agile-architecture-emerges-or-does-it)
7. **Discuss the risk with your team.** UX is a new addition to agile teams, and ways of working are still be ironed out. An exercise might involve a pre-mortem, whereby team members discuss how ignoring UX debt might derail the team at some future point.
8. **Establish checkpoints and regular design reviews** to recognize when redesign or refactoring of the interface is required. Involve the whole team
9. Dedicate some part of every sprint to working down UX related debt
### What Do You Think?

How do you address whole product experience in the context of agile/scrum/lean (insert buzzword here) ? Let me know in the comments.

