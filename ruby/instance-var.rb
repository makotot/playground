# coding: utf-8

class MyClass
  def name=(val)
    @name = val
  end

  def name
    @name
  end
end

myClass = MyClass.new
myClass.name = 'taro'
puts myClass.name
