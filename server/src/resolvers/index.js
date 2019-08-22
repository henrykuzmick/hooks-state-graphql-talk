import User from '../models/User';
import Color from '../models/Color';

export default {
  User: {
    color: obj => {
      return Color.findOne({ _id: obj.color });
    }
  },
  Query: {
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    color: async (_, args) => {
      return Color.findOne({ _id: args.id });
    },
    users: async () => {
      return User.find();
    },
    colors: async () => {
      return Color.find();
    }
  },
  Mutation: {
    createColor: async (_, args) => {
      const color = new Color({
        value: args.value
      });
      return color.save();
    },
    createUser: async (_, args) => {
      const colors = await Color.find();

      if (!colors.length) {
        throw new Error(`Can't create users if u don't have any colors :P`);
      }

      const color = colors[Math.floor(Math.random() * colors.length)];

      const user = new User({
        name: args.name,
        color
      });

      return user.save();
    }
  }
};
