$source = New-AzScheduledQueryRuleSource -Query 'Heartbeat | where TimeGenerated > ago(1h)' -DataSourceId "ufprFazSistema"

$schedule = New-AzScheduledQuerySchedule -FrequencyInMinutes 60 -TimeWindowInMinutes 60

$triggerCondition = New-AzScheduledQueryRuleTriggerCondition -ThresholdOperator "LessThan" -Threshold 5

$aznsActionGroup = New-AzScheduledQueryRuleAznsActionGroup -ActionGroup "ufprFazSistema" -EmailSubject "Custom email subject" \
-CustomWebhookPayload "{ '"alert'": '"#alertrulename'", '"IncludeSearchResults'":true }"

$alertingAction = New-AzScheduledQueryRuleAlertingAction -AznsAction $aznsActionGroup -Severity 3 -Trigger $triggerCondition

New-AzScheduledQueryRule -ResourceGroupName "ufprFazSistema" -Location "eastus" -Action $alertingAction -Enabled $true \
-Description "Alert description" -Schedule $schedule -Source $source -Name "Alert Name"