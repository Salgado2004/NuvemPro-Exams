{
    "rules": [
        {
            "name": "versionRule",
            "enabled": true,
            "type": "Lifecycle",
            "definition": {
                "actions": {
                    "version": {
                        "tierToCool": {
                            "daysAfterCreationGreaterThan": 60
                        },
                        "delete": {
                            "daysAfterCreationGreaterThan": 365
                        }
                    }
                },
                "filters": {
                    "blobTypes": ["blockBlob"], "prefixMatch": ["transactions"]
                }
            }
        }
    ]
}