require 'bundler'
Bundler.require

require 'json'
require 'securerandom'

class App < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    haml :index
  end

  post '/' do
    @inquiry_token = SecureRandom.hex(2).upcase # gain 4-digits hex token

    content = {}
    content[:inquery_token] = @inquiry_token
    content[:http_headers] = request.env.select{ |header, value| header.start_with?('HTTP_') }

    payload = {
      token: ENV['SLACK_TOKEN'],
      channels: ENV['SLACK_CHANNEL'],
      content: JSON.pretty_generate(content)
    }

    RestClient.post('https://slack.com/api/files.upload', payload)

    haml :thanks
  end
end
