function validateItem(){
    var context = getContext();
    var request = (1) _______________;
    
    var item = request.getBody();

    if(!("rating" in item)){
        item["rating"]=0;
    }
    (2) ______________;
}