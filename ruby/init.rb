# coding: utf-8

class MyClass
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

myClass = MyClass.new('Taro')
puts myClass.name
