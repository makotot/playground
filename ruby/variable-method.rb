# coding: utf-8

foo = 'foo in toplevel'

def displayFoo
  puts foo # NameError: 参照できない
end

puts foo

displayFoo
