const invModel = require("../models/inventoryModel")
const utilities = require("../utilities")

const invCont = {}

/* ***************************
 *  Build vehicles by classification view
 * ************************** */

invCont.buildByClassificationId = async function (req, res, next) {
    const classification_id = req.params.classificationId
    const data = await invModel.getVehiclesByClassificationId(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    console.log(classification_id);
    const className = data[0].classification_name
    res.render("./inventory/classification", {
      title: className + " vehicles",
      nav,
      grid,
    })
}

module.exports = invCont