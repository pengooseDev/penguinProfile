const canvasDiv = document.querySelector(".create-box");
const colorSelector = document.querySelector(".input-color");
const downLoad = document.querySelector(".download-anchor");
const colorInf = document.querySelector(".config-color-title");

/* 색상 변경 */
const handleColor = () => {
    const colorValue = colorSelector.value;
    canvasDiv.style.background = colorValue;
    colorInf.innerHTML = `Color : ${colorValue}`;
};

colorSelector.addEventListener("input", handleColor);

/* 다운로드 */
const handleDown = async () => {
    const convertedDiv = await html2canvas(canvasDiv);
    const url = convertedDiv.toDataURL("image/jpeg");
    console.log(url);
};

const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
};

downLoad.addEventListener("click", handleDown);
