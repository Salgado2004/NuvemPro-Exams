{
    "routes": [
        {
            "route": "/api/*",
            "methods": ["GET"],
            "allowedRoles": ["authenticated"]
        },
        {
            "route": "/api/*",
            "methods": ["PUT", "POST", "PATCH", "DELETE"],
            "allowedRoles": ["administrator"]
        },
        {
            "route": "/login",
            "redirect": "/.auth/login/github"
        },
        {
            "route": "/.auth/login/twitter",
            "statusCode": 404
        },
        {
            "route": "/logout",
            "redirect": "/.auth/logout"
        }
    ],
    "navigationFallback": {
        "rewrite": "index.html",
        "exclude": ["/images/*.{png,jpg,gif}", "/css/*"]
    },
    "responseOverrides": {
        "400": {
            "rewrite": "/invalid-invitation-error.html"
        },
        "401": {
            "redirect": "/.auth/login/aad",
            "statusCode": 302
        },
        "403": {
            "rewrite": "/forbidden.html"
        },
        "404": {
            "rewrite": "/404.html"
        }
    },
    "mimeTypes": {
        ".json": "text/json"
    }
}