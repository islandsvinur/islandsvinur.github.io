#!/bin/sh

ROOT=~/Documents/Journal

hobix upgen journal
rsync -vaP $ROOT/static/ $ROOT/htdocs/
find $ROOT/htdocs -name '.DS_Store' | xargs rm -v
find $ROOT/htdocs -name '*.swp' | xargs rm -v

# rm $ROOT/htdocs/index.xml

# rsync -vaP --delete-after $ROOT/htdocs/ sunny.luon.net:Sites/www.luijten.org/
rsync -vaP --delete-after $ROOT/htdocs/ vps1308.directvps.nl:Sites/www.luijten.org/

