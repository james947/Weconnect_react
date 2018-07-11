 [![Build Status](https://travis-ci.org/james947/Weconnect_react.svg?branch=develop&service=github)](https://travis-ci.org/james947/Weconnect_react)
[![Coverage Status](https://coveralls.io/repos/github/james947/Weconnect_react/badge.svg?branch=ft-implement-actions-and-components-tests-158894959&service=github)](https://coveralls.io/github/james947/Weconnect_react?branch=ft-implement-actions-and-components-tests-158894959)
[![Maintainability](https://api.codeclimate.com/v1/badges/27715c28b1951e349d86/maintainability)](https://codeclimate.com/github/james947/Weconnect_react/maintainability)
![Imgur](https://i.imgur.com/makfWLG.png)
![Imgur](https://i.imgur.com/hJqRcaM.png)

WeConnect_react
---
WeConnect is a web application for the WeConnect API. This platform connects business owners and customers by enabling the owners of businesses to post their businesses and making it available to the customers.

 Application Features
---
 
 A user can be able to perform the following once the application is ready:

 * Register and login
 * create a business
 * view the business they have created
 * edit and update the business.
 * delete the businesss created.
 * add review to another business


Prerequisites
---
To run the application you can use the following tested browsers:
* Chrome
* Safari - mac osx users
* Mozila

 **Running app**
 * use `npm run start` 


Browser Enpoints
---
```
1. Users 
- register Creates user account
- login Log in user
- logout Logout user
- reset-password Resets user password

2. Businesses
-  POSTbusinesses Register new business
-  GETbusinesses List all available businesses
-  PUTbusinesses/<business_id> Update business 
-  DELETEbusinesses/<business_id> Remove business

3. Reviews
-  POST businesses/<business_id>/reviews Review a business
-  GET businesses/<business_id>/reviews Get business' reviews

4. Pagination and Limit
-  POST businesses Add new business
-  GET businesses?page=?&limit=?

5. Filter by category or location
-  POST businesses Post a business
-  GET businesses?category=?&location=? add category and location

6. Search Business
-  POST businesses Add new business
-  GET businesses?q=? Add business of choice

```



 **Technologies used to build the application**

 * [Reactjs](https://reactjs.org/docs/hello-world.html) [Here](https://reactjs.org/tutorial/tutorial.html) is a good place to get started with react

 * Uses [create_react_app](https://github.com/facebook/create-react-app) to scaffold the initial structure

 * [Redux](https://redux.js.org/) is a good place to get started with redux

 **Running tests**
 * use `npm run test` to run all the tests

 Documentation
---
[Click! to access the docs](https://app.apiary.io/weconnect13/editor)

Versioning
---
- Version 0.0.1

Contributing
---
- Contributing to the development of this app is allowed just fork it!!!
  do changes and create a pull request...

Authors
---
* James Muriuki

Acknowledgments
---
1. Andela kenya