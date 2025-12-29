# Blog Series Plan: From Sales to Code - A Network Automation Journey

## Series Overview

**Blog Title:** "From Sales to Code: My Network Automation Journey"

**Core Message/Takeaway:**
> "Technical learning and experience is a journey of successive experiences - each role building on the last"

**Target Audience:**
- Junior network engineers
- Network professionals interested in automation
- Anyone transitioning from traditional networking to network automation
- Engineers curious about career progression in network automation

**Narrative Arc:**
The journey from a sales engineer with no programming knowledge to a network developer building full-stack automation solutions for Service Provider networks. Each job, each project, each challenge built the foundation for the next level.

---

## Professional Journey Timeline (Reference)

| Period | Role | Company | Key Learning |
|--------|------|---------|--------------|
| 2013-2018 | Engineering Student | ESIGELEC | IT & Networks Foundation |
| 2015-2018 | Pre-Sales Engineer | Orange Business Services | Customer needs, VBA automation |
| Jun-Sep 2017 | Virtualization Engineer | Orange Polska | ONAP, Python, Netconf |
| 2018-2020 | Network & Security Engineer | Nomios | Multi-vendor security, **First real automation** |
| Mar-Sep 2020 | Graduate Program (CCNA/CCNP + TAC) | Cisco (Poland) | Technical foundation & customer support |
| Sep 2020-Present | Network Consulting Engineer | Cisco (France) | Service Provider automation at scale |
| Feb 2022-Mar 2023 | Guest Lecturer | ESIGELEC | Teaching network security |

---

## Current Technical Focus (2024-Present)

**Primary Work:**
- Service Provider: Backbone and edge networks (Cisco IOS-XR, Nokia SROS, Huawei)
- Web Development: Django and FastAPI applications for network automation
- Network Orchestration: Cisco NSO for service deployment across SP networks
- Automation: Python, CI/CD (GitLab), Ansible, GitHub Copilot (since 2024)
- Datacenter: Fabric IP VXLAN, NX-OS, ACI (occasional projects)

**Role:** Network Consulting Engineer at Cisco France, Consulting Service Provider teams
**Main Responsibility:** Drive network automation for Service Provider customers

---

## Blog Series Structure

### Three Pillars (Can be 3 posts OR expanded to 8-10 posts)

---

## PILLAR 1: "From Pre-Sales to Automation Expert"

**Theme:** The awakening - discovering automation's potential

**Timeline:** 2015-2020

**Key Message:** You don't need to be hired as an automator to start automating. Curiosity and problem-solving drive automation adoption.

### Potential Post Breakdown:

#### Post 1.1: "The Sales Engineer Who Automated Himself"
**Content:**
- **Orange Business Services (2015-2018)** - Pre-sales Engineer apprenticeship during ESIGELEC studies
  - Job: RFPs, custom network architectures, commercial proposals, client meetings
  - Problem: Repetitive manual work creating similar proposals in Word
  - Solution: Self-taught VBA (Visual Basic for Applications) for document automation
  - Realization: "Why am I doing this manually?" became my mantra

- **The Bandwidth Eligibility Automation**
  - **Context:** Tool to determine bandwidth eligibility for customers with 100+ sites
  - **The Business Problem:**
    - Customers (RFPs and private requests) needed to know what bandwidth Orange could deliver at each site
    - RFP documents (PDFs) contained all customer addresses and their desired bandwidth requirements
    - Bandwidth eligibility was the FIRST thing to check for any L2, L3, or internet connection
    - This verification was needed for every RFP and private customer request

  - **The Manual Pain:**
    - Extract addresses from PDF documents
    - Check each site individually for available bandwidth
    - Compare desired vs. available bandwidth for 100+ sites
    - Highly repetitive and error-prone

  - **The Automation Solution:**
    - Discovered the bandwidth calculation tool supported CSV import
    - **Workflow created:**
      1. Extract customer addresses and desired bandwidth from PDF to CSV
      2. Add required fields (phone number, Orange internal customer number)
      3. Import CSV into the bandwidth calculation tool
      4. Export results from the tool
      5. Compare: capable bandwidth >= desired bandwidth for each site
    - Result: Quick eligibility assessment for entire customer portfolio

- **Engineering Education (2013-2018)**
  - ESIGELEC: Engineering degree of business in IT and Network
  - Programming foundation: C, Java from school

- **The Decision (2018)**
  - Choice: Stay in pre-sales (comfortable, good pay) OR move to build & run (hands-on, technical)
  - Decision: **I chose the technical path**

**Key Takeaway:** Automation starts with asking "Why am I doing this manually?" - not with being hired as an automation engineer. Even in pre-sales, finding ways to streamline repetitive tasks (like bandwidth eligibility checks for 100+ sites) builds the foundation for an automation mindset.

#### Post 1.2: "First Steps: From Postman to Python"
**Content:**
- **Orange Polska Mission (Jun-Sep 2017)** - Virtualization Engineer (4 months during studies)
  - Project: ONAP (Open Network Automation Platform) - analyze and implement
  - Skills: Python scripting, Bash automation, Netconf protocol, Yang models, JSON
  - Key Insight: **"I saw that automation would be implemented in the future, and that I would like to be part of it"**
  - Important Note: ONAP was theoretical/R&D, not yet production-ready

- **Nomios (Sep 2018 - Feb 2020)** - Network & Security Engineer
  - **First hands-on job** - working directly with customers daily
  - Worked with **30+ different customers**
  - Multi-vendor security: Palo Alto (PCNSE), Fortinet, Zscaler, Riverbed, Cisco ASA/Firewall
  - Cloud exposure: Azure (Associate Administrator 103), AWS
  - Challenge: Different CLIs, APIs, config paradigms per vendor
  - **This is where automation became essential, not optional**

- **First PRODUCTION Automation Project**
  - Context: REST APIs on network devices just becoming mainstream (2018)
  - Discovery: Postman as graphical API exploration tool
  - **The Duplicate Objects Problem:**
    - Firewalls with hundreds of duplicate objects (same IPs, different names)
    - Risk: Must find all dependencies before deletion (security rules, NAT, profiles)
    - Manual process: Hours per firewall, error-prone

  - **The Solution:**
    - Step 1: Learn API with Postman (auth, GET, replace, DELETE)
    - Step 2: Built Python script with colleague in **one week**
    - Zero Python/REST API experience (only C, Java from school)
    - Script features: Retrieve duplicates, choose keeper, replace references, verify no dependencies, delete
    - Result: Hours → Minutes

  - **Key Lesson:** "You don't need to be an expert to start. We built a production-ready script in a week as complete beginners."

**Key Takeaway:** Your first automation doesn't need to be perfect. Start small, solve real problems, learn as you go.

---

## PILLAR 2: "Network Automation Journey"

**Theme:** Building the craft - from scripts to systematic automation

**Timeline:** 2020-2023

**Key Message:** Each layer of automation builds on the previous. From scripts → frameworks → orchestration → full systems.

### Potential Post Breakdown:

#### Post 2.1: "The Cisco Graduate Program: Building Foundations"
**Content:**
- **Cisco EMEAR Graduate Program (Mar-Sep 2020)** - Cracow, Poland
  - Intensive 6-month program (happens twice/year: March & September)

  - **First 3 Months: Technical & Soft Skills**
    - Networking fundamentals: CCNA and CCNP certifications
    - Soft skills: Stress management, customer communication, presentation skills
    - Building strong technical foundation

  - **Last 3 Months: TAC (Technical Assistance Center)**
    - Cisco Technical Access Support hands-on experience
    - Real-world troubleshooting and customer support
    - Handling complex technical issues under pressure

  - **Transformation:** From engineer → consultant
  - Learned: Technical skills + how to communicate and deliver customer value

**Key Takeaway:** Technical skills alone aren't enough. Communication, customer focus, and consulting mindset are equally critical.

#### Post 2.2: "Joining the Service Provider World"
**Content:**
- **Cisco France - Consulting Service Provider Teams (Sep 2020-Present)**
  - Role: Network Consulting Engineer
  - Joined: Consulting Service Provider teams
  - Main responsibility: **Drive network automation for SP customers**

- **Initial Focus Areas:**
  - Service Provider technologies at scale
  - Datacenter automation (Fabric IP VXLAN, NX-OS, ACI)
  - Building automation solutions for large-scale deployments
  - Training customers on automation

- **Why SP Automation Matters:**
  - SP networks operate at massive scale
  - Manual configuration: Not just inefficient - IMPOSSIBLE
  - Requirements: Consistency across thousands of devices, test before production, fast recovery, meet SLAs

**Key Takeaway:** At Service Provider scale, automation isn't optional - it's the only way to operate.

#### Post 2.3: "The Evolution: From Scripts to Systems"
**Content:**
- **Automation Evolution Timeline:**
  1. **2018:** Single-purpose Python scripts (firewall cleanup)
  2. **2019-2020:** Reusable functions and modules
  3. **2021-2022:** Ansible playbooks for multi-device orchestration
  4. **2023:** CI/CD pipelines with automated testing, NSO for service orchestration
  5. **2024-Present:** Full-stack automation solutions

- **Teaching Experience (Feb 2022 - Mar 2023)**
  - Returned to ESIGELEC as Guest Lecturer
  - 20-hour module on network security (CERT certification track)
  - Taught: Network security fundamentals, modern automation, security in automated environments
  - Learned: Teaching forces true understanding, next generation hungry for automation, completed circle (student → teacher)

**Key Takeaway:** Each layer built on the previous one. You can't skip steps - the journey IS the learning.

---

## PILLAR 3: "Service Provider Transformation"

**Theme:** Advanced automation - Full-stack solutions at scale

**Timeline:** 2023-Present (2024 focus)

**Key Message:** Modern network automation requires software development skills + deep networking knowledge + orchestration expertise.

### Potential Post Breakdown:

#### Post 3.1: "Building Web Applications for Network Automation"
**Content:**
- **The Shift to Full-Stack Development**
  - Moving beyond scripts and playbooks
  - Need: User-friendly interfaces for operators
  - Solution: Web applications (Django, FastAPI)

- **Current Tech Stack:**
  - **Languages:** Python
  - **Web Frameworks:** Django, FastAPI (for automation web applications)
  - **Network Orchestration:** Cisco NSO (service deployment across SP networks)
  - **CI/CD:** GitLab pipelines (automated testing and deployment)
  - **Configuration Management:** Ansible
  - **AI-Assisted Development:** GitHub Copilot (since 2024)

- **The Complete Solution:**
  - Web interface → operators interact
  - Backend logic → Python/Django/FastAPI
  - Orchestration layer → NSO deploys to devices
  - Network devices → IOS-XR, SROS, Huawei

**Key Takeaway:** Network automation in 2024 means being a software developer who understands networks deeply.

#### Post 3.2: "Service Provider Networks: Backbone and Edge Automation"
**Content:**
- **Working on Backbone and Edge Networks**
  - **Cisco IOS-XR** - SP routing/core
  - **Nokia SROS** - Multi-vendor SP environment
  - **Huawei** - Global SP presence

- **Datacenter Work** (less frequent but still present)
  - Fabric IP VXLAN (NX-OS + ACI)

- **Real-World Challenges:**
  - Multi-vendor environments
  - Different data models (Yang, OpenConfig)
  - Configuration complexity
  - Scale requirements (thousands of devices)
  - Zero-touch provisioning
  - Service activation speed

**Key Takeaway:** SP networks demand multi-vendor expertise and orchestration at massive scale.

#### Post 3.3: "NSO: From Configuration to Services"
**Content:**
- **Why NSO?**
  - Multi-vendor abstraction
  - Transaction-based changes (rollback capability)
  - Service modeling
  - Network-wide orchestration

- **Building NSO Services:**
  - Service design
  - Yang modeling
  - Template development
  - Integration with web applications

- **The Complete Workflow:**
  - User requests service via web app
  - Backend processes request
  - NSO orchestrates deployment
  - Devices configured consistently
  - Validation and monitoring

**Key Takeaway:** NSO transforms network automation from device configuration to service orchestration.

#### Post 3.4: "GitHub Copilot and AI in Network Automation (2024)"
**Content:**
- **Adopting GitHub Copilot (2024)**
  - How AI assists development
  - Faster prototyping
  - Code completion for common patterns
  - Learning new frameworks

- **Impact on Productivity:**
  - Writing NSO services faster
  - Django/FastAPI development acceleration
  - Documentation generation
  - Test case creation

- **The Human Element:**
  - Still need deep networking knowledge
  - AI assists, doesn't replace expertise
  - Critical thinking still essential

**Key Takeaway:** AI tools like Copilot accelerate development, but domain expertise remains critical.

---

## Key Themes Across All Posts

### 1. **You Don't Need Permission to Start**
- Started automating at Orange (not hired for automation)
- Self-taught VBA, Python, APIs
- Curiosity and problem-solving drive adoption

### 2. **Each Experience Builds on the Last**
- Sales → Understanding customer needs
- Networking → Hands-on technical depth
- Automation → Technical solutions to business problems
- **This journey couldn't be skipped. Each step was necessary.**

### 3. **Start Small, Think Big**
- First automation: VBA in Word
- Latest: Django/FastAPI + NSO for SP networks
- Both started with: "This is tedious, there must be a better way."

### 4. **Learn in Public, Share the Journey**
- Teaching at ESIGELEC
- Writing blog posts
- Helping customers
- Sharing knowledge accelerates everyone's growth

### 5. **The Tools Change, The Mindset Doesn't**
- VBA → Postman → Python → Ansible → NSO → Django/FastAPI → GitHub Copilot
- Specific tools matter less than asking: "Can this be automated?"

---

## Writing Guidelines

### Tone
- Authentic and personal (first-person narrative)
- Honest about challenges and failures
- Encouraging for beginners
- Technical but accessible
- Balance storytelling with technical depth

### Structure for Each Post
- Hook/opening story
- Context setting
- Problem description
- Solution exploration
- Technical details (but not overwhelming)
- Lessons learned
- Key takeaway
- Call to action (connect, try something, ask questions)

### Technical Depth
- Medium technical level
- Include real examples
- Code snippets where relevant (not full scripts)
- Architecture concepts
- Focus on "why" not just "how"
- Balance practical advice with technical concepts

### Length
- Comprehensive posts: 2000-3000 words
- Detailed posts: 1200-1800 words
- Keep reader engaged with visuals, examples, stories

---

## Call to Action (Standard Across Posts)

Connect with me:
- **Twitter:** [@jeremleclech](https://twitter.com/jeremleclech)
- **LinkedIn:** [Jeremy LE CLEC'H](https://www.linkedin.com/in/jeremyleclech)

Questions? Thoughts? Reach out - always happy to chat with industry colleagues and aspiring network engineers.

---

## SEO Keywords to Include

- Network automation
- Service Provider automation
- Python network automation
- Cisco NSO
- Django network automation
- FastAPI
- IOS-XR automation
- Nokia SROS
- Network orchestration
- CI/CD for networks
- GitLab CI/CD
- Ansible networking
- PCNSE
- Network consulting
- Career in network automation
- From networking to programming
- GitHub Copilot

---

## Publication Strategy

### Option A - Comprehensive (3 Posts)
- **Post 1:** Pillar 1 complete (3000 words)
- **Post 2:** Pillar 2 complete (3000 words)
- **Post 3:** Pillar 3 complete (3000 words)
- **Pros:** Complete story per post, easier to manage
- **Cons:** Long reads, might lose readers

### Option B - Detailed Series (8-10 Posts)
- Break each pillar into 2-4 sub-posts
- **Pros:** Better reader engagement, more SEO opportunities, easier to consume
- **Cons:** More posts to manage, need to maintain narrative thread

**Recommendation:** Start with Option B (detailed series) for better engagement and SEO.

---

## Questions to Answer Before Writing

1. **Format preference:** 3 comprehensive posts OR 8-10 detailed posts?
2. **Technical depth:** How much code/technical detail?
3. **Specific stories:** Any particular projects, wins, or failures to highlight?
4. **Publication timeline:** How often to publish?
5. **Additional content:** Diagrams, code examples, architecture visuals?

---

## Success Metrics

- Reader engagement (comments, questions)
- Connections made (LinkedIn, Twitter)
- Helping others start their automation journey
- Building credibility in network automation space
- Creating valuable resource for community

---

*This plan created: December 2025*
*Author: Jeremy LE CLEC'H*
*Blog: https://jeremy-coder76.github.io*
