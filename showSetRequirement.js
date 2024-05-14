function showSetRequirements() {
  const feedbackBox = document.getElementsByClassName("custom-table-component")[0];

  if (!setReqToogleBox) {
    feedbackBox.removeChild(feedbackBox.firstChild);
  } else {
    const text = `<div id="set-req-box" class="container border rounded p-4">
            <button type="button" class="btn btn-success btn-sm" id="add-require-section-btn">Add Section</button>
            <button type="button" id="req-section-hide-btn" class="btn btn-warning btn-sm">Hide Section</button>
            <button type="button" id="show-feedback-btn" class="btn btn-info btn-sm">Show Feedback</button>
            <button type="button" id="clear-feedback-btn" class="btn btn-danger btn-sm">
            Clear Feedback
            </button>
            <button type="button" id="export-json-btn" class="btn btn-light btn-sm ml-5">Export JSON</button>
            
            <div class="d-flex align-items-center mt-4">
                <div>
                <label for="import-json-btn" class="form-label">Import JSON</label>
                <input class="form-control" type="file" id="import-json-btn">
                </div>
                
            </div>



            <div id="section-add" style="display:none">
                <div class="my-2 border rounded border-warning p-2">
                    <div class="form-group">
                    <label for="exampleInputEmail1">Section Name</label>
                    <input type="text" class="form-control" id="section-name" aria-describedby="emailHelp"
                        placeholder="Enter Section Name">
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Number Of Req</label>
                    <input type="number" class="form-control" id="section-numbers" placeholder="Enter Number Of Req">
                    </div>
                    <button class="btn btn-primary btn-sm mt-2" id="add-section-btn">Submit</button>
                </div>
            </div>

            <section id="req-section">

            </section>

            <section id="show-feedback" class="row">

            </section>

            <section id="insert-json-container">

            </section>

        </div>`;

    feedbackBox.insertAdjacentHTML("afterbegin", text);
  }

  document.getElementById("add-require-section-btn").addEventListener("click", () => {
    document.getElementById("section-add").style.display = "block";

    const feedback = document.getElementById("show-feedback");
    feedback.innerHTML = "";
  });

  document.getElementById("req-section-hide-btn").addEventListener("click", () => {
    document.getElementById("section-add").style.display = "none";

    const feedback = document.getElementById("show-feedback");
    feedback.innerHTML = "";
  });

  document.getElementById("show-feedback-btn").addEventListener("click", () => {
    document.getElementById("section-add").style.display = "none";

    const localStorageData = getLocalStorageData();

    const feedback = document.getElementById("show-feedback");

    if (!Object.keys(localStorageData).length) {
      feedback.innerHTML = "";

      const p = document.createElement("p");
      p.setAttribute("class", "text-danger");
      p.innerText = "Not Found";

      feedback.appendChild(p);
    } else {
      feedback.innerHTML = "";

      let dl = document.createElement("dl");
      dl.setAttribute("class", "col")

      for (const data in localStorageData) {

        let dt = document.createElement("dt");
        dt.innerText = "Section: " + data;
        dl.appendChild(dt);
        for (const data1 in localStorageData[data]) {
          // console.log(data1,'-->');
          let dd = document.createElement("dd");
          dd.innerHTML = `<div>
          ----> + ${data1}
          <button class="btn btn-info btn-sm" id="${data1}">add sub req</button>
          </div>`;
          dl.appendChild(dd);
          for (const data2 in localStorageData[data][data1]) {
            // console.log(data2);
            if(data2.includes("sub_req_")){
              dl.append("========Sub req==========")
              for (let data3 in localStorageData[data][data1][data2]) {
                let dd1 = document.createElement("dd");
                dd1.innerText =
                "-------------->" + data3 + " : " + localStorageData[data][data1][data2][data3];
                dl.appendChild(dd1);
              }  
              dl.append("========================")
              dl.appendChild(document.createElement("br"))
            } else {
                let dd1 = document.createElement("dd");
                dd1.innerText = "---------->" + data2 + " : " + localStorageData[data][data1][data2];
                dl.appendChild(dd1);

              }

            const not_sub_req = Object.keys(localStorageData[data][data1]).filter(sdb => !sdb.includes("sub_req"));

            const sub_req = Object.keys(localStorageData[data][data1]).filter(sdb => sdb.includes("sub_req"));

            console.log(not_sub_req, sub_req)

          }
        }
      }
      feedback.appendChild(dl);
      const div = document.createElement("div");
      div.setAttribute("class", "col");
      feedback.appendChild(div);

      for (const data in localStorageData) {
        for (const data1 in localStorageData[data]) {
          document.getElementById(data1).addEventListener("click", () => {
            feedback.lastChild.innerHTML = "";
            const modal = document.createElement("div");
            modal.innerHTML = `
            <p id="sub_req_header">${data}==${data1}</p>

            <input type="text" id="add_sub_req_des" placeholder="description" class="form-control"/><br/>

            <input type="number" id="add_sub_req_num" placeholder="mark" class="form-control"/><br/>

            <button class="btn btn-outline-primary" id="add_sub_req_btn">Add sub requirement</button>
            `
            feedback.lastChild.appendChild(modal)
          })
        }
      }

    }
  });

  document.getElementById("clear-feedback-btn").addEventListener("click", () => {
    const clear = confirm("Are you sure?");

    if (clear) {
      removeLocalStorageData();
      document.getElementById("show-feedback").innerHTML = "";
    }
  });

  document.getElementById("add-section-btn").addEventListener("click", () => {
    let name = document.getElementById("section-name").value.split(" ").join("-");
    let numbers = document.getElementById("section-numbers").value;

    document.getElementById("section-name").value = "";
    document.getElementById("section-numbers").value = "";

    let reqSection = document.getElementById("req-section");

    for (let i = 1; i <= numbers; i++) {
      const addReqBtnNo =
        Math.round(Math.random() * 100000) + "" + Math.round(Math.random() * 10000);

      let box = document.createElement("div");

      let bId = name + "-" + addReqBtnNo;
      let desId = name + "-" + addReqBtnNo + "-description";
      let numId = name + "-" + addReqBtnNo + "-number";

      box.innerHTML = `<div id=${`${bId}`} class="mt-3 border rounded p-4">
            <p>${name} REQ-${i}</p>
            <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <input type="text" class="form-control" id=${`${desId}`} aria-describedby="emailHelp"
                placeholder="Description">
            </div>
            <div class="form-group">
            <label for="exampleInputPassword1">Number</label>
            <input type="number" class="form-control" id=${`${numId}`} placeholder="Enter Number Of Req">
            </div>
            <button class="btn btn-info btn-sm mt-2" id=${`add-req-btn${addReqBtnNo}`} data-name="'${name}'" data-reqnum="'${addReqBtnNo}'" data-box="'${bId}'" data-des="'${desId}'" data-numid="'${numId}'">Submit</button>
        </div>`;

      reqSection.appendChild(box);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target.id.includes("add-req-btn")) {
      // console.log(e.target);
      const sectionName = document.getElementById(e.target.id).dataset.name.replace(/'/g, "");
      const reqNumber = document.getElementById(e.target.id).dataset.reqnum.replace(/'/g, "");
      const boxId = document.getElementById(e.target.id).dataset.box.replace(/'/g, "");
      const descriptionId = document.getElementById(e.target.id).dataset.des.replace(/'/g, "");
      const numberId = document.getElementById(e.target.id).dataset.numid.replace(/'/g, "");

      addReq(sectionName, reqNumber, boxId, descriptionId, numberId);
    }

    /**
     * Sub Req Add Section
     */

    if (e.target.id === "add_sub_req_btn") {
      const objData = document.getElementById("sub_req_header").innerText.split("==");
      const des = document.getElementById("add_sub_req_des").value;
      const number = document.getElementById("add_sub_req_num").value;

      const localStorageData = getLocalStorageData();

      /**
       * localStorageData[objData[0]][objData[1]]
       */

      /**
       * Math.random().toString(36).slice(2)
       */

      if (des && number) {
        localStorageData[objData[0]][objData[1]]['sub_req_' + Math.random().toString(36).slice(2)] = { description: des, correct: true, number };
      }

      setDataLocalStorage(localStorageData, "assignment-data");

    }

  });


}
