# This is the solution to euler's 1st problem in ruby. 

sum = 0

100.times do |i|
	if (i % 3 == 0 || i % 5 == 0)  
		sum += i 
	end
end

puts sum 