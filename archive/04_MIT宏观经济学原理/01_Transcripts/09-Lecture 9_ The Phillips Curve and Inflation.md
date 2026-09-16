按照课程内容和顺序总结笔记

# Lecture 9: The Phillips Curve and Inflation

## 元信息

- **序号**: 9
- **课程**: MIT_14.02_Principles_of_Macroeconomics
- **处理时间**: 2026-05-15 23:46:41
- **来源**: 精修版

---

## 精修内容

# Lecture 9: The Phillips Curve and Inflation

## 元信息

- **序号**: 9
- **课程**: MIT_14.02_Principles_of_Macroeconomics
- **链接**: https://www.youtube.com/watch?v=mhqsslG9tyw
- **处理时间**: 2026-05-15 23:45:07
- **来源**: YouTube 自动生成字幕
- **条目数**: 2542

---

## 字幕内容

Today I'm going to talk about the **Phillips curve** and inflation. As I said in the previous lecture, the material that is specific to this lecture will not be on this quiz. It's the beginning of what is perhaps the most important model you'll see in this class, but it will take us three or four lectures to develop. I'm going to say things that may help you understand the previous lecture a little better, so if you're only concerned about the next quiz, there will be a small review of the previous lecture here. But again, anything that's specific to this lecture and was not in the previous one won't be part of this quiz.

So, what is this **Phillips curve**? In 1958, an economist at the London School of Economics (LSE), A.W. Phillips, came up with an empirical relationship. Using historical data for the US up to the 1950s, he found a negative relation between the unemployment rate and the rate of inflation. Then, our very own Paul Samuelson and Robert Solow labeled this relationship the **Phillips curve** in honor of A.W. Phillips. Nowadays, it is a central concept in macroeconomics and is certainly very relevant to understanding what is going on right now, not only in the US economy but in most economies around the world.

Let me show you a plot. This isn't the one that Phillips plotted; I think this is the one that Samuelson and Solow plotted for US data from 1900 to 1960. You find this sort of negative correlation. It's reasonable: at very low levels of unemployment, you typically see very high levels of inflation. Conversely, at very high levels of unemployment, you tend to see low levels of inflation or even deflation. In fact, this period includes the Great Depression.

This was just an empirical regularity, but we can build a theory about this relationship using the ingredients we already have. This part is a bit of a review of the previous lecture. Remember, we had a **wage-setting equation** and a **price-setting equation**.

The wage-setting equation was `W = Pe * F(u, z)`. This says the nominal wage (`W`) equals the expected price level (`Pe`) times a function `F` that is decreasing in unemployment (`u`) and increasing in institutional variables (`z`) that support workers. The price-setting equation was `P = (1 + m)W`, where the price (`P`) is simply the wage marked up by a factor `m`.

I'm trying to derive a **Phillips curve** from these theoretical ingredients. To simplify, I'll assume the function `F(u, z)` is a linear function, at least locally: `1 - αu + z`. It is decreasing in unemployment (`u`) and increasing in `z`. Why is it decreasing in unemployment? Because if unemployment goes up, for any given expected price, wage demand is lower. For a worker, becoming unemployed is a scary situation. For firms, it's easier to find and replace a worker when unemployment is high. A worker is scared for two reasons: one, it's more likely they get fired when unemployment is high (typically a recession), and two, they know that if they fall into the unemployment pool, it would take longer to get out of it. Firms see the opposite side: it's easy for them to replace a worker because there are lots of available workers.

Now, I'm going to substitute this linear function back into the wage-setting equation, and then substitute the resulting wage `W` into the price-setting equation. I end up with an equation for the price level `P`: `P = Pe * (1 + m) * (1 - αu + z)`. This says that the price, given the expected price, is decreasing in unemployment, increasing in `z`, and increasing in the markup `m`. Why is the price decreasing in unemployment? Because higher unemployment leads to lower wages. Since our firm needs one worker to produce one unit of a good, the cost of production goes down with the wage. Because the firm asks for a constant markup over that wage, when the wage declines, the price drops.

This is all review. This equation isn't the **Phillips curve** yet. Remember, the Phillips curve is a relationship between *inflation* and unemployment, not the *price level* and unemployment. We want to go one derivative higher. Inflation is the rate of change of `P`, not the level of `P`.

To do that, I'll take our price equation, `Pt = Pet * (1 + m) * (1 - αut + zt)`, and divide both sides by `P(t-1)`, the price in the previous period. This gives me: `Pt / P(t-1) = (Pet / P(t-1)) * (1 + m) * (1 - αut + zt)`.

Remember that `Pt / P(t-1)` is equal to `1 + πt`, where `πt` is the inflation rate (`(Pt - P(t-1)) / P(t-1)`). Similarly, `Pet / P(t-1)` is equal to `1 + πet`, where `πet` is the expected inflation rate. Note that expected inflation is `(Pet - P(t-1)) / P(t-1)`. We use `P(t-1)` and not `Pe(t-1)` because at time `t`, when you're forming the expectation, you already know what the price was at `t-1`.

So, I can substitute these into the equation to get: `1 + πt = (1 + πet) * (1 + m) * (1 - αut + zt)`. This is our price-setting equation expressed in terms of inflation rates. Now, for small numbers `x`, the approximation `log(1 + x) ≈ x` is valid. If inflation, expected inflation, and the markup are small numbers (we're not in Argentina, we're in the US), we can take the log of both sides and use this approximation. This simplifies the expression to: `πt ≈ πet + m + z - αut`.

Now we have something that looks a lot more like the empirical relationship we were talking about: a relationship between inflation and unemployment. This equation says that for any given expected inflation (`πe`), markup (`m`), and labor market institutions (`z`), higher unemployment means lower inflation. The economics behind this is the same as before: higher unemployment leads to less wage pressure, as workers demand lower wages. This means lower prices, and therefore, lower inflation. I haven't done anything but algebra; the economic intuition is the same.

Now, how do we get to the simple downward-sloping line that Phillips and others found? Let's assume that expected inflation is equal to some constant, `π_bar`. In economics, we say that when this is the case, especially if `π` is a low number, **inflation expectations are well-anchored**. This means that even if inflation deviates in any single year due to a shock (like a high price of oil), people always expect it to return to its normal level. For example, a few years ago in the US, the normal level was around 2%. If inflation was 1.8%, people expected 2% for the next year. If it was 2.3%, they still expected 2% for the next year.

If we replace `πe` with a constant `π_bar`, our Phillips curve becomes `πt = (π_bar + m + z) - αut`. This is a simple downward-sloping line: inflation equals a constant minus `α` times unemployment. This theory explains what Phillips was finding. If you look at the US in the 1960s, you see this negative relationship. In fact, Bob Solow and Paul Samuelson were advising the US government at the time and suggested exploiting this trade-off. They argued we could accept a little more inflation to get lower unemployment. Initially, the deal was very good because the curve was very flat; you could cut unemployment a lot without getting much inflation. Eventually, the deal became worse as the curve got steeper, and lowering unemployment further started to generate a lot more inflation.

However, if you turn the page and look at the data from 1970 to 1995, the relationship breaks down. The data is all over the place; there's no clear negative relationship. If Mr. Phillips had been born a few decades later, he would have found nothing, and there would be no curve in his honor.

So, what happened? Our theory can explain this as well. The theory is not that inflation is a constant minus `αu`. It's only a constant if expectations are anchored. If expectations (`πe`) are moving around, or if anything else in the constant term (like `m` or `z`) is moving, then there's another source of variation. For example, in the 1970s, we had massive oil shocks. We can capture this with an increase in the markup `m`, as firms need to mark up prices more to cover higher energy costs. An increase in `m` shifts the entire Phillips curve up. For any given level of unemployment, you now get higher inflation. This is one reason for the high inflation points in that period.

The other, more interesting reason is that as inflation went up, people stopped believing in the old model of expectations. The expectation formation mechanism changed. Expected inflation became **de-anchored**. It was no longer anchored around a constant like 2%. Instead, it began to follow the data. If we got 5% inflation today, people began to think next year's inflation would be closer to 5%, not 2%. This is what has the Fed and other central banks terrified today. Inflation is much higher than 2%, and they are worried about expectations becoming de-anchored.

Let's formalize this with a more general model for expected inflation: `πet = (1 - θ)π_bar + θπ(t-1)`. Here, expected inflation is a weighted average of the long-run anchor `π_bar` and last period's inflation `π(t-1)`. The parameter `θ` (theta) captures how much weight people put on recent inflation. In the 1960s, `θ` was essentially zero. But as inflation became higher and more persistent in the 1970s, `θ` began to increase and got very close to one.

When `θ` is one, the model becomes `πet = π(t-1)`. The best forecast for this year's inflation is last year's inflation. If we substitute this into our Phillips curve equation, we get `πt = π(t-1) + (m + z) - αut`. We can rewrite this as `πt - π(t-1) = (m + z) - αut`. This is a relationship between the *change* in inflation and the level of unemployment. This is sometimes called the **accelerationist Phillips curve**. If unemployment is very low, not only is inflation high, but it's also growing over time. If you estimate this accelerationist Phillips curve on the data from the 70s and 80s, you get a much better fit. You can start to recover the negative relationship, but it's between the *change* in inflation and the level of unemployment. This is a very scary situation for a central bank because it's easy for things to escalate.

By the mid-1990s, expectations were re-anchored. There was a very aggressive policy to control inflation led by Paul Volcker in the US, which was imitated around the world. Inflation expectations became re-anchored around the central bank's target of 2%. So, we went back to a model where `θ` was close to zero, and the original Phillips curve relationship re-emerged. If you plot inflation against unemployment from 1996 onwards, you again see a downward-sloping relationship. This was a great success of monetary policy.

The last thing I want to do is connect the **Phillips curve** with the **natural rate of unemployment** (`UN`), which we discussed in the previous lecture. This is how you'll typically see the Phillips curve written, and it's how policymakers like Chairman Powell talk about it.

Remember, the definition of the **natural rate of unemployment** is the unemployment rate that prevails when the actual price level equals the expected price level (`P = Pe`). If `P = Pe`, it also means that actual inflation equals expected inflation (`π = πe`). So, we can define the natural rate from our Phillips curve equation: `πt = πet + (m + z) - αut`. By setting `πt = πet`, the unemployment rate `u` becomes the natural rate `UN`. The `π` terms cancel out, and we can solve for `UN`: `0 = (m + z) - αUN`, which gives `UN = (m + z) / α`.

This tells us that the natural rate of unemployment increases if the markup `m` or the institutional factors `z` go up. Why? If `m` goes up, firms want to pay a lower real wage. To get workers to accept this lower real wage, their bargaining power must be reduced, which requires a higher level of unemployment. Similarly, if `z` goes up (e.g., more generous unemployment benefits), workers will demand a higher real wage at any given level of unemployment. Since firms' offered real wage is fixed by the markup, the only way to restore equilibrium is for unemployment to rise, weakening workers' position until they accept the wage firms are willing to pay.

Now for the final step. We can use our expression for the natural rate, `αUN = m + z`, to substitute `m + z` out of the Phillips curve equation.
The original equation is: `πt = πet + (m + z) - αut`.
Substituting `αUN` for `m + z` gives: `πt = πet + αUN - αut`.
Rearranging this gives the modern form of the Phillips curve: `πt - πet = -α(ut - UN)`.

This equation states that the deviation of inflation from its expected level is proportional to the **unemployment gap**: the deviation of the actual unemployment rate from the natural rate. When Chairman Powell is worried about the labor market being "tight," he's saying that unemployment is likely below the natural rate (`u < UN`). This creates a negative unemployment gap, which puts upward pressure on inflation. This gap is a very important concept for macroeconomists and central bankers. The problem is that `UN` is a difficult object to estimate.

Here is a chart showing an estimate of the natural rate of unemployment in the US (blue line) versus the actual rate (red line). In the period after the 2008 financial crisis, the actual unemployment rate was much higher than the natural rate. This put downward pressure on inflation, and we even had some deflation. In the period just before COVID, unemployment went below what we thought was the natural rate, but inflation wasn't picking up much, which was a mystery. It suggested the natural rate itself might have been declining. Now, we are in a situation with extremely low unemployment and very high inflation, which suggests we have a large negative unemployment gap (`u < UN`), putting a lot of pressure on inflation.

---

## Q&A

> Is the only way to fix inflationary expectations to increase unemployment?

That's a very good question. There are two views at this moment. One view says there's no way around that. They just look at these curves and say, "Look, we need a recession," because otherwise, we are not going to control inflation. A recession means high unemployment. At this moment, that is becoming the dominant view.

There is another view, which the Fed adopted for a while, that says this isn't the only indicator of labor market tightness. Other indicators, like the flows between employment and unemployment, are moving in the right direction. Also, a big part of the initial inflation was cost-push factors from supply chains, which are now subsiding. So, there are dynamics that suggest inflation is declining even without a large increase in unemployment.

My main concern, and I think the crucial battle, is over keeping inflation expectations anchored. If the Fed can keep `θ` close to zero, then to bring inflation back to its 2% target, all they really need to do is bring unemployment back to the natural rate, which means closing the current gap. That's a relatively small change.

However, if they fail and expectations become de-anchored (i.e., `θ` gets close to one and expected inflation rises to, say, 6%), then we have a big problem. In that case, just bringing unemployment to the natural rate would only bring inflation down to 6%. To get inflation back to 2%, they would need to push unemployment *much higher* than the natural rate. That's why I say the battle will be won or lost on that expectations term. If expected inflation becomes unanchored, there's almost no way around a recession to fix it.

> How much of this current inflationary pressure is caused by unemployment versus the supply side?

It varies. In the US, a big component of the initial inflation was supply-side stuff: bottlenecks in ports, etc. That's almost all gone now. So for the US today, it is mostly an aggregate demand problem. People are spending a lot, which is why unemployment is so low, and that feeds into inflation through wages.

In Europe, the story is different. In the summer of 2022, both the US and Europe had about 10% inflation. But in the US, you could say two-thirds of it was excess aggregate demand, while in Europe, two-thirds was supply-side problems, especially related to the war in Ukraine and energy prices. So for the US, while an end to the war would help, it won't be enough. The economy is just too hot.

> Can you explain again why an increase in `z` would increase the natural rate of unemployment?

Let's look at the wage-setting and price-setting equations at the natural rate, where `Pe = P`.
The wage-setting equation becomes `W/P = F(u, z)`. This is the real wage workers demand.
The price-setting equation becomes `W/P = 1 / (1 + m)`. This is the real wage firms are willing to pay.

If `z` goes up (e.g., unemployment benefits increase), workers demand a higher real wage for any given `u`. But the real wage firms are willing to pay is fixed by the markup `m`. The two are now inconsistent. To restore equilibrium, the real wage that workers demand must come down. The only variable in the model that can weaken workers' bargaining power and make them accept a lower real wage is a higher unemployment rate. Therefore, the new natural rate of unemployment must be higher.

> Last lecture we talked about the labor force participation rate. Is there any reason to try and increase that to help with inflation?

Fantastic question. Yes. What you need is more employment for a given amount of aggregate demand. Increasing the labor supply, either through higher participation or immigration, puts downward pressure on wages and thus on inflation. We are taking the labor force as given in this model, but in reality, it's a very important margin.

Some of the emergency pandemic benefits (which are part of `z`) are disappearing, which should naturally bring participation back up, and it is beginning to pick up. The other important margin is immigration. The US lost a significant flow of immigrants during COVID, which contributed to the decline in the labor force. Increasing the labor supply is a way to cool down the labor market without having to rely solely on reducing aggregate demand.