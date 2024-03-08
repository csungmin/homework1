const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

const blockScales = [
  "0.6",
  "0.9",
  "0.7",
  "0.8",
  "0.7",
  "0.6",
  "0.8",
  "0.9",
];

console.log(blockScales);

function createBlocks() {
  // first, remove the example blocks
  containerEl.innerHTML = "";
  console.log("create blocks");

  for (let i = 0; i < 8; i++) {
    let blockEl = `
    <div class="block" style= "background-color: pink; border: 1px solid #D3D3D3; width: ${blockScales[i]*300}px;
    height: ${blockScales[i]*300}px">
    <p>Box Size ${blockScales[i]}</p>
    </div>
    `;
    containerEl.insertAdjacentHTML('beforeend', blockEl);
  }
}

function removeBlocks() {
  console.log("remove blocks");
  containerEl.innerHTML = "";
}

createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);

