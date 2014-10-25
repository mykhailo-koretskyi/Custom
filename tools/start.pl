#!/usr/bin/perl -w

my $user = $ENV{USER};

system "cd custom";
system "git pull";
system "forever stopall";
system "npm install";
system "forever start -v -a --minUptime=1000 --spinSleepTime=1000 app.js";

print "\nBuild is DONE\n";

