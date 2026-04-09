---
layout: page
title: Nos Projets
lang: fr
permalink: /nosprojets_1/
ref: projects
---

<!-- pages/projects.md -->
<div class="projects">
{% assign project_entries = site.projects | where: "lang", page.lang | sort: "importance" %}
{% assign current_projects = project_entries | where: "project_group", "current" %}
{% assign past_projects = project_entries | where: "project_group", "past" %}

{% if current_projects.size > 0 %}
  <h2 class="category">Projets en cours</h2>
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in current_projects %}
      {% include projects.liquid project=project %}
    {% endfor %}
  </div>
{% endif %}

{% if past_projects.size > 0 %}
  <h2 class="category">Anciens projets</h2>
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in past_projects %}
      {% include projects.liquid project=project %}
    {% endfor %}
  </div>
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
    const notFoundMessage = "Contenu du projet introuvable.";

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
