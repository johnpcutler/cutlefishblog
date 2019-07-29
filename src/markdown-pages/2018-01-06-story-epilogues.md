---
path:	"/blog/story-epilogues"
date:	"2018-01-06"
title:	"Story Epilogues"
image:	"/images/1*vCIERGkf-73WVVBm8yr0AA@2x.jpeg"
---

#### Think backwards to help with story splitting, shrinking, thinning, and batching.

![](/images/1*vCIERGkf-73WVVBm8yr0AA@2x.jpeg)

Here’s a trick I use when scoping stories, and wrestling with the competing pressures of independence, value, “releasability”, etc. It’s super simple. I work backwards from a theoretical discussion with the user ***post-release***. This is subtly different from thinking in the traditional user story format:


> As a <type of user>, I want <some goal or feature> so that <some reason or outcome> ([*source*](https://www.scrumalliance.org/community/spotlight/mike-cohn/january-2014/keeping-the-user-in-user-stories))Instead, we are imagining their first reaction. **Before they “wanted” it. Now they have “it”!** We are right there alongside the customer. How do they describe their new ability? What are the caveats? Are they excited? What might we learn?

When brainstorming I use a format that looks something like this (with many variations):


> I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_, but……………..At least for me, this has an interesting (and valuable) effect, especially when considering how to de-scope, thin out, split, batch, and divide work. It is a worthwhile compliment to traditional user stories.

### EXAMPLES

Here are some simplified examples. While reading these examples, consider the following questions:

* Was it worth releasing this work? Why? What if you released to a smaller set of more tolerant customers?
* Was it worth decoupling this work from prior work? Why?
* What might the team learn given this type of response?
* Are we equipped to gather this type of feedback and act on that information?
* Will we have issues with workarounds, existing functionality, etc.?
Perhaps take some of your current stories and pass them through this filter. What will users say when they first give it a try?

**I am now more (or less) likely to \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now less likely to have to start the registration process over again due to accidentally using the back button in my browser (which happens far more often than you might think).**I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_, but I am hesitant because \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now able to change my password, but I am hesitant because I did not receive a password change confirmation.**I now have the option to \_\_\_\_\_\_\_\_\_\_\_\_\_ when \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I now have the option to opt out of notifications when viewing any message in the thread.**I am now able to provide meaningful feedback to [the developers] about \_\_\_\_\_\_\_\_\_\_\_\_\_, but I cannot use \_\_\_\_\_\_\_\_\_\_\_\_\_ yet in “real life” because \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now able to provide meaningful feedback to [the developers] about the new campaign success metric, but I cannot use this data yet in “real life” because it is not filtered for whitelisted accounts.**I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_, but I don’t find this useful/valuable because \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now able to search for customers by last name, but I don’t find this useful/valuable because I need to know their exact last name, and must type that in full before seeing suggestions.**Given \_\_\_\_\_\_\_\_\_\_\_\_\_, I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_. But unfortunately, \_\_\_\_\_\_\_\_\_\_\_\_\_ will not always be the case.**


> Given an order from a state with a NAT309187 tax exclusion, I am now able to process and fill the order. But unfortunately, NAT309187 exclusions will not always be the case (they don’t exist in 36 states).**I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_, but the steps/process/experience could be more (or less) \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now able to create a child work order, but the experience could be more intuitive for our accountants who spend less time in the maintenance portal.**As an alternative to (or replacement for) \_\_\_\_\_\_\_\_\_\_\_\_\_, I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> As an alternative to the existing account creation workflow , I am now able to auto-provision new customers directly from the Salesforce account screen. The customer is able to change their account ID after the fact, whereas previously we needed to agree on a permanent ID.**I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_, but without \_\_\_\_\_\_\_\_\_\_\_\_\_ I will be unable to \_\_\_\_\_\_\_\_\_\_\_\_\_ . My only option will be to \_\_\_\_\_\_\_\_\_\_\_\_\_, which will be \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now able to tag transactions of interest (for fraud review in the future), but without the ability to filter by tag in the fraud prevention module, I will be unable to see a list of tagged items. My only option will be to customize the layout, add a “Tags” column, and sort, which will be time consuming.**I am now able to \_\_\_\_\_\_\_\_\_\_\_\_\_, but ideally I would be able to \_\_\_\_\_\_\_\_\_\_\_\_\_, so I can \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now able to see a history of accounts viewed (sorted automatically by time), but ideally I would be able to filter this history my account type and account status, so I can spend less time scanning over cancelled, self-service customers.**I am now able to start \_\_\_\_\_\_\_\_\_\_\_\_\_, but cannot finish. I get stuck when I \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> I am now able to start the bank account import process, but cannot finish. I get stuck when I attempt to import more than 100 transactions and/or import transactions that are older than 60 days.**By now being able to \_\_\_\_\_\_\_\_\_\_\_\_\_, along with the existing ability to \_\_\_\_\_\_\_\_\_\_\_\_\_ , I am able to \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> By now being able to design automatic replies and maintenance vendor workflows, along with the existing ability to manually reply to issues , I am able to confidently address maintenance issues that occur during off-hours.#### You can extend this thinking to things the team might say…

**We are now able test the assumption that \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> We are now able test the assumption that customers will want to pause campaigns after they have gone public.**We are now able to \_\_\_\_\_\_\_\_\_\_\_\_\_ which will make it possible for users to \_\_\_\_\_\_\_\_\_\_\_\_\_ in the future (provided we finish \_\_\_\_\_\_\_\_\_\_\_\_\_ ).**


> We are now able to process 500 transactions per second which will make it possible for users to quickly process large import batches in the future (provided we finish the batch import API ).**With \_\_\_\_\_\_\_\_\_\_\_\_\_ in production, we can now reliably \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> With automatic coherence checks in production (and the ability to kick off reindexing based on those checks), we can now reliably guarantee (barring a major issue) that users will see non-corrupted, accurate data.**With \_\_\_\_\_\_\_\_\_\_\_\_\_ we are now in a better position to be able to learn whether \_\_\_\_\_\_\_\_\_\_\_\_\_.**


> With metrics on how users interact with the search filter (prior to submitting their queries) we are now in a better position to be able to learn whether the filter options are optimal based on user role.That’s it …today’s timebox hit. Thoughts? Helpful?

