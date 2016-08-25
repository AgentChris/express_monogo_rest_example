# Express Mongodb Restful Api Example

##Get repository

```
    git clone https://github.com/AgentChris/express_monogo_rest_example.git
```
##Start mongodb database

In windows
```
C:\MongoDB\Server\3.2\bin\mongod.exe
```
**Very important this server should be started first and then npm scripts**


##Install dev tools

```
    npm install -g babel-cli nodemon --save-dev
```

##Work in dev mode using

```
    npm run dev
```
_This will start a server on address: localhost:3000, meaning you can write code in es6 (except the import syntax which is not supported by express)_

##Prepare code for production

```
    npm start
```
_This will start put the code in the build folder in es5 to be compatible with all major browsers 

##Test using postman
<a href='https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en'>Postman</a>

Get
<img src='http://i.imgur.com/NdVrDOe.png'/>
![alt tag](http://imgur.com/NdVrDOe)
Post
![alt tag](http://imgur.com/g2BFoAq)
Put
![alt tag](http://imgur.com/x55V4Dk)
Put
![alt tag](http://imgur.com/DQbXlKj)

### API ENDPOINTS
<table>
      <thead>
        <tr>
          <th>Resource URL</th>
          <th>HTTP verb</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>/api/pirates</td>
          <td>GET</td>
          <td>Get all pirates</td>
        </tr>
        <tr>
          <td>/api/pirates/:id</td>
          <td>GET</td>
          <td>Get a single pirate</td>
        </tr>
        <tr>
          <td>/api/pirates</td>
          <td>POST</td>
          <td>Create a new pirate</td>
        </tr>
        <tr>
          <td>/api/pirates/:id</td>
          <td>PUT</td>
          <td>Update a pirate</td>
        </tr>
        <tr>
          <td>/api/pirates/:id</td>
          <td>DELETE</td>
          <td>Delete a pirate</td>
        </tr>
      </tbody>
</table>

### License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).