按照课程内容和顺序总结笔记

# MA 38 Cost Estimation Using Regression | Cost Accounting

## 元信息

- **序号**: 38
- **课程**: Managerial_Accounting
- **处理时间**: 2026-05-15 22:14:22
- **来源**: 精修版

---

## 精修内容

# MA 38 Cost Estimation Using Regression | Cost Accounting

## 元信息

- **序号**: 38
- **课程**: Managerial_Accounting
- **链接**: https://www.youtube.com/watch?v=DxTB4eZn_jw
- **处理时间**: 2026-05-15 22:13:44
- **来源**: YouTube 自动生成字幕
- **条目数**: 450

---

## 字幕内容

Hello and welcome. Today we're working in managerial accounting, in the cost-volume-profit analysis chapter, and we're working on regression. How do we calculate fixed cost and variable cost using regression? The previous video was the high-low method. Now we're doing the same problem using regression. If you're new, my name is Jeff, and I teach a lot of accounting and finance. So please like, comment, and subscribe, and let's get started.

Here's our problem. We have the Yankee company, which has about nine months of information for cost and units. Here are the units, and here is the cost. In the previous video, we estimated our fixed cost and variable cost using the high-low method, but we're going to do the same questions here using regression. So, what is our estimated variable cost per unit? What's our estimated fixed cost? What would the cost formula be? What is R and R-squared? We'll get to that in just a minute. Then, if we produce 180 units, what's our estimate for total cost? And if our costs are $8,000, what's our estimate for units?

Now, let me give you a couple of ideas we can do here. I'm using Excel right now, and I'm going to show you two ways to do regression using Excel. One is the scatter plot graph, where we can draw a line and get a formula. That's going to be a really easy way of doing it. There's also an `INTERCEPT` function and a `SLOPE` function, another easy way. There is a regression function in the Data Analysis ToolPak. I'm not going to show that for today. If you want to see that, put that in the comments below. Also, I think I probably need to do a video using the most common financial calculator, the BA-II Plus. You can put the data in the data menu and then run it through the stats menu to get the same thing. So, if you're taking a test, then you'll probably use the BA-II Plus. If you're doing it at work or on homework, you can use Excel. It's going to be really easy.

Let's get started. Let me show you how to do it on Excel. Regression is where we take all the data points. The units would be the X, and the cost would be the Y. Remember, the cost formula would be `y = a + bx`. That's the formula that we use. Sometimes you see it as `y = mx + b`. But in this case, Y would be the total cost, A would be the total fixed cost, B would be the variable cost per unit, and X would be the number of units.

I think the easiest way to do it is probably just to highlight the units and the cost. I'm using Excel, of course, and I can go to the Insert tab and go to a scatter plot. Here is going to be the scatter plot. It's going to diagram the cost. Here we have the number of units and the cost. I can click on this, right-click, and say "Add Trendline." This trendline is linear regression. I'm going to do two things while I'm looking at it: I'm going to display the equation on the chart and display the R-squared value on the chart. So I can get rid of this. I can move this down and make it a little bit bigger so we can see it. Okay, so we already have the cost equation. We have all the units on the bottom axis (the X-axis) and the costs on the left axis (the Y-axis). Y is the vertical, X is the horizontal.

Here we have the cost equation. The cost equation is `Y = 25.232x + 2695`. Now, here we know the R-squared number, which is typically what we want to know. The R-squared is 0.723. So, what is the estimated variable cost per unit? The variable cost per unit is $25.232. The fixed cost is $2,695. The cost formula is given right here on the graph. They put it in a slightly different format. We would put A first and then add the `bx`. That's fine; it doesn't matter.

What is R and R-squared? If the R-squared is 0.723, then to find R, we need to take the square root of that number. We can take 0.723 to the power of 1/2, which is the square root. So, it's 0.8503, basically. Our R is our correlation, and so these numbers are correlated at about 85%. They move in the same direction; it's a positive correlation. Remember, R goes from +1 to -1. So, this is a strong positive correlation. R is the correlation. The R-squared is the coefficient of determination. If you take 0.85 times 0.85, that should equal 0.723. This says that all the variability we see in the cost, we can explain about 72% of what's going on just by knowing the number of units. So, this is a good model to explain our fixed cost and variable cost.

If we have 180 units, what is our estimate for total cost? We're going to take 180 times 25.232, plus the 2,695. So, our estimated cost if we have 180 units is $7,237. We feel good about that estimate. It's an estimate, right?

Now, what if our costs are $8,000? We plug in 8,000 as Y, and we're going to have to do the math on this. We're going to take 8,000 minus 2,695. We're going to get 5,305, which is going to equal 25.232x. So, we need to take this number and, because of algebra, to solve for X, we're going to divide that number by 25.232. We'll find we must have 210.25 units. So at a cost of $8,000, we think our number of units would be about 210 and a quarter. Those are our answers for our homework.

Now we've done the scatter plot. Everything's based on the scatter plot. The other way to do this is we could use the `INTERCEPT` and the `SLOPE` functions. Let's think about what we know. The Y-axis is where the line crosses, and that's called the Y-intercept. So our fixed cost here is called the Y-intercept. The slope of this line would be our variable cost. To figure out our variable cost, we need to use the `SLOPE` function. Let me pull up the `SLOPE` function. We need the known Y's and the known X's. Our Y's are our total costs, and our X's are the units. Done. Using the `SLOPE` function, I have 25.2323.

I'm going to use the `INTERCEPT` function to find the fixed cost. I need the known Y's, so I put in all the Y's, and the known X's, I put in all the X's (the units) and solve. We get something like 2695.004. So we have some decimals; it's not just whole numbers. Here we have our estimate for fixed cost.

I think the two easiest ways to do it would be the scatter plot and using the `INTERCEPT` and `SLOPE` functions on Excel. The nice way about doing this is I wouldn't have to type in that number; I can just use the cell reference. I could immediately multiply it by 180 units and then add the 2695.

So that's two ways. If you want me to show you how to do it on the BA-II Plus calculator, drop that below in the comments. Thanks for watching, and we'll see you on the next video.