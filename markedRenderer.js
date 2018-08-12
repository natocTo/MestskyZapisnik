let marked = require("marked");

let renderer = new marked.Renderer();

let originalLinkRenderer = renderer.link;

renderer.link = (href, title, text) => {
  const html = originalLinkRenderer.call(renderer, href, title, text);
  return html.replace(/^<a /, '<a target="_blank" rel="nofollow noopener" ');
};

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
