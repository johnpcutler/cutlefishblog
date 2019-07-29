---
path:	"/blog/we-cant-do-that-in-one-sprint"
date:	"2018-01-24"
title:	"We Can’t Do That In One Sprint"
image:	"/images/1*siePcBn2yZOKxF6bnDyp1g@2x.jpeg"
---

OK. Let’s get this meeting started.

**UXD and Product Manager:**


> OK. Here’s what we tested with some customers. This will let users see some important metrics, and then drill down in the table on the right. Does it make sense? How long will it take?![](/images/1*siePcBn2yZOKxF6bnDyp1g@2x.jpeg)

**Software developers on team:**


> Yeah. It makes sense. About the timing…The product development team gives it a quick glance, and imagines something like:

![](/images/1*UuQiE1Y4BFKA1WSAvxQEQQ@2x.jpeg)

They’ll have to wire some stuff together. The table is aggregated in a new way, so that will take some thinking. They have some existing libraries for the charting, and tables, but this is the first time they’ve tried a filterable/sortable table AND charts on the same “screen”.

**Software developers on team:**


> Probably two or three sprints. We’ve got some other stuff in flight as well, so things could go take longer.They’re going to need to divide and conquer. If Bill, Daria, and Xin can focus on different parts of the problem, they should be able to wire it all together in four sprints (“could take longer” … works like a charm). In their mind, things kind of look like this:

![](/images/1*TF-g1cBpdcMt3PJAJPXK6g@2x.jpeg)

They can work roughly in the sprint structure, but this *literally can’t fit into a sprint*, so they don’t belabor that point. It would amount to “splitting hairs” in their mind.

The “other stuff”…that’s a story for another day.

**Daria, a software developer on the team, speaks up:**


> You know, I think the smart thing to do here is take a super thin slice of this problem and get that into production. Even if it is behind a feature flag or something. We’re making a lot of assumptions. How about something like this:![](/images/1*briw7qwIu3mM3FIIn0rXnQ@2x.jpeg)
> What would it take to get one metric on a mobile device (small screen) in production? Just one number. This would help us go end to end in a couple days. We may be oversimplifying the aggregations, and tackling the filtering AND the charting all at once will be tough. I dunno…that’s my instinct here.A ten second hush falls across the room. And then:


> **PM:** I mean … maybe? But that is not valuable for the user. We know this
> **UX:** I worked hard on that layout. I tested it. Do we really need to go through the motions here? This feels like we are losing the big picture here. And it is UGLY.
> **Bill:** Oh that’s so trivial. Does it really help us? I was really excited to start working on the aggregations and making those performant.
> **Xin:** How about the front-end? We’ll finish this, and then have to go back and plan all over again. Plus…tbh, I wouldn’t have much to do here. What would I do?
> **Everyone** (except Daria): I don’t think that is a good idea DariaIn their mind’s eye, this is what will happen. It isn’t pretty:

![](/images/1*4jt5ccs-YwdqwZ1a4m8OpQ@2x.jpeg)

It is similar to having someone ask you to check in every hour as you hike towards a very obvious peak in the distance. It’s a waste, right?

![](/images/1*6Y5rZO4jHdpHRAARa6n3xg@2x.jpeg)**And in the back of everyone’s mind (except the PM)

 is the following:**


> Oh you KNOW what is going to happen here. We’ll be working small like this, and suddenly the PM will swoop in and just tell us to ship it … in a super crappy state, before we all feel proud of it. MVPs SUCK!Working incrementally feels risky. We like to do a good job.

### So…

Some observations:

* Humans like to take a **big picture view**. It feels wasteful to take small steps — especially steps that may be rewritten — when you know your destination. We’re impatient creatures.
* **We hate doing shitty jobs!** Teams live under constant fear that someone will yell “ship it” and ask them to move on.
* We all **hate being micromanaged. **Having to break things down into small, small problems may leave us feeling like we aren’t trusted.
* **The costs of working small are very apparent** (more meetings, more stopping/starting, more integration, more pushes to production, more pull requests to be critiqued). In other words, Daria’s proposal will FEEL SLOWER. It will FEEL like a waste of time.
* **The benefits of working small are not immediately apparent**. Daria’s proposal is the better option IMHO, assuming it is followed up by progressively more refined solutions. You will end up with a better end-product, minimize risk, and learn earlier. But those benefits accrue when we discover unknown things! So almost by definition, we can’t “know” those things when doing the mental calculus. A host of cognitive biases make working small and incrementally (Daria’s option) feel dumb.
* **Working small requires linking the small work to the big picture**. The challenge is that we need to process things at different resolutions. It is easy to point at a mockup and say “we are building that”. It is a lot harder to visualize incremental progress. Tools like Jeff Patton’s User Story Mapping help. But it is still hard, and takes some mental gymnastics. Another issue…we are often very dogmatic on what constitutes value. Daria’s option is “shitty” (not valuable for the user), but we would learn a ton, and we could show it to a customer.
### Aside…

I have experienced senior developer friends who swear off incremental development. It occurred to me that more experienced folks are able to take longer dives before coming up for air…at least from a technology standpoint (there’s still a ton to learn about user behavior). However, most work small as a habit, while ignoring the pomp and circumstance of formal splitting, Jira gymnastics, and formal review. In other words…they do this automatically. They don’t think they do…but they do.

I think this is worth mentioning, because it is easy to fashion yourself a ninja and imagine this doesn’t apply to you. But it does.

### Conclusion

To resurrect a title from an earlier post: work small, even when it doesn’t “make sense”. You have to take the leap of faith, because the costs will feel real, and the benefits will feel theoretical and distant. You have to see it work. There’s no way around this. There is NO silver bullet.

Get SOMETHING out there in one sprint.

