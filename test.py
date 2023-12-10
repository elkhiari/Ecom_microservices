import json
import random
from faker import Faker

fake = Faker()

# Function to generate a random JSON object
def generate_json_object(id):
    command_id = id
    reference = f"cmd-{command_id}"
    total_paye = round(random.uniform(50.0, 200.0), 2)
    date_commande = fake.date_time_this_year()
    
    # Generate random client information
    client = {
        "fullName": fake.name(),
        "email": fake.email(),
        "address": fake.address(),
        "phoneNumber": fake.phone_number(),
    }

    # Generate random command item information
    commande_item = []
    for i in range(random.randint(1, 5)):
        item = {
            "id": i + 1,
            "quantity": random.randint(1, 10),
            "prix": round(random.uniform(5.0, 50.0), 2),
            "produit": {
                "id": random.randint(1, 100),
                "reference": fake.uuid4(),
                "libelle": fake.word(),
                "categorieProduitDto": {
                    "id": random.randint(101, 200),
                    "libele": fake.word(),
                },
            },
        }
        commande_item.append(item)

    # Create the JSON object
    json_object = {
        "id": command_id,
        "reference": reference,
        "totalPaye": total_paye,
        "dateCommande": date_commande.isoformat(),
        "client": json.dumps(client),
        "commandeItem": json.dumps(commande_item),
    }

    return json_object

# Generate 1000 JSON objects with different IDs
json_objects = [generate_json_object(i) for i in range(1, 1001)]

# Save the JSON objects to a file
with open("json_objects.json", "w") as json_file:
    json.dump(json_objects, json_file, indent=2)

print("JSON objects generated and saved to json_objects.json")
