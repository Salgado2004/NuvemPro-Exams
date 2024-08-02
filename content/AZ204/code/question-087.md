apiVersion: '2024-05-11'
location: northeurope
name: app-instance
properties:
    containers
    - name: app-container
      properties:
        environmentVariables: []
        image: appregistry235236.azurecr.io/ecommerceapp:v2.01
        ports: []
        resources:
            requests:
                cpu: 1.0
                memoryInGB: 1.5
      (1) ___________
        - mountPath: /mnt/secrets
          name: appvolume
    osType: Linux
    restartPolicy: Always
(2) ______________
    - name: appvolume
      secret:
        appstore2982346973: vneiourv2387rgb28o42bg2uefybg2wrgr
tags: {}
type: Microsoft.ContainerInstance/containerGroups