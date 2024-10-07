const productdata = require("./constant/productsdata");
const ProductsModel = require("./models/productsSchema");

const DefaultData = async()=>{
    try {
        await ProductsModel.deleteMany({});
        const storeData = await ProductsModel.insertMany(productdata);
        //console.log(storeData);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;