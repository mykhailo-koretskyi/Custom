#!/usr/bin/perl -w

my $user = $ENV{USER};

system "cd .";
system "forever stop app.js";
system "npm install";
system "npm start";

print "\nBuild is DONE\n";

