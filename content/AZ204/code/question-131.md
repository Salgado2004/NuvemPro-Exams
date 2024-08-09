$gitrepo="https://github.com/Salgado2004/Angular-Ecommerce-UFPR-Faz-Sistema",
$webappname="EcommerceUFPRFazSistema"
$location="WestUS2"

(1) ___________________ -Name myResourceGroup -Location $location

(2) ___________________ -Name $webappname -Location $location -ResourceGroupName myResourceGroup -Tier Standard

(3) ___________________ -Name $webappname -Location $location -AppServicePlan $webappname -ResourceGroupName myResourceGroup

(4) ___________________ -Name $webappname -ResourceGroupName myResourceGroup -Slot review

$PropertiesObject =@{repoUrl = "$gitrepo"; branch = "master";}

Set-AzResource -PropertyObject $PropertiesObject -ResourceGroupName myResourceGroup -ResourceType Microsoft.Web/sites/slots/sourcecontrols \
-ResourceName $webappname/review/web -ApiVersion 2024-05-11 -Force Switch-AzWebAppSlot -Name $webappname -ResourceGroupName myResourceGroup \
-SourceSlotName review -DestinationSlotName production