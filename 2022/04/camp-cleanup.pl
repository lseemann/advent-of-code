#!/usr/bin/perl
use strict;
use warnings;

my $file = 'data.txt';
open my $info, $file or die "Could not open $file: $!";

my $containCount = 0;
my $overlapCount = 0;

sub isContained {
  my $elfAMin = shift;
  my $elfAMax = shift;
  my $elfBMin = shift;
  my $elfBMax = shift;

  if (
    ($elfAMin >= $elfBMin && $elfAMax <= $elfBMax) 
    || ($elfBMin >= $elfAMin && $elfBMax <= $elfAMax)
  ) {
    return 1;
  }

  return 0;
}

sub overlaps {
  my $elfAMin = shift;
  my $elfAMax = shift;
  my $elfBMin = shift;
  my $elfBMax = shift;
  
  if (
    ($elfBMin >= $elfAMin && $elfBMin <= $elfAMax)
    || ($elfBMax >= $elfAMin && $elfBMax <= $elfAMax)
    || ($elfAMin >= $elfBMin && $elfAMin <= $elfBMax)
    || ($elfAMax >= $elfBMin && $elfAMax <= $elfBMax)
  ) {
    return 1;
  }

  return 0;
}

while( my $line = <$info>)  {   
  if ($line) {
    $line =~ s/^\s+|\s+$//g;
    my @elves = split(/,/, $line);
    my @elfA = split(/-/, $elves[0]);
    my @elfB = split(/-/, $elves[1]);
    
    if (isContained(@elfA, @elfB)) {
      $containCount++;
    }
    if (overlaps(@elfA, @elfB)) {
      $overlapCount++;
    }
  }
}

print "Contained: $containCount\n";
print "Overlapped: $overlapCount\n";
