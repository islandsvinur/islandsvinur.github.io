---
layout: post
title: "Rendezvous is hip!"
date: 2004-10-30 10:31:34 +0200
---

I have a laptop functioning as my mail and printer server. Of course it would
be cool to be able to print directly from OS X instead of making a PostScript
and then scp'ing it to the laptop.

Well, Apple has been busy supporting a very functional print system known as
CUPS (Common Unix Printing System). Linux (and other Unix) users have been
converting their systems from the old lpr-style daemons to this new system and
printers are supporting IPP (Internet Printing Protocol). No reason for Apple
to not convert their apparantly broken printing system of OS X 10.1 (I don't
know, but I've read a lot of bad things about it) to the modern CUPS.

So, with CUPS in place, I can easily print on my laptop... Or so I thought...
Of course, I can go and edit the ``/etc/cups/printers.conf`` file myself, but
that would be no fun. No, it should work the Mac-way: Everything automatically
configured with a single click.

The answer to this is Rendezvous (or OpenTalk nowadays). Rendezvous is Apple's
implementation of the DNS-SD (DNS Service Discovery) protocol, used for
announcing services on remote machines to your machine. It works only on the
local network, since it uses a multicast link local address (IPv4) which cannot
go through routers.

I installed Apple's mDNSResponder from their [Rendezvous Developer Web Site](http://developer.apple.com/macosx/rendezvous/) and configured it so that my printer would be announced.

    Printer HP LaserJet 4M
    _ipp._tcp.
    txtvers=1_Arp=printers/LaserJet-4M_Aproduct=(LaserJet 4)^Apdl=application/postscript
    631

Now I start the responder, start an application I'd like to print from, select
Print..., select Printer HP LaserJet 4M from the list, it is added
automatically and I can press the Print button!

Too bad this whole configuring has taken me a few days to figure out what
software to use, what exactly should go where and then adding the printer is so
fast... Since now my only other computer is already configured, the responder
is a bit useless (not completely, it is also used to keep the printer in the
list) so I am exploring new possibilities of Rendezvous like announcing a
WebDAV server or a remote iTunes Library.

Oh, and apparantly there is a bug in Howl mDNSResponder by Scott Herscher,
which announces an incorrect DNS TXT record. I'll have to mail him about that.
I mailed to the rendezvous-dev list of Apple and Marc Krochmail of Apple was
very helpful in detecting my problem.

> Update: In the meantime, a much better implementation of mDNS has emerged,
> called [Avahi](http://avahi.org/).
