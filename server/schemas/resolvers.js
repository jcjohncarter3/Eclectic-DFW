const { User, Venue } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => User.find(),
    venues: async () => Venue.find(),
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const isValid = await user.isCorrectPassword(password);
      if (!isValid) throw new Error('Invalid credentials');
      const token = signToken(user);
      return { token, user };
    },
    addVenue: async (_, { name, location, description, liveMusic }) => {
      return Venue.create({ name, location, description, liveMusic });
    },
  },
};

module.exports = resolvers;






// const Venue = require('../models/Venue');
// const LiveMusic = require('../models/LiveMusic');
// const Review = require('../models/Review');

// const resolvers = {
//   Query: {
//     venues: async () => {
//       return await Venue.find();
//     },
//     liveMusic: async () => {
//       return await LiveMusic.find();
//     },
//   },

//   Mutation: {
//     addReview: async (_, { venueId, reviewText }) => {
//       const newReview = new Review({
//         text: reviewText,
//         user: 'Anonymous',
//         venueId,
//       });

//       await newReview.save();

//       const venue = await Venue.findById(venueId);
//       venue.reviews.push(newReview);
//       await venue.save();

//       return newReview;
//     },
//   },

