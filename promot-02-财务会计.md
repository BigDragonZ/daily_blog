# 课程提示词：02 财务会计（Financial Accounting）

> 工作流程：本文件由 AI 按课程讲义预生成大纲 → 学习者逐章补充个人批注 → 按页生成前端页面。
> 工程规则、图表规范、验收清单均在 AGENTS.md，无需在此重复。
> 学习者画像：已学完曼昆经济学原理 + MIT 微观/宏观（经济学术语扎实），会计零基础——全部内容按"新概念"处理，不使用【新】/【重叠】标记。
> 本课程的"图"以：报表结构图、T 型账户（T-Account）、会计等式变动图、流程图、计算示例表格、对比表为主，【配图】标记按此理解。
> 例题不单独列大纲，只以"配套例题：主题"点名，讲解并入对应主题小节。

输入：input/02_财务会计/01_Transcripts/ 下全部 181 个 md（Lesson 1~12，按文件名中 "Lesson X_Y" 编号理解顺序，不要按字符串排序——"100-" 排在 "10-" 前面）

## 数据问题（生成页面时注意）

讲义共 181 个文件，编号 01~190 中有 9 个缺号，对应内容需按标准教材补全并向学习者提示：

| 缺失编号 | 位置上下文 | 推断内容 |
| --- | --- | --- |
| 2_9 | 2_8 借贷规则 → 2_10「借贷示例 3-8」 | 借贷记账示例 1-2 |
| 4_13 | 4_12 结账分录入门 → 4_14 结账分录 | 结账分录的过渡讲解（疑为收益汇总/ Income Summary 账户） |
| 5_10 | 5_9 凭证系统 → 5_11 银行对账简介 | 银行账户/现金控制的过渡课 |
| 6_16 | 6_15 销售商品 → 6_17 销售交易示例 | 销售退回与折让（Sales Returns & Allowances） |
| 6_19 | 6_18 捆绑销售 → 6_20 毛利分析 | 商业企业多步式利润表（Multi-step Income Statement） |
| 7_1 | 第 7 章开篇（现有从 7_2 开始） | 存货计价章导论 |
| 8_8 | 8_7 账龄分析示例 → 8_9 收回已核销坏账 | 坏账核销分录详解（Write-off） |
| 10_15、10_16 | 10_14 资产负债率 → 10_17 折价债券利息 | 债券定价（现值）与溢价发行债券的利息 |

其他数据问题：
- 文件 167 文件名误标为「Straight Line Method ... Bond Premium」，实际内容是「实际利率法摊销——债券折价」，以内容为准。
- 文件 07/08 的 Lesson 编号与文件序相反（07=Lesson 1_8，08=Lesson 1_7），按 Lesson 编号处理。
- 未发现讲义正文截断；文件 11、171 结尾为推广语，属正常。

## 分页与预算（12 页）

- P01 会计基础与四大报表（Lesson 1，6-8 图/表）
- P02 会计等式与借贷记账（Lesson 2，7-9 图/表）
- P03 权责发生制与利润表（Lesson 3，6-8 图/表）
- P04 调整分录与结账：完整会计循环（Lesson 4，6-8 图/表）
- P05 舞弊、内部控制与现金（Lesson 5，6-7 图/表）
- P06 商业运营与商品存货（Lesson 6，7-9 图/表）
- P07 存货计价：FIFO/LIFO/加权平均（Lesson 7，6-8 图/表）
- P08 应收款项与坏账（Lesson 8，5-7 图/表）
- P09 长期资产与折旧（Lesson 9，6-8 图/表）
- P10 负债与债券（Lesson 10，7-9 图/表）
- P11 公司股权（Lesson 11，6-8 图/表）
- P12 现金流量表（Lesson 12，5-7 图/表）

风格与验收：遵循 AGENTS.md

---

## Lesson 1 会计基础与四大报表（The Financial Statements）

引入：一家年年"盈利"的公司却突然倒闭——利润不等于现金，会计要解决的就是"用什么语言向外部人讲清楚一家公司"。

- 企业组织类型：独资企业（Sole Proprietorship）、合伙企业（Partnership）、公司制（Corporation）；核心分界是"与所有者一体"还是"独立法人（separate legal entity）"；公司制的有限责任与双重征税（double taxation）【配图：三种组织形式对比表：纳税方式/责任/存续/融资能力】
- 会计的目标：数据 → 会计处理 → 信息 → 决策；财务会计（Financial Accounting，服务外部用户）vs 管理会计（Managerial Accounting，服务内部用户）
- 六大账户类别：资产（Assets）、负债（Liabilities）、股东权益（Stockholders' Equity）三大核心 + 权益细分的收入（Revenues）、费用（Expenses）、股利（Dividends）【配图：六桶分类结构图，权益桶内再分三小桶】
- 账户（Accounts）：大类之下的明细（现金、应收账款、物料、设备……），回答"钱具体花在哪儿"
- 净利润（Net Income）= 收入 − 费用；盈利能力的核心指标，但单一指标如同单项验血结果，不能全面诊断
- 四大财务报表总览：利润表、留存收益表、资产负债表、现金流量表；报表是"概括性"的——胶带成本案例：披露过多会把商业秘密送给竞争对手【配图：四报表勾稽关系图：利润表净利润 → 留存收益表 → 资产负债表权益端；现金流量表独立解释现金变动】
- 利润表（Income Statement）：一段时期的经营成果；Facebook 合并利润表实例
- 留存收益表（Statement of Retained Earnings）：期初 + 净利润 − 股利 = 期末；股利不是费用；亚马逊长期亏损仍再投资的例子
- 资产负债表（Balance Sheet）：时点快照；基本会计等式 资产 = 负债 + 股东权益
- 现金流量表（Statement of Cash Flows）：经营/投资/筹资三活动概述（编制细节留到 Lesson 12）
- 准则体系：FASB 与 US GAAP（Generally Accepted Accounting Principles）、IASB 与 IFRS（International Financial Reporting Standards）、SEC 的监管角色
- 会计职业道德（Ethics）：CPA 信任度仅次于医生；道德≠法律
- 配套例题：编制留存收益表（两年度）；报表数字勾稽求缺失值；编制利润表+资产负债表（不可跳过留存收益表）
- 收尾对比表：四大报表对比（回答什么问题/时点还是时期/包含哪些账户类别/核心公式）

## Lesson 2 会计等式与借贷记账（Debits and Credits）

引入：借记卡上的"借"是取钱减少——但会计里的借（Debit）贷（Credit）与日常含义完全无关，先清空预设再学。

- 基本等式 vs 扩展会计等式（Expanded Accounting Equation）：资产 = 负债 +（股本 + 收入 − 费用 − 股利）；扩展等式是处理每笔交易的"密钥"【配图：扩展等式展开结构图】
- 文档记录（Documentation）：收据、发票等证据（evidence）先行，保证任何继任会计可复现账簿
- 交易分析四步骤：发生了什么 → 影响哪些账户 → 账户属于哪个类别 → 各类别如何变动；仅交换承诺（签设计合同）不构成交易，不入账
- 借贷规则：资产、费用、股利借增贷减；负债、权益、收入贷增借减；借（Debit）= 左，贷（Credit）= 右，仅此而已【配图：扩展等式 + 各类别借贷方向总图（T 型账户阵列），标"正常余额"方向】
- 日记账分录（Journal Entry）格式：借方顶格在前，贷方缩进在后；有借必有贷，借贷必相等
- 会计流水线：日记账（Journal，按时间）→ 过账（Posting）到 T 型账户/分类账（Ledger，按账户）→ 试算平衡表（Trial Balance）→ 报表【配图：会计循环流程图（本课段：交易→分录→过账→试算平衡）】
- 试算平衡表：借方合计 = 贷方合计；平衡≠无错（借贷同错、记错账户查不出）
- 分类资产负债表（Classified Balance Sheet）：流动（Current）/非流动（Non-current）划分，"一年或一个营业周期孰长"标准
- 比率：流动比率（Current Ratio）= 流动资产 / 流动负债，衡量短期偿债能力
- 配套例题：日记账分录（Polar Pop 公司系列交易，含"仅下订单不入账"）；过账到分类账；编制分类资产负债表
- 收尾对比表：日记账 vs 分类账 vs 试算平衡表（组织维度/回答的问题/使用者）

## Lesson 3 权责发生制与利润表（Accrual Accounting and the Income Statement）

引入：12 月预收客户全年咨询费——现金到手就算收入吗？现金收付制说"是"，权责发生制说"不"。

- 两种会计基础：现金收付制（Cash Basis）vs 权责发生制（Accrual Basis）；本课程全程使用权责发生制【配图：同一笔交易两种基础下的确认时点对比时间轴】
- 收入确认原则（Revenue Recognition Principle）：挣得（earned）+ 已实现或可实现（realized or realizable）时确认，与现金收付时点无关
- 配比原则（Matching Principle / Expense Recognition Principle）：费用在帮助产生收入的同期确认
- 收入/费用分录规则：收入、费用最终都汇入留存收益；收入贷增、费用借增的记忆锚点
- 未调整试算平衡表（Unadjusted Trial Balance）：汇总全部六类账户
- 递延（Deferral）：现金先于确认——递延收入（Deferred Revenue，预收，是负债）与预付费用（Prepaid Expenses，是资产）
- 应计（Accrual）：确认先于现金——应计收入（Accrued Revenue）与应计费用（Accrued Expenses）【配图：现金与确认先后 2×2 矩阵图（递延/应计 × 收入/费用）】
- 比率：净利润率（Net Profit Margin）= 净利润 / 收入；比率让不同规模公司可比
- 配套例题：现金制 vs 应计制利润表对照；编制收入费用分录；利润表→留存收益表→资产负债表全流程
- 收尾对比表：现金收付制 vs 权责发生制（确认时点/规则复杂度/GAAP 是否允许/利润与现金的关系）

## Lesson 4 调整分录与结账（Adjusting and Closing Entries）

引入：期末账簿显示保险余额 2000 美元，实际应只剩 1000——权责发生制下账簿天然"不准"，调整分录就是期末校准时钟。

- 调整分录（Adjusting Entries）的必要性：现金时点与确认时点错位；两大类——递延调整与应计调整
- 递延费用调整：预付费用耗用部分转费用；折旧（Depreciation）与摊销（Amortization）本质是递延费用调整（计算细节在 Lesson 9）
- 递延收入调整：预收款中已挣得部分转收入
- 应计收入调整：已挣未收，补记收入与应收
- 应计费用调整：已发生未付，补记费用与应付；所得税费用计提（净利润 × 税率，先计提后缴纳）
- 调整后试算平衡表（Adjusted Trial Balance）：调整后再试算，作为编表依据
- 结账分录（Closing Entries）三步：清收入 → 清费用 → 清股利，全部结转至留存收益（Retained Earnings）；临时账户（Temporary Accounts）清零 vs 永久账户（Permanent Accounts）结转；结账后试算平衡表（Post-closing Trial Balance）
- 缺失提示：4_13 缺号，按教材补 Income Summary（收益汇总）账户的过渡讲解【配图：完整会计循环流程图：交易→分录→过账→未调整试算→调整分录→调整后试算→财务报表→结账→结账后试算，标注本课覆盖区段】
- 配套例题：四笔调整分录；编制调整后试算表；编制结账分录
- 收尾对比表：四类调整分录对比（递延费用/递延收入/应计收入/应计费用：涉及的账户对、分录结构、现金方向）

## Lesson 5 舞弊、内部控制与现金（Fraud, Internal Control, and Cash）

引入：桌上放一张桌子没人偷，放一张 100 美元钞票明天就不见了——现金是最易被侵占的资产，所以围绕它有一整套控制制度。

- 舞弊（Fraud）类型：财务报表舞弊（financial statement fraud）vs 资产侵占（misappropriation of assets）与腐败（corruption）
- 舞弊三角（Fraud Triangle）：压力（Pressure/Incentive）、机会（Opportunity）、合理化（Rationalization）；控制机会端是公司的主战场【配图：舞弊三角图，三角标注，注明"公司能直接干预的是机会"】
- 《萨班斯-奥克斯利法案》（Sarbanes-Oxley Act, SOX, 2002）：安然/世通丑闻背景，强化管理层对报表与内控的责任
- 内部控制（Internal Controls）三大目标：运营效率效果、财务报告可靠、合规
- 控制活动原则（Principles of Control Activities）：职责分离（Segregation of Duties）、授权审批、凭证记录、实物控制、独立核查等
- 内部控制的局限：成本效益约束、人为错误、串通（collusion）、管理层凌驾（management override）；多层防护网思想
- 现金收款流程控制：收款、记账、保管三分离
- 凭证系统（Voucher System）：凭单齐备才付款的现金支付控制链【配图：凭证系统流程图（请购→验收→发票→凭单→支票）】
- 银行对账（Bank Reconciliation）：银行侧调在途存款（Deposits in Transit）、减未兑现支票（Outstanding Checks）；账簿侧调银行已记企业未记项；两侧调到同一"真实余额"【配图：银行对账表双栏结构图，标注每类调整项归属哪侧】
- 对账后账务处理：只对企业账簿侧调整项做日记账分录
- 现金报告：现金及现金等价物（Cash Equivalents）；零用金（Petty Cash）定额备用制
- 缺失提示：5_10 缺号，按教材补银行账户使用的过渡内容
- 配套例题：银行对账全流程（含调节分录）；零用金设立、报销、补足分录
- 收尾对比表：银行对账中"银行侧调整 vs 账簿侧调整"对比（调整项/是否做分录/原因）

## Lesson 6 商业运营与商品存货（Merchandising Operations and Inventory）

引入：服务型公司收现金→服务→再收现金；零售商的链条里多了一环"存货"——这一环带来一整套新分录。

- 三类公司：服务型（Service）、零售/商业（Merchandising）、制造型（Manufacturing）
- 经营周期（Operating Cycle）：现金→存货→应收账款→现金【配图：商业企业经营周期环形图，与服务型对比】
- 存货盘存制度：永续盘存制（Perpetual，实时更新存货与 COGS）vs 定期盘存制（Periodic，期末盘点倒挤）
- 存货盘亏（Shrinkage）：账面存货与实盘之差（盗窃、损耗）；永续制下可计算并调整
- 存货采购成本：反直觉点——运费（Transportation Costs）计入存货成本，成本 = 使商品到手可售的一切代价
- 运输条款（Shipping Terms）与所有权转移：FOB 起运点（FOB Shipping Point）vs FOB 目的地（FOB Destination）；海上货船沉没谁来担责【配图：FOB 两条款时间轴图，标所有权转移点与运费承担方】
- 采购退货（Purchase Returns）与采购折让（Purchase Allowances）：买方视角分录
- 信用条款与折扣：2/10, n/30 的读法；采购/销售折扣的总价法（Gross Method）vs 净价法（Net Method）
- 销售商品（Selling Merchandise）：卖方视角两笔分录——确认收入 + 结转销货成本（COGS）
- 缺失提示：6_16 缺号，补销售退回与折让（Sales Returns & Allowances）分录；6_19 缺号，补多步式利润表（Multi-step Income Statement：毛利润→营业利润→净利润）
- 捆绑销售（Bundled Sales）：多个履约义务（Performance Obligation）分摊总价；收入确认五步法（ASC 606 框架）
- 比率：毛利分析（Gross Profit Analysis）——毛利率 = 毛利 / 净销售额，零售商的生命线
- 配套例题：采购净额计算（含退货折让折扣）；销售交易全套分录求净毛利
- 收尾对比表：同一笔购销业务的买方分录 vs 卖方分录对照；总价法 vs 净价法对比

## Lesson 7 存货计价方法（Inventory Costing Methods）

引入：仓库里三批进价不同的同款商品，卖出一件——销货成本记哪个价？同一件商品的 COGS 竟有四种合法答案。

- 成本流转假设（Cost Flow Assumption）≠ 实物流转；方法选择的本质是成本在存货与 COGS 之间的分配
- 四种方法总览：个别计价法（Specific Identification）、先进先出（FIFO）、后进先出（LIFO）、加权平均法（Weighted Average）
- 缺失提示：7_1 缺号，补本章导论（可供销售商品成本 Cost of Goods Available for Sale = 期初存货 + 本期采购 = COGS + 期末存货 的分配框架）【配图：成本分配二分图：可供销售商品成本 → COGS / 期末存货】
- 个别计价法：唯一与实际物流匹配的方法；适合高价可辨识商品；易被用来"挑成本"操纵利润
- 定期 vs 永续与计价方法的组合适用（本课例题均为定期盘存制）
- FIFO：先买的先转 COGS；期末存货最接近现行市价
- LIFO：后买的先转 COGS；通胀期 COGS 高→利润低→税负低；IFRS 禁止使用
- 加权平均法：单位成本 = 可供销售成本 / 可供销售数量；结果居中但不是简单平均
- 通胀环境下三种方法对 COGS、期末存货、利润、所得税的方向性影响【配图：同一组采购销售数据三种方法的 COGS/期末存货/毛利润对比表格或柱状图，标出具体数值】
- 成本与可变现净值孰低（Lower of Cost or Net Realizable Value, LCM/NRV）：存货跌价须减记（write-down）
- 比率：存货周转率（Inventory Turnover）= COGS / 平均存货；销售天数（Days to Sell）= 365 / 周转率
- 配套例题：个别计价；FIFO 简例+综合（定期）；LIFO 简例+综合（定期）；加权平均（定期）
- 收尾对比表：FIFO vs LIFO vs 加权平均（成本假设/通胀下 COGS 与利润/报表计价质量/税务影响/IFRS 兼容性）

## Lesson 8 应收款项与坏账（Receivables and Bad Debt）

引入：明知总有一部分客户不会还钱，企业为什么还要赊销？——不授信就丢掉生意，坏账是赊销的必然成本。

- 授信（Extending Credit）：B2B 常态；尽职调查（Due Diligence）；应收账款（Accounts Receivable, AR）与应收票据（Notes Receivable）
- 坏账（Bad Debt）两条 GAAP 原则：按净可实现价值（Net Realizable Value, NRV）报告应收 + 坏账费用与收入同期配比
- 备抵法（Allowance Method）：坏账准备（Allowance for Doubtful Accounts）是应收账款的抵减账户（contra-asset）；计提分录 借：坏账费用 贷：坏账准备【配图：资产负债表上 应收账款 − 坏账准备 = NRV 结构图】
- 估计坏账两方法：赊销百分比法（Percentage of Credit Sales，利润表导向）vs 应收账款账龄分析法（Aging of Accounts Receivable，资产负债表导向）【配图：账龄分析表（0-30/31-60/61-90/90+ 天 × 损失率），标计算列】
- 缺失提示：8_8 缺号，补核销（Write-off）分录详解：借坏账准备、贷应收账款——核销不影响当期费用与净应收
- 收回已核销坏账（Recovering Bad Debt）：先冲回核销分录，再记收款
- 应收票据：比应收账款更正式（书面、带息）；利息计算注意半年付息与期末计提（权责发生制）
- 比率：应收账款周转率（Receivable Turnover）与平均收账期
- 配套例题：坏账备抵分录全流程；赊销百分比法；账龄分析四步法；应收票据签发/计息/收款/违约全流程
- 收尾对比表：赊销百分比法 vs 账龄分析法（计算基础/先定费用还是先定准备余额/精度/适用场景）

## Lesson 9 长期资产与折旧（Long-Lived Assets and Depreciation）

引入：花 10 万美元买台设备，当年利润表却几乎不动——买资产不是费用，成本要在使用年限里慢慢"流"进利润表。

- 长期资产（Long-Lived Assets）：自用、寿命超一年、非转售；有形（Tangible）vs 无形（Intangible）
- 成本（Cost）vs 费用（Expense）：资本化（Capitalize）的门槛——使资产达到预定可用状态的一切必要支出计入成本
- 购置分录；后续支出：改良/延寿命资本化 vs 日常维修（Repairs and Maintenance）费用化
- 折旧（Depreciation）三要素：资本化成本、残值（Salvage Value）、使用寿命（Useful Life）；折旧是成本分摊而非估值——账面价值（Book Value）≠ 公允价值（Fair Value）
- 直线法（Straight-Line）：年折旧 =（成本 − 残值）/ 使用年限；最常用
- 工作量法（Units of Production）：单位折旧 × 当年产量；费用随使用量波动
- 余额递减法（Declining Balance，含双倍 DDB）：账面价值 × 固定比率；前期费用高、残值不先扣但不得低于残值【配图：三种方法各年折旧费用与账面价值下降曲线对比图（同一资产），标各年数值】
- 一致性原则：不同资产类别可用不同方法，同类须一致
- 资产减值（Asset Impairment）：公允价值显著低于账面时确认减值损失
- 处置（Disposal）：中途处置先补提折旧至处置日；处置损益（Gain/Loss on Disposal）= 卖价 − 账面价值
- 无形资产：商标（Trademark）、专利（Patent）、版权（Copyright）、商誉（Goodwill 不摊销、定期测减值）；摊销（Amortization）通常直线法
- 比率：固定资产周转率（Fixed Asset Turnover）= 收入 / 平均固定资产净值
- 收尾对比表：三种折旧方法对比（费用形态假设/公式/前期后期费用/适用资产类型/对利润与税的影响）

## Lesson 10 负债与债券（Liabilities and Bonds）

引入：客户预付的年费是你的"负债"——负债不只是欠钱，欠服务、欠商品也是负债。

- 负债类型：确定金额 vs 估计金额；流动 vs 非流动
- 应计工资（Accrued Payroll）：员工毛工资（Gross Pay）− 代扣（withholding：所得税、FICA 等）= 实发；雇主侧另有就业税（employer payroll taxes），雇人成本 > 毛工资
- 应付票据（Notes Payable）：正式书面债务；利息计提
- 应付销售税（Sales Tax Payable）：企业是政府的代收官；递延收入（Deferred Revenue）的负债视角复习；长期债务的流动部分（Current Portion of Long-Term Debt, CPLTD）的重分类
- 债券基础：面值（Face Value）、票面利率（Coupon/Stated Rate）、到期日（Maturity Date）；发行价格由票面利率 vs 市场利率（Market Rate）决定——平价/溢价（Premium）/折价（Discount）【配图：票面利率 vs 市场利率 → 发行价与面值关系图】
- 缺失提示：10_15、10_16 缺号，补债券定价（未来现金流现值）与溢价发行债券利息费用
- 发行分录三种情形；利息费用 = 付息 ± 摊销额
- 到期偿还（Bond Retirement）分录；提前赎回（Early Retirement，callable bonds）与赎回损益
- 或有负债（Contingent Liabilities）：很可能（probable）且可估计才入账，否则仅附注披露
- 比率：资产负债率（Debt to Asset Ratio）= 总负债 / 总资产，融资风险视角
- 溢折价摊销：直线法（Straight-Line，每期均摊）vs 实际利率法（Effective Interest Method，利息费用 = 期初账面 × 实际利率，逐期变化）；溢价摊销减利息费用、折价摊销增利息费用【配图：实际利率法摊销表（溢价一例），列：付息/利息费用/摊销额/账面价值；注意文件 167 名实不符，按折价内容讲】
- 收尾对比表：溢价发行 vs 折价发行（发行条件/现金收付/利息费用与付息关系/账面价值走向）；直线法 vs 实际利率法

## Lesson 11 公司股权（Corporate Equity）

引入：公司花钱买自家股票、堆在"库存"里不卖，股价反而上涨——库存股是权益的减项，而不是资产。

- 公司治理：股东（Shareholders）→ 董事会（Board of Directors）→ 管理层；股权融资（Equity Financing）vs 债务融资（Debt Financing）
- 普通股（Common Stock）：公司章程（Corporate Charter）；授权股数（Authorized）、已发行（Issued）、流通在外（Outstanding）三口径
- 面值（Par Value）vs 无面值（No-Par Value）；面值是法律概念不是价值；股本溢价（Additional Paid-in Capital, APIC）
- 股票发行（Stock Issuance）分录；IPO（Initial Public Offering）概念
- 库存股（Treasury Stock）：回购目的（提振股价、员工持股计划等）；成本法分录；权益减项、无投票权不分红；重新发行（Reissuance）：高于成本贷 APIC、低于成本先冲 APIC 再冲留存收益
- 现金股利（Cash Dividends）三日期：宣告日（Declaration，做分录）/ 登记日（Record，无分录）/ 支付日（Payment）【配图：三日期时间轴，标分录位置】
- 股票股利（Stock Dividends）：权益内部转移（留存收益→股本+APIC），要分录；股票拆分（Stock Split）：只改股数与面值，无分录
- 优先股（Preferred Stock）：股利与清算优先权、通常无投票权；当期 vs 累积股利（Cumulative Dividend）与积欠股利（dividends in arrears）
- 留存收益（Retained Earnings）复习：累计净利润 − 累计股利
- 比率三连：每股收益（EPS）=（净利润 − 优先股股利）/ 加权平均流通股数；净资产收益率（ROE）；市盈率（PE Ratio）= 市价 / EPS
- 收尾对比表：现金股利 vs 股票股利 vs 股票拆分（是否分录/总资产/总权益/每股指标变化）；普通股 vs 优先股对比

## Lesson 12 现金流量表（The Statement of Cash Flows）

引入：利润表上赚得盆满钵满，银行账户却见底——净利润与现金流的鸿沟，由最后一张报表来填（呼应 Lesson 1 引入，形成闭环）。

- 三大活动分类：经营活动（Operating，与利润表项目对应）、投资活动（Investing，长期资产与投资买卖）、筹资活动（Financing，与股东和债权人的往来）【配图：三桶分类图，每桶列典型收支项目】
- 编制基础：比较资产负债表 + 利润表 + 补充信息；分析每个非现金账户的变动归因到三活动
- 直接法（Direct Method）vs 间接法（Indirect Method）：仅经营活动部分不同；GAAP 鼓励直接法但实务多用间接法
- 间接法逻辑：净利润出发 → 加回非现金费用（折旧摊销）→ 剔除处置损益 → 调整流动资产/流动负债变动（流动资产增则减、流动负债增则加）【配图：间接法调整决策图/规则表：账户类型 × 变动方向 → 加或减】
- 投资活动：购建/处置长期资产、买卖证券
- 筹资活动：发行/回购股票、借入/偿还债务、支付股利（付息属于经营！——反直觉点）
- 完整例题：净利润 95（含折旧 35）+ 购设备 60 + 长期贷款 70 的完整编制（间接法）
- 收尾对比表：净利润 vs 经营现金流差异的三大来源（非现金费用/确认时点差/资本性支出）；三活动现金流正负组合的八象限解读（初创/成长/成熟/衰退的典型模式）

---

## 学习者补充区

（留空，供学习者逐章批注）

### Lesson 1


### Lesson 2


### Lesson 3


### Lesson 4


### Lesson 5


### Lesson 6


### Lesson 7


### Lesson 8


### Lesson 9


### Lesson 10


### Lesson 11


### Lesson 12

