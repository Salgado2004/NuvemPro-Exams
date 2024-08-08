resourceGroupName=`airlineResourceGroup`
name=`docdb-airline-reservations`
databaseName=`docdb-tickets-database`
collectionName=`docdb-tickets-colletion`
consistencyLevel=(1)___________________

az cosmosdb create --name $name (2) ________________ --resource-group $resourceGroupName  --max-interval 5 --locations 'southcentralus=0 eastus=1 westus=2'  --default-consistency-level = $consistencyLevel