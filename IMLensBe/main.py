import types

from fastapi import FastAPI, File, UploadFile, Form
from google.cloud import vision
import pandas as pd


app = FastAPI()

key_file = "IMLensBe/imagineers-401514-e95b9f361c9f.json"

# credentials = service_account.Credentials.from_service_account_file(key_file)

# Set the credentials as the default credentials for your application
# google.auth.default(credentials)

client = vision.ImageAnnotatorClient.from_service_account_json(key_file)

@app.get("/SkuList")
async def skuList():
    try:
        # Step 2: Read the Excel file
        excel_file = "IMLensBe/Dataset_ (1).xlsx"
        df = pd.read_excel(excel_file)

        # Step 4: Convert the DataFrame to a list of dictionaries
        items = [
            {'name': 'Item 1', 'description': 'Description 1'},
            {"name": "Item 2", "description": "Description 2"},
        ]
        data = []
        for index, row in df.iterrows():
            print(dict(row))
            data.append(dict(row))

        print(type(data))
        print(type(items))
        items = data
        return {"data": items}
    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):

    response = client.annotate_image({
        'image': {'source': {'image_uri': 'https://assets.wfcdn.com/im/08324047/resize-h300-w300%5Ecompr-r85/1388/138887812/Leonie+52%27%27+Ceiling+Fan+with+Light+Kit.jpg'}},
        'features': [{'type_': vision.Feature.Type.OBJECT_LOCALIZATION}]
    })
    print(response.localized_object_annotations[0].name)
    return {"name" : response.localized_object_annotations[0].name}



