const defaultMessage = {
  BEST: [
    `Excellent job on "Basic Problem Solving with TypeScript"! Your solutions demonstrate a strong understanding of fundamental problem-solving principles and TypeScript concepts.`,
    `Kudos on your work in "Basic Problem Solving with TypeScript"! Your solutions showcase your ability to effectively apply TypeScript to solve various problems.`,
    `Impressive performance in "Basic Problem Solving with TypeScript"! Your solutions exhibit clarity and efficiency in addressing the given tasks.`,
    `Well done on the tasks in "Basic Problem Solving with TypeScript"! Your solutions reflect your proficiency in leveraging TypeScript to tackle different problem-solving scenarios.`,
    `Outstanding effort in "Basic Problem Solving with TypeScript"! Your solutions exemplify your mastery of TypeScript fundamentals and your adeptness at problem-solving.`,
    `Bravo! Your contributions to "Basic Problem Solving with TypeScript" are commendable. Your solutions demonstrate a solid grasp of TypeScript concepts and their application in problem-solving.`,
    `Stellar work in "Basic Problem Solving with TypeScript"! Your solutions are well-crafted and demonstrate your ability to navigate through problem-solving challenges using TypeScript.`,
    `Great job tackling the exercises in "Basic Problem Solving with TypeScript"! Your solutions are clear, concise, and effectively utilize TypeScript to solve the given problems.`,
    `Exceptional performance in "Basic Problem Solving with TypeScript"! Your solutions showcase your proficiency in both problem-solving techniques and TypeScript programming.`,
    `Outstanding contribution to "Basic Problem Solving with TypeScript"! Your solutions exhibit a high level of proficiency in leveraging TypeScript to solve a variety of problems effectively.`,
  ],
  // BEST: [
  //   "Amazing, your assignment is beautiful. But try to improve more. There will be better things ahead. Best wishes from Programming Hero Team.",
  //   "Excellent, you have completed the assignment very well. Keep it up. Best wishes from Programming Hero Team.",
  //   "Great, you have completed the assignment very well. But try to improve more. Keep it up. Best wishes from Programming Hero Team.",
  //   "Wonderful, you have completed the assignment very well. But try to improve more. Best wishes from Programming Hero Team.",
  //   "Outstanding work! Your assignment shines, but always room for growth. Keep striving for excellence. Best wishes from Programming Hero Team.",
  //   "Impressive! You've excelled in this assignment. Keep honing your skills for even greater accomplishments. Best wishes from Programming Hero Team.",
  //   "Exceptional job! Your assignment is praiseworthy, yet there's always space for enhancement. Keep pushing the boundaries. Best wishes from Programming Hero Team.",
  //   "Brilliant effort! Your assignment is commendable, but continual improvement is the key. Keep up the fantastic work. Best wishes from Programming Hero Team.",
  //   "Superb work! Your assignment is top-notch, but there's always more to explore. Keep innovating. Best wishes from Programming Hero Team.",
  //   "Astounding! Your assignment is a masterpiece, yet the pursuit of improvement is ongoing. Keep reaching for greater heights. Best wishes from Programming Hero Team.",
  // ],
  GOOD: [
    `Fantastic effort on your performance in "Basic Problem Solving with TypeScript"! Keep practicing and refining your skills to reach new heights. Your commitment to improvement will undoubtedly yield impressive results.`,
    `Well done on your performance in "Basic Problem Solving with TypeScript"! Keep pushing yourself to practice and improve. With dedication, your skills will continue to grow, paving the way for greater success.`,
    `Congratulations on your performance in "Basic Problem Solving with TypeScript"! Keep honing your skills through consistent practice. Your determination to excel will take you far.`,
    `Impressive work on your performance in "Basic Problem Solving with TypeScript"! Remember to keep practicing and challenging yourself. Your perseverance will lead to continuous improvement.`,
    `Great job on your performance in "Basic Problem Solving with TypeScript"! Keep striving for excellence by practicing regularly. Your dedication to growth is commendable.`,
    `Well done on your efforts in "Basic Problem Solving with TypeScript"! Continue practicing to sharpen your skills and broaden your knowledge. Your commitment to improvement is inspiring.`,
    `Great work on your performance in "Basic Problem Solving with TypeScript"! Keep up the momentum and continue practicing to enhance your skills further. Your dedication to improvement will undoubtedly lead to even greater achievements in the future.`,
    `Excellent work on your performance in "Basic Problem Solving with TypeScript"! Stay committed to practicing and learning. Your perseverance will pave the way for greater accomplishments.`,
    `Bravo on your performance in "Basic Problem Solving with TypeScript"! Keep practicing consistently to elevate your skills to new heights. Your determination to improve is truly commendable.`,
    `Outstanding effort on your performance in "Basic Problem Solving with TypeScript"! Keep up the hard work and dedication to practicing. Your commitment to growth is the key to future success.`,
  ],
  // GOOD: [
  //   "Good, you have completed the assignment perfectly, but try to improve more. Best wishes from Programming Hero Team.",
  //   "I appreciate the effort you put into the project, but I noticed that you could improve more. Best wishes from Programming Hero Team.",
  //   "Great job on the project, I really like the way you approached the problem. But try to improve more. Best wishes from Programming Hero Team.",
  //   "Good, you have completed the assignment perfectly, but try to improve more. Best wishes from Programming Hero Team.",
  //   "I appreciate the effort you put into the project, but I noticed that you could improve more. Best wishes from Programming Hero Team.",
  //   "Great job on the project, I really like the way you approached the problem. But try to improve more. Best wishes from Programming Hero Team.",
  // ],
  AVERAGE: [
    `Your participation in "Basic Problem Solving with TypeScript" is commendable, but there's an opportunity for growth. Take this as a learning experience and focus on understanding the concepts better. With consistent practice and seeking assistance when needed, you'll surely see improvement in your performance. Keep up the effort!`,
    `Your involvement in "Basic Problem Solving with TypeScript" is noted, but there's potential for enhancement. Use this as motivation to delve deeper into the material and practice regularly. Don't hesitate to ask for help when facing challenges. With persistence and determination, you'll make significant strides.`,
    `While your engagement in "Basic Problem Solving with TypeScript" is appreciated, there's room for development in your understanding. Take the opportunity to review the concepts and practice more consistently. Remember, progress comes with persistence and a willingness to learn from mistakes.`,
    `Your contribution to "Basic Problem Solving with TypeScript" is valued, although there's space for improvement. Reflect on areas where you struggled and dedicate time to reinforce your understanding. With continuous effort and a proactive approach to learning, you'll enhance your skills over time.`,
    `Thank you for your involvement in "Basic Problem Solving with TypeScript." While there's room for improvement in your performance, don't be discouraged. Take the opportunity to review the material thoroughly and practice regularly. Your commitment to growth will lead to better results.`,
    `Your participation in "Basic Problem Solving with TypeScript" is acknowledged, but there's an opportunity to strengthen your skills further. Use this feedback constructively to identify areas for improvement and dedicate time to practice consistently. Your determination will drive progress.`,
    `We appreciate your effort in "Basic Problem Solving with TypeScript," but there's potential for growth in your performance. Take the time to revisit the concepts and engage in regular practice sessions. Remember, every challenge is an opportunity to learn and improve.`,
    `Your involvement in "Basic Problem Solving with TypeScript" is recognized, although there's room for advancement in your understanding. Focus on mastering the foundational concepts and practicing consistently to reinforce your skills. With perseverance, you'll achieve better results.`,
    `While your commitment to "Basic Problem Solving with TypeScript" is evident, there's an opportunity to improve your performance. Take a proactive approach to address any areas of weakness by seeking additional resources and dedicating focused practice time. Your dedication will yield positive results.`,
  ],
  // AVERAGE: [
  //   "You have tried your best, but I would like to see more effort. Best wishes from Programming Hero Team.",
  //   "Your project is average but I would like to see more effort. Best wishes from Programming Hero Team.",
  //   "You have missed some important requirements. Try to improve more. Best wishes from Programming Hero Team.",
  //   "You've put in effort, but more commitment would truly shine. Best wishes from Programming Hero Team.",
  //   "Average work, but a bit more dedication would make it stand out. Best wishes from Programming Hero Team.",
  //   "There's potential, but it requires more focus and effort to excel. Best wishes from Programming Hero Team.",
  //   "You've made an attempt, but further dedication is needed for improvement. Best wishes from Programming Hero Team.",
  //   "Your work is decent, but a more concentrated effort is required for enhancement. Best wishes from Programming Hero Team.",
  //   "You've tried, but pushing further will yield better results. Best wishes from Programming Hero Team.",
  // ],
  BAD: [
    "We are sorry to say that you need to improve more. Keep up with the latest best practices and try to complete the modules carefully, and try to implement them in your projects. Best wishes from Programming Hero Team.",
    "Your project is below average, and we would like to see more effort and improvement. Keep up with the latest best practices and ensure you fulfill all the requirements. Best wishes from Programming Hero Team.",
    "You have missed some important requirements. Keep up with the latest best practices and try to complete the modules carefully, and try to implement them in your projects. Best wishes from Programming Hero Team.",
    "Your work needs substantial improvement. Focus on best practices and meet all requirements diligently for better outcomes. Best wishes from Programming Hero Team.",
    "Your project is below par; a significant leap is needed. Adhere to best practices and ensure all requirements are met. Best wishes from Programming Hero Team.",
    "Major requirements have been overlooked. Strive for improvement, follow best practices, and implement them meticulously for better projects. Best wishes from Programming Hero Team.",
    "Considerable improvement is needed. Ensure you align with the latest best practices and fulfill all project requirements thoroughly. Best wishes from Programming Hero Team.",
    "Your project falls short. Engage with best practices, fulfill all requirements, and implement them meticulously for better outcomes. Best wishes from Programming Hero Team.",
    "Substantial improvement is necessary. Strive to incorporate the latest best practices and meticulously fulfill all requirements for enhanced project quality. Best wishes from Programming Hero Team.",
  ],
};

function getFeedBack(num) {
  switch (true) {
    case num >= 59:
      return defaultMessage["BEST"][
        Math.floor(Math.random() * defaultMessage["BEST"].length)
      ];

    case num >= 48 && num < 59:
      return defaultMessage["GOOD"][
        Math.floor(Math.random() * defaultMessage["GOOD"].length)
      ];

    case num >= 40 && num < 48:
      return defaultMessage["AVERAGE"][
        Math.floor(Math.random() * defaultMessage["AVERAGE"].length)
      ];

    default:
      return defaultMessage["BAD"][
        Math.floor(Math.random() * defaultMessage["BAD"].length)
      ];
  }
}

// obtainedMark >= 55
//   ? FB_Text.good
//   : obtainedMark >= 50 && obtainedMark < 55
//   ? FB_Text.avarage
//   : obtainedMark >= 50 && obtainedMark < 55;

function insertFeedback() {
  let markToDeduct = 0;

  let feedback = "";
  let index = 1;
  // console.log(loadFeedback)
  for (const section in loadFeedback) {
    feedback +=
      `
    ` + `<strong># ${section}</strong>`;
    for (const req in loadFeedback[section]) {
      const requirement = loadFeedback[section][req];

      console.log("target", loadFeedback[section][req]);
      console.log("target-2", Object.keys(loadFeedback[section][req]).length);

      if (Object.keys(loadFeedback[section][req]).length >= 3) {
        if (!requirement.correct) {
          feedback +=
            `
          ` +
            index +
            ". ";
          feedback += requirement.description;
          feedback += `
          &emsp;<em> → ${
            requirement.error ? requirement.error : "Not Okay"
          }</em>
          `;
          markToDeduct += Number(requirement.number);
        } else {
          let allSubReqOk = true;
          feedback +=
            `
          ` +
            index +
            ". ";
          feedback += requirement.description;

          for (const subReq in loadFeedback[section][req]) {
            if (subReq.includes("sub_req_")) {
              // console.log(subReq, loadFeedback[section][req][subReq]);

              if (!requirement[subReq].correct) {
                feedback += `
                👉 ${requirement[subReq].description} <em> → ${
                  requirement[subReq].error
                    ? requirement[subReq].error
                    : `Not Okay.`
                }</em> `;
                markToDeduct += Number(requirement[subReq].number);
                allSubReqOk = false;
              } else {
                feedback += `
                👉 ${requirement[subReq].description} → ${
                  requirement[subReq].message
                    ? requirement[subReq].message
                    : `Okay.`
                }`;
              }
            }
          }
          if (allSubReqOk) {
            feedback += `
            → ${requirement.message ? requirement.message : `Okay.`}`;
          }
          feedback += `
          `;
        }
      } else {
        feedback +=
          `
          ` +
          index +
          ". ";
        feedback += requirement.description;
        if (requirement.correct) {
          if (requirement.number == 0) {
            // feedback += `দারুন হয়েছে।`;
            feedback += ` - ${
              requirement[subReq]?.message
                ? requirement[subReq].message
                : `Okay.`
            } 
                          `;
          } else {
            feedback += ` - ${
              requirement[subReq]?.message
                ? requirement[subReq].message
                : `Okay.`
            } 
                          `;
          }
        } else {
          if (requirement.number == 0) {
            // feedback += `অপশনাল পার্টটুকু করার চেষ্টা করবেন। তাহলে আপনার প্রজেক্ট অন্যদের তুলনায় আরো ইউনিক হয়ে উঠবে।`;
            feedback += ` 
            &emsp;<em> → ${requirement.error}</em>
                          `;
          } else {
            feedback += ` 
          &emsp;<em> → ${requirement.error}</em>
                          `;
            markToDeduct += Number(requirement.number);
          }
        }
      }
      index++;
    }
  }

  const totalMark =
    Number(document.querySelector(".font-weight-bold.pl-2")?.innerText) || 60;
  let obtainedMark = 0;
  if (totalMark == 60) {
    obtainedMark = 60 - markToDeduct;
  } else if (totalMark == 50) {
    obtainedMark = Math.ceil(50 - (markToDeduct * 50) / 60);
  } else {
    obtainedMark = Math.ceil(30 - markToDeduct / 2);
  }

  // console.log(feedback, markToDeduct, obtainedMark);

  feedback += `
        
<strong>Examiner Feedback:</strong> ${getFeedBack(60 - markToDeduct)}
<br />
<strong>Important Instructions:</strong>
  → Do not post on Facebook, if you have any marks-related issues.
  → Make sure to read all the requirements carefully, If you have any marks-related confusion.
  → If you are confident and If there is a mistake from the examiner's end, give a recheck request.
  → If your recheck reason was not valid, 2 marks will be deducted from your current marks.
<br/>

<strong>Let's Code_ Your Career</strong>
        `;

  const textArea = document.querySelector(".ql-editor p");
  textArea.innerHTML = feedback;

  const markBox = document.getElementById("Mark");
  // markBox.value = obtainedMark;
  const allP = document.getElementsByClassName("markSuggestions");

  for (const p of allP) {
    markBox.parentNode.removeChild(p);
  }

  const markSuggestion = document.createElement("p");
  // markSuggestion.setAttribute("class", "markSuggestions");
  markSuggestion.className = "m-2 w-50 markSuggestions";
  markSuggestion.innerText = `${obtainedMark} ?`;

  markBox.after(markSuggestion);

  // hide all feedback
  showReqToogleBox = !showReqToogleBox;
  showFeedbackReq(true);
}
