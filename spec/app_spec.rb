ENV['RACK_ENV'] = 'test'

require_relative 'spec_helper'

describe 'SAX' do
  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  it "gets data" do
    get '/api/report/1'
    expect(last_response).to be_ok 
  end
end