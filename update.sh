#!/bin/sh

ROOT=~/islandsvinur.github.io/

hobix upgen journal
rsync -vaP $ROOT/static/ $ROOT/htdocs/
find $ROOT/htdocs -name '.DS_Store' -delete
find $ROOT/htdocs -name '*.swp' -delete

# rm $ROOT/htdocs/index.xml

# rsync -vaP --delete-after $ROOT/htdocs/ sunny.luon.net:Sites/www.luijten.org/
rsync -vaP --delete-after $ROOT/htdocs/ ~/Sites/www.luijten.org/

