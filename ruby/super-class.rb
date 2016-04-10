# coding: utf-8

class SuperClass
  def sayHello
    puts 'Hello!'
  end
end

class SubClass < SuperClass
  def sayHi
    puts 'Hi!'
  end
end

subClass = SubClass.new

subClass.sayHello
subClass.sayHi
