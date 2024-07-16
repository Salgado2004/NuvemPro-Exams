var connectionString = "<< CONNECTION STRING FOR THE EVENT HUBS NAMESPACE >>";
var eventHubName = "<< NAME OF THE EVENT HUB >>";
string consumerGroup = EventHubConsumerClient.DefaultConsumerGroupName;
await using (var consumer = new EventHubConsumerClient(consumerGroup, connectionString, eventHubName))
{
  /* Linha 6 */
  /* Linha 7 */
  using var cancellationSource = new CancellationTokenSource();
  cancellationSource.CancelAfter(TimeSpan.FromSeconds(45));
  await foreach (PartitionEvent receivedEvent in consumer.ReadEventsFromPartitionAsync(partitionId, startingPosition, cancellationSource.Token))
  {
    // At this point, the loop will wait for events to be available in the partition. 
    // When an event is available, the loop will iterate with the event that was received.
  }
}