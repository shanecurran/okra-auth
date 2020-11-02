# Authentication Function

This function will accept an encrypted `username` and `password` parameter and return a JSON body depending on whether the credentials are valid or not.

### Success
```
{
    "status": "success"
}
```

### Failure
```
{
    "status": "failure"
}
```

The function will respond in approx. 5 seconds depending on the performance of the website.