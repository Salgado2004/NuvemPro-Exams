var copyOptions = new CopyOptions { };
var context = new _________________ = (source, destination) => Task.FromResult(true);
context.____________ = (source, destination) => Task.FromResult(true);
await TransferManager.CopyAsync(blob, GetDRBlob(blob), isServiceCopy: _______, context: context, options: copyOptions)