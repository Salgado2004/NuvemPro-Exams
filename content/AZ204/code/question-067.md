$ResourceGroupName="app-grp"
$Location="North Europe"
$AccountName="appaccount235208"

$Account=New-AzCosmosDBAccount -Name $AccountName -ResourceGroupName $ResourceGroupName -Location $Location -ApiKind Sql

$DatabaseName="appdb"

$Database=New-AzCosmosDBSqlDatabase -ParentObject $Account -Name $DatabaseName

$ContainerName="Products"
$PartitionKey="/code"

New-AzCosmosDBContainer -ParentObject $Database -Name $ContainerName -PartitionKeyKind Hash -PartitionKeyPath $PartitionKey