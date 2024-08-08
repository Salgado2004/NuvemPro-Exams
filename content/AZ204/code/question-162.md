az configure --defaults web=website
az configure --defaults group=website

az appservice plan create --name websitePlan (1) _______________

az webapp create --plan websitePlan (2) ____________________

az webapp config (3) _____________________