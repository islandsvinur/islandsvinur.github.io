---
layout: post
title: "iSync Plugin for SonyEricsson S500i"
date: 2007-08-16 16:07:31 +0200
---
Alright, got my new phone today, a shiny black [Sony Ericsson
S500i](http://www.sonyericsson.com/spg.jsp?cc=gb&amp;lc=en&amp;ver=4000&amp;template=pip1&amp;zone=pp&amp;pid=10854)
which I chose for the looks, the fact that it's a Sony Ericsson, that it
has Bluetooth and as such could sync with my laptop using iSync.

![This device is not supported by iSync](/image/s500i-not-supported.png){: .center}

iSync however didn't recognize it, because there's no "plugin" for it yet.
Luckily there's a few companies who sell iSync "plugins" to anyone who
needs them at rediculous prices.

Because, if you delve a bit through the iSync package (the
/Applications/iSync.app/ directory), you'll find plugins for quite some
other phones that have been on the market earlier. Since basically the
protocols to exchange items don't change (it's been standardized by
[SyncML](http://en.wikipedia.org/wiki/SyncML)), the only thing that sets a
plugin for one phone apart from that for another phone is the name and a
pretty picture.

So here you have it, an [iSync plugin for the SonyEricsson
S500i](/files/isync-plugin-sonyericsson-s500i.zip). Create a directory in
Library called PhonePlugins if it doesn't already exist and move the
contents of the ZIP file there. Relaunch iSync and you should be able to
add the device.

Please leave a message if you found this page useful! Thank you!

![Double click to add this device...](/image/s500i-supported.png){: .center}
