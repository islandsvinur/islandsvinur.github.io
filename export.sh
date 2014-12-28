#!/usr/bin/ruby

require 'rubygems'
require 'rexml/document'
require 'hobix'

weblog = Hobix::Weblog.load('hobix.yaml')
puts "<entries>"
weblog.storage.find( :all => true ).each do |entry|
puts entry.inspect
	puts "	<entry>"
	puts "		<title>#{entry.title}</title>"
	puts "		<created>#{entry.created.to_i * 1000}</created>"
	puts "		<modified>#{entry.modified.to_i * 1000}</modified>"
	puts "		<tags>"
	entry.tags.each do |tag|
		puts "			<tag>#{tag}</tag>"
	end
	puts "		</tags>"
	puts "		<content>#{entry.content}</content>"
	puts "	</entry>"
end

puts "</entries>"

