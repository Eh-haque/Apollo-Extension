function loadListeners(){
    document.getElementById("import-json-btn")?.addEventListener("change", (e) => {
        // console.log("import");
        var fr = new FileReader();
        fr.onload = function () {
            localStorage.setItem("assignment-data", fr.result);
        };

        fr.readAsText(e.target.files[0]);
    });

    const downloadToFile = (content, filename, contentType) => {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });

        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();

        URL.revokeObjectURL(a.href);
    };

    document.querySelector("#export-json-btn").addEventListener("click", () => {
        // const textArea = document.querySelector("textarea");

        const fileName = prompt("Enter File Name...");

        downloadToFile(localStorage.getItem("assignment-data"), `${fileName}.txt`, "text/plain");
    });



}