# coding: utf-8

class MyClass
  attr_accessor :name

  def self.pair
    [MyClass.new, MyClass.new]
  end
end

puts MyClass.pair
