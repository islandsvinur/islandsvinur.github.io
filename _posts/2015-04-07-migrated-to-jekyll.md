---
layout: post
title: Blog migrated to GitHub Pages and Jekyll
---

A few weeks ago I started migrating the blog off my own VPS into [GitHub
Pages](http://pages.github.com/). At first, I tried
[Octopress](http://www.octopress.org/) which is a set of templates, scripts and
plugins for [Jekyll](http://www.jekyllrb.com/) that make blogging easier on the
platform. I found it to be impractical and inflexible compared to good old
[Hobix](http://hobix.github.io/hobix/), my previous blogging platform.

Then I tried to put the actual Hobix installation in GitHub to basically
achieve the same setup as Octopress. This proved to be even more inconvenient
as trying to install Hobix nowadays is quite the endeavour, since it has not
been maintained for over 5 years now. 

I found it more wise to migrate to a more modern system. So, here we are with
the blog on a vanilla Jekyll installation.

## How to migrate your Hobix blog to Jekyll

Hobix has an API which allows (among others) to export entries out of the
system. However, as I discovered that installing Hobix is no longer an option,
I had to process Hobix\'s entry YAMLs by hand to convert them to Jekyll [YAML
Front Matter](http://jekyllrb.com/docs/frontmatter/).

Below is the script I have been using.

{% gist islandsvinur/f958ff1dc532d43f8a77 migrate.rb %}



