const defaultMessage = {
  BEST: [
    "Amazing, your assignment is beautiful. But try to improve more. There will be better things ahead. Best wishes from Programming Hero Team.",
    "Excellent, you have completed the assignment very well. Keep it up. Best wishes from Programming Hero Team.",
    "Great, you have completed the assignment very well. But try to improve more. Keep it up. Best wishes from Programming Hero Team.",
    "Wonderful, you have completed the assignment very well. But try to improve more. Best wishes from Programming Hero Team.",
    "Outstanding work! Your assignment shines, but always room for growth. Keep striving for excellence. Best wishes from Programming Hero Team.",
    "Impressive! You've excelled in this assignment. Keep honing your skills for even greater accomplishments. Best wishes from Programming Hero Team.",
    "Exceptional job! Your assignment is praiseworthy, yet there's always space for enhancement. Keep pushing the boundaries. Best wishes from Programming Hero Team.",
    "Brilliant effort! Your assignment is commendable, but continual improvement is the key. Keep up the fantastic work. Best wishes from Programming Hero Team.",
    "Superb work! Your assignment is top-notch, but there's always more to explore. Keep innovating. Best wishes from Programming Hero Team.",
    "Astounding! Your assignment is a masterpiece, yet the pursuit of improvement is ongoing. Keep reaching for greater heights. Best wishes from Programming Hero Team.",
  ],
  GOOD: [
    "Good, you have completed the assignment perfectly, but try to improve more. Best wishes from Programming Hero Team.",
    "I appreciate the effort you put into the project, but I noticed that you could improve more. Best wishes from Programming Hero Team.",
    "Great job on the project, I really like the way you approached the problem. But try to improve more. Best wishes from Programming Hero Team.",
    "Good, you have completed the assignment perfectly, but try to improve more. Best wishes from Programming Hero Team.",
    "I appreciate the effort you put into the project, but I noticed that you could improve more. Best wishes from Programming Hero Team.",
    "Great job on the project, I really like the way you approached the problem. But try to improve more. Best wishes from Programming Hero Team.",
  ],
  AVERAGE: [
    "You have tried your best, but I would like to see more effort. Best wishes from Programming Hero Team.",
    "Your project is average but I would like to see more effort. Best wishes from Programming Hero Team.",
    "You have missed some important requirements. Try to improve more. Best wishes from Programming Hero Team.",
    "You've put in effort, but more commitment would truly shine. Best wishes from Programming Hero Team.",
    "Average work, but a bit more dedication would make it stand out. Best wishes from Programming Hero Team.",
    "There's potential, but it requires more focus and effort to excel. Best wishes from Programming Hero Team.",
    "You've made an attempt, but further dedication is needed for improvement. Best wishes from Programming Hero Team.",
    "Your work is decent, but a more concentrated effort is required for enhancement. Best wishes from Programming Hero Team.",
    "You've tried, but pushing further will yield better results. Best wishes from Programming Hero Team.",
  ],
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

    case num >= 50 && num < 59:
      return defaultMessage["GOOD"][
        Math.floor(Math.random() * defaultMessage["GOOD"].length)
      ];

    case num >= 40 && num < 50:
      return defaultMessage["AVERAGE"][
        Math.floor(Math.random() * defaultMessage["AVERAGE"].length)
      ];

    default:
      return defaultMessage["BAD"][
        Math.floor(Math.random() * defaultMessage["BAD"].length)
      ];
  }
}

obtainedMark >= 55
  ? FB_Text.good
  : obtainedMark >= 50 && obtainedMark < 55
  ? FB_Text.avarage
  : obtainedMark >= 50 && obtainedMark < 55;

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

      if (Object.keys(loadFeedback[section][req]).length > 4) {
        if (!requirement.correct) {
          feedback +=
            `
` +
            index +
            ". ";
          feedback += requirement.description;
          feedback += `&emsp;<em> → ${requirement.message}</em>
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
              if (!requirement[subReq].correct) {
                feedback += `
                ${requirement[subReq].description} &emsp;<em>→ ${
                  requirement[subReq].message
                    ? requirement[subReq].message
                    : `Not Okay.`
                }</em> `;
                markToDeduct += Number(requirement[subReq].number);
                allSubReqOk = false;
              } else {
                feedback += `
                ${
                  requirement[subReq].description
                    ? requirement[subReq].description + "- Okay."
                    : `Okay.`
                }`;
              }
            }
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
            feedback += ` - Okay. 
                          `;
          } else {
            feedback += ` - Okay. 
                          `;
          }
        } else {
          if (requirement.number == 0) {
            // feedback += `অপশনাল পার্টটুকু করার চেষ্টা করবেন। তাহলে আপনার প্রজেক্ট অন্যদের তুলনায় আরো ইউনিক হয়ে উঠবে।`;
            feedback += ` 
&emsp;<em> → ${requirement.message}</em>
                          `;
          } else {
            feedback += ` 
&emsp;<em> → ${requirement.message}</em>
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

  console.log(feedback, markToDeduct, obtainedMark);

  feedback += `
        
<strong>Examiner Feedback:</strong> ${getFeedBack(obtainedMark)}
<br />
<strong>Important Instructions:</strong>
  → Do not post on Facebook, if you have any marks-related issues.
  → Make sure to read all the requirements carefully, If you have any marks-related confusion.
  → If you are confident and If there is a mistake from the examiner's end, give a recheck request.
  → If your recheck reason was not valid, 2 marks will be deducted from your current marks.
  → Please check the documentation below for more information about how to recheck.
<br/>
<strong>Documentation:</strong>
How to Recheck: https://1drv.ms/b/s!AsHwkj6t2abplhxnqigzCy2IwmLu?e=4JeV37
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
