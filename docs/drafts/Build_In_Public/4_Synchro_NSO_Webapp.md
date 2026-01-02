# Synchro NSO Webapp

🔄 Synchronizing Inventory Across Our Network Automation Ecosystem 🔄

As we continue developing our network automation project, a crucial aspect is the seamless synchronization of inventory data between our Django web app, Network Services Orchestrator (NSO), and the Business Supporting Systems (BSS). 
Here's a look at how we're achieving this critical integration.

**What Synchronization Means:**
The goal of synchronization is to keep the inventory of every app that interacts with our web app up to date. This involves:

- **Onboarding all devices** from a selected application (in our case, one BSS app) into our web app inventory. 🚀
- **Retrieving all devices from NSO** and adding them to our inventory.
In the database, we maintain a boolean field per app to determine the source of each device. ✅❎

**Error Handling Examples:** ❌

- Resolving conflicts when two devices have different names but the same management IP by connecting to the device to verify its name. ✅
- Managing capitalization issues while preserving the original name from each system to ensure accurate device targeting. ✅

**Synchronization Rules:** 🔄

We continuously synchronize the local inventory with the BSS app and NSO by applying these rules:
- Add a Device to All Systems If:
    - A device is added manually in the UI or appears in a related application.
    - We connect to it and verify the hostname.
- Delete a Device from All Systems If:
    - A device is deleted manually in the UI or removed from a related application.
    - We connect to it and verify the hostname.

This approach ensures data consistency across all systems.

🌐 Key Integration Points:

**Django Web App:**
Our web app serves as the central interface, allowing users to interact with inventory data. It's responsible for initiating synchronization processes and ensuring data consistency across all systems.
Network Services Orchestrator (NSO):
NSO manages network configurations and services, **requiring up-to-date inventory data** to automate lifecycle management effectively. It plays a pivotal role in aligning the physical and logical network elements.
Business Supporting Systems (BSS):
BSS applications provide the business context, such as customer details geolocalisation.
Synchronizing inventory with BSS ensures that network changes **align with business objectives** and service level agreements.

🔧 **Synchronization Strategies:**

1. **API-Driven Communication:**
We utilize RESTful APIs to facilitate communication between the Django web app, NSO, and BSS. This approach ensures that inventory updates are propagated in real-time, maintaining data consistency across all platforms.
2. **Asynchronous Task Handling:**
Using Celery and Redis, we manage asynchronous tasks that handle inventory synchronization without impacting the performance of the web app. This allows us to process updates efficiently and respond to changes swiftly.
3. **Data Validation and Conflict Resolution:**
Implementing robust validation mechanisms ensures that only accurate and consistent data is synchronized. We also have conflict resolution strategies in place to manage discrepancies between systems, maintaining the integrity of our inventory data.

🔜 **Looking Forward:** 🔜

We're excited to refine these synchronization processes further and explore additional integration possibilities. As always, I welcome your thoughts and any experiences you'd like to share regarding similar challenges.
Feel free to connect if you're interested in discussing inventory synchronization or network automation!

[Optional: Attach a diagram illustrating the synchronization flow]