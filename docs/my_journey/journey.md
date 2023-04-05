- [My Network Automation Journey](#my-network-automation-journey)
  - [About me](#about-me)
  - [My first Automation Experience](#my-first-automation-experience)
    - [My first exercise I have been given to myself was to delete all the duplicate object in a firewall base on their attributes](#my-first-exercise-i-have-been-given-to-myself-was-to-delete-all-the-duplicate-object-in-a-firewall-base-on-their-attributes)
  - [](#)


# My Network Automation Journey

## About me

My name is Jeremy LE CLEC'H ! I graduated in engineering school in 2018, there I have study Information Technology.
My first job was in apprenticeship for Orange beginning in 2015 as a pre-sales Engineer, at this time I have no idea of the concept of Network Automation but I was already the guys that wanted to automated the daily tasks. **(VBA + Word Style)**
After this experience, I swift to the build and run part of Networking. 
First working on security devices, proxy and Firewall (mainly).
Now, I am currently working at Cisco as a Network Consulting Engineer since March 2020.

Feel free to connect on Twitter and Linkedin, always a pleasure to chat with colleagues of the industry.

[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/jeremleclech.svg?style=social&label=Follow%20%40jeremleclech)](https://twitter.com/jeremleclech)

## My first Automation Experience

When I arrived in 2018 in the networking space, the REST API on device was popping out. But at this time, I know no one that are using them.

It's at this time that I have understand that the playground for Automation was huge in the networking area. 

So I try **POSTMAN** to play with the brand new world of API 

    BTW Postman it's a really nice graphic tool to begin to play with an API.

    - [Postman](https://www.postman.com/)


### My first exercise I have been given to myself was to delete all the duplicate object in a firewall base on their attributes

    Example : 

        Server_A :
        - ip_address : 10.10.0.1

        Server_B :
        - ip_address : 10.10.0.1

        Server_C :
        - ip_address : 10.10.0.2

        Now the Server that I called B has for IP 10.10.0.1, so I need to remove Server A (because it doesn't exist anymore).
        Before I should replace Server_A , I should look where Server_A is used to place Server_B instead to avoid outage.

  
To do so I have used Postman for:

 - Authenticate on the API
 - Get all the objects of the firewall / Can be replace on all examples **by retrieve data that we want to work on**
 - Replace an object in all it's dependencies by another one.
   - Object in a firewall can for example be use in security rules, NAT rules, security profiles, etc...
 - Delete one object created for this test


With all these steps done, I have everything I need to build a script that can do the work.

From here, We (a colleague and I) build a python script to perform what we wanted :
    - Get all the duplicate object
    - Choose the object, that we want to keep
    - Replace the duplicate objects that we want to delete by the one we want to keep
    - Check that the object that we want to delete is not use in the Firewall
    - Delete the object

It works well and we wade it in a week with almost 0 knowledge in REST API and Python. (Of course we were knowleadge of other programming language (C, Java) learn at school)
## 