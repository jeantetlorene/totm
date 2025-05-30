---
layout: page
title: Programme Initiatives TOTM
permalink: /nosinitiatives/
description: Un programme de conservation transocéanique

nav: true
nav_order: 2
display_categories: [work, fun]
horizontal: false
---

La collaboration de tous les experts de TOTM a conduit à l’élaboration du programme “Initiatives TOTM” initié en 2021, grâce au soutien du Ministère de la Transition Ecologique (MTE). Ce programme propose un large éventail d’initiatives visant à répondre aux priorités établies par les experts et portées par l’association TOTM dans le cadre de neuf thématiques répondant aux enjeux actuels. Leurs objectifs sont souvent complémentaires voire interdépendants, à l’image des enjeux de conservation des tortues marines.

Ces initiatives sont destinées à s’inscrire dans les plans d’actions locaux et les stratégies internationales, sans s’y substituer. Par ses actions, le programme vise à activer les synergies possibles entre les différents territoires, en capitalisant sur leurs expériences respectives. Il a par ailleurs vocation à donner une dimension nationale, voire internationale, aux initiatives locales déjà mises en œuvre. Son contenu est amené à évoluer selon un cycle triennal, celui des colloques nationaux du GTMF, tout en s’adaptant aux défis émergents

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
