# Euler's 2nd problem in ruby. Find the sum of the even valued terms in the fibonacchi sequence not exceeding four milion 


@sum = 0
def fib(first, second)
	if second <= 4000000
		if second%2 == 0
			@sum += second 
		end
		third = first+ second
		fib(second, third)
	else
		return @sum
	end
end


puts fib(0, 1)
