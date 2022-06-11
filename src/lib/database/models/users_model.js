const  Model = require('../dbModelConfig');

class Users extends Model {
    static get tableName () {
        return 'users'
    }
}

module.exports = Users;