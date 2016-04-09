# coding: utf-8

class MyClass
  attr_accessor :name

  def showName
    puts name
  end
end

myClass = MyClass.new
myClass.name = 'john'

myClass.showName
