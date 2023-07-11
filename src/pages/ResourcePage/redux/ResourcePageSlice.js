import { createSlice } from '@reduxjs/toolkit';
import {
  addCommentAsync,
  fetchCommentsAsync,
  patchUpvotesAsync,
} from './thunks.js';

const initialState = {
  id: '',
  comments: [],
  reply_to: {
    person_id: undefined,
    person_name: undefined,
    comment_id: undefined,
  },
  courses: [
    {
      courseName: "cpsc-310",
      pageType: "Introduction",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing.",
    },
    {
      courseName: "cpsc-310",
      pageType: "Syllabus",
      courseInformation: "hi"
    },
    {
      courseName: "cpsc-455",
      pageType: "Introduction",
      courseInformation: `<div id="main">
      <div id="primary" class="site-content">
        <div id="content" role="main">
  
          
            
  <article id="post-9" class="post-9 page type-page status-publish hentry">
    <header class="entry-header">
      <h1 class="entry-title">Schedule</h1>
    </header><!-- .entry-header -->
  
    <div class="entry-content">
      <div id="content">
  <h2>Calendar</h2>
  </div>
  <p>Final Showcase date TBD.</p>
  <div id="content">
  <div id="outline-container-sec-1" class="outline-2">
  <h2 id="sec-1">Flow of a Typical 2-Week Unit</h2>
  <div id="text-1" class="outline-text-2">
  <p>A typical 2-week unit starts with the pre-class prep work for that unit’s workshop. The unit then stretches to the next workshop—though we’ll occasionally deviate from this schedule:</p>
  <table style="height: 250px; width: 100%; border-collapse: collapse; border-style: none;" border="0">
  <tbody>
  <tr style="height: 24px; border-style: none; border-bottom: 1pt solid grey; border-top: 1pt solid grey;">
  <td style="width: 18.4503%; height: 28px;"><strong>Stage</strong></td>
  <td style="width: 40.2365%; height: 28px;"><strong>Activity</strong></td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 18.4503%; height: 28px;">Pre-workshop</td>
  <td class="left" style="width: 40.2365%; height: 28px;">prep work (often including technical setup)</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 18.4503%; height: 28px;">Workshop (Sat AM)</td>
  <td class="left" style="width: 40.2365%; height: 28px;">Initial practice with technology/skill; career discussion with industry expert</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 18.4503%; height: 28px;">Workshop (Sat PM)</td>
  <td class="left" style="width: 40.2365%; height: 28px;">Graded TA and peer project design/code reviews; group free time</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 18.4503%; height: 28px;">First lab (Tue/Wed/Thu)</td>
  <td class="left" style="width: 40.2365%; height: 28px;">Supplemental instruction; facilitated assignment or project work</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 18.4503%; height: 28px;">Pre-2nd lab (2nd Monday, 10PM)</td>
  <td class="left" style="width: 40.2365%; height: 28px;">Assignment due (push to-be-graded version to repo)</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 18.4503%; height: 28px;">Second lab (2nd Tue/Wed/Thu)</td>
  <td class="left" style="width: 40.2365%; height: 28px;">Assignment grading demos; facilitated project work</td>
  </tr>
  <tr style="height: 24px; border-style: none; border-bottom: 1pt solid grey;">
  <td class="left" style="width: 18.4503%; height: 28px;">Next Sat workshop</td>
  <td class="left" style="width: 40.2365%; height: 28px;">On to the next unit; Scrum updates due at 10pm</td>
  </tr>
  </tbody>
  </table>
  </div>
  </div>
  <div id="outline-container-sec-2" class="outline-2">
  <h2 id="sec-2">Flow of the Term</h2>
  <p>CPSC 455 has three types of scheduled meetings:<br>
  <strong>For the Summer 2023 term, ALL workshops, labs, and other meetings are to be remote/online.</strong></p>
  <dl class="org-dl">
  <dt><b>Workshops</b></dt>
  <dd>Roughly alternate Saturdays beginning May 13, from 10AM–3:30PM in two parts: a hands-on introduction to a new set of technologies by an industry speaker (10AM to roughly 1:30PM – including a lunch break) and design reviews (roughly 1:30–3:30PM). See detailed schedule below.</dd>
  <dt><b>Labs</b></dt>
  <dd>Two hours in the early evening every week (Tuesday, Wednesday, or Thursday, 5-7PM). A module’s first week lab starts with an hour of hands-on supplemental instructions followed by facilitated work time. The second week lab includes individual assignment demo grading with facilitated individual and group work while you are not being graded.</dd>
  <dd><strong>Note: There are no labs the week of June 26-30.</strong></dd>
  <dt><b>End-of-Term Showcase</b></dt>
  <dd><em>Date TBA.</em><strong><br>
  </strong>Two weeks after the last workshop, teams present their final projects to other teams, course staff, and university and industry guests. All CPSC 455 deadlines are on or before August 11th.</dd>
  </dl>
  <p>Below is a detailed schedule of modules labelled by their kickoff workshop date. <strong>We have no labs or other course work before the first workshop.</strong></p>
  <table style="height: 226px; width: 100%; border-collapse: collapse; border-style: none;" border="0">
  <tbody>
  <tr style="height: 24px; border-style: none; border-bottom: 1pt solid grey; border-top: 1pt solid grey;">
  <td style="width: 13.4503%; height: 24px;"><strong>Workshop Date</strong></td>
  <td style="width: 40.2365%; height: 24px;"><strong>Planned Subject</strong></td>
  <td style="width: 10.6565%; height: 24px;"><strong>Speaker</strong></td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 13.4503%; height: 24px;">13 May</td>
  <td class="left" style="width: 40.2365%; height: 24px;">HTML/CSS/Javascript</td>
  <td style="width: 10.6565%; height: 24px;">Ian</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 13.4503%; height: 24px;">27 May</td>
  <td class="left" style="width: 40.2365%; height: 24px;">React and the “Front End”</td>
  <td style="width: 10.6565%; height: 24px;">Danya</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 13.4503%; height: 24px;">10 June</td>
  <td class="left" style="width: 40.2365%; height: 24px;">NodeJS and other “Back Ends”</td>
  <td style="width: 10.6565%; height: 24px;">Stephanie</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 13.4503%; height: 24px;">24 June</td>
  <td class="left" style="width: 40.2365%; height: 24px;">NoSQL with MongoDB</td>
  <td style="width: 10.6565%; height: 24px;">Josh</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 13.4503%; height: 24px;">15 July</td>
  <td class="left" style="width: 40.2365%; height: 24px;">Release Engineering</td>
  <td style="width: 10.6565%; height: 24px;">TBD</td>
  </tr>
  <tr style="height: 24px;">
  <td class="left" style="width: 13.4503%; height: 24px;">29 July</td>
  <td class="left" style="width: 40.2365%; height: 24px;">Career Preparation: Portfolio Building and Networking</td>
  <td style="width: 10.6565%; height: 24px;">Jeremy &amp; Panel</td>
  </tr>
  <tr style="height: 24px; border-style: none; border-bottom: 1pt solid grey;">
  <td class="left" style="width: 13.4503%; height: 24px;">TBA</td>
  <td class="left" style="width: 40.2365%; height: 24px;"><b>Final Showcase!</b></td>
  <td style="width: 10.6565%; height: 24px;"></td>
  </tr>
  </tbody>
  </table>
  <p>Important dates to be aware of over the summer:</p>
  <dl class="org-dl">
  <dt>15 May:</dt>
  <dd>Start of Summer Session Term 1.</dd>
  <dt>19 May:</dt>
  <dd>Last day for CPSC 455 students to drop without a W.</dd>
  <dt>22 May (Mon):</dt>
  <dd>Victoria Day holiday</dd>
  <dt>22 June:</dt>
  <dd>Last day of Term 1 classes.</dd>
  <dt>26–30 June (Mon–Fri):</dt>
  <dd>Term 1 exams. No labs this week!</dd>
  <dt>1 July (Fri):</dt>
  <dd>Canada Day holiday</dd>
  <dt>4 July (Mon):</dt>
  <dd>Term 2 classes start</dd>
  <dt>7 Aug (Mon):</dt>
  <dd>BC Day holiday</dd>
  <dt>TBA (likely Aug ~8-11):</dt>
  <dd>CPSC 455’s final showcase.</dd>
  <dt>11 Aug:</dt>
  <dd>Last day of classes Term 2.</dd>
  </dl>
  </div>
  </div>
        </div><!-- .entry-content -->
    
    <footer class="entry-meta">
        </footer><!-- .entry-meta -->
  </article><!-- #post-9 -->
  
              <div id="comments" class="comments-area">
    
    
    
    
    
  </div><!-- #comments .comments-area -->
  
          
        </div><!-- #content -->
      </div><!-- #primary .site-content -->
  
      <div id="secondary" class="widget-area" role="complementary">
              <aside id="block-2" class="widget widget_block widget_search"><form role="search" method="get" action="https://blogs.ubc.ca/cpsc4552023s/" class="wp-block-search__button-outside wp-block-search__text-button wp-block-search"><label for="wp-block-search__input-1" class="wp-block-search__label">Search</label><div class="wp-block-search__inside-wrapper "><input type="search" id="wp-block-search__input-1" class="wp-block-search__input" name="s" value="" placeholder="" required=""><button type="submit" class="wp-block-search__button wp-element-button">Search</button></div></form></aside><aside id="block-3" class="widget widget_block"><div class="wp-block-group is-layout-flow"><div class="wp-block-group__inner-container"><h2 class="wp-block-heading">Recent Posts</h2><ul class="wp-block-latest-posts__list wp-block-latest-posts"><li><a class="wp-block-latest-posts__post-title" href="https://blogs.ubc.ca/cpsc4552023s/2022/03/03/hello-future-cpsc-455-summer-students/">Hello future CPSC 455 summer students!</a></li>
  </ul></div></div></aside><aside id="block-4" class="widget widget_block"><div class="wp-block-group is-layout-flow"><div class="wp-block-group__inner-container"><h2 class="wp-block-heading">Recent Comments</h2><ol class="wp-block-latest-comments"><li class="wp-block-latest-comments__comment"><article><footer class="wp-block-latest-comments__comment-meta"><span class="wp-block-latest-comments__comment-author">Chendong Luo</span> on <a class="wp-block-latest-comments__comment-link" href="https://blogs.ubc.ca/cpsc4552023s/2022/03/03/hello-future-cpsc-455-summer-students/#comment-2">Hello future CPSC 455 summer students!</a></footer></article></li></ol></div></div></aside>		</div><!-- #secondary .widget-area -->
  
    </div>`
    },
    {
      courseName: "cpsc-455",
      pageType: "Syllabus",
      courseInformation: `<article id="post-11" class="post-11 page type-page status-publish hentry">
      <header class="entry-header">
        <h1 class="entry-title">Syllabus</h1>
      </header><!-- .entry-header -->
    
      <div class="entry-content">
        <h1><span style="font-size: 16px;">Table of Contents</span></h1>
    <div id="content">
    <div id="table-of-contents">
    <div id="text-table-of-contents">
    <ul>
    <li><a href="#sec-1">1. Course Staff and Guest Speakers</a>
    <ul>
    <li><a href="#sec-1-1">1.1. Course Instructors</a></li>
    <li><a href="#sec-1-2">1.2. Teaching Assistants</a></li>
    <li><a href="#sec-1-3">1.3. Guest Speakers</a></li>
    </ul>
    </li>
    <li><a href="#sec-2">2. Schedule</a></li>
    <li><a href="#sec-3">3. Learning Objectives</a></li>
    <li><a href="#sec-4">4. Equity, Inclusion, and Wellness</a></li>
    <li><a href="#sec-5">5. Policies</a>
    <ul>
    <li><a href="#sec-5-1">5.1. Waitlist</a></li>
    <li><a href="#sec-5-2">5.2. Project Groups</a></li>
    <li><a href="#sec-5-3">5.3. Absences</a></li>
    <li><a href="#sec-5-4">5.4. Late Submissions</a></li>
    <li><a href="#sec-5-5">5.5. Collaboration and Academic Misconduct</a></li>
    <li><a href="#sec-5-6">5.6. Privacy, Online Systems, and Your @ugrad.cs.ubc.ca E-mail Address</a></li>
    </ul>
    </li>
    <li><a href="#sec-6">6. Being Prepared</a>
    <ul>
    <li><a href="#sec-6-1">6.1. Before the Term</a></li>
    <li><a href="#sec-6-2">6.2. Keeping Up During the Term</a></li>
    </ul>
    </li>
    <li><a href="#sec-7">7. Required Materials/Registrations</a></li>
    <li><a href="#sec-8">8. Communication</a></li>
    <li><a href="#sec-9">9. Grade Components</a></li>
    </ul>
    </div>
    </div>
    <div id="outline-container-sec-1" class="outline-2">
    <h2 id="sec-1"><span class="section-number-2">1</span> Course Staff and Guest Speakers</h2>
    <div id="text-1" class="outline-text-2">
    <p>Who we are, how to contact us, when and how we’re available.</p>
    </div>
    <div id="outline-container-sec-1-1" class="outline-3">
    <h3 id="sec-1-1"><span class="section-number-3">1.1</span> Course Instructors</h3>
    <div id="text-1-1" class="outline-text-3">
    <h5 style="padding-left: 40px;"><strong>Danya Karras<br>
    </strong>UBC Alum, D2L Software Engineering Manager, and Sessional Lecturer</h5>
    <p style="padding-left: 40px;"><span style="font-weight: 400;">While completing her Physics degree, Danya realized she loved building things with code, and entered the BCS program. On the side, she fueled her passion for education by teaching piano, ballet, and Ukrainian Folk Dance. Combining all of her skills, Danya now has a job in Ed Tech, and has a side job (this course) in Tech Ed. As a Engineering Manager at D2L, Danya continues to be a champion for learning by hosting demos, volunteering at tech events, and convincing others to join her in building cool things.</span></p>
    <h5 style="padding-left: 40px;"><strong>Ian McLean<br>
    </strong>UBC Alum, D2L Sr. dev, and Sessional Lecturer</h5>
    <p style="padding-left: 40px;">Ian was destined to cure Ebola, until Grade 11 biology class introduced him to Charlie Darwin, and set him on a confusing path to study Evolution and Ecology at SFU(BSc) and Carleton(MSc). Though he loved biology, Ian didn’t have the patience for the theoretical/academic life, and so he stopped his biology studies, and tried to get a job (for which he was mainly under- or over-qualified for). Finally, Ian found his way to LifeLabs, and realized that he wanted a life with biology and tech combined. He then promptly moved back to BC, and bothered the BCS program until they let him in. Ian is currently a dormant biologist, learning how to be a software developer at D2L, and trying to help cool stuff happen (like this class).</p>
    <h5 style="padding-left: 40px;"><strong>Stephanie Mah<br>
    </strong>UBC Alum, Produce8 Software Developer, and Sessional Lecturer</h5>
    <p style="padding-left: 40px;">Following a lengthy educational journey from electrical engineering to fashion design to business, Stephanie ultimately decided to return to her passion for programming after finally getting a BCom. Since graduating from the BCS program, Stephanie has honed her full-stack skills at startup PAI Health, Paybyphone, Rivian, and now Produce8. When she’s not working, she spends her time on one of her too many hobbies: drawing, baking, learning languages or gaming, to name a few.</p>
    <div id="content">
    <div id="outline-container-sec-1" class="outline-2">
    <div id="outline-container-sec-1-2" class="outline-3">
    <h3 id="sec-1-2"><span class="section-number-3">1.2</span> Teaching Assistants</h3>
    <div id="text-1-2" class="outline-text-3">
    <ul>
    <li>Danny Deng</li>
    <li>Runhe Guo</li>
    <li>Justin Jao</li>
    <li>Yaman Sanobar</li>
    <li>Chen Shiyu</li>
    <li>Cathy Yang</li>
    <li>Chloe Zhang</li>
    </ul>
    </div>
    </div>
    <div id="outline-container-sec-1-3" class="outline-3">
    <h3 id="sec-1-3"><span class="section-number-3">1.3</span> Guest Speakers</h3>
    <p>Joshua Grant</p>
    <p>Jeremy Goh</p>
    <p>TBD</p>
    </div>
    </div>
    <div id="outline-container-sec-2" class="outline-2">
    <h2 id="sec-2"><span class="section-number-2">2</span> Schedule</h2>
    <div id="text-2" class="outline-text-2">
    <p>Please see our posted <a href="https://blogs.ubc.ca/cpsc4552023s/schedule/">course schedule</a> for the structure of a typical 2-week unit and important dates. It’s critical to review (at minimum) the dates for the workshops and the final presentation.</p>
    </div>
    </div>
    <div id="outline-container-sec-3" class="outline-2">
    <h2 id="sec-3"><span class="section-number-2">3</span> Learning Objectives</h2>
    <div id="text-3" class="outline-text-2">
    <p>Typically, learning objectives state what you will be able to do. As we intend this to be an intensely practical course, we instead discuss what you will <b>have</b> done upon successfully completing this course:</p>
    <ul class="org-ul">
    <li>applied a variety of current, popular, highly industry-relevant technologies;</li>
    <li>expanded your professional portfolio with compelling, hands-on<br>
    experience working on a complete software project, start to finish;</li>
    <li>applied good communication and collaboration practices in a small-team environment; and</li>
    <li>networked with industry contacts and potential mentors.</li>
    </ul>
    </div>
    </div>
    <div id="outline-container-sec-4" class="outline-2">
    <h2 id="sec-4"><span class="section-number-2">4</span> Equity, Inclusion, and Wellness</h2>
    <div id="text-4" class="outline-text-2">
    <p>The CS Department has a fantastic <a href="https://www.cs.ubc.ca/students/undergrad/resources/equity-inclusion-wellness">statement on Equity, Inclusion, and Wellness</a> with a large number of resource links available, for example if you have concerns or needs for accommodation.</p>
    <p>We hope that all of us in the CPSC 455 also create a welcoming, respectful, inclusive, and positive environment. While the course is unlikely to be stress-free (because learning and projects are hard work, and hard work is often stressful), we also hope you will not find the course overwhelming. You may have ideas, questions, or concerns about creating such an environment in the course; we may make a mistake; or we may just plain do something wrong. If any of that happens, please let someone know. Talk to one of us on the course staff if you’re comfortable or to someone from the link above (or the Head or Undergraduate Associate Head of the department) if you’re not.</p>
    </div>
    </div>
    <div id="outline-container-sec-5" class="outline-2">
    <h2 id="sec-5"><span class="section-number-2">5</span> Policies</h2>
    <div id="outline-container-sec-5-1" class="outline-3">
    <h3 id="sec-5-1"><span class="section-number-3">5.1</span> Waitlist</h3>
    <div id="text-5-1" class="outline-text-3">
    <p>Students on the waitlist will be considered in the order normally set by the CPSC department <b>except:</b></p>
    <ol>
    <li>Waitlisted students who do not attend a workshop or are substantially late will lose their standing and be removed from the course. (We will not move students from the waitlist from the official start of the term until after the first workshop to better enforce this policy.)</li>
    <li>Your availability for lab sections may also affect when you are moved into the course. (I.e., we need space in both lecture and a lab you can attend to add you to the course.)</li>
    </ol>
    <p>We may form project groups entirely from waitlisted students or by replacing students who dropped from existing teams, but we are unlikely to provide free choice of group to waitlisted students.</p>
    </div>
    </div>
    <div id="outline-container-sec-5-2" class="outline-3">
    <h3 id="sec-5-2"><span class="section-number-3">5.2</span> Project Groups</h3>
    <div id="text-5-2" class="outline-text-3">
    <p>Your course project will be completed in a group of <strong>five</strong>. All members of the group <b>must</b> be registered in the same lab section!</p>
    <p>We are open to discussing groups of three or five in extraordinary cases (including where the our lab size just isn’t divisible by five!), but do not plan or expect to have a group size besides five.</p>
    </div>
    </div>
    <div id="outline-container-sec-5-3" class="outline-3">
    <h3 id="sec-5-3"><span class="section-number-3">5.3</span> Absences</h3>
    <div id="text-5-3" class="outline-text-3">
    <ul class="org-ul">
    <li><b>Emergencies:</b> If you’re ill or an accident or emergency occurs, contact the course staff and your group ASAP to let them know at least that you will be or did miss because of an emergency. Follow-up with the course staff with enough details for us to be able to accommodate your absence in terms of grades. Expect to put in a lot of work to make up the missed time!</li>
    <li><b>Planned absences from workshops:</b> If you will miss a single workshop in the term because of scheduling conflicts, communicate that to the course staff <b>RIGHT AWAY</b> and by at least a week before the add/drop deadline. We may be able to accommodate that. Also be sure your group knows once you’ve formed a group. If you will miss two or more workshops, <b>drop the course</b>. That’s the equivalent of missing four weeks of lecture in a regular course that has mandatory lecture attendance and is <b>NOT ACCEPTABLE</b>.<a href="https://blogs.ubc.ca/cpsc4552022s/assessment-rubrics/#sec-5"> See rubric for absences here.</a></li>
    <li><b>Planned absences from labs:</b> If you have to miss a small number of labs over the term for good reasons, we should be able to accommodate that. Be sure to let us and your group know in advance. If possible, we may want you to attend the other day’s lab.</li>
    <li><b>Planned absence from final showcase:</b> Treat this like missing two or more workshops (as discussed above) or a course’s final exam. You should likely <b>DROP THE COURSE</b>.</li>
    </ul>
    <p>Contact us privately on Slack (preferred) or at <a href="mailto:cpsc455-staff@cs.ubc.ca">cpsc455-staff@cs.ubc.ca</a> in all of these cases. If you contact us on Slack, please add ALL course instructors (Ian, Danya, Stephanie) to your Slack chat.</p>
    </div>
    </div>
    <div id="outline-container-sec-5-4" class="outline-3">
    <h3 id="sec-5-4"><span class="section-number-3">5.4</span> Late Submissions</h3>
    <div id="text-5-4" class="outline-text-3">
    <p>For all course components, if you have extenuating circumstances, contact us privately on Slack (preferred) or at <a href="mailto:cpsc455-staff@cs.ubc.ca">cpsc455-staff@cs.ubc.ca</a> ASAP, ideally in advance, and we will try to handle the situation empathetically, reasonably, and respectfully. If you contact us on Slack, please add ALL course instructors (Ian, Danya, Stephanie) to your Slack chat.</p>
    <p>A few components have specific additional rules:</p>
    <dl class="org-dl">
    <dt><b>Individual Assignments:</b></dt>
    <dd>Individual assignments are graded by demo. As a result, managing late assignments is rather burdensome! We <b>do</b> allow a single late submission to be graded by demo at the next Saturday workshop (last repo push Friday night) with an ostensible 20% point deduction for being late. If you need to take this option, you <b>must</b> contact us privately and reasonably promptly so we can plan for the late demo. However, note:<p></p>
    <ul class="org-ul">
    <li>The 20% point penalty is just to disincentivize being late. We expect to waive it if late submissions don’t get abused.</li>
    <li>On the other hand, if you are late more than once, we may impose additional penalties or disallow further late submissions. If the logistics of late assignments prove too challenging, we may stop accepting late assignments. 🙁</li>
    </ul>
    </dd>
    <dt><b>Scrum reports:</b></dt>
    <dd>We do not accept late Scrum updates. Instead, update us on where you are when the time comes for the update! (We’ll allow a reasonable grace period. If your computer was hit by a bus with the flu, please get to a library branch or UBC lab as soon as you’re able and post your (rather exciting) update!)</dd>
    <dt><b>Final showcase:</b></dt>
    <dd>It would be logistically challenging to consider late final presentations and impossible to consider them fully. Try to arrange, even in emergencies, that <i>someone</i> on your team can handle the presentation. Of course, contact us in case of emergencies!</dd>
    </dl>
    </div>
    </div>
    <div id="outline-container-sec-5-5" class="outline-3">
    <h3 id="sec-5-5"><span class="section-number-3">5.5</span> Collaboration and Academic Misconduct</h3>
    <div id="text-5-5" class="outline-text-3">
    <p>Our course builds on the <a href="https://www.cs.ubc.ca/students/undergrad/resources/academic-integrity">department’s academic integrity statement</a> with additional rules designed to create a professional but collaborative environment.</p>
    <ul class="org-ul">
    <li>For <b>group submissions</b>:
    <ul class="org-ul">
    <li>Group submissions are the joint effort of your group. We place no specific limits on your collaboration except where we explicitly ask you to document and discuss it (Scrum updates, peer evaluations, individual components of presentations/reports, etc.). Collaborate productively so that everyone learns!</li>
    <li>The majority of your project should be <b>yours</b>, as a group. However, we encourage you to find help and resources, as you would in a professional setting! Where you use or adapt existing code, you must cite it and be cognizant of its license. Where you get help from others, you must acknowledge that help. (This is especially critical for classmates, as it may benefit their participation grade!) Citations/acknowledgments should be in a clear section in your main <code>README.md</code>, in your license (if you have one!), and repeated locally where you used the code/help.</li>
    <li><b>Critically</b>, be able to justify and explain your design: no piece should be obscure to your group as a whole, and little should be obscure to any individual team member.</li>
    </ul>
    </li>
    <li>For <b>individual submissions</b>:
    <ul class="org-ul">
    <li>Keep your repository for your individual assignment <strong>private</strong> until after the assignment’s deadline, at which time change it to public for grading purposes.</li>
    <li>Except where a tutorial used for the assignment guides you to do so, do not copy-paste code. Ask for help only from course staff or in “public venues” from fellow students: during lab or workshops or on public Slack channels. Otherwise, ensure you follow the group submission guidelines for citation and acknowledgment!</li>
    <li><b>Critically</b>, be able to justify and explain <b>all</b> of your design.</li>
    </ul>
    </li>
    </ul>
    <p>We hope these rules encourage collaboration that helps you learn. Please inform us if you find they are imposing unreasonable limits on your work!</p>
    </div>
    </div>
    <div id="outline-container-sec-5-6" class="outline-3">
    <h3 id="sec-5-6"><span class="section-number-3">5.6</span> Privacy, Online Systems, and Your @ugrad.cs.ubc.ca E-mail Address</h3>
    <div id="text-5-6" class="outline-text-3">
    <p>As noted in the <a href="#sec-7">section on required materials</a>, we will require you to register with a variety of web-based tools that may be hosted outside Canada. In some cases, we may register you directly for such services using your @ugrad.cs.ubc.ca email alias (as listed in&nbsp;<a href="https://www.cs.ubc.ca/getacct">https://www.cs.ubc.ca/getacct</a>).</p>
    <p>Thus, we want to remind you to keep your @ugrad alias private, just as you would any other account information. If you choose not to keep your @ugrad alias confidential, please note that UBC will proceed on the assumption that you do not object to the services we use potentially identifying you personally, and that you are consenting to the storage of personal information on their servers outside Canada.</p>
    </div>
    </div>
    </div>
    <div id="outline-container-sec-6" class="outline-2">
    <h2 id="sec-6"><span class="section-number-2">6</span> Being Prepared</h2>
    <div id="outline-container-sec-6-1" class="outline-3">
    <h3 id="sec-6-1"><span class="section-number-3">6.1</span> Before the Term</h3>
    <div id="text-6-1" class="outline-text-3">
    <p>No one is expected to know the material in this course before you start the course. If you know none of the tools/skills we’ll learn this term, that’s OK; indeed, that’s the point!</p>
    <p>However, we also expect that registrants will have a wide range of pre-existing skills. That means (once the term starts) someone can probably help you with whatever problem you run into. <b>USE</b> our Slack channel to ask for help, and help others as much as you can! Our participation points encourage this!</p>
    </div>
    </div>
    <div id="outline-container-sec-6-2" class="outline-3">
    <h3 id="sec-6-2"><span class="section-number-3">6.2</span> Keeping Up During the Term</h3>
    <div id="text-6-2" class="outline-text-3">
    <p>This is a project course with extremely hands-on workshops and labs. Be sure that you do the required preparatory work before each workshop (except the first)—which often includes fundamental steps like installation—or fall immediately behind.</p>
    <p>Also, be sure to manage progress on your project and communication with your team. Letting work slide to the end of the project will have a tremendous negative impact on your health, well-being, and grade. Letting communication or teamwork issues slide in your group can cause the same. We’ll try to use regular design reviews to give you an opportunity to flag these issues to us and to yourselves.</p>
    <p>Please ask us for help when you need it!</p>
    </div>
    </div>
    </div>
    <div id="outline-container-sec-7" class="outline-2">
    <h2 id="sec-7"><span class="section-number-2">7</span> Required Materials/Registrations</h2>
    <div id="text-7" class="outline-text-2">
    <p>There is no required textbook for the course. However:</p>
    <ol class="org-ol">
    <li>It may be difficult to complete the course successfully without your own computer. Many of the resources we use are cloud-based; so, lab, library, and other public computers may suffice, but you’ll need to be very careful with your time and planning.</li>
    <li>We will require you to register with and use various online resources that may only be available on servers outside Canada. If this is an issue for you, please raise it with the course staff <b>immediately</b> by the end of the first workshop.</li>
    </ol>
    <p>For a rundown of likely tools and systems used this term, please see the course <a href="../schedule/">course schedule</a>.</p>
    </div>
    </div>
    <div id="outline-container-sec-8" class="outline-2">
    <h2 id="sec-8"><span class="section-number-2">8</span> Communication</h2>
    <div id="text-8" class="outline-text-2">
    <p>Course communication will be a combination of face-to-face and on Zoom&nbsp;(in workshops, labs, and your team meetings), via our <a href="../">course website</a>, on <a href="https://github.com/">github</a>,&nbsp;or on <a href="https://slack.com/">Slack</a>.</p>
    <p>Slack is an industry-standard communication tool for teams, and learning to use it is a course goal! Indeed, participation on Slack will factor into your participation grade for the course. As a rule, we prefer even private correspondence to go over Slack. (You and your group may have a primary Slack point-of-contact on the course staff assigned to you.)</p>
    <p>&nbsp;</p>
    <p><strong>Our preferred mode of communication is: Create a single chat with all 3 course instructors (Ian, Danya, Stephanie), and send your message there. One of us will get back to you.<br>
    </strong></p>
    <p><span style="color: #800000;"><strong>! DO NOT MESSAGE US INDIVIDUALLY !</strong></span></p>
    <p>However, Slack does store information on non-Canadian servers. So, if you wish to contact the course staff on a sensitive or private topic, please e-mail <a href="mailto:cpsc455-staff@cs.ubc.ca">cpsc455-staff@cs.ubc.ca</a>.</p>
    <p>We may also occasionally communicate with you via your <a href="https://my.cs.ubc.ca/docs/cs-email-accounts">@ugrad.cs.ubc.ca e-mail alias</a> or the e-mail address registered for you at the UBC student service centre. Be sure to check both addresses or forward them to somewhere you check.</p>
    <p>Finally, we may require some additional communication mechanisms as the term goes on, such as <a href="https://www.linkedin.com/">LinkedIn</a>.</p>
    </div>
    </div>
    <div id="outline-container-sec-9" class="outline-2">
    <h2 id="sec-9"><span class="section-number-2">9</span> Grade Components</h2>
    <div id="text-9" class="outline-text-2">
    <p>Course components are weighted as follows:</p>
    <table border="2" rules="groups" cellspacing="0" cellpadding="6">
    <colgroup>
    <col class="left">
    <col class="right">
    <col class="left"></colgroup>
    <thead>
    <tr>
    <th class="left" scope="col">Assignment type</th>
    <th class="right" scope="col">Weight</th>
    <th class="left" scope="col">Comments</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="left">Individual Assignments</td>
    <td class="right">30%</td>
    <td class="left">6 assignments @ 5% each</td>
    </tr>
    <tr>
    <td class="left">Final project</td>
    <td class="right">50%</td>
    <td class="left">final submission + presentation/demo, design/code reviews</td>
    </tr>
    <tr>
    <td class="left">Participation</td>
    <td class="right">11%</td>
    <td class="left">Scrum-style feedback, lab/workshop/Slack participation, etc.</td>
    </tr>
    <tr>
    <td class="left">Leadership/Teamwork</td>
    <td class="right">9%</td>
    <td class="left">Primarily based on TA/teammate evaluations; mid- and late-term</td>
    </tr>
    </tbody>
    </table>
    <p>Notes:</p>
    <ul class="org-ul">
    <li>In cases of low contribution, the leadership/teamwork mark may also impact the final project mark. (We expect all team members to pull their weight.)</li>
    <li>In extreme cases of low participation, we may increase weight on the participation mark substantially. (We expect everyone missing a workshop to discuss the situation—ideally in advance—with the course staff. We expect no one to miss more than a single workshop without <b>extensive</b> consultation and perhaps dropping the course.)</li>
    <li>The course staff reserve the right to modify these weights (but anticipate at most small changes).</li>
    </ul>
    <p>Note that you <b>must</b> pass the average of the individual assignments to pass the course. (Students who fail the individual assignments will receive as their course grade the minimum of their earned grade and 45%.)</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
          </div><!-- .entry-content -->
      
      <footer class="entry-meta">
          </footer><!-- .entry-meta -->
    </article>`
    },
    {
      courseName: "cpsc-210",
      pageType: "Introduction",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-210",
      pageType: "Syllabus",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-221",
      pageType: "Introduction",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-221",
      pageType: "Syllabus",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-320",
      pageType: "Introduction",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-320",
      pageType: "Syllabus",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-313",
      pageType: "Introduction",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-313",
      pageType: "Syllabus",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-121",
      pageType: "Introduction",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
    {
      courseName: "cpsc-121",
      pageType: "Syllabus",
      courseInformation: "Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing."
    },
  ]
};

const ResourcePageSlice = createSlice({
  name: 'resourcePage',
  initialState,
  reducers: {
    addReplyTo: (state, action) => {
      state.reply_to = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsAsync.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(addCommentAsync.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(patchUpvotesAsync.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      });
  },
});

export const { addReplyTo } = ResourcePageSlice.actions;
const resourcePageReducer = ResourcePageSlice.reducer;
export default resourcePageReducer;
