const {Schema} =require("mongoose")
const OrdersSchema=new Schema({
     name: String ,
    qty: Number,
    avg: Number,
    price: Number,
    model:String,
});
module.exports=OrdersSchema