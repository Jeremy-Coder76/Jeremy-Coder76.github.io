# Focus on NSO

🌐 Focus into Network Services Orchestrator (NSO) by Cisco 🌐

In our journey of network automation, Cisco Network Services Orchestrator (NSO) plays a pivotal role. Today, I want to highlight some of its powerful features that are integral to our project.

🔑 **Key Features of NSO:** 🔑

- 🛢 **CDB (Configuration Database):** 🛢
NSO's CDB maintains a comprehensive record of network configurations. This centr alized data repository ensures consistency and reliability, serving as the single source of truth for configuration data across our network infrastructure.

- **FastMap:**
FastMap is NSO's capability to efficiently compute the difference between the current and desired network state. This allows for rapid deployment and adjustments, ensuring that network changes are implemented swiftly without unnecessary steps.

- **NED (Network Element Drivers):**
NEDs enable NSO to communicate with a wide range of network devices, translating service models into device-specific configurations. This flexibility allows us to seamlessly integrate diverse network elements into our automation framework.

- **REST API:**
The REST API provided by NSO facilitates seamless integration with our Django web app and other systems. It enables us to manage network configurations and retrieve data programmatically, enhancing automation and interoperability.

- **Dry-Run:**
The dry-run feature is invaluable for testing configuration changes before they are applied. By simulating the impact of changes, we can ensure accuracy and avoid disruptions in the network, which is crucial for maintaining service reliability.

- **Intent-Based Networking:**
NSO's intent-based capabilities allow us to define network behaviors based on business objectives (in our case install antenna site), rather than low-level configurations. This abstraction simplifies network management and aligns configurations with strategic goals.

❓ **Why NSO?** ❓
By leveraging these features, NSO provides a robust framework for managing our network services during all the lifecycle.

efficient, scalable, and aligned with our operational objectives. It plays a crucial role in achieving our automation goals by bridging the gap between business intent and network reality.

🔜 **Looking Forward:** 🔜
I'm eager to explore more advanced use cases and integrations with NSO as we push the boundaries of network automation. If you have experiences or insights with NSO, I'd love to hear them!
Let's connect and discuss how these tools can transform network management.

PS : Here is the [NSO documentations](https://developer.cisco.com/docs/nso/nso-fundamentals/#nso-fundamentals) to deep dive into it.
