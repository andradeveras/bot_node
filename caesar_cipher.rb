puts "Digite sua senha:"
senha = gets.chomp

crypto =  senha.chars.map { |char| char.ord + 5 }
new_crypto = crypto.map { |valor| valor.chr}
puts new_crypto.join