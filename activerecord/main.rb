require 'active_record'

ActiveRecord::Base.establish_connection(
  "adapter" => "sqlite3",
  "database" => "./blog.db"
)

class Post < ActiveRecord::Base
end

#post = Post.new(:title => "title1", :body => "hello1")

#post = Post.new
#post.title = "title2"
#post.body = "hello2"

#post = Post.new do |p|
#  p.title = "title3"
#  p.body = "hello3"
#end
#
#post.save

#Post.create(:title => "title4", :body => "hello4")

#p Post.all
#p Post.first
#p Post.last.title
#p Post.find(3)
#p Post.find_by_title("title2")
#p Post.find_by_title_and_id("title2", 2)
#p Post.where(:title => "title1")
#p Post.where(:title => "title1", :id => 1)
#p Post.where("title = ? and id = ?", "title1", 1)
#p Post.where("title = :title and id = :id", {:title => "title1", :id => 1})
#p Post.where("id > ?", 2)
p Post.where("body like ?", "hello%")
