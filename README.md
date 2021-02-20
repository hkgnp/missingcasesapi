# missingcasesapi

The base url for this API is at: `https://floating-forest-98452.herokuapp.com`

# Endpoints

`POST /report`

To post missing persons' information, use the above endpoint with the following parameters:

```
{
    name: "",
    date: "",
    location: "",
    details: ""
}
```

`GET /reports`

To get the list of missing persons posted to the database, use the above endpoint with the same parameters.

```
{
    name: "",
    date: "",
    location: "",
    details: ""
}
```

`DELETE /report/:postid`

`postid` refers to the MongoDB's ObjectID of the particular post.

# Credits

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Heroku](https://www.heroku.com)
