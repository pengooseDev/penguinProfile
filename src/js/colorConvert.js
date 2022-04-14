const canvasDiv = document.querySelector(".create-box");
const colorSelector = document.querySelector(".input-color");
const downLoad = document.querySelector(".download-anchor");
const colorInf = document.querySelector(".config-color-title");

let isLoaded = false;

/* 색상 변경 */
const handleColor = () => {
    const colorValue = colorSelector.value;
    canvasDiv.style.background = colorValue;
    colorInf.innerHTML = `Color : ${colorValue}`;
};

colorSelector.addEventListener("input", handleColor);

/* 다운로드 */
const handleDown = async () => {
    let imgURL = "https://i.imgur.com/qEhGoU1.png";
    downloadedImg = new Image();
    downloadedImg.crossOrigin = "Anonymous";
    downloadedImg.addEventListener("load", imageReceived, false);
    downloadedImg.src = imgURL;
};

const imageReceived = async () => {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    console.log(downloadedImg);

    downloadedImg.width = 500;
    downloadedImg.height = 500;

    canvas.width = downloadedImg.width;
    canvas.height = downloadedImg.height;

    context.drawImage(downloadedImg, 0, 0);
    if (!isLoaded) {
        isLoaded = true;
        canvasDiv.appendChild(canvas);
    }
    try {
        const convertedDiv = await new html2canvas(canvasDiv, {
            backgroundColor: "transparent",
            allowTaint: true,
            useCORS: false,
        });
        const url = convertedDiv.toDataURL("image/jpeg");
        console.log(url);
        downloadURI(url, "Pengoose.jpeg");
    } catch (err) {
        console.log("Error: " + err);
    }
};

/*
const convertedDiv = await new html2canvas(canvasDiv, {
    backgroundColor: "transparent",
    allowTaint: true,
    useCORS: false,
});
const url = convertedDiv.toDataURL("image/jpeg");
console.log(url);
downloadURI(url, "Pengoose.jpeg");
};*/

const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
};

/*
//downLoad
const handleDown = async () => {
    const convertedDiv = await new html2canvas(canvasDiv, {
        backgroundColor: "transparent",
        allowTaint: true,
        useCORS: true,
    });
    const url = convertedDiv.toDataURL("image/jpeg");
    console.log(url);
    downloadURI(url, "Pengoose.jpeg");
};

const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
};
*/

downLoad.addEventListener("click", handleDown);
