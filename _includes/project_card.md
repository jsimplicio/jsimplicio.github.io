
<a href="{{ post.url }}" title="{{ post.title }}">
  <article class="post-card">
    <div class="post-card-content">
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h2>{{ post.title}}</h2>
    </div>
    <div class="post-arrow">→</div>
  </article>
</a>