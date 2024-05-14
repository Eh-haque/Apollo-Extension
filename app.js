let setReqToogleBox = false;
let showReqToogleBox = false;

let loadFeedback = getLocalStorageData();

document.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key == "|") {
        setReqToogleBox = !setReqToogleBox;

        showSetRequirements();
        loadListeners();
    }

    if (e.key == "]") {
        // showReqToogleBox = !showReqToogleBox;
        showReqToogleBox = true;
        showFeedbackReq(true);

    }
    // if (e.key == "1" && document.location.href.includes("instructor-dashboard")) {
    //     fullMarkWithOptional();
    // }
    // if (e.key == "2" && document.location.href.includes("instructor-dashboard")) {
    //     fullMarkWithOutOptional();
    // }


});


function getLocalStorageData() {
  let getData = localStorage.getItem("assignment-data");
  let data = {};
  if (getData) {
    data = JSON.parse(getData);
  }
  return data;
}



document.addEventListener("click", function (e) {
    // console.log(e.target.dataset.checkbox);
    const obj = e.target?.dataset?.checkbox?.split("_");

    if (obj != undefined) {
        const box = obj[1];
        const box1 = obj[2];
        const box2 = obj[3];
        const subReqId = `${obj[3]}_${obj[4]}_${obj[5]}`
        console.log(e.target)
        if(e.target?.dataset?.checkbox?.includes("sub_req_")){
            loadFeedback[box][box1][subReqId].correct = !loadFeedback[box][box1][subReqId].correct;
        } else {
            loadFeedback[box][box1][box2] = !loadFeedback[box][box1][box2];
        }


        showFeedbackReq(false);

        // console.log(loadFeedback[box][box1][box2]);
    }

    if (e.target.id === "insertBtn") {
        insertFeedback();
    }


});





// const detectES6 = () => {
//     const code = document.querySelector(
//         "table.highlight.tab-size.js-file-line-container.js-code-nav-container.js-tagsearch-file"
//     );
//     if (code) {
//         code.innerHTML = code.innerHTML?.replaceAll(
//             /(\<span class="pl-c1"\>=&gt;\<\/span\>)/gi,
//             "<span style='background: #21262f; color: white; font-size: 1rem;'>$1</span>"
//         );
//         code.innerHTML = code.innerHTML?.replaceAll(
//             /(\<span class="pl-c1"\>===\<\/span>)/gi,
//             "<span style='background: #21262f; color: white; font-size: 1rem;'>$1</span>"
//         );
//     }
// }