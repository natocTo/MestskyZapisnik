let marked = require("marked");

let renderer = new marked.Renderer();

renderer.table = (header, body) => {
  return `
    <div class="table-responsive">
      <table>
        <thead>${header}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
};

module.exports = renderer;
