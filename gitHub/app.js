const url =
  "https://api.github.com/search/repositories?q=tetris&sort=stars&order=desc";

const output = document.querySelector(".output");
let btn = document.querySelector("button");

const fetchPosts = async () => {
  output.innerHTML = "";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const message = "bad url!";
      throw new Error(message);
    }
    const data = await response.json();
    console.log(data.items);
    data.items.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `<a href="${item.clone_url}" target="_blank">${item.name} ${item.forks}</a>`;
      output.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", fetchPosts);
