https://app.travis-ci.com/ayorkshireworrall/heroku-react-express-postgres.svg?branch=main

<a href="https://codeclimate.com/github/ayorkshireworrall/heroku-react-express-postgres/maintainability"><img src="https://api.codeclimate.com/v1/badges/4dfa4cdaf5c5d8082555/maintainability" /></a>

This follows a great guide article from 
https://www.smashingmagazine.com/2020/04/express-api-backend-project-postgresql/
This code has implemented a few tweaks to make it work, most likely due to version differences (mine are node 16.13.2, yarn 1.22.0)

provision and expose a local postgres database using docker:
docker run --name express-postgres -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:9

Then create a database schema called express_app and a user called express_app with a password of choosing and modify the CONNECTION_STRING env variable appropriately (e.g "postgresql://dbuser:dbpassword@localhost:5432/dbname")