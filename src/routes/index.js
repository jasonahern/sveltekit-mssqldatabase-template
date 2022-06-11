//const Lottery = require('../lib/database/models/lottery_model');
import {Lottery} from "../lib/database/models/lottery_model";
export const get = async () => {
        const lottery_data = await Lottery.query();
    return {
        body : {
            lottery_data
        }
    }
}
