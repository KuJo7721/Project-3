const { AuthenticationError } = require('apollo-server-express');
const { User, Order } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('orders');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('orders');
    },
    orders: async (parent, args) => {
      return Order.find();
    },
    order: async (parent, { orderId }) => {
      return Order.findOne({ _id: orderId });
    },
    me: async (parent, args, context) => {
      console.log (context.user)
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('orders');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password, isadmin: false });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { width, height, price, text }, context) => {
      if (context.user) {
        const order = await Order.create({
          width, height, price, text  
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { orders: order._id } }
        );

        return order;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeOrder: async (parent, { orderId }, context) => {
      if (context.user) {
        const order = await Order.findOneAndDelete({
          _id: orderId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { orders: order._id } }
        );

        return order;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
