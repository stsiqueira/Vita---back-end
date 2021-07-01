import {getAllFoods} from '../controllers/vitaController.js'

const routes = (app) => {
    app.route('/getAllFoods')
    .get((req, res, next)=>{
        //middleware
        console.log("Req from:" + req.originalUrl);
        console.log("Req method:" + req.method);
        next();        
    }, getAllFoods)    

    // app.route('/Fruits/:name')
    // //get a specific contact
    // .get(getfruitbyName)  
    
}

export default routes;