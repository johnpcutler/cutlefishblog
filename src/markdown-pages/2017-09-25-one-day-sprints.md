---
path:	"/blog/one-day-sprints"
date:	"2017-09-25"
title:	"One Day Sprints"
image:	"/images/1*JpsrQ0gJIJd0xcfmmq5ILg.png"
---

*Have The Conversation. Do The Thing. Review. Go Home*

I recently tweeted something about one day sprints.


> [](https://twitter.com/johncutlefish/status/911251847347707921)I thought I’d answer some questions about this. But first…a huge caveat. This tweet is not a “way”. I didn’t invent it. Plenty of teams do something similar. [Ron Jeffries](https://medium.com/u/a45b68b1ab11) and I chatted about this one day (his recommendation for teams “failing” at their sprints, was to shorten the sprint down to a day if necessary). I’ve done something similar with single-batch flow, have since tried this one-sprint thing, and it turns out others have found some value in trying it (including a good friend, with some great success).

You have very, very valid reasons why this might suck for you.

*Note: I’m sure there are speeling mistakes in this. I’ll be slowly fixing them.*

Here goes…

* **What are you proposing?  
**In short: one day sprints. It is not a terribly uncommon. Show up each day. Have The Conversation. Figure out (as a group) The Thing you can deliver and demo by the end of the day. It is OK if it is very small. Start The Thing. Pair/mob/whiteboard/divide-and-conquer/chat/have fun. Get it into a production-like environment. Review The Thing. Go home. Repeat. It looks like this:
![](/images/1*JpsrQ0gJIJd0xcfmmq5ILg.png)* **Why?**  
Why not? And do the Why Nots help you deliver value to customers?
* **No seriously smart-ass…Why?**  
Part 1: It’s a [*forcing function*](https://medium.com/@johnpcutler/forcing-functions-and-continuous-improvement-7d06e4702da0). With a software product development team you have a couple levers to play with. They include: batch size, problem-decomposition approaches, work in progress limits, multi-tasking, work assignment strategy, how you batch and schedule your planning efforts, and how you schedule and batch your inspect and adapt efforts. You also have choices on whether to constrain your work by WIP, or by some kind of time increment. And you can choose a general strategy around optimizing for flow efficiency or resource efficiency. **Anyway, this approach turns everything on its head. My experience is that our intuitions regarding these levers are typically way off. In this model, we explore the extreme to deepen our understanding of the system.**
* **…and Part 2?**  
Part 2: At a minimum, you’ll learn something by poking the system. You may have been struggling with long sprints. Things feel stale. Maybe you’ve added a couple new team members, or have shifted things around, and you need to reset. Or you are in a state of crisis, and nothing seems “to work”. Managers are descending to micromanage you. Or you are feeling like the team is “kicking ass”, but has hit a local maximum for continuous improvement. Whatever it is, you’re willing to try something new.
* **Are you saying this is superior?**  
No. But it might be helpful. It (and a bunch of other things) might lead you to something superior. Imagine you’re an athlete. Sometimes trying a different exercise/workout can open up another area of fitness. Here’s my philosophy: the only “right” way, is using approaches that let you discover the right way. No non-customized/prescriptive way is optimized for your situation.
* **When do we groom the story/stories?**  
In the morning. You start having The Conversation at a conveniently early time. You go as long as it takes until you have a rough plan for the day. Sometimes it takes fifteen minutes, and sometimes longer.
* **How about the backlog?**  
Story decomposition can happen during The Conversation. The backlog can be a lot higher level and less prescriptive. I suggest using outcome driven items, or high level user stories.
* **We can’t break this problem down!**  
Write one test that fails. Edit one line of CSS. Remove a tab. Seriously…you can break the problem down.
* **But that’s not valuable to our customers!**  
Fair enough. But it’s work you have to do. Plus, learning is valuable to our customers, if it means we eventually help them do their job / live their life better. At the end of the day ask … “did we learn anything today?” Hopefully the answer is yes.
* **Just one story? A couple stories?**  
Start with one. Nail that.
* **Compare this to Scrum. What do we still do?**  
You’ll do sprint planning daily. You’ll do a demo daily. Daily standup. Maybe throw in a retro into The Conversation every week or two.
* **Isn’t this Kanban with arbitrarily small stories?**  
Yeah. Kind of. It is somewhat similar to single-batch flow (one forcing function), but with another forcing function: story size.
* **We used to have individual daily and weekly goals. How is this different?**  
You only have a team goal for the day. This is a team sport after all. Also, you don’t put together a big batch of stories during a sprint planning meeting, and then roll the dice for two weeks and make that your goal. The daily goal is to get something with suitable test coverage into test, staging, or production every day AS A TEAM. Again, this doesn’t preclude you from moving big rocks and big goals…you can have those goals too.
* **How do we measure velocity?!  
**Easy. Velocity is ≥ one story per day once you get rolling. Cycle time is <8hrs if you’re in to that measurement (and I recommend you get into that metric). If you’re feeling randy, give a story-point estimate to The Thing, and count that. Compare it to your old SP velocity and story count. Example: working in a two week sprint, the team finished 10 items for 30 story points. Now, in ten business days the team finishes 15 items for 45 story points. Most importantly, measure the velocity and progress on stuff that matters (driving customer outcomes).
* **But our TWO WEEK sprints always failed! Why will one day work?**  
Your sprints didn’t fail. You didn’t account for the variability, unplanned work, and fallibility of estimating anything other than the smallest story. Your failure was not correctly using the sprint length forcing function. Instead of one sprint, we’ll have ten. You learn faster that way.
* **Bill doesn’t know anything about the server-side code. He’s idle!**  
Time to start learning, huh?
* **CI takes half the afternoon because of flaky tests.**  
Fix the tests.
* **What does UX do now? They used to give us wireframes before!**  
Good question. I’d suggest working out the problem together during The Conversation, and pairing afterwards. You might also dedicate a whole day (or more) to building a prototype.
* **This is treating the team like babies!**  
You are ABSOLUTELY right…if this is a management edict. They’ll be transferring the same micro-management to this practice. Let me suggest another viewpoint: that of a team experimenting with how they work. I propose this might eventually get management off your back. If you CAN get over this hump — the hump of assuming that management needs to dictate your process, and that you are powerless to show the way — then good things await.
* **We finished early. What do we do?**  
Go home. See you tomorrow!
* **But we don’t have a meeting room available for that long!**  
Fix that. Or have the meeting out in the open if management can’t afford rooms. Make sure you have a big whiteboard available. Buy the other people on your floor some noise canceling headphones. Bose are good. Cost less than real estate. You might annoy them enough to get your own workspace.
* **We can never get anything done by 5PM!**  
Keep picking smaller and smaller items.
* **Too many meetings!**  
You were meeting anyway for a standup. Make the The Conversation the only “official” meeting of the day. You talk as long as you need to.
* **How do we see the big picture if the stories are that small?**  
Buy another whiteboard, and map the small stuff to the big stuff. Make it visible. Keep the big goals front and center. Linking your daily work to the big picture is one of the key challenges of software product development…it never goes away, regardless of your sprint length.
* **When do we talk about the big picture?**  
If more talk is needed about the “big picture”, then it sounds like you’ll just have to talk more (The Conversation). Start at 9:30am. If it is 3PM and there’s still no small task, go home and repeat.
* **People are sitting around with nothing to do.**  
Pair. Mob. Do some light refactoring that unblocks the story.
* **What about standup?  
**Do a quick check in. Are there any issues in production? Any fires? Technically nothing should be In Progress, but stuff sneaks in. Then jump right into The Conversation.
* **Ship stuff to customers every day?**  
Some companies do that and tuck it behind a feature flag. But at a minimum, get it into a test or staging environment where anyone can demo the work. Do you use feature flags? That might help you get this into production.
* **How do we get feedback from customers?**  
Some days wont require feedback from customers. Some days will. At some regular interval (twice weekly, perhaps), schedule a regular call or meeting with users. Aim to always have something to show. If getting feedback from customers is ACTUALLY your blocker…well, that’s something to focus on.
* **How do you keep stakeholders and the broader team in the loop?**  
The normal stuff: information radiators, regular demos, decision log, working software (they can try from their desk). Trust me, they’ll be happy to see stuff happening, and may even ease up on their controlling ways. Try to be empathetic to their micro-management, especially if the team was having trouble showing progress. Progress and validated outcomes silence the doubters.
* **We keep getting interrupted with production issues!**  
OK. Even better. Focus everyone on fixing them. And then reduce the number of productions issues. You weren’t getting much done while fires were burning anyway. Also…sounds really important. “Keep getting” drives a big spike into you 9s promise!
* **We keep getting interrupted by support to run manual tasks for them!**  
Figure out how they can run those themselves (safely).
* **Someone needs to see our progress on a burn-down chart, and we’ll drive ourselves crazy because we are tripling our number of stories!**  
Easy. Come up with a list of non-solution-focused, verifiable, indisputable, and sequential goals (that’s the stuff they care about anyway). Put them up on the wall. Start checking them off. Here’s the deal…coupling the need for small, discreet pieces of work with chunks of progress for project management was always a bad idea (IMHO). One always suffers. Better to treat them differently.
* **Sounds like this is only for “mature” teams! How about junior teams?**  
Do you mean to tell me that five qualified (but perhaps less experienced) professionals can’t get one tiny story done in a day? Also, I’m assuming you have someone experienced on the team to show the way, right? Seriously! Pop open a text editor. Get into the weeds with them. And if you’re right…the team was never the blocker. Your organization needs to mature.
* **Sounds like this is only for junior teams. We don’t need this shit!**  
The beauty here is that there is always something to learn. Are you still struggling with some impediments? Imagine an org with CI/CD nailed down, and a safe production-like environment that gets the latest updates. Now imagine small stories. It starts to look like this.
* **My team is a bunch of slackers. They will slow me down! I won’t get my promotion.  
**Are people incentivized this way in your organization? Perhaps. If so — and if your coworkers are truly slacking — I can’t fault you too much for hating this. But I would suggest two things 1) you might not be seeing everything (you might be contributing in a small way to the problem), and 2) consider working somewhere where you don’t feel this. Why not work in a trusting environment? Finally…there’s no hiding in this model (but don’t tell that to managers).
* **We’re introverts on the team. Too much socializing! I preferred having my own little task for a couple days.**  
This is a very good point and something you should certainly discuss with your team. It gets to the human side of the this which is very important. If you “do it right”, there won’t be more meetings. Maybe you can opt for a more individual task while people pair up? Or have a quiet day once a week with a different rhythm of tasks.
* **But we’ll go so slow!**  
The data will speak for itself. First get a benchmark on your current approach. Measure throughput in story points and story counts. Measure cycle-time. Measure unplanned work. Now try. What are you seeing? Yes the stories will be smaller, and that will impact the data. So you should do the same thing for your units of customer value. Keep in mind, your “old” system was sensitive to variations in how people scope stories.
* **What if it works? Then we’ll need to work this way forever.**  
Not a terrible problem to have.
* **What if it doesn’t?**  
You’ll learn a ton along the way. Teams discover bottlenecks that they simply can’t remove. But shining a light on those bottlenecks can be a win.
Phew. ~2000 words on this. Oh geez.

Back to the caveat. I’m sure there are a million reasons why this won’t work for you. That’s OK with me. Even as a thought experiment it is worthwhile.

