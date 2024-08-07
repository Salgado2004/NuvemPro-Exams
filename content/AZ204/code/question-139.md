[FunctionName("App")]
public static async Task<List<string>> RunOrchestrator([OrchestrationTrigger] IDurableOrchestrationContext context){
    EntityId[] input = [...]
    int errIndex = (1) _________________;
}

using (var client = new HttpClient()){
    while(true){
        var response = await client.GetAsync("...");
        reponse.EnsureSuccessStatusCode();
        var json = await response.Content.ReadAsStringAsync();
        dynamic result = JsonConvert.DeserializeObject(json);
        if(result.runtimeStatus == "(2) _________________"){
            return result.(3) ________________;
        }
    }
}