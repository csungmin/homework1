const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");


const blockScales = [
  "0.6",
  "0.7",
  "0.8",
  "0.9",
];

function generateBlockScales() {
  const blockScales = [];
  for (let i = 0; i < 8; i++) {
    const randomScale = Math.random() * (0.9 - 0.6) *200;
    blockScales.push(randomScale);
  }
  return blockScales;
}


console.log(blockScales);

function createBlocks() {
  // first, remove the example blocks
  containerEl.innerHTML = "";
  console.log("create blocks");

  const blockScales = generateBlockScales();

  for (let i = 0; i < 8; i++) {
    let blockEl = `
    <div class="block" style= "background-color: pink; border: 1px solid #D3D3D3; width: ${blockScales[i]*10}px;
    height: ${blockScales[i]*10}px">
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

