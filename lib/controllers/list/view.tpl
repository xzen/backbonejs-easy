<div class="list">
  <ul>
    <% for (var i = 0, len = Object.keys(locals).length; i < len; i += 1) { %>
    <li><%- locals[i].name %></li>
    <% } %>
  </ul>
</div>
