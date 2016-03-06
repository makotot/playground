# coding: utf-8

def hello (names)
  names.each do |name|
    puts "Hello, #{ name.upcase }"
  end
end

items = ['taro', 'jiro', 'saburo']

hello(items)
