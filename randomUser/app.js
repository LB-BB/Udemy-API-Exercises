const url = "https://randomuser.me/api/?results=10";

let output = document.querySelector(".output");
let btn = document.querySelector("button");

const fetchNames = async () => {
  output.innerHTML = "";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = "bad url!";
      throw new Error(message);
    }
    const data = await response.json();
    data.results.forEach((user) => {
      let ima = document.createElement("img");
      ima.setAttribute("src", user.picture.thumbnail);
      let div = document.createElement("div");
      div.appendChild(ima);
      let textDiv = document.createElement("div");
      textDiv.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;

      output.appendChild(div);
      output.appendChild(textDiv);
    });
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", fetchNames);
