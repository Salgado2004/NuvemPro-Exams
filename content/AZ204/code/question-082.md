az container create --resource-group "app-grp" --name secret-app-instance \
--image appregistry36346.azurecr.io/secretapp:latest \
(1) ________________ appstore253463="14i5nio2uv2t9p84ntgifvi_vwer3-2fd=fwergq" \
(2) ________________ /mnt/secrets --registry-username "appregistry36346" \
--registry-password "12345678"