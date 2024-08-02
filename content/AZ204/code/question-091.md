{
    "indexingMode": "consistent",
    "automatic": true,
    "includedPaths": [
        {
            "path": "/*"
        }
    ],
    "excludedPaths": [
        {
            "path": "/\"_etag\"/?"
        }
    ],
    (1) ________________ :[
        [
            {
                (2) __________ : "/rating",
                "order": "ascending"
            },
            {
                (2) __________ : "/code",
                "order": "ascending"
            }
        ]
    ]
}