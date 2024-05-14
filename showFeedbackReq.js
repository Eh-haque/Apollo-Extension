function showFeedbackReq(load) {
  const feedbackBox = document.getElementsByClassName("feedback-box p-3 mx-4 box-shadow")[0];

  let text = document.createElement("div");
  text.setAttribute("class", " container cantdupli");
  text.setAttribute("id", "load-feedback");

  if (load) {
    loadFeedback = getLocalStorageData();
  }
  if (!load) {
    feedbackBox.removeChild(feedbackBox.firstChild);
  }
  if (!showReqToogleBox) {
    console.log(showReqToogleBox);
    feedbackBox.removeChild(feedbackBox.firstChild);
  } else {
    // let text;
    if (Object.keys(loadFeedback).length) {
      // text = document.createElement("div");

      for (const box in loadFeedback) {
        let col = document.createElement("div");
        col.setAttribute("class", "row p-2");
        col.innerHTML = `<h4 class="w-100 bg-dark text-light">${box} </h4>`;
        let serial = 1;
        for (const box1 in loadFeedback[box]) {
          let card = document.createElement("div");
          card.setAttribute("class", "card-body border my-1 d-flex flex-wrap");
          col.appendChild(card);
          text.appendChild(col);

          let subReqBox = document.createElement("div");
          subReqBox.classList.add("w-100")
          for (const box2 in loadFeedback[box][box1]) {
            const requirementProperty = loadFeedback[box][box1][box2];
            let list = document.createElement("li");
            let isSub = box2.includes("sub_req_");
            list.setAttribute("class", "list-group-item border-0 p-0");
            list.setAttribute("title", requirementProperty);
            if (box2 == "correct") {
              list.innerHTML = `<input class="form-check-input me-1 mr-1" type="checkbox" id=${
                requirementProperty ? `flexCheckChecked` : `flexCheckDefault`
              } data-checkbox=${`correct-btn_${box}_${box1}_${box2}`} ${
                requirementProperty ? `checked` : ``
              }/> <span class="me-3 mr-3">${box2} : ${requirementProperty}</span>`;
            } else {
              console.log(box, box1, box2)
              if (box2 === "description") {
                list.style.flexGrow = 1;
                list.innerText = serial + ". ";
                list.innerText += requirementProperty.length > 55 ? requirementProperty.slice(0, 55) + "..." : requirementProperty;
                serial++;
              } else if(isSub){
                subReqBox.innerHTML += `
                <div class="ps-3 pl-3 d-flex">
                  <div class="flex-grow-1">${requirementProperty.description}</div>
                  
                  
                  <div><input class="form-check-input me-1" type="checkbox" 
                  id=${requirementProperty.correct ? `flexCheckChecked` : `flexCheckDefault`} 
                  data-checkbox=${`correct-btn_${box}_${box1}_${box2}`} 
                  ${requirementProperty.correct ? `checked` : ``}> <span class="me-3 mr-3">correct: ${
                  requirementProperty.correct
                }</span> </div>
                  <div>Number: ${requirementProperty.number}</div>
                </div>
                `;
              } else if(box2 === "number") {
                list.innerText = box2 + " : " + requirementProperty;
              }
            }
            
            if(!isSub) card.appendChild(list);
            
          }
          card.appendChild(subReqBox)
        }
      }
      const insertBtn = document.createElement("button");
      insertBtn.innerText = "Insert";
      insertBtn.setAttribute("class", "btn btn-info w-100 mx-auto ");
      insertBtn.id = "insertBtn";
      text.appendChild(insertBtn);
    } else {
      text = `<p id="feed-box" class="text-success">FeedBack Not Found</p>`;
    }

    // feedbackBox.insertAdjacentHTML("afterbegin", text);
    // feedbackBox.appendChild(text)
    feedbackBox.insertBefore(text, feedbackBox.firstChild);
  }
}
