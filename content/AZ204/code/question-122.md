gitrepo = https://github.com/Salgado2004/CLI-Playground
webappname = cliPlayground
resourcegroupname = cliPlayground

az (1) _____________ create --location centralus --name $resourcegroupname

az (2) _____________ create --name $webappname --resource-group $resourcegroupname --sku S3

az (3) _____________ create --name $webappname --resource-group $resourcegroupname --plan $webappname

az (4) _____________ create --name $webappname --resource-group $resourcegroupname --slot staging

az (5) _____________ config --name $webappname --resource-group $resourcegroupname --slot staging \
--repo-url $gitrepo --branch master --manual-integration