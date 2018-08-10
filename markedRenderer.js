let marked = require("marked");

let renderer = new marked.Renderer();

renderer.heading = (text, level) => {
  if (level === 3) return `<h3 class="mb-3 text-black text-2xl">${text}</h3>`;
  if (level === 4) return `<h3 class="mb-3 text-black text-xl">${text}</h4>`;
  return `<h2 class="mb-3 text-black text-3xl">${text}</h2>`;

renderer.paragraph = text => `<p class="mb-4">${text}</p>`;

renderer.table = (header, body) => {
  return `
    <div class="block w-full overflow-x-auto">
      <table class="w-full border-collapse mt-4 mb-8">
        <thead>${header}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
};

module.exports = renderer;
