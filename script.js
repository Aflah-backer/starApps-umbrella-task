let logoData;
let data = {
  pink: "./asset/Pink umbrella.png",
  blue: "./asset/Blue umbrella.png",
  yellow: "./asset/Yello umbrella.png",
};
let datas = [
  {
    id: "pink",
    color: "#eb1583",
    border: "#f7beeb",
    bgColor: "#faf2fa",
    link: "./asset/Pink umbrella.png",
  },
  {
    id: "blue",
    color: "#43a3e8",
    border: "#a3b7f7",
    bgColor: "#e6f3fc",
    link: "./asset/Blue umbrella.png",
  },
  {
    id: "yellow",
    color: "#cfc817",
    border: "#edf55b",
    bgColor: "#fafaf2",
    link: "./asset/Yello umbrella.png",
  },
];

(() => {
  let btnBlock = document.getElementById("btnBox");
  let btns = buildButtons();
})();

function buildButtons() {
  let btnBlock = document.getElementById("btnBox");
  for (let i = 0; i < datas.length; i++) {
    let item = datas[i];
    let btn = document.createElement("button");
    btn.id = item["id"];
    btn.setAttribute("onclick", `handleClick(` + JSON.stringify(item) + `)`);
    btn.style = `background-color: ${item.color}; width:25px; height:25px; border-radius: 5rem; border:solid 3px ${item.border}; `;
    btnBlock.appendChild(btn);
  }
  for (const data in datas) {
  }

  let btns = datas.map(
    (item) =>
      `<button key = ${item.id}
            class="childBtn pink"
            style= 'background-color: ${item.color} '

            onclick='handleClick(` +
      JSON.stringify(item) +
      `)'
          ></button>`
  );
}

function handleClick(item) {
  let a = JSON.stringify(item);
  let umbrella = document.getElementById("umbrella");
  let logo = document.getElementById("image");
  let loadingLogo = document.getElementById("loading");
  let loader = document.getElementById("loader");
  let childBg = document.getElementById("childBg");
  let btnLogo = document.getElementById("btnLogo");
  let uploadIcon = document.getElementById("uploadIcon");
  let btnLoading = document.getElementById("btnLoading");
  let file = document.getElementById("file");

  console.log(file.value, "hello");
  childBg.style = `background-color: ${item.bgColor}`;
  loader.style = `fill: ${item.color}`;
  btnLogo.style = `background-color: ${item.color}`;
  logo.classList.add("hide");
  umbrella.classList.add("hide");
  loadingLogo.classList.remove("hide");

  setTimeout(() => {
    const imgDiv = document.getElementById("imgBox");
    const imgLink = item.link;
    if (logoData !== undefined) {
      logo.src = logoData;
    }
    umbrella.src = imgLink;

    logo.classList.remove("hide");
    umbrella.classList.remove("hide");
    loadingLogo.classList.add("hide");
  }, 1500);
}

const file = document.querySelector("#file");
file.addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    uploadIcon.classList.add("hide");
    btnLoading.classList.remove("hide");
    setTimeout(() => {
      logoData = reader.result;
      document.getElementById("image").src = reader.result;
      let a = document.getElementById("file").value;
      console.log(a.split("\\").pop()); 
      document.getElementById("uploadText").innerText = a.split("\\").pop() 

      uploadIcon.classList.remove("hide");
      btnLoading.classList.add("hide");
    }, 2000);
  });

  reader.readAsDataURL(this.files[0]);
});
