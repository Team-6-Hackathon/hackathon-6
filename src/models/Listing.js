const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  id:: String, 
  name: String, 
  host_id: String, 
  host_name: String, 
  neighbourhood: String, 
  latitude: String,
  longitude: String, 
  room_type: String, 
  price: String, 
  minimum_nights: String,
  number_of_reviews: String, 
  last_review: String, 
  reviews_per_month: String,
  calculated_host_listings_count: String, 
  availability_365: String
})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing; 
