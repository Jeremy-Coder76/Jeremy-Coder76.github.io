# The Sales Engineer Who Discovered Automation

*Part 1 of the "From Sales to Code" series*

---

## The Moment Everything Changed

I was staring at yet another PDF document from an RFP at Orange Business Services in Paris. Inside: a customer with 127 sites across France, each with their address and the bandwidth they wanted for their MPLS connections.

My job? Check if we could actually deliver that bandwidth at each location.

The manual process was soul-crushing:
1. Open the PDF, manually extract each address and desired bandwidth
2. Copy each address into Orange's internal bandwidth eligibility tool
3. Fill in additional fields: phone number, Orange customer reference number
4. Run the calculation for each site
5. Export the results
6. Compare: Can we deliver what they want? (Capable bandwidth ≥ Desired bandwidth?)
7. Repeat. 127 times.

This wasn't a one-time thing. Every RFP with multi-site deployments required this. Even private customers without RFPs needed bandwidth eligibility checks—it's the first thing we verify for any L2, L3, or internet connection proposal.

I remember thinking: *"There has to be a better way."*

That thought changed everything.

## The Pre-Sales Engineer Who Didn't Code (Yet)

Let me back up a bit. In 2015, I started my apprenticeship at Orange Business Services while completing my engineering degree at ESIGELEC (École Supérieure d'Ingénieurs en Génie Électrique). I was a Pre-Sales Engineer—the person who sits between the sales team and the technical team, translating customer needs into network architectures and proposals.

The job was fantastic in many ways:

- Meeting clients and understanding their business challenges

- Designing custom network solutions (MPLS, SD-WAN, security architectures)

- Creating technical proposals and commercial offers

- Presenting solutions to C-level executives

The pay was good. The work was interesting. I was learning about customer needs, business requirements, and how to communicate technical concepts to non-technical audiences.

**But there was one massive problem: The mind-numbing repetition.**

## The Problem: The Bandwidth Eligibility Nightmare

Here's what most people don't realize about pre-sales engineering at a major telco: **bandwidth eligibility is everything.** Before you can propose any L2, L3, or internet connection, you need to verify one critical question:

> "Can we actually deliver the bandwidth the customer wants at this specific address?"

For single-site customers, this is manageable. But for enterprise customers with dozens or hundreds of sites? It becomes a nightmare.

**The manual workflow looked like this:**

1. **Receive the RFP PDF** - Customer lists all their sites with addresses and desired bandwidth
2. **Extract data manually** - Copy each address and bandwidth requirement from the PDF
3. **Open Orange's bandwidth tool** - Internal system that calculates eligibility based on infrastructure
4. **For each site:**
   - Paste the address
   - Add phone number (if available)
   - Add Orange internal customer reference number
   - Submit the calculation
   - Wait for results
   - Export the result
5. **Build comparison table** - Check if capable bandwidth ≥ desired bandwidth for every site
6. **Identify issues** - Flag sites where we can't meet requirements
7. **Repeat for the next RFP**

**A typical customer with 100+ sites would consume an enormous amount of time.** And this wasn't optional—it was the **first mandatory step** for every multi-site proposal, RFP or not.

The frustration wasn't just the time. It was the errors:

- Copy the wrong address? You've checked eligibility for the wrong location.

- Miss a site? Your proposal is incomplete and won't meet the RFP requirements.

- Transpose bandwidth numbers? You might promise something you can't deliver.

**I was being a human copy-paste machine. And I hated it.**

## The Engineering Student with Zero Automation Experience

Here's the irony: I was an engineering student. I had programming courses—C and Java at ESIGELEC. I could write a function, understand loops, work with data structures.

But in my mind, that was "academic programming." Writing algorithms for school assignments. Solving theoretical problems.

**I had never connected programming to my actual job.**

Nobody told me: "Hey, you could automate this." There was no automation engineer role at our office. No one was building tools. Everyone just... did the work manually. That's how it had always been done.

But one day, while exploring the bandwidth eligibility tool, I noticed something interesting.

## Discovery: The CSV Import Feature

I was clicking through the bandwidth tool's interface when I saw it: **"Import CSV"**

Wait. The tool could import multiple addresses at once from a CSV file?

This changed everything. If I could:
1. Extract addresses and bandwidth from the RFP PDF
2. Format the data as CSV with the required fields
3. Import it into the tool
4. Export the results

Then I could process 100+ sites in minutes instead of spending my entire day on a single customer.

But there was a problem: **How do I extract data from PDFs and create CSVs programmatically?**

That's when I discovered **VBA (Visual Basic for Applications)**—a programming language built into Microsoft Office applications. I could use it to work with PDFs, Excel, and automate the entire workflow.

I had zero VBA experience. But I had desperation, curiosity, and access to Google.

I started learning:

- **First:** Learned how to extract text from PDFs using VBA libraries

- **Then:** Figured out how to parse addresses and bandwidth from unstructured PDF data

- **Next:** Automated CSV creation with proper formatting for the bandwidth tool

- **Finally:** Built the complete workflow: PDF → CSV → Import → Export → Comparison

Was the code elegant? Absolutely not.
Was it production-ready? Far from it.
Did it work? **Yes.**

## The Solution: From Manual to Automated

Here's what my bandwidth eligibility automation did:

**Step 1: PDF Data Extraction**
- Input: RFP PDF with customer sites, addresses, and desired bandwidth
- VBA script extracts text from PDF
- Parses addresses and bandwidth requirements using pattern matching
- Handles variations in how addresses were formatted in different RFPs

**Step 2: CSV Preparation**
- Creates properly formatted CSV with required fields:
  - Site address
  - Desired bandwidth
  - Phone number (if available in PDF)
  - Orange internal customer reference number
- Adds any missing fields with default values or prompts for manual input

**Step 3: Automated Import**
- CSV ready for import into Orange's bandwidth eligibility tool
- Tool processes all sites at once
- Calculates available bandwidth based on Orange's infrastructure database

**Step 4: Results Analysis**
- Export bandwidth calculation results
- VBA script compares: Capable bandwidth vs. Desired bandwidth
- Generates summary report:
  - ✅ Sites where we can deliver requested bandwidth
  - ⚠️ Sites where bandwidth is lower than requested
  - ❌ Sites where no service is available
- Creates detailed Excel report for the sales team

**The time reduction was dramatic.** What used to consume my entire day for a 100+ site customer now took only minutes.

The first time I ran it successfully, I just stared at the screen. A full bandwidth eligibility analysis for 127 sites. Complete. Accurate. Done in a fraction of the time.

I felt like I had discovered a superpower.

## The Realization: "Why Am I Doing This Manually?"

That question became my mantra.

Why am I manually copying addresses from PDFs? **→ Automate it.**
Why am I manually entering the same data into the bandwidth tool for each site? **→ Automate it.**
Why am I manually comparing bandwidth values in spreadsheets? **→ Automate it.**

**The mindset shift wasn't learning VBA. It was starting to see my work through the lens of automation.**

Every repetitive task became a potential automation target. Every time I found myself doing something for the third time, I'd pause and ask: "Can this be automated?"

Sometimes yes, sometimes no. But asking the question changed everything.

The bandwidth eligibility automation wasn't just about saving time—it was about **eliminating error-prone manual work** that could cost the company money if done wrong.

## The Skills I Didn't Know I Was Building

Looking back, that bandwidth eligibility automation wasn't just about saving time. I was building foundational automation skills without realizing it:

- **Data Extraction:** Parsing unstructured data from PDFs (addresses, bandwidth values)

- **Pattern Recognition:** Identifying what's repetitive vs. what's truly custom

- **Data Transformation:** Converting PDF data → structured CSV → analysis results

- **Integration:** Making different tools work together (PDF reader → VBA → CSV → bandwidth tool)

- **Error Handling:** What happens when addresses are malformed or data is missing?

- **User Experience:** Making the tool usable by colleagues, not just me

- **Business Impact:** Understanding that automation errors could cost real money (wrong bandwidth = wrong pricing)

But more importantly, I was developing **the automation mindset:**

> "Computers should do repetitive work. Humans should do creative work."

## The Decision: Comfort vs. Growth

By 2018, I had a choice to make.

I could stay in pre-sales:

- Good salary

- Client-facing role

- Business development opportunities

- Career path was clear

Or I could move to build & run—actually implementing and operating networks rather than just designing proposals.

**I chose the technical path.**

Not because pre-sales was bad. It wasn't. I learned incredible skills about customer needs, business requirements, and communication.

But I had glimpsed something during those VBA automation projects: **I loved building solutions. I loved making things work. I loved the feeling of automating away tedious work.**

I wanted to work closer to the actual technology. I wanted to build automation for production networks, not just document generation. I wanted to go deeper.

So in 2018, I joined **Nomios** as a Network & Security Engineer, taking a pay cut to get hands-on experience with real network infrastructure.

That decision launched the next phase of my journey.

## Key Lessons: What I Learned from Automating Word Documents

### 1. You Don't Need Permission to Start Automating

Nobody hired me as an "automation engineer." Nobody asked me to build VBA tools. I wasn't assigned to an automation project.

I just... started. Because I was frustrated with manual work and curious about solutions.

**You don't need a job title that says "automation" to begin automating.**

### 2. Start with the Pain Points

Don't try to automate everything. Start with what hurts:

- What takes the most time?

- What's most error-prone?

- What makes you stay late at the office?

My pain point was bandwidth eligibility checking for multi-site customers. Yours might be configuration backups, or log analysis, or compliance reporting.

**Automate your biggest pain first.**

### 3. Perfect is the Enemy of Done

My first VBA script was terrible. Hardcoded values. No error handling. Barely any comments. It would make any senior developer cry.

**But it worked.** And it saved significant time.

You can refactor later. You can improve it later. But if you wait for perfect, you'll never start.

**Ship the 80% solution that saves time today, not the 100% solution that never gets finished.**

### 4. Every Language You Learn Makes the Next One Easier

I learned C and Java at school (and barely used them). Then VBA for Word automation. Later, I'd learn Python, Bash, and web frameworks.

Each one was easier than the last. The concepts transfer. Loops are loops. Functions are functions. Data structures are data structures.

**The first programming language is the hardest. Everything after gets progressively easier.**

### 5. Automation is a Mindset, Not a Tool

VBA was just the tool. The real skill was asking: **"Why am I doing this manually?"**

That question works everywhere:

- Pre-sales proposals → VBA

- Network configurations → Python

- Multi-device orchestration → Ansible

- Service deployment → NSO

**The tools change. The mindset doesn't.**

## The Takeaway

You might not be building network automation solutions right now. You might be in a sales role, an operations role, a support role.

That's okay. **That's actually perfect.**

Because the best automation engineers aren't the ones who started with automation. They're the ones who experienced the pain of manual work and decided to fix it.

They're the ones who asked: "Why am I doing this manually?"

You don't need:

- An automation role

- Years of programming experience

- Formal training in Python or Ansible

- Permission from management

You just need:

- A repetitive task that annoys you

- Curiosity about how to fix it

- Willingness to learn as you go

**That's it.**

My journey from a pre-sales engineer manually checking bandwidth eligibility for hundreds of sites to a network developer building full-stack automation solutions started with one simple question while staring at yet another RFP:

*"There has to be a better way."*

There was. And I found it. Not because I was specially talented. Not because I had unique opportunities.

**Because I was frustrated enough to try.**

## What's Next

This is the first post in my "From Sales to Code" series, documenting my journey from a sales engineer with no programming background to a network automation developer building solutions for Service Provider networks.

In the next post, I'll share how I went from automating Word documents to writing my first production Python script—despite having zero Python or REST API experience. It involved Palo Alto firewalls, hundreds of duplicate objects, and a massive cleanup challenge that would've taken ages manually.

**Coming up:** "First Steps: From Postman to Python"

---

## Connect With Me

!!! note "Let's Connect!"
    I'm always happy to chat with industry colleagues, aspiring network engineers, or anyone curious about network automation.

    **Find me on:**

    - **Twitter:** [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/jeremleclech.svg?style=social&label=Follow%20%40jeremleclech)](https://twitter.com/jeremleclech)
    - **LinkedIn:** [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/jeremyleclech)

    **Questions? Thoughts? Reach out!** Whether you're just starting your automation journey or looking to level up, I'd love to hear from you.

*Remember: Every expert was once a beginner who refused to give up.*

---

**Tags:** #NetworkAutomation #CareerJourney #VBA #ProgrammingBeginners #FromSalesToCode #AutomationMindset
