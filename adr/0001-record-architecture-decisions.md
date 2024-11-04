# Architecture Decision Record for MonsterMind

## Status 

* Status: [Proposed]
* Date: 2024-11-02

## Context
MonsterMind is a study planner application created by software development students using React Native. The purpose of this application is for students to easily be able to keep track of all their academic tasks, tracking assignments, as well as viewing their schedule on a calendar. The target devices for this application are Android phones, and this app will have a simple as well as beginner-friendly coding structure, consisting of about 4-5 screens and focusing on user experience.

## Decision

Details of the design (without getting into implementation where possible):

1. Frontend: React Native to enable cross-platform development while using a single code base, using react native also makes everything more flexible if this application were to also be made for iOS 
2. CSS Framework: Bootstrap will be used for the styling process
3. Standards: Because we are beginners creating this app, the code should follow practices best suited for simplicity, readability, and maintainability, to ensure clarity
4. Core Features
  - **Task management:**  
    Students will able to add, edit, and remove tasks or assignments from their to-do list.
  - **Calendar view:**  
    The application will have a calendar where they can see what days they have certain tasks due as well as due dates 
    organized by colour which will help with visualization in terms of their workload
  - **Note Taking:**  
    Students will be able to take down notes of class material and important information on the app where their listed     courses are to help with their understanding as well as retention

## Consequences:

- **Pros**  
    1. Using react native and bootstrap together will make developing this application easier because it will make it a lot easier to see and test how everything would work and look on android devices since that is our target device
    2. Bootstrap will reduce the need for custom CSS
- **Cons**
    1. As a beginner project, the application will lack advanced features such as reminders, and notifications as well as having a fairly simple layout and fewer screens than the typical study planner applications 

## Decision
- Document any agreed-upon important implementation detail, caveats, future considerations, and remaining or deferred design issues.
- Mention any parts of the requirements not satisfied by the proposed design.

## Other Related ADRs
- ADR Title - Relevance

## References
- [Title of Document or Article](URL)
