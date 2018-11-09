require 'json'
require 'pry'
require 'faker'
require 'rest-client'

User.destroy_all
Artwork.destroy_all
puts 'Creating USER Info'
name_hash = []
email_hash = []
10.times do
  name_hash.push(Faker::BojackHorseman.unique.character)
end
email_hash = []
name_hash.each do |names|

  email_hash.push(names.gsub(' ', '_') + "@gmail.com")
  email_hash.map!(&:downcase)
end
puts "createing users"
  i = 0
  10.times do
  User.create!(name:name_hash[i],email: email_hash[i], bio:Faker::BojackHorseman.unique.quote)
  i += 1
end
puts "done with users"
imagearr_total = []
culturearr_total = []
titlearr_total = []
classificationarr_total = []
peoplearr_total = []
divisionarr_total = []
provenancearr_total = []
dimensionsarr_total = []
datedarr_total = []
accessionyeararr_total = []
mediumarr_total = []
periodarr_total = []
i = 1
100.times do
art_url = "https://api.harvardartmuseums.org/object?apikey=4977dd20-e36e-11e8-a6f8-fdf848b15d51&page=#{i}"
response_string = RestClient.get(art_url){|response, request, result| response}

if response_string.code == 200
response_hash = JSON.parse(response_string)

filterarr = response_hash["records"].reject {|x| x["primaryimageurl"]===nil}

imagearr = filterarr.collect do |program|
  program["primaryimageurl"]
end

culturearr = filterarr.collect do |art|
  art["culture"]
end

titlearr = filterarr.collect do |art|
  art["title"]
end
divisionarr = filterarr.collect do |art|
  art["division"]
end

classificationarr = filterarr.collect {|art|
  art["classification"]}

provenancearr = filterarr.collect {|art|
  art["provenance"]}
periodarr = filterarr.collect {|art|
  art["period"]}
dimensionsarr = filterarr.collect {|art|
  art["dimensions"]}

datedarr = filterarr.collect {|art|
  art["dated"]}
accessionyeararr = filterarr.collect {|art|
  art["accessionyear"]}
mediumarr = filterarr.collect {|art|
  art["medium"]}
peoplearr = filterarr.collect {|art|
  if art["people"]
    art["people"][0]["name"]
  end
}
end

imagearr_total.push(imagearr)
culturearr_total.push(culturearr)
titlearr_total.push(titlearr)
classificationarr_total.push(classificationarr)
peoplearr_total.push(peoplearr)
divisionarr_total.push(divisionarr)
provenancearr_total.push(provenancearr)
dimensionsarr_total.push(dimensionsarr)
datedarr_total.push(datedarr)
accessionyeararr_total.push(accessionyeararr)
mediumarr_total.push(mediumarr)
periodarr_total.push(periodarr)
i +=1
end

puts "-------------------------------"
puts "creating Artworks"
j =0
510.times do
  Artwork.create!(title:titlearr_total.flatten[j], img: imagearr_total.flatten[j], culture: culturearr_total.flatten[j],classification: classificationarr_total.flatten[j],people: peoplearr_total.flatten[j],division: divisionarr_total.flatten[j],description: provenancearr_total.flatten[j], diminsions: dimensionsarr_total.flatten[j],dated: datedarr_total.flatten[j],
  accessionyear: accessionyeararr_total.flatten[j],period:periodarr_total.flatten[j], medium: mediumarr_total.flatten[j])
  j +=1
end
puts "done with artworks"
