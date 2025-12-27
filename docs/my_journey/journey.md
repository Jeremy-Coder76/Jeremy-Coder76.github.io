# From Sales to Code: My Network Automation Journey

> *"Technical learning and experience is a journey of successive experiences - each role building on the last"*

## Table of Contents
- [About Me](#about-me)
- [The Journey Overview](#the-journey-overview)
- [Chapter 1: The Sales Engineer Who Automated (2015-2018)](#chapter-1-the-sales-engineer-who-automated-2015-2018)
- [Chapter 2: Into the Network Trenches (2018-2020)](#chapter-2-into-the-network-trenches-2018-2020)
- [Chapter 3: The Cisco Era - Automation at Scale (2020-Present)](#chapter-3-the-cisco-era---automation-at-scale-2020-present)
- [Key Takeaways](#key-takeaways)
- [Connect With Me](#connect-with-me)

---

## About Me

My name is **Jeremy LE CLEC'H**. I'm a Network Consulting Engineer at Cisco, specializing in network automation, Service Provider technologies, and datacenter solutions.

But I didn't start here. My journey began in 2015 as a pre-sales engineer with no knowledge of network automation, programming, or even REST APIs. This blog chronicles my transformation from a sales engineer creating proposals in Word to a network developer building CI/CD pipelines for Service Provider infrastructures.

**Current Focus:**
- Datacenter: Fabric IP VXLAN, NX-OS, ACI
- Service Provider: IOS-XR, SROS, BNG
- Automation: Python, Ansible, NSO, CI/CD
- Lab Environments: ESXI, CML, ContainerLab, Docker

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/jeremleclech.svg?style=social&label=Follow%20%40jeremleclech)](https://twitter.com/jeremleclech)

---

## The Journey Overview

**The Core Message:** You don't need to be a programming expert to start with network automation. Technical mastery comes through successive real-world experiences, each building on the last.

### Timeline at a Glance

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

## Chapter 1: The Sales Engineer Who Automated (2015-2018)

### Orange Business Services: Where It All Began

While studying at ESIGELEC engineering school, I started an apprenticeship at **Orange Business Services** as a Pre-Sales Engineer in 2015. My job was to:
- Respond to customer RFPs (Request for Proposals)
- Design custom network architectures
- Create commercial proposals
- Accompany sales teams to client meetings

**The Problem:** I spent hours manually creating similar network proposals in Word, copying and pasting, adjusting formatting, updating tables...

**The Solution:** I taught myself **VBA (Visual Basic for Applications)** to automate document generation. Not glamorous, but it was my first taste of automation's power.

**The Realization:** *"Why am I doing this manually?"* became my mantra.

### Orange Polska: The ONAP Mission (Summer 2017)

During my studies, I did a 4-month mission at **Orange Polska** in Warsaw as a Virtualization Engineer. This was transformative:

**Project:** Analyze and implement ONAP (Open Network Automation Platform)
**Skills Developed:**
- Python scripting
- Bash automation
- Netconf protocol
- Yang models and JSON formats

**Key Insight:** I saw that automation would be implemented in the future, and that I would like to be part of it.

### Graduation & Decision (2018)

After graduating from ESIGELEC with an Engineering degree of business in IT and Network, I had a choice:
- Stay in pre-sales (comfortable, good pay)
- Move to build & run (hands-on, technical)

**I chose the technical path.**

---

## Chapter 2: Into the Network Trenches (2018-2020)

### Nomios: Multi-Vendor Security Reality

Joining **Nomios** as a **Network & Security Engineer** in September 2018 was a major challenge. This was my first hands-on job, working directly in front of customers on a daily basis while learning security technologies. During my time at Nomios, I worked with over 30 different customers.

**Technologies I Managed:**
- **Firewalls:** Palo Alto (PCNSE certified), Fortinet
- **Proxy:** Zscaler
- **Other:** Riverbed Steel Connect, Cisco ASA/Firepower
- **Cloud:** Azure (Associate Administrator 103), AWS

**The Challenge:** Each vendor had different:
- CLIs
- APIs
- Configuration paradigms
- Management interfaces

**This is where automation became essential, not optional.**

### My First Real Automation Project

When I arrived at Nomios in 2018, REST APIs on network devices were just becoming mainstream, but almost nobody was using them. This would be my first network automation project on production devices for a customer - unlike ONAP at Orange Polska, which was still theoretical and in R&D, not yet in production.

I discovered **Postman** - a fantastic graphical tool to explore APIs without coding.

> **BTW:** If you're starting with APIs, [Postman](https://www.postman.com/) is your best friend.

#### The Duplicate Objects Problem

**The Challenge:** Our firewalls had hundreds of duplicate objects with the same IP addresses but different names:

```
Example:
Server_A:
  - ip_address: 10.10.0.1

Server_B:
  - ip_address: 10.10.0.1

Server_C:
  - ip_address: 10.10.0.2
```

**The Risk:**
- Before deleting Server_A, I needed to find everywhere it was used (security rules, NAT rules, security profiles, etc.)
- Replace Server_A with Server_B in all dependencies
- Only then safely delete Server_A

**Manual Process:** Hours per firewall, error-prone, mind-numbing.

#### The Automation Solution

**Step 1: Learn the API with Postman**
- Authenticate to the firewall API
- GET all objects
- Replace an object in its dependencies
- DELETE an object

**Step 2: Build a Python Script**

With a colleague, we built our first Python automation script in **one week** with almost zero prior Python or REST API knowledge (though we knew C and Java from school).

**The script:**
1. Retrieves all duplicate objects
2. Lets you choose which object to keep
3. Replaces all references to duplicates with the keeper
4. Verifies the object to delete has no dependencies
5. Deletes the duplicate object

**Result:** What took hours manually now took minutes. We were hooked.

**Key Lesson:** *You don't need to be an expert to start. We built a production-ready script in a week as complete beginners.*

---

## Chapter 3: The Cisco Era - Automation at Scale (2020-Present)

### Cisco Graduate Program: Foundation Building (Mar-Sep 2020)

In March 2020, I joined **Cisco's EMEAR Graduate Program** in Cracow, Poland - an intensive 6-month training program that happens twice a year (March and September).

**First 3 Months: Technical & Soft Skills Training**
- Networking fundamentals: CCNA and CCNP certifications
- Soft skills development: stress management, customer communication, presentation skills
- Building a strong technical foundation

**Last 3 Months: TAC (Technical Assistance Center)**
- Hands-on experience in Cisco's Technical Access Support
- Real-world troubleshooting and customer support
- Learning to handle complex technical issues under pressure

This program transformed me from an engineer into a consultant, teaching me not just technical skills but how to effectively communicate and deliver value to customers.

**Then came the move to France...**

### Cisco France: Technical Leadership & Service Provider Automation (Sep 2020-Present)

Since September 2020, I've been a **Network Consulting Engineer** in France, and this is where everything came together.

**My Role:**
- **Empower Service Providers** to optimize network architecture and deployment
- **Craft training programs** to elevate client teams
- **Technical leader** of small groups pioneering breakthrough network solutions
- **Drive transformative change** in network architecture

#### Technologies I Specialize In Today

**Datacenter:**
- Fabric IP VXLAN (NX-OS + ACI) for datacenter environments
- Network automation for large-scale deployments

**Service Provider:**
- IOS-XR (Cisco)
- SROS (Nokia)
- BNG (Broadband Network Gateway)

**Automation Stack:**
- **Languages:** Python
- **Frameworks:** Ansible, Cisco NSO
- **CI/CD:** Automated testing and deployment pipelines
- **Lab Infrastructure:** ESXI, CML, ContainerLab, Docker

**Why This Matters:**
Service Provider networks operate at massive scale. Manual configuration is not just inefficient - it's impossible. Automation is the only way to:
- Deploy configurations consistently across thousands of devices
- Test changes before production
- Recover from failures quickly
- Meet customer SLAs

#### The Evolution: From Scripts to Systems

My automation journey evolved:
1. **2018:** Single-purpose Python scripts (firewall cleanup)
2. **2019-2020:** Reusable functions and modules
3. **2021-2022:** Ansible playbooks for multi-device orchestration
4. **2023-Present:** CI/CD pipelines with automated testing, NSO for service orchestration

**Each layer built on the previous one.**

### Full Circle: Teaching the Next Generation (2022-2023)

From February 2022 to March 2023, I returned to **ESIGELEC** as a **Guest Lecturer**, teaching a 20-hour module on network security (CERT certification track).

**What I Taught:**
- Network security fundamentals
- Modern automation approaches
- How to think about security in automated environments

**What I Learned:**
- Teaching forces you to truly understand your subject
- The next generation is hungry for automation knowledge
- My journey from student to teacher completed a circle

---

## Key Takeaways

After 10 years in the industry, here's what I've learned:

### 1. **You Don't Need Permission to Start**
I wasn't hired to automate at Orange. I just started because it solved my problem (VBA for proposals). That curiosity led everywhere else.

### 2. **Each Experience Builds on the Last**
- Sales taught me to understand customer needs
- Networking gave me hands-on technical depth
- Automation combined both: technical solutions to business problems

**This journey couldn't be skipped. Each step was necessary.**

### 3. **Start Small, Think Big**
My first automation was VBA in Word. My latest is CI/CD pipelines for Service Provider networks. Both started with: "This is tedious, there must be a better way."

### 4. **Learn in Public, Share the Journey**
Whether it's teaching at ESIGELEC, writing this blog, or helping clients, sharing knowledge accelerates everyone's growth.

### 5. **The Tools Change, The Mindset Doesn't**
I've used VBA, Postman, Python, Ansible, NSO, Docker... The specific tool matters less than asking: *"Can this be automated?"*

---

## What's Next?

This blog will dive deeper into:
- **From Pre-Sales to Automation Expert** - How sales experience made me a better automator
- **Network Automation Journey** - From scripts to CI/CD pipelines
- **Service Provider Transformation** - Automation at carrier scale

Stay tuned for detailed posts on each chapter of this journey.

---

## Connect With Me

I'm always happy to chat with industry colleagues, aspiring network engineers, or anyone curious about network automation.

**Twitter:** [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/jeremleclech.svg?style=social&label=Follow%20%40jeremleclech)](https://twitter.com/jeremleclech)

**LinkedIn:** [Jeremy LE CLEC'H](https://www.linkedin.com/in/jeremyleclech)

**Questions? Thoughts? Reach out!**

---

*Last Updated: December 2024* 