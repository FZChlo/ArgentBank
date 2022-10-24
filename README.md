# MoneyBank

MoneyBank is a completely free app that makes managing your bank account easy. Our simple, user friendly design ensures that you are able to access your information anytime, anywhere.

## Dependencies

**Client:** React, Redux

**Server:** Node.js

**Database:** MongoDB

## Installation

**Install MoneyBank**

```bash
  git clone https://github.com/FZChlo/ArgentBank.git
  npm install
  cd api
  npm install
```

**Run database locally**

MoneyBank API uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

**Database populate**

For demonstration needs, we have created a populate data script.

Once you have installed node modules, you can create two user with this command :

```bash
# Populate database with two users
npm run populate-db
```

## Run Locally

**Run the front-end**

You need to be on the root file of the application (/ArgentBank).

```bash
  npm start
```

**Run the API**

If you want to test the application, please be sure you have run the populate database script first.

```bash
  cd api
  npm run dev:server
```
