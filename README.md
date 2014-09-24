#Listify

The flipboard of lists!

Listify is an application that provides lists of intersting information right at your fingertips. You have the ability to see a preview of the contents before delving into the list, giving you all of the control. Try out our beautiful, seamless app and start consuming all the lists!

####Team
- [Jimmy Jea](github.com/jimjea)
- [Samantha Puth](github.com/sputh)

##Table of Contents
1. Dependencies
..* Installing dependencies
2. API Documentation
3. Cronjobs/database update schedule




##API DOCUMENTATION
___
###**Weekly NFL Schedule**

####URL Endpoint: /nfl

####GET weekly NFL schedule
Pulled from [sportsdatallc](http://www.sportsdatallc.com/)

What you'll find in the json object:
- id: unique id for each game
- date: date of the game
- hometeam: the home team
- awayteam: the away team
- channel: broadcast channel of the game


###**Weekly NCAA Football Schedule**

####URL Endpoint: /ncaaf

####GET weekly NCAA Football schedule
Pulled from [sportsdatallc](http://www.sportsdatallc.com/)

What you'll find in the json object:
- id: unique id for each game
- date: date of the game
- hometeam: the home team
- awayteam: the away team
- channel: broadcast channel of the game


###**Daily MLB Standings**

####URL Endpoint: /mlb

####GET daily MLB standings
Based off [sportsdatallc](http://www.sportsdatallc.com/)

What you'll find in the json object:
- id: unique id for each team
- date: date of the current day
- league: NL/AL league
- division: central, west, east division
- team: team name
- wins: # wins
- losses: # losses
- gamesbehind: # games behind for playoff contention

##Cronjobs and Frequency of Database Update
___
###**NFL Schedule**

Updated every Tuesday at 2am

###**NCAA Football Schedule**

Updated every Monday at 2am

###**MLB Standings**

Updated everyday at 2am
