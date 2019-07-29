---
path:	"/blog/faster-faster-faster"
date:	"2017-10-27"
title:	"Faster. Faster. Faster."
image:	"1*ASFrYGRPG67lvJ0FadoETw@2x.jpeg"
---

I’d like to talk about fast.

On the left, we have the build-measure-learn loop. And on the right we have the common build-build-build.

![](/images/1*ASFrYGRPG67lvJ0FadoETw@2x.jpeg)

Think about “fast” in the context of these two approaches. With build-measure-learn, we are optimizing for learning. We move around the loop as quickly as possible. It might look slower to someone on the outside, but we are learning more quickly. With build-build-build, we optimize for output. We ship as quickly as possible. Sometimes output is the right tactic, but sometimes it leads to this:

![](/images/1*nkH40MBF5tN-r0ou2w2wdQ@2x.jpeg)One winner in five tries. Not good! Time for a silver bullet (joke)

.

The problem is, we tend not to kill the features. So we have to 1) maintain the complexity, and 2) work around the complexity when adding additional functionality. Poor Ops! They’re often left running all of this under-used functionality, and somehow have a problem getting more headcount. Anyway.

If we aren’t careful, we also miss good opportunities:

![](/images/1*ejKj2-fJ0u7RgBxPrK1jHw@2x.jpeg)

Note how we are able to pursue alternative paths with build-measure-learn. We kill some ideas, test new ideas, and amplify what works. With build-build-build, we’re about executing to a pre-determined plan. The last thing stakeholders want, in this case, is to flip the script.

There’s a legacy here.

With project work, someone comes to you and asks for software that does X,Y, and Z. For fixed bid work, you get paid cold hard cash when you kick-off the project, hit some milestones, and deliver the project. Perhaps you also agree to host/maintain the software, in which case you collect money for a service contract.

![](/images/1*wWf7Eg-vO2BAaJpEdt396w@2x.jpeg)

Now, there may be plenty of learning involved in this type of work. This is no knock on project work. With fixed bid, you are primarily concerned with controlling costs, reducing risk, and delivering something that meets the customer’s requirements. We often try to replicate this scheme in product development:

![](/images/1*OIaGL1G2sF__agFf9QprmA@2x.jpeg)

This makes logical sense. There are some difficulties, however. Here are a couple:

1. Most of the time, teams aren’t paid cold hard “internal” cash when they deliver. They don’t enjoy the profits. And they don’t get to charge for a service contract (to maintain what they build)
2. If asked to deliver a feature, they miss the opportunity to follow alternative paths to achieve the same goal. They’re on the hook for “the feature”.
3. By giving an estimate, they’ve limited their ability to iterate on the feature to achieve a positive business outcome. Most likely, the org will have scheduled follow-up work to start immediately after the project is “done”.
4. You run the risk of incentivizing larger “batches” (due to the transactional / startup costs of projects in comparison to dedicated teams).
Broadly, this means we fall into a build-build-build mode (see big batch below) vs. a build-measure-learn mode (see smaller batch below):

![](/images/1*Z5aQbJki_roPWZb-XrvSYA@2x.jpeg)

Note how we start delivering value earlier using smaller batches. We’re “positive” far earlier. Now imagine this across multiple initiatives. It really makes difference.

I see many organizations interpret incremental delivery like this:

![](/images/1*I-3v-l7FcGsTrPOTS1WnKA@2x.jpeg)

We lay out all the “stories”, add up all the “points”, and finish the project in little increments. The increments are good. They provide an integration point and reality check and decrease delivery risk.

Why do we finish and walk away? In many cases, the organization is persuaded that benefits realization is a “long term” thing, and that there is no possible way to measure/learn prior to done. The attitude is basically build-build-build ……………………..measure-learn:

![](/images/1*gmZ2scszMAUzD3SuWLniCg@2x.jpeg)In this model, fast is all about getting to done. We’ll play our bets (fast), and then wait until the business value materializes (eventually)

.

In a build-measure-learn approach, things might look a bit like this:

![](/images/1*ufDJmPxwAsV2Z8ozksgihQ@2x.jpeg)The team is tasked with moving some user/customer/business metric. They work to move that metric (with a short grace-period at the start)

. They’re free to try different options provided they keep producing results. Ideally they target a specific customer/user cohort, and also use a control.

Yes…this takes better tooling, testing, monitoring, etc.

And yes, this is scary for the business.


> What are they going to build?
> What will we tell our customers?
> Can’t we just test it with customers, and just move on?
> Can’t we make sure customers like it before we ship it?But results are results. This is an option. You might be able to work this way. Try to figure it out, even with a small experiment.

So when people talk about going “faster” or “just executing”, make sure to ask some questions:

1. What does faster mean for you?
2. What are you trying to optimize for?
3. Are you willing to go slower in the future, to go faster right now?
4. How has “going fast” worked out? How has it helped the business? Has it hurt? What has been the impact of the added complexity?
5. Would you be willing to go slower and build less, if it led to superior business results? Can we build less.
So that’s some basic thoughts on fast.

