require 'sinatra'

get '/' do
  erb :index
end

get '/api/report/1' do
  content_type :json
  File.read('data/data.json')
end
