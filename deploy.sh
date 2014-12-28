#!/bin/sh

cd htdocs
git add .
git commit -m "Site update $(date -R)"
git push origin

