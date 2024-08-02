private SqlConnection  GetConnection(){
    string keyvaultUrl = "https://appvault2626.vault.azure.net/";
    string secretName = "dbconnectionstring";

    var client = new (1) ___________ (new Uri(keyvaultUrl), new (2)_____________());
    var secret = secretClient.GetSecret(secretName);

    string connectionString= secret.Value;
    return new SqlConnection(connectionString);
}