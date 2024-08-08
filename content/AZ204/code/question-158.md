CloudBlockBlob src = null;
try {
    src = container.ListBlobs().OfType<CloudBlockBlob>().FirstOrDefault();
    var id = await src.AcquireLeaseAsync(null);
    var dst = container.GetBlockBlobReference(src.Name);
    string cpid = await src.StartCopyAsync(src);
    await dst.FetchAttributeAsync();
    return id;
} catch (Exception e){
    throw;
} finally {
    if (src != null)
    await src.FetchAttributeAsync();
    if (src.Properties.LeaseState != LeaseState.Available)
    await src.BreakLeaseAsync(new TimeSpan(0));
}