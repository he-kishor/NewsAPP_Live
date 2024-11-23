import json
filepath='sample.json'
with open(filepath,"r") as file:
    file_content = file.read()
    # Parse the JSON content
    data = json.loads(file_content)

    
print(data)