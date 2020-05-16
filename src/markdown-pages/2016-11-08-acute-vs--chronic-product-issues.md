---
path:	"/blog/acute-vs-chronic-product-issues"
date:	"2016-11-08"
title:	"Acute vs. Chronic Product Issues"
image:	"../images/defaultimage.png"
---

In his post [**Normalization of deviance in software: how broken practices become standard**](http://danluu.com/wat/)**, **Dan Luu** **makes an interesting point about postmortems:


> If there were an acute failure, you might see a postmortem, but while we’ll do postmortems for “the site was down for 30 seconds”, we rarely do postmortems for “this takes 10x as much ops effort as the alternative and it’s a death by a thousand papercuts”, “we architected this thing poorly and now it’s very difficult to make changes that ought to be trivial”, or “a competitor of ours was able to accomplish the same thing with an order of magnitude less effort”.It’s a great post — I highly recommend it — but this section in particular struck a chord with me. We tend to discuss and analyze our acute failures and celebrate our big wins, but rarely find a way to constructively discuss our chronic challenges and areas of barely acceptable mediocrity.

It’s like someone delaying dealing with a chronic health issue (or a screwed up relationship or work situation), but promptly visiting the ER when something “bad” happens.

A friend echoed a similar situation in their organization:


> Somehow we persuaded ourselves it was OK to work with the broken architecture. We’d churn features out. Have little parties. Pat each other on the back for a job well done, even if we didn’t know if the work was actually successful. And just turn a blind eye. Anyone who tried to push for change was simply marginalized, and singled out as not being a team playerIn Lean you have the concept of a stop-the-line culture ([pulling the Andon chord](http://www.shmula.com/about-peter-abilla/what-is-andon-in-the-toyota-production-system/)). Here was a person doing just that — developers were struggling due to the architecture — but she was marginalized for speaking up. Now, this wasn’t a critical issue. The lights were on, and the product was accessible. But this kind of stuff adds up. The same goes for delivering mediocre features, letting UX debt accumulate, letting learning/cognitive debt accumulate, or allowing toxic behavior. You can celebrate your wins all you want, but it doesn’t make this stuff go away (or make discussing it safer).

In this particular situation there were a couple interrelated problems:

1. A feel-good, harmony focused culture. Talking about chronic problems was frowned upon (vs. acute issues that could be addressed immediately). Most cultures (not just feel-good cultures) find that discussing chronic, wicked problems is difficult for both managers and the front-lines. Typically, they are bigger and require more resources to address
2. Let’s assume that management had very good reasons why they couldn’t address this issue … if they did, they weren’t discussing them. This lack of communication and acknowledgment was toxic
3. New developers assumed this was just how it worked
4. More experienced developers didn’t see an upside in calling out the issue repeatedly because of #1
5. Because of #2, there was no basis for a straightforward discussion on what might trigger a response. IOW, how bad would it need to get before acting? How would you measure that?
So what can you do?

Luu [cites a couple recommendations from a study detailing normalization of deviance in healthcare](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2821100/):


> Pay attention to weak signals
> Resist the urge to be unreasonably optimistic
> Teach employees how to conduct emotionally uncomfortable conversations
> System operators need to feel safe in speaking up
> Realize that oversight and monitoring are never-endingAll of this advice applies for software. If you accept the new normal as normal … then you quickly lose the fire for addressing the chronic issues. They multiply. And suddenly you are struggling with the non-linear effects of those issues. While retros and postmortems target the acute issues that account for 20% of your hurt, you are stifled by the chronic issues accounting for 80% of your hurt.

You might not be able to address the problem immediately, but you must encourage your teams to monitor the issue without discounting their frustration. For example, developers could cut new tickets each time they had to work around the finicky architecture, or use product usage metrics to indicate the impact of UX debt.

Anyway. [Check out Luu’s post.](http://danluu.com/wat/) It’s good. And think about how you can make your environment safer for monitoring and discussing chronic issues.

