/*

User

  has_one : stream
  has_one : viewing
  has_many : comments
  has_many : followers
  has_many : followings
  has_many : videos
  has_many : subscribers
  has_one : streamer

--------------------------------
Stream
  timestamp

  streamer_id

  belongs_to : user


  has_many : viewers
  has_many : comments

--------------------------------
Viewer
  stream_id
  user_id

  belongs_to : stream
  belongs_to : user


--------------------------------
Comment
  text
  time_stamp
  user_id
  stream_id

  belongs_to : user
  belongs_to : stream


--------------------------------
Follower
  streamer_id
  follower_id

  belongs_to : user
  belongs_to : user

--------------------------------
Videos
  owner_id

  belongs_to : user

--------------------------------
Subscribe
  streamer_id
  subscriber_id

  belongs_to : user
  belongs_to : user

*/