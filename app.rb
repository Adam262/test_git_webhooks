require 'sinatra'
require 'json'
require 'pry'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end