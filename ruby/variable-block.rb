# coding: utf-8

greeting = "Hello"
people = ['taro', 'jiro']

people.each do |person|
  puts greeting + ' ' + person
end

puts person # Nameerror: 参照できない
