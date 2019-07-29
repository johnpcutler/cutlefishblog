---
path:	"/blog/unvalidated-complexity-is-a-liability"
date:	"2017-02-11"
title:	"Unvalidated Complexity is a Liability"
image:	"/images/defaultimage.png"
---

David Frahm asked me to explain this Tweet:


> [](https://twitter.com/johncutlefish/status/830500858651570176)
> [](https://twitter.com/davidfrahm/status/830537461415673856)So what is the liability?

Complexity can kill the future ability of a team to seize opportunities and change course. Any developer who has worked on a bloated codebase can attest to this. Any support engineer who has had to support a bloated set of features understands this. Any marketer who has had to market to dozens of personas understands this. I’m not suggesting being risk adverse. But leaving features/interface/integration points in your product “just because” is a recipe for eventual collapse of the system.

The problem is that complexity is often invisible, and its impacts are non-linear. I wish folks would do the “remove a feature for every feature you add” approach more seriously.

Let’s take a rapidly growing startup. A broad product appealing to many personas will be easier to sell. Being able to say “yes, we do that” works great on phone calls. You’ll grow quickly. But what you are essentially doing is passing the buck to your future self. At some point you’ll need to increase your team size exponentially, development will slow to a crawl, marketing will drown trying to appeal to everyone, and the whole house of cards will come tumbling down.

The answer isn’t fear or being risk adverse. Or going slowly. But the cult of velocity seems to only address speed of output, and not speed of validation/learning. We tend to ignore velocity of learning. I think the reason so many UXers and Devs have come to despise the idea of MVPs is that they work in environments where they are asked to cut corners (introduce complexity), and then never get a chance to act on that learning. MVP = crappy guess and deal with it. The cycle time for learning is infinity.

