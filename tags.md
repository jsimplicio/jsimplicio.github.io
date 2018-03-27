---
layout: default
permalink: /tags
---
<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

<!-- Posts by Tag -->
<main class="wrapper">
  <a class="margin--b-large display--ib" href="/">Return home</a>
  <h1>Tags 🏷</h1>
  <div class="tags--wrapper">
    <table class="tags--table">
      <tbody>
        {% for item in (0..site.tags.size) %}{% unless forloop.last %}
          <tr>
            <td>
              <div class="tag--group tags">
                {% capture this_word %}{{ tag_words[item] }}{% endcapture %}
                <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
                {% for post in site.tags[this_word] %}{% if post.title != null %}
                  <div class="tags--post">
                    <div>
                      <a href="{{ post.url }}">{{ post.title }}</a>
                      <span>
                        {{ post.date | date: "%b %-d, %Y" }}
                      </span>
                    </div>
                  </div>
                {% endif %}{% endfor %}
              </div>
            </td>
          </tr>
        {% endunless %}{% endfor %}
      </tbody>
    </table>
  </div>
</main>
