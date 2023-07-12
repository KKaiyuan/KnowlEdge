# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn add`

Installs all dependencies of the project


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# KnowlEdge
**Project Progress I**

Project Description

Canvas is a widely used learning management system across North American
universities, including UBC, but its functionality is mainly focused on
one-way transfer of materials from instructors to students. Our web
application will be an improved system that includes interactive
features that increase student engagement with the course content by
empowering students to contribute shared student notes, student-created
study sets (flashcards, quizzes, etc.), and comment sections. The
application will store relevant user data such as student IDs, profile
pictures, registered courses, grades, study sets, and course notes,
while also providing access to essential course-related information like
assignments, lecture recordings, course outlines, exams, and quizzes.
With these capabilities, students can practice course materials using
interactive study sets, engage in discussions by commenting on posted
content, and efficiently manage their assignments and tasks with a
comprehensive calendar module. Improved course management, enhanced
insights into student understanding and engagement, and the ability to
adapt teaching approaches accordingly are some of the ways instructors
benefit from this solution.

Project task requirements

Minimal Requirements

1.  **Login/Signup page:** new users will have the option to create an
    account by providing a username, password, and email address. They
    will also indicate whether they are a student or an instructor. This
    information allows the web application to load the relevant user
    information and features. Existing users can simply log in to access
    their accounts.

2.  **Student Dashboard:** upon successful login, a student user will be
    directed to a landing page where they will be able to view content
    with links in order to access the web application content. These
    links include:

    -   links to the respective course pages

    -   a profile picture with links to modify settings and edit their
        personal information. 

    -   a navigation bar with links to access the calendar, the courses
        the student is enrolled in, grades and a message inbox.

3.  **Calendar:** a user will be able to access a calendar so they can
    stay organized by:

    -   adding, editing, and removing custom events and tasks.

    -   viewing upcoming due dates for assignments, exam schedules,
        lectures, and labs.

    -   publishing course specific events or tasks to the calendars of
      students enrolled in their courses (for instructors only).

4.  **Student Course Page View:**  a student user will be able to
    view a course page in order to access course content. This page will
    include content such as lecture recordings, quizzes, exams, assignment
    information, grading rubrics, course outlines etc.

5. **Student Profile Page:** a student user will be able to view their
   own student profile, which has their profile picture, name, faculty,
   major, contact info, and an about me section. Students also have the ability
   to add a preferred name if they wish, as well as edit their contact info and
   about me section.

Standard Requirements

1.  **Student Dashboard:**  upon successful login, a student user will
    be directed to a landing page where they will be able to view
    everything listed in the minimal requirements as well as:

    -   a search bar to browse and enroll in courses that allow manual
        enrollment. 

    -   a List of the notes and study sets they have made as well as
        links to views so they can create new study sets or notes.

2.  **Notes Edit View:** 

    -   A student can create, edit, and save notes for each course. 

    -   A student can publish their notes to the respective course page
        for other students to use. 

3.  **Study Sets Edit View:** 

    -   A student can create custom quizzes and flashcard sets to
        practice the course content.

    -   A student can publish quizzes/flashcards to the respective
        course pages for other students to use.

4.  **Student Course Page View:**

    -   Students can browse notes published by their peers with search,
        filter, and order by functionalities to practice the course
        content.

    -   Students can browse study sets/ custom quizzes published by
        their peers with search, filter, and order functionalities to
        practice the course content.

    -   Students can request for regrades through a button and dialog
        from the specific assignment, quiz, or exam page.

5.  **Comment sections:**

    -   Students will be able to comment on instructor published content
        for clarification purposes in comment sections beneath each
        posted video/lecture recording/document.

    -   Students will be able to comment and upvote student published
        content (notes, quizzes, and flashcards) so that helpful content
        can be placed in a way that more students will easily see it.

6.  **Announcement section:**
    -  Students will be able to create announcements for other users to be able to see

    -  Students will be able to use a search bar to search for the announcements which they want to find

Stretch Requirements

1.  **Student Dashboard notifications**:

    -   Students will be able to access a notifications icon that
        expands to list links to newly added course content, course
        specific announcements, changes to existing posts, replies to
        student comments, etc. so that they can keep up to date with
        course events and content.

2.  **Instructor Dashboard notifications:**

    -   a notifications icon that expands to list links to newly added
        course content, course specific announcements, changes to
        existing posts, replies to student comments, requests for
        re-grades from students etc. so that they can confirm  that
        course events and content are successfully published and
        accessible to students.
3.  **Email notifications:** new users will receive email confirmation
    of their successful account creation along with a link/code to
    verify their new account.

4.  **Live chat:** Users will be able to interact in a live
    comment/discussion section during live lectures.

5.  **Schedule Meetings:** Student users will be able to view other
    students' calendar (depending on security setting) and schedule
    meeting with another student.
6.  **Instructor Dashboard:** upon successful login, an instructor user
    will be directed to a landing page where they will be able to view
    links in order to access the web application content. These links
    include:

    -   links to the respective course pages for courses they are
        currently teaching.

    -   a profile picture with links to modify settings and edit their
        personal information.

    -   a navigation bar with links to access the calendar, the courses
        the instructor is teaching, grades and a message inbox.
        
7.  **Instructor Course Page View:**  an instructor user will be able to
    view a course page similar to the student course page in order to access course content. This page will
    include:

    -   content such as lecture recordings, quizzes, exams, assignment
        information, grading rubrics, course outlines etc.

    -   Instructors will be able to see added information including a
        list of students enrolled in their courses and options to post
        content including lecture notes, recordings, homework, quizzes,
        exams, and grades. 
        
8 **Instructor Profile Page:** an instructor will be able to view their own instructor profile page, which has their profile picture, name, faculty, contact info, 
    and an about me section. Instructors also have the ability to add a preferred name if they wish, as well as edit their contact info and about me section.

Task Breakdown

-   **Student Dashboard:** 

    -   Create a Navigation Bar component with links to the dashboard,
        calendar, study sets, notes, and messages. Each link opens a
        dropdown menu to more specific parts of the respective page.

    -   Create a Course Cards component with a short summary of each
        course and a link to the course page.

    -   Create a  Student Information/Profile Card and user settings
        modal to allow the user to edit the personal information
        displayed including name, student id, year standing and faculty.

    -   Create a Study sets and Notes cards section where  the title of
        the most recent study sets or notes created are displayed with
        links and there is a see more... link to view all the study
        sets/ notes.

    -   Set up a database with relevant information including the user's
        personal details, the courses the student users are enrolled in
        and those that instructor users teach, etc.

    -   Set up endpoints to fetch user information and course
        information.

-   **Calendar**

    - Calendar View
        - Display a calendar with day, week, month views.
        - View course specific due dates.
        - Display lectures, labs and other instructor published course events on the calendar.
        - Display important due dates for the semester and individual courses on the calendar such as add/drop deadlines, assignment due dates, exam schedules   etc.
    - Add buttons and menus to add, edit and remove tasks or events for the calendar and display them on the calendar as well as in a collapsable task pane.
    - Set up endpoints to fetch information relating to user specific tasks, events and course related tasks, events.
    - Set up the database to persist all tasks or events added to the calendar.


Prototypes

Student Dashboard

<img src="/media/studentdashboard.png" width="600">

Student Course Page

<img src="/media/studentcoursepage.png" width="600">

Calendar View

<img src="/media/calendar.png" width="600">
