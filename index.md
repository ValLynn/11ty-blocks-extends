---
sitename: Pod Bay Door Pluggers
title:  Plugging Away on Eleventy
subtitle: Open the Pod Bay Door Eleventy.
metadescription: Using Extends and Blocks with Front Matter in Eleventy.
author: Valerie Lynn
metakeywords: eleventy,eleventy blocks,using extends and blocks with eleventy, ,.
permalink:  index.html
---
{% extends "singlepagelayout.njk" %}

{% block introduction %}
Well hello. Here we are starting out with Eleventy. And what are we doing? We're diving right in, that's what!
{% endblock %}

{% block maincontenttext %}

## Coding / Development Set Up 

You'd been out of web development for so long, you didn't know where to start. You knew you needed some resources, so you began curating lists on a Trello Board. You couldn't figure our how to get your 2011 vintage iMac to run the version of Node Eleventy required and this was really frustrating. Maybe you would not be able to learn Eleventy! You were lost.  You looked at your Macbook Pro and shook your head. Tiny little screen: yuck. But portable: Yay! 

You thought an M1 iMac would help but that came with its own set of problems. You'd need a monitor because you wouldn't be able to use your vintage iMac as a monitor.  You said, "Stuff it!" and decided your old Macbook Pro was gonna have to do for now. And then you asked Twitter for the newbiest kind of newbie help. 

## Getting Your Feet Wet

The Eleventy gods spoke from on high, "Read Tatiana Mac," they offered. Ahhh, yes.  Here is help for the newbiest of newbies! Tatiana Mac's Eleventy Tutorial got your dev environment set up and got your feet wet.  Now you needed more. You found RP Hunt's Tutorial and created your first Eleventy test files.  Blindly you followed, trusting in The Force. 

## Making Your First Real Template

It was after this that you sat out a few days.  Your brain was mush and you needed to think.  You knew from The Wayback A Long Time Ago, you could use Fourth World System's trusted WebMerge - but this was not sustainable going forward. You needed a modern static site generator, one that bent to your will, one that made work flow fun or at least not painful.

All that cogitation did you good because you came back strong with a nice initial port of one of the pages of your website  If only you could make it just a wee bit easier to build, you could port the entire site!  But wait!

## Hey, There's Gonna Be a Eleventy Meetup!              

Twitter... a time suck of epic proportion as you seek the signal in a sea of noise. But wait... there's gonna be an Eleventy Meetup!  Off on the Meetup tangent you went and on to the Discord Server. (Discord... a new name for IRC, but that is another digression.) 

Your learning started to pick up here because other people were asking techy kind of questions and getting answers, so you asked yours and guess what! @Pfeffermuhle pointed you in the right direction with extends and blocks! Down the rabbit hole you went.  But then you got stuck.  Somehow you learned about Discussions on Github - and Eleventy had LOTS of those.  So you started reading...

## Asking questions on Eleventy's Github
Yep. You asked a question.  And then needed more sleep.  When you woke up in the morning, @pdehaan had an answer, that led to more questions, and more learning and... Push, push, push through The Tunnel of Darkness; the light is soooo close! And VOILA! The work flow you wanted is in place.  It is a miracle! You've crossed over to Eleventy! You made it!
{% endblock %}
