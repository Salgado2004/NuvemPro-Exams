BlobClient blobClient = blobContainterCliente.GetBlobClient(fileName);
Response<BlobDownloadResult> response = await blobClient.DownloadContentAsync();

string blobData = response.Value.Content.ToString();
(1) ________________;
BlobUploadOptions blobUploadOptions = new(){
    Conditions = new BlobRequestConditions(){
        (2) _______________
    }
}