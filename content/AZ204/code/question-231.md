// Você desenvolve o seguinte código para armazenar os dados no banco de dados
public void SaveScore(string gameId, string playerId, int score, long timePlayed){
    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
    CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
    CloudTable table = tableClient.GetTableReference("scoreTable");
    table.CreateIfNotExists();

    var scoreRecord = new PlayerScore(gameId, playerId, score, timePlayed);
    TableOperation insertOperation = TableOperation.Insert(scoreRecord);
    table.Execute(insertOperation);
}

// Você desenvolve o seguinte código para buscar no banco de dados
CloudTableClient tableClient = account.CreateCloudTableClient();
CloudTable table = tableClient.GetTableReference("people");
TableQuery<CostumerEntity> query = new TableQuery<CostumerEntity>().Where(TableQuery.CombineFilters(
    TableQuery.GenerateFilterCondition(PartitionKey, QueryComparisons.Equal, "Smith"),
    TableOperators.And, TableQuery.GenerateFilterCondition(Email, QueryComparisons.Equal, "ssmith@gmail.com")
));
await table.ExecuteQuerySegmentedAsync<CostumerEntity>(query, null);