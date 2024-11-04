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

## Development Framework:
1. Performance: React Native provides close to native performance and a smoother user experience. It is also widely used for many mobile applications which makes it an ideal framework for a stable project.
2. Team Skill Set: The team has experience with react and javascript which will allow for a much easier development stage and shorter learning curve. React native is a widely used framework with a lot of sources to research from, with this it will help the developers to maintain momentum and reduce onboarding time as well.
3. Timeline Consideration: Compared to a more native approach, React Native generally speeds up that process due to reusable components, which would help with a better timeline.

## Navigation strategy:
1. Navigation Library: React navigation will be used as it is flexible and has a smooth user experience for android. It is also a more suitable tool for a beginner development team.
2. Stack Navigation: This will handle primary navigation of the app and will aid the user during navigation through the main screens in order. This makes it easier during transitions to things such as assignment due dates and viewing the schedule.
3. Tab Navigation: There will be a tap navigator on the bottom which will display the main app sections as tabs. This will allow faster access to core features as well as improve usability.

## Hardware:
1. Devices: The hardware the application will mainly run on mobile devices. With the use of React Native we can deploy it on both iOS and Android.
2. Team Skill Set: Minimum custom native code will be necessary as they are high quality libraries that come with React Native for any extra functionalities, and align it with heavy javascript skill sets.
3. Timeline Consideration: Integrate hardware components with libraries will not heavily overburden the timeline of the project.

## Database Storage:
1. Local Database: Having a local storage solution will allow users to have access to their data without needing to be connected to the internet.
2. Encryption: Having encryption for this app will add a layer of security which will help the user feel more safe and comfortable while using the app.
3. Data storage: Consistent storage is essential for things such as assignment due dates. Calendar data should be available locally to maintain schedule offline. Notes should be secure and available through the app as well.
