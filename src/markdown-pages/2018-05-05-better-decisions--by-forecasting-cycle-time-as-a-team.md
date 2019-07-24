---
path:	"/blog/better-decisions-by-forecasting-cycle-time-as-a-team"
date:	"2018-05-05"
title:	"Better Decisions (By Forecasting Cycle Time as a Team)"
---

Below I am sharing a script I use to facilitate forecasting the cycle time of a software product development initiative (not user stories, but initiatives, and only the time “in development”). I post this with hesitation given the tension around estimation and software development, and knowing that I risk getting “dinged” for various statements below (from multiple, super smart experts). But after some consideration I figured … what the heck. Even if it all gets ripped apart, it’ll spark a conversation.

*Note: As a big caveat, this post is meant for folks product managing relatively high growth / high upside products, not contractors (time and materials, and fixed cost projects). If you are a contractor — or you are treated like an internal contractor — then I can’t vouch this will be at all applicable. You live and die by your margins and your ability to estimate costs/time. That’s not my world.*

So here’s the script…

### Our Goal Today

The goal of this meeting is to generate a cycle time forecast for [some effort] to inform prioritization decision making. There are no “wrong” answers for this exercise. The only bad outcome is an outcome driven by individual interests, trying to “game the system”, or attempting to use this for the “wrong” reasons.

Estimates have historically been tasked with doing multiple “jobs”. Some of those jobs have to do with measuring people, performance managing teams, motivating teams/individuals (carrots), costing jobs (for contractors), creating budgets, having a plan to track to, judging the “predictability” of teams, manufacturing a sense of certainty, etc. etc.

![](/images/1*KD-bRw4IuXLNzl-CKNBiDw@2x.jpeg)

Good or bad, none of those apply here. Instead, I will cite two quotes:


> For me, estimation is valuable when it helps you make a significant decision. **Martin Fowler**
> Measurement: A quantitatively expressed reduction of uncertainty based on one or more observations. **Douglas Hubbard — **[**How To Measure Anything.**](https://www.amazon.com/How-Measure-Anything-Workbook-Intangibles/dp/1118752368/ref=pd_bxgy_14_img_3?_encoding=UTF8&pd_rd_i=1118752368&pd_rd_r=8BC4RKJHT65B2EVNEZ9P&pd_rd_w=R2SyY&pd_rd_wg=q5PBK&psc=1&refRID=8BC4RKJHT65B2EVNEZ9P)So to summarize our goals here:

* Make better effort sequencing decisions by reducing uncertainty
* Inspire meaningful conversations
**Warning 1: The day this is used to “manage” teams, or to “hold people” to forecasts, or forecasts are challenged in unproductive ways (“that will NEVER take this long”) … the game is lost. This is not unique to [YOUR COMPANY], and is a risk any time you venture into forecasts/estimates.**

**Warning 2: How you play the game matters! You can forecast until the cows come home, but if you deliver in big batches, don’t show your work to users, have low quality, and chase local maximums…it doesn’t matter. Deliver value continuously. Everything below assumes you will play the game well.**

### Two Examples

You have to pick between these two efforts…which one do you choose? Cost of Delay is the opportunity cost stated per unit of time. CD3 is the Cost of Delay divided by duration.

![](/images/1*cc8FENEoY9Uxa1nbU9evyg@2x.jpeg)

Perhaps looking at a chart might help? Here, the Y axis is CD3:

![](/images/1*PGRauuLqQ3gEh1qoKdpn1A@2x.jpeg)

The answer is pretty clear. Questions?

Very importantly, what we do here today will never “settle ties”. Product development work — especially in a startup — is too variable, both from the value side and the “cost” side. A good example is a comparison between these two efforts. Here, I’ve run a monte carlo simulation for two efforts — including a range of uncertainty for **both the value and the duration**:

![](/images/1*H7Xf9Hjq1-txCH_uEZKnkg@2x.jpeg)X-axis is CD3 (COD / Duration)

“A” might be a slightly better option, but not by much. There will be a conversation. Or let’s look at two other efforts ….a highly valuable but uncertain item, and a “for sure” middling item:

![](/images/1*IjENo9-H5-JtKGzlY-XPQQ@2x.jpeg)X-axis is CD3 (COD / Duration)

Option A is “all over the place”, but it’s a winner. That said, it will take a lot of gumption and grit to stay the course. There better be a plan to deliver A incrementally and reduce risk lest it spirals out of control.

Which is all to say that the goal here is to do what we can to inform decisions, and do what is best for [COMPANY NAME HERE]. If all that comes out of today’s meeting is that there are vastly different perspectives on an effort, and that we currently have a high degree of uncertainty…that is a win. The goal isn’t to manufacture certainty, rather to explore and potential exploit uncertainty.

Moving on…

### Cycle Time and Factors Influencing Cycle Time

Our goal here is to forecast cycle time, not “touch” time or effort. This is an important distinction. Cycle time is the total time in “process”… from the time the full team of developers and designers kicks off the effort, to the day the effort reaches its “definition of done”.

![](/images/1*ILJmBqw_YfsUc6w4gdIScg@2x.jpeg)Importantly, we tend to focus on what is tangible — level of effort, and complexity, or the size of the team — and fail to incorporate other factors that impact cycle time. The impact of these other factors on cycle time be quite large (>80% in some cases)

. All of this “stuff” exists below the waterline, as expressed in this diagram:

![](/images/1*lDlt0bFBM1NhS_JoCGA2pw@2x.jpeg)

Understanding this dynamic explains why certain domains/situations produce “better” estimates than others.

### Cognitive Biases Impacting Our Work Today

We also should be aware of three important cognitive biases (all from [this Wikipedia page on cognitive biases](https://en.m.wikipedia.org/wiki/List_of_cognitive_biases)):

* **Base Rate Neglect:** The tendency to ignore base rate information (generic, general information) and focus on specific information (information only pertaining to a certain case).
* **Conjunction Fallacy:** The tendency to assume that specific conditions are more probable than general ones.
* **Optimism Bias:** The tendency to be over-optimistic, overestimating favorable and pleasing outcomes (see also wishful thinking, valence effect, positive outcome bias).
### Forecasting Without a “Spec”

*Note: “One-Pagers” in this context are single page briefs on initiatives.*

An important point about “outcome oriented” one-pagers. The lack of a specificity (specification) may influence your sense of uncertainty — how you solve a problem will impact cycle time. But, its impact may be a lot smaller than you think. And, having a pre-formed solution may negatively impact your ability to capture value, because of premature convergence. So question your need for “more details”, and work with what is on the one-pager.

For example, which bet do you choose here as a PM?

![](/images/1*i2DdeDYbqCPZ8vdo461fLA@2x.jpeg)

Me? I pick Bet 2. Bet 1 seems more “certain”, but I better have a ton of data that the prescribed solution is going to deliver the “uncontroversial value in business outcome”. How do I know this is the best solution?

Similarly, check out this comparison from [Spotify’s Unproject Culture deck](https://blog.crisp.se/wp-content/uploads/2014/03/unproject.pdf). The project on the right should have “won”, right?

![](/images/1*KG0LUTH9GETlDgMPDRzUAg@2x.jpeg)

Finally, take a look at Cost of Delay / Duration combinations. What we find is that the high value / duration uncertain items, and the small / high-certainty duration items both look attractive. If something has the potential to be worth $10,000,000 a month, we go for it regardless of whether it may take one month or six months.

*Lesson: Our assessment of VALUE is probably a good deal more important than our forecasting of duration in many cases…especially if we are a product company and not a T&M or fixed-cost contractor where all of your money is earned by delivering X by Y for Z.*

![](/images/1*M3_kfvGezZJuss26DxQkoA@2x.jpeg)

### Engineering Judgement

In various studies, “engineer judgement” was least reliable compared to prior similar experiences AND correctly assessing the technical risk (the judgement to compare this item to prior items).

[ILC Cost Estimating Activities, Peter H. Garbincius, Fermilab Chairman, GDE Design & Cost Board, LCD Study Group May 4, 2006](http://www-sldnt.slac.stanford.edu/nld/meetings/2006/20060504/LCD_Cost_Estimate_4may06.pdf)

![](/images/1*Tbkb5BPImK-pQB7kZTAsNg@2x.jpeg)

### Adoption

The Cost of Delay estimates for many of these efforts assume a period of adoption/roll-out. We may, in the future — extend our forecasts to cover this part of the process as well (and some one-pagers already do), but for now we will focus exclusively on the definition of done / stopping function for the effort in question as described in the one-pager.

### Historical Cycle Times:

Now let’s review some historical cycle times.

With each of these examples, I want you to consider carefully what we reviewed above. Namely what factors influenced the cycle time that were truly specific to the effort (excluding even the team that worked on it), and what factors might influence all efforts that [YOUR COMPANY] undertakes.

**Consider carefully Base Rate Neglect and Conjunction Fallacy.**

Also, if you find yourself fixating on something that happened with that effort, ask “what are the chances that the same thing could occur with this effort?”

[DATA ON PAST EFFORTS GOES HERE]

Would anyone like to add a couple more data points that you are familiar with? How about adding some that come to mind?

We finished \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ in less than 14 days, and it delivered value almost immediately to customers.

[OTHER SUGGESTIONS HERE]

We finished \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ in less than 7 days, and it delivered value almost immediately to customers.

[OTHER SUGGESTIONS HERE]

### The One-Pager

Does anyone need time to review the one-pager? If so, we can take 2 minutes to do so right now in this meeting.

### Helpers

Some of these are pulled from Douglas Hubbard’s [How To Measure Anything](https://www.amazon.com/How-Measure-Anything-Intangibles-Business/dp/1118539273/ref=pd_bxgy_14_img_2?_encoding=UTF8&pd_rd_i=1118539273&pd_rd_r=0QZGGW2NND5FK8AB9C09&pd_rd_w=YwyQ8&pd_rd_wg=unx6L&psc=1&refRID=0QZGGW2NND5FK8AB9C09). I suggest getting the book… it is a great read.

Our goal today is to come up with a 90% Confidence Interval for our forecast. What does this mean?

#### One Way To Think About a 90% CI

* 5% chance that the duration will be higher than your upper bound
* 5% chance that the duration will be lower than your lower bound
* 95% sure that the duration will be less than your upper bound
* 10% chance that the duration will be greater than or less than your 90% CI
#### Or Consider This Choice:

Would you pick your 90%CI to win $1000, or the wheel? If you find yourself opting for one or the other, why is that?

![](/images/1*LM14RE04k28x-lGtjQoLdw@2x.jpeg)

These games should play the same if you are “calibrated”.

#### Or Consider This Image:

How might we use certain phrases to tease out a 5% probability?

<https://github.com/zonination/perceptions>

![](/images/1*4q0qvY3Mkus650CjEbky9A@2x.jpeg)

Turns out some work better than others. Pick the terms most likely to produce the result we’re looking for:

* There is **almost no chance** the effort will take shorter/longer than \_\_\_\_\_\_\_\_\_\_\_
* **Almost certainly** this effort will take shorter/longer than \_\_\_\_\_\_\_\_\_\_\_\_\_
#### Or Consider This Thought Experiment

Imagine you could “run” this effort 20 times at [YOUR COMPANY].

You sort the durations by smallest to largest, and knock out the bottom “run” and the top “run”. What might the curve look like for this effort?

To aid in this effort, run a [pre-mortem](https://hbr.org/2007/09/performing-a-project-premortem) or [ritual dissent](http://cognitive-edge.com/methods/ritual-dissent/) activity to elicit some of the worst case scenarios. Additionally, look at the distribution across 1) all initiatives in your organization, and 2) initiatives that have a similar profile.

![](/images/1*ciRgmPzPlr45d5OhuS55Bw@2x.jpeg)

#### Realize that in some settings, you are better off going with the base rate, as factors specific to the effort have very little influence.

### Let’s start:

Please spend 2 minutes to individually come up with a lower bound and upper bound for your 90% CI for duration. I’d like you to consider the things we discussed about: base rate, historical efforts, what’s “under the surface” (the iceberg drawing), etc.

![](/images/1*i0md-GFoNGnfotC6p_kYYg@2x.jpeg)

Now…let’s discuss the outliers and explore our assumptions. Who anchored on base rate? Who had the highest upper/lower, and the lowest upper/lower?

And that’s it. It’s the conversation that counts. I want to end on a thought … why not? Typically the answer to this question centers around all the negative things attached to estimation. But if you can improve your decision making by just a wee bit WHILE avoiding that stuff…again, why not?

I’m super busy with the new baby, but hit my up on Twitter at @johncutlefish with questions/comments. And check out my [low-pressure podcast](https://anchor.fm/john-cutler/episodes/Who-Doesnt-Want-Outcomes-e1e0s4).

![](/images/1*-G8R_df4NVn9gW_olBUCbw@2x.jpeg)