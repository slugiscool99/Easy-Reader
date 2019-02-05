import json

def input_from_file(file):
	json = #add from file
	sanatize(json)

def sanatize(json):
	for batch in json["responses"]:
		text = batch["fullTextAnnotation"]["text"]
		pages = batch["fullTextAnnotation"]["pages"]		
		
		for page in pages:
			blocks = page["blocks"]
			#scrutinize lowest and highest blocks
			#numbers on every line? probably citations
			#very short? probably a title
			

