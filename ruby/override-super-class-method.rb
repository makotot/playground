# coding: utf-8

class SuperClass
  def sayHello
    puts 'Hello! from SuperClass'
  end
end

class SubClass < SuperClass
  def sayHi
    puts 'Hi!'
  end

  def sayHello
    super
    puts 'Hello! from SubClass'
  end
end

subClass = SubClass.new

subClass.sayHello
subClass.sayHi
