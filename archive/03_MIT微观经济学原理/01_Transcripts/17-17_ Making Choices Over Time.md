按照课程内容和顺序总结笔记

# 17_ Making Choices Over Time

## 元信息

- **序号**: 17
- **课程**: MIT_14.01_Principles_of_Microeconomics
- **处理时间**: 2026-05-15 19:41:15
- **来源**: 精修版

---

## 精修内容

Today, we're going to continue our discussion of factor markets by talking about how capital markets impact real-world decisions. Last time, we talked about the capital market and the way that firms finance their capital. They go to a pool of savings that individuals decide how much to make. Individuals make an intertemporal choice about how much to consume each period, which then yields an amount of savings. Based on that pool of savings, firms borrow at some interest rate `i` and decide how much to invest.

Today, we're going to talk about a number of interesting applications that arise from capital markets that are important in the real world. I'm going to start by talking about the concept of **present value**.

### Present Value

The key insight when we think about capital markets is that a dollar tomorrow is worth less than a dollar today. That's because if you had the dollar today, you could productively invest it and have more than a dollar tomorrow. So, a dollar today is worth more because you could do something productive with that dollar if you had it today. What that means is that dollars in different periods are worth different things; you can't just add them up.

The analogy I like is thinking about a pound of apples, a pound of steak, and a pound of gold. You wouldn't just add them up and say, "I have 3 pounds." That'd be useless. You'd want to know what each is worth and add up the dollar value of them. It's a similar thing with money received over time. You can't just say, "I'm getting a dollar today, a dollar next year, and a dollar 5 years from now." They aren't the same thing. Money received at different points in time is worth different amounts because money received in the future foregoes the possibility of investing it today.

So, what do we do to deal with this? In economics, we use the concept of **present value**. Present value is the value of every period's payments in terms of today. The way we deal with the fact that money in different periods is worth different amounts is by what we call discounting it back to today. We essentially take future dollars and discount them back to today to get their present value. We discount them because future dollars are worth less.

Let's do an example. Imagine the interest rate `i` is 10%, and you want to have $100 next year. How much do you have to put in the bank today? We can solve the equation: the amount you put in the bank today, let's call that `Y`, times `(1 + i)` must equal $100.

`Y * (1 + i) = 100`

So, `Y` equals $90.90. If you put $90.90 in the bank today at a 10% interest rate, you will have $100 tomorrow.

More generally, we say that the present value (`PV`) of any future payment is the future value (`FV`) divided by `(1 + i)` to the power of `t`, where `t` is the number of periods in the future. Money received `t` periods in the future is worth the amount you get in the future over `(1 + i)^t`.

`PV = FV / (1 + i)^t`

That is our general formula for how we think about present value. You take all the future payments and discount them back to today by dividing by `(1 + i)^t`.

Now, that works well if there's one future payment coming. But what if, as in many cases, there's a whole stream of future payments? The logic is the same: you just want to take each future payment and discount it by how far it is in the future. Suppose you want me to loan you $30, and you'll pay me back $10 each of the next 3 years. The interest rate is 10%. Well, I will say no to that. The present value of that stream of payments is:

`PV = 10 / (1.1) + 10 / (1.1)^2 + 10 / (1.1)^3 = $24.87`

So I am losing money. If I give you $30 today and have you give me $10 back each of the next 3 years, I'm losing money. Why? Because if I'd simply taken that money and invested it in the bank, I would have had a lot more. The money that comes in the future must be discounted back to today. That's the key insight of present value. You can't just add it up; you've got to put it in today's terms by discounting it by the interest rate and how far it is in the future.

The general formula for present value you need to know is that if you get a flat stream of payment `F` for a number of periods, it's:

`PV = F * [ 1/(1+i)^1 + 1/(1+i)^2 + 1/(1+i)^3 + ... ]`

A common formula we'll use in this class is for a **perpetuity**, which is a flat payment you get forever. If we take the infinite sum of this equation, we can summarize it as:

`PV ≈ F / i`

So, if I promise to pay you a certain amount `F` forever, that is worth `F` over the interest rate. In other words, if the interest rate is 10%, a promise to pay you $10 forever is worth about $100. This is a useful shortcut. (This assumes a constant interest rate over time. If the interest rate changes, you can't use this simple formula).

### Future Value and the Power of Compounding

Now, let's flip this on its head and think about **future value**. By the same logic, the future value (`FV`) of money you invest today is the amount you put in (`PV`) times `(1 + i)^t`.

`FV = PV * (1 + i)^t`

The reason we write this formula out is because I want to highlight a key feature: the **beauty of compounding**. With a formula like this, you earn interest on your interest. If you leave money in the bank, you don't just earn interest on the initial amount you put in; you earn interest on the interest you've already earned over time. This can be quite large.

Let's do a simple example. Imagine you plan to work full-time from age 22 to age 70, and you can save at a constant 7% interest rate (assuming zero inflation). Let's consider two savings plans.

*   **Plan 1:** You save $3,000 a year for the first 15 years that you work and then stop saving, just letting the money sit in the bank. After 15 years, you will have $75,387. You're only 37 years old. That money will then sit there for the next 33 years. At age 70, you will have:
    `$75,387 * (1.07)^33 = $703,010`

*   **Plan 2:** You say, "I'm young, I'm going to party. I'll worry about retirement later." You save nothing for the first 15 years. Then, you save $3,000 every year for the remaining 33 years of your career. If you do that, you end up with **$356,800** when you retire.

Think about this. In Plan 2, you save for more than twice as many years (33 vs. 15), but you end up with half as much money. That's the miracle of compounding. The earlier you save, the more money you can make along the way. That's why you need to start saving right away when you get a job and are offered a 401k.

This isn't just for students; it applies to professional athletes too. Take Bobby Bonilla, a baseball player. In 1999, the Mets wanted to buy out the remaining $5.9 million on his contract. Instead of taking the money then, he had them defer it at an 8% interest rate. By the time his payments started in 2011, the value had grown to nearly $30 million. Every year on "Bobby Bonilla Day," he gets a check for over a million dollars from the Mets because he was patient enough to let compounding work its magic.

### Inflation and Real vs. Nominal Interest Rates

Let's get a little more realistic and recognize that in life, prices aren't constant; we have inflation. How does that affect our thinking?

Inflation is the percentage rise in the price level year over year. The government measures this using the **Consumer Price Index (CPI)**, which tracks the price of a weighted basket of hundreds of goods that consumers buy.

The bottom line is, we don't care about dollars; we care about how many goods we can buy. Therefore, what matters is not the **nominal interest rate (`i`)** you see advertised in a bank, but the **real interest rate (`r`)**. We define the real interest rate as the nominal interest rate minus the rate of inflation (`π`).

`r = i - π`

The real interest rate measures how much more you have in terms of goods you can consume. For example, if you save $100 at a 10% nominal interest rate, you'll have $110 next year. If inflation is 0%, you are 10% richer in terms of what you can buy. But if inflation is also 10%, then the prices of goods have gone up by 10%, and your $110 can only buy the same amount of goods as your $100 could a year ago. Your real interest rate is zero.

So, all the math we've done can go through; you just need to be thinking about using the real interest rate, not the nominal interest rate. In practice, this is complicated. You have to use *expected* inflation, which is hard to guess. Furthermore, measuring inflation itself is tricky due to things like quality improvements in goods (e.g., a laptop today is much better than one from last year, even at the same price). For the rest of this course, unless told otherwise, we'll assume inflation is zero, so `i` and `r` are interchangeable.

### Making Choices Over Time

How do we model choices over time? You have to evaluate choices in present value terms. You can't just add up the money; you have to pick the option with the highest present value.

Let's imagine an athlete considering two contracts:
*   **Contract A:** $1 million today.
*   **Contract B:** $500,000 today and $1.5 million in 10 years.

The newspaper might say Contract B is a $2 million deal, but that's wrong. The present value of Contract A is $1 million. The present value of Contract B is:

`PV_B = $500,000 + $1,500,000 / (1 + i)^10`

Whether B is a better deal depends on the interest rate.
*   If `i = 7%`, then `PV_B` is about $1.26 million, which is a good deal.
*   If `i = 14%`, then `PV_B` is about $0.9 million, which is a worse deal.

Why? The higher the interest rate, the more you want to get your money up front so you can invest it and benefit from compounding. The higher interest rate is the opportunity cost of waiting for the money.

This is not an abstract concept. Max Scherzer, a pitcher for the Washington Nationals, signed a 7-year, $210 million contract. But it was structured to be paid out over 14 years. In present value terms, it was only worth about $166 million, dropping it from the 10th highest contract ever to around the 20th. Similarly, a Mega Millions lottery prize advertised as $290 million, paid out over 20 years, might only have a present value of $164 million (at a 7% interest rate).

### Investment Decisions and Net Present Value (NPV)

How do firms make investment decisions? When you're making an investment, you are spending money today to make money tomorrow. In that case, we talk about **Net Present Value (NPV)**, which is the same as present value but allows for negative values (costs). You want to invest only if the NPV is greater than zero.

The formula for NPV is the sum of the discounted net benefits (revenues `R` minus costs `C`) for each period:

`NPV = (R₀ - C₀) + (R₁ - C₁) / (1+i) + (R₂ - C₂) / (1+i)² + ...`

Imagine a machine that costs $100 today (`C₀ = 100`). It will last forever, delivering revenues of $200 per year and having maintenance costs of $50 per year. The net present value is:

`NPV = -100 + (200 - 50) / i = -100 + 150 / i`

What is the relationship between a firm's desire to invest and the interest rate? As the interest rate `i` goes up, the NPV of the investment goes down. Firms will want to do less investment. The interest rate is the opportunity cost of investment. The higher the interest rate, the less firms want to invest in machines and the more they just want to put their money in the bank. This is why you often hear in the news, "High interest rates are bad for business."

This same logic applies to consumers. A number of years ago, I had to decide whether to insulate my ancient house. My heating bills were $2,000/year. Insulation would lower them by 25%, a savings of $500/year. The insulation cost $4,000. Should I do it? The NPV is:

`NPV = -4000 + 500 / i`

This formula says that if I think the interest rate is less than 12.5% (`500 / 4000`), I should insulate. If it's more, I should just invest the money and use the returns to pay my higher heating bills. (Even if I don't plan to own the house forever, this logic holds because the insulation increases the asset value of the house by its NPV).

### Investing in Human Capital

This isn't just about retirement or business machines. Let's talk about something you care about: going to college. Your decision to go to college is an investment decision. You're investing in your **human capital**.

Let's look at an example.
*   **Costs:** Tuition ($35,000/year) plus foregone earnings (what you could have earned if you worked instead, say $20,000/year).
*   **Benefits:** Higher lifetime earnings. A typical college graduate at age 22 earns $45,000, while a high school graduate earns $28,000. Not only do you start higher, but your earnings grow faster. By age 51, the college grad earns $80,000 while the high school grad earns $45,000.

The benefit (the yellow area in the graph) is much bigger than the cost (the green area), but the cost comes now and the benefit comes later. It all depends on the discount rate. At low interest rates, college is a great deal. But as the interest rate rises, the present value of those future earnings shrinks. In our example, once the interest rate gets above 8%, it becomes a worse deal for the average person to go to college.

This is why financial aid is so important. Grants directly reduce the cost. Loans are more subtle. If a student loan has a lower interest rate than the market rate, it effectively lowers the discount rate for the student, making the investment in college more attractive. This is a key public policy tool to encourage people to invest in their education.

We'll stop there. No class on Monday, that's Veteran's Day. So we'll meet in a week, next Wednesday.