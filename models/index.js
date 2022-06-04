const User = require('./User');
const Clients = require('./Clients');
const Pets = require('./Pets');


User.hasMany(Clients, {
  foreignKey: '',
  onDelete: 'CASCADE'
});

Clients.belongsTo(User, {
  foreignKey: '',
});

Pets.belongsTo(Clients, {
    foreignKey: '',
})

module.exports = { User };
