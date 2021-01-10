
<a href="{{ post.url }}" title="{{ post.title }}">
  <article class="post-card">
    <div class="post-image" style="background-image: url('{{ post.hero_image }}'); background-color: {{ post.hero_color }}"></div>
    <div class="post-card-content">
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h2>{{ post.title}}</h2>
      <p class="font--size-s">{{ post.problem_statement }}</p>
    </div>
  </article>
</a>