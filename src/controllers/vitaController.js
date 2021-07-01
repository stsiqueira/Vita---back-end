import mongoose from 'mongoose';
import {FoodSchema, NutrientSchema} from '../models/vitaModel.js';

const Schema = mongoose.Schema;
// const ProductSchema = new Schema({}, { strict: false });

const Food = mongoose.model('Food', FoodSchema, 'Food');
export const getAllFoods = (req,res) => {
    
    Food.find({}, (err, food)=>{
        if(err){
            res.send(err);
        }
        res.json(food);
    });
}
// export const getContactbyID = (req,res) => {
    
//     ItemSchema.findById(req.params.contactID, (err, contact)=>{
//         if(err){
//             res.send(err);
//         }
//         res.json(contact);
//     });
// }
