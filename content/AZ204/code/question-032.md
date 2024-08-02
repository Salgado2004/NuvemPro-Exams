BlobSasBuilder sasBuilder = new BlobSasBuilder(){ BlobContainerName = containerClient.Name, _________________ };
sasBuilder.ExpiresOn = DateTimeOffset.UtcNow.AddHours(1);
sasBuilder.SetPermissions(______________________);
Uri sasUri = containerClient.GenerateSasUri(sasBuilder);