az provider register -n Microsoft.KeyVault

resourcegroup="myresourcegroup"
az group create -n $resourcegroup --location eastus

keyvault_name=myvault$RANDOM
az (1) _____________ create -n $keyvault_name --resource-group $resourcegroup --location eastus --enabled-for-disk-encryption True

az (2) _____________ create --vault-name $keyvault_name --name Name1 --protection software

az (3) _____________ create --resource-group $resourcegroup --name Name2 --image Canonical:UbuntuServer:16.04-LTS:latest \
--admin-username azureuser --generate-ssh-keys --data-disk-sizes-gb 5

az (4) _____________ enable --resource-group $resourcegroup --name Name2 --disk-encryption-keyvault $keyvault_name \
--key-encryption-key Name1 --volume-type all