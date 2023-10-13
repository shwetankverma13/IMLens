from fastapi import FastAPI
from google.cloud import vision
import pandas as pd

from IMLensBe.similarity import check_matching

app = FastAPI()

key_file = "IMLensBe/imagineers-401514-e95b9f361c9f.json"

client = vision.ImageAnnotatorClient.from_service_account_json(key_file)


@app.get("/SkuList")
async def skuList():
    try:
        excel_file = "IMLensBe/Dataset.xlsx"
        df = pd.read_excel(excel_file)

        data = []
        for index, row in df.iterrows():
            print(dict(row))
            data.append(dict(row))

        return {"data": data}
    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}


@app.post("/uploadfile/")
async def create_upload_file(file_url: str):
    responseLable = client.annotate_image({
        'image': {'source': {'image_uri': file_url}},
        'features': [{'type_': vision.Feature.Type.LABEL_DETECTION}]
    })

    responseObject = client.annotate_image({
        'image': {'source': {'image_uri': file_url}},
        'features': [{'type_': vision.Feature.Type.OBJECT_LOCALIZATION}]
    })

    lableList = []
    if responseLable.label_annotations:
        for label_annotation in responseLable.label_annotations:
            lableList.append(label_annotation.description)
    if responseObject.localized_object_annotations:
        for lable_object in responseObject.localized_object_annotations:
            if lable_object.name not in lableList:
                lableList.append(lable_object.name)

    excel_file = "IMLensBe/Dataset.xlsx"
    df = pd.read_excel(excel_file)

    data = []
    for index, row in df.iterrows():
        print(dict(row))
        data.append(dict(row))

    filtered_products = [product for product in data if product['Labels'] in lableList]

    matchedData = []
    for each_item in filtered_products:
        matching = check_matching(file_url, each_item["URL"])
        if matching:
            matchedData.append(each_item)

    return {"name": filtered_products}
