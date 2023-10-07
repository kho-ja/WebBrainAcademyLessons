let btnsContainer = document.querySelector("#btns");

function displayBtns(n = 0) {
  btnsContainer.innerHTML = "";
  let nums = Array(100)
    .fill(1)
    .map((v, i) => v + i);

  for (let i = 0; i < nums.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = nums[i] % n === 0 ? "*" : nums[i];
    btn.onclick = () => {
      displayBtns(i + 1);
    };
    btnsContainer.append(btn);
  }
}

displayBtns();
