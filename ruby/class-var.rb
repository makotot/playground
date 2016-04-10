# coding: utf-8

class MyClass
  @@name = 'Taro'

  def showName
    puts @@name
  end

  def self.showNameClassMethod
    puts @@name
  end
end

myClass = MyClass.new

myClass.showName
MyClass.showNameClassMethod
