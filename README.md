Easy peasy:

Install Grunt if not installed yet

`npm install -g grunt-cli`

Install dependencies

`npm install`

Run with npm

`npm start`

Query on a browser:

http://localhost:3000/suggestions?q=hea&longitude=-96.69&latitude=30.77

For running tests

`grunt test`

For running a coverage report

`grunt coverage`


Was 3 days / 8 hours enough time? Why or why not.

3 days yes, 8 hours no, there is much setup needed to start a project from scratch, maybe if I'd use
a scaffolding tool like yeoman could've done it in a lot less, but wanted to incude
base setup to prove deep understanding of the technology

● How many hours would you estimate you spend total on the project?
10-12 tops

● Did you encounter any struggles while completing this? How did you overcome them?
First of all, the fact that you don't start a project from scratch everyday, so many of the
initial setup needed to be researched again since I'd forgotten the exact details from the
last time I did it.

The lack of an specific algorithm to calculate the scoring was a tough one but found a good resource
to make a decision from:

http://factually.gizmodo.com/how-precise-is-one-degree-of-longitude-or-latitude-1631241162

Taking into account that a 0.1 degree difference is considered to be the distinction between small cities
I gave it little wider range (0.2) but giving only half a point for ranges higher than (0.1)

If I where on a team working on this I'd probably verify this with the Product Owner and not make assumptions.

The data source server rejects calls when you request JSON encoded data, so you need to request the
data and parse it using JSON.parse() in order to use the JSON


● On a scale of 1-10, rate the complexity of the project (1 being super easy and 10 being the hardest
thing you've ever done)/

I would say this project is a 5, given that some projects I've done in the past have spawn years
of business logic which incredibly increases the complexity of a system.