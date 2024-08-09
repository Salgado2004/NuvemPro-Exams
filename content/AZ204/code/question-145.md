[FunctionName("Vote")]
public static async Task<HttpResponseMessage> Run([HttpTrigger("POST", Route = "pic/{id}")] HttpRequestMessage req, (1)________________ c, string id){
    var eid = new EntityId("pic", id);
    await c.(2)______________(eid, "vote");
    return req.CreateResponse(HttpStatusCode.OK);
}