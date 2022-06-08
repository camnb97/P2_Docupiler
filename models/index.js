const User = require('./User');
const Clients = require('./Clients');
const Pets = require('./Pets');


User.hasMany(Clients, {
    foreignKey: 'clients_id',
    onDelete: 'CASCADE'
});

Clients.belongsTo(User, {
    foreignKey: 'clients_id',
});

Pets.belongsTo(Clients, {
    foreignKey: 'clients_id',
})

module.exports = { User, Clients, Pets };
