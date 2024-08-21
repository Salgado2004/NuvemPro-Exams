Host.CreateDefaultBuilder(args).ConfigureWebHOstDefaults(wb =>{
    wb.ConfigureAppConfiguration((hc, config) => {
        var settings = config.Build();
        config.(1) _____________(options => 
        options.Connect(new Uri(settings["AppConfig:Endpoint"]), new (2)_______________()));
    });
})