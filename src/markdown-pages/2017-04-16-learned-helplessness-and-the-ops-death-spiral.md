---
path:	"/blog/learned-helplessness-and-the-ops-death-spiral"
date:	"2017-04-16"
title:	"Learned Helplessness and the Ops Death-Spiral"
---

Are you in Ops? Do you deal with Ops teams? Does this sound familiar?

![](/images/1*DIw5krqGhmHZBTBYHv1F7g.png)

#### The Cycle

* Business grows. The focus is on growth drivers: new products, new features, and shiny objects. Cost of maintaining the increased complexity is routinely underestimated. Ops drops some balls…
* In light of above-mentioned dropped balls, the business asks Ops to be “more responsive”. This responsiveness is achieved by taking on more work (high utilization) and taking on different streams of work (multitasking / context switching). There’s a willingness to please. But cracks form, and more balls are dropped…
* The problem is identified! It’s a management problem! Project management is brought in to act as human load balancers. Capacity is essentially auctioned to the rest of the organization during periodic planning activities. The focus still remains on the “new”, and the cost of maintaining the existing infrastructure/services continues to grow (and to be underestimated…)
* This eagerness (and newfound accountability and track-ability) is rewarded in the short term. However, things begin to slip behind the scenes. Lead times increase (but are more “predictable”). Quality slowly slips. Work feels more controlled and business-like, but degradation in overall capabilities is constant. Entropy increases. Heroic efforts rewarded…
* The Ops front-line team members feel the strain. They sense quality slipping. They’ve been viewed as a lame duck for a while now — lesser developers / firefighters — but the willingness to please is still strong (almost a reaction to feeling marginalized). Shadow work becomes the norm, meaning that the maintenance work is made invisible because exposing it would destroy the veneer of control. Complexity increases further, increasing the complexity of maintenance vs. the allure of new projects.
* From the outside, Ops is viewed as passive and not strategic. A sense of inevitable struggle sets in — both inside Ops, and from the “customers” of the team. Low morale makes it easy to identify the problem as one of lack of engagement, poor management, and shoddy discipline (“why can’t they get estimates right”). Learned helplessness sets in. The business will never understand Ops, it is thankless work, and all they can do is keep the sinking ship afloat.
* Due to lack of Ops responsiveness, feature development teams continuously “work around” operations … using new greenfield technologies, and managed services, and circumventing controls. This creates a technology soup, further complicating Ops life, but creating temporary traction. Of course, the new providers are “so robust” and “so easy to implement”, which is bad PR for Ops (who have been tasked with the HARD work of un-fucking legacy decisions).
* And the business grows ….
* On and on. Until something really explodes, at which points consultants are brought in, and everyone is at the water-cooler saying “I told you so”. The embattled team members who were saying “I told you so” the longest are the first to go. They were both right, and ineffective at being right (which is a hard place to be). The managers are able to spin some “we warned you about this” into roles in the new structure. Until ([a la Larman’s Laws](http://www.craiglarman.com/wiki/index.php?title=Larman%27s_Laws_of_Organizational_Behavior)) the “change initiative will be reduced to redefining or overloading the new terminology to mean basically the same as status quo”
* And the business grows…
* Repeat, at ever increasing scale…
#### So what can you do about this?

* Become a broken record about Ops impacting the fundamental economics of the business. Connect Ops to revenue (and speed to discover new revenue sources). Fight being attached to proxy metrics like project completion
* Get beyond the DevOps hype and understand that [there are many topologies that work (and don’t work)](http://web.devopstopologies.com/). You don’t need to run your whole company in one model. Focus on the why, iterate, and repeat
* Be forceful about adding headcount to accommodate added complexity. Establish resourcing model that correctly accounts for the increased overhead of managing complexity
* Visualize the true cost of matrixing your team members. This often involves making *all *the work visible, which is especially hard when team absorbs a ton of invisible work. Use data to demonstrate the impact of the matrix. Lead time and rework can be powerful here
* Say No! Being customer-centric can be your achilles heel. It is your responsibility to call out efforts that will be, by their very nature, difficult to support with existing resources
* Speak more about capabilities (vs. IT “projects”). Your job is to zero in on the capabilities required for success, not passing projects through the pipe. Encourage your team to build capabilities with a minimal amount of complexity
* Hire technical product managers your team TRUSTS (instead of project managers). Once you view your infra/tools as a product, you’ll start taking a longer term strategic view
* Limit work in progress and utilization rates. Your team wants to “kick ass”, but you have to slow down to speed up. Sure you’ll feel more responsive if you can “commit” to parallel projects, but in the long run it’ll be better to focus on flow and capabilities
That’s it for now. Comments appreciated….

[![](/images/1*0hqOaABQ7XGPT-OYNgiUBg.png)](http://bit.ly/HackernoonFB)[![](/images/1*Vgw1jkA6hgnvwzTsfMlnpg.png)](https://goo.gl/k7XYbx)[![](/images/1*gKBpq1ruUi0FVK2UM_I4tQ.png)](https://goo.gl/4ofytp)
> [Hacker Noon](http://bit.ly/Hackernoon) is how hackers start their afternoons. We’re a part of the [@AMI](http://bit.ly/atAMIatAMI) family. We are now [accepting submissions](http://bit.ly/hackernoonsubmission) and happy to [discuss advertising & sponsorship](mailto:partners@amipublications.com) opportunities.
> If you enjoyed this story, we recommend reading our [latest tech stories](http://bit.ly/hackernoonlatestt) and [trending tech stories](https://hackernoon.com/trending). Until next time, don’t take the realities of the world for granted!![](/images/1*35tCjoPcvq6LbB3I6Wegqw.jpeg)