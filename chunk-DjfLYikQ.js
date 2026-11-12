import{t as n}from"./chunk-CgEvyLfZ.js";import"./chunk-_rBx5Aja.js";import{g as yn,h as xn}from"./main-LC4P3VVC.js";import{t as A}from"./chunk-C5hQpH0g.js";import{$t as ZS,Et as Tf,O as GC,Tn as fu,Xt as Z,br as vc,in as Zv,lt as OT,sr as qS,ur as rc,w as Fi}from"./chunk-B7W6jEV5.js";var c=`I'm going to upload my bank and card transaction exports, debt statements or
screenshots, pay stubs, and any loan pages. Convert everything into ONE CSV file
with exactly this header:

record_type,date,description,amount,category,account,balance,interest_rate,minimum_payment,due_day,frequency,gross_amount,net_amount,notes,account_type,link,credit_limit,original_principal,term_months,opened_date,promo_end_date,status,days_past_due,past_due_amount,last_late_date,hardship_date

Rules:
- record_type is one of: transaction, debt, income, deduction, bill, balance, schedule, windfall.
- transaction: date, description (merchant), amount (negative = money out, positive =
  money in), category, account, account_type (checking, savings, credit_card, loan, other).
  category is one of: income, transfer, credit_card_payment, debt_payment,
  returned_payment, refund, loan_proceeds, interest_fee, bank_fee, servicer_credit,
  servicer_reversal, housing, utilities, phone_internet, insurance, groceries, dining,
  shopping, auto_transport, childcare, medical, subscriptions, entertainment,
  personal_care, pets, home, travel_gifts, cash_atm, taxes, legal, other.
  - Moving money between my own accounts is "transfer". Paying a credit card is
    "credit_card_payment". Paying a loan or mortgage is "debt_payment".
  - Put the debt name in link for debt_payment, credit_card_payment and
    returned_payment rows, and the income source name in link for income rows.
  - A payment that bounced and came back is "returned_payment" (positive amount).
  - Money received from a new loan is "loan_proceeds", not income.
  - If an export lists the same transaction twice, keep both rows; the app checks.
- debt: description (debt name), balance (amount owed), interest_rate (APR percent),
  minimum_payment, due_day (1-31), date of the balance, category (credit_card,
  mortgage, auto, student, personal, medical, retirement_loan, other), account,
  account_type, credit_limit (cards), original_principal and term_months (loans),
  opened_date, promo_end_date (if a promo or deferred-interest offer applies),
  status (current, past_due, default, rehab, hardship, paid), days_past_due,
  past_due_amount (including late fees), last_late_date (most recent 30+ day late),
  hardship_date (if a hardship plan was used).
- income: description, frequency (weekly, biweekly, semimonthly, monthly, irregular),
  net_amount (take-home per check; if a check is split across accounts, add the
  splits), gross_amount, date of last paycheck. Add one income row for each regular
  contribution from someone else in the household, with the agreed monthly amount.
- deduction: one row per pay-stub deduction per check: description (tax, health,
  retirement, retirement_loan, other), amount, frequency, link (the employer name).
- bill: recurring fixed costs like rent, utilities, subscriptions, insurance.
  description, amount (positive), frequency, due_day, category, account it is charged to.
- balance: account, balance, date, account_type for checking and savings accounts.
- schedule: if a loan's required payment changed during the period (for example a
  mortgage escrow change): date the new amount started, description and link (the
  debt name), amount (new monthly payment).
- windfall: bonuses or tax refunds, received or expected: date, description,
  category (bonus, tax_refund, other), net_amount, gross_amount.
- Dates as YYYY-MM-DD. Numbers with no $ signs or commas.
- Leave columns empty when they don't apply.
- Do NOT include account numbers, my name, or my address.
- If a value is unreadable or missing, leave it empty and add a short explanation in notes. Never guess numbers.

After the CSV, list anything you were unsure about so I can check it.
Output the CSV as a downloadable file if you can, otherwise in a code block.`;var S=(i,r)=>r.name;function v(i,r){if(i&1&&(rc(0,`dt`)(1,`code`),OT(2),Tf()(),rc(3,`dd`),OT(4),Tf()),i&2){let a=r.$implicit;GC(2),Zv(a.name),GC(2),Zv(a.what)}}var k=[{name:`transaction`,what:`One purchase, payment or deposit. Money out is negative.`},{name:`debt`,what:`A balance you owe: card, loan, mortgage, with its APR and minimum.`},{name:`income`,what:`A paycheck source or a household member’s monthly contribution.`},{name:`deduction`,what:`One pay-stub deduction per check: tax, health, retirement.`},{name:`bill`,what:`A recurring fixed cost such as rent, insurance or a subscription.`},{name:`balance`,what:`What a checking or savings account holds on a date.`},{name:`schedule`,what:`A change in a loan’s required payment, such as a new escrow amount.`},{name:`windfall`,what:`A bonus or tax refund, received or expected.`}];var w=class i{prompt=c;recordTypes=k;copyStatus=Z(``);async copyPrompt(){try{await navigator.clipboard.writeText(c),this.copyStatus.set(`Copied. Paste it into your assistant.`)}catch{this.copyStatus.set(`Copy was blocked. Select the text below and copy it yourself.`)}}downloadTemplate(){n()}static ɵfac=function(a){return new(a||i)};static ɵcmp=Fi({type:i,selectors:[[`app-help-page`]],decls:87,vars:2,consts:[[`aria-labelledby`,`privacy`,1,`panel`],[`id`,`privacy`],[1,`note`],[`aria-labelledby`,`export`,1,`panel`],[`id`,`export`],[`aria-labelledby`,`prompt`,1,`panel`],[`id`,`prompt`],[1,`row`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[`role`,`status`,`data-copy-status`,``],[`tabindex`,`0`,`aria-label`,`The prompt text`,`data-prompt`,``],[`aria-labelledby`,`downloads`,1,`panel`],[`id`,`downloads`],[`mat-stroked-button`,``,`type`,`button`,3,`click`],[`mat-stroked-button`,``,`href`,`sample-v2.csv`,`download`,`sample-v2.csv`],[`mat-button`,``,`routerLink`,`/import`],[`aria-labelledby`,`records`,1,`panel`],[`id`,`records`],[`aria-labelledby`,`tags`,1,`panel`],[`id`,`tags`]],template:function(a,s){a&1&&(rc(0,`h1`),OT(1,`Help`),Tf(),rc(2,`section`,0)(3,`h2`,1),OT(4,`Where your data lives`),Tf(),rc(5,`p`),OT(6,` Everything is stored in one file on your computer. Nothing is sent over the internet, and there is no account. `),Tf(),rc(7,`p`,2)(8,`strong`),OT(9,`The file is not encrypted.`),Tf(),OT(10,` Keep it in a private, backed-up folder. `),Tf()(),rc(11,`section`,3)(12,`h2`,4),OT(13,`1. Get your data out of your bank`),Tf(),rc(14,`ol`)(15,`li`),OT(16,` Sign in to each bank, card or budgeting app (for example Rocket Money) and find `),rc(17,`em`),OT(18,`Export`),Tf(),OT(19,`, `),rc(20,`em`),OT(21,`Download transactions`),Tf(),OT(22,` or `),rc(23,`em`),OT(24,`Statements`),Tf(),OT(25,`. `),Tf(),rc(26,`li`),OT(27,` Choose CSV if it is offered and pick the last 6 to 12 months. Save one file per account. `),Tf(),rc(28,`li`),OT(29,` Also collect your latest debt statements (or screenshots of each balance, APR and minimum payment), a recent pay stub and any loan pages. `),Tf(),rc(30,`li`),OT(31,` Do this in your own browser or app. This app never connects to your bank and cannot read PDFs or screenshots. `),Tf()()(),rc(32,`section`,5)(33,`h2`,6),OT(34,`2. Ask an AI assistant to make the CSV`),Tf(),rc(35,`p`),OT(36,` Upload your exports to an assistant such as ChatGPT, Gemini, Claude or Copilot and paste this prompt. It turns everything into the one CSV file this app reads. Check its list of doubts before you import. `),Tf(),rc(37,`div`,7)(38,`button`,8),vc(`click`,function(){return s.copyPrompt()}),OT(39,`Copy prompt`),Tf(),rc(40,`span`,9),OT(41),Tf()(),rc(42,`pre`,10),OT(43),Tf()(),rc(44,`section`,11)(45,`h2`,12),OT(46,`3. Template and sample`),Tf(),rc(47,`p`),OT(48,` You can also fill in the template by hand, or look at the sample file (all fake data) to see what a finished file looks like. `),Tf(),rc(49,`div`,7)(50,`button`,13),vc(`click`,function(){return s.downloadTemplate()}),OT(51,` Download blank template (CSV) `),Tf(),rc(52,`a`,14),OT(53,`Download sample CSV`),Tf(),rc(54,`a`,15),OT(55,`Go to Import`),Tf()()(),rc(56,`section`,16)(57,`h2`,17),OT(58,`Record types`),Tf(),rc(59,`p`),OT(60,`Every row of the CSV has a `),rc(61,`code`),OT(62,`record_type`),Tf(),OT(63,`. These are the eight kinds:`),Tf(),rc(64,`dl`),qS(65,v,5,2,null,null,S),Tf()(),rc(67,`section`,18)(68,`h2`,19),OT(69,`How to read the explanations`),Tf(),rc(70,`p`),OT(71,`The plan’s rules come in three kinds:`),Tf(),rc(72,`dl`)(73,`dt`),OT(74,`[FORMULA]`),Tf(),rc(75,`dd`),OT(76,`A fixed calculation. The same data always gives the same number.`),Tf(),rc(77,`dt`),OT(78,`[RULE]`),Tf(),rc(79,`dd`),OT(80,` A decision with a threshold, such as “20% APR counts as high”. You can change the threshold. `),Tf(),rc(81,`dt`),OT(82,`[JUDGMENT]`),Tf(),rc(83,`dd`),OT(84,` A value a person chooses, such as the size of your cash buffer. It is shown with its default. `),Tf()(),rc(85,`p`),OT(86,` This is a planning tool, not financial advice. Check important decisions with a qualified professional. `),Tf()()),a&2&&(GC(41),Zv(s.copyStatus()),GC(2),Zv(s.prompt),GC(22),ZS(s.recordTypes))},dependencies:[xn,yn,A,fu],styles:[`[_nghost-%COMP%]{display:block;max-width:52rem;margin:0 auto}section[_ngcontent-%COMP%]{margin-top:1rem}h2[_ngcontent-%COMP%]{font:var(--%NS%mat-sys-title-large)}pre[_ngcontent-%COMP%]{max-height:22rem;overflow:auto;padding:1rem;border-radius:.5rem;background:var(--%NS%mat-sys-surface-container);white-space:pre-wrap;overflow-wrap:anywhere;font:.8125rem/1.4 ui-monospace,monospace}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem}dt[_ngcontent-%COMP%]{font-weight:600}dd[_ngcontent-%COMP%]{margin:0 0 .75rem}.note[_ngcontent-%COMP%]{padding:.75rem 1rem;border-radius:.5rem;background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}`]})};export{w as HelpPage};