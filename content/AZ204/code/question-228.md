using System;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
namespace SalesOrders {
    public class SalesOrder{
        ...
    }

    internal class ManageSalesOrders{
        private static async Tasks GenerateSalesOrders(){
            IConfigurationRoot configuration = new ConfigurationBuilder().AddJsonFile("appSettings.json").Build();
            string endpoint = configuration["EndpointUrl"];
            string authKey = configuration["AuthorizationKey"];

            using CosmosClient client = new CosmosClient(endpoint, authKey);
            Database db = null;
            using (await client.GetDatabase("SalesOrders").DeleteStreamAsync()) { }
            database = await client.CreateDatabaseIfNotExistsAsync("SalesOrders");
            Container c1 = await database.CreateContainerAsync(id: "Container1", partitionKeyPath: "/AccountNumber");
            Container c2 = await database.CreateContainerAsync(id: "Container2", partitionKeyPath: "/AccountNumber");
            
            SalesOrders so1 = new SalesOrder() { AccountNumber = "259835" };
            SalesOrders so2 = new SalesOrder() { AccountNumber = "349687" };
            SalesOrders so3 = new SalesOrder() { AccountNumber = "120958" };

            await c1.CreateItemAsync(so1, new PartitionKey(so1.AccountNumber));
            await c1.CreateItemAsync(so2, new PartitionKey(so2.AccountNumber));
            await c2.CreateItemAsync(so3, new PartitionKey(so3.AccountNumber));

            _ = await database.CreateUserAsync("User1");
            User user1 = database.GetUser("User1");
            _ = await user1.ReadAsync();
        }
    }
}