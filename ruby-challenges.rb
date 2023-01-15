# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# Pseudocode
# input: array and a letter
# output: array of words
# process: I will create a method called does_include that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. I will utilize the select method to check the words in the array and the include? method to see if a word includes the letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def does_include(array, letter)
    array.select do |word|
        if word.include?(letter)
            word
        end
    end
end
p does_include(beverages_array, letter_o)
p does_include(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
# Pseudocode
# input: hash of arrays
# output: array of words in alphebetical order
# process: I will create a method called sorted_states that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. I will first access the values of the hash using .values, then use .flatten to turn the arrays into one single array of items. Then I will use sort to sort the array into alphabetical order.

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def sorted_states(array)
    array.values.flatten.sort { |a, b| a <=> b}
end
p sorted_states(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Pseudocode
# process: I will create a new class called Bike that has model in the initialize, wheels and current_speed have set default values. My bike_info method will output a string of info about the bike using string interpolation. My pedal_faster method will increase the current_speed of the bike by the number given. The brake method will decrease the current_speed by the number given, if the number is less than zero, it will set the number at 0.

class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "This #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster(num)
        @current_speed = num + @current_speed
    end
    def brake(num)
        @current_speed = @current_speed - num
        if @current_speed < 0
            0
        else
            @current_speed
        end
    end
end

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
my_bike = Bike.new('Trek')
p my_bike.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
p my_bike.pedal_faster(10)
# output: 10
# Expected output example: my_bike.pedal_faster(18) => 28
p my_bike.pedal_faster(18)
# output: 28
# Expected output example: my_bike.brake(5) => 23
p my_bike.brake(5)
# output: 23
# Expected output example: my_bike.brake(25) => 0
p my_bike.brake(25)
# output: 0
