$ResourceGroupName="web-grp"
$AppServicePlanName="ecommercePlan3000"
$AppName="ecommerceApp2020"

(1) _________________ -Name $AppServicePlanName -ResourceGroupName $ResourceGroupName -Tier Standard

(2) _________________ -Name $AppName -ResourceGroupName $ResourceGroupName -Slot "staging"

$gitrepo="https://github.com/Salgado2004/Angular-Ecommerce-UFPR-Faz-Sistema"

$PropertiesObject = @{
    repoUrl= $gitrepo;
    branch = "main";
    isManualIntegration = "true";
}

(3) _______________ -PropertyObject $PropertiesObject -ResourceGroupName $ResourceGroupName
-ResourceType Microsoft.Web/sites/slots/sourcecontrols
-ResourceName $AppName/staging/web -ApiVersion 2024-05-11 -Force