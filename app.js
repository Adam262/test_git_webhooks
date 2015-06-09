require 'sinatra'
require 'json'

get '/hi' do
  'Hello world'
end

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end