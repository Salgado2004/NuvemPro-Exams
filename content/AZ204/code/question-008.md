{
  "rules": [
    {
       "name": "agingRule",
      "enabled": true,
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": [ "blockBlob" ],
          "prefixMatch": [ "sample-container/blob1" ]
        },
        "actions": {
          "baseBlob": {
            /* Linha 14 */
           }
        }
      }
    }
  ]
}