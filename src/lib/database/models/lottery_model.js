import Knex from 'knex';
import { KnexConfig } from "../../database/knexDbConfig";
import { Model } from "objection";

const knex = Knex(KnexConfig);
Model.knex(knex);


export class BaseModel extends Model {
    $parseDatabaseJson(json) {
      json = super.$parseDatabaseJson(json);
      
      Object.keys(json).forEach(prop => {
        const value = json[prop];
        
        if (value instanceof Date) {
            let dayOfMonth = new Date(value).getDate();
            if ( dayOfMonth < 10 ) { dayOfMonth = '0' + dayOfMonth };
            let getMonth = new Date(value).getMonth() +1;
            if ( getMonth < 10 ) { getMonth = '0' + getMonth };
            const getYear =  new Date(value).getFullYear();
            json[prop] = dayOfMonth + '/' + getMonth + '/' + getYear;           
        //     console.log(json[prop]);
        //   json[prop] = value && new Date(value);

        }
      });
  
      return json;
    }
  }
  

 export class Lottery extends BaseModel {
    static get tableName () {
        return 'asc_order'
    }

    static get jsonSchema () {
        return {
            type: 'object',
            required: ['id'],
            properties: {
                id : { type : 'integer' },
                record_num : { type : 'integer'},
                draw_date : { type : 'date'},
                num1: { type : 'integer' },
                num2: { type : 'integer' },
                num3: { type : 'integer' },
                num4: { type : 'integer' },
                num5: { type : 'integer' },
                num6: { type : 'integer' },
                bonus: { type : 'integer' },
                jackpot : { type : 'integer' },
                wins : { type : 'integer' },
                machine : { type : 'string' },
                ballset : { type : 'integer' }
            }
        }
    }

    //can use this method to add another data field to the returned data, rather than extending the BaseModel
    // $parseDatabaseJson(json) { 
    //     json = super.$parseDatabaseJson(json);
    //     let dayOfMonth = new Date(json.draw_date).getDate()
    //;
    //     if ( dayOfMonth < 10 ) { dayOfMonth = '0' + dayOfMonth };
    //     let getMonth = new Date(json.draw_date).getMonth() +1;
    //     if ( getMonth < 10 ) { getMonth = '0' + getMonth };
    //     const getYear =  new Date(json.draw_date).getFullYear();
    //     json.drawDate = dayOfMonth + '/' + getMonth + '/' + getYear;
    //     return json;
    // }
}


