#!/usr/bin/perl -w

my $user = $ENV{USER};

system "cd ".$ENV{WORKSPACE};
system "forever stop app.js";
system "npm install";
system "forever start -w app.js";

print "\nBuild is DONE\n";
return;
