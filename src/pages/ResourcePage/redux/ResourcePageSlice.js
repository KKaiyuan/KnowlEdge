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
      pageType: "Syllabus",
      courseInformation: `<div class="QZ3zWd"><div class="fktJzd AKpWA Ly6Unf b2Iqye KuNac XxIgdb fOU46b" jsname="UzWXSb" data-uses-custom-theme="false" data-legacy-theme-name="QualityBasics" data-legacy-theme-font-kit="Light" data-legacy-theme-color-kit="Magenta" jscontroller="Md9ENb" jsaction="gsiSmd:Ffcznf;yj5fUd:cpPetb;HNXL3:q0Vyke;e2SXKd:IPDu5e;BdXpgd:nhk7K;rcuQ6b:WYd;"><header id="atIdViewHeader"><div class="BbxBP G8QRnc" jsname="WA9qLc" jscontroller="RQOkef" jsaction="rcuQ6b:JdcaS;MxH79b:JdcaS;VbOlFf:ywL4Jf;FaOgy:ywL4Jf; keydown:Hq2uPe; wheel:Ut4Ahc;" data-top-navigation="false" data-is-preview="false"><div class="DXsoRd YTv4We Mz8gvb YSH9J" role="button" tabindex="0" jsaction="click:LUvzV" jsname="z4Tpl" id="s9iPrd" aria-haspopup="true" aria-controls="yuynLe" aria-expanded="false" title="Show sidebar"><svg class="wFCWne" viewBox="0 0 24 24" stroke="currentColor" jsname="B1n9ub" focusable="false"><g transform="translate(12,12)"><path class="hlJH0" d="M-9 -5 L9 -5" fill="none" stroke-width="2"></path><path class="HBu6N" d="M-9 0 L9 0" fill="none" stroke-width="2"></path><path class="cLAGQe" d="M-9 5 L9 5" fill="none" stroke-width="2"></path></g></svg></div><nav class="JzO0Vc" jsname="ihoMLd" role="navigation" tabindex="-1" id="yuynLe" jsaction="transitionend:UD2r5" style="display: none;"><a class="XMyrgf" href="/view/ubc-cpsc310-22w1/home?authuser=0"><img src="https://lh4.googleusercontent.com/143xDr5oFVvtuF36xOuB5jwYC7LRTuNXGP19TaAzu06xj00iDxzaWr5OGvwod2pau3lieEaKNtKB4TeUfKjRaOQ=w16383" class="r9CsCb" role="img" aria-label="Site home"></a><a class="Zjiec oNsfjf" href="/view/ubc-cpsc310-22w1/home?authuser=0"><span>UBC CPSC310-22W1: Intro to SE</span></a><ul class="jYxBte Fpy8Db" role="navigation" tabindex="-1"><li jsname="ibnC6b" data-nav-level="1"><div class="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf lhZOrc" aria-current="true"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" aria-selected="true" href="/view/ubc-cpsc310-22w1/home?authuser=0" data-url="/view/ubc-cpsc310-22w1/home?authuser=0" data-type="1" data-level="1">Welcome!</a></div></div></li><li jsname="ibnC6b" data-nav-level="1"><div class="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/learning-outcomes?authuser=0" data-url="/view/ubc-cpsc310-22w1/learning-outcomes?authuser=0" data-type="1" data-level="1">Learning Outcomes</a></div></div></li><li jsname="ibnC6b" data-nav-level="1"><div class="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/schedule_1?authuser=0" data-url="/view/ubc-cpsc310-22w1/schedule_1?authuser=0" data-type="1" data-level="1">Schedule</a></div></div></li><li jsname="ibnC6b" data-nav-level="1"><div class="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/labs-and-office-hours?authuser=0" data-url="/view/ubc-cpsc310-22w1/labs-and-office-hours?authuser=0" data-type="1" data-level="1">Labs and Office Hours</a></div></div></li><li jsname="ibnC6b" data-nav-level="1"><div class="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/academic-honesty?authuser=0" data-url="/view/ubc-cpsc310-22w1/academic-honesty?authuser=0" data-type="1" data-level="1">No Copying Policy</a></div></div></li><li jsname="ibnC6b" data-nav-level="1"><div class="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/grading?authuser=0" data-url="/view/ubc-cpsc310-22w1/grading?authuser=0" data-type="1" data-level="1">Grading</a></div></div></li><li jsname="ibnC6b" data-nav-level="1"><div class="PsKE7e r8s4j-R6PoUb IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><div class="j10yRb" role="presentation" title="Expand/Collapse" jsaction="click:Ptdedd" jsname="ix0Hvc"><svg class="dvmRw" viewBox="0 0 24 24" stroke="currentColor" jsname="HIH2V" focusable="false"><g transform="translate(9.7,12) rotate(45)"><path class="K4B8Y" d="M-4.2 0 L4.2 0" stroke-width="2"></path></g><g transform="translate(14.3,12) rotate(-45)"><path class="MrYMx" d="M-4.2 0 L4.2 0" stroke-width="2"></path></g></svg></div><a class="aJHbb dk90Ob hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" aria-expanded="false" aria-haspopup="true" href="/view/ubc-cpsc310-22w1/project?authuser=0" data-url="/view/ubc-cpsc310-22w1/project?authuser=0" data-type="1" data-level="1">Project</a></div></div><div class="oGuwee Mkt3Tc" style="display:none;" jsname="QXE97" jsaction="transitionend:SJBdh" role="group"><ul class="VcS63b"><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/autotest?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/autotest?authuser=0" data-type="1" data-level="2">AutoTest</a></div></div></li><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/specification?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/specification?authuser=0" data-type="1" data-level="2">Specification</a></div></div></li><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/project-grading?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/project-grading?authuser=0" data-type="1" data-level="2">Project Grading</a></div></div></li><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/c0?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/c0?authuser=0" data-type="1" data-level="2">Checkpoint 0</a></div></div></li><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/checkpoint-1?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/checkpoint-1?authuser=0" data-type="1" data-level="2">Checkpoint 1</a></div></div></li><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/checkpoint-2?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/checkpoint-2?authuser=0" data-type="1" data-level="2">Checkpoint 2</a></div></div></li><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/checkpoint-3?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/checkpoint-3?authuser=0" data-type="1" data-level="2">Checkpoint 3</a></div></div></li><li jsname="ibnC6b" data-nav-level="2"><div class="PsKE7e r8s4j-ibL1re IKA38e baH5ib oNsfjf"><div class="I35ICb" jsaction="keydown:mPuKz(QwLHlb); click:vHQTA(QwLHlb);"><a class="aJHbb hDrhEe HlqNPb" jsname="QwLHlb" role="link" tabindex="0" data-navtype="1" href="/view/ubc-cpsc310-22w1/project/resources?authuser=0" data-url="/view/ubc-cpsc310-22w1/project/resources?authuser=0" data-type="1" data-level="2">Resources</a></div></div></li></ul></div></li></ul></nav><div class="VLoccc QDWEj U8eYrb" jsname="rtFGi" aria-hidden="false" style=""><div class="Pvc6xe"><div jsname="I8J07e" class="TlfmSc YSH9J"><a class="GAuSPc" jsname="jIujaf" href="/view/ubc-cpsc310-22w1/home?authuser=0" aria-hidden="false" tabindex="0"><img src="https://lh4.googleusercontent.com/143xDr5oFVvtuF36xOuB5jwYC7LRTuNXGP19TaAzu06xj00iDxzaWr5OGvwod2pau3lieEaKNtKB4TeUfKjRaOQ=w16383" class="lzy1Td" role="img" aria-label="Site home" jsname="SwcDWb"><span class="QTKDff p46B7e">UBC CPSC310-22W1: Intro to SE</span></a></div></div><div jsname="mADGA" class="zDUgLc"></div></div><div class="TxnWlb" jsname="BDdyze" jsaction="click:LUvzV"></div><div jscontroller="gK4msf" class="RBEWZc" jsname="h04Zod" jsaction="rcuQ6b:WYd;JIbuQc:AT95Ub;VbOlFf:HgE5D;FaOgy:HgE5D;MxH79b:JdcaS;" data-side-navigation="true"><div role="button" class="U26fgb mUbCce fKz7Od iWs3gf Wdnjke M9Bg4d fOU46b" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow="" jsname="R9oOZd" aria-label="Open search bar" aria-disabled="false" tabindex="0" data-tooltip="Open search bar" aria-expanded="false" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -12px"><svg class="vu8Pwe tCHXDc YSH9J" viewBox="0 0 24 24" focusable="false"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span></span></div><div class="vsGQBe wgxiMe fOU46b" jsname="AznF2e"></div></div></div><script nonce="">DOCS_timing['navv'] = new Date().getTime();</script></header><div role="main" tabindex="-1" class="UtePc RCETm yxgWrb" dir="ltr" aria-hidden="false"><section id="h.5b34f9ef3e27c873_29" class="yaqOZd LB7kq cJgDec tpmmCb O13XJf" style=""><div class="Nu95r"><div class="IFuOkc" style="background-size: cover; background-position: center center; background-image: url(&quot;https://lh4.googleusercontent.com/p49Vz_YuOzGCBjNnaQF03azeKFxsP-LuR2md-g60fYov84S_czhUSAEatOjpuqkgElTbXjI3Uia_Vu5BcqVB1so=w16383&quot;); transform: translate3d(0px, 0px, 0px);" jsname="LQX2Vd"></div></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_32" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe lkHyyc"><h1 id="h.p_ID_13" dir="ltr" class="CDt4Ke zfr3Q duRjpb" style="text-align: center;">Welcome to CPSC 310!</h1><p dir="ltr" class="CDt4Ke zfr3Q" style="text-align: center;"><span style="color: #0b5394; font-family: 'Lato', 'Arial';"><strong>Introduction to Software Engineering | UBC-CPSC 310 - 2022 W T1, 101, 102</strong></span></p><p dir="ltr" class="CDt4Ke zfr3Q" style="text-align: center;"><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c rXJpyf" href="http://www.google.com/url?q=http%3A%2F%2Fwww.students.cs.ubc.ca%2F~cs-310%2Fabsence_form.html&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0nlDBbmxf_i4Q0IEIVEEhX" target="_blank">ABSENCES</a></span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; vertical-align: baseline;"> | </span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c rXJpyf" href="http://www.google.com/url?q=http%3A%2F%2Fpiazza.com%2Fubc.ca%2Fwinterterm12022%2Fcpsc310%2Fhome&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2d2NG-snh64PCMHCXef0Ca" target="_blank">PIAZZA</a></span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; vertical-align: baseline;"> | </span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c rXJpyf" href="http://www.google.com/url?q=http%3A%2F%2Fcs310.students.cs.ubc.ca%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0OVCua__1Qr9r3sgzQzjrv" target="_blank">CLASSY</a></span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; vertical-align: baseline;"> | </span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c rXJpyf" href="https://www.google.com/url?q=https%3A%2F%2Fgithub.students.cs.ubc.ca%2FCPSC310-2022W-T1&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw32r6EE6WQXH3y48QfyY7o0" target="_blank">GITHUB</a></span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; vertical-align: baseline;"> | </span><span class=" aw5Odc" style="font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c" href="https://www.google.com/url?q=https%3A%2F%2Fdiscord.gg%2Fyu4p7r7S8q&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw228pYH6leV8pGJgzCd1sMG" target="_blank">DISCORD</a></span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; vertical-align: baseline;"> | </span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c rXJpyf" href="http://www.google.com/url?q=http%3A%2F%2Fwww.students.cs.ubc.ca%2F~cs-310%2Fsection_101.html&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1L2rekB6dh4vLrh_5p2c0-" target="_blank">SEC 101 ZOOM</a></span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; vertical-align: baseline;"> | </span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c rXJpyf" href="http://www.google.com/url?q=http%3A%2F%2Fwww.students.cs.ubc.ca%2F~cs-310%2Fsection_102.html&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2371CSmsKSfteYmoxbrKfD" target="_blank">SEC 102 ZOOM</a></span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; vertical-align: baseline;"> | </span><span style="color: #000000; font-family: 'Oswald', 'Arial'; font-size: 14pt; font-weight: normal; text-decoration: underline; vertical-align: baseline;"><a class="XqQF9c rXJpyf" href="/view/ubc-cpsc310-22w1/labs-and-office-hours?authuser=0">LABS AND OFFICE HOURS</a></span></p></div></div></div></div></div></div></div></div></div></section><section id="h.5b34f9ef3e27c873_37" class="yaqOZd lQAHbd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_43" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>Instructor: </strong></span>Ivan Beschastnikh, Reid Holmes</p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>Labs and TA Office Hours</strong></span>: Labs and Office Hours page</p></div></div></div></div></div></div></div><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_40" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>Lectures</strong></span>: All on Zoom</p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>Deadlines, Resources, Recordings: </strong></span>Schedule page</p></div></div></div></div></div></div></div></div></div></section><section id="h.7408fa5fbb068346_7" class="yaqOZd cJgDec nyKByd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.7408fa5fbb068346_10" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><p dir="ltr" class="CDt4Ke zfr3Q"><span style="color: #a64d79; font-family: 'Lato', 'Arial';"><strong>ALL STUDENTS INCLUDING WAITLISTED STUDENTS</strong></span><span style="color: #073763; font-family: 'Lato', 'Arial';"><strong>: START </strong></span><span style="color: #073763; font-family: 'Lato', 'Arial';"><strong>CHECKPOINT 0</strong></span><span style="color: #073763; font-family: 'Lato', 'Arial';"><strong> ON THE FIRST DAY OF SEMESTER!  </strong></span></p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="color: #073763;">It takes a lot of time to get set up and started. It is due on the add/drop date.</span></p></div></div></div></div></div></div></div></div></div></section><section id="h.307198c8e0b3689d_14" class="yaqOZd qeLZfd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.307198c8e0b3689d_17" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><p dir="ltr" class="CDt4Ke zfr3Q"><span style="color: #ff0000; font-family: 'Oswald', 'Arial'; font-weight: 500;">Waitlist update (Sept 6)</span><span style="font-variant: normal;"> - We have been told that </span>the course will be overenrolled by the first lecture and the waitlists will be cleared at that time. Unfortunately, if you are not registered in the course by September 8, you will be unable to take the course this term.</p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="color: #ff0000; font-family: 'Oswald', 'Arial'; font-weight: 500;">Please don't contact the instructional staff about the waitlist</span> - we don't have any information about it, and can't tell you your position on it or the likelihood you'll get into the class.  We can't sign people into the class.  Please contact <span class=" aw5Odc" style="font-variant: normal; text-decoration: underline;"><a class="XqQF9c" href="https://www.google.com/url?q=https%3A%2F%2Fwww.cs.ubc.ca%2Fstudents%2Fundergrad%2Fresources%2Facademic-advising&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw1zc2fNFp4-W3GxOM2Uy0Rg" target="_blank">CS advisors</a></span>.  <span style="font-variant: normal;">More </span><span class=" aw5Odc" style="font-variant: normal; text-decoration: underline;"><a class="XqQF9c" href="/view/ubc-cpsc310-22w1/waiting-list-instructions?authuser=0">waitlist instructions are available here</a></span>.</p></div></div></div></div></div></div></div></div></div></section><section id="h.307198c8e0b3689d_0" class="yaqOZd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.307198c8e0b3689d_4" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>This is another weird semester!</strong></span>  It's anticipated that people will be off sick for some of it.  Also other life things come up.  Also sometimes the stress is too much and you need a break. Here's what we're doing:</p><ul class="n8H08c UVNKR" style="list-style-type: square; margin-left: 0; margin-right: 0; padding: 0;"><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 15pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-indent: 0;">Quizzes will be taken in person in the CBTF (details below).</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 15pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-indent: 0;">We<span style="font-variant: normal;"> will offer grade accommodations (not extensions) for the project to those who have suffered absences</span> or for those who are experiencing longer running situations that are severely impacting their ability to do work<span style="font-family: 'Lato', 'Arial';"><strong> </strong></span>(such as caring for unwell dependents).<span style="font-family: 'Lato', 'Arial'; font-variant: normal;"><strong> </strong></span><span style="font-variant: normal;"> </span><span class=" aw5Odc" style="text-decoration: underline;"><a class="XqQF9c" href="http://www.google.com/url?q=http%3A%2F%2Fwww.students.cs.ubc.ca%2F~cs-310%2Fabsence_form.html&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0nlDBbmxf_i4Q0IEIVEEhX" target="_blank">Absence Form Here</a></span></p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 15pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-indent: 0;"><span style="font-variant: normal;">The ClientBot will provide saniti</span>y checking feedback on each branch commit, smoke test feedback on each merge-to-main, and full<span style="font-variant: normal;"> feedback on each checkpoint </span>at the deadline.</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 15pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-indent: 0;">If you're needing support because of personal reasons (like personal tragedy or crisis) please get in touch.  We have more we can do for students in really difficult situations.</p></li></ul><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-indent: 0;">There's more information on each of the above in the sections below....</p></div></div></div></div></div></div></div></div></div></section><section id="h.5b34f9ef3e27c873_58" class="yaqOZd qeLZfd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_64" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.p_r1sizptvpUyH" class="CobnVe aP9Z7e"></div><h2 id="h.p_r1sizptvpUyH_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_r1sizptvpUyH_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_r1sizptvpUyH" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_r1sizptvpUyH_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div>About <span style="font-family: 'Oswald', 'Arial';"><strong>Lectures</strong></span></div></h2><p dir="ltr" class="CDt4Ke zfr3Q">These are attended virtually over Zoom and will be recorded. You can attend whichever lecture is best for you. Experience shows attending lectures as they happens is more successful than binging them at the end of the term. Lecture videos will be distributed, but slides will not.</p><p dir="ltr" class="CDt4Ke zfr3Q">If a class has to be cancelled because the instructor is unable to come to class, the topic will be moved to the subsequent day.  If this happens such that there is a squeeze, topics may be shortened and additional resources made available to preserve learning outcomes.</p><p dir="ltr" class="CDt4Ke zfr3Q">Entire semester schedule is on the<span style="font-family: 'Lato', 'Arial';"><strong> </strong></span><span style="font-family: 'Lato', 'Arial';"><strong>Schedule</strong></span> page.</p><p dir="ltr" class="CDt4Ke zfr3Q">We have reserved a room for each section from where students can attend the lecture via zoom. For section 101, this is ORCH 3074. For section 102, this is <span style="color: #222222; font-family: 'Arial'; font-weight: normal;">FNH 50</span>.</p></div></div></div></div><div class="oKdM2c ZZyype"><div id="h.6f004e7a691d6773_49" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec"><div class="jXK9ad-SmKAyb"><div class="tyJCtd N0neUc baZpAe"><div class="axx72"><div role="presentation" class="U26fgb L7IXhc htnAL QmpIrf M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-label="Join Section 101 Lecture @ 12:30-14:00 Tue/Thu" aria-disabled="false" data-tooltip="Join Section 101 Lecture @ 12:30-14:00 Tue/Thu" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d QmpIrf" href="http://www.google.com/url?q=http%3A%2F%2Fcs.ubc.ca%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2xp7iZ-Mi9bIBN_IbzMPMw" target="_blank" aria-label="Join Section 101 Lecture @ 12:30-14:00 Tue/Thu"><div class="NsaAfc"><p>Join Section 101 Lecture @ 12:30-14:00 Tue/Thu</p></div><div class="wvnY3c" jsname="ksKsZd"></div></a></div></div></div></div></div></div><div class="oKdM2c ZZyype"><div id="h.1cd57968b1a5a5bf_110" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec wHaque g5GTcb QaN0Zc QjXeod"><div class="jXK9ad-SmKAyb"><div class="tyJCtd N0neUc baZpAe"><div class="axx72"><div role="presentation" class="U26fgb L7IXhc htnAL QmpIrf M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-label="Join Section 102 Lecture @ 14:00-15:30 Tue/Thu" aria-disabled="false" data-tooltip="Join Section 102 Lecture @ 14:00-15:30 Tue/Thu" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d QmpIrf" href="http://www.google.com/url?q=http%3A%2F%2Fcs.ubc.ca%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2xp7iZ-Mi9bIBN_IbzMPMw" target="_blank" aria-label="Join Section 102 Lecture @ 14:00-15:30 Tue/Thu"><div class="NsaAfc"><p>Join Section 102 Lecture @ 14:00-15:30 Tue/Thu</p></div><div class="wvnY3c" jsname="ksKsZd"></div></a></div></div></div></div></div></div></div></div></div><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_61" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.p_Qiw1lryPpiZM" class="CobnVe aP9Z7e"></div><h2 id="h.p_Qiw1lryPpiZM_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_Qiw1lryPpiZM_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_Qiw1lryPpiZM" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_Qiw1lryPpiZM_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div>About <span style="font-family: 'Oswald', 'Arial';"><strong>LABS</strong></span></div></h2><p dir="ltr" class="CDt4Ke zfr3Q">Labs and office hours are all online. The schedule is <span class=" aw5Odc" style="text-decoration: underline;"><a class="XqQF9c" href="/view/ubc-cpsc310-22w1/labs-and-office-hours?authuser=0">here</a></span>. During the first week of the term, labs function as drop-in office hours. </p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>After the Checkpoint 0 deadline labs are mandatory</strong></span>. <span style="font-family: 'Lato', 'Arial';"><strong>You must attend a weekly Scrum with your mentor TA</strong></span>.  <span style="font-variant: normal;">If you are absent please contact </span>Emily at<span style="font-variant: normal;"> </span><span class=" aw5Odc" style="font-family: 'Source Code Pro', 'Arial'; font-variant: normal; text-decoration: underline;"><a class="XqQF9c" href="mailto:cpsc310-admin@cs.ubc.ca" target="_blank"><strong>cpsc310-admin@cs.ubc.ca</strong></a></span>.</p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="color: #ff9900;">If you can't get into the lab you want, please just watch SSC for availability.  We can't help with lab registration.</span></p></div></div></div></div><div class="oKdM2c ZZyype"><div id="h.7408fa5fbb068346_0" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.notjug2k19oa" class="CobnVe aP9Z7e"></div><h2 id="h.notjug2k19oa_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.notjug2k19oa_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.notjug2k19oa" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.notjug2k19oa_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div><span style="font-variant: normal;">About </span><span style="font-family: 'Oswald', 'Arial';"><strong>Office hours</strong></span></div></h2><p dir="ltr" class="CDt4Ke zfr3Q">All TA/Project office hours are online and there is a queue system to process students fairly. Wait times can be long before deadlines, so <span style="font-family: 'Lato', 'Arial';"><strong>plan</strong></span> accordingly.  <br>Instructor office hours will be online or in person. These office hours will focus on course content, <span style="font-family: 'Lato', 'Arial';"><strong>not</strong></span> the project.</p></div></div></div></div></div></div></div></div></div></section><section id="h.4525fccc61e2e097_0" class="yaqOZd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.4525fccc61e2e097_3" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.bhdp6ysh0rhz" class="CobnVe aP9Z7e"></div><h2 id="h.bhdp6ysh0rhz_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.bhdp6ysh0rhz_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.bhdp6ysh0rhz" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.bhdp6ysh0rhz_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div>About <span style="font-family: 'Oswald', 'Arial';"><strong>QUIZZES</strong></span></div></h2><p dir="ltr" class="CDt4Ke zfr3Q">There will be 5 quizzes, but we only count your top 4. Quizzes will cover all lecture material prior to the end of the Thursday before the quiz opens. Practice quizzes will not be available.</p><p dir="ltr" class="CDt4Ke zfr3Q">Quiz availability dates are on the Schedule page. Quizzes will be taken in person<span style="color: #000000;"> in new, special-purpose labs (ICCS 008 and 014) referred to as the Computer-Based Testing Facility (CBTF). You will self-schedule your quiz time by making a reservation in one of the sessions listed at </span><span class=" aw5Odc" style="text-decoration: underline;"><a class="XqQF9c" href="http://www.google.com/url?q=http%3A%2F%2Fca.prairietest.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2ZRXurg9E4LQ2n2Ss9pLYX" target="_blank">ca.prairietest.com</a></span><span style="color: #000000;"> (PT). We will announce in advance when the PT reservation system is available for each quiz.</span></p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="color: #000000;">CBTF sessions typically occur on Wed, Thu, Fri, and Sat, and seats are first-come, first-served for all times. Please arrive at the CBTF approximately 10 min before your scheduled time, and bring your UBC ID card for checkin. </span></p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="color: #000000;">The CBTF is a secure, invigilated, testing site consisting of two neighboring rooms in the basement of ICCS. When you arrive for your exam, you will be asked to place all of your personal belongings including all electronics (watches, phones, ear buds, etc.) on the shelves at the front of the room. After checkin you will take your seat, log in to PT, and begin your exam when the invigilator gives the signal. When you’re finished, just submit your exam, collect your things, and leave the room! </span></p><p dir="ltr" class="CDt4Ke zfr3Q">Collaboration/communication with others (tutors, other students, anyone) is not allowed during the quizzes and while the quiz is open for other students to write, and will be considered academic misconduct if detected.  </p><p dir="ltr" class="CDt4Ke zfr3Q">Because we are allowing flexible quiz-taking, you are not allowed to post any content or question about any quiz to any forum (Piazza, reddit) or to communicate with any other student about a quiz.  <span style="font-family: 'Lato', 'Arial';"><strong>Any such communication is considered academic misconduct and will be treated seriously.</strong></span></p><p dir="ltr" class="CDt4Ke zfr3Q">Misconduct on any quiz will result in a score of 0 for all quizzes for all students involved; quiz weight cannot be transferred to the final in these cases.</p></div></div></div></div></div></div></div><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.4525fccc61e2e097_6" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.gdemxv9w9ura" class="CobnVe aP9Z7e"></div><h2 id="h.gdemxv9w9ura_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.gdemxv9w9ura_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.gdemxv9w9ura" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.gdemxv9w9ura_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div>About the <span style="font-family: 'Oswald', 'Arial';"><strong>Project</strong></span></div></h2><p dir="ltr" class="CDt4Ke zfr3Q">The project has 4 checkpoints (C0..C3).</p><p dir="ltr" class="CDt4Ke zfr3Q">All project deadlines are on the <span style="font-family: 'Lato', 'Arial';"><strong>Schedule</strong></span> page.</p><p dir="ltr" class="CDt4Ke zfr3Q">See the <span style="font-family: 'Lato', 'Arial';"><strong>Project</strong></span> page for more details! The project is entirely about having a development-based experiential learning experience. No interm solutions will be posted, the value of the project is in ideating and evaluating your own strategies for systematically tackling larger-scale development challenges.</p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial'; font-variant: normal;"><strong>You will need a partner for Checkpoints 1-3</strong></span><span style="font-variant: normal;">, and that person must be in your lab.</span> <span style="font-variant: normal;">Teams are declared the week after the add/drop date. If you don't ha</span>ve a teammate at that time we will assign you to a team.</p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>All checkpoints have set deadlines. </strong></span>These are given on the schedule page. AutoTest will provide full feedback (and a grade) for the most recent commit on the main branch at the deadline. Smoke tests will be run on all merges-to-main prior to the deadline. Sanity tests will be automatically run on your personal branches. You should be checking your own progress using your own tests, and using our AutoTest Smoke tests.</p><p dir="ltr" class="CDt4Ke zfr3Q">You may NOT use a tutor to help you with the project content. You may not look for project-specific help online. This will be considered academic misconduct.</p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial'; font-variant: normal;"><strong>You </strong></span><span style="font-family: 'Lato', 'Arial'; font-variant: normal; text-decoration: underline;"><strong>must</strong></span><span style="font-family: 'Lato', 'Arial'; font-variant: normal;"><strong> also submit a weekly progress/work report individually.</strong></span></p></div></div></div></div></div></div></div></div></div></section><section id="h.5b34f9ef3e27c873_65" class="yaqOZd qeLZfd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_71" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.p_KL-S028fE-8u" class="CobnVe aP9Z7e"></div><h2 id="h.p_KL-S028fE-8u_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_KL-S028fE-8u_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_KL-S028fE-8u" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_KL-S028fE-8u_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div><span style="font-family: 'Oswald', 'Arial';"><strong>Questions</strong></span>: Piazza</div></h2><p dir="ltr" class="CDt4Ke zfr3Q">It is highly recommended that you sign up with your cs email (the r2d2 email address you are given) so that we can identify you in case we need to be in touch over <span style="font-family: 'Lato', 'Arial';"><strong>Piazza</strong></span>.  </p><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>Piazza is intended to be your mechanism to communicate with the teaching team.</strong></span></p><p dir="ltr" class="CDt4Ke zfr3Q">There are no private posts available. To individually contact a TA you must attend lab or office hours.</p><p dir="ltr" class="CDt4Ke zfr3Q">If you can't get into Piazza, contact <span class=" aw5Odc" style="font-family: 'Source Code Pro', 'Arial'; font-variant: normal; text-decoration: underline;"><a class="XqQF9c" href="mailto:cpsc310-admin@cs.ubc.ca" target="_blank"><strong>cpsc310-admin@cs.ubc.ca</strong></a></span>.</p></div></div></div></div><div class="oKdM2c ZZyype"><div id="h.791e375908d91403_0" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec wHaque g5GTcb"><div class="jXK9ad-SmKAyb"><div class="tyJCtd N0neUc baZpAe"><div class="axx72"><div role="presentation" class="U26fgb L7IXhc htnAL QmpIrf M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-label="Join Piazza" aria-disabled="false" data-tooltip="Join Piazza" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d QmpIrf" href="http://www.google.com/url?q=http%3A%2F%2Fpiazza.com%2Fubc.ca%2Fwinterterm22021%2Fcpsc310&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0aGnyzmjsFCQtVhEi2LkwI" target="_blank" aria-label="Join Piazza"><div class="NsaAfc"><p>Join Piazza</p></div><div class="wvnY3c" jsname="ksKsZd"></div></a></div></div></div></div></div></div></div></div></div><div class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc yYI8W HQwdzb"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_68" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.p_qYoaOqnMFSV5" class="CobnVe aP9Z7e"></div><h2 id="h.p_qYoaOqnMFSV5_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_qYoaOqnMFSV5_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_qYoaOqnMFSV5" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_qYoaOqnMFSV5_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div><span style="font-family: 'Oswald', 'Arial';"><strong>Chatting</strong></span>: Discord</div></h2><p dir="ltr" class="CDt4Ke zfr3Q">You are encouraged to use Discord to hang out like you would in the DLC. You can not post code, or dictate code, or in any way help someone remotely to *do* their project, because that would violate the no copying policy, but you can discuss project approaches there! You can chat about potential algorithms (without posting pseudocode), and strategies. </p><p dir="ltr" class="CDt4Ke zfr3Q">We suggest making a new Discord user ID if you don't want us to see you playing Genshin Impact on your main when we both know you've not done C0.</p></div></div></div></div><div class="oKdM2c ZZyype"><div id="h.1700ace73182c4a1_4" class="hJDwNd-AhqUyc-qWD73c Ft7HRd-AhqUyc-qWD73c jXK9ad D2fZ2 zu5uec wHaque g5GTcb"><div class="jXK9ad-SmKAyb"><div class="tyJCtd N0neUc baZpAe"><div class="axx72"><div role="presentation" class="U26fgb L7IXhc htnAL QmpIrf M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-label="Join Discord" aria-disabled="false" data-tooltip="Join Discord" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d QmpIrf" href="https://www.google.com/url?q=https%3A%2F%2Fdiscord.gg%2Fyu4p7r7S8q&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw228pYH6leV8pGJgzCd1sMG" target="_blank" aria-label="Join Discord"><div class="NsaAfc"><p>Join Discord</p></div><div class="wvnY3c" jsname="ksKsZd"></div></a></div></div></div></div></div></div></div></div></div></div></div></section><section id="h.5b34f9ef3e27c873_72" class="yaqOZd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-OwsYgb Ft7HRd-AhqUyc-OwsYgb purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_78" class="hJDwNd-AhqUyc-OwsYgb Ft7HRd-AhqUyc-OwsYgb jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.p_y7oCLdVNGilH" class="CobnVe aP9Z7e"></div><h2 id="h.p_y7oCLdVNGilH_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_y7oCLdVNGilH_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_y7oCLdVNGilH" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_y7oCLdVNGilH_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div><span style="font-family: 'Oswald', 'Arial';"><strong>Absences</strong></span>: Form</div></h2><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-indent: 0;"><span style="font-variant: normal;">The project has some hard deadlines: Checkpoint 0 at the drop date, and the Checkpoint 3 deadlines </span>during<span style="font-variant: normal;"> semester. We won't be offering extensions on these deadlines for any reason, because of the way our grading works. </span><span style="font-family: 'Lato', 'Arial'; font-variant: normal;"><strong>But we will offer grade accommodations for the project to those who have suffered absences or for those who are experiencing conditions that are severely hurting their ability to do work </strong></span><span style="font-variant: normal;">(such as </span>having kids home from school, caring for another person because they are unwell, etc<span style="font-variant: normal;">).</span><span style="font-family: 'Lato', 'Arial'; font-variant: normal;"><strong> </strong></span><span style="font-variant: normal;"> </span><span class=" aw5Odc" style="font-family: 'Lato', 'Arial'; text-decoration: underline;"><a class="XqQF9c" href="http://www.google.com/url?q=http%3A%2F%2Fwww.students.cs.ubc.ca%2F~cs-310%2Fabsence_form.html&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw0nlDBbmxf_i4Q0IEIVEEhX" target="_blank"><strong>FILL OUT THIS FORM</strong></a></span><span style="font-variant: normal;">.  You don't need to provide proof - just provide an explanation so we can assess the accommodation that's right for you.  </span>Forms must be submitted by December 9 @ 1800.</p></div></div></div></div></div></div></div><div class="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc JNdkSc SQVYQc yYI8W HQwdzb"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.7408fa5fbb068346_2" class="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.mv1zvnnow2m8" class="CobnVe aP9Z7e"></div><h2 id="h.mv1zvnnow2m8_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.mv1zvnnow2m8_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.mv1zvnnow2m8" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.mv1zvnnow2m8_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div><span style="font-family: 'Oswald', 'Arial';"><strong>Accommodations</strong></span><span style="font-variant: normal;">:</span> Course Coordinator</div></h2><p dir="ltr" class="CDt4Ke zfr3Q">Please inform<span style="font-variant: normal;"> </span>Emily<span style="font-variant: normal;"> </span>at <span class=" aw5Odc" style="font-family: 'Source Code Pro', 'Arial'; font-variant: normal; text-decoration: underline;"><a class="XqQF9c" href="mailto:cpsc310-admin@cs.ubc.ca" target="_blank"><strong>cpsc310-admin@cs.ubc.ca</strong></a></span><span style="font-variant: normal;"> </span>of all accommodations from the Centre for Accessibility. </p></div></div></div></div><div class="oKdM2c ZZyype"><div id="h.7408fa5fbb068346_5" class="hJDwNd-AhqUyc-wNfPc Ft7HRd-AhqUyc-wNfPc pSzOP-AhqUyc-wNfPc Ktthjf-AhqUyc-wNfPc jXK9ad D2fZ2 zu5uec wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.12xyc1ynu0uq" class="CobnVe aP9Z7e"></div><h2 id="h.12xyc1ynu0uq_l" dir="ltr" class="CDt4Ke zfr3Q JYVBee" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.12xyc1ynu0uq_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.12xyc1ynu0uq" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.12xyc1ynu0uq_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div><span style="font-family: 'Oswald', 'Arial';"><strong>Admin Issues</strong></span><span style="font-variant: normal;">: </span>Course Coordinator</div></h2><p dir="ltr" class="CDt4Ke zfr3Q">For anything else related to the administration of the course, please contact Emily at <span class=" aw5Odc" style="font-family: 'Source Code Pro', 'Arial'; font-variant: normal; text-decoration: underline;"><a class="XqQF9c" href="mailto:cpsc310-admin@cs.ubc.ca" target="_blank"><strong>cpsc310-admin@cs.ubc.ca</strong></a></span>.</p></div></div></div></div></div></div></div></div></div></section><section id="h.5b34f9ef3e27c873_79" class="yaqOZd WxWicb" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_82" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb"><div class="jXK9ad-SmKAyb"><div class="tyJCtd baZpAe"><div class="iwQgFb" role="presentation"></div></div></div></div></div></div></div></div></div></div></section><section id="h.5b34f9ef3e27c873_83" class="yaqOZd qeLZfd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_86" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><div id="h.p_XvRYC5REAzM5" class="GV3q8e aP9Z7e"></div><h3 id="h.p_XvRYC5REAzM5_l" dir="ltr" class="CDt4Ke zfr3Q OmQG5e" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_XvRYC5REAzM5_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_XvRYC5REAzM5" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_XvRYC5REAzM5_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div>Cheating:</div></h3><p dir="ltr" class="CDt4Ke zfr3Q"><span style="font-family: 'Lato', 'Arial';"><strong>IMPORTANT: DO NOT CHEAT ON THE PROJECT</strong></span>. Do not copy code from others or the web. Do not share code. Do not use CoPilot or any other code generation service. Do not look at old projects if you happen upon them while searching the web, and do not look at project code belonging to students in the class currently. Concrete details are <span class=" aw5Odc" style="text-decoration: underline;"><a class="XqQF9c" href="/view/ubc-cpsc310-22w1/academic-honesty?authuser=0">given here</a></span>. Make sure every line of code you commit is either provided by us, or originated (conceived of and written) by you (or your partner). Tutors can not help you do your project work. You must do all your own work. Cases will be referred to the dean and students have received 0 in the course, and been suspended for copying in past terms.</p><div id="h.p_-Y5QzKKtAzM6" class="GV3q8e aP9Z7e"></div><h3 id="h.p_-Y5QzKKtAzM6_l" dir="ltr" class="CDt4Ke zfr3Q OmQG5e" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_-Y5QzKKtAzM6_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_-Y5QzKKtAzM6" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_-Y5QzKKtAzM6_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div>Respectful Environment:</div></h3><p dir="ltr" class="CDt4Ke zfr3Q">Everyone involved with CPSC 310 is responsible for understanding and abiding by UBC's <span class=" aw5Odc" style="text-decoration: underline;"><a class="XqQF9c" href="http://www.google.com/url?q=http%3A%2F%2Fwww.hr.ubc.ca%2Frespectful-environment%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw2lv4Fh_WP9k6XvSNMi34ho" target="_blank">Respectful Environment Statement</a></span>.</p><p dir="ltr" class="CDt4Ke zfr3Q">The Statement of Principle of UBC's Respectful Environment Statement is <em>"The best possible environment for working, learning and living is one in which respect, civility, diversity, opportunity and inclusion are valued. Everyone at the University of British Columbia is expected to conduct themselves in a manner that upholds these principles in all communications and interactions with fellow UBC community members and the public in all University-related settings."</em> More details can be found on the department's <span class=" aw5Odc" style="text-decoration: underline;"><a class="XqQF9c" href="https://www.google.com/url?q=https%3A%2F%2Fwww.cs.ubc.ca%2Fstudents%2Fundergrad%2Fresources%2Fequity-inclusion-wellness&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3_3uPDJJsg162xmdw-UgcN" target="_blank">resource page</a></span>.</p><div id="h.p_IH9hzgY3AzM9" class="GV3q8e aP9Z7e"></div><h3 id="h.p_IH9hzgY3AzM9_l" dir="ltr" class="CDt4Ke zfr3Q OmQG5e" tabindex="-1"><div jscontroller="Ae65rd" jsaction="touchstart:UrsOsc; click:KjsqPd; focusout:QZoaZ; mouseover:y0pDld; mouseout:dq0hvd;fv1Rjc:jbFSOd;CrfLRd:SzACGe;" class="CjVfdc"><div class="PPhIP rviiZ" jsname="haAclf"><div role="presentation" class="U26fgb mUbCce fKz7Od LRAOtb Znu9nd M9Bg4d" jscontroller="mxS5xe" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;" jsshadow="" aria-describedby="h.p_IH9hzgY3AzM9_l" aria-label="Copy heading link" aria-disabled="false" data-tooltip="Copy heading link" aria-hidden="true" data-tooltip-position="top" data-tooltip-vertical-offset="12" data-tooltip-horizontal-offset="0"><a class="FKF6mc TpQm9d" href="#h.p_IH9hzgY3AzM9" aria-label="Copy heading link" jsname="hiK3ld" role="button" aria-describedby="h.p_IH9hzgY3AzM9_l"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -11px"><svg class="OUGEr QdAdhf" width="22px" height="22px" viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></span></span></a></div></div>License</div></h3><p dir="ltr" class="CDt4Ke zfr3Q">The readings and pre-recorded videos for this course are licensed using <span class=" aw5Odc" style="text-decoration: underline;"><a class="XqQF9c" href="https://www.google.com/url?q=https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby-sa%2F3.0%2F&amp;sa=D&amp;sntz=1&amp;usg=AOvVaw3_psMAN1J6YVv9iz4Vs76c" target="_blank">CC-by-SA</a></span>. However, it is important to note that the lecture videos, slides, deliverable descriptions, code implementing the deliverables, exams, and exam solutions are considered private materials. We go to considerable lengths to make the project an interesting and useful learning experience for this course. This is a great deal of work, and while future students may be tempted by your solutions, posting them does not do them any real favours. Please be considerate with these private materials and not pass them along to others, do not make your repos public or post them to other sites online.</p></div></div></div></div></div></div></div></div></div></section></div><div class="Xpil1b xgQ6eb"></div><footer jsname="yePe5c" class="yxgWrb " aria-hidden="false"><section id="h.5b34f9ef3e27c873_0" class="yaqOZd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_3" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><small dir="ltr" class="CDt4Ke zfr3Q TMjjoe" style="display: block;"><br></small></div></div></div></div></div></div></div></div></div></section></footer><div jscontroller="j1RDQb" jsaction="rcuQ6b:rcuQ6b;MxH79b:JdcaS;FaOgy:XuHpsb;" class="dZA9kd ynRLnc" data-last-updated-at-time="1672613320299"><div role="button" class="U26fgb JRtysb WzwrXb I12f0b K2mXPb zXBiaf ynRLnc" jscontroller="iSvg6e" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;;keydown:I481le;" jsshadow="" jsname="Bg3gkf" aria-label="Site actions" aria-disabled="false" tabindex="0" aria-haspopup="true" aria-expanded="false" data-menu-corner="bottom-start" data-anchor-corner="top-start" id="ow72" __is_owner="true"><div class="NWlf3e MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="MhXXcc oJeWuf"><span class="Lw7GHd snByac"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></svg></span></span></div></div><div jscontroller="j1RDQb" jsaction="focusin:gBxDVb(srlkmf); focusout:zvXhGb(srlkmf); click:ro2KTd(psdQ5e),Toy3n(V2zOu);JIbuQc:DSypkd(Bg3gkf);MxH79b:JdcaS;rcuQ6b:rcuQ6b;" class="LqzjUe" data-last-updated-at-time="1672613320299"><div jsname="psdQ5e" class="Q0cSn"></div><div jsname="bN97Pc" class="hBW7Hb"><div role="button" class="U26fgb mUbCce fKz7Od kpPxtd QMuaBc M9Bg4d" jscontroller="VXdfxd" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;" jsshadow="" jsname="Bg3gkf" aria-label="Site actions" aria-disabled="false" tabindex="-1" aria-hidden="true"><div class="VTBa7b MbhUzd" jsname="ksKsZd"></div><span jsslot="" class="xjKiLb"><span class="Ce1Y1c" style="top: -12px"><svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></svg></span></span></div><div jsname="srlkmf" class="hUphyc"><div class="YkaBSd"><div class="iBkmkf"><span>Page updated</span> <span jsname="CFIm1b" class="dji00c" jsaction="AHmuwe:eGiyHb; mouseover:eGiyHb;" tabindex="0" role="contentinfo"></span></div></div><div class="YkaBSd"><div role="button" class="U26fgb kpPxtd J7BuEb" jsshadow="" jsname="V2zOu" aria-disabled="false" tabindex="0">Google Sites</div></div><div class="YkaBSd" jscontroller="HYv29e" jsaction="click:dQ6O0c;" data-abuse-proto="%.@.null,&quot;106197520302660197475&quot;,&quot;https://sites.google.com/view/ubc-cpsc310-22w1/home&quot;,null,null,[],[]]"><div role="button" class="U26fgb kpPxtd J7BuEb" jsshadow="" aria-label="Report abuse" aria-disabled="false" tabindex="0">Report abuse</div></div></div></div></div></div></div>`
    },
    {
      courseName: "cpsc-310",
      pageType: "Introduction",
      courseInformation: `<div role="main" tabindex="-1" class="UtePc RCETm yxgWrb" dir="ltr" aria-hidden="false"><section id="h.5b34f9ef3e27c873_169" class="yaqOZd LB7kq gk8rDe" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_172" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe lkHyyc"><h1 id="h.p_ID_13" dir="ltr" class="CDt4Ke zfr3Q duRjpb" style="text-align: center;">Learning Outcomes</h1></div></div></div></div></div></div></div></div></div></section><section id="h.5b34f9ef3e27c873_173" class="yaqOZd" style=""><div class="IFuOkc"></div><div class="mYVXT"><div class="LS81yb VICjCf j5pSsc db35Fc" tabindex="-1"><div class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd purZT-AhqUyc-II5mzb ZcASvf-AhqUyc-II5mzb pSzOP-AhqUyc-qWD73c Ktthjf-AhqUyc-qWD73c JNdkSc SQVYQc"><div class="JNdkSc-SmKAyb LkDMRd"><div class="" jscontroller="sGwD4d" jsaction="zXBUYb:zTPCnb;zQF9Uc:Qxe3nd;" jsname="F57UId"><div class="oKdM2c ZZyype Kzv0Me"><div id="h.5b34f9ef3e27c873_176" class="hJDwNd-AhqUyc-uQSCkd Ft7HRd-AhqUyc-uQSCkd jXK9ad D2fZ2 zu5uec OjCsFc dmUFtb wHaque g5GTcb JYTMs"><div class="jXK9ad-SmKAyb"><div class="tyJCtd mGzaTb Depvyb baZpAe"><p dir="ltr" class="CDt4Ke zfr3Q">CPSC 310 will be a challenging course that we have designed to integrate many of the ideas and concepts from your prior courses in order to help you to learn how to apply them to engineering modern software systems. The official course learning outcomes (CLOs) for CPSC 310 are:</p><ul class="n8H08c UVNKR" style="list-style-type: square; margin-left: 0; margin-right: 0; padding: 0;"><li class="TYR86d zfr3Q" style="list-style-type: none;"><ol class="n8H08c BKnRcf" style="list-style-type: decimal; margin-left: 0; margin-right: 0; padding: 0;"><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 30pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-align: left; text-indent: 0;">Evaluate software engineering processes used to build modern industrial-calibre systems by justifying their benefits and tradeoffs.</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 30pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-align: left; text-indent: 0;">Elicit, deconstruct, and refine functional requirements and quality attributes such that they are described succinctly, completely, and precisely.</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 30pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-align: left; text-indent: 0;">Devise and justify high- and low-level designs to support a given set of requirements and in support of future evolutionary needs.</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 30pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-align: left; text-indent: 0;">Iteratively derive implementations of a design of reasonable complexity incorporating emergent design implications, and applying code-level restructuring for the sake of facilitating changes.</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 30pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-align: left; text-indent: 0;">Carry out the implementation of a design incorporating ethical and security implications of code-level choices and software process and methodological approaches.</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 30pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-align: left; text-indent: 0;">Independently acquire and apply modern and unfamiliar technology and language stacks.</p></li><li dir="ltr" class="TYR86d zfr3Q" style="margin-left: 30pt;"><p dir="ltr" class="CDt4Ke zfr3Q" style="margin-left: 0; padding-left: 0; text-align: left; text-indent: 0;">Validate systems using both black-box and white-box approaches to reason about, and improve the quality of a software system.</p></li></ol></li></ul></div></div></div></div></div></div></div></div></div></section></div>`
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
      courseInformation: `<div class="details">

      <div class="inner-wrapper">
        <div><section class="about">
  <h2>About This Course</h2>
  <p>Many software systems are amongst the most complex systems ever built by humans: telephone systems, flight control systems, internet search engines, social networking sites and much more.</p> 

<p>Two fundamental concepts central to supporting the construction and evolution of software systems are abstraction and decomposition. Building on the introduction to these concepts in CPSC 110, this course will explain how these concepts manifest over and over again in different forms when building larger and larger systems.</p>

<p>The goals of this course are to provide students with the ability to recognize, analyze and use abstraction and decomposition to construct software systems that solve real problems. This course will use the Java programming language and will provide students the opportunity to learn practical design and programming skills.</p>

<p>The course is designed to be accessible and useful to a wide range of students. CPSC 110 is a pre-requisite. </p>
</section>

<section class="prerequisites">
  <h2>Prerequisites</h2>
  <p>CPSC 110</p>
</section>

<section class="course-staff">
  <h2>Course Staff</h2>
  <article class="teacher">
    <p>Jessica Wong</p>
    <p>Paul Carter</p>
  </article>
</section>

<section class="faq">
  <section class="responses">
    <h2>Frequently Asked Questions</h2>
    <article class="response">
      <h3>Do I need to buy a textbook?</h3>
      <p>No. However, a list of optional resources is available on the Logistics page of the course content.</p>
    </article>
  </section>
</section>
</div>
      </div>
    </div>`
    },
    {
      courseName: "cpsc-210",
      pageType: "Syllabus",
      courseInformation: `<body class="ltr view-in-course view-statictab  lang_en"><div id="MathJax_Message" style="display: none;"></div>


      <div id="page-prompt"></div>
        <div class="window-wrap" dir="ltr">
          
          <a class="nav-skip sr-only sr-only-focusable" href="#main">Skip to main content</a>
      
              
      
      
      
      
      
      
      
      
      
      
      
      
      <header class="global-header slim">
          <div class="main-header">
              
      
      
      
      
      
      
      
      <h1 class="header-logo">
          <a href="/dashboard">
            
              <img class="logo" src="https://edx-cdn.org/v3/prod/logo.svg" alt="edX Home Page">
            
                  <span class="font-italic"> | EDGE</span>
          </a>
          <div class="course-header">
            <span class="provider">UBC:</span>
            <span class="course-number">CPSC 210</span>
            
            <span class="course-name">Software Construction</span>
          </div>
      </h1>
      
              <div class="hamburger-menu" role="button" aria-label="Options" menu="" aria-expanded="false" aria-controls="mobile-menu" tabindex="0">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
              </div>
                  
      
      
      
      
      
      
      
      
      <nav class="nav-links" aria-label="Sign in">
        <div class="secondary">
          <div>
                  <div class="mobile-nav-item hidden-mobile nav-item">
                      <a class="register-btn btn" href="/register?next=%2Fcourses%2Fcourse-v1%3AUBC%2BCPSC210%2Ball%2Ff008e11da76e491786a63d1e4ef70a3d%2F">Register for free</a>
                  </div>
                <div class="mobile-nav-item hidden-mobile nav-item">
                    <a class="sign-in-btn btn" href="/login?next=%2Fcourses%2Fcourse-v1%3AUBC%2BCPSC210%2Ball%2Ff008e11da76e491786a63d1e4ef70a3d%2F">Sign in</a>
                </div>
          </div>
        </div>
      </nav>
      
          </div>
          <div class="mobile-menu hidden" aria-label="More" options="" role="menu" id="mobile-menu"><div class="mobile-nav-item hidden-mobile nav-item mobile-nav-link">
                      <a class="register-btn btn" href="/register?next=%2Fcourses%2Fcourse-v1%3AUBC%2BCPSC210%2Ball%2Ff008e11da76e491786a63d1e4ef70a3d%2F" role="menuitem">Register for free</a>
                  </div><div class="mobile-nav-item hidden-mobile nav-item mobile-nav-link">
                    <a class="sign-in-btn btn" href="/login?next=%2Fcourses%2Fcourse-v1%3AUBC%2BCPSC210%2Ball%2Ff008e11da76e491786a63d1e4ef70a3d%2F" role="menuitem">Sign in</a>
                </div></div>
      </header>
      
      <!--[if lte IE 9]>
      <div class="ie-banner" aria-hidden="true"><strong>Warning:</strong> Your browser is not fully supported. We strongly recommend using <a href="https://www.google.com/chrome" rel="noopener" target="_blank">Chrome</a> or <a href="http://www.mozilla.org/firefox" rel="noopener" target="_blank">Firefox</a>.</div>
      <![endif]-->
      
      
      
      
              
      
      
      
      
      
      
      
      
          
      
      
      
      
      
      
      
      
          <div class="page-banner">
              <div class="user-messages" role="complementary" aria-label="messages">
                  <ul class="user-messages-ul">
                          <li>
                              <div class="alert alert-warning" role="alert">
                                  <span class="icon icon-alert fa fa fa-warning" aria-hidden="true"></span>
                                  <div class="message-content">To see course content, <a href="/login?next=%2Fcourses%2Fcourse-v1%3AUBC%2BCPSC210%2Ball%2Ff008e11da76e491786a63d1e4ef70a3d%2F">sign in</a> or <a href="/register?next=%2Fcourses%2Fcourse-v1%3AUBC%2BCPSC210%2Ball%2Ff008e11da76e491786a63d1e4ef70a3d%2F">register</a>.</div>
                              </div>
                          </li>
                  </ul>
              </div>
          </div>
      
      
          <div class="marketing-hero"></div>
      
          <div class="content-wrapper main-container" id="content" dir="ltr">
            
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
          
              <nav class="static_tab_f008e11da76e491786a63d1e4ef70a3d wrapper-course-material" aria-label="Course Material">
                  <div class="course-material">
                      
                      <ol class="tabs course-tabs">
                          
      
      
      
      
      
        
        <li class="tab">
        <a href="https://learning.edge.edx.org/course/course-v1:UBC+CPSC210+all/home" class="">
        Course
        </a>
        </li>
        
        <li class="tab">
        <a href="/courses/course-v1:UBC+CPSC210+all/f008e11da76e491786a63d1e4ef70a3d/" class="active">
        Course Outline &amp; Topics Table
            <span class="sr">, current location</span>
        </a>
        </li>
        
        <li class="tab">
        <a href="https://piazza.com/class/jli6avko7tj2zb" class="">
        External Discussion
        </a>
        </li>
      
                          
                      </ol>
                  </div>
              </nav>
      
      
        
      
          <link href="https://prod-edge-edxapp-assets.edx-cdn.org/static/edx.org-next/css/lms-style-student-notes.a35233ec9b00.css" rel="stylesheet" type="text/css">
      
      
      
      
      <main id="main" aria-label="Content" tabindex="-1">
          <section class="container" lang="en">
          <section class="container">
            <div class="static_tab_wrapper">
              
      <div class="xblock xblock-student_view xblock-student_view-static_tab xmodule_display xmodule_StaticTabBlock" data-course-id="course-v1:UBC+CPSC210+all" data-init="XBlockToXModuleShim" data-runtime-class="LmsRuntime" data-runtime-version="1" data-block-type="static_tab" data-usage-id="block-v1:UBC+CPSC210+all+type@static_tab+block@f008e11da76e491786a63d1e4ef70a3d" data-request-token="a4c4333e202411eea05d91dc64b9fc58" data-graded="False" data-has-score="False">
        <script type="json/xblock-args" class="xblock-json-init-args">
          {"xmodule-type": "HTMLModule"}
        </script>
        <p>The&nbsp;Course Outline for the current term can be found&nbsp;<a href="http://tiny.cc/210-coursepage" target="[object Object]">here</a>. This also contains the schedule.</p>
      <p>Lecture tickets are available on PrairieLearn <a href="https://ca.prairielearn.org" target="_blank">https://ca.prairielearn.org</a>. &nbsp;</p>
      <p>(Times listed are for 1x speed video only! It may take you more (or less!) time to go through the material)</p>
      <table width="1368" height="2483">
      <tbody>
      <tr bgcolor="lightgrey">
      <td><b>Topic</b></td>
      <td><b>Watch</b> <br>week <br>prior</td>
      <td><b>Submit</b> <br>Please&nbsp;see PrairieLearn <br>for all lecture tickets</td>
      <td><b>In class <g class="gr_ gr_467 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="467" data-gr-id="467">Lecture Lab</g></b></td>
      <td><b>Extra</b> <br>Practice</td>
      </tr>
      <tr bgcolor="lightblue">
      <td colspan="5"><center><span style="text-decoration: underline;"><strong>B</strong></span>ASICS</center></td>
      </tr>
      <tr>
      <td>B1: Program Structure</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/93c03b1d62ef4724a1e534e948dd8d57" target="[object Object]">watch</a>&nbsp;~20min</td>
      <td></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/bf936690722d49c0a7de670fca56d2c7" target="[object Object]"> <g class="gr_ gr_446 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="446" data-gr-id="446">lec</g>&nbsp;lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/f577ec9e12804ebeb041d4389930fc5b" target="[object Object]">FitLifeGym</a> <br> <a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/b345298bfcf04f47b2b1c0759bcc5b47 " target="[object Object]">SmartHome</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/b345298bfcf04f47b2b1c0759bcc5b47 " target="[object Object]">Practice</a></td>
      </tr>
      <tr>
      <td>B2: Methods and Calls</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/7a175a1b7bfc45d8b7dc497f447f4b96" target="[object Object]">watch</a>&nbsp;~8min</td>
      <td></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/27a757fabc084562b6f9169d096a3b0b" target="[object Object]"> <g class="gr_ gr_483 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="483" data-gr-id="483">lec</g>&nbsp;lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/eb22686046184515a1c268de7cf7057a" target="[object Object]">SpaceInvaders<br></a><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/e2e3992e5e3a4240aed7887dfa688af5" target="[object Object]">FitLifeGym</a></td>
      </tr>
      <tr>
      <td>B3: Classes and Objects</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/1f2ab578c3164c42bb298cadeaef167e" target="[object Object]">watch</a>&nbsp;~30min</td>
      <td>See PrairieLearn<br><br></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/99c0f3c684f54a1789c9e36d2c85d03e" target="[object Object]"> <g class="gr_ gr_484 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="484" data-gr-id="484">lec</g>&nbsp;lab</a></td>
      <td>
      <p><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/9e261490065344fe9141d1a85c579052" target="[object Object]">FitLifeGym</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/b2991599a3044b318a741a75a0232287">B3 retake practice</a></p>
      </td>
      </tr>
      <tr>
      <td>B4: Variables and <g class="gr_ gr_482 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del" id="482" data-gr-id="482">Data flow</g></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/387f2ee4a1b54e86af694059de9c40a7" target="[object Object]">watch</a>&nbsp;~40min</td>
      <td>See PrairieLearn<br><br></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/59ba2d3a6d954023b3d857802f2089dd" target="[object Object]"> <g class="gr_ gr_485 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="485" data-gr-id="485">lec</g> lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/9e261490065344fe9141d1a85c579052" target="[object Object]">FitLifeGym</a></td>
      </tr>
      <tr>
      <td>B5: Conditions, Loops &amp; Execution flow &amp; debugging</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/96a6d4658c5f42c79ade0ed3eb18a135" target="[object Object]">watch</a>&nbsp;~20min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/efd3918213644a3ba93ceea82a76d28a" target="[object Object]"> <g class="gr_ gr_486 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="486" data-gr-id="486">lec</g> lab</a></td>
      <td>
      <p><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/b672da98b01249d58a678b42ddad1164" target="[object Object]">FitLifeGym</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/bfc0e493e7e842e78a60b4d863c86e63" target="[object Object]">JHotDraw</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/bd4546b2e0684bb79e3fb00d94520684" target="[object Object]">Other practice</a></p>
      </td>
      </tr>
      <tr bgcolor="LIGHTBLUE">
      <td colspan="5"><center><span style="text-decoration: underline;"><strong>A</strong></span>BSTRACTION</center></td>
      </tr>
      <tr></tr>
      <tr bgcolor="lightgrey">
      <td>Topic</td>
      <td>Watch</td>
      <td>Ticket</td>
      <td><g class="gr_ gr_488 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="488" data-gr-id="488">Lec</g> lab</td>
      <td>Practice</td>
      </tr>
      <tr>
      <td>A1: Specify DA</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/6c6602ec92b84f8b80d3d6ed7514c7eb" target="[object Object]">watch</a>&nbsp;~40min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/adaadd8f2afb4da2b417fedb20f67ffb" target="[object Object]"> <g class="gr_ gr_489 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="489" data-gr-id="489">lec</g> lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/a1a751b309334859a2addc5598af84ae" target="[object Object]">Student Transcript</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/4fc1521f30bd4dd58716ae0c9b499a70" target="[object Object]">Other practice</a></td>
      </tr>
      <tr>
      <td>A2: Testing a DA</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/026da98e7707403fa4a790318a80b98b" target="[object Object]">watch</a>&nbsp;~50min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/6f128beb9102422993cf0dbf427aefc5" target="[object Object]">lec lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/23bcce9e22e2469eaa289b1df6a328ca" target="[object Object]">Extra Practice</a></td>
      </tr>
      <tr>
      <td>A3: Implementing a DA</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/22e9e22ee7ff4dd782d445f6eea49d4a" target="[object Object]">watch</a>&nbsp;~6min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/40f34322cccc4588a2bacdd269f0d8a2" target="[object Object]">lec lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/3bf2d438ac3d4987968c68f06a707026" target="[object Object]">Extra problems</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/72d9ab1f9e2242f99210b3c959ac60c2" target="[object Object]">Practice questions</a></td>
      </tr>
      <tr>
      <td>A1/A2/A3: Advanced</td>
      <td></td>
      <td></td>
      <td><a href="https://studio.edge.edx.org/container/block-v1:UBC+CPSC210+all+type@vertical+block@b86296148b9f46ed94ef2316d9e9f16b" target="[object Object]">lec lab</a></td>
      <td></td>
      </tr>
      <tr>
      <td>A4: Types, and Substitution</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/ecf5a28099c94f6591f118e6120fb9b2" target="[object Object]">watch</a>&nbsp;~30min</td>
      <td>See PrairieLearn</td>
      <td>
      <p><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/7149e6394ad34b3b8d4573bb4836f0ea" target="[object Object]"> <g class="gr_ gr_460 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="460" data-gr-id="460">lec</g> lab</a>&nbsp;<br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/4f6431819e734d55b64b5db060394a09" target="[object Object]">Quiz Grader midterm practice</a></p>
      </td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/366a1aa5019d41849ca883dfcfae421f" target="[object Object]">problems</a></td>
      </tr>
      <tr>
      <td>A5: Implementing Multiple Interfaces</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/ba1667327afd48608ffac11b054a5008" target="[object Object]">watch</a>&nbsp;~14min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/82bacb4e168d4430a57a3c29f68ecca6" target="[object Object]"> <g class="gr_ gr_462 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="462" data-gr-id="462">lec</g> lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/f80fb4e6128f47778d91598944a65f57" target="[object Object]">calendar</a></td>
      </tr>
      <tr>
      <td>A6: Extends and Override, Super calls</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/729afa0d546944b28ea1345b85fd91fd" target="[object Object]">watch</a>&nbsp;~20min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/a46e7de0907e482489146758f7005082" target="[object Object]"> <g class="gr_ gr_463 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="463" data-gr-id="463">lec</g> lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/34851397fa6149c4b2f0a9be3dfb4895" target="[object Object]">questions</a>&nbsp; <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/7d9a5f0dcdc74a8184734650d6909bac" target="[object Object]">calendar</a>&nbsp;</td>
      </tr>
      <tr>
      <td>A7: Abstract classes and Overloading</td>
      <td>
      <p><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/5d096bb566574e22947689deef065491" target="[object Object]">watch</a>&nbsp;~12min</p>
      </td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/b76144d159a941769c9caa5a84b59b34" target="[object Object]"> <g class="gr_ gr_449 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="449" data-gr-id="449">lec</g> lab</a></td>
      <td>
      <p><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/0a62655fad794af3b82c9971760efda1" target="[object Object]">questions</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/4f6eaa0eec06412cb9eb97e213c162f9" target="[object Object]">calendar</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/79c34c76200c4ac9ae601679b9393f31" target="[object Object]">A7 Practice Quiz</a></p>
      </td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/b76144d159a941769c9caa5a84b59b34" target="[object Object]">A567 Lecture lab</a></td>
      <td></td>
      </tr>
      <tr bgcolor="LIGHTBLUE">
      <td colspan="5"><center><span style="text-decoration: underline;"><strong>C</strong></span>ONSTRUCTION</center></td>
      </tr>
      <tr bgcolor="lightgrey">
      <td>Topic</td>
      <td>Watch</td>
      <td>Ticket</td>
      <td><g class="gr_ gr_455 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="455" data-gr-id="455">Le</g>c lab</td>
      <td>Practice</td>
      </tr>
      <tr>
      <td>C1: Throw, Catch, Finally exceptions</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/ccafa7d992894160b0e12d6b2ca1d010" target="[object Object]">watch</a>&nbsp;~15min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/847072d4cd7a466d99870d9837ffb036" target="[object Object]"> <g class="gr_ gr_466 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="466" data-gr-id="466">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/0891405da26344b5b8012db140797516" target="[object Object]">Extra practice</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/1e90e5c24a0449ee90536c5a56f3fdf6" target="[object Object]">CoffeeMaker</a></td>
      </tr>
      <tr>
      <td>C2: Unchecked exceptions &amp; Exception hierarchies</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/0e8616b06b2c4e0d9ec833587e500fb1" target="[object Object]">watch</a>&nbsp;~10min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/e130eb2293c64dd6beaf3c2d6af7edf4" target="[object Object]"> <g class="gr_ gr_468 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="468" data-gr-id="468">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/63a91c7f190e4f34a2fcdc27877881bf" target="[object Object]">Extra practice</a></td>
      </tr>
      <tr>
      <td>C3: Testing exceptions</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/180b5aa9873d4be7a245f98dc131061c" target="[object Object]">watch</a>&nbsp;~5min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/c7f34e56d7434500aa65dd9d2875e2f4" target="[object Object]"> <g class="gr_ gr_469 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="469" data-gr-id="469">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/7a0b9ee6de7f4aecad4639fefe6fa221" target="[object Object]">Midterm Practice</a></td>
      </tr>
      <tr>
      <td>C4: Extract hierarchy, associations</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/cd5c19583ef046578d9e4fa806d46605" target="[object Object]">watch</a>&nbsp;~8min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/da1b89f8eda74802bb08cb4518f17781" target="[object Object]"> <g class="gr_ gr_475 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="475" data-gr-id="475">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/483e295635bd4543b3d9460adcc11308" target="[object Object]">FitLifeGym</a> <br> <a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/514c5343669d418a8b781cc967caf0ab"> <g class="gr_ gr_487 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling multiReplace" id="487" data-gr-id="487"></g> <g class="gr_ gr_487 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling multiReplace" id="487" data-gr-id="487">Self test</g> </a></td>
      </tr>
      <tr>
      <td>C5: Extract sequences</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/fecf3a5f2d7f4d21bf79ff13b33bbd1c" target="[object Object]">watch</a>&nbsp;~11min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/58322c6719df48fea789f8a0257cfcb0" target="[object Object]"> <g class="gr_ gr_476 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="476" data-gr-id="476">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/ab9396dad36043f0aea872c8d82b9029" target="[object Object]">Library</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/96eb7ed79f0f4c97b42f1aa258559e9e" target="[object Object]">Practice </a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/6c1ecefa6767464a8f3981658c28dce8">Examples</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/a947c3dfd0144321b730edd2b80ad7b7" target="[object Object]">C5 Practice Quiz</a></td>
      </tr>
      <tr>
      <td>C6&nbsp;Implementing a Hierarchy</td>
      <td>
      <p><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/0bb58f80be5d40d3a5172fef601b439f" target="[object Object]">watch</a>&nbsp;~8min</p>
      </td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/6f6429f42229426289003d9f08aba8e3" target="[object Object]"> <g class="gr_ gr_477 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="477" data-gr-id="477">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/e3ff62d07c2742488532f2e861c41fe3" target="[object Object]">Practice</a></td>
      </tr>
      <tr>
      <td>C7 Hashcode/Equals</td>
      <td>
      <p><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/aaa42312400248ada28119c69f30f4e3">watch</a>&nbsp;~10min</p>
      </td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/6f6429f42229426289003d9f08aba8e3" target="[object Object]"><g class="gr_ gr_477 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="477" data-gr-id="477">le</g>c lab</a></td>
      <td></td>
      </tr>
      <tr>
      <td>C8: Implement reflexive relationships and Sequence Diagrams</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/7a02dfeb9efc4393baeb1d601d26b7a5" target="[object Object]">watch</a>&nbsp;~6min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/5018e8a9b1054c5690c65cbbacce7be9" target="[object Object]"> <g class="gr_ gr_479 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="479" data-gr-id="479">le</g>c lab</a></td>
      <td>included below</td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/c289bb1d2d434c2ab2aef20ce1928b10" target="[object Object]"> C678 Lecture Lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/ede35ea1a91547abb550b7b2ede435bc" target="[object Object]">Pet Pairs</a></td>
      </tr>
      <tr bgcolor="lightblue">
      <td colspan="5"><center><span style="text-decoration: underline;"><strong>D</strong></span>ESIGN</center></td>
      </tr>
      <tr></tr>
      <tr bgcolor="lightgrey">
      <td>Topic</td>
      <td>Watch</td>
      <td>Ticket</td>
      <td><g class="gr_ gr_453 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="453" data-gr-id="453">Le</g>c lab</td>
      <td>Practice</td>
      </tr>
      <tr>
      <td>D1: Coupling and Cohesion</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/7f263cab803e42b387229258c7211918" target="[object Object]">watch</a>&nbsp;~9min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/b59eff57fc644d498e090fa7b78af9ba" target="[object Object]"> <g class="gr_ gr_454 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="454" data-gr-id="454">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/a43dd9d3bada403bb33bd8d2396cc0dd" target="[object Object]">Busy's Diner</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/aff60f92d58343c2ad2a75a611560110">GangesSRP</a></td>
      </tr>
      <tr>
      <td>D2: LSP</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/bf5c460551174880ad81148d4f93035c" target="[object Object]">watch</a>&nbsp;~8min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/4e57b0f4bca2473082c48b76e6a873e1" target="[object Object]"> <g class="gr_ gr_457 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="457" data-gr-id="457">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/4cda8e8d21bd4920af0134b0b21e1903" target="[object Object]">GangesLSP</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/c22093bc9060471ca2f85a733c94792a">Busy's Diner</a> <br> <a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/301d2b2911b54d43a9ae543ae2374f15"> <g class="gr_ gr_464 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling multiReplace" id="464" data-gr-id="464"></g> <g class="gr_ gr_464 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling multiReplace" id="464" data-gr-id="464">Self stud</g>y</a></td>
      </tr>
      <tr>
      <td>D3: Refactoring: Extract method and Delegation</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/4dcc156ef3304d94b58f3fe9b03ae42b" target="[object Object]">watch</a>&nbsp;~8min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/2adb758bc57a4383937e9a0545a9e0ad" target="[object Object]"> <g class="gr_ gr_458 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="458" data-gr-id="458">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/c164ebd1cd4745e9a02d369bebd6ea75" target="[object Object]">Busy's Diner</a> <br><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/d7854a6b49f14ae4ad934733f88fe4db">Quiz Grader</a></td>
      </tr>
      <tr>
      <td>D4: Composite</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/39690cb848c44f9c8ae02f11d0c52c45" target="[object Object]">watch</a>&nbsp;~9min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/73f33687f0ff4deead1d955093b050e4" target="[object Object]"> <g class="gr_ gr_459 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="459" data-gr-id="459">le</g>c lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/8435b569d88040fbb11a518491b4ea55" target="[object Object]">Console Arcade</a></td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/d95663584ec94366b55f4dbc035e098d" target="[object Object]">Composite Lecture Lab</a></td>
      <td></td>
      </tr>
      <tr>
      <td>D5: Observer</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/5cc65b4ff13c4ad58fece9c051afe7fc" target="[object Object]">watch</a>&nbsp;~11min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/a0ed3f3cf7834030a9778f673abcfb55" target="[object Object]"> <g class="gr_ gr_443 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="443" data-gr-id="443">l</g>ec lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/d75f616a406749e7885efebbb1d540dd" target="[object Object]">Console Arcade Bingo</a></td>
      </tr>
      <tr>
      <td>D6: Java Observer</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/1ab7017dadef44509d72d46056fe1d98" target="[object Object]">watch</a>&nbsp;~6min</td>
      <td>See PrairieLearn</td>
      <td><a href="https://edge.edx.org/courses/course-v1:UBC+CPSC210+all/courseware/e39fe618adf44f51ae26c1dd843ff87b/66570949132449dfb50097a44765c0cf/?activate_block_id=block-v1%3AUBC%2BCPSC210%2Ball%2Btype%40sequential%2Bblock%4066570949132449dfb50097a44765c0cf" target="[object Object]"> <g class="gr_ gr_438 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="438" data-gr-id="438">l</g>ec lab</a></td>
      <td></td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="https://edge.edx.org/courses/course-v1:UBC+CPSC210+all/jump_to/block-v1:UBC+CPSC210+all+type@sequential+block@eb01447a52424784a2666aa8bee535f3" target="[object Object]">Observer In Class Exam Practice</a></td>
      <td></td>
      </tr>
      <tr>
      <td>D7: Basic Iterator</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/f40105f899f24d42bd7300688f9c5648" target="[object Object]">watch</a>&nbsp;~7min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/7b21da1d5e8749cb83186329fef0570e" target="[object Object]"> <g class="gr_ gr_441 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="441" data-gr-id="441"></g>lec lab</a></td>
      <td></td>
      </tr>
      <tr>
      <td>D8: Advanced Iterator</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/01af57dcb4f84c74ab322557ba0d0e45" target="[object Object]">watch</a>&nbsp;~5min</td>
      <td>See PrairieLearn</td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/70471d8c53cc4809bec3f16ca8ed390b" target="[object Object]"> <g class="gr_ gr_448 gr-alert gr_spell gr_inline_cards gr_disable_anim_appear ContextualSpelling ins-del multiReplace" id="448" data-gr-id="448"></g>lec lab</a></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/6d9c4bc714ef4baca96c92d0912c2b17" target="[object Object]">Console Arcade Word Game</a></td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td><a href="/courses/course-v1:UBC+CPSC210+all/jump_to_id/75aa36d91d3a412ea46a799ae40c2ad6" target="[object Object]">More practice on iterators</a></td>
      <td></td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      </tbody>
      </table>
      <p></p>
      <p></p>
      </div>
      
            </div>
          </section>
      </section></main>
      
            
          </div>
      
              
      
      
      
      
      
      
      
      <footer id="footer-edx-v3" role="contentinfo" aria-label="Page Footer">
      
      <div class="container">
          <div class="row main-row"><!-- row -->
              <div class="col-xl-2 col-lg-12 col-md-2 col-sm-8 col-xs-10 column-1 flex-column column-styles">
                  <div class="row">
                      <div class="col-12 column-2-2 column-styles">
                      <div class="edx-footer-logo">
                          <a href="/">
                              <img alt="edX Home Page" src="https://edx-cdn.org/v3/prod/logo-trademark.svg">
                          </a>
                      </div>
      
      
                      </div>
                  </div>
      
              </div>
              <div class="col-xl-6 col-lg-8 col-md-9 col-sm-5 col-xs-12 column-2 flex-column column-styles">
                   <div class="row full-height">
      
                       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 column-2-1 col-xs-12 first-div-border column-styles ">
                          <div class="row full-height">
                              <div class="ml-xl-0 col-lg-10 ml-lg-auto col-md-12 column-2-2 col-sm-10 full-height column-styles">
                                    <h2 class="heading">edX</h2>
                                        <ul class="list-unstyled clear-margins  ">
                                            <li>
                                                <a href="/about">About</a>
                                            </li>
                                        </ul>
                              </div>
                          </div>
                       </div>
                       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 column-2-1 second-div-border column-styles ">
                              <div class="row full-height">
                                  <div class="col-lg-12 col-md-12 col-sm-10 column-2-2 full-height column-styles">
                                        <h2 class="heading">Legal</h2>
                                          <ul class="list-unstyled clear-margins  ">
                                              <li>
                                                <a href="/tos_and_honor">Terms of Service &amp; Honor Code</a>
                                              </li>
                                              <li>
                                                <a href="https://www.edx.org/edx-privacy-policy">Privacy Policy</a>
                                              </li>
                                          </ul>
                                  </div>
                                </div>
                      </div>
                       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 column-2-1 third-div-border column-styles">
                            <div class="row full-height">
                              <div class="col-lg-12 col-md-12 col-sm-10 full-height column-2-2 column-styles">
                                    <h2 class="heading">Connect</h2>
                                    <ul class="list-unstyled clear-margins  ">
                                      <li>
                                        <a href="/blog">Blog</a>
                                      </li>
                                      <li>
                                        <a href="https://edge.edx.org/support/contact_us">Contact Us</a>
                                      </li>
                                      <li>
                                        <a href="https://support.edx.org">Help Center</a>
                                      </li>
                                      <li>
                                        <a href="https://www.edx.org/policy/security">Security</a>
                                      </li>
                                    </ul>
                              </div>
                            </div>
                       </div>
      
      
      
      
      
                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-9 ml-md-auto col-sm-7 column-3 flex-column fourth-div-border column-styles">
                      <div class="row">
                          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 column-3-1 social-app-links-div column-styles ml-auto">
                            <div class="row">
                              <div class="col-lg-12 col-md-12 column-3-2 column-styles">
                                   <ul class="list-inline list-unstyled social">
                                          <li>
                                              <a href="http://www.facebook.com/EdxOnline" class="social-links external" title="Facebook" rel="noreferrer">
                                                  <span class="icon fa fa-facebook-square" aria-hidden="true"></span>
                                                  <span class="sr">Like edX on Facebook</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="https://twitter.com/edXOnline" class="social-links external" title="Twitter" rel="noreferrer">
                                                  <span class="icon fa fa-twitter-square" aria-hidden="true"></span>
                                                  <span class="sr">Follow edX on Twitter</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="http://www.linkedin.com/company/edx" class="social-links external" title="LinkedIn" rel="noreferrer">
                                                  <span class="icon fa fa-linkedin-square" aria-hidden="true"></span>
                                                  <span class="sr">Follow edX on LinkedIn</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="#" class="social-links external" title="Instagram" rel="noreferrer">
                                                  <span class="icon fa fa-instagram" aria-hidden="true"></span>
                                                  <span class="sr">Follow edX on Instagram</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="http://www.reddit.com/r/edx" class="social-links external" title="Reddit" rel="noreferrer">
                                                  <span class="icon fa fa-reddit-square" aria-hidden="true"></span>
                                                  <span class="sr">Subscribe to the edX subreddit</span>
                                              </a>
                                          </li>
                                   </ul>
                                  <ul class="list-inline list-unstyled app-links">
                                  </ul>
                                    <!--"EdX, Open edX, and MicroMasters are trademarks of edX Inc. registered in the U.S. and other countries-->
                                    <p class="copyright">© 2023 edX LLC. All rights reserved.
                                        <br>
                                    </p>
                              </div>
                        </div>
                      </div>
      
                      </div>
      
              </div>
          </div>
      
      
      
      
      </div>
      
      </footer>
      
      
      
        
      
          <link href="https://prod-edge-edxapp-assets.edx-cdn.org/static/edx.org-next/css/lms-footer-edx.4766d633c414.css" rel="stylesheet" type="text/css">
      
      
      
      
      
      
        </div>
      
        
      
      
      
      
      
      <script type="text/javascript">
          // Fast Preview was introduced in 2.5. However, it
          // causes undesirable flashing/font size changes when
          // MathJax is used for interactive preview (equation editor).
          // Setting processSectionDelay to 0 (see below) fully eliminates
          // fast preview, but to reduce confusion, we are also setting
          // the option as displayed in the context menu to false.
          // When upgrading to 2.6, check if this variable name changed.
          window.MathJax = {
            menuSettings: {CHTMLpreview: false}
          };
      </script>
      
      <script type="text/x-mathjax-config;executed=true">
        MathJax.Hub.Config({
          styles: {
            '.MathJax_SVG>svg': { 'max-width': '100%', },
          },
          messageStyle: "none",
          CommonHTML: { linebreaks: { automatic: true } },
          SVG: { linebreaks: { automatic: true } },
          "HTML-CSS": { linebreaks: { automatic: true } },
          tex2jax: {
            inlineMath: [
              ["\\(","\\)"],
              ['[mathjaxinline]','[/mathjaxinline]']
            ],
            displayMath: [
              ["\\[","\\]"],
              ['[mathjax]','[/mathjax]']
            ]
          }
        });
      </script>
      <script type="text/x-mathjax-config;executed=true">
      
        // In order to eliminate all flashing during interactive
        // preview, it is necessary to set processSectionDelay to 0
        // (remove delay between input and output phases). This
        // effectively disables fast preview, regardless of
        // the fast preview setting as shown in the context menu.
        MathJax.Hub.processSectionDelay = 0;
      
        MathJax.Hub.signal.Interest(function(message) {
          if(message[0] === "End Math") {
              set_mathjax_display_div_settings();
          }
        });
        function set_mathjax_display_div_settings() {
          $('.MathJax_Display').each(function( index ) {
            this.setAttribute('tabindex', '0');
            this.setAttribute('aria-live', 'off');
            this.removeAttribute('role');
            this.removeAttribute('aria-readonly');
          });
        }
      </script>
      
      <script type="text/javascript">
          // Activating Mathjax accessibility files
          window.MathJax = {
              menuSettings: {
                  collapsible: true,
                  autocollapse: false,
                  explorer: true
              }
          };
          window.addEventListener('resize', MJrenderer);
      
          let t = -1;
          let delay = 1000;
          let oldWidth = document.documentElement.scrollWidth;
          function MJrenderer() {
            // don't rerender if the window is the same size as before
            if (t >= 0) {
              window.clearTimeout(t);
            }
            if (oldWidth !== document.documentElement.scrollWidth) {
              t = window.setTimeout(function() {
                oldWidth = document.documentElement.scrollWidth;
                MathJax.Hub.Queue(["Rerender", MathJax.Hub]);
                t = -1;
              }, delay);
            }
          };
      </script>
      
      <!-- This must appear after all mathjax-config blocks, so it is after the imports from the other templates.
           It can't be run through static.url because MathJax uses crazy url introspection to do lazy loading of
           MathJax extension libraries -->
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/mathjax@2.7.5/MathJax.js?config=TeX-MML-AM_SVG"></script>
      
      <script src="https://prod-edge-edxapp-assets.edx-cdn.org/static/bundles/HtmlBlockDisplay.d3bd4f226791b8e62f4b.0bf07aabddf4.js" type="application/javascript"></script>
      <script src="https://prod-edge-edxapp-assets.edx-cdn.org/static/bundles/XModuleShim.492072f387765a08f2cc.18b73520ca00.js" type="application/javascript"></script>
      
        
      
        
      
      
          <!-- begin segment footer -->
          <script type="text/javascript">
              // If we do not have an authenticated user, but Segment has a user id,
              // reset the Segment user state so we start tracking fresh.
              // This has to be wrapped in the document.readyState logic because the analytics.user()
              // function isn't available until the analytics.js package has finished initializing.
              if (document.readyState === 'complete') {
                  if (analytics.user().id()) {
                      analytics.reset();
                  }
              } else {
                  document.addEventListener('readystatechange', event => {
                      if (event.target.readyState === 'complete' && analytics.user().id()) {
                          analytics.reset();
                      }
                  });
              }
          </script>
          <!-- end segment footer -->
      
        <script type="text/javascript" src="https://prod-edge-edxapp-assets.edx-cdn.org/static/js/vendor/noreferrer.aa62a3e70ffa.js" charset="utf-8"></script>
        <script type="text/javascript" src="https://prod-edge-edxapp-assets.edx-cdn.org/static/js/utils/navigation.5a78fd05918f.js" charset="utf-8"></script>
        <script type="text/javascript" src="https://prod-edge-edxapp-assets.edx-cdn.org/static/js/header/header.894c13b07c4f.js"></script>
        
        <script type="text/javascript" src="https://prod-edge-edxapp-assets.edx-cdn.org/static/js/src/jquery_extend_patch.54dddef28d15.js"></script>
        <div id="lean_overlay"></div>
      
      
      
      
      
      <div id="reader-feedback" class="sr" aria-live="polite"></div></body>`
    },
    {
      courseName: "cpsc-221",
      pageType: "Introduction",
      courseInformation: `CPSC 221
      Basic Algorithms and Data Structures
      Introduction
      Textbook References:
      Koffman: Chapters P and 1
      CPSC 221 Introduction Page 2
      Learning goal(s)
      • Get an overview of the course
      • Learning Goals for each chapter will be given
      – Please pay attention to them.
      – They’re part of the lecture slides.
      – They make great exam checklists.
      CPSC 221 Introduction Page 3
      Course Personnel
      • Your Instructor:
      – Hassan Khosravi
      – ICCS 241
      – hkhosrav@cs.ubc.ca
      – Office hours
      • Right after lectures in class
      • Mondays 3-4, and Tuesdays 11-12 in ICCS 241
      • By appointment; see my webpage for my work calendar.
      • The other instructor
      – Alan Hu
      • Teaching Assistants and office hours: See website
      CPSC 221 Introduction Page 4
      Course information
      • The course home page
      http://www.ugrad.cs.ubc.ca/~cs221
      • Read it carefully
      – Course info
      – Notes (Pre-lecture notes, Post-lecture notes)
      • Texts: Epp Discrete Mathematics, Koffman C++
      – Exams are open book
      CPSC 221 Introduction Page 5
      Connect
      • Quizzes and your grades are hosted on Connect
      – http://elearning.ubc.ca/connect/
      • To access Connect you need a Campus-Wide
      Login (CWL). To register for a CWL account,
      visit www.cwl.ubc.ca.
      CPSC 221 Introduction Page 6
      Piazza
      • The course bulletin (Piazza)
      • https://piazza.com/configure-classes/winterterm22014/cpsc221
      • Enrollment code is…
      • The Piazza bulletin board is required reading. It will be used
      for important material that may not be mentioned in class.
      • Problems with the CPSC 221 course contents (e.g. lecture, lab,
      textbook, assignments) can be posted on Piazza.
      • Students are encouraged to ask questions, and to respond to
      other students' questions.
      • Selected individuals that actively respond to postings on
      Piazza, may receive a bonus mark of up to 2%.
      • Only send email for personal issues. (ALWAYs add CPSC 221
      in the title of your email)
      CPSC 221 Introduction Page 7
      Exams
      • Midterm: Wed. February 25, 6:00pm – 8:30pm
      – Location to be announced
      – Potentially two stage exam
      – If you have a conflict let me know ASAP and no later
      than Thursday, January 8
      • Final: To be determined by UBC.
      – Examination period begins: Tuesday, April 14 2015
      – Examination period ends: Wednesday, April 29 2015
      CPSC 221 Introduction Page 8
      Labs
      • (roughly) every week. Please attend assigned lab
      section for now.
      • Labs start Monday, January 12.
      – In room x350
      • We’ll try to have the labs posted by Thursday
      evenings.
      CPSC 221 Introduction Page 9
      Assignments
      • No late work; may be flexible with advance notice
      • Programming projects (~3) typically due 9PM on
      due date
      – All programming projects graded on Linux/g++
      • Written homework typically due 5PM on due
      date
      – Assignment box 35
      CPSC 221 Introduction Page 10
      PeerWise
      • Students use PeerWise to create and to explain their
      understanding of course related assessment
      questions, and to answer and discuss questions
      created by their peers.
      – https://peerwise.cs.auckland.ac.nz/docs/
      • Making multiple-choice tests requires a much
      higher level of understanding than simply taking
      them!
      CPSC 221 Introduction Page 11
      PeerWise
      • Encouraging students to "own their own learning" in a
      sharing and supportive environment. Posing good,
      thoughtful questions with supporting explanations is an
      excellent application of critical thinking skills.
      • Answering questions and giving comments offers
      opportunities to improve one's communication and selfreflection abilities.
      CPSC 221 Introduction Page 12
      Clickers
      • We will be using clickers in the section of the course, so
      please register your i>Clicker using UBC Connect
      – A typical pattern used in my lectures is: students vote
      on their own first; for more difficult questions students
      are encouraged to participate in group-discussions
      – You can participate in answering questions
      anonymously
      – Responses are projected, in real-time, so you can
      compare yourself with your peers
      – Reveals misconceptions and I can pace the
      presentation and explanations to fit the audience`
    },
    {
      courseName: "cpsc-221",
      pageType: "Syllabus",
      courseInformation: `CPSC221 Syllabus (2017W2-2019W2)
      This course teaches a variety of mechanisms for storing collections of data in
      support of computation, and discusses the advantages and disadvantages associated
      with the different methods, and it serves as students’ first glimpse at algorithms that
      lie at the heart of Computer Science. Students learn how to implement various
      data-storage structures and algorithms, and they learn how to evaluate their design
      choices. The combined arts of design, analysis and justification are the substance of
      the class.
      Prerequisites: CPSC121 – discrete math, and CPSC210 – software engineering.
      Meeting format: 3 lecture meetings per week + 2hr lab section. (Modified as we
      migrate to online instruction.)
      Course deliverables: 3 Programming Projects and 3 Homework Assignments, each
      worth 4%; 8 Lab Exercises, each worth 1%; 5 midterms, each worth 10%; final
      exam, worth 18%. (approx) Assignments are primarily auto-graded, with some
      manual evaluation of handwritten proofs.
      Approximate Schedule:
      Week 1 – Analysis and Correctness of Linear Algorithms
      Week 2 – Linear Sorting and Linked lists, Stacks, and Queues
      Week 3 – Analysis and Correctness of Recursive Algorithms
      Week 4 – Recursive Sorting and Intro to Trees
      Week 5 – Tree Traversals, Binary Search Trees
      Week 6 – Balanced Binary Search Trees
      Week 7 – B-Trees
      Week 8 – Hashing
      Week 9 – Priority Queues, Heaps, Heapsort
      Week 10 – Disjoint Sets, Graph Definitions
      Week 11 – Graph Implementation and Traversal
      Week 12 – Minimum Spanning Trees, Shortest Path
      Instructional Details:
      1. Lectures are Socratic and constructivist—a running dialogue between
      instructor and students. Daily activities include: puzzles, deliberate
      mistakes, and stories, just to keep things hopping.
      2. We employ undergraduate course staff in a ratio of approximately 1:35
      students. Their role is to help students overcome barriers to mastery of the
      material, primarily on the coding projects.
      3. We deliberately craft staff-student interactions so that they are (almost)
      never one-to-one. My office hours are set up to encourage peer learning. We
      have “solution parties” and “exam visitations” wherein groups of students
      receive feedback on their work.
      4. We rely on educational technologies to facilitate student communication
      (piazza, for example), and feedback, and to collect data that helps us identify
      students who might be in trouble.
      5. It is impossible for us to know all of the students, but we think it’s important
      that they believe they COULD come talk to us if they needed to do so. We
      work hard to anticipate student needs and address them via course
      infrastructure. Doing this kind of filtering assures that we actually can be
      available for those in unusual circumstances.`
    },
    {
      courseName: "cpsc-221",
      pageType: "Introduction",
      courseInformation: `CPSC 221
      Basic Algorithms and Data Structures
      Introduction
      Textbook References:
      Koffman: Chapters P and 1
      CPSC 221 Introduction Page 2
      Learning goal(s)
      • Get an overview of the course
      • Learning Goals for each chapter will be given
      – Please pay attention to them.
      – They’re part of the lecture slides.
      – They make great exam checklists.
      CPSC 221 Introduction Page 3
      Course Personnel
      • Your Instructor:
      – Hassan Khosravi
      – ICCS 241
      – hkhosrav@cs.ubc.ca
      – Office hours
      • Right after lectures in class
      • Mondays 3-4, and Tuesdays 11-12 in ICCS 241
      • By appointment; see my webpage for my work calendar.
      • The other instructor
      – Alan Hu
      • Teaching Assistants and office hours: See website
      CPSC 221 Introduction Page 4
      Course information
      • The course home page
      http://www.ugrad.cs.ubc.ca/~cs221
      • Read it carefully
      – Course info
      – Notes (Pre-lecture notes, Post-lecture notes)
      • Texts: Epp Discrete Mathematics, Koffman C++
      – Exams are open book
      CPSC 221 Introduction Page 5
      Connect
      • Quizzes and your grades are hosted on Connect
      – http://elearning.ubc.ca/connect/
      • To access Connect you need a Campus-Wide
      Login (CWL). To register for a CWL account,
      visit www.cwl.ubc.ca.
      CPSC 221 Introduction Page 6
      Piazza
      • The course bulletin (Piazza)
      • https://piazza.com/configure-classes/winterterm22014/cpsc221
      • Enrollment code is…
      • The Piazza bulletin board is required reading. It will be used
      for important material that may not be mentioned in class.
      • Problems with the CPSC 221 course contents (e.g. lecture, lab,
      textbook, assignments) can be posted on Piazza.
      • Students are encouraged to ask questions, and to respond to
      other students' questions.
      • Selected individuals that actively respond to postings on
      Piazza, may receive a bonus mark of up to 2%.
      • Only send email for personal issues. (ALWAYs add CPSC 221
      in the title of your email)
      CPSC 221 Introduction Page 7
      Exams
      • Midterm: Wed. February 25, 6:00pm – 8:30pm
      – Location to be announced
      – Potentially two stage exam
      – If you have a conflict let me know ASAP and no later
      than Thursday, January 8
      • Final: To be determined by UBC.
      – Examination period begins: Tuesday, April 14 2015
      – Examination period ends: Wednesday, April 29 2015
      CPSC 221 Introduction Page 8
      Labs
      • (roughly) every week. Please attend assigned lab
      section for now.
      • Labs start Monday, January 12.
      – In room x350
      • We’ll try to have the labs posted by Thursday
      evenings.
      CPSC 221 Introduction Page 9
      Assignments
      • No late work; may be flexible with advance notice
      • Programming projects (~3) typically due 9PM on
      due date
      – All programming projects graded on Linux/g++
      • Written homework typically due 5PM on due
      date
      – Assignment box 35
      CPSC 221 Introduction Page 10
      PeerWise
      • Students use PeerWise to create and to explain their
      understanding of course related assessment
      questions, and to answer and discuss questions
      created by their peers.
      – https://peerwise.cs.auckland.ac.nz/docs/
      • Making multiple-choice tests requires a much
      higher level of understanding than simply taking
      them!
      CPSC 221 Introduction Page 11
      PeerWise
      • Encouraging students to "own their own learning" in a
      sharing and supportive environment. Posing good,
      thoughtful questions with supporting explanations is an
      excellent application of critical thinking skills.
      • Answering questions and giving comments offers
      opportunities to improve one's communication and selfreflection abilities.
      CPSC 221 Introduction Page 12
      Clickers
      • We will be using clickers in the section of the course, so
      please register your i>Clicker using UBC Connect
      – A typical pattern used in my lectures is: students vote
      on their own first; for more difficult questions students
      are encouraged to participate in group-discussions
      – You can participate in answering questions
      anonymously
      – Responses are projected, in real-time, so you can
      compare yourself with your peers
      – Reveals misconceptions and I can pace the
      presentation and explanations to fit the audience
      CPSC 221 Introduction Page 13
      Planned (tentative) assessments
      • Labs 10%
      • Theory Assns/Quizzes 15%
      • Programming Projects 15%
      • Midterm Exam 20%
      • Final Exam 35%
      • PeerWise 5%
      • Piazza 2% (Bonus)
      • To pass the course, you must obtain at least a 50%
      overall course mark (as per the above formula) and
      you must pass the final exam.
      •
      CPSC 221 Introduction Page 14
      Prerequisites
      • One of CPSC 210, EECE 210
      • One of CPSC 121, MATH 220
      • If you don’t have the prerequisites, you will be
      dropped from the course. Check with a CS
      Advisor if you have a problem
      • The instructor cannot change your lab section or
      add you to the course.
      – Check with CS front office
      CPSC 221 Introduction Page 15
      Academic Concession
      • Students registered with Access & Diversity
      must:
      – inform the instructor within seven (7) days of adding
      the course or the start of term (whichever is later)
      (email me please)
      – provide a copy of the letter from A&D granting
      accommodations (by email)
      – submit an accommodation form at least two weeks
      prior to each exam for which accommodation is
      requested
      CPSC 221 Introduction Page 16
      Collaboration
      • Read the collaboration policy on the website.
      You have LOTS of freedom to collaborate! Use it
      to learn and have fun while doing it!
      • Don’t violate the collaboration policy. There’s no
      point in doing so.
      • Plagiarism occurs when you submit someone
      else's work as if it were your own.
      CPSC 221 Introduction Page 17
      Using your computer during class…
      Multitasking on your computer during CPSC 221
      lectures:
      A. Helps me to learn the course materials because I’m
      not bored and has no effect on other people
      B. Helps me to learn better, but distracts the people
      around me
      C. Makes me learn worse, but has no effect on other
      people
      D. Makes me learn worse, and distracts the people
      around me
      CPSC 221 Introduction Page 18
      Multi-tasking on laptop lowers your
      grade (Canadian study)
      • “all the participants used laptops to take notes during a
      lecture on meteorology. But half were also asked to
      complete a series of unrelated tasks on their computers
      when they felt they could spare some time. Those tasks
      — which included online searches for information —
      were meant to mimic what distracted students might do
      during class.”
      • The students who were asked to multitask averaged 11%
      lower on the exam (difference between A- and B-)
      • Their neighbors also did significantly worse than the
      average.
      CPSC 221 Introduction Page 19
      Some class rules
      • Show up on time for class.
      • Be respectful. Don’t disrupt the class for your
      fellow students. Examples of behavior to be
      avoided during class:
      – Using a cell phone in class
      – Surfing the Web on your laptop, iPad, smartphone, etc.
      in class
      – Talking loudly with your friends when I’m lecturing.
      • Whisper please, and only talk briefly.
      CPSC 221 Introduction Page 20
      Acknowledgement
      • Thanks to Steve Wolfman for the content of most
      of these slides with additional material from Alan
      Hu, Ed Knorr, Will Evans, and Kim Voll
      CPSC 221 Introduction Page 21
      Observation
      • Most programs manipulate data
      – programs process, store, display, gather
      – data can be numbers, images, sound (information!)
      • Each program must decide how to store and
      manipulate data
      • Choice influences program at every level
      – execution speed
      – memory requirements
      – maintenance (debugging, extending, etc.)
      How you structure your data matters to every program you create!
      CPSC 221 Introduction Page 22
      What this course is about
      • Some Classic Algorithms
      • Some Classic Data Structures
      • Analysis Tools and Techniques for the Above
      – what’s good or bad
      – what trade-offs are being made
      • Some Basics of Parallelism and Concurrency
      CPSC 221 Introduction Page 23
      What’s an algorithm?
      • Algorithm (Typical Definition)
      – A high-level, language-independent description of a
      step-by-step process for solving a problem
      • Algorithm (Street Definition)
      – A smarter way to solve the problem!
      CPSC 221 Introduction Page 24
      What’s a Data Structure?
      • Data Structure (Typical Definition)
      – A way to store data to facilitate its manipulation/
      access
      
      • Data Structure (Street Definition)
      – How to organize your data to get the results you want,
      along with the supporting algorithms
      CPSC 221 Introduction Page 25
      Why study classic examples?
      • They are useful!
      – Like pre-packaged intelligence in a can!
      – Don’t have to work hard to come up with your own solution
      • They let you abstract away details!
      – These are “power tools” for programming.
      – Let you focus on solving bigger problems, ignore details.
      • You learn general solution ideas!
      – This will help you solve new, unexpected problems.
      – Great masters in any field study the classic examples from their
      field.
      CPSC 221 Introduction Page 26
      Goals of the Course
      • Become familiar with some of the fundamental
      data structures and algorithms in computer science
      • Improve ability to solve problems abstractly
      – data structures and algorithms are the building blocks
      • Improve ability to analyze your algorithms
      – prove correctness
      – gauge, compare, and improve time and space
      complexity
      • Become modestly skilled with C++ and UNIX,
      but this is largely on your own!
      CPSC 221 Introduction Page 27
      Fun Example
      • We’ll look at a simple example, to see how
       different choices affect performance:
      – Fibonacci Numbers
      • Does performance matter in practice?
      – Massive load on web applications: Anyone use Cuil
      instead of Google?
      – Efficient algorithms allow lower power, longer battery
      life, cheaper processors, etc.
      CPSC 221 Introduction Page 28
      The Fibonacci Numbers
      • The Fibonacci numbers are the numbers in the sequence:
       1, 1, 2, 3, 5, 8, 13, 21, 34, 55, …
      • The first two numbers are 1, and then each succeeding
      number can be generated by adding together the previous
      two numbers in the sequence. This leads to the following
      recursive definition:
      – Common example in CS
      – Brief appearance in
       Da Vinci Code
      – Some applications, pops up in unusual places (art,
       nature, algorithm analysis)
      int fib(int n){
       if (n==1)
       return 1;
       else if(n==2)
       return 1;
       else
       return fib(n-1) + fib(n-2);
      }
      CPSC 221 Introduction Page 29
      fib(4)
      fib(3) fib(2)
      fib(2) fib(1)
      1 1
      2 1
      int fib(int n){
      if (n==1)
       return 1;
       else if (n==2)
       return 1;
       else
       return fib(n-1)
       + fib(n-2);
      }
      à
      à
      à
      à
      n=4
      int fib(int n){
      if (n==1)
       return 1;
       else if (n==2)
       return 1;
       else
       return fib(n-1)
       + fib(n-2);
      }
      à
      à
      à
      à
      n=3
      int fib(int n){
      if (n==1)
       return 1;
       else if (n==2)
       return 1;
       else
       return fib(n-1)
       + fib(n-2);
      }
      à
      à
      à
      n=2
      int fib(int n){
      if (n==1)
       return 1;
       else if (n==2)
       return 1;
       else
       return fib(n-1)
       + fib(n-2);
      }
      à
      à
      n=1
      int fib(int n){
      if (n==1)
       return 1;
       else if (n==2)
       return 1;
       else
       return fib(n-1)
       + fib(n-2);
      }
      à
      à
      à
      n=2
      CPSC 221 Introduction Page 30
      Recursion and efficiency
      • How many times is fib(3) calculated?
      • Does it really need to be calculated multiple
      times?
      fib(6)
      fib(5)
      fib(4) fib(3)
      fib(3) fib(2)
      fib(2) fib(1)
      fib(2) fib(1)
      fib(4)
      fib(3) fib(2)
      fib(2) fib(1)
      CPSC 221 Introduction Page 31
      Memoization – After computing a solution, store it in a table before
      returning. (Leave a “memo” to yourself.)
      – At start of the function, check if you’ve solved this
      case before. If so, return the already calculated
      solution.
      fib(6)
      fib(5)
      fib(4)
      fib(3)
      fib(2) fib(1)
      fib(2)
      fib(3)
      fib(4)
      n Fn
      6
      5
      4
      3
      2
      1
      1
      1
      2
      3
      5
      8
      fib(6)
      fib(5)
      fib(4) fib(3)
      fib(3) fib(2)
      fib(2) fib(1)
      fib(2) fib(1)
      fib(4)
      fib(3) fib(2)
      fib(2) fib(1)
      CPSC 221 Introduction Page 32
      Dynamic programming
      • In dynamic programming you solve the problem
      "bottom up”, so you don’t risk blowing stack space.
      unsigned long long dp_fib(int n) {
       unsigned long long answer;
       unsigned long long answerminus1 = 1;
       unsigned long long answerminus2 = 1;
       for (int i = 3; i <= n; i++) {
       answer = answerminus1 + answerminus2;
       answerminus2 = answerminus1;
       answerminus1 = answer;
       }
       return answer;
      }
      See course website for source code
      CPSC 221 Introduction Page 33
      Matrix Multiplication
      • Consider this matrix equation:
      • Hey! That’s one iteration of Fibonacci!
      ⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡ +
      =⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡
      ⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡
      x
      x y
      y
      x
      1 0
      1 1
      CPSC 221 Introduction Page 34
      Matrix Fibonacci
      • Repeated matrix multiplication computes
      Fibonacci numbers…
      !
      ⎥
      ⎦
      ⎤
      ⎢
      ⎣
      ⎡
      =⎥
      ⎦
      ⎤
      ⎢
      ⎣
      ⎡
      ⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡
      ⎥
      ⎦
      ⎤
      ⎢
      ⎣
      ⎡
      =⎥
      ⎦
      ⎤
      ⎢
      ⎣
      ⎡
      ⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡
      ⎥
      ⎦
      ⎤
      ⎢
      ⎣
      ⎡
      =⎥
      ⎦
      ⎤
      ⎢
      ⎣
      ⎡
      ⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡
      3
      5
      2
      3
      1 0
      1 1
      2
      3
      1
      2
      1 0
      1 1
      1
      2
      1
      1
      1 0
      1 1
      CPSC 221 Introduction Page 35
      Repeated Multiplication is
      Exponentiation!
      ⎥
      ⎦
      ⎤
      ⎢
      ⎣
      ⎡
      =⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡
      −
      ⎥
      ⎦
      ⎤ ⎢
      ⎣
      ⎡
      =
      −
      1
      1
      ( 1)
      ( )
      1 0
      1 1
      n 2 T
      fib n
      fib n
      T
      CPSC 221 Introduction Page 36
      Multiplication is associative.
      • Associative Law: (xy)z = x(yz)
      • Therefore,
      …
      …
      …
      …
      …
      =
      = ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅
      = ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅
      = ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅
      = ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅
      (( ) ( )) ( )
      ( ) ( ) ( ) ( )
      (((( ) ) ) )
      x x x x x x x x
      x x x x x x x x
      x x x x x x x x
      x x x x x x x x x
      n
      CPSC 221 Introduction Page 37
      Matrix Multiplication Is Associative
      ...
      ...
      ...
      ...
      4 4 4 4 4
      2 2 2 2 2
      =
      = ⋅ ⋅ ⋅ ⋅ ⋅
      = ⋅ ⋅ ⋅ ⋅ ⋅
      = ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅ ⋅
      T T T T T
      T T T T T
      T T T T T T T T T T T T n
      CPSC 221 Introduction Page 38
      Exponentiation by Iterative Squaring
      • Imagine you have an old calculator and need to
      compute 232.
      • You could type 2 x 2 x 2 x 2 x ….
      • Or, you could type:
      – 2 x 2 = and get 22.
      – 22 x 22 = and get 24.
      – 24 x 24 = and get 28.
      – 28 x 28 = and get 216.
      – 216 x 216 = and get 232.
      CPSC 221 Introduction Page 39
      Iterative squaring works for matrices, too!
      !
      64 32 32
      32 16 16
      16 8 8
      8 4 4
      4 2 2
      2
      T T T
      T T T
      T T T
      T T T
      T T T
      T T T
      = ⋅
      = ⋅
      = ⋅
      = ⋅
      = ⋅
      = ⋅
      CPSC 221 Introduction Page 40
      Iterative Squaring Example
      64 32 4
      100 64 36
      T T T
      T T T
      = ⋅ ⋅
      = ⋅
      Do only 8 multiplications instead of 99!
      CPSC 221 Introduction Page 41
      Comparison of different fib
      implementations (in seconds)
      n=10 n=50 n=10,000 n=200,000 100,000,000
      Plain, recursive 3 *10-5 71
      Memoized
      recursive
      5 *10-6 7 *10-6 3 *10-4 Out of
      memory
      Dynamic
      programming
      3 *10-6 5 *10-6 4 *10-5 7 * 10-4 0.4
      Matrix
      Multiplication
      5 *10-6 10-6 9 * 10-5 10-5 2* 10-4`
    },
    {
      courseName: "cpsc-320",
      pageType: "Introduction",
      courseInformation: `<body>
      <!-- page header -->
      <div>
      <h2>CPSC 320: Intermediate Algorithm Design and Analysis</h2>
      </div>
      <!-- nav header -->
      <div class="flex-container">
        <div><a href="./index.html" style="color:#33AAAA; text-decoration:none;"><b>Home</b></a></div>
        <div><a href="./coursework.html" style="color:#3C3C3C; text-decoration:none;">Course Work</a></div>
      </div>
      <!-- page content -->
      <div>
      <p>
      Welcome to the Summer 2023 Term 2 edition of CPSC 320! Anne and the entire instructional team is looking forward to getting to know you and supporting you in your learning this summer.
      </p><p>
      Following are the key resources you need for the course. 
      Click on the Course Work link above to learn what work
      you will do in this course and how your learning will be evaluated.
      <!-- <a href="./coursework.html">Course Work</a>
      link above learn what work
      you will do in this course and how your learning will be evaluated.
        -->
      
      </p><hr>
      <h3>Course Staff</h3>
      
      <b> Instructor: </b>
         Anne Condon <br>
         Office: ICICS/CS X551 <br>
      Email: condon at cs.ubc.ca  <br>
      Office hours: MWF after class
      
      <!-- <br>
         <img width=120px src="https://www.cs.ubc.ca/~condon/anne-2018.png">
         <br>
      -->
         
      <br>
      <br>
      
      <b>Course Coordinator:</b>
         Maya Vasdani, cpsc320-admin@cs.ubc.ca  <br>
         Please email Maya regarding any administrative/logistical issues.
      
      <br>
      <br>
      
      <b> TAs: </b> Information on TAs and their office hours is listed on the course Piazza page, accessible via Canvas.
      
      <hr>
      <h3>Learning Goals</h3>
      <p>
      
      In this class you'll learn about useful computational problem-solving
      techniques, and gain experience both in applying these techniques to
      solve computational problems efficiently and in recognizing when they
      are not useful.  More specifically, you'll learn how to:
            </p><ul>
        <li>Come up with clear problem formulations, given poorly
            specified computational tasks.
        </li><li>Recognize which algorithm design technique, such as
            brute force, divide and conquer, greedy,
            or dynamic programming is used in a given algorithm.</li>
        <li>Evaluate which design
            technique and/or data structures can be used to solve a given
            problem efficiently.</li>
        <li>Implement a solution to a problem using a specified
            algorithm design technique.</li>
        <li>Select and apply mathematical techniques, such as
                  asymptotic notation or recurrence relations, to obtain
                  good upper and lower bounds on the running time of
                  algorithms.</li>
              <li>Recognize similarities between a new problem and problems
                  that you have already encountered, and judge whether or
                  not these similarities can be leveraged to design
                  an algorithm for the new problem.</li>
              <li> Apply the theory of NP-completeness to provide evidence
                   that certain problems may not have algorithms that are
                   efficient on all inputs.
            </li></ul>
      
      <hr>
      <h3>Textbook and Materials</h3>
      <p>
      The required textbook is <i>Algorithm Design</i> by Jon Kleinberg and Éva  Tardos (2005). There will be weekly readings from the textbook, see the Course Work page for details.
      </p>
      <!--<p>
      <img src="./images/algodesign.png" />
      </p> -->
      <p>
      Here some other materials that can be useful in your learning:
      </p><ul>
      <li>
      <a href="https://courses.csail.mit.edu/6.042/spring18/mcs.pdf">Mathematics for Computer Science</a>
      by Eric Lehman, Tom Leighton and Albert Meyer. Free PDF.
      <br>This has great background material on proofs, induction, graphs, etc.
      </li><li>
      Cormen, Thomas H., Leiserson, Charles E., Rivest, Ronald L., and Stein, Clifford,
      Introduction to Algorithms, 3rd edition, 2009, ISBN 0-262-03384-4.
      </li>
      <li>
      <a href="http://www.cs.princeton.edu/~wayne/kleinberg-tardos/">
      Kevin Wayne's slides</a> based on the Kleinberg-Tardos book.
      </li>
      <li>
      <a href="http://jeffe.cs.illinois.edu/teaching/algorithms/">
      Algorithms, etc.</a> by Jeff Erickson.
      </li>
      <li>
      Michael Garey and David Johnson, Computers and Intractability: a Guide
      to the theory of NP-Completeness, W.H. Freeman &amp; Company, 1979, ISBN
      0-7167-1044-5.
      </li>
      </ul>
      <p></p>
      <!--<li>
      Sanjoy Dasgupta, Christos Papadimitriou and Umesh Vazirani, Algorithms, McGraw Hill Book Company, 2008, ISBN 0-07-352340-2.
      </li>
      
      <p>
      The CS Reading Room has most of our references on reserve so that you can browse them in the room (but not checkout). You can find the Reading Room on the second floor of the older wing of ICCS, next to its central atrium. 
      </p>
      -->
      <hr>
      <h3>Online Tools </h3>
      
      <p>
        <a href="https://www.cs.ubc.ca/students/undergrad/services/computing-accounts/">
          <b>CS Ugrad account</b></a>:
        </p><ul>
          <li>
            If you do not already have an
        account, it should be set up soon after you register for the
        class. Associated with this account is your CSID and
        CS ugrad email address. See 
        <a href="https://www.cs.ubc.ca/getacct/"> here</a> for more information.
        <b> Make sure to activate your account right away, or you won't be
        able to use essential online tools.</b>  Note that your CSID
        (typically letter-number-letter-number-letter, sometimes
        letter-number-letter-number) is provided to you when you activate
        your CS account; it is different from your CWL.
      </li></ul>
      <p>
        <a href="https://canvas.ubc.ca/courses/118754">
      <b>Canvas</b></a>: 
      You should able to access Canvas within 36 hours of registering for
      the class. Integrated within canvas you'll find:
      </p><ul>
      <li> <b>Piazza</b>:
      <!--  <a href="http://www.piazza.com/ubc.ca/winterterm12019/cpsc320/">
      <b>Piazza</b></a>: Please register yourself. You will need an access
      code which will be announced in initial classes and can also be found
      on the Canvas home page. -->
      Use Piazza for communication with peers and course staff
      about class work, exams, etc. However, please exercise discretion that
      you do not directly discuss solutions to homeworks that are yet to be
      submitted. If you have any matter requiring private discussion, you
      can post privately on Piazza or e-mail the instructor or course coordinator.
      <br>
      <br>
      </li><li> <b>Gradescope</b>: Use Gradescope to upload your work on worksheets
        during lectures, to upload assignments, and to
      take quizzes and the final exam.  Marks will also be on GradeScope.
      You can access Gradescope from our Canvas course in the left navigation menu.
      <br><br>  
      </li><li> Assignments, quizzes, worksheets and
        tutorials, and solutions to these.
      </li></ul>
      <p></p>
      <p>
      </p><hr>
      <h3>Resources</h3>
      <p>
      </p><ul>
      <li>
      <a href="https://www.cs.ubc.ca/students/undergrad/resources/equity-inclusion-wellness">
      <b>Health &amp; Wellness</b></a>. We hope that all students
      will find this classroom to be a supportive environment, and the
      course staff are here to help you do your best. Resources are available to help you in
      times of illness or distress, please check them out and talk with
      your instructors if we can be helpful.
      <br>
      <br>
      </li><li>
      
      <a href="https://academicintegrity.ubc.ca/">
      <b>University Policies on Academic Integrity</b></a>.  All UBC students
      are expected to behave as honest and responsible members of an
      academic community. Make sure you understand UBC's academic integrity
      principles!  Breach of UBC's policies with respect to academic honesty
      can result in serious disciplinary action.
      </li></ul>
      
      
      
      </div>
      
      
      
      
      </body>`
    },
    {
      courseName: "cpsc-320",
      pageType: "Syllabus",
      courseInformation: `<body>
      <!-- page header -->
      <div>
      <h2>CPSC 320: Intermediate Algorithm Design and Analysis</h2>
      </div>
      <!-- nav header -->
      <div class="flex-container">
        <div><a href="./index.html" style="color:#3C3C3C; text-decoration:none;">Home</a></div>
        <div><a href="./coursework.html" style="color:#33AAAA; text-decoration:none;"><b>Course Work</b></a></div>
      </div>
      
      <div>
      
      <p>
      Here's roughly what to expect in terms of course schedule, assignment expectations, assessment and so on. Materials other than the textbook will be made available on Canvas. Worksheets for lectures will also be handed out in class.
      </p>
      
      <hr>
      <h3>Lectures and Tutorials</h3>
      
        <p>
      See 
      <a href="https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&amp;tname=subj-course&amp;dept=CPSC&amp;course=320">here</a> for times of lectures and tutorials.
      Tutorials will start on Wed July 5 (the first week of class) and run twice per week except for the last week, when there will be no tutorial on Fri Aug 11.
      We expect that you will go to the tutorial for which you are registered. If for some reason that is not possible on occasion, you may attend a different
      tutorial on that week, but make sure to let your regular tutorial TAs
      know.
      </p>
      <p>
        Because you'll learn most by interacting
        with your peers as well as course staff, lectures and tutorials will
        involve group and individual problem-solving work.
        Hard copies of lecture worksheets will be provided in class, and both
        worksheets and tutorial problems will be provided on canvas in advance
        of the session where you will need them, and solutions plus annotated
        worksheets will be posted later.
      </p>
      <p>
      Here is a tentative course schedule, along with recommended reading.
        
      </p><center>
      <table width="80%" cellspacing="5">
      <!-- add some vertical space -->
      
      <!-- header -->
      
      <tbody><tr>
      <th class="headingstyle">Week</th>
      <th class="headingstyle">Topic</th>
      <th class="headingstyle">Reading</th>
      </tr>
      
      <!-- WEEK ONE -->
        <tr class="oddstyle" valign="top">
      <td> 1 </td>
      <td>
      Algorithm Design Steps
      </td>
      <td>
      Chapter 1, pages 1-12
      <br>
      Chapter 2
      </td>
      </tr>
      
        <!-- WEEK TWO -->
        <tr class="evenstyle" valign="top">
      <td>2 </td>
      
      <td>
      Asymptotic Notation
      <br>
        Graph Algorithms
      </td>
      <td>
        Chapter 2
        <br>
        Chapter 3.1, 3.2, 3.4-3.6
      </td>
      </tr>
      
      <!-- WEEK THREE -->
        <tr class="oddstyle" valign="top">
      <td>3 </td>
      
      <td>
        Greedy Algorithms
        <br>
        Divide and Conquer Algorithms, Recurrences
       </td>
      <td>
        Chapter 4.1, 4.4-4.7
        <br>
         Chapter 5.1
      </td>
      </tr>
      
      <!-- WEEK FOUR -->
      <tr class="evenstyle" valign="top">
      <td>4 </td>
      
      <td>
      Divide and Conquer Algorithms, Recurrences, Continued
      <br>
      Dynamic Programming
      </td>
      <td>
        Chapter 5.2, 5.3, 5.5
        <br>
        Chapter 6.1
      </td>
      </tr>
      
      <!-- WEEK FIVE -->
        <tr class="oddstyle" valign="top">
      <td>5 </td>
      
      <td>
        Dynamic Programming Continued
        <br>
        Reductions
      </td>
      <td>
        Chapter 6.2, 6.4, 6.5
        <br>
        Chapter 8.1-8.3
      </td>
      </tr>
      
      <!-- WEEK SIX -->
      <tr class="evenstyle" valign="top">
      <td>6 </td>
      
      <td>
      NP-Completeness
      </td>
      <td>
        Chapter 8.4, 8.5, 8.6, 8.8
      </td>
      </tr>
      
      </tbody></table>
      </center>
      
      <hr>
      <h3>Assignments</h3>
      
      
      
      
      <p>
      Assignments will be available on Wednesdays, including the first week but not the last week, and due at 10pm Vancouver time on Wednesday a week later.  So there will be five assignments in total. You can work in groups of size up to three.  Each group should make a single submission per assignment.
      </p><ul>
      <li>
      The group must spend at least 15 minutes working on each problem independently before collaborating with others.
      </li><li>
      Collaboration with others is limited to discussion and
      brainstorming. No record of any sort (e.g., written or electronic
      material) may be exchanged or leave the brainstorming session.
      </li><li>
      After collaborating, each student must take a half-hour break from the
      problem. Treat electronic resources you consult like written resources (set them aside for a
      half-hour and then do not consult them while writing your solution).
      </li><li>
      Each group must write their own independent solution, using their own words.
      </li><li>
      Acknowledge all collaborators or sources of assistance in your submission,
      although you need only name CPSC 320 course staff, handouts, and
      textbooks if you quote or adapt directly from them. 
      You should record the names of any other people you collaborate
      with.
      </li></ul>
      <p>
        We will make the .tex version of the assignment available. You
        should prepare your solutions using latex. We will accept
        solutions prepared using other good formatting systems, as long as
        they are clearly legibile. Solutions that are handwritten or
        difficult to read will receive a grade of zero.
      </p><p>
      Submit your assignment <b>in pdf format</b> on Gradescope by 10pm Vancouver time. You can submit early and resubmit as often as you want up to the deadline. 
      <b>We strongly encourage you to submit something at least a day in advance of
      the first assignment</b>, to make sure that things are working properly.
      </p><p>
        After uploading to Gradescope, link each question with all the pages of your pdf containing your solution.
        </p><p>
      Also, add names of group members (as recorded on Canvas) on GradeScope <i>after</i> one student has made the initial submission. See the image below for adding group members to a submission: <br>
      <a href="https://www.students.cs.ubc.ca/~cs-320/2019W1/images/gsgroup.png"><img src="https://www.students.cs.ubc.ca/~cs-320/2019W1/images/gsgroup_th.png"></a>
      <br>
      As a secondary failsafe, please clearly write the names of all group
      members on the first page of each submission, and
      if you want an extra double-check on your identity, include your student number.
      </p>
      <p>
      Late homework submissions will be accepted up to <b> noon on Thursdays<b>,
      at a penalty of 15% of the assignment's full value. To avoid the
      deduction, have your documents imaged and ready to upload ahead of
      time, to avoid any last-minute stress and glitches. Remember that you can always
      upload a draft ahead of time, and resubmit later.
      </b></b></p><b><b>
      <p>
      To manage TA workload, we will select some, but not all, parts of the assignment for grading.
      </p>
      
      <hr>
      <h3>Quizzes</h3>
      Instead of midterms, there will be a weekly quiz during lecture, <b>at 11:00am on
      Fridays</b>, except for the first and last weeks. There will be four quizzes in total. You will have 50 minutes to do the quiz. 
      <p>
      The quiz will test topics relating to reading, lectures, assignment
      and tutorials from the previous Friday up to Wednesday of that week,
      including reading for that week. Material from earlier weeks, or
      course prerequisites, may also appear on a quiz.
      <!--
      <p>
      You will take the quiz online on Gradescope.
      You can to refer to course materials and resources, including the textbook, the lecture slides, worksheets, and Piazza. You can use calculators or even implement algorithms to check your answers. You are not permitted to discuss with other people, use web searches or look for solutions or guidance anywhere else. You can ask clarification questions to the instructors via a private post in Piazza, or using private chat in Zoom.
      -->
      </p><p>
      Do not write a quiz if you feel ill. If you are unable to write a quiz,
      inform the course coordinator (cpsc320-admin@cs.ubc.ca) immediately.
      </p>
      <p>
      Your lowest mark in a quiz will be dropped.
      If you miss two quizes, your mark for one will be dropped
      and your mark for the second will be
      calculated based on your performance on the final.
      You will not be able to make up marks for additional quizzes should
      you miss more than two.
      </p>
      <hr>
      <h3>Final</h3>
      We will post the date of the final exam here once we know it.
      <!--The final exam will be on Thursday August 19 from 8:30-11:00am Vancouver time.-->
      The material covered in the final exam will be cumulative over the
      whole course.
      If you are unable to write the final examination due to
      illness, you must apply to your home faculty
      for <a href="http://www.calendar.ubc.ca/vancouver/index.cfm?tree=3,48,0,0">Academic Concession</a> as soon as possible.
      
      <hr>
      <h3>Evaluation</h3>
      <p>
        <b> Five assignments</b>  × 5% = 25% 
      <br>
      <b>Three quizzes</b> × 10% = 30% (there will be four quizzes, but lowest grade will be dropped)
      <br>
      <b>One final exam</b> × 45% 
      
      </p><p>
      In accordance
      with <a href="http://www.universitycounsel.ubc.ca/policies/policy65.pdf">UBC
      Policy #65</a>, students who are scheduled to write
      examinations or attend tutorials on the holy days of their religion must notify their
      instructors two weeks in advance of the religious holiday they wish to
      observe. Instructors will provide opportunity for students to make up
      the missed work without penalty.
      <br><br>
      <b>To pass the course</b>, you must obtain at least 50% on the weighted
      average of the quizzes and final exam. Students who fail to meet this
      requirement will receive at most a mark of 45% for the course,
      regardless of the results of the formula above.
      </p>
      
      <hr>
      <h3>Regrading Requests</h3>
      
      We do our best to grade all submissions fairly and
      consistently. Because graders occasionally make mistakes, we welcome
      regrade requests that help us correct such mistakes and ensure
      fairness. You have one week from the time that the grades are posted
      to submit a regrade request on Gradescope.  Please be respectful and
      help us ensure that time spent on regrades is productive by following
      these guidelines.
      <ul>
      <li>
      Prior to making a regrade request, make sure you understand the
      solution to the problem, and read any comments provided on Gradescope
      or Piazza about how the problem was graded.  If you don't understand
      what's missing from your answer, come see one of us during office
      hours before submitting a regrade request.
      </li>
      <li>
      Explain clearly and specifically why you believe your mark is inappropriate,
      referring to your solution, and the rubric.  Good examples:
      "I lost a point for not initializing my table entries, but I
      initialize them in line 6."  Or, "My solution is quite different from the
      one in the sample solution, but I'm confident that my approach also
      works for the following reason..."
      </li><li>
      Don't submit a request because you think the rubric
      is unfair, or if you disagree with a judgment call of the grader.
      A bad example that disputes the rubric is:
      "I lost a mark for not justifying my answer, but I didn't
      think I needed to justify my answer, and I don't feel I should be
      penalized." 
      A bad example that disputes a judgment is:
      "I should get 'minor errors (-0.5 points)' instead of 'significant errors (-2 points)'."
      An example that is not sufficiently
      specific is: "My friend gave basically the same answer and got a higher grade."
      </li>
      </ul>
      <p>
      The person who graded the question will review your request, possibly
      with input from an instructor or other TAs.  The decision of your TA
      or instructor is final. It may either increase or decrease your mark.
      Submitting several poorly-explained regrade requests may result in a
      penalty.
      
      
      
      </p></b></b></div></body>`
    },
    {
      courseName: "cpsc-313",
      pageType: "Introduction",
      courseInformation: `<body class="with-left-side course-menu-expanded with-right-side padless-content pages home primary-nav-expanded context-course_101879 responsive_student_grades_page webkit chrome no-touch show ally-tooltips-enabled">

      <noscript>
        <div role="alert" class="ic-flash-static ic-flash-error">
          <div class="ic-flash__icon" aria-hidden="true">
            <i class="icon-warning"></i>
          </div>
          <h1>You need to have JavaScript enabled in order to access this site.</h1>
        </div>
      </noscript>
      
      
      
      
      <div id="flash_message_holder"></div>
      <div id="flash_screenreader_holder" role="alert" aria-live="assertive" aria-relevant="additions" class="screenreader-only" aria-atomic="true"></div>
      
      <div id="application" class="ic-app">
        
      
      
      
      <header id="mobile-header" class="no-print">
        <button type="button" class="Button Button--icon-action-rev Button--large mobile-header-hamburger">
          <i class="icon-solid icon-hamburger"></i>
          <span id="mobileHeaderInboxUnreadBadge" class="menu-item__badge" style="min-width: 0px; top: 12px; height: 12px; right: 6px;"></span>
          <span class="screenreader-only">Dashboard</span>
        </button>
        <div class="mobile-header-space"></div>
          <a class="mobile-header-title expandable" href="https://canvas.ubc.ca/courses/101879" role="button" aria-controls="mobileContextNavContainer">
            <div>CPSC 313 101/102 2022W1</div>
          </a>
          <div class="mobile-header-space"></div>
          <button type="button" class="Button Button--icon-action-rev Button--large mobile-header-arrow" aria-label="Navigation Menu">
            <i class="icon-arrow-open-down" id="mobileHeaderArrowIcon"></i>
          </button>
      </header>
      <nav id="mobileContextNavContainer"></nav>
      
      <header id="header" class="ic-app-header no-print ">
        <a href="#content" id="skip_navigation_link">Skip To Content</a>
        <div role="region" class="ic-app-header__main-navigation" aria-label="Global Navigation">
            <div class="ic-app-header__logomark-container">
              <a href="https://canvas.ubc.ca/" class="ic-app-header__logomark">
                <span class="screenreader-only">Dashboard</span>
              </a>
            </div>
          <ul id="menu" class="ic-app-header__menu-list">
              <li class="menu-item ic-app-header__menu-list-item ">
                <a id="global_nav_profile_link" role="button" href="/profile/settings" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container">
                    <div aria-hidden="true" class="fs-exclude ic-avatar ">
                      <img src="https://canvas.ubc.ca/images/messages/avatar-50.png" alt="Kevin Luo">
                    </div>
                    <span class="menu-item__badge"></span>
                  </div>
                  <div class="menu-item__text">
                    Account
                  </div>
                </a>
              </li>
            <li class="ic-app-header__menu-list-item ">
              <a id="global_nav_dashboard_link" href="https://canvas.ubc.ca/" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--dashboard" version="1.1" x="0" y="0" viewBox="0 0 280 200" enable-background="new 0 0 280 200" xml:space="preserve"><path d="M273.09,180.75H197.47V164.47h62.62A122.16,122.16,0,1,0,17.85,142a124,124,0,0,0,2,22.51H90.18v16.29H6.89l-1.5-6.22A138.51,138.51,0,0,1,1.57,142C1.57,65.64,63.67,3.53,140,3.53S278.43,65.64,278.43,142a137.67,137.67,0,0,1-3.84,32.57ZM66.49,87.63,50.24,71.38,61.75,59.86,78,76.12Zm147,0L202,76.12l16.25-16.25,11.51,11.51ZM131.85,53.82v-23h16.29v23Zm15.63,142.3a31.71,31.71,0,0,1-28-16.81c-6.4-12.08-15.73-72.29-17.54-84.25a8.15,8.15,0,0,1,13.58-7.2c8.88,8.21,53.48,49.72,59.88,61.81a31.61,31.61,0,0,1-27.9,46.45ZM121.81,116.2c4.17,24.56,9.23,50.21,12,55.49A15.35,15.35,0,1,0,161,157.3C158.18,152,139.79,133.44,121.81,116.2Z"></path></svg>
      
                </div>
                <div class="menu-item__text">
                  Dashboard
                </div>
              </a>
            </li>
              <li class="menu-item ic-app-header__menu-list-item ic-app-header__menu-list-item--active">
                <a id="global_nav_courses_link" role="button" href="/courses" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 280 259" enable-background="new 0 0 280 259" xml:space="preserve"><path d="M73.31,198c-11.93,0-22.22,8-24,18.73a26.67,26.67,0,0,0-.3,3.63v.3a22,22,0,0,0,5.44,14.65,22.47,22.47,0,0,0,17.22,8H200V228.19h-134V213.08H200V198Zm21-105.74h90.64V62H94.3ZM79.19,107.34V46.92H200v60.42Zm7.55,30.21V122.45H192.49v15.11ZM71.65,16.71A22.72,22.72,0,0,0,49,39.36V190.88a41.12,41.12,0,0,1,24.32-8h157V16.71ZM33.88,39.36A37.78,37.78,0,0,1,71.65,1.6H245.36V198H215.15v45.32h22.66V258.4H71.65a37.85,37.85,0,0,1-37.76-37.76Z"></path></svg>
      
                  </div>
                  <div class="menu-item__text">
                    Courses
                  </div>
                </a>
              </li>
              <li class="menu-item ic-app-header__menu-list-item ">
                <a id="global_nav_groups_link" role="button" href="/groups" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--groups" viewBox="0 0 200 135"><path d="M134.5 129.4c0-1.1 0-19.8-6.2-31.1-4.5-8.5-16.4-12.4-35-19.2-1.7-.6-3.4-1.1-5.1-1.7v-8.5c5.6-5.1 8.5-12.4 8.5-20.3V29.4C96.6 13 83.6 0 67.2 0S37.9 13 37.9 29.4v19.2c0 7.3 3.4 14.7 8.5 20.3v8.5c-1.7.6-3.4 1.1-5.1 1.7-18.6 6.2-30.5 10.7-35 19.2C0 109.6 0 128.8 0 129.4c0 3.4 2.3 5.6 5.6 5.6h123.7c3.5 0 5.7-2.3 5.2-5.6zm-123.2-5.7c.6-5.6 1.7-14.7 3.4-19.8C17 98.8 30 94.3 43.5 89.8c2.8-1.1 5.6-2.3 9-3.4 2.3-.6 4-2.8 4-5.1V66.7c0-1.7-.6-3.4-1.7-4.5-4-3.4-6.2-8.5-6.2-13.6V29.4c0-10.2 7.9-18.1 18.1-18.1s18.1 7.9 18.1 18.1v19.2c0 5.1-2.3 10.2-6.2 13.6-1.1 1.1-1.7 2.8-1.7 4.5v14.7c0 2.3 1.7 4.5 4 5.1 2.8 1.1 6.2 2.3 9 3.4 13.6 5.1 26.6 9.6 28.8 14.1 2.8 5.1 4 13.6 4.5 19.8H11.3zM196 79.1c-2.8-6.2-11.3-9.6-22.6-13.6l-1.7-.6v-3.4c4.5-4 6.8-9.6 6.8-15.8V35c0-12.4-9.6-22-22-22s-22 10.2-22 22v10.7c0 6.2 2.3 11.9 6.8 15.8V65l-1.7.6c-7.3 2.8-13 4.5-16.9 7.3-1.7 1.1-2.3 2.8-2.3 5.1.6 1.7 1.7 3.4 3.4 4.5 7.9 4 12.4 7.3 14.1 10.7 2.3 4.5 4 10.2 5.1 18.1.6 2.3 2.8 4.5 5.6 4.5h45.8c3.4 0 5.6-2.8 5.6-5.1 0-3.9 0-24.3-4-31.6zm-42.9 25.4c-1.1-6.8-2.8-12.4-5.1-16.9-1.7-4-5.1-6.8-9.6-10.2 1.7-1.1 3.4-1.7 5.1-2.3l5.6-2.3c1.7-.6 3.4-2.8 3.4-5.1v-9.6c0-1.7-.6-3.4-2.3-4.5-2.8-1.7-4.5-5.1-4.5-8.5V34.5c0-6.2 4.5-10.7 10.7-10.7s10.7 5.1 10.7 10.7v10.7c0 3.4-1.7 6.2-4.5 8.5-1.1 1.1-2.3 2.8-2.3 4.5v10.2c0 2.3 1.1 4.5 3.4 5.1l5.6 2.3c6.8 2.3 15.3 5.6 16.4 7.9 1.7 2.8 2.8 12.4 2.8 20.9h-35.4z"></path></svg>
      
                  </div>
                  <div class="menu-item__text">
                    Groups
                  </div>
                </a>
              </li>
            <li class="menu-item ic-app-header__menu-list-item ">
              <a id="global_nav_calendar_link" href="/calendar" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--calendar" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M197.07,213.38h16.31V197.07H197.07Zm-16.31,16.31V180.76h48.92v48.92Zm-48.92-16.31h16.31V197.07H131.85Zm-16.31,16.31V180.76h48.92v48.92ZM66.62,213.38H82.93V197.07H66.62ZM50.32,229.68V180.76H99.24v48.92Zm146.75-81.53h16.31V131.85H197.07Zm-16.31,16.31V115.54h48.92v48.92Zm-48.92-16.31h16.31V131.85H131.85Zm-16.31,16.31V115.54h48.92v48.92ZM66.62,148.15H82.93V131.85H66.62ZM50.32,164.46V115.54H99.24v48.92ZM34,262.29H246V82.93H34ZM246,66.62V42.16A8.17,8.17,0,0,0,237.84,34H213.38v8.15a8.15,8.15,0,1,1-16.31,0V34H82.93v8.15a8.15,8.15,0,0,1-16.31,0V34H42.16A8.17,8.17,0,0,0,34,42.16V66.62Zm-8.15-48.92a24.49,24.49,0,0,1,24.46,24.46V278.6H17.71V42.16A24.49,24.49,0,0,1,42.16,17.71H66.62V9.55a8.15,8.15,0,0,1,16.31,0v8.15H197.07V9.55a8.15,8.15,0,1,1,16.31,0v8.15Z"></path></svg>
      
                </div>
                <div class="menu-item__text">
                  Calendar
                </div>
              </a>
            </li>
            <li class="menu-item ic-app-header__menu-list-item ">
              <a id="global_nav_conversations_link" href="/conversations" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container">
                  <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--inbox" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M91.72,120.75h96.56V104.65H91.72Zm0,48.28h80.47V152.94H91.72Zm0-96.56h80.47V56.37H91.72Zm160.94,34.88H228.52V10.78h-177v96.56H27.34A24.17,24.17,0,0,0,3.2,131.48V244.14a24.17,24.17,0,0,0,24.14,24.14H252.66a24.17,24.17,0,0,0,24.14-24.14V131.48A24.17,24.17,0,0,0,252.66,107.34Zm0,16.09a8.06,8.06,0,0,1,8,8v51.77l-32.19,19.31V123.44ZM67.58,203.91v-177H212.42v177ZM27.34,123.44H51.48v79.13L19.29,183.26V131.48A8.06,8.06,0,0,1,27.34,123.44ZM252.66,252.19H27.34a8.06,8.06,0,0,1-8-8V202l30,18H230.75l30-18v42.12A8.06,8.06,0,0,1,252.66,252.19Z"></path></svg>
      </span>
                  <span class="menu-item__badge"><span class="ergWt_bGBk">33 unread messages.</span><span aria-hidden="true">33</span></span>
                </div>
                <div class="menu-item__text">
                  Inbox
                </div>
              </a>
            </li>
              <li class="menu-item ic-app-header__menu-list-item">
                <a id="global_nav_history_link" role="button" href="#" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container" aria-hidden="true">
                    <svg viewBox="0 0 1920 1920" class="ic-icon-svg menu-item__icon svg-icon-history" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M960 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059M960 1920C430.645 1920 0 1489.355 0 960S430.645 0 960 0s960 430.645 960 960-430.645 960-960 960m417.905-575.955L903.552 988.28V395.34h112.941v536.47l429.177 321.77-67.765 90.465z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
                  </div>
                  <div class="menu-item__text">
                    History
                  </div>
                </a>
              </li>
              
      
            <li class="ic-app-header__menu-list-item">
              <a id="global_nav_help_link" role="button" class="ic-app-header__menu-list-link" data-track-category="help system" data-track-label="help button" href="http://help.instructure.com/">
                <div class="menu-item-icon-container" role="presentation">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg menu-item__icon svg-icon-help" version="1.1" x="0" y="0" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve" fill="currentColor"><path d="M100,127.88A11.15,11.15,0,1,0,111.16,139,11.16,11.16,0,0,0,100,127.88Zm8.82-88.08a33.19,33.19,0,0,1,23.5,23.5,33.54,33.54,0,0,1-24,41.23,3.4,3.4,0,0,0-2.74,3.15v9.06H94.42v-9.06a14.57,14.57,0,0,1,11.13-14,22.43,22.43,0,0,0,13.66-10.27,22.73,22.73,0,0,0,2.31-17.37A21.92,21.92,0,0,0,106,50.59a22.67,22.67,0,0,0-19.68,3.88,22.18,22.18,0,0,0-8.65,17.64H66.54a33.25,33.25,0,0,1,13-26.47A33.72,33.72,0,0,1,108.82,39.8ZM100,5.2A94.8,94.8,0,1,0,194.8,100,94.91,94.91,0,0,0,100,5.2m0,178.45A83.65,83.65,0,1,1,183.65,100,83.73,83.73,0,0,1,100,183.65" transform="translate(-5.2 -5.2)"></path></svg>
      
                  <span class="menu-item__badge"></span>
                </div>
                <div class="menu-item__text">
                  Help
                </div>
      </a>      </li>
          </ul>
        </div>
        <div class="ic-app-header__secondary-navigation">
          <ul class="ic-app-header__menu-list">
            <li class="menu-item ic-app-header__menu-list-item">
              <a id="primaryNavToggle" role="button" href="#" class="ic-app-header__menu-list-link ic-app-header__menu-list-link--nav-toggle" aria-label="Minimize global navigation" title="Minimize global navigation">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--navtoggle" version="1.1" x="0" y="0" width="40" height="32" viewBox="0 0 40 32" xml:space="preserve">
        <path d="M39.5,30.28V2.48H37.18v27.8Zm-4.93-13.9L22.17,4,20.53,5.61l9.61,9.61H.5v2.31H30.14l-9.61,9.61,1.64,1.64Z"></path>
      </svg>
      
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div id="global_nav_tray_container"></div>
        <div id="global_nav_tour"></div>
      </header>
      
      
        <div id="instructure_ajax_error_box">
          <div style="text-align: right; background-color: #fff;"><a href="#" class="close_instructure_ajax_error_box_link">Close</a></div>
          <iframe id="instructure_ajax_error_result" src="about:blank" style="border: 0;" title="Error"></iframe>
        </div>
      
        <div id="wrapper" class="ic-Layout-wrapper">
            <div class="ic-app-nav-toggle-and-crumbs no-print">
                <button type="button" id="courseMenuToggle" class="Button Button--link ic-app-course-nav-toggle" aria-live="polite" aria-label="Hide Courses Navigation Menu">
                  <i class="icon-hamburger" aria-hidden="true"></i>
                </button>
      
              <div class="ic-app-crumbs">
                  <nav id="breadcrumbs" role="navigation" aria-label="breadcrumbs"><ul><li class="home"><a href="/"><span class="ellipsible"><i class="icon-home" title="My Dashboard">
        <span class="screenreader-only">My Dashboard</span>
      </i>
      </span></a></li><li id="crumb_course_101879"><a href="https://canvas.ubc.ca/courses/101879"><span class="ellipsible">CPSC 313 101/102 2022W1</span></a></li></ul></nav>
              </div>
      
      
              <div class="right-of-crumbs">
              </div>
      
            </div>
          <div id="main" class="ic-Layout-columns">
              <div class="ic-Layout-watermark"></div>
              <div id="left-side" class="ic-app-course-menu ic-sticky-on list-view" style="display: block">
                <div id="sticky-container" class="ic-sticky-frame">
                    <span id="section-tabs-header-subtitle" class="ellipsis">2022W1</span>
                  <nav role="navigation" aria-label="Courses Navigation Menu"><ul id="section-tabs"><li class="section"><a href="/courses/101879" aria-current="page" class="home active" tabindex="0">Home</a></li><li class="section"><a href="/courses/101879/external_tools/201?display=borderless" class="context_external_tool_201" target="_blank" tabindex="0">Piazza</a></li><li class="section"><a href="/courses/101879/assignments/syllabus" class="syllabus" tabindex="0">Syllabus</a></li><li class="section"><a href="/courses/101879/modules" class="modules" tabindex="0">Modules</a></li><li class="section"><a href="/courses/101879/external_tools/35829" class="context_external_tool_35829" tabindex="0">y86 Simulator</a></li><li class="section"><a href="/courses/101879/external_tools/4732" class="context_external_tool_4732" tabindex="0">Course Evaluation</a></li><li class="section"><a href="/courses/101879/external_tools/15408" class="context_external_tool_15408" tabindex="0">Zoom</a></li><li class="section"><a href="/courses/101879/external_tools/42332" class="context_external_tool_42332" tabindex="0">Media Gallery</a></li><li class="section"><a href="/courses/101879/external_tools/42334" class="context_external_tool_42334" tabindex="0">My Media</a></li></ul></nav>
                </div>
              </div>
            <div id="not_right_side" class="ic-app-main-content">
              <div id="content-wrapper" class="ic-Layout-contentWrapper">
                
                <div id="content" class="ic-Layout-contentMain" role="main">
                  
      
        <h1 class="screenreader-only">CPSC 313 101/102 2022W1 Computer Hardware and Operating Systems</h1>
      
      
      
        <div id="announcements_on_home_page"></div>
      <div id="course_home_content">
          <div id="wiki_page_show">
      <div class="header-bar-outer-container">
        <div class="sticky-toolbar" data-sticky="">
          <div class="header-bar page-toolbar as-course-home">
            <div class="page-toolbar-start">
              <div class="page-heading">
                
                <h2 class="course-title" title="CPSC 313 101/102 2022W1 Computer Hardware and Operating Systems">CPSC 313 101/102 2022W1 Computer Hardware and Operating Systems</h2>
                
              </div>
              
              </div>
              <div class="page-toolbar-end">
                
                <div class="buttons">
                  
                    
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div class="page-changed-alert" role="alert" aria-atomic="true" aria-live="polite"></div>
        </div>
      
      <div id="direct-share-mount-point"></div>
      
      
      <div class="show-content user_content clearfix enhanced">
        <h1 class="page-title">General Course Information</h1>
        
        
          <h3>December 8th review session: <a class="inline_disabled external" title="Link" href="https://ubc.zoom.us/rec/share/soWfB6iiXNyDi5-EiTrVG9z93I5TRcYwqLPXBw8HUPk-xSMPa5FO6wTol9mSjsjx.5JlPySAaaZ8zH8o9" target="_blank" rel="noreferrer noopener"><span>zoom meeting recording </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a>(passcode: T0G3+bFJ)</h3>
      <h3>Description</h3>
      <p>This course is an introduction to computer architecture and operating systems; it provides a view of how a processor works and how the operating system provides familiar abstractions such as processes and files.</p>
      <h3>Course Pre-requisites</h3>
      <ul>
      <li>CPSC 213 and CPSC 221</li>
      </ul>
      <h3>Course Staff</h3>
      <p><strong>Course Coordinator</strong>: Riley Knowles (pronouns she/her)</p>
      <p><strong>Contact</strong>: cpsc313-admin@cs.ubc.ca</p>
      <h4><strong>Instructors</strong></h4>
      <ul>
      <li>Norm Hutchinson (pronouns he/him)
      <ul>
      <li>Office Hours: Tuesdays 16:00 to 17:00 and Fridays 9:00 to 10:00 in ICCS 319</li>
      </ul>
      </li>
      <li>Patrice Belleville (pronouns he/him)
      <ul>Office Hours: Tuesdays 13:30 to 14:30 on zoom; Thursdays 10:30 to 11:30 and Fridays 16:00 to 17:00 at DLC Table 2.</ul>
      </li>
      </ul>
      <p><strong>Teaching Assistants</strong></p>
      <ul>
      <li>Adam Mitha</li>
      <li>David Bromley</li>
      <li>Emily Chu</li>
      <li>Isabella Yang</li>
      <li>Kaining Zheng</li>
      <li>Kaiyuan Yang</li>
      <li>Maxwell Yang</li>
      <li>Runze Wang</li>
      <li>Suri Feng</li>
      <li>Taehee Choi</li>
      <li>Wen Jiang</li>
      <li>Xutong Jiang</li>
      </ul>
      <h3>Important Links</h3>
      <ul>
      <li><a class="inline_disabled external" href="https://ca.prairielearn.org/pl" target="_blank" rel="noreferrer noopener"><span>PrairieLearn</span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> (Please enroll in CPSC 313 2022w1 All Sections)</li>
      <li><a class="inline_disabled" href="https://github.students.cs.ubc.ca/cpsc313/CPSC313-2022w1" target="_blank">github repo</a> in which you will find code examples from the pre-class videos and class. This is now accessible only via VPN or the UBCsecure network. (If you do not have access to github.students.cs.ubc.ca, please generate an account using <a href="https://www.cs.ubc.ca/getacct">https://www.cs.ubc.ca/getacct</a>.)</li>
      </ul>
      <h3>Overview</h3>
      <p>Modern computer systems are like onions, in that they consist of layers of hardware and software that interact to present a particular machine abstraction. As programmers we typically only see the outer layer of this "onion", however there are times when we need to peel back the layers of our system onion to be able to properly understand and modify the behaviour of programs and systems we are developing.</p>
      <p>Consequently, this course focuses on the computer hardware, operating system, and other pieces of software that build these layers of abstraction that hide the hardware details and system complexities from programs and programmers. Although this resulting layering and abstraction simplifies programming, and allows us to reason about and build complex systems, there are times when it is important to strip away the layers to better understand the system's behaviour and improve its performance. In particular, the relationships and interactions between the various layers of abstraction can have profound effects on services and capabilities like performance, security, and correctness that span multiple layers.</p>
      <h3>Topics</h3>
      <p>Building on the material from CPSC 213, the course develops models of the various layers that comprise a computer system. In particular the course will explore topics concerning:</p>
      <ul>
      <li>CPU implementations and instruction execution</li>
      <li>Caches and memory systems</li>
      <li>Disks and file systems</li>
      <li>Virtual memory</li>
      <li>Operating systems and virtual machines</li>
      </ul>
      <h3>Course Learning Outcomes</h3>
      <p>Upon completion of this course students are expected to be able to:</p>
      <ul>
      <li>Explain the benefits of, and challenges associated with, instruction-level parallelism and its implementation.</li>
      <li>Describe at least one high-level architecture for a pipelined CPU. Correctly analyze examples of the timing of instructions passing through this architecture to identify dependencies and hazards.</li>
      <li>Explain why different types of memory need to be used in modern computers, and how the constraints on physical size, capacity and speed affect the performance of computer code. Correctly analyze examples of memory access patterns and locality to compute the steps required to retrieve the information and/or to update the memory state, while maintaining optimal performance for future accesses.</li>
      <li>Explain the issues that must be considered while designing file systems and some common solutions for these issues. Given a file system specification, correctly analyze examples of typical file system operations to identify how to retrieve necessary information or update the file system state.</li>
      <li>Explain how a modern operating system can share a computer’s processing and memory resources among multiple untrusted and competing processes. Correctly analyze examples of virtual memory accesses in individual processes to (1) compute the steps required to retrieve the information and/or update the memory state, and to (2) identify when hardware can perform an operation autonomously and when the operating system has to be invoked.</li>
      <li>Optimize C code in order to make it run faster by refining its locality and use of processor and memory&nbsp; resources. Optimize at least one version of Assembly code to make it run faster by reducing the number of hazards in typical pipelined CPUs.</li>
      </ul>
      <h3>Textbook</h3>
      <p>Computer Systems: A programmer's Perspective (3rd edition), by Randal Bryant and David O'Hallaron.</p>
      <p>See<span>&nbsp;</span>the <a title="Textbook and References" href="https://canvas.ubc.ca/courses/101879/pages/textbook-and-references" data-api-endpoint="https://canvas.ubc.ca/api/v1/courses/101879/pages/textbook-and-references" data-api-returntype="Page">Textbook and References page</a><span>&nbsp;</span>for more information.</p>
      <h3>Course Grading</h3>
      <table style="border-collapse: collapse; width: 75.7907%;" border="1">
      <tbody>
      <tr>
      <td style="width: 12.8467%;"><strong>Weekly Activities</strong></td>
      <td style="width: 80.0885%;"></td>
      <td style="width: 6.89765%;"></td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"></td>
      <td style="width: 80.0885%;">
      <p>Class Participation: Pre-class exercises, in-class exercises, tutorial</p>
      </td>
      <td style="width: 6.89765%;">
      <p>10 %</p>
      </td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"></td>
      <td style="width: 80.0885%;">Bi-weekly (roughly) quizzes: best 5 of 6</td>
      <td style="width: 6.89765%;">10%</td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"></td>
      <td style="width: 80.0885%;">Homework (Labs):<br><span style="font-size: 13.3333px;">There are 10 labs, each of which is worth between 2% and 4% of your final grade.<br>Many of the labs must be completed independently; some can be completed with a partner (maximum of 2 students per group); others will have parts that must be completed independently and parts that can be completed with a partner.</span></td>
      <td style="width: 6.89765%;">30%</td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"><strong>Exams</strong></td>
      <td style="width: 80.0885%;"></td>
      <td style="width: 6.89765%;"></td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"></td>
      <td style="width: 80.0885%;">Midterm 1 (October 12 @ 5:30 PM)</td>
      <td style="width: 6.89765%;">10%</td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"></td>
      <td style="width: 80.0885%;">Midterm 2 (November 16 @ 5:30 PM)</td>
      <td style="width: 6.89765%;">10%</td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"></td>
      <td style="width: 80.0885%;">Final (Date and Time TBA)</td>
      <td style="width: 6.89765%;">30%</td>
      </tr>
      <tr>
      <td style="width: 12.8467%;"><strong>Total</strong></td>
      <td style="width: 80.0885%;"></td>
      <td style="width: 6.89765%;">100%</td>
      </tr>
      </tbody>
      </table>
      <p><em>Students may be awarded in-term academic concessions for missed in-term work&nbsp; based on the University's policies on this matter. Typical concessions would be to shift the weight of individual assessments to other assessments in the same category (e.g., the weight of one assignment could be shifted to other assignments), or to the final exam.</em></p>
      <p><em>Students must pass a threshold grade (typically 50%) in the average of the Labs and in the average of the exams to pass the course.</em></p>
      <p>Additional details about the course's policies and administrative procedures can be found in the<span>&nbsp;</span><a title="Administration and Policies" href="https://canvas.ubc.ca/courses/101879/modules/674222" data-api-endpoint="https://canvas.ubc.ca/api/v1/courses/101879/modules/674222" data-api-returntype="Module">Administration and Policies</a><span>&nbsp;</span>module on Canvas.</p>
      <h3><span>Covid Safety in the Classroom&nbsp; </span></h3>
      <p><strong>W<span>e will follow UBC and </span></strong><span><strong>BC Public Health Officer orders. </strong></span></p>
      <p><span>For our in-person meetings in this class, it is important that all of us feel as comfortable as possible engaging in class activities while sharing an indoor space.&nbsp; For the purposes of this order, the term “masks” refers to medical and non-medical masks that cover our noses and mouths.&nbsp; Masks are a primary tool to make it harder for Covid-19 to find a new host.&nbsp; While it is not required to wear a medical or non-medical mask for the duration of our class meetings, we nevertheless recommend it for your own protection, and for the safety and comfort of everyone else in the class, every time you're sitting anywhere close to another student.<br></span></p>
      <p><strong><span>Vaccination</span></strong><span>: If you have not yet had a chance to get vaccinated against Covid-19, vaccines are available to you, free, and on campus (you can find information at http://www.vch.ca/covid-19/covid-19-vaccine). The higher the rate of vaccination in our community overall, the lower the chance of spreading this virus.&nbsp; You are an important part of the UBC community. <strong>Please arrange to get vaccinated if you have not already done so.</strong> </span></p>
      <p><strong><span>Seating in class:</span></strong><span> To reduce the risk of Covid transmission, please sit in a consistent area of the classroom each day.&nbsp; Each class has an active, in-class component and you’ll work with the people around you. Historically, students report that this works best when teams are consistent throughout the term, so sitting in the same area will ensure that you work with the same people. Additionally, this will minimize your number of contacts.&nbsp; </span></p>
      <h3><span>Your personal health</span></h3>
      <p><strong>If you’re sick, it’s important that you stay home – no matter what you think you may be sick with (e.g., cold, flu, other)</strong><strong>. </strong></p>
      <ul>
      <li><span>A daily self-health assessment is required before attending campus. Every day, before coming to class, complete the self-assessment for Covid symptoms using this tool:<a href="https://bc.thrive.health/covid19/en" class="external" target="_blank" rel="noreferrer noopener"><span> </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a><a href="https://bc.thrive.health/covid19/en" class="external" target="_blank" rel="noreferrer noopener"><span>https://bc.thrive.health/covid19/</span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a><a href="https://bc.thrive.health/covid19/en" class="external" target="_blank" rel="noreferrer noopener"><span>en</span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> </span></li>
      <li><span>Do not come to class if you have Covid symptoms, have recently tested positive for Covid, or are required to quarantine or self-isolate. You can check this website to find out if you should self-isolate or self-monitor: <a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19/self-isolation#Who" class="external" target="_blank" rel="noreferrer noopener"><span>http://www.bccdc.ca/health-info/diseases-conditions/covid-19/self-isolation#Who</span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a>. </span></li>
      <li><span>Your precautions will help reduce risk and keep everyone safer. In this class, the marking scheme is intended to provide flexibility so that you can prioritize your health and still be able to succeed:</span></li>
      <li>You can earn 100% of the pre-class and in-class participation marks remotely.</li>
      <li>If you are sick, please reach out to the course coordinator for instructions about earning tutorial points.</li>
      <li>We will automatically drop your lowest quiz score.</li>
      </ul>
      <p><strong><span>If you do miss class because of illness: </span></strong></p>
      <ul>
      <li>Talk to a classmate to figure out what you have missed; try to work through the in-class exercises on&nbsp; your own.</li>
      <li>Use Piazza for help.</li>
      <li>Come to office hours.</li>
      <li>See the marking scheme for reassurance about what flexibility you have.</li>
      <li>If you are concerned that you will need to miss a particular key activity due to illness, contact the course coordinator.</li>
      </ul>
      <p><strong><span>If you are sick on a midterm exam day,</span></strong><span> please email the course-coordinator and instructors as soon as you are confident you should not come to the scheduled exam.&nbsp; We would strongly prefer that you contact us to make an alternate arrangement than for you to come to the exam while you are ill.&nbsp; If you do show up for an exam and you are clearly ill, you will not be able to write the exam and we will make alternate arrangements with you.&nbsp; It is much better for you to email ahead of time and not attend.&nbsp; Remember to include your full name and student number in your message. </span></p>
      <p><strong><span>If you are sick on a final exam day</span></strong><span><strong>, do not attend the exam.</strong> You must apply for deferred standing (an academic concession) through Science Advising no later than 48 hours after the missed final exam. Students who are granted deferred standing write the final exam at a later date. Learn more and find the application online:<a href="https://science.ubc.ca/students/advising/concession"> </a><a href="https://science.ubc.ca/students/advising/concession">https://science.ubc.ca/students/advising/concession</a>&nbsp;&nbsp;&nbsp;&nbsp; </span></p>
      <p><span>For additional information about academic concessions, see the UBC policy here:<a href="http://www.calendar.ubc.ca/vancouver/index.cfm?tree=3,329,0,0"> </a><a href="http://www.calendar.ubc.ca/vancouver/index.cfm?tree=3,329,0,0">http://www.calendar.ubc.ca/vancouver/index.cfm?tree=3,329,0,0</a>&nbsp; </span></p>
      <h3><span>Instructor health</span></h3>
      <p><strong><span>If either of the instructors are sick: </span></strong>We w<span>ill do our best to stay well, but if either of us is ill, develops Covid symptoms, or tests positive for Covid, then we will not come to class.&nbsp; If that happens, here’s what you can expect:</span></p>
      <ul>
      <li>We will substitute for each other.</li>
      <li>If we are both sick, but able to do so, one of us will lecture remotely using Zoom.</li>
      <li>If neither of us is available to lecture, we will make the appropriate recording from last year’s offering available and will staff lecture with TAs to take questions and help with the exercises.</li>
      </ul>
      <h3 class="page-title">Student Wellness</h3>
      <p>College is a stressful time under the best of circumstances; during a pandemic is far from the best of circumstances. If you are feeling overwhelmed, unable to work, or simply that you are not yourself and are not functioning, please ask for help. None of the course staff are health care professionals, but we will do our best to direct you to available resources. You may find the resources at <a href="https://students.ubc.ca/health" target="_blank">https://students.ubc.ca/health</a> helpful.</p>
      <h3 class="page-title">Statement of Academic Integrity</h3>
      <p>The academic enterprise is founded on honesty, civility, and integrity. As members of this enterprise, all students are expected to know, understand, and follow the codes of conduct regarding academic integrity. At the most basic level, this means submitting only original work done by you and acknowledging all sources of information or ideas and attributing them to others as required. This also means you should not cheat, copy, or mislead others about what is your work. Violations of academic integrity (i.e, misconduct) lead to the breakdown of the academic enterprise, and therefore serious consequences arise and harsh sanctions are imposed. For example, incidences of plagiarism or cheating may result in a mark of zero on the assignment or exam and more serious consequences may apply if the matter is referred to the President’s Advisory Committee on Student Discipline. Careful records are kept in order to monitor and prevent recurrences.</p>
      <h3>Statement of Values and Policies</h3>
      <p>UBC provides resources to support student learning and to maintain healthy lifestyles but recognizes that sometimes crises arise and so there are additional resources to access including those for survivors of sexual violence. UBC values respect for the person and ideas of all members of the academic community. Harassment and discrimination are not tolerated nor is suppression of academic freedom. UBC provides appropriate accommodation for students with disabilities and for religious, spiritual and cultural observances. UBC values academic honesty and students are expected to acknowledge the ideas generated by others and to uphold the highest academic standards in all of their actions. Details of the policies and how to access support are available&nbsp;<a class="external" href="http://senate.ubc.ca/policies-resources-support-student-success" target="_blank"><span>here</span></a>.</p>
        
      </div>
      </div>
      </div>
      <div id="wizard_box"></div>
      
                </div>
              </div>
              <div id="right-side-wrapper" class="ic-app-main-content__secondary">
                <aside id="right-side" role="complementary">
                      <div id="course_show_secondary">
      
      
        <div class="course-options">
          
      
          <a class="btn button-sidebar-wide" href="/courses/101879?view=feed">
            <i class="icon-stats"></i>
            View Course Stream
          </a>
      
      
      
          </div>
      
      
      
      
          
          
      
          
        </div>
      
                
      <div class="events_list
        coming_up">
        <div class="h2 shared-space">
          <h2>Coming Up</h2>
            <a class="event-list-view-calendar icon-calendar-day standalone-icon" href="https://canvas.ubc.ca/calendar?include_contexts=course_101879">
              View Calendar
            </a>
        </div>
        <ul class="right-side-list events">
          <li>
            <small>
                Nothing for the next week
            </small>
          </li>
        </ul>
      </div>
      
      
                </aside>
              </div>
            </div>
          </div>
        </div>
      
      
      
          <div style="display:none;"><!-- Everything inside of this should always stay hidden -->
              <div id="page_view_id">28b108c4-76ae-481e-88c1-6df1d498d2e8</div>
          </div>
        <div id="aria_alerts" class="hide-text affix" role="alert" aria-live="assertive"></div>
        <div id="StudentTray__Container"></div>
        
      
        <script>
          Object.assign(
            ENV,
            {}
          )
        </script>
      
      <link rel="preload" href="https://du11hjcvx0uqb.cloudfront.net/dist/webpack-production/inst_fs_service_worker-c-8d9c6558fc.js" as="script" type="text/javascript"><script>
      //<![CDATA[
      (window.bundles || (window.bundles = [])).push('inst_fs_service_worker');
      //]]>
      </script>
        <script>
      //<![CDATA[
      
            ;["https://instructure-uploads-yul.s3.ca-central-1.amazonaws.com/account_112240000000000001/attachments/3239540/ubc.js"].forEach(function(src) {
              var s = document.createElement('script'); s.src = src; s.async = false;
              document.head.appendChild(s)
            });
      //]]>
      </script>
      
      </div> <!-- #application -->
      
      
      <div id="nav-tray-portal" style="position: relative; z-index: 99;"></div><div class="tinymce-a11y-checker-container"></div><div role="log" aria-live="assertive" aria-relevant="additions" class="ally-helper-hidden-accessible"></div></body>`
    },
    {
      courseName: "cpsc-313",
      pageType: "Syllabus",
      courseInformation: `<body class="with-left-side course-menu-expanded with-right-side syllabus primary-nav-expanded context-course_101879 responsive_student_grades_page webkit chrome no-touch ally-tooltips-enabled">

      <noscript>
        <div role="alert" class="ic-flash-static ic-flash-error">
          <div class="ic-flash__icon" aria-hidden="true">
            <i class="icon-warning"></i>
          </div>
          <h1>You need to have JavaScript enabled in order to access this site.</h1>
        </div>
      </noscript>
      
      
      
      
      <div id="flash_message_holder"></div>
      <div id="flash_screenreader_holder" role="alert" aria-live="assertive" aria-relevant="additions" class="screenreader-only" aria-atomic="true"></div>
      
      <div id="application" class="ic-app">
        
      
      
      
      <header id="mobile-header" class="no-print">
        <button type="button" class="Button Button--icon-action-rev Button--large mobile-header-hamburger">
          <i class="icon-solid icon-hamburger"></i>
          <span id="mobileHeaderInboxUnreadBadge" class="menu-item__badge" style="min-width: 0px; top: 12px; height: 12px; right: 6px;"></span>
          <span class="screenreader-only">Dashboard</span>
        </button>
        <div class="mobile-header-space"></div>
          <a class="mobile-header-title expandable" href="/courses/101879" role="button" aria-controls="mobileContextNavContainer">
            <div>CPSC 313 101/102 2022W1</div>
              <div>Syllabus</div>
          </a>
          <div class="mobile-header-space"></div>
          <button type="button" class="Button Button--icon-action-rev Button--large mobile-header-arrow" aria-label="Navigation Menu">
            <i class="icon-arrow-open-down" id="mobileHeaderArrowIcon"></i>
          </button>
      </header>
      <nav id="mobileContextNavContainer"></nav>
      
      <header id="header" class="ic-app-header no-print ">
        <a href="#content" id="skip_navigation_link">Skip To Content</a>
        <div role="region" class="ic-app-header__main-navigation" aria-label="Global Navigation">
            <div class="ic-app-header__logomark-container">
              <a href="https://canvas.ubc.ca/" class="ic-app-header__logomark">
                <span class="screenreader-only">Dashboard</span>
              </a>
            </div>
          <ul id="menu" class="ic-app-header__menu-list">
              <li class="menu-item ic-app-header__menu-list-item ">
                <a id="global_nav_profile_link" role="button" href="/profile/settings" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container">
                    <div aria-hidden="true" class="fs-exclude ic-avatar ">
                      <img src="https://canvas.ubc.ca/images/messages/avatar-50.png" alt="Kevin Luo">
                    </div>
                    <span class="menu-item__badge"></span>
                  </div>
                  <div class="menu-item__text">
                    Account
                  </div>
                </a>
              </li>
            <li class="ic-app-header__menu-list-item ">
              <a id="global_nav_dashboard_link" href="https://canvas.ubc.ca/" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--dashboard" version="1.1" x="0" y="0" viewBox="0 0 280 200" enable-background="new 0 0 280 200" xml:space="preserve"><path d="M273.09,180.75H197.47V164.47h62.62A122.16,122.16,0,1,0,17.85,142a124,124,0,0,0,2,22.51H90.18v16.29H6.89l-1.5-6.22A138.51,138.51,0,0,1,1.57,142C1.57,65.64,63.67,3.53,140,3.53S278.43,65.64,278.43,142a137.67,137.67,0,0,1-3.84,32.57ZM66.49,87.63,50.24,71.38,61.75,59.86,78,76.12Zm147,0L202,76.12l16.25-16.25,11.51,11.51ZM131.85,53.82v-23h16.29v23Zm15.63,142.3a31.71,31.71,0,0,1-28-16.81c-6.4-12.08-15.73-72.29-17.54-84.25a8.15,8.15,0,0,1,13.58-7.2c8.88,8.21,53.48,49.72,59.88,61.81a31.61,31.61,0,0,1-27.9,46.45ZM121.81,116.2c4.17,24.56,9.23,50.21,12,55.49A15.35,15.35,0,1,0,161,157.3C158.18,152,139.79,133.44,121.81,116.2Z"></path></svg>
      
                </div>
                <div class="menu-item__text">
                  Dashboard
                </div>
              </a>
            </li>
              <li class="menu-item ic-app-header__menu-list-item ic-app-header__menu-list-item--active">
                <a id="global_nav_courses_link" role="button" href="/courses" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 280 259" enable-background="new 0 0 280 259" xml:space="preserve"><path d="M73.31,198c-11.93,0-22.22,8-24,18.73a26.67,26.67,0,0,0-.3,3.63v.3a22,22,0,0,0,5.44,14.65,22.47,22.47,0,0,0,17.22,8H200V228.19h-134V213.08H200V198Zm21-105.74h90.64V62H94.3ZM79.19,107.34V46.92H200v60.42Zm7.55,30.21V122.45H192.49v15.11ZM71.65,16.71A22.72,22.72,0,0,0,49,39.36V190.88a41.12,41.12,0,0,1,24.32-8h157V16.71ZM33.88,39.36A37.78,37.78,0,0,1,71.65,1.6H245.36V198H215.15v45.32h22.66V258.4H71.65a37.85,37.85,0,0,1-37.76-37.76Z"></path></svg>
      
                  </div>
                  <div class="menu-item__text">
                    Courses
                  </div>
                </a>
              </li>
              <li class="menu-item ic-app-header__menu-list-item ">
                <a id="global_nav_groups_link" role="button" href="/groups" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--groups" viewBox="0 0 200 135"><path d="M134.5 129.4c0-1.1 0-19.8-6.2-31.1-4.5-8.5-16.4-12.4-35-19.2-1.7-.6-3.4-1.1-5.1-1.7v-8.5c5.6-5.1 8.5-12.4 8.5-20.3V29.4C96.6 13 83.6 0 67.2 0S37.9 13 37.9 29.4v19.2c0 7.3 3.4 14.7 8.5 20.3v8.5c-1.7.6-3.4 1.1-5.1 1.7-18.6 6.2-30.5 10.7-35 19.2C0 109.6 0 128.8 0 129.4c0 3.4 2.3 5.6 5.6 5.6h123.7c3.5 0 5.7-2.3 5.2-5.6zm-123.2-5.7c.6-5.6 1.7-14.7 3.4-19.8C17 98.8 30 94.3 43.5 89.8c2.8-1.1 5.6-2.3 9-3.4 2.3-.6 4-2.8 4-5.1V66.7c0-1.7-.6-3.4-1.7-4.5-4-3.4-6.2-8.5-6.2-13.6V29.4c0-10.2 7.9-18.1 18.1-18.1s18.1 7.9 18.1 18.1v19.2c0 5.1-2.3 10.2-6.2 13.6-1.1 1.1-1.7 2.8-1.7 4.5v14.7c0 2.3 1.7 4.5 4 5.1 2.8 1.1 6.2 2.3 9 3.4 13.6 5.1 26.6 9.6 28.8 14.1 2.8 5.1 4 13.6 4.5 19.8H11.3zM196 79.1c-2.8-6.2-11.3-9.6-22.6-13.6l-1.7-.6v-3.4c4.5-4 6.8-9.6 6.8-15.8V35c0-12.4-9.6-22-22-22s-22 10.2-22 22v10.7c0 6.2 2.3 11.9 6.8 15.8V65l-1.7.6c-7.3 2.8-13 4.5-16.9 7.3-1.7 1.1-2.3 2.8-2.3 5.1.6 1.7 1.7 3.4 3.4 4.5 7.9 4 12.4 7.3 14.1 10.7 2.3 4.5 4 10.2 5.1 18.1.6 2.3 2.8 4.5 5.6 4.5h45.8c3.4 0 5.6-2.8 5.6-5.1 0-3.9 0-24.3-4-31.6zm-42.9 25.4c-1.1-6.8-2.8-12.4-5.1-16.9-1.7-4-5.1-6.8-9.6-10.2 1.7-1.1 3.4-1.7 5.1-2.3l5.6-2.3c1.7-.6 3.4-2.8 3.4-5.1v-9.6c0-1.7-.6-3.4-2.3-4.5-2.8-1.7-4.5-5.1-4.5-8.5V34.5c0-6.2 4.5-10.7 10.7-10.7s10.7 5.1 10.7 10.7v10.7c0 3.4-1.7 6.2-4.5 8.5-1.1 1.1-2.3 2.8-2.3 4.5v10.2c0 2.3 1.1 4.5 3.4 5.1l5.6 2.3c6.8 2.3 15.3 5.6 16.4 7.9 1.7 2.8 2.8 12.4 2.8 20.9h-35.4z"></path></svg>
      
                  </div>
                  <div class="menu-item__text">
                    Groups
                  </div>
                </a>
              </li>
            <li class="menu-item ic-app-header__menu-list-item ">
              <a id="global_nav_calendar_link" href="/calendar" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--calendar" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M197.07,213.38h16.31V197.07H197.07Zm-16.31,16.31V180.76h48.92v48.92Zm-48.92-16.31h16.31V197.07H131.85Zm-16.31,16.31V180.76h48.92v48.92ZM66.62,213.38H82.93V197.07H66.62ZM50.32,229.68V180.76H99.24v48.92Zm146.75-81.53h16.31V131.85H197.07Zm-16.31,16.31V115.54h48.92v48.92Zm-48.92-16.31h16.31V131.85H131.85Zm-16.31,16.31V115.54h48.92v48.92ZM66.62,148.15H82.93V131.85H66.62ZM50.32,164.46V115.54H99.24v48.92ZM34,262.29H246V82.93H34ZM246,66.62V42.16A8.17,8.17,0,0,0,237.84,34H213.38v8.15a8.15,8.15,0,1,1-16.31,0V34H82.93v8.15a8.15,8.15,0,0,1-16.31,0V34H42.16A8.17,8.17,0,0,0,34,42.16V66.62Zm-8.15-48.92a24.49,24.49,0,0,1,24.46,24.46V278.6H17.71V42.16A24.49,24.49,0,0,1,42.16,17.71H66.62V9.55a8.15,8.15,0,0,1,16.31,0v8.15H197.07V9.55a8.15,8.15,0,1,1,16.31,0v8.15Z"></path></svg>
      
                </div>
                <div class="menu-item__text">
                  Calendar
                </div>
              </a>
            </li>
            <li class="menu-item ic-app-header__menu-list-item ">
              <a id="global_nav_conversations_link" href="/conversations" class="ic-app-header__menu-list-link">
                <div class="menu-item-icon-container">
                  <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--inbox" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M91.72,120.75h96.56V104.65H91.72Zm0,48.28h80.47V152.94H91.72Zm0-96.56h80.47V56.37H91.72Zm160.94,34.88H228.52V10.78h-177v96.56H27.34A24.17,24.17,0,0,0,3.2,131.48V244.14a24.17,24.17,0,0,0,24.14,24.14H252.66a24.17,24.17,0,0,0,24.14-24.14V131.48A24.17,24.17,0,0,0,252.66,107.34Zm0,16.09a8.06,8.06,0,0,1,8,8v51.77l-32.19,19.31V123.44ZM67.58,203.91v-177H212.42v177ZM27.34,123.44H51.48v79.13L19.29,183.26V131.48A8.06,8.06,0,0,1,27.34,123.44ZM252.66,252.19H27.34a8.06,8.06,0,0,1-8-8V202l30,18H230.75l30-18v42.12A8.06,8.06,0,0,1,252.66,252.19Z"></path></svg>
      </span>
                  <span class="menu-item__badge"><span class="ergWt_bGBk">33 unread messages.</span><span aria-hidden="true">33</span></span>
                </div>
                <div class="menu-item__text">
                  Inbox
                </div>
              </a>
            </li>
              <li class="menu-item ic-app-header__menu-list-item">
                <a id="global_nav_history_link" role="button" href="#" class="ic-app-header__menu-list-link">
                  <div class="menu-item-icon-container" aria-hidden="true">
                    <svg viewBox="0 0 1920 1920" class="ic-icon-svg menu-item__icon svg-icon-history" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M960 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059M960 1920C430.645 1920 0 1489.355 0 960S430.645 0 960 0s960 430.645 960 960-430.645 960-960 960m417.905-575.955L903.552 988.28V395.34h112.941v536.47l429.177 321.77-67.765 90.465z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
                  </div>
                  <div class="menu-item__text">
                    History
                  </div>
                </a>
              </li>
              
      
            <li class="ic-app-header__menu-list-item">
              <a id="global_nav_help_link" role="button" class="ic-app-header__menu-list-link" data-track-category="help system" data-track-label="help button" href="http://help.instructure.com/">
                <div class="menu-item-icon-container" role="presentation">
                    <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg menu-item__icon svg-icon-help" version="1.1" x="0" y="0" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve" fill="currentColor"><path d="M100,127.88A11.15,11.15,0,1,0,111.16,139,11.16,11.16,0,0,0,100,127.88Zm8.82-88.08a33.19,33.19,0,0,1,23.5,23.5,33.54,33.54,0,0,1-24,41.23,3.4,3.4,0,0,0-2.74,3.15v9.06H94.42v-9.06a14.57,14.57,0,0,1,11.13-14,22.43,22.43,0,0,0,13.66-10.27,22.73,22.73,0,0,0,2.31-17.37A21.92,21.92,0,0,0,106,50.59a22.67,22.67,0,0,0-19.68,3.88,22.18,22.18,0,0,0-8.65,17.64H66.54a33.25,33.25,0,0,1,13-26.47A33.72,33.72,0,0,1,108.82,39.8ZM100,5.2A94.8,94.8,0,1,0,194.8,100,94.91,94.91,0,0,0,100,5.2m0,178.45A83.65,83.65,0,1,1,183.65,100,83.73,83.73,0,0,1,100,183.65" transform="translate(-5.2 -5.2)"></path></svg>
      
                  <span class="menu-item__badge"></span>
                </div>
                <div class="menu-item__text">
                  Help
                </div>
      </a>      </li>
          </ul>
        </div>
        <div class="ic-app-header__secondary-navigation">
          <ul class="ic-app-header__menu-list">
            <li class="menu-item ic-app-header__menu-list-item">
              <a id="primaryNavToggle" role="button" href="#" class="ic-app-header__menu-list-link ic-app-header__menu-list-link--nav-toggle" aria-label="Minimize global navigation" title="Minimize global navigation">
                <div class="menu-item-icon-container" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--navtoggle" version="1.1" x="0" y="0" width="40" height="32" viewBox="0 0 40 32" xml:space="preserve">
        <path d="M39.5,30.28V2.48H37.18v27.8Zm-4.93-13.9L22.17,4,20.53,5.61l9.61,9.61H.5v2.31H30.14l-9.61,9.61,1.64,1.64Z"></path>
      </svg>
      
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div id="global_nav_tray_container"></div>
        <div id="global_nav_tour"></div>
      </header>
      
      
        <div id="instructure_ajax_error_box">
          <div style="text-align: right; background-color: #fff;"><a href="#" class="close_instructure_ajax_error_box_link">Close</a></div>
          <iframe id="instructure_ajax_error_result" src="about:blank" style="border: 0;" title="Error"></iframe>
        </div>
      
        <div id="wrapper" class="ic-Layout-wrapper">
            <div class="ic-app-nav-toggle-and-crumbs no-print">
                <button type="button" id="courseMenuToggle" class="Button Button--link ic-app-course-nav-toggle" aria-live="polite" aria-label="Hide Courses Navigation Menu">
                  <i class="icon-hamburger" aria-hidden="true"></i>
                </button>
      
              <div class="ic-app-crumbs">
                  <nav id="breadcrumbs" role="navigation" aria-label="breadcrumbs"><ul><li class="home"><a href="/"><span class="ellipsible"><i class="icon-home" title="My Dashboard">
        <span class="screenreader-only">My Dashboard</span>
      </i>
      </span></a></li><li><a href="/courses/101879"><span class="ellipsible">CPSC 313 101/102 2022W1</span></a></li><li><span class="ellipsible">Syllabus</span></li></ul></nav>
              </div>
      
      
              <div class="right-of-crumbs">
              </div>
      
            </div>
          <div id="main" class="ic-Layout-columns">
              <div class="ic-Layout-watermark"></div>
              <div id="left-side" class="ic-app-course-menu ic-sticky-on list-view" style="display: block">
                <div id="sticky-container" class="ic-sticky-frame">
                    <span id="section-tabs-header-subtitle" class="ellipsis">2022W1</span>
                  <nav role="navigation" aria-label="Courses Navigation Menu"><ul id="section-tabs"><li class="section"><a href="/courses/101879" class="home" tabindex="0">Home</a></li><li class="section"><a href="/courses/101879/external_tools/201?display=borderless" class="context_external_tool_201" target="_blank" tabindex="0">Piazza</a></li><li class="section"><a href="/courses/101879/assignments/syllabus" aria-current="page" class="syllabus active" tabindex="0">Syllabus</a></li><li class="section"><a href="/courses/101879/modules" class="modules" tabindex="0">Modules</a></li><li class="section"><a href="/courses/101879/external_tools/35829" class="context_external_tool_35829" tabindex="0">y86 Simulator</a></li><li class="section"><a href="/courses/101879/external_tools/4732" class="context_external_tool_4732" tabindex="0">Course Evaluation</a></li><li class="section"><a href="/courses/101879/external_tools/15408" class="context_external_tool_15408" tabindex="0">Zoom</a></li><li class="section"><a href="/courses/101879/external_tools/42332" class="context_external_tool_42332" tabindex="0">Media Gallery</a></li><li class="section"><a href="/courses/101879/external_tools/42334" class="context_external_tool_42334" tabindex="0">My Media</a></li></ul></nav>
                </div>
              </div>
            <div id="not_right_side" class="ic-app-main-content">
              <div id="content-wrapper" class="ic-Layout-contentWrapper">
                
                <div id="content" class="ic-Layout-contentMain" role="main">
                  
      
      
      
      
      <div class="ic-Action-header">
        <div class="ic-Action-header__Primary">
          <h1 class="ic-Action-header__Heading">Course Syllabus</h1>
        </div>
        <div class="ic-Action-header__Secondary">
        </div>
      </div>
      
      <div id="course_syllabus" style="margin-bottom: 10px;" class="user_content enhanced">
        <p>All course exercises (both pre-class and in-class), quizzes, exams, and assignments (labs) will be completed on <a class="inline_disabled external" href="https://ca.prairielearn.org/pl/course_instance/2329/assessments" target="_blank" rel="noreferrer noopener"><span>Prairie Learn</span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a>. Use this schedule to see all your deadlines. All times are in PT.</p>
      <p><strong>Pre-class Assignments</strong> are due 15 minutes before your section time (i.e., 10:45 AM or 3:45 PM) on the day of class.</p>
      <p><strong>In-class Assignments</strong> are intended to be completed in class and submitted at the end of class. We will leave the assignments open until midnight <em>the day of class</em>, but we strongly encourage everyone to submit them at the end of their class period.</p>
      <p><strong>Labs</strong> will be released at 5:00 PM on Fridays and are due 9 days later at 5:00 PM PT on Sundays.</p>
      <p><strong>Exceptions</strong>:</p>
      <ul>
      <li>Lab 1 is an exception will be released the first day of class and is due on the following Sunday.</li>
      </ul>
      <p><strong>Quizzes</strong> will be released at 5:00 PM on Friday and are due the following Monday at midnight. <strong></strong></p>
      <p>Please take note of the dates of the two exams in the schedule below.</p>
      <table border="1">
      <tbody>
      <tr style="border-style: inset;">
      <th>Week #</th>
      <th>Date: Topic</th>
      <th>Pre-class Work</th>
      <th>In-class Work</th>
      <th>Labs/Quizzes</th>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="2">1</td>
      <td>9/7: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22412272" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22412272?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22412272">Introduction</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22412272/download?download_frd=1" data-id="22412272"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Introduction</span></a></span></td>
      <td></td>
      <td>
      <p><a href="https://canvas.ubc.ca/courses/101879/pages/c-refresher">C Refresher</a></p>
      <p><a class="inline_disabled" href="https://canvas.ubc.ca/courses/101879/pages/c-refresher-solutions" target="_blank">Solution</a></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18602/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab1 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td>9/9: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22412273" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22412273?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22412273">Data Representation</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22412273/download?download_frd=1" data-id="22412273"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Data Representation</span></a></span></td>
      <td>
      <p><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18639/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Intro</span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22048558" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22048558?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22048558">y86 One page reference</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22048558/download?download_frd=1" data-id="22048558"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download y86 One page reference</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18600/" class="external" target="_blank" rel="noreferrer noopener"><span> A Treasure Hunt: Remembering C, gdb, and memory representation </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td>Quiz 0( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18648/" class="external" target="_blank" rel="noreferrer noopener"><span> Info </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) ( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18647/" class="external" target="_blank" rel="noreferrer noopener"><span> Test </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) <br><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18603/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab2 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">2</td>
      <td>9/12: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22443928" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22443928?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22443928">ALU operations</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22443928/download?download_frd=1" data-id="22443928"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download ALU operations</span></a></span></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18637/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 ALU &amp; Control </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18571/" class="external" target="_blank" rel="noreferrer noopener"><span> Practice with ALU Operations and Condition Codes </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>9/14: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22497938" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22497938?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22497938">From ISA to Implementation</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22497938/download?download_frd=1" data-id="22497938"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download From ISA to Implementation</span></a></span></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18646/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Stack and Call </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18574/" class="external" target="_blank" rel="noreferrer noopener"><span> Practice with the y86 ISA </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>9/16: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22527133" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22535917?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22535917">Building a Buffer Overflow Attack in y86</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22535917/download?download_frd=1" data-id="22535917"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Building a Buffer Overflow Attack in y86</span></a></span></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18638/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Calling Conventions </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18580/" class="external" target="_blank" rel="noreferrer noopener"><span> Building a Buffer Overflow in y86 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td>Quiz 1( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18651/" class="external" target="_blank" rel="noreferrer noopener"><span> Info </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) ( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18650/" class="external" target="_blank" rel="noreferrer noopener"><span> Test </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) <br><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18604/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab3-Individual </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18605/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab3-Partners </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">3</td>
      <td>9/19: Queen Elizabeth Funeral - UBC closed</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>9/21: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22639809" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22640516?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22640516">y86 Implementation</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22640516/download?download_frd=1" data-id="22640516"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download y86 Implementation</span></a></span></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18665/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Implementation </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18589/" class="external" target="_blank" rel="noreferrer noopener"><span> Designing y86 Logic Blocks </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>9/23: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22687115" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22687115?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22687115">y86 Sequential Wrapup</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22687115/download?download_frd=1" data-id="22687115"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download y86 Sequential Wrapup</span></a></span></td>
      <td></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18601/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Stages of Execution </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22700961" class="inline_disabled" href="https://canvas.ubc.ca/courses/101879/files/22700961?wrap=1" target="_blank" data-id="22700961">Original tester.c for Lab 3</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22700961/download?download_frd=1" data-id="22700961"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Original tester.c for Lab 3</span></a></span></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">4</td>
      <td>9/26: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="22731869" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/22771910?wrap=1" target="_blank" data-canvas-previewable="true" data-id="22771910">Introduction to Pipelining</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22771910/download?download_frd=1" data-id="22771910"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Introduction to Pipelining</span></a></span></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18641/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Introduction to Pipelining </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18593/" class="external" target="_blank" rel="noreferrer noopener"><span> Pipeline Performance </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>9/28: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="2.2-stalling.pdf" href="https://canvas.ubc.ca/courses/101879/files/22888339?wrap=1" target="_blank" data-id="22888339">Hazards</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22888339/download?download_frd=1" data-id="22888339"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Hazards</span></a></span></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18643/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Pipeline Registers </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18591/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Pipelining -- Addressing Hazards via Nops </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>9/30: Truth and Reconciliation Day</td>
      <td></td>
      <td></td>
      <td>Quiz 2( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18654/" class="external" target="_blank" rel="noreferrer noopener"><span> Info </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) ( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18653/" class="external" target="_blank" rel="noreferrer noopener"><span> Test </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) <br><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18608/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab4 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">5</td>
      <td>
      <p>10/3: Forwarding</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="2.3-valueForwarding.pdf" href="https://canvas.ubc.ca/courses/101879/files/22891244?wrap=1" target="_blank" data-id="22891244">Value Forwarding</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22891244/download?download_frd=1" data-id="22891244"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Value Forwarding</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18645/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Pipeline Stalling </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18592/" class="external" target="_blank" rel="noreferrer noopener"><span> Pipeline Forwarding </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>10/5: Branch Prediction</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="2.4-branchPrediction.pdf" href="https://canvas.ubc.ca/courses/101879/files/22948012?wrap=1" target="_blank" data-id="22948012">2.4-branchPrediction.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/22948012/download?download_frd=1" data-id="22948012"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 2.4-branchPrediction.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18640/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Pipeline Control Hazards </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18583/" class="external" target="_blank" rel="noreferrer noopener"><span> Counting Stall Cycles </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>10/7: Improving performance</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="2.5-pipelinePerformance.pdf" href="https://canvas.ubc.ca/courses/101879/files/23024038?wrap=1" target="_blank" data-id="23024038">2.5-pipelinePerformance.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23024038/download?download_frd=1" data-id="23024038"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 2.5-pipelinePerformance.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18644/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Pipeline Mipredicts </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18576/" class="external" target="_blank" rel="noreferrer noopener"><span> Solving Pipeline Problems </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">6</td>
      <td>10/10: Thanksgiving Holiday</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>10/12: Midterm 1</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>10/14: Other forms of parallelism</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="2.6-parallelism.pdf" href="https://canvas.ubc.ca/courses/101879/files/23135287?wrap=1" target="_blank" data-id="23135287">2.6-parallelism.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23135287/download?download_frd=1" data-id="23135287"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 2.6-parallelism.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18642/" class="external" target="_blank" rel="noreferrer noopener"><span> y86 Pipeline Optimization </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18595/" class="external" target="_blank" rel="noreferrer noopener"><span> Parallel Architectures </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18607/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab5 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">7</td>
      <td>
      <p>10/17: The Memory Hierarchy</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="3.1-memory-hierarchy.pdf" href="https://canvas.ubc.ca/courses/101879/files/23185732?wrap=1" target="_blank" data-id="23185732">3.1-memory-hierarchy.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23185732/download?download_frd=1" data-id="23185732"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 3.1-memory-hierarchy.pdf</span></a></span></p>
      </td>
      <td></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18581/" class="external" target="_blank" rel="noreferrer noopener"><span> Introduction to Caching </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>10/19: Caching (reads)</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="3.2-cachelines.pdf" href="https://canvas.ubc.ca/courses/101879/files/23312864?wrap=1" target="_blank" data-id="23312864">3.2-cachelines.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23312864/download?download_frd=1" data-id="23312864"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 3.2-cachelines.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18623/" class="external" target="_blank" rel="noreferrer noopener"><span> Introduction to caching </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18582/" class="external" target="_blank" rel="noreferrer noopener"><span> Calculating Cache Parameters </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>10/21: <span class="instructure_file_holder link_holder instructure_file_link_holder"><a id="23281218" class="inline_disabled preview_in_overlay" href="https://canvas.ubc.ca/courses/101879/files/23281218?wrap=1" target="_blank" data-canvas-previewable="true" data-id="23281218">Replacement</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23281218/download?download_frd=1" data-id="23281218"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download Replacement</span></a></span></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18622/" class="external" target="_blank" rel="noreferrer noopener"><span> Cache Associativity </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18577/" class="external" target="_blank" rel="noreferrer noopener"><span> Cache Replacement Policies </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td>Quiz 3( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18656/" class="external" target="_blank" rel="noreferrer noopener"><span> Info </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) ( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18658/" class="external" target="_blank" rel="noreferrer noopener"><span> Test </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) <br><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18609/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab6 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">8</td>
      <td>
      <p>10/24: Speedup and write caching</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="3.4-cache-speedup.pdf" href="https://canvas.ubc.ca/courses/101879/files/23359646?wrap=1" target="_blank" data-id="23359646">3.4-cache-speedup.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23359646/download?download_frd=1" data-id="23359646"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 3.4-cache-speedup.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18627/" class="external" target="_blank" rel="noreferrer noopener"><span> Cache Replacement </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18572/" class="external" target="_blank" rel="noreferrer noopener"><span> Amdahl's Law and an Introduction to Write Caching </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>10/26: Cache management and performance</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="3.5-write-management.pdf" href="https://canvas.ubc.ca/courses/101879/files/23427992?wrap=1" target="_blank" data-id="23427992">3.5-write-management.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23427992/download?download_frd=1" data-id="23427992"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 3.5-write-management.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18625/" class="external" target="_blank" rel="noreferrer noopener"><span> Write Caching </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18579/" class="external" target="_blank" rel="noreferrer noopener"><span> Write Caching </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>10/28: Performance and stride</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="3.6-cache-stride.pdf" href="https://canvas.ubc.ca/courses/101879/files/23427969?wrap=1" target="_blank" data-id="23427969">3.6-cache-stride.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23427969/download?download_frd=1" data-id="23427969"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 3.6-cache-stride.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18624/" class="external" target="_blank" rel="noreferrer noopener"><span> Strided Access </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18578/" class="external" target="_blank" rel="noreferrer noopener"><span> Strided Performance </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18610/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab7 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">9</td>
      <td>
      <p>10/31: From MSI to MESI</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="3.7-cache-MESI.pdf" href="https://canvas.ubc.ca/courses/101879/files/23477334?wrap=1" target="_blank" data-id="23477334">3.7-cache-MESI.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23477334/download?download_frd=1" data-id="23477334"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 3.7-cache-MESI.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18621/" class="external" target="_blank" rel="noreferrer noopener"><span> Multicore Cache Coherence </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18575/" class="external" target="_blank" rel="noreferrer noopener"><span> Cache Coherence (MESI) </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>11/2: Using File System APIs</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="4.1-fsDecisionSpace.pdf" href="https://canvas.ubc.ca/courses/101879/files/23525831?wrap=1" target="_blank" data-id="23525831">4.1-fsDecisionSpace.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23525831/download?download_frd=1" data-id="23525831"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 4.1-fsDecisionSpace.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18629/" class="external" target="_blank" rel="noreferrer noopener"><span> Introduction to File Systems </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18573/" class="external" target="_blank" rel="noreferrer noopener"><span> Using File System system calls </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>11/4: File Descriptor Management</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="4.2-fsAdvanced.pdf" href="https://canvas.ubc.ca/courses/101879/files/23575167?wrap=1" target="_blank" data-id="23575167">4.2-fsAdvanced.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23575167/download?download_frd=1" data-id="23575167"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 4.2-fsAdvanced.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18626/" class="external" target="_blank" rel="noreferrer noopener"><span> File Descriptors </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18584/" class="external" target="_blank" rel="noreferrer noopener"><span> Fun with File Descriptors </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td>Quiz 4( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18660/" class="external" target="_blank" rel="noreferrer noopener"><span> Info </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) ( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18659/" class="external" target="_blank" rel="noreferrer noopener"><span> Test </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) <br><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18613/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab8-Individual </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18611/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab8-Partners </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">10</td>
      <td>
      <p>11/7: Representing Files</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="4.3-fsFileRepresentation.pdf" href="https://canvas.ubc.ca/courses/101879/files/23618430?wrap=1" target="_blank" data-id="23618430">4.3-fsFileRepresentation.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23618430/download?download_frd=1" data-id="23618430"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 4.3-fsFileRepresentation.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18628/" class="external" target="_blank" rel="noreferrer noopener"><span> File System Implementation Overview </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18588/" class="external" target="_blank" rel="noreferrer noopener"><span> File layout and performance </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>11/9: Mid-term break</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>11/11: Mid-term break</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">11</td>
      <td>
      <p>11/14: Building a file index</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="4.4-fsFileIndex.pdf" href="https://canvas.ubc.ca/courses/101879/files/23749671?wrap=1" target="_blank" data-id="23749671">4.4-fsFileIndex.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23749671/download?download_frd=1" data-id="23749671"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 4.4-fsFileIndex.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18631/" class="external" target="_blank" rel="noreferrer noopener"><span> Why fixed-size block file systems? </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18590/" class="external" target="_blank" rel="noreferrer noopener"><span> File Representation </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>11/16: Midterm 2</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>11/18: Naming</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="4.5-fsNaming.pdf" href="https://canvas.ubc.ca/courses/101879/files/23819470?wrap=1" target="_blank" data-id="23819470">4.5-fsNaming.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23819470/download?download_frd=1" data-id="23819470"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 4.5-fsNaming.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18630/" class="external" target="_blank" rel="noreferrer noopener"><span> Getting File System Metadata </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18587/" class="external" target="_blank" rel="noreferrer noopener"><span> Directories </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18612/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab9 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">12</td>
      <td>
      <p>11/21: File System Case study: v6</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="4.6-fsV6.pdf" href="https://canvas.ubc.ca/courses/101879/files/23865816?wrap=1" target="_blank" data-id="23865816">4.6-fsV6.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23865816/download?download_frd=1" data-id="23865816"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 4.6-fsV6.pdf</span></a></span></p>
      </td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>11/23: File System Case study: ext2</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="4.7-fsExt2.pdf" href="https://canvas.ubc.ca/courses/101879/files/24012276?wrap=1" target="_blank" data-id="24012276">4.7-fsExt2.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/24012276/download?download_frd=1" data-id="24012276"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 4.7-fsExt2.pdf</span></a></span></p>
      </td>
      <td></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18586/" class="external" target="_blank" rel="noreferrer noopener"><span> Comparing Ext2 and V6 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>11/25: Process Isolation</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="5.1-VMandProcessIsolation.pdf" href="https://canvas.ubc.ca/courses/101879/files/23964777?wrap=1" target="_blank" data-id="23964777">5.1-VMandProcessIsolation.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/23964777/download?download_frd=1" data-id="23964777"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 5.1-VMandProcessIsolation.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18634/" class="external" target="_blank" rel="noreferrer noopener"><span> Process Isolation </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18594/" class="external" target="_blank" rel="noreferrer noopener"><span> Building a Shell </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td>Quiz 5( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18663/" class="external" target="_blank" rel="noreferrer noopener"><span> Info </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) ( <a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18662/" class="external" target="_blank" rel="noreferrer noopener"><span> Test </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a> ) <br><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18596/" class="external" target="_blank" rel="noreferrer noopener"><span> Lab10 </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">13</td>
      <td>
      <p>11/28: Protected Control Transfer</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="5.2-supervisorMode.pdf" href="https://canvas.ubc.ca/courses/101879/files/24020281?wrap=1" target="_blank" data-id="24020281">5.2-supervisorMode.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/24020281/download?download_frd=1" data-id="24020281"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 5.2-supervisorMode.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18635/" class="external" target="_blank" rel="noreferrer noopener"><span> Spinning versus Polling </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18585/" class="external" target="_blank" rel="noreferrer noopener"><span> Process/OS interaction </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>11/30: TLBs</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="5.3-howVMworks.pdf" href="https://canvas.ubc.ca/courses/101879/files/24070512?wrap=1" target="_blank" data-id="24070512">5.3-howVMworks.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/24070512/download?download_frd=1" data-id="24070512"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 5.3-howVMworks.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18636/" class="external" target="_blank" rel="noreferrer noopener"><span> Traps </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18597/" class="external" target="_blank" rel="noreferrer noopener"><span> Translating addresses using a TLB </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>12/2: The x86 VM system</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="5.4-x86PageTables.pdf" href="https://canvas.ubc.ca/courses/101879/files/24141097?wrap=1" target="_blank" data-id="24141097">5.4-x86PageTables.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/24141097/download?download_frd=1" data-id="24141097"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 5.4-x86PageTables.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18633/" class="external" target="_blank" rel="noreferrer noopener"><span> Paging </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <td style="text-align: center;" rowspan="3">14</td>
      <td>
      <p>12/5: VM Faults</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="5.5-VMFaults.pdf" href="https://canvas.ubc.ca/courses/101879/files/24215249?wrap=1" target="_blank" data-id="24215249">5.5-VMFaults.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/24215249/download?download_frd=1" data-id="24215249"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 5.5-VMFaults.pdf</span></a></span></p>
      </td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18632/" class="external" target="_blank" rel="noreferrer noopener"><span> Page Replacement and the Clock Algorithm </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td><a href="https://ca.prairielearn.org/pl/course_instance/2452/assessment/18598/" class="external" target="_blank" rel="noreferrer noopener"><span> VM: Page Tables and Page Replacement </span><span class="external_link_icon" style="margin-inline-start: 5px; display: inline-block; text-indent: initial; " role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1226.66667,267 C1314.88,267 1386.66667,338.786667 1386.66667,427 L1386.66667,427 L1386.66667,853.666667 L1280,853.666667 L1280,693.666667 L106.666667,693.666667 L106.666667,1493.66667 C106.666667,1523 130.56,1547 160,1547 L160,1547 L1226.66667,1547 C1256.10667,1547 1280,1523 1280,1493.66667 L1280,1493.66667 L1280,1280.33333 L1386.66667,1280.33333 L1386.66667,1493.66667 C1386.66667,1581.88 1314.88,1653.66667 1226.66667,1653.66667 L1226.66667,1653.66667 L160,1653.66667 C71.7866667,1653.66667 0,1581.88 0,1493.66667 L0,1493.66667 L0,427 C0,338.786667 71.7866667,267 160,267 L160,267 Z M1584.37333,709.293333 L1904.37333,1029.29333 C1925.17333,1050.09333 1925.17333,1083.90667 1904.37333,1104.70667 L1904.37333,1104.70667 L1584.37333,1424.70667 L1508.96,1349.29333 L1737.86667,1120.38667 L906.613333,1120.38667 L906.613333,1013.72 L1737.86667,1013.72 L1508.96,784.706667 L1584.37333,709.293333 Z M1226.66667,373.666667 L160,373.666667 C130.56,373.666667 106.666667,397.666667 106.666667,427 L106.666667,427 L106.666667,587 L1280,587 L1280,427 C1280,397.666667 1256.10667,373.666667 1226.66667,373.666667 L1226.66667,373.666667 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      <span class="screenreader-only">Links to an external site.</span></span></a></td>
      <td></td>
      </tr>
      <tr>
      <td>
      <p>12/7: Two-handed Clock &amp; Wrap UP</p>
      <p><span class="instructure_file_holder link_holder instructure_file_link_holder"><a class="inline_disabled preview_in_overlay" title="5.6-twoHandedClock+wrapUp.pdf" href="https://canvas.ubc.ca/courses/101879/files/24273150?wrap=1" target="_blank" data-id="24273150">5.6-twoHandedClock+wrapUp.pdf</a><a class="file_download_btn" role="button" download="" style="margin-inline-start: 5px; text-decoration: none;" href="https://canvas.ubc.ca/courses/101879/files/24273150/download?download_frd=1" data-id="24273150"><span role="presentation"><svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" style="width:1em; height:1em; vertical-align:middle; fill:currentColor">
          <path d="M1807.09271,1482.47718 L1886.82918,1562.43953 L1531.51624,1917.75247 L355.346824,1917.75247 L0.0338823529,1562.43953 L79.8832941,1482.47718 L402.104471,1804.81129 L1484.75859,1804.81129 L1807.09271,1482.47718 Z M997.677176,-0.0338823529 L997.677176,1166.98729 L1352.99012,811.674353 L1432.95247,891.523765 L941.093647,1383.15671 L449.460706,891.523765 L529.423059,811.674353 L884.736,1166.98729 L884.736,-0.0338823529 L997.677176,-0.0338823529 Z" stroke="none" stroke-width="1" fill-rule="evenodd"></path>
      </svg>
      </span><span class="screenreader-only">Download 5.6-twoHandedClock+wrapUp.pdf</span></a></span></p>
      </td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      </tbody>
      </table>
      </div>
      <div id="course_syllabus_details" style="display: none;">
        <p>The syllabus page shows a table-oriented view of the course schedule, and the basics of
      course grading.  You can add any other comments, notes, or thoughts you have about the course
      structure, course policies or anything else.</p>
      
      <p>To add some comments, click the "Edit" link at the top.</p>
      </div>
      <form id="edit_course_syllabus_form" style="display: none; margin-bottom: 10px;" action="/courses/101879" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓" autocomplete="off"><input type="hidden" name="_method" value="put" autocomplete="off"><input type="hidden" name="authenticity_token" value="zvD6z/fIsyQcm50+hSpyNnSqxx9bbD6kLtz0BfT0I9Lhv7v3tIbATHLq723HRT9gJ/22cDU4XZJk97tykJd6gw==" autocomplete="off">
          <label for="course_syllabus_body">Syllabus Description:</label>
        <div class="clear"></div>
        <textarea style="width: 100%; height: 300px;" id="course_syllabus_body" name="course[syllabus_body]"></textarea>
      
          <div class="ic-Form-control ic-Form-control--checkbox">
            <input name="course[syllabus_course_summary]" type="hidden" value="0" autocomplete="off"><input type="checkbox" value="1" name="course[syllabus_course_summary]" id="course_syllabus_course_summary">
            <label class="ic-Label" for="course_syllabus_course_summary">Show Course Summary</label>
          </div>
      
        <div class="form-actions">
          <button type="button" class="btn cancel_button">Cancel</button>
          <button type="submit" class="btn btn-primary">Update Syllabus</button>
        </div>
      </form>
      
      
                </div>
              </div>
              <div id="right-side-wrapper" class="ic-app-main-content__secondary">
                <aside id="right-side" role="complementary">
                  
          
      <div id="sidebar_content">
      </div>
      
      
                </aside>
              </div>
            </div>
          </div>
        </div>
      
      
      
          <div style="display:none;"><!-- Everything inside of this should always stay hidden -->
              <div id="page_view_id">f2c63cc7-291c-4bc7-957e-e6020c77a554</div>
          </div>
        <div id="aria_alerts" class="hide-text affix" role="alert" aria-live="assertive"></div>
        <div id="StudentTray__Container"></div>
        
      
        <script>
          Object.assign(
            ENV,
            {}
          )
        </script>
      
      <link rel="preload" href="https://du11hjcvx0uqb.cloudfront.net/dist/webpack-production/inst_fs_service_worker-c-8d9c6558fc.js" as="script" type="text/javascript"><script>
      //<![CDATA[
      (window.bundles || (window.bundles = [])).push('inst_fs_service_worker');
      //]]>
      </script>
        <script>
      //<![CDATA[
      
            ;["https://instructure-uploads-yul.s3.ca-central-1.amazonaws.com/account_112240000000000001/attachments/3239540/ubc.js"].forEach(function(src) {
              var s = document.createElement('script'); s.src = src; s.async = false;
              document.head.appendChild(s)
            });
      //]]>
      </script>
      
      </div> <!-- #application -->
      
      
      <div id="nav-tray-portal" style="position: relative; z-index: 99;"></div><div role="log" aria-live="assertive" aria-relevant="additions" class="ally-helper-hidden-accessible"></div></body>`
    },
    {
      courseName: "cpsc-121",
      pageType: "Introduction",
      courseInformation: `<div class="w3-row-padding w3-padding-64 w3-container">
      <div class="w3-content">
        <div class="w3-twothird">
          <h1>About the Course</h1>
          <h5>CPSC 121 explores formal modeling systems that help us to understand and to explore the capabilities of computers and, more generally, of any problem solving process.</h5>
    
          <p class="w3-text-grey">Modern computation is founded on the happy coincidence that silicon and other semiconductors and metals in special configurations execute a logical operation. But, how do we get from little logical operations to high-level programs?</p>
    
          <p class="w3-text-grey">CPSC 121 will take you on a journey from 0s and 1s to languages of logics to circuits and, eventually, to full computers (well, a simplified version). You will learn how to construct and recognize valid proofs of a variety of forms, express yourself logically and precisely in the manner of a computer, and create working circuits to show off your models using the Magic Box.</p>
    
          <p class="w3-text-grey">One of CPSC 107 - Systematic Program Design or CPSC 110 - Computation, Programs, and Programming is a required co-requisite for this course. This means that in order to remain enrolled in CPSC 121, you must have already completed either CPSC 107 or CPSC 110, have been granted an exemption from it, or be taking it concurrently. If you do not meet one of these conditions, you will be removed from CPSC 121. Instructors do not have the power to change this rule or make any kind of exceptions.</p>
    
          <p class="w3-text-grey">Furthermore, instructors don't have any control over the registration process, therefore we are not allowed to add, remove or change students from sections or waitlists; change the number of reserved or total seats; or make any kind of registration requests. If you have any questions or requests, please send them to <a href="https://www.cs.ubc.ca/students/undergrad/resources/academic-advising">CS advising</a> instead.</p>
    
        </div>
    
        <div class="w3-third w3-center" style="font-size:250px">
          <i class="fa fa-microchip w3-padding-64 w3-text-blue"></i>
        </div>
      </div>
    </div>`
    },
    {
      courseName: "cpsc-121",
      pageType: "Syllabus",
      courseInformation: `<body>


      <!-- Header -->
      <header class="w3-container w3-blue w3-center" style="padding:80px 16px">
        <h1 class="w3-margin w3-jumbo">CPSC 121</h1>
        <p class="w3-xlarge">Models of Computing</p>
      </header>
      
      
      <!-- First Grid -->
      <div class="w3-row-padding w3-padding-64 w3-container">
        <div class="w3-content">
          <div class="w3-twothird">
            <h1>About the Course</h1>
            <h5>CPSC 121 explores formal modeling systems that help us to understand and to explore the capabilities of computers and, more generally, of any problem solving process.</h5>
      
            <p class="w3-text-grey">Modern computation is founded on the happy coincidence that silicon and other semiconductors and metals in special configurations execute a logical operation. But, how do we get from little logical operations to high-level programs?</p>
      
            <p class="w3-text-grey">CPSC 121 will take you on a journey from 0s and 1s to languages of logics to circuits and, eventually, to full computers (well, a simplified version). You will learn how to construct and recognize valid proofs of a variety of forms, express yourself logically and precisely in the manner of a computer, and create working circuits to show off your models using the Magic Box.</p>
      
            <p class="w3-text-grey">One of CPSC 107 - Systematic Program Design or CPSC 110 - Computation, Programs, and Programming is a required co-requisite for this course. This means that in order to remain enrolled in CPSC 121, you must have already completed either CPSC 107 or CPSC 110, have been granted an exemption from it, or be taking it concurrently. If you do not meet one of these conditions, you will be removed from CPSC 121. Instructors do not have the power to change this rule or make any kind of exceptions.</p>
      
            <p class="w3-text-grey">Furthermore, instructors don't have any control over the registration process, therefore we are not allowed to add, remove or change students from sections or waitlists; change the number of reserved or total seats; or make any kind of registration requests. If you have any questions or requests, please send them to <a href="https://www.cs.ubc.ca/students/undergrad/resources/academic-advising">CS advising</a> instead.</p>
      
          </div>
      
          <div class="w3-third w3-center" style="font-size:250px">
            <i class="fa fa-microchip w3-padding-64 w3-text-blue"></i>
          </div>
        </div>
      </div>
      
      
      <!-- Second Grid -->
      <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div class="w3-content">
          <div class="w3-third w3-center" style="font-size:250px">
            <i class="fa fa-bullseye w3-padding-64 w3-text-blue w3-margin-right"></i>
          </div>
      
          <div class="w3-twothird">
            <h1>Course Level Learning Goals</h1>
            <h5>By the end of the course, you will be able to:</h5>
      
            <p class="w3-text-grey">- Model computational systems (e.g., programs and circuits) and apply valid reasoning to these models, i.e. prove relevant properties or reason through functionality of computational systems using predicate logic, propositional logic and state machines.</p>
      
            <p class="w3-text-grey">- Clearly and precisely communicate computational models to computer scientists.</p>
      
            <p class="w3-text-grey">- Identify alternate methods to solve or simplify a variety of problems by translating between (1) English language, (2) simple formal representations (i.e., propositional and shallowly nested predicate logic statements) and (3) closely related equivalent formal representations, and then use the different representations to solve the problem.</p>
      
            <p class="w3-text-grey">- Write proofs for simple theorems by translating the theorem into first-order logic, decomposing the statement, and applying an appropriate proof-technique such as direct proofs, indirect proofs by contrapositive, indirect proofs by contradiction, proofs by weak and strong mathematical induction. Justify why each step of the proof is correct.</p>
      
            <p class="w3-text-grey">- Prove features of simple algorithms (e.g.,selection sort, recursive binary search, or quicksort) correct or bound in their running time. Justify why each step of the proof is correct.</p>
      
            <p class="w3-text-grey">- Create regular expressions and DFAs to solve problems that are important in programming.</p>
          </div>
        </div>
      </div>
      
      
      <!-- Third Grid -->
      <div class="w3-row-padding w3-padding-64 w3-container">
        <div class="w3-content">
          <div class="w3-twothird">
            <h1>Textbook</h1>
      
            <img style="float: left;padding:10px" src="https://books.google.ca/books/content?id=EsfMuAEACAAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;imgtk=AFLRE73LLIJen5fLz8pcHdDDRSDUtPVZm5dlvLuArZRoEKp890D4KwLcV_6hwGbrqSmGBSwqoJc_URnUolJseOJqHy2BcXX-ATn2V-PTdteSWOs-ReXzXe0Fc2tFMWfUZtWDJaIW-D9w" alt="Book Cover">
            
      
            <h5>Discrete Mathematics with Applications</h5>
      
            <p class="w3-text-grey">By: Susanna Epp</p>
      
            <p class="w3-text-grey">Edition: 5th</p>
      
            <p class="w3-text-grey">Publisher: Nelson Education</p>
      
            <p class="w3-text-grey">Year: 2020</p>
      
            <p class="w3-text-grey">DISCRETE MATHEMATICS WITH APPLICATIONS explains complex, abstract concepts with clarity and precision and provides a strong foundation for computer science and upper-level mathematics courses of the computer age. Author Susanna Epp presents not only the major themes of discrete mathematics, but also the reasoning that underlies mathematical thought. Students develop the ability to think abstractly as they study the ideas of logic and proof. While learning about such concepts as logic circuits and computer addition, algorithm analysis, recursive thinking, computability, automata, cryptography and combinatorics, students discover that the ideas of discrete mathematics underlie and are essential to today's science and technology.</p>
      
          </div>
      
          <div class="w3-third w3-center" style="font-size:250px">
            <i class="fa fa-book w3-padding-64 w3-text-blue"></i>
          </div>
        </div>
      </div>
      
      
      <!-- Fourth Grid -->
      <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div class="w3-content">
          <div class="w3-third w3-center" style="font-size:250px">
            <i class="fa fa-laptop w3-padding-64 w3-text-blue w3-margin-right"></i>
          </div>
      
          <div class="w3-twothird">
            <h1>Course Componets</h1>
      
            <h5>Labs</h5><p class="w3-text-grey">In lab, you will solve practical problems and test your ideas, using computer software.</p>
      
            <h5>Tutorial</h5><p class="w3-text-grey">During the Tutorial, students will work on some selected problems with the help of TAs.</p>
      
            <h5>Assignments</h5><p class="w3-text-grey">Assignments provide challenging questions to students, so they practice what they learn in lecture and prepare for exams. </p>
      
            <h5>Pre-Lecture Quizzes</h5><p class="w3-text-grey">CPSC 121 promotes an "interactive engagement" lecture approach to facilitate your learning. For this approach to work best, you must prepare before the lecture by reading the appropriate sections of the text, and completing an online quiz.</p>
      
            <h5>Clickers</h5><p class="w3-text-grey">Clickers are a way of engaging students in lecture and also get immediate feedback, so instructors can manage the time spent in each topic based on the students response.</p>
      
            <h5>Exams</h5><p class="w3-text-grey">All sections will write common midterms and final exam.</p>
      
          </div>
        </div>
      </div>
      
      
      
      <!-- Fourth Grid -->
      <div class="w3-row-padding w3-padding-64 w3-container">
        <div class="w3-content">
          <div class="w3-twothird">
            <h1>Main Topics</h1>
      
            <p class="w3-text-grey">Module 01: Logic Operators, Logic Gates, Digital Circuits, Propositional Logic</p>
            <p class="w3-text-grey">Module 02: Logical Equivalences</p>
            <p class="w3-text-grey">Module 03: Binary Numbers, Floating Point Representation, Computer Addition, Two's Complements, ALU</p>
            <p class="w3-text-grey">Module 04: Argument Validity, Rules of Inference</p>
            <p class="w3-text-grey">Module 05: Predicates and Quantified Statements, Sets</p>
            <p class="w3-text-grey">Module 06: Regular Expression, DFA, Turing Machine, Sequential Circuits</p>
            <p class="w3-text-grey">Module 07: Direct Proofs</p>
            <p class="w3-text-grey">Module 08: Contradiction Proofs, Contraposition Proofs</p>
            <p class="w3-text-grey">Module 09: Weak Induction</p>
            <p class="w3-text-grey">Module 10: Strong Induction</p>
            <p class="w3-text-grey">Module 11: Big O, Von Neumann Architecture, Instruction Cycle</p>
      
          </div>
      
          <div class="w3-third w3-center" style="font-size:250px">
            <i class="fa fa-graduation-cap w3-padding-64 w3-text-blue"></i>
          </div>
        </div>
      </div>
      
      
      <div class="w3-container w3-black w3-opacity w3-padding-32">
       <h3>Land Acknowledgement</h3>
       <p>UBC’s Point Grey Campus is located on the traditional, ancestral, and unceded territory of the xwməθkwəy̓əm (Musqueam) people. The land it is situated on has always been a place of learning for the Musqueam people, who for millennia have passed on their culture, history, and traditions from one generation to the next on this site. It’s important that this recognition of Musqueam territory and our relationship with the Musqueam people does not appear as just a formality. Take a moment to appreciate the meaning behind the words we use:</p>
      
       <p>TRADITIONAL recognizes lands traditionally used and/or occupied by the Musqueam people or other First Nations in other parts of the country.<br>
       ANCESTRAL recognizes land that is handed down from generation to generation.<br>
       UNCEDED refers to land that was not turned over to the Crown (government) by a treaty or other agreement.</p>
      
       <p>As you begin your journey at UBC, take some time to learn about the history of this land and to honour its original inhabitants.</p>
      </div>
      
      <!-- Footer -->
      <footer class="w3-container w3-padding-64 w3-opacity">  
      
      </footer>
      
      
      
      
      
      </body>`
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
