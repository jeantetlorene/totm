---
layout: page
title: Nos Projets
lang: fr
permalink: /nosprojets_1/
ref: projects
---

<!-- pages/projects.md -->
<div class="projects">
{% assign project_entries = site.projects %}
{% if project_entries == nil %}
  {% assign project_entries = '' | split: '' %}
{% endif %}
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = project_entries | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid project=project %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid project=project %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = project_entries | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid project=project %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid project=project %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<div id="project-modal" class="team-modal">
  <div class="modal-content">
    <span class="close" id="project-modal-close">&times;</span>
    <div id="project-modal-body"></div>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("project-modal-body");
    const closeBtn = document.getElementById("project-modal-close");
    const notFoundMessage = {{ page.lang == "en" | jsonify }} ? "Project content not found." : "Contenu du projet introuvable.";

    document.querySelectorAll(".project-link[data-url]").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const url = this.dataset.url;
        if (!url) return;

        fetch(url)
          .then((response) => response.text())
          .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const header = doc.querySelector(".post-header");
            const article = doc.querySelector(".post article");

            if (header || article) {
              modalBody.innerHTML = `
                ${header ? header.outerHTML : ""}
                ${article ? article.innerHTML : ""}
              `;
            } else {
              modalBody.innerHTML = `<p>${notFoundMessage}</p>`;
            }

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
          })
          .catch(() => {
            modalBody.innerHTML = `<p>${notFoundMessage}</p>`;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
          });
      });
    });

    closeBtn.onclick = () => {
      modal.style.display = "none";
      modalBody.innerHTML = "";
      document.body.style.overflow = "";
    };

    window.addEventListener("click", (e) => {
      if (e.target === modal) closeBtn.onclick();
    });
  });
</script>
