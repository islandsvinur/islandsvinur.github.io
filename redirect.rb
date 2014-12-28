#!/usr/bin/ruby

require 'rubygems'
require 'hobix'
require 'pathname'
require 'net/http'
require 'uri'

class Date
  def to_gm_time
    to_time(new_offset, :gm)
  end

  def to_local_time
    to_time(new_offset(DateTime.now.offset-offset), :local)
  end

  private
  def to_time(dest, method)
    #Convert a fraction of a day to a number of microseconds
    usec = (dest.sec_fraction * 60 * 60 * 24 * (10**6)).to_i
    Time.send(method, dest.year, dest.month, dest.day, dest.hour, dest.min,
              dest.sec, usec)
  end
end

links = []

Dir.glob('entries/**/*.yaml').each do |f|
	if (f =~ /^entries\/page/) 
		next 
	end
	entry = YAML::load_file(f)
	dir = File.dirname(f)
	filename = File.basename(f, '.yaml')

	date = entry.created.strftime('%Y/%m/%d')
	orig_path = "/#{dir}/#{filename}.html"
	# puts "\t\t\"^#{orig_path}$\" => \"/index.php/#{date}/#{filename}.html\", "
	link = "http://nogates.nl/index.php/#{date}/#{filename}.html"
	links << link
end

links.sort.each do |link|
	url = URI::parse(link)
	Net::HTTP.start(url.host, url.port) do |http|
		result = http.head(url.path)
		if (result.code != "200")
			puts "#{result.code} #{url}"
		end
	end
end
