# github-oauth-example-express

An example of how to authorise with [Github's OAuth2 flow](https://developer.github.com/v3/oauth/).

The same as [this repo](https://github.com/mantagen/github-oauth-example), but ported to [Express](https://github.com/expressjs).

## Set up

### Register with GH

Run the following commands.

```sh
git clone https://github.com/mantagen/github-oauth-example-express
cd github-oauth-example-express
npm install
```

On github, go to Settings > Developer settings > OAuth applications.
For your application url use http://localhost:3000, and as your callback url,
use http://localhost:3000/welcome.
Create a `config.env` file, and store in it your `CLIENT_ID`, `CLIENT_SECRET`
, and `BASE_URL` like so:
```
BASE_URL=http://localhost:3000
CLIENT_ID=<insert client_id here>
CLIENT_SECRET=<insert client_secret here>
```

Then, to start, run:
```
npm run dev
```
