# IT Assets Metadata Repository System

A comprehensive web-based solution designed to manage and organize IT assets metadata for software companies. This project was developed as part of the CS2815 - Small Enterprise Team Project module at Royal Holloway, University of London.

This system is built with **Java (SpringBoot)**, **React**, and **PostgreSQL**, offering features like role-based access control, tabular asset association views, and advanced search functionalities.

## Table of Contents
- [Overview](#overview)
- [Project Methodology](#project-methodology)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributors](#contributors)

## Overview
The IT Assets Metadata Repository System addresses the limitations of traditional source code version control systems (e.g., GitHub, SVN) by providing a holistic view of a software company's source code assets landscape. It enables better metadata management, improved search capabilities, and robust asset association.

For the entire architecture overview, [click here](images/Architecture-Diagram.jpg).

## Project Methodology
This project followed an **Agile approach** to ensure efficient development and collaboration. Key practices included:

- **Sprint-Based Development**: Each team member led a sprint, planning tasks, coordinating efforts, and managing timelines.
- **Scrum Meetings**: Weekly stand-ups were conducted to discuss progress, challenges, and next steps.
- **Task Management**: Tasks were broken down into smaller milestones and logged into Trello.

### Testing
To maintain high-quality standards, we incorporated the following testing strategies:
- **Unit Testing**: We used tools such as **JUnit** to test the robustness of the backend system.
- **Integration Testing**: API interactions between the frontend and backend were tested using **Postman**.
- **Manual Frontend Testing**: Interfaces like login, asset search, and data visualization were manually tested for usability and responsiveness.


## Features
- **Metadata Management**:
    - Store and associate assets with metadata for better organization and retrieval.
    - Define custom asset types with specific attributes (e.g., title, programming language, line number).
- **Role-Based Access Control (RBAC)**:
    - Admins: Create, update, and delete asset types.
    - Users: Register, update, and delete specific assets.
    - Viewers: Read-only access to assets and their metadata.
- **Research Using keywords**:
    - Keyword and filter-based search for assets, associations, documentation, and source code links.
- **Asset Logging**:
    - Track and display all updates made to assets and their associations.
- **Graphical Association Representation**:
    - Visualize asset relationships in a tabular format.

## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Java, SpringBoot, JWT
- **Database**: PostGreSQL
- **Other Tools**: Postman, pgAdmin4, GitLab, Gradle, JUnit


## Contributors
- **Omar Abou Hussein (Me)**  
  **Role**: Backend Developer  
  **Main Contributions**:  
  - Developed database schema & implemented backend features.
  - Tested API Endpoints using Postman.
  - Coded endpoints for various asset functionalities.
  - Designed the UML diagram for the backend architecture.

- **Danyal Shah**  
  **Role**: Backend Developer  
  **Main Contributions**:  
  - Implemented RBAC login and verification system.
  - Tested API Endpoints using Postman.
  - Added hashing for personal information.
  - Created tests for API endpoints.

- **Eman Naveed**  
  **Role**: Database Engineer  
  **Main Contributions**:  
  - Designed and implemented normalized database schemas. 
  - Established RBAC roles and permissions at the database level.
  - Assisted with data hashing for sensitive information.

- **Owen Mashingaidze**  
  **Role**: Frontend Developer  
  **Main Contributions**:  
  - Implemented the assets search functionality via keywords and filter-based search form.
  - Created the edit assets page.
  - Designed the UML diagram for the frontend architecture.

- **Dennis Marjanov**  
  **Role**: Frontend Developer  
  **Main Contributions**: 
  - Implemented login & signup page.
  - Designed and developed add assets page. 

- **Palny Shungu**  
  **Role**: Frontend Developer  
  **Main Contributions**:
  - Designed assets view interface.
  - Implemented the deleted assets page.

- **Sanjith Jaisankar**  
  **Role**: Frontend Developer  
  **Main Contributions**:
  - Adjusted interfaces for responsiveness across different screen sizes.
  - Supported frontend tests and debugging.

