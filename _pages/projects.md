---
layout: page
title: Nos Projets
lang: fr
permalink: /nosprojets/
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
    const contactsLabel = "Contacts";
    const partnersLabel = "Partenaires";
    const factsheetLabel = "Fiche initiative";

    document.querySelectorAll(".project-link[data-url]").forEach((link) => {
      const openProject = () => {
        const url = link.dataset.url;
        const projectTitle = link.dataset.title || "";
        const projectContacts = link.dataset.contacts || "";
        const projectPartners = link.dataset.partners || "";
        const projectFactsheet = link.dataset.factsheet || "";
        const projectSecondaryButtonUrl = link.dataset.secondaryButtonUrl || "";
        const projectSecondaryButtonLabel = link.dataset.secondaryButtonLabel || "";
        const projectImg = link.dataset.img || "";
        if (!url) return;

        fetch(url)
          .then((response) => response.text())
          .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const article = doc.querySelector(".post article");

            if (article) {
              const metadata = [];
              if (projectContacts) {
                metadata.push(`
                  <p class="project-modal-meta">
                    <span class="project-modal-label">${contactsLabel}:</span> ${projectContacts}
                  </p>
                `);
              }
              if (projectPartners) {
                metadata.push(`
                  <p class="project-modal-meta">
                    <span class="project-modal-label">${partnersLabel}:</span> ${projectPartners}
                  </p>
                `);
              }

              const actionButtons = [];
              if (projectFactsheet) {
                actionButtons.push(`
                  <a class="btn btn-outline-primary" href="${projectFactsheet}" target="_blank" rel="noopener noreferrer">
                    ${factsheetLabel}
                  </a>
                `);
              }
              if (projectSecondaryButtonUrl && projectSecondaryButtonLabel) {
                actionButtons.push(`
                  <a class="btn btn-outline-primary" href="${projectSecondaryButtonUrl}" target="_blank" rel="noopener noreferrer">
                    ${projectSecondaryButtonLabel}
                  </a>
                `);
              }
              const projectActions = actionButtons.length
                ? `
                  <div class="project-modal-actions">
                    ${actionButtons.join("")}
                  </div>
                `
                : "";

              const bottomImage = projectImg
                ? `
                  <div class="project-modal-image">
                    <img src="${projectImg}" alt="${projectTitle}">
                  </div>
                `
                : "";

              modalBody.innerHTML = `
                <div class="project-modal-header">
                  <div class="project-modal-header-main">
                    <h1 class="project-modal-title">${projectTitle}</h1>
                    ${metadata.join("")}
                    ${projectActions}
                  </div>
                </div>
                ${article ? article.innerHTML : ""}
                ${bottomImage}
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
      };

      link.addEventListener("click", function (e) {
        e.preventDefault();
        openProject();
      });

      link.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProject();
        }
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
