def substrings(string, arr)
  wordCount = {}
  arr.each{|dicWord| wordCount[dicWord] = 0
    string.downcase.split(" ").each{|word|
      word.include?(dicWord) ? wordCount[dicWord] += 1 : nil
    }
  }
  return wordCount
end

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]


puts substrings("Howdy partner, sit down! How's it going?", dictionary)

