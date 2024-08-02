{
    (1) _________________:[
        {
            "route": "/*",
            "allowedRoles": ["authenticated"]
        }
    ],
    (2) __________________: {
        "401": {
            "statusCode": 302,
            "redirect": "/.auth/login/aad"
        }
    }
}